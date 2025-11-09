import  {
    AFuture, ARFuture 
}
from './aether_future';
import  {
    DataIn, DataOut, DataInOut, DataInOutStatic 
}
from './aether_datainout';
import  {
    FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture 
}
from './aether_fastmeta';
import  {
    UUID, URI, Uint8Array, AConsumer 
}
from './aether_types';
import  {
    ToString, AString 
}
from './aether_astring';
import * as Impl from './aether_api_impl';
export enum AetherCodec  {
    TCP = 'TCP', UDP = 'UDP', WS = 'WS', WSS = 'WSS' 
}
export namespace AetherCodec  {
    export const META: FastMetaType<AetherCodec> = new Impl.AetherCodecMetaImpl();
    
}
export enum CryptoLib  {
    SODIUM = 'SODIUM', HYDROGEN = 'HYDROGEN' 
}
export namespace CryptoLib  {
    export const META: FastMetaType<CryptoLib> = new Impl.CryptoLibMetaImpl();
    
}
export enum PowMethod  {
    AE_BCRYPT_CRC32 = 'AE_BCRYPT_CRC32' 
}
export namespace PowMethod  {
    export const META: FastMetaType<PowMethod> = new Impl.PowMethodMetaImpl();
    
}
export enum Status  {
    PENDING = 'PENDING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' 
}
export namespace Status  {
    export const META: FastMetaType<Status> = new Impl.StatusMetaImpl();
    
}
/**
 * Represents the abstract IPAddress structure.
 */
export abstract class IPAddress implements ToString  {
    public abstract getAetherTypeId(): number;
    public static readonly META: FastMetaType<IPAddress> = new Impl.IPAddressMetaImpl();
    /**
     * Creates an instance of IPAddress.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of IPAddress.
     * @param {IPAddress | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddress | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of IPAddress with another object.
     * @param {IPAddress | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddress | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddress)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('IPAddress(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract Key structure.
 */
export abstract class Key implements ToString  {
    public abstract getAetherTypeId(): number;
    public static readonly META: FastMetaType<Key> = new Impl.KeyMetaImpl();
    /**
     * Creates an instance of Key.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of Key.
     * @param {Key | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Key | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of Key with another object.
     * @param {Key | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Key | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Key)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('Key(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeyAsymmetric structure.
 */
export abstract class KeyAsymmetric extends Key implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeyAsymmetric> = new Impl.KeyAsymmetricMetaImpl();
    /**
     * Creates an instance of KeyAsymmetric.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeyAsymmetric.
     * @param {KeyAsymmetric | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyAsymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeyAsymmetric with another object.
     * @param {KeyAsymmetric | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeyAsymmetric | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeyAsymmetric)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeyAsymmetric(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeyAsymmetricPrivate structure.
 */
export abstract class KeyAsymmetricPrivate extends KeyAsymmetric implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeyAsymmetricPrivate> = new Impl.KeyAsymmetricPrivateMetaImpl();
    /**
     * Creates an instance of KeyAsymmetricPrivate.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeyAsymmetricPrivate.
     * @param {KeyAsymmetricPrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyAsymmetricPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeyAsymmetricPrivate with another object.
     * @param {KeyAsymmetricPrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeyAsymmetricPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeyAsymmetricPrivate)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeyAsymmetricPrivate(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeyAsymmetricPublic structure.
 */
export abstract class KeyAsymmetricPublic extends KeyAsymmetric implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeyAsymmetricPublic> = new Impl.KeyAsymmetricPublicMetaImpl();
    /**
     * Creates an instance of KeyAsymmetricPublic.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeyAsymmetricPublic.
     * @param {KeyAsymmetricPublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyAsymmetricPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeyAsymmetricPublic with another object.
     * @param {KeyAsymmetricPublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeyAsymmetricPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeyAsymmetricPublic)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeyAsymmetricPublic(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeySign structure.
 */
export abstract class KeySign extends Key implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeySign> = new Impl.KeySignMetaImpl();
    /**
     * Creates an instance of KeySign.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeySign.
     * @param {KeySign | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeySign with another object.
     * @param {KeySign | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeySign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeySign)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeySign(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeySignPrivate structure.
 */
export abstract class KeySignPrivate extends KeySign implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeySignPrivate> = new Impl.KeySignPrivateMetaImpl();
    /**
     * Creates an instance of KeySignPrivate.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeySignPrivate.
     * @param {KeySignPrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeySignPrivate with another object.
     * @param {KeySignPrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeySignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeySignPrivate)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeySignPrivate(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeySignPublic structure.
 */
export abstract class KeySignPublic extends KeySign implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeySignPublic> = new Impl.KeySignPublicMetaImpl();
    /**
     * Creates an instance of KeySignPublic.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeySignPublic.
     * @param {KeySignPublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeySignPublic with another object.
     * @param {KeySignPublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeySignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeySignPublic)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeySignPublic(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract KeySymmetric structure.
 */
export abstract class KeySymmetric extends Key implements ToString  {
    public override getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<KeySymmetric> = new Impl.KeySymmetricMetaImpl();
    /**
     * Creates an instance of KeySymmetric.
     */
    constructor()  {
        super();
        
    }
    /**
     * Calculates a hash code for a static instance of KeySymmetric.
     * @param {KeySymmetric | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of KeySymmetric with another object.
     * @param {KeySymmetric | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeySymmetric | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof KeySymmetric)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('KeySymmetric(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract PairKeys structure.
 */
export abstract class PairKeys implements ToString  {
    public abstract getAetherTypeId(): number;
    public static readonly META: FastMetaType<PairKeys> = new Impl.PairKeysMetaImpl();
    /**
     * Creates an instance of PairKeys.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of PairKeys.
     * @param {PairKeys | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: PairKeys | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of PairKeys with another object.
     * @param {PairKeys | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeys | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeys)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('PairKeys(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract Sign structure.
 */
export abstract class Sign implements ToString  {
    public abstract getAetherTypeId(): number;
    public static readonly META: FastMetaType<Sign> = new Impl.SignMetaImpl();
    /**
     * Creates an instance of Sign.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of Sign.
     * @param {Sign | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Sign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of Sign with another object.
     * @param {Sign | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Sign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Sign)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('Sign(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract Telemetry structure.
 */
export abstract class Telemetry implements ToString  {
    public abstract getAetherTypeId(): number;
    public static readonly META: FastMetaType<Telemetry> = new Impl.TelemetryMetaImpl();
    /**
     * Creates an instance of Telemetry.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of Telemetry.
     * @param {Telemetry | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Telemetry | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of Telemetry with another object.
     * @param {Telemetry | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Telemetry | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Telemetry)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('Telemetry(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the abstract WorkProofConfig structure.
 */
export abstract class WorkProofConfig implements ToString  {
    public abstract getAetherTypeId(): number;
    public static readonly META: FastMetaType<WorkProofConfig> = new Impl.WorkProofConfigMetaImpl();
    /**
     * Creates an instance of WorkProofConfig.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of WorkProofConfig.
     * @param {WorkProofConfig | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: WorkProofConfig | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return obj.hashCode();
        
    }
    /**
     * Compares a static instance of WorkProofConfig with another object.
     * @param {WorkProofConfig | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: WorkProofConfig | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof WorkProofConfig)) return false;
        const t1 = (v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1;
        const t2 = (v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1;
        if (t1 === -1 || t1 !== t2) return false;
        return (v1.constructor as any).staticEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public abstract hashCode(): number;
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public abstract equals(other: any): boolean;
    public toString(result: AString): AString  {
        result.add('WorkProofConfig(');
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the AccessCheckPair structure.
 */
export class AccessCheckPair implements ToString  {
    public readonly sourceUid: UUID;
    public readonly targetUid: UUID;
    public static readonly META_BODY: FastMetaType<AccessCheckPair> = new Impl.AccessCheckPairMetaBodyImpl();
    public static readonly META: FastMetaType<AccessCheckPair> = AccessCheckPair.META_BODY;
    /**
     * Creates an instance of AccessCheckPair.
     * @param sourceUid - UUID
     * @param targetUid - UUID
     */
    constructor(sourceUid: UUID, targetUid: UUID)  {
        this.sourceUid = sourceUid;
        this.targetUid = targetUid;
        
    }
    public getSourceUid(): UUID  {
        return this.sourceUid;
        
    }
    public getTargetUid(): UUID  {
        return this.targetUid;
        
    }
    /**
     * Calculates a hash code for a static instance of AccessCheckPair.
     * @param {AccessCheckPair | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AccessCheckPair | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.sourceUid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.targetUid);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of AccessCheckPair with another object.
     * @param {AccessCheckPair | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AccessCheckPair | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessCheckPair)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.sourceUid, v2.sourceUid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.targetUid, v2.targetUid)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AccessCheckPair.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AccessCheckPair.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('AccessCheckPair(');
        result.add('sourceUid:').add(this.sourceUid);
        result.add(', ');
        result.add('targetUid:').add(this.targetUid);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the AccessCheckResult structure.
 */
export class AccessCheckResult implements ToString  {
    public readonly sourceUid: UUID;
    public readonly targetUid: UUID;
    public readonly hasAccess: boolean;
    public static readonly META_BODY: FastMetaType<AccessCheckResult> = new Impl.AccessCheckResultMetaBodyImpl();
    public static readonly META: FastMetaType<AccessCheckResult> = AccessCheckResult.META_BODY;
    /**
     * Creates an instance of AccessCheckResult.
     * @param sourceUid - UUID
     * @param targetUid - UUID
     * @param hasAccess - boolean
     */
    constructor(sourceUid: UUID, targetUid: UUID, hasAccess: boolean)  {
        this.sourceUid = sourceUid;
        this.targetUid = targetUid;
        this.hasAccess = hasAccess;
        
    }
    public getSourceUid(): UUID  {
        return this.sourceUid;
        
    }
    public getTargetUid(): UUID  {
        return this.targetUid;
        
    }
    public isHasAccess(): boolean  {
        return this.hasAccess;
        
    }
    /**
     * Calculates a hash code for a static instance of AccessCheckResult.
     * @param {AccessCheckResult | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AccessCheckResult | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.sourceUid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.targetUid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBoolean.hashCode(obj.hasAccess);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of AccessCheckResult with another object.
     * @param {AccessCheckResult | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AccessCheckResult | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessCheckResult)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.sourceUid, v2.sourceUid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.targetUid, v2.targetUid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBoolean.equals(v1.hasAccess, v2.hasAccess)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AccessCheckResult.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AccessCheckResult.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('AccessCheckResult(');
        result.add('sourceUid:').add(this.sourceUid);
        result.add(', ');
        result.add('targetUid:').add(this.targetUid);
        result.add(', ');
        result.add('hasAccess:').add(this.hasAccess);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the AccessGroup structure.
 */
export class AccessGroup implements ToString  {
    public readonly owner: UUID;
    public readonly id: bigint;
    public readonly data: UUID[];
    public static readonly META_BODY: FastMetaType<AccessGroup> = new Impl.AccessGroupMetaBodyImpl();
    public static readonly META: FastMetaType<AccessGroup> = AccessGroup.META_BODY;
    /**
     * Creates an instance of AccessGroup.
     * @param owner - UUID
     * @param id - bigint
     * @param data - UUID[]
     */
    constructor(owner: UUID, id: bigint, data: UUID[])  {
        this.owner = owner;
        this.id = id;
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type AccessGroup.`);
        
    }
    public getOwner(): UUID  {
        return this.owner;
        
    }
    public getId(): bigint  {
        return this.id;
        
    }
    public getData(): UUID[]  {
        return this.data;
        
    }
    public dataContains(el: UUID): boolean  {
        return (this.data as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AccessGroup.
     * @param {AccessGroup | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AccessGroup | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.owner);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBigInt.hashCode(obj.id);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(FastMeta.hashCodeEqualsHelper.typeUUID.hashCode, FastMeta.hashCodeEqualsHelper.typeUUID.equals).hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of AccessGroup with another object.
     * @param {AccessGroup | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AccessGroup | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof AccessGroup)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.owner, v2.owner)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBigInt.equals(v1.id, v2.id)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(FastMeta.hashCodeEqualsHelper.typeUUID.hashCode, FastMeta.hashCodeEqualsHelper.typeUUID.equals).equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AccessGroup.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AccessGroup.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('AccessGroup(');
        result.add('owner:').add(this.owner);
        result.add(', ');
        result.add('id:').add(this.id);
        result.add(', ');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the ClientInfo structure.
 */
export class ClientInfo implements ToString  {
    public readonly uid: UUID;
    public readonly cloud: Cloud;
    public static readonly META_BODY: FastMetaType<ClientInfo> = new Impl.ClientInfoMetaBodyImpl();
    public static readonly META: FastMetaType<ClientInfo> = ClientInfo.META_BODY;
    /**
     * Creates an instance of ClientInfo.
     * @param uid - UUID
     * @param cloud - Cloud
     */
    constructor(uid: UUID, cloud: Cloud)  {
        this.uid = uid;
        this.cloud = cloud;
        if (cloud === null || cloud === undefined) throw new Error(`Field 'cloud' cannot be null for type ClientInfo.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getCloud(): Cloud  {
        return this.cloud;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientInfo.
     * @param {ClientInfo | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientInfo | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.uid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.cloud);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of ClientInfo with another object.
     * @param {ClientInfo | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientInfo | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientInfo)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.uid, v2.uid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientInfo.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientInfo.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('ClientInfo(');
        result.add('uid:').add(this.uid);
        result.add(', ');
        result.add('cloud:').add(this.cloud);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the ClientStateForSave structure.
 */
export class ClientStateForSave implements ToString  {
    public readonly registrationUri: URI[];
    public readonly servers: ServerDescriptor[];
    public readonly clients: ClientInfo[];
    public readonly rootSigners: Key[];
    public readonly cryptoLib: CryptoLib;
    public readonly pingDuration: bigint;
    public readonly parentUid: UUID;
    public readonly countServersForRegistration: number;
    public readonly timeoutForConnectToRegistrationServer: bigint;
    public readonly uid: UUID;
    public readonly alias: UUID;
    public readonly masterKey: Key;
    public static readonly META_BODY: FastMetaType<ClientStateForSave> = new Impl.ClientStateForSaveMetaBodyImpl();
    public static readonly META: FastMetaType<ClientStateForSave> = ClientStateForSave.META_BODY;
    /**
     * Creates an instance of ClientStateForSave.
     * @param registrationUri - URI[]
     * @param servers - ServerDescriptor[]
     * @param clients - ClientInfo[]
     * @param rootSigners - Key[]
     * @param cryptoLib - CryptoLib
     * @param pingDuration - bigint
     * @param parentUid - UUID
     * @param countServersForRegistration - number
     * @param timeoutForConnectToRegistrationServer - bigint
     * @param uid - UUID
     * @param alias - UUID
     * @param masterKey - Key
     */
    constructor(registrationUri: URI[], servers: ServerDescriptor[], clients: ClientInfo[], rootSigners: Key[], cryptoLib: CryptoLib, pingDuration: bigint, parentUid: UUID, countServersForRegistration: number, timeoutForConnectToRegistrationServer: bigint, uid: UUID, alias: UUID, masterKey: Key)  {
        this.registrationUri = registrationUri;
        this.servers = servers;
        this.clients = clients;
        this.rootSigners = rootSigners;
        this.cryptoLib = cryptoLib;
        this.pingDuration = pingDuration;
        this.parentUid = parentUid;
        this.countServersForRegistration = countServersForRegistration;
        this.timeoutForConnectToRegistrationServer = timeoutForConnectToRegistrationServer;
        this.uid = uid;
        this.alias = alias;
        this.masterKey = masterKey;
        if (registrationUri === null || registrationUri === undefined) throw new Error(`Field 'registrationUri' cannot be null for type ClientStateForSave.`);
        if (servers === null || servers === undefined) throw new Error(`Field 'servers' cannot be null for type ClientStateForSave.`);
        if (clients === null || clients === undefined) throw new Error(`Field 'clients' cannot be null for type ClientStateForSave.`);
        if (rootSigners === null || rootSigners === undefined) throw new Error(`Field 'rootSigners' cannot be null for type ClientStateForSave.`);
        if (cryptoLib === null || cryptoLib === undefined) throw new Error(`Field 'cryptoLib' cannot be null for type ClientStateForSave.`);
        if (masterKey === null || masterKey === undefined) throw new Error(`Field 'masterKey' cannot be null for type ClientStateForSave.`);
        
    }
    public getRegistrationUri(): URI[]  {
        return this.registrationUri;
        
    }
    public registrationUriContains(el: URI): boolean  {
        return (this.registrationUri as URI[]).includes(el as any);
        
    }
    public getServers(): ServerDescriptor[]  {
        return this.servers;
        
    }
    public serversContains(el: ServerDescriptor): boolean  {
        return (this.servers as ServerDescriptor[]).includes(el as any);
        
    }
    public getClients(): ClientInfo[]  {
        return this.clients;
        
    }
    public clientsContains(el: ClientInfo): boolean  {
        return (this.clients as ClientInfo[]).includes(el as any);
        
    }
    public getRootSigners(): Key[]  {
        return this.rootSigners;
        
    }
    public rootSignersContains(el: Key): boolean  {
        return (this.rootSigners as Key[]).includes(el as any);
        
    }
    public getCryptoLib(): CryptoLib  {
        return this.cryptoLib;
        
    }
    public getPingDuration(): bigint  {
        return this.pingDuration;
        
    }
    public getParentUid(): UUID  {
        return this.parentUid;
        
    }
    public getCountServersForRegistration(): number  {
        return this.countServersForRegistration;
        
    }
    public getTimeoutForConnectToRegistrationServer(): bigint  {
        return this.timeoutForConnectToRegistrationServer;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getAlias(): UUID  {
        return this.alias;
        
    }
    public getMasterKey(): Key  {
        return this.masterKey;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientStateForSave.
     * @param {ClientStateForSave | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientStateForSave | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(FastMeta.hashCodeEqualsHelper.typeString.hashCode, FastMeta.hashCodeEqualsHelper.typeString.equals).hashCode(obj.registrationUri);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(ServerDescriptor.staticHashCode, ServerDescriptor.staticEquals).hashCode(obj.servers);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(ClientInfo.staticHashCode, ClientInfo.staticEquals).hashCode(obj.clients);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(Key.staticHashCode, Key.staticEquals).hashCode(obj.rootSigners);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.cryptoLib);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBigInt.hashCode(obj.pingDuration);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.parentUid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.countServersForRegistration);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBigInt.hashCode(obj.timeoutForConnectToRegistrationServer);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.uid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.alias);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.masterKey);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of ClientStateForSave with another object.
     * @param {ClientStateForSave | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientStateForSave | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ClientStateForSave)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(FastMeta.hashCodeEqualsHelper.typeString.hashCode, FastMeta.hashCodeEqualsHelper.typeString.equals).equals(v1.registrationUri, v2.registrationUri)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(ServerDescriptor.staticHashCode, ServerDescriptor.staticEquals).equals(v1.servers, v2.servers)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(ClientInfo.staticHashCode, ClientInfo.staticEquals).equals(v1.clients, v2.clients)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(Key.staticHashCode, Key.staticEquals).equals(v1.rootSigners, v2.rootSigners)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.cryptoLib, v2.cryptoLib)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBigInt.equals(v1.pingDuration, v2.pingDuration)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.parentUid, v2.parentUid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.countServersForRegistration, v2.countServersForRegistration)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBigInt.equals(v1.timeoutForConnectToRegistrationServer, v2.timeoutForConnectToRegistrationServer)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.uid, v2.uid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.alias, v2.alias)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.masterKey, v2.masterKey)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientStateForSave.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientStateForSave.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('ClientStateForSave(');
        result.add('registrationUri:').add(this.registrationUri);
        result.add(', ');
        result.add('servers:').add(this.servers);
        result.add(', ');
        result.add('clients:').add(this.clients);
        result.add(', ');
        result.add('rootSigners:').add(this.rootSigners);
        result.add(', ');
        result.add('cryptoLib:').add(this.cryptoLib);
        result.add(', ');
        result.add('pingDuration:').add(this.pingDuration);
        result.add(', ');
        result.add('parentUid:').add(this.parentUid);
        result.add(', ');
        result.add('countServersForRegistration:').add(this.countServersForRegistration);
        result.add(', ');
        result.add('timeoutForConnectToRegistrationServer:').add(this.timeoutForConnectToRegistrationServer);
        result.add(', ');
        result.add('uid:').add(this.uid);
        result.add(', ');
        result.add('alias:').add(this.alias);
        result.add(', ');
        result.add('masterKey:').add(this.masterKey);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the Cloud structure.
 */
export class Cloud implements ToString  {
    public readonly data: number[];
    public static readonly META_BODY: FastMetaType<Cloud> = new Impl.CloudMetaBodyImpl();
    public static readonly META: FastMetaType<Cloud> = Cloud.META_BODY;
    /**
     * Creates an instance of Cloud.
     * @param data - number[]
     */
    constructor(data: number[])  {
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type Cloud.`);
        
    }
    public getData(): number[]  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as number[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of Cloud.
     * @param {Cloud | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Cloud | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(FastMeta.hashCodeEqualsHelper.typeNumber.hashCode, FastMeta.hashCodeEqualsHelper.typeNumber.equals).hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of Cloud with another object.
     * @param {Cloud | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Cloud | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Cloud)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(FastMeta.hashCodeEqualsHelper.typeNumber.hashCode, FastMeta.hashCodeEqualsHelper.typeNumber.equals).equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return Cloud.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return Cloud.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('Cloud(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the CoderAndPort structure.
 */
export class CoderAndPort implements ToString  {
    public readonly codec: AetherCodec;
    public readonly port: number;
    public static readonly META_BODY: FastMetaType<CoderAndPort> = new Impl.CoderAndPortMetaBodyImpl();
    public static readonly META: FastMetaType<CoderAndPort> = CoderAndPort.META_BODY;
    /**
     * Creates an instance of CoderAndPort.
     * @param codec - AetherCodec
     * @param port - number
     */
    constructor(codec: AetherCodec, port: number)  {
        this.codec = codec;
        this.port = port;
        if (codec === null || codec === undefined) throw new Error(`Field 'codec' cannot be null for type CoderAndPort.`);
        
    }
    public getCodec(): AetherCodec  {
        return this.codec;
        
    }
    public getPort(): number  {
        return this.port;
        
    }
    /**
     * Calculates a hash code for a static instance of CoderAndPort.
     * @param {CoderAndPort | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: CoderAndPort | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.codec);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.port);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of CoderAndPort with another object.
     * @param {CoderAndPort | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: CoderAndPort | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof CoderAndPort)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.codec, v2.codec)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.port, v2.port)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return CoderAndPort.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return CoderAndPort.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('CoderAndPort(');
        result.add('codec:').add(this.codec);
        result.add(', ');
        result.add('port:').add(this.port);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the FinishResultGlobalRegServerApi structure.
 */
export class FinishResultGlobalRegServerApi implements ToString  {
    public readonly alias: UUID;
    public readonly uid: UUID;
    public readonly cloud: Cloud;
    public static readonly META_BODY: FastMetaType<FinishResultGlobalRegServerApi> = new Impl.FinishResultGlobalRegServerApiMetaBodyImpl();
    public static readonly META: FastMetaType<FinishResultGlobalRegServerApi> = FinishResultGlobalRegServerApi.META_BODY;
    /**
     * Creates an instance of FinishResultGlobalRegServerApi.
     * @param alias - UUID
     * @param uid - UUID
     * @param cloud - Cloud
     */
    constructor(alias: UUID, uid: UUID, cloud: Cloud)  {
        this.alias = alias;
        this.uid = uid;
        this.cloud = cloud;
        if (cloud === null || cloud === undefined) throw new Error(`Field 'cloud' cannot be null for type FinishResultGlobalRegServerApi.`);
        
    }
    public getAlias(): UUID  {
        return this.alias;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getCloud(): Cloud  {
        return this.cloud;
        
    }
    /**
     * Calculates a hash code for a static instance of FinishResultGlobalRegServerApi.
     * @param {FinishResultGlobalRegServerApi | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: FinishResultGlobalRegServerApi | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.alias);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.uid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.cloud);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of FinishResultGlobalRegServerApi with another object.
     * @param {FinishResultGlobalRegServerApi | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: FinishResultGlobalRegServerApi | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof FinishResultGlobalRegServerApi)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.alias, v2.alias)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.uid, v2.uid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return FinishResultGlobalRegServerApi.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return FinishResultGlobalRegServerApi.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('FinishResultGlobalRegServerApi(');
        result.add('alias:').add(this.alias);
        result.add(', ');
        result.add('uid:').add(this.uid);
        result.add(', ');
        result.add('cloud:').add(this.cloud);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the HydrogenCurvePrivate structure.
 *
 * @aetherTypeId 1
 */
export class HydrogenCurvePrivate extends KeyAsymmetricPrivate implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<HydrogenCurvePrivate> = new Impl.HydrogenCurvePrivateMetaBodyImpl();
    public static readonly META: FastMetaType<HydrogenCurvePrivate> = new Impl.HydrogenCurvePrivateMetaImpl();
    /**
     * Creates an instance of HydrogenCurvePrivate.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type HydrogenCurvePrivate.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenCurvePrivate must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of HydrogenCurvePrivate.
     * @param {HydrogenCurvePrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: HydrogenCurvePrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of HydrogenCurvePrivate with another object.
     * @param {HydrogenCurvePrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenCurvePrivate)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return HydrogenCurvePrivate.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return HydrogenCurvePrivate.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('HydrogenCurvePrivate(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the HydrogenCurvePublic structure.
 *
 * @aetherTypeId 2
 */
export class HydrogenCurvePublic extends KeyAsymmetricPublic implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 2;
        
    }
    public static readonly META_BODY: FastMetaType<HydrogenCurvePublic> = new Impl.HydrogenCurvePublicMetaBodyImpl();
    public static readonly META: FastMetaType<HydrogenCurvePublic> = new Impl.HydrogenCurvePublicMetaImpl();
    /**
     * Creates an instance of HydrogenCurvePublic.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type HydrogenCurvePublic.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenCurvePublic must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of HydrogenCurvePublic.
     * @param {HydrogenCurvePublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: HydrogenCurvePublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of HydrogenCurvePublic with another object.
     * @param {HydrogenCurvePublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenCurvePublic)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return HydrogenCurvePublic.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return HydrogenCurvePublic.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('HydrogenCurvePublic(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the HydrogenSecretBox structure.
 *
 * @aetherTypeId 3
 */
export class HydrogenSecretBox extends KeySymmetric implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 3;
        
    }
    public static readonly META_BODY: FastMetaType<HydrogenSecretBox> = new Impl.HydrogenSecretBoxMetaBodyImpl();
    public static readonly META: FastMetaType<HydrogenSecretBox> = new Impl.HydrogenSecretBoxMetaImpl();
    /**
     * Creates an instance of HydrogenSecretBox.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type HydrogenSecretBox.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenSecretBox must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of HydrogenSecretBox.
     * @param {HydrogenSecretBox | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: HydrogenSecretBox | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of HydrogenSecretBox with another object.
     * @param {HydrogenSecretBox | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenSecretBox | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenSecretBox)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return HydrogenSecretBox.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return HydrogenSecretBox.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('HydrogenSecretBox(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the HydrogenSignPrivate structure.
 *
 * @aetherTypeId 4
 */
export class HydrogenSignPrivate extends KeySignPrivate implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 4;
        
    }
    public static readonly META_BODY: FastMetaType<HydrogenSignPrivate> = new Impl.HydrogenSignPrivateMetaBodyImpl();
    public static readonly META: FastMetaType<HydrogenSignPrivate> = new Impl.HydrogenSignPrivateMetaImpl();
    /**
     * Creates an instance of HydrogenSignPrivate.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type HydrogenSignPrivate.`);
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type HydrogenSignPrivate must be 64 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of HydrogenSignPrivate.
     * @param {HydrogenSignPrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: HydrogenSignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of HydrogenSignPrivate with another object.
     * @param {HydrogenSignPrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenSignPrivate)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return HydrogenSignPrivate.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return HydrogenSignPrivate.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('HydrogenSignPrivate(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the HydrogenSignPublic structure.
 *
 * @aetherTypeId 5
 */
export class HydrogenSignPublic extends KeySignPublic implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 5;
        
    }
    public static readonly META_BODY: FastMetaType<HydrogenSignPublic> = new Impl.HydrogenSignPublicMetaBodyImpl();
    public static readonly META: FastMetaType<HydrogenSignPublic> = new Impl.HydrogenSignPublicMetaImpl();
    /**
     * Creates an instance of HydrogenSignPublic.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type HydrogenSignPublic.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenSignPublic must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of HydrogenSignPublic.
     * @param {HydrogenSignPublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: HydrogenSignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of HydrogenSignPublic with another object.
     * @param {HydrogenSignPublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof HydrogenSignPublic)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return HydrogenSignPublic.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return HydrogenSignPublic.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('HydrogenSignPublic(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the IPAddressAndPorts structure.
 */
export class IPAddressAndPorts implements ToString  {
    public readonly address: IPAddress;
    public readonly coderAndPorts: CoderAndPort[];
    public static readonly META_BODY: FastMetaType<IPAddressAndPorts> = new Impl.IPAddressAndPortsMetaBodyImpl();
    public static readonly META: FastMetaType<IPAddressAndPorts> = IPAddressAndPorts.META_BODY;
    /**
     * Creates an instance of IPAddressAndPorts.
     * @param address - IPAddress
     * @param coderAndPorts - CoderAndPort[]
     */
    constructor(address: IPAddress, coderAndPorts: CoderAndPort[])  {
        this.address = address;
        this.coderAndPorts = coderAndPorts;
        if (address === null || address === undefined) throw new Error(`Field 'address' cannot be null for type IPAddressAndPorts.`);
        if (coderAndPorts === null || coderAndPorts === undefined) throw new Error(`Field 'coderAndPorts' cannot be null for type IPAddressAndPorts.`);
        
    }
    public getAddress(): IPAddress  {
        return this.address;
        
    }
    public getCoderAndPorts(): CoderAndPort[]  {
        return this.coderAndPorts;
        
    }
    public coderAndPortsContains(el: CoderAndPort): boolean  {
        return (this.coderAndPorts as CoderAndPort[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of IPAddressAndPorts.
     * @param {IPAddressAndPorts | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddressAndPorts | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.address);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(CoderAndPort.staticHashCode, CoderAndPort.staticEquals).hashCode(obj.coderAndPorts);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of IPAddressAndPorts with another object.
     * @param {IPAddressAndPorts | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressAndPorts | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressAndPorts)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.address, v2.address)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(CoderAndPort.staticHashCode, CoderAndPort.staticEquals).equals(v1.coderAndPorts, v2.coderAndPorts)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IPAddressAndPorts.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IPAddressAndPorts.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('IPAddressAndPorts(');
        result.add('address:').add(this.address);
        result.add(', ');
        result.add('coderAndPorts:').add(this.coderAndPorts);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the IPAddressAndPortsList structure.
 */
export class IPAddressAndPortsList implements ToString  {
    public readonly addresses: IPAddressAndPorts[];
    public static readonly META_BODY: FastMetaType<IPAddressAndPortsList> = new Impl.IPAddressAndPortsListMetaBodyImpl();
    public static readonly META: FastMetaType<IPAddressAndPortsList> = IPAddressAndPortsList.META_BODY;
    /**
     * Creates an instance of IPAddressAndPortsList.
     * @param addresses - IPAddressAndPorts[]
     */
    constructor(addresses: IPAddressAndPorts[])  {
        this.addresses = addresses;
        if (addresses === null || addresses === undefined) throw new Error(`Field 'addresses' cannot be null for type IPAddressAndPortsList.`);
        
    }
    public getAddresses(): IPAddressAndPorts[]  {
        return this.addresses;
        
    }
    public addressesContains(el: IPAddressAndPorts): boolean  {
        return (this.addresses as IPAddressAndPorts[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of IPAddressAndPortsList.
     * @param {IPAddressAndPortsList | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddressAndPortsList | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayObject(IPAddressAndPorts.staticHashCode, IPAddressAndPorts.staticEquals).hashCode(obj.addresses);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of IPAddressAndPortsList with another object.
     * @param {IPAddressAndPortsList | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressAndPortsList | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressAndPortsList)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayObject(IPAddressAndPorts.staticHashCode, IPAddressAndPorts.staticEquals).equals(v1.addresses, v2.addresses)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IPAddressAndPortsList.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IPAddressAndPortsList.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('IPAddressAndPortsList(');
        result.add('addresses:').add(this.addresses);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the IPAddressV4 structure.
 *
 * @aetherTypeId 1
 */
export class IPAddressV4 extends IPAddress implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<IPAddressV4> = new Impl.IPAddressV4MetaBodyImpl();
    public static readonly META: FastMetaType<IPAddressV4> = new Impl.IPAddressV4MetaImpl();
    /**
     * Creates an instance of IPAddressV4.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type IPAddressV4.`);
        if (data.length !== 4) throw new Error(`Array length for field 'data' in type IPAddressV4 must be 4 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of IPAddressV4.
     * @param {IPAddressV4 | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddressV4 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of IPAddressV4 with another object.
     * @param {IPAddressV4 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressV4 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressV4)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IPAddressV4.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IPAddressV4.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('IPAddressV4(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the IPAddressV6 structure.
 *
 * @aetherTypeId 2
 */
export class IPAddressV6 extends IPAddress implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 2;
        
    }
    public static readonly META_BODY: FastMetaType<IPAddressV6> = new Impl.IPAddressV6MetaBodyImpl();
    public static readonly META: FastMetaType<IPAddressV6> = new Impl.IPAddressV6MetaImpl();
    /**
     * Creates an instance of IPAddressV6.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type IPAddressV6.`);
        if (data.length !== 6) throw new Error(`Array length for field 'data' in type IPAddressV6 must be 6 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of IPAddressV6.
     * @param {IPAddressV6 | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddressV6 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of IPAddressV6 with another object.
     * @param {IPAddressV6 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressV6 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof IPAddressV6)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IPAddressV6.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IPAddressV6.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('IPAddressV6(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the Message structure.
 */
export class Message implements ToString  {
    public readonly uid: UUID;
    public readonly data: Uint8Array;
    public static readonly META_BODY: FastMetaType<Message> = new Impl.MessageMetaBodyImpl();
    public static readonly META: FastMetaType<Message> = Message.META_BODY;
    /**
     * Creates an instance of Message.
     * @param uid - UUID
     * @param data - Uint8Array
     */
    constructor(uid: UUID, data: Uint8Array)  {
        this.uid = uid;
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type Message.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of Message.
     * @param {Message | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Message | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.uid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of Message with another object.
     * @param {Message | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Message | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Message)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.uid, v2.uid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return Message.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return Message.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('Message(');
        result.add('uid:').add(this.uid);
        result.add(', ');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the MoneyOperation structure.
 */
export class MoneyOperation implements ToString  {
    public readonly id: bigint;
    public readonly from: UUID;
    public readonly to: UUID;
    public readonly amount: bigint;
    public readonly time: bigint;
    public readonly credit: boolean;
    public readonly status: Status;
    public static readonly META_BODY: FastMetaType<MoneyOperation> = new Impl.MoneyOperationMetaBodyImpl();
    public static readonly META: FastMetaType<MoneyOperation> = MoneyOperation.META_BODY;
    /**
     * Creates an instance of MoneyOperation.
     * @param id - bigint
     * @param from - UUID
     * @param to - UUID
     * @param amount - bigint
     * @param time - bigint
     * @param credit - boolean
     * @param status - Status
     */
    constructor(id: bigint, from: UUID, to: UUID, amount: bigint, time: bigint, credit: boolean, status: Status)  {
        this.id = id;
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.time = time;
        this.credit = credit;
        this.status = status;
        if (status === null || status === undefined) throw new Error(`Field 'status' cannot be null for type MoneyOperation.`);
        
    }
    public getId(): bigint  {
        return this.id;
        
    }
    public getFrom(): UUID  {
        return this.from;
        
    }
    public getTo(): UUID  {
        return this.to;
        
    }
    public getAmount(): bigint  {
        return this.amount;
        
    }
    public getTime(): bigint  {
        return this.time;
        
    }
    public isCredit(): boolean  {
        return this.credit;
        
    }
    public getStatus(): Status  {
        return this.status;
        
    }
    /**
     * Calculates a hash code for a static instance of MoneyOperation.
     * @param {MoneyOperation | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: MoneyOperation | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBigInt.hashCode(obj.id);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.from);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.to);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBigInt.hashCode(obj.amount);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBigInt.hashCode(obj.time);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeBoolean.hashCode(obj.credit);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.status);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of MoneyOperation with another object.
     * @param {MoneyOperation | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: MoneyOperation | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof MoneyOperation)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBigInt.equals(v1.id, v2.id)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.from, v2.from)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.to, v2.to)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBigInt.equals(v1.amount, v2.amount)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBigInt.equals(v1.time, v2.time)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeBoolean.equals(v1.credit, v2.credit)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.status, v2.status)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return MoneyOperation.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return MoneyOperation.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('MoneyOperation(');
        result.add('id:').add(this.id);
        result.add(', ');
        result.add('from:').add(this.from);
        result.add(', ');
        result.add('to:').add(this.to);
        result.add(', ');
        result.add('amount:').add(this.amount);
        result.add(', ');
        result.add('time:').add(this.time);
        result.add(', ');
        result.add('credit:').add(this.credit);
        result.add(', ');
        result.add('status:').add(this.status);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the PairKeysAsym structure.
 *
 * @aetherTypeId 1
 */
export class PairKeysAsym extends PairKeys implements ToString  {
    public readonly privateKey: Key;
    public readonly publicKey: Key;
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<PairKeysAsym> = new Impl.PairKeysAsymMetaBodyImpl();
    public static readonly META: FastMetaType<PairKeysAsym> = new Impl.PairKeysAsymMetaImpl();
    /**
     * Creates an instance of PairKeysAsym.
     * @param privateKey - Key
     * @param publicKey - Key
     */
    constructor(privateKey: Key, publicKey: Key)  {
        super();
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        if (privateKey === null || privateKey === undefined) throw new Error(`Field 'privateKey' cannot be null for type PairKeysAsym.`);
        if (publicKey === null || publicKey === undefined) throw new Error(`Field 'publicKey' cannot be null for type PairKeysAsym.`);
        
    }
    public getPrivateKey(): Key  {
        return this.privateKey;
        
    }
    public getPublicKey(): Key  {
        return this.publicKey;
        
    }
    /**
     * Calculates a hash code for a static instance of PairKeysAsym.
     * @param {PairKeysAsym | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: PairKeysAsym | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.privateKey);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.publicKey);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of PairKeysAsym with another object.
     * @param {PairKeysAsym | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysAsym | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysAsym)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.privateKey, v2.privateKey)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.publicKey, v2.publicKey)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return PairKeysAsym.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return PairKeysAsym.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('PairKeysAsym(');
        result.add('privateKey:').add(this.privateKey);
        result.add(', ');
        result.add('publicKey:').add(this.publicKey);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the PairKeysAsymSigned structure.
 *
 * @aetherTypeId 2
 */
export class PairKeysAsymSigned extends PairKeys implements ToString  {
    public readonly privateKey: Key;
    public readonly publicKey: SignedKey;
    public override getAetherTypeId(): number  {
        return 2;
        
    }
    public static readonly META_BODY: FastMetaType<PairKeysAsymSigned> = new Impl.PairKeysAsymSignedMetaBodyImpl();
    public static readonly META: FastMetaType<PairKeysAsymSigned> = new Impl.PairKeysAsymSignedMetaImpl();
    /**
     * Creates an instance of PairKeysAsymSigned.
     * @param privateKey - Key
     * @param publicKey - SignedKey
     */
    constructor(privateKey: Key, publicKey: SignedKey)  {
        super();
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        if (privateKey === null || privateKey === undefined) throw new Error(`Field 'privateKey' cannot be null for type PairKeysAsymSigned.`);
        if (publicKey === null || publicKey === undefined) throw new Error(`Field 'publicKey' cannot be null for type PairKeysAsymSigned.`);
        
    }
    public getPrivateKey(): Key  {
        return this.privateKey;
        
    }
    public getPublicKey(): SignedKey  {
        return this.publicKey;
        
    }
    /**
     * Calculates a hash code for a static instance of PairKeysAsymSigned.
     * @param {PairKeysAsymSigned | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: PairKeysAsymSigned | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.privateKey);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.publicKey);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of PairKeysAsymSigned with another object.
     * @param {PairKeysAsymSigned | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysAsymSigned | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysAsymSigned)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.privateKey, v2.privateKey)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.publicKey, v2.publicKey)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return PairKeysAsymSigned.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return PairKeysAsymSigned.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('PairKeysAsymSigned(');
        result.add('privateKey:').add(this.privateKey);
        result.add(', ');
        result.add('publicKey:').add(this.publicKey);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the PairKeysSign structure.
 *
 * @aetherTypeId 3
 */
export class PairKeysSign extends PairKeys implements ToString  {
    public readonly privateKey: Key;
    public readonly publicKey: Key;
    public override getAetherTypeId(): number  {
        return 3;
        
    }
    public static readonly META_BODY: FastMetaType<PairKeysSign> = new Impl.PairKeysSignMetaBodyImpl();
    public static readonly META: FastMetaType<PairKeysSign> = new Impl.PairKeysSignMetaImpl();
    /**
     * Creates an instance of PairKeysSign.
     * @param privateKey - Key
     * @param publicKey - Key
     */
    constructor(privateKey: Key, publicKey: Key)  {
        super();
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        if (privateKey === null || privateKey === undefined) throw new Error(`Field 'privateKey' cannot be null for type PairKeysSign.`);
        if (publicKey === null || publicKey === undefined) throw new Error(`Field 'publicKey' cannot be null for type PairKeysSign.`);
        
    }
    public getPrivateKey(): Key  {
        return this.privateKey;
        
    }
    public getPublicKey(): Key  {
        return this.publicKey;
        
    }
    /**
     * Calculates a hash code for a static instance of PairKeysSign.
     * @param {PairKeysSign | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: PairKeysSign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.privateKey);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.publicKey);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of PairKeysSign with another object.
     * @param {PairKeysSign | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysSign | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof PairKeysSign)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.privateKey, v2.privateKey)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.publicKey, v2.publicKey)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return PairKeysSign.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return PairKeysSign.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('PairKeysSign(');
        result.add('privateKey:').add(this.privateKey);
        result.add(', ');
        result.add('publicKey:').add(this.publicKey);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the ServerDescriptor structure.
 */
export class ServerDescriptor implements ToString  {
    public readonly id: number;
    public readonly ipAddress: IPAddressAndPortsList;
    public static readonly META_BODY: FastMetaType<ServerDescriptor> = new Impl.ServerDescriptorMetaBodyImpl();
    public static readonly META: FastMetaType<ServerDescriptor> = ServerDescriptor.META_BODY;
    /**
     * Creates an instance of ServerDescriptor.
     * @param id - number
     * @param ipAddress - IPAddressAndPortsList
     */
    constructor(id: number, ipAddress: IPAddressAndPortsList)  {
        this.id = id;
        this.ipAddress = ipAddress;
        if (ipAddress === null || ipAddress === undefined) throw new Error(`Field 'ipAddress' cannot be null for type ServerDescriptor.`);
        
    }
    public getId(): number  {
        return this.id;
        
    }
    public getIpAddress(): IPAddressAndPortsList  {
        return this.ipAddress;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerDescriptor.
     * @param {ServerDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.id);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.ipAddress);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of ServerDescriptor with another object.
     * @param {ServerDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof ServerDescriptor)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.id, v2.id)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.ipAddress, v2.ipAddress)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerDescriptor.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerDescriptor.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('ServerDescriptor(');
        result.add('id:').add(this.id);
        result.add(', ');
        result.add('ipAddress:').add(this.ipAddress);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SignAE_ED25519 structure.
 *
 * @aetherTypeId 1
 */
export class SignAE_ED25519 extends Sign implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<SignAE_ED25519> = new Impl.SignAE_ED25519MetaBodyImpl();
    public static readonly META: FastMetaType<SignAE_ED25519> = new Impl.SignAE_ED25519MetaImpl();
    /**
     * Creates an instance of SignAE_ED25519.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SignAE_ED25519.`);
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type SignAE_ED25519 must be 64 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SignAE_ED25519.
     * @param {SignAE_ED25519 | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SignAE_ED25519 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SignAE_ED25519 with another object.
     * @param {SignAE_ED25519 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SignAE_ED25519 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SignAE_ED25519)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SignAE_ED25519.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SignAE_ED25519.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SignAE_ED25519(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SignedKey structure.
 */
export class SignedKey implements ToString  {
    public readonly key: Key;
    public readonly sign: Sign;
    public static readonly META_BODY: FastMetaType<SignedKey> = new Impl.SignedKeyMetaBodyImpl();
    public static readonly META: FastMetaType<SignedKey> = SignedKey.META_BODY;
    /**
     * Creates an instance of SignedKey.
     * @param key - Key
     * @param sign - Sign
     */
    constructor(key: Key, sign: Sign)  {
        this.key = key;
        this.sign = sign;
        if (key === null || key === undefined) throw new Error(`Field 'key' cannot be null for type SignedKey.`);
        if (sign === null || sign === undefined) throw new Error(`Field 'sign' cannot be null for type SignedKey.`);
        
    }
    public getKey(): Key  {
        return this.key;
        
    }
    public getSign(): Sign  {
        return this.sign;
        
    }
    /**
     * Calculates a hash code for a static instance of SignedKey.
     * @param {SignedKey | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SignedKey | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.key);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.sign);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SignedKey with another object.
     * @param {SignedKey | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SignedKey | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SignedKey)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.key, v2.key)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.sign, v2.sign)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SignedKey.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SignedKey.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SignedKey(');
        result.add('key:').add(this.key);
        result.add(', ');
        result.add('sign:').add(this.sign);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SignHYDROGEN structure.
 *
 * @aetherTypeId 2
 */
export class SignHYDROGEN extends Sign implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 2;
        
    }
    public static readonly META_BODY: FastMetaType<SignHYDROGEN> = new Impl.SignHYDROGENMetaBodyImpl();
    public static readonly META: FastMetaType<SignHYDROGEN> = new Impl.SignHYDROGENMetaImpl();
    /**
     * Creates an instance of SignHYDROGEN.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SignHYDROGEN.`);
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type SignHYDROGEN must be 64 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SignHYDROGEN.
     * @param {SignHYDROGEN | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SignHYDROGEN | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SignHYDROGEN with another object.
     * @param {SignHYDROGEN | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SignHYDROGEN | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SignHYDROGEN)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SignHYDROGEN.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SignHYDROGEN.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SignHYDROGEN(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SodiumChacha20Poly1305 structure.
 *
 * @aetherTypeId 6
 */
export class SodiumChacha20Poly1305 extends KeySymmetric implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 6;
        
    }
    public static readonly META_BODY: FastMetaType<SodiumChacha20Poly1305> = new Impl.SodiumChacha20Poly1305MetaBodyImpl();
    public static readonly META: FastMetaType<SodiumChacha20Poly1305> = new Impl.SodiumChacha20Poly1305MetaImpl();
    /**
     * Creates an instance of SodiumChacha20Poly1305.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SodiumChacha20Poly1305.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumChacha20Poly1305 must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SodiumChacha20Poly1305.
     * @param {SodiumChacha20Poly1305 | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SodiumChacha20Poly1305 | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SodiumChacha20Poly1305 with another object.
     * @param {SodiumChacha20Poly1305 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumChacha20Poly1305 | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumChacha20Poly1305)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SodiumChacha20Poly1305.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SodiumChacha20Poly1305.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SodiumChacha20Poly1305(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SodiumCurvePrivate structure.
 *
 * @aetherTypeId 7
 */
export class SodiumCurvePrivate extends KeyAsymmetricPrivate implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 7;
        
    }
    public static readonly META_BODY: FastMetaType<SodiumCurvePrivate> = new Impl.SodiumCurvePrivateMetaBodyImpl();
    public static readonly META: FastMetaType<SodiumCurvePrivate> = new Impl.SodiumCurvePrivateMetaImpl();
    /**
     * Creates an instance of SodiumCurvePrivate.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SodiumCurvePrivate.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumCurvePrivate must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SodiumCurvePrivate.
     * @param {SodiumCurvePrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SodiumCurvePrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SodiumCurvePrivate with another object.
     * @param {SodiumCurvePrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumCurvePrivate)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SodiumCurvePrivate.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SodiumCurvePrivate.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SodiumCurvePrivate(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SodiumCurvePublic structure.
 *
 * @aetherTypeId 8
 */
export class SodiumCurvePublic extends KeyAsymmetricPublic implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 8;
        
    }
    public static readonly META_BODY: FastMetaType<SodiumCurvePublic> = new Impl.SodiumCurvePublicMetaBodyImpl();
    public static readonly META: FastMetaType<SodiumCurvePublic> = new Impl.SodiumCurvePublicMetaImpl();
    /**
     * Creates an instance of SodiumCurvePublic.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SodiumCurvePublic.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumCurvePublic must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SodiumCurvePublic.
     * @param {SodiumCurvePublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SodiumCurvePublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SodiumCurvePublic with another object.
     * @param {SodiumCurvePublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumCurvePublic)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SodiumCurvePublic.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SodiumCurvePublic.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SodiumCurvePublic(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SodiumSignPrivate structure.
 *
 * @aetherTypeId 9
 */
export class SodiumSignPrivate extends KeySignPrivate implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 9;
        
    }
    public static readonly META_BODY: FastMetaType<SodiumSignPrivate> = new Impl.SodiumSignPrivateMetaBodyImpl();
    public static readonly META: FastMetaType<SodiumSignPrivate> = new Impl.SodiumSignPrivateMetaImpl();
    /**
     * Creates an instance of SodiumSignPrivate.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SodiumSignPrivate.`);
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type SodiumSignPrivate must be 64 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SodiumSignPrivate.
     * @param {SodiumSignPrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SodiumSignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SodiumSignPrivate with another object.
     * @param {SodiumSignPrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumSignPrivate)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SodiumSignPrivate.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SodiumSignPrivate.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SodiumSignPrivate(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the SodiumSignPublic structure.
 *
 * @aetherTypeId 10
 */
export class SodiumSignPublic extends KeySignPublic implements ToString  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 10;
        
    }
    public static readonly META_BODY: FastMetaType<SodiumSignPublic> = new Impl.SodiumSignPublicMetaBodyImpl();
    public static readonly META: FastMetaType<SodiumSignPublic> = new Impl.SodiumSignPublicMetaImpl();
    /**
     * Creates an instance of SodiumSignPublic.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type SodiumSignPublic.`);
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumSignPublic must be 32 but was $ {
            data ? data.length : 'null/undefined'
        }
        .`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of SodiumSignPublic.
     * @param {SodiumSignPublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: SodiumSignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.data);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of SodiumSignPublic with another object.
     * @param {SodiumSignPublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof SodiumSignPublic)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.data, v2.data)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return SodiumSignPublic.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return SodiumSignPublic.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('SodiumSignPublic(');
        result.add('data:').add(this.data);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the TelemetryCPP structure.
 *
 * @aetherTypeId 1
 */
export class TelemetryCPP extends Telemetry implements ToString  {
    public readonly utm_id: number;
    public readonly blob: Uint8Array;
    public readonly lib_version: string;
    public readonly os: string;
    public readonly compiler: string;
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<TelemetryCPP> = new Impl.TelemetryCPPMetaBodyImpl();
    public static readonly META: FastMetaType<TelemetryCPP> = new Impl.TelemetryCPPMetaImpl();
    /**
     * Creates an instance of TelemetryCPP.
     * @param utm_id - number
     * @param blob - Uint8Array
     * @param lib_version - string
     * @param os - string
     * @param compiler - string
     */
    constructor(utm_id: number, blob: Uint8Array, lib_version: string, os: string, compiler: string)  {
        super();
        this.utm_id = utm_id;
        this.blob = blob;
        this.lib_version = lib_version;
        this.os = os;
        this.compiler = compiler;
        if (blob === null || blob === undefined) throw new Error(`Field 'blob' cannot be null for type TelemetryCPP.`);
        if (lib_version === null || lib_version === undefined) throw new Error(`Field 'lib_version' cannot be null for type TelemetryCPP.`);
        if (os === null || os === undefined) throw new Error(`Field 'os' cannot be null for type TelemetryCPP.`);
        if (compiler === null || compiler === undefined) throw new Error(`Field 'compiler' cannot be null for type TelemetryCPP.`);
        
    }
    public getUtm_id(): number  {
        return this.utm_id;
        
    }
    public getBlob(): Uint8Array  {
        return this.blob;
        
    }
    public blobContains(el: number): boolean  {
        return (this.blob as Uint8Array).includes(el as any);
        
    }
    public getLib_version(): string  {
        return this.lib_version;
        
    }
    public getOs(): string  {
        return this.os;
        
    }
    public getCompiler(): string  {
        return this.compiler;
        
    }
    /**
     * Calculates a hash code for a static instance of TelemetryCPP.
     * @param {TelemetryCPP | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: TelemetryCPP | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.utm_id);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeArrayByte.hashCode(obj.blob);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.lib_version);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.os);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.compiler);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of TelemetryCPP with another object.
     * @param {TelemetryCPP | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: TelemetryCPP | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof TelemetryCPP)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.utm_id, v2.utm_id)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeArrayByte.equals(v1.blob, v2.blob)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.lib_version, v2.lib_version)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.os, v2.os)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.compiler, v2.compiler)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return TelemetryCPP.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return TelemetryCPP.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('TelemetryCPP(');
        result.add('utm_id:').add(this.utm_id);
        result.add(', ');
        result.add('blob:').add(this.blob);
        result.add(', ');
        result.add('lib_version:').add(this.lib_version);
        result.add(', ');
        result.add('os:').add(this.os);
        result.add(', ');
        result.add('compiler:').add(this.compiler);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the UUIDAndCloud structure.
 */
export class UUIDAndCloud implements ToString  {
    public readonly uid: UUID;
    public readonly cloud: Cloud;
    public static readonly META_BODY: FastMetaType<UUIDAndCloud> = new Impl.UUIDAndCloudMetaBodyImpl();
    public static readonly META: FastMetaType<UUIDAndCloud> = UUIDAndCloud.META_BODY;
    /**
     * Creates an instance of UUIDAndCloud.
     * @param uid - UUID
     * @param cloud - Cloud
     */
    constructor(uid: UUID, cloud: Cloud)  {
        this.uid = uid;
        this.cloud = cloud;
        if (cloud === null || cloud === undefined) throw new Error(`Field 'cloud' cannot be null for type UUIDAndCloud.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getCloud(): Cloud  {
        return this.cloud;
        
    }
    /**
     * Calculates a hash code for a static instance of UUIDAndCloud.
     * @param {UUIDAndCloud | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: UUIDAndCloud | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeUUID.hashCode(obj.uid);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.cloud);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of UUIDAndCloud with another object.
     * @param {UUIDAndCloud | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: UUIDAndCloud | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof UUIDAndCloud)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeUUID.equals(v1.uid, v2.uid)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.cloud, v2.cloud)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return UUIDAndCloud.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return UUIDAndCloud.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('UUIDAndCloud(');
        result.add('uid:').add(this.uid);
        result.add(', ');
        result.add('cloud:').add(this.cloud);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the WorkProofBCrypt structure.
 *
 * @aetherTypeId 1
 */
export class WorkProofBCrypt extends WorkProofConfig implements ToString  {
    public readonly costBCrypt: number;
    public readonly poolSize: number;
    public readonly maxHashVal: number;
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<WorkProofBCrypt> = new Impl.WorkProofBCryptMetaBodyImpl();
    public static readonly META: FastMetaType<WorkProofBCrypt> = new Impl.WorkProofBCryptMetaImpl();
    /**
     * Creates an instance of WorkProofBCrypt.
     * @param costBCrypt - number
     * @param poolSize - number
     * @param maxHashVal - number
     */
    constructor(costBCrypt: number, poolSize: number, maxHashVal: number)  {
        super();
        this.costBCrypt = costBCrypt;
        this.poolSize = poolSize;
        this.maxHashVal = maxHashVal;
        
    }
    public getCostBCrypt(): number  {
        return this.costBCrypt;
        
    }
    public getPoolSize(): number  {
        return this.poolSize;
        
    }
    public getMaxHashVal(): number  {
        return this.maxHashVal;
        
    }
    /**
     * Calculates a hash code for a static instance of WorkProofBCrypt.
     * @param {WorkProofBCrypt | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: WorkProofBCrypt | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.costBCrypt);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.poolSize);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.maxHashVal);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of WorkProofBCrypt with another object.
     * @param {WorkProofBCrypt | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: WorkProofBCrypt | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof WorkProofBCrypt)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.costBCrypt, v2.costBCrypt)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.poolSize, v2.poolSize)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.maxHashVal, v2.maxHashVal)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return WorkProofBCrypt.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return WorkProofBCrypt.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('WorkProofBCrypt(');
        result.add('costBCrypt:').add(this.costBCrypt);
        result.add(', ');
        result.add('poolSize:').add(this.poolSize);
        result.add(', ');
        result.add('maxHashVal:').add(this.maxHashVal);
        result.add(')');
        return result;
        
    }
    
}
/**
 * Represents the WorkProofDTO structure.
 */
export class WorkProofDTO implements ToString  {
    public readonly salt: string;
    public readonly suffix: string;
    public readonly poolSize: number;
    public readonly maxHashVal: number;
    public readonly globalKey: SignedKey;
    public static readonly META_BODY: FastMetaType<WorkProofDTO> = new Impl.WorkProofDTOMetaBodyImpl();
    public static readonly META: FastMetaType<WorkProofDTO> = WorkProofDTO.META_BODY;
    /**
     * Creates an instance of WorkProofDTO.
     * @param salt - string
     * @param suffix - string
     * @param poolSize - number
     * @param maxHashVal - number
     * @param globalKey - SignedKey
     */
    constructor(salt: string, suffix: string, poolSize: number, maxHashVal: number, globalKey: SignedKey)  {
        this.salt = salt;
        this.suffix = suffix;
        this.poolSize = poolSize;
        this.maxHashVal = maxHashVal;
        this.globalKey = globalKey;
        if (salt === null || salt === undefined) throw new Error(`Field 'salt' cannot be null for type WorkProofDTO.`);
        if (suffix === null || suffix === undefined) throw new Error(`Field 'suffix' cannot be null for type WorkProofDTO.`);
        if (globalKey === null || globalKey === undefined) throw new Error(`Field 'globalKey' cannot be null for type WorkProofDTO.`);
        
    }
    public getSalt(): string  {
        return this.salt;
        
    }
    public getSuffix(): string  {
        return this.suffix;
        
    }
    public getPoolSize(): number  {
        return this.poolSize;
        
    }
    public getMaxHashVal(): number  {
        return this.maxHashVal;
        
    }
    public getGlobalKey(): SignedKey  {
        return this.globalKey;
        
    }
    /**
     * Calculates a hash code for a static instance of WorkProofDTO.
     * @param {WorkProofDTO | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: WorkProofDTO | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        let hash = 17;
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.salt);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeString.hashCode(obj.suffix);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.poolSize);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeNumber.hashCode(obj.maxHashVal);
        hash = 37 * hash + FastMeta.hashCodeEqualsHelper.typeObject.hashCode(obj.globalKey);
        return hash | 0;
        
    }
    /**
     * Compares a static instance of WorkProofDTO with another object.
     * @param {WorkProofDTO | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: WorkProofDTO | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof WorkProofDTO)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.salt, v2.salt)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeString.equals(v1.suffix, v2.suffix)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.poolSize, v2.poolSize)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeNumber.equals(v1.maxHashVal, v2.maxHashVal)) return false;
        if (!FastMeta.hashCodeEqualsHelper.typeObject.equals(v1.globalKey, v2.globalKey)) return false;
        return true;
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return WorkProofDTO.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return WorkProofDTO.staticEquals(this, other);
        
    }
    public toString(result: AString): AString  {
        result.add('WorkProofDTO(');
        result.add('salt:').add(this.salt);
        result.add(', ');
        result.add('suffix:').add(this.suffix);
        result.add(', ');
        result.add('poolSize:').add(this.poolSize);
        result.add(', ');
        result.add('maxHashVal:').add(this.maxHashVal);
        result.add(', ');
        result.add('globalKey:').add(this.globalKey);
        result.add(')');
        return result;
        
    }
    
}
export class ClientApiRegSafeStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of ClientApiRegSafeStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<ClientApiRegSafeStream> = new Impl.ClientApiRegSafeStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('ClientApiRegSafeStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, provider: BytesConverter, localApi: ClientApiRegSafe): void  {
        const decryptedData = provider(this.data);
        const dataInStatic = new DataInOutStatic(decryptedData);
        if (!(ClientApiRegSafe as any).META) throw new Error(`META not found for API type ClientApiRegSafe`);
        (ClientApiRegSafe as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<ClientApiRegSafeRemote>, sendFuture: AFuture): ClientApiRegSafeStream  {
        remote.executeAll(context, sendFuture);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new ClientApiRegSafeStream(encryptedData);
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<ClientApiRegSafeRemote>): ClientApiRegSafeStream  {
        const api = (ClientApiRegSafe as any).META.makeRemote(context);
        remoteConsumer(api);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new ClientApiRegSafeStream(encryptedData);
        
    }
    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): ClientApiRegSafeStream  {
        const encryptedData = provider(remoteData);
        return new ClientApiRegSafeStream(encryptedData);
        
    }
    
}
export class ClientApiStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of ClientApiStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<ClientApiStream> = new Impl.ClientApiStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('ClientApiStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, localApi: ServerApiByUid): void  {
        const dataInStatic = new DataInOutStatic(this.data);
        if (!(ServerApiByUid as any).META) throw new Error(`META not found for API type ServerApiByUid`);
        (ServerApiByUid as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, remote: RemoteApiFuture<ServerApiByUidRemote>, sendFuture: AFuture): ClientApiStream  {
        remote.executeAll(context, sendFuture);
        return new ClientApiStream(context.remoteDataToArrayAsArray());
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, remoteConsumer: AConsumer<ServerApiByUidRemote>): ClientApiStream  {
        const api = (ServerApiByUid as any).META.makeRemote(context);
        remoteConsumer(api);
        return new ClientApiStream(context.remoteDataToArrayAsArray());
        
    }
    
}
export class ClientInteractionClientStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of ClientInteractionClientStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<ClientInteractionClientStream> = new Impl.ClientInteractionClientStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('ClientInteractionClientStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, localApi: ServerApiByUidClient): void  {
        const dataInStatic = new DataInOutStatic(this.data);
        if (!(ServerApiByUidClient as any).META) throw new Error(`META not found for API type ServerApiByUidClient`);
        (ServerApiByUidClient as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, remote: RemoteApiFuture<ServerApiByUidClientRemote>, sendFuture: AFuture): ClientInteractionClientStream  {
        remote.executeAll(context, sendFuture);
        return new ClientInteractionClientStream(context.remoteDataToArrayAsArray());
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, remoteConsumer: AConsumer<ServerApiByUidClientRemote>): ClientInteractionClientStream  {
        const api = (ServerApiByUidClient as any).META.makeRemote(context);
        remoteConsumer(api);
        return new ClientInteractionClientStream(context.remoteDataToArrayAsArray());
        
    }
    
}
export class GlobalApiRegistrationServerRegistrationApi implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of GlobalApiRegistrationServerRegistrationApi.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<GlobalApiRegistrationServerRegistrationApi> = new Impl.GlobalApiRegistrationServerRegistrationApiMetaImpl();
    public toString(result: AString): AString  {
        result.add('GlobalApiRegistrationServerRegistrationApi(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, provider: BytesConverter, localApi: GlobalRegServerApi): void  {
        const decryptedData = provider(this.data);
        const dataInStatic = new DataInOutStatic(decryptedData);
        if (!(GlobalRegServerApi as any).META) throw new Error(`META not found for API type GlobalRegServerApi`);
        (GlobalRegServerApi as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<GlobalRegServerApiRemote>, sendFuture: AFuture): GlobalApiRegistrationServerRegistrationApi  {
        remote.executeAll(context, sendFuture);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new GlobalApiRegistrationServerRegistrationApi(encryptedData);
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<GlobalRegServerApiRemote>): GlobalApiRegistrationServerRegistrationApi  {
        const api = (GlobalRegServerApi as any).META.makeRemote(context);
        remoteConsumer(api);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new GlobalApiRegistrationServerRegistrationApi(encryptedData);
        
    }
    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): GlobalApiRegistrationServerRegistrationApi  {
        const encryptedData = provider(remoteData);
        return new GlobalApiRegistrationServerRegistrationApi(encryptedData);
        
    }
    
}
export class GlobalRegClientApiStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of GlobalRegClientApiStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<GlobalRegClientApiStream> = new Impl.GlobalRegClientApiStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('GlobalRegClientApiStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, provider: BytesConverter, localApi: GlobalRegClientApi): void  {
        const decryptedData = provider(this.data);
        const dataInStatic = new DataInOutStatic(decryptedData);
        if (!(GlobalRegClientApi as any).META) throw new Error(`META not found for API type GlobalRegClientApi`);
        (GlobalRegClientApi as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<GlobalRegClientApiRemote>, sendFuture: AFuture): GlobalRegClientApiStream  {
        remote.executeAll(context, sendFuture);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new GlobalRegClientApiStream(encryptedData);
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<GlobalRegClientApiRemote>): GlobalRegClientApiStream  {
        const api = (GlobalRegClientApi as any).META.makeRemote(context);
        remoteConsumer(api);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new GlobalRegClientApiStream(encryptedData);
        
    }
    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): GlobalRegClientApiStream  {
        const encryptedData = provider(remoteData);
        return new GlobalRegClientApiStream(encryptedData);
        
    }
    
}
export class LoginClientStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of LoginClientStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<LoginClientStream> = new Impl.LoginClientStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('LoginClientStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, provider: BytesConverter, localApi: ClientApiSafe): void  {
        const decryptedData = provider(this.data);
        const dataInStatic = new DataInOutStatic(decryptedData);
        if (!(ClientApiSafe as any).META) throw new Error(`META not found for API type ClientApiSafe`);
        (ClientApiSafe as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<ClientApiSafeRemote>, sendFuture: AFuture): LoginClientStream  {
        remote.executeAll(context, sendFuture);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new LoginClientStream(encryptedData);
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<ClientApiSafeRemote>): LoginClientStream  {
        const api = (ClientApiSafe as any).META.makeRemote(context);
        remoteConsumer(api);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new LoginClientStream(encryptedData);
        
    }
    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): LoginClientStream  {
        const encryptedData = provider(remoteData);
        return new LoginClientStream(encryptedData);
        
    }
    
}
export class LoginStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of LoginStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<LoginStream> = new Impl.LoginStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('LoginStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, provider: BytesConverter, localApi: AuthorizedApi): void  {
        const decryptedData = provider(this.data);
        const dataInStatic = new DataInOutStatic(decryptedData);
        if (!(AuthorizedApi as any).META) throw new Error(`META not found for API type AuthorizedApi`);
        (AuthorizedApi as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<AuthorizedApiRemote>, sendFuture: AFuture): LoginStream  {
        remote.executeAll(context, sendFuture);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new LoginStream(encryptedData);
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<AuthorizedApiRemote>): LoginStream  {
        const api = (AuthorizedApi as any).META.makeRemote(context);
        remoteConsumer(api);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new LoginStream(encryptedData);
        
    }
    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): LoginStream  {
        const encryptedData = provider(remoteData);
        return new LoginStream(encryptedData);
        
    }
    
}
export class ServerRegistrationApiStream implements ToString  {
    public readonly data: Uint8Array;
    /**
     * Creates an instance of ServerRegistrationApiStream.
     * @param data - The raw byte data for this stream.
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public static readonly META: FastMetaType<ServerRegistrationApiStream> = new Impl.ServerRegistrationApiStreamMetaImpl();
    public toString(result: AString): AString  {
        result.add('ServerRegistrationApiStream(').add('data:').add(this.data).add(')');
        return result;
        
    }
    public accept(context: FastFutureContext, provider: BytesConverter, localApi: ServerRegistrationApi): void  {
        const decryptedData = provider(this.data);
        const dataInStatic = new DataInOutStatic(decryptedData);
        if (!(ServerRegistrationApi as any).META) throw new Error(`META not found for API type ServerRegistrationApi`);
        (ServerRegistrationApi as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);
        
    }
    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<ServerRegistrationApiRemote>, sendFuture: AFuture): ServerRegistrationApiStream  {
        remote.executeAll(context, sendFuture);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new ServerRegistrationApiStream(encryptedData);
        
    }
    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<ServerRegistrationApiRemote>): ServerRegistrationApiStream  {
        const api = (ServerRegistrationApi as any).META.makeRemote(context);
        remoteConsumer(api);
        const encryptedData = provider(context.remoteDataToArrayAsArray());
        return new ServerRegistrationApiStream(encryptedData);
        
    }
    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): ServerRegistrationApiStream  {
        const encryptedData = provider(remoteData);
        return new ServerRegistrationApiStream(encryptedData);
        
    }
    
}
export interface ClientApiUnsafe  {
    /**
     * @param backId - number
     * @param data - LoginClientStream
     *
     * @aetherMethodId 3
     */
    sendSafeApiDataMulti(backId: number, data: LoginClientStream): void;
    /**
     * @param data - LoginClientStream
     *
     * @aetherMethodId 4
     */
    sendSafeApiData(data: LoginClientStream): void;
    
}
export namespace ClientApiUnsafe  {
    export const META: FastMetaApi<ClientApiUnsafe, ClientApiUnsafeRemote> = new Impl.ClientApiUnsafeMetaImpl();
    
}
export interface ClientApiUnsafeRemote extends ClientApiUnsafe, RemoteApi  {
    
}
export abstract class ClientApiUnsafeLocal<RT extends ClientApiUnsafeRemote> implements ClientApiUnsafe  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param backId - number
     * @param data - LoginClientStream
     *
     * @aetherMethodId 3
     */
    public abstract sendSafeApiDataMulti(backId: number, data: LoginClientStream): void;
    /**
     * @param data - LoginClientStream
     *
     * @aetherMethodId 4
     */
    public abstract sendSafeApiData(data: LoginClientStream): void;
    
}
export interface ClientApiSafe  {
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 3
     */
    changeParent(uid: UUID): void;
    /**
     * @param alias - UUID
     *
     * @aetherMethodId 4
     */
    changeAlias(alias: UUID): void;
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 5
     */
    newChild(uid: UUID): void;
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 6
     */
    sendMessages(msg: Message[]): void;
    /**
     * @param serverDescriptor - ServerDescriptor
     *
     * @aetherMethodId 7
     */
    sendServerDescriptor(serverDescriptor: ServerDescriptor): void;
    /**
     * @param serverDescriptors - ServerDescriptor[]
     *
     * @aetherMethodId 8
     */
    sendServerDescriptors(serverDescriptors: ServerDescriptor[]): void;
    /**
     * @param uid - UUID
     * @param cloud - Cloud
     *
     * @aetherMethodId 9
     */
    sendCloud(uid: UUID, cloud: Cloud): void;
    /**
     * @param clouds - UUIDAndCloud[]
     *
     * @aetherMethodId 10
     */
    sendClouds(clouds: UUIDAndCloud[]): void;
    /**
     * @aetherMethodId 11
     */
    requestTelemetry(): void;
    /**
     * @param groups - AccessGroup[]
     *
     * @aetherMethodId 12
     */
    sendAccessGroups(groups: AccessGroup[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 13
     */
    sendAccessGroupForClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 14
     */
    addItemsToAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 15
     */
    removeItemsFromAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 16
     */
    addAccessGroupsToClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 17
     */
    removeAccessGroupsFromClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uid - UUID
     * @param accessedClients - UUID[]
     *
     * @aetherMethodId 18
     */
    sendAllAccessedClients(uid: UUID, accessedClients: UUID[]): void;
    /**
     * @param results - AccessCheckResult[]
     *
     * @aetherMethodId 19
     */
    sendAccessCheckResults(results: AccessCheckResult[]): void;
    
}
export namespace ClientApiSafe  {
    export const META: FastMetaApi<ClientApiSafe, ClientApiSafeRemote> = new Impl.ClientApiSafeMetaImpl();
    
}
export interface ClientApiSafeRemote extends ClientApiSafe, RemoteApi  {
    
}
export abstract class ClientApiSafeLocal<RT extends ClientApiSafeRemote> implements ClientApiSafe  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 3
     */
    public abstract changeParent(uid: UUID): void;
    /**
     * @param alias - UUID
     *
     * @aetherMethodId 4
     */
    public abstract changeAlias(alias: UUID): void;
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 5
     */
    public abstract newChild(uid: UUID): void;
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 6
     */
    public abstract sendMessages(msg: Message[]): void;
    /**
     * @param serverDescriptor - ServerDescriptor
     *
     * @aetherMethodId 7
     */
    public abstract sendServerDescriptor(serverDescriptor: ServerDescriptor): void;
    /**
     * @param serverDescriptors - ServerDescriptor[]
     *
     * @aetherMethodId 8
     */
    public abstract sendServerDescriptors(serverDescriptors: ServerDescriptor[]): void;
    /**
     * @param uid - UUID
     * @param cloud - Cloud
     *
     * @aetherMethodId 9
     */
    public abstract sendCloud(uid: UUID, cloud: Cloud): void;
    /**
     * @param clouds - UUIDAndCloud[]
     *
     * @aetherMethodId 10
     */
    public abstract sendClouds(clouds: UUIDAndCloud[]): void;
    /**
     * @aetherMethodId 11
     */
    public abstract requestTelemetry(): void;
    /**
     * @param groups - AccessGroup[]
     *
     * @aetherMethodId 12
     */
    public abstract sendAccessGroups(groups: AccessGroup[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 13
     */
    public abstract sendAccessGroupForClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 14
     */
    public abstract addItemsToAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 15
     */
    public abstract removeItemsFromAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 16
     */
    public abstract addAccessGroupsToClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 17
     */
    public abstract removeAccessGroupsFromClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uid - UUID
     * @param accessedClients - UUID[]
     *
     * @aetherMethodId 18
     */
    public abstract sendAllAccessedClients(uid: UUID, accessedClients: UUID[]): void;
    /**
     * @param results - AccessCheckResult[]
     *
     * @aetherMethodId 19
     */
    public abstract sendAccessCheckResults(results: AccessCheckResult[]): void;
    
}
export interface AuthorizedApi  {
    /**
     * @param id - number
     *
     * @aetherMethodId 3
     */
    backId(id: number): void;
    /**
     * @param nextConnectMsDuration - bigint
     * @returns AFuture
     *
     * @aetherMethodId 4
     */
    ping(nextConnectMsDuration: bigint): AFuture;
    /**
     * @param uid - UUID
     * @param stream - ClientApiStream
     *
     * @aetherMethodId 5
     */
    client(uid: UUID, stream: ClientApiStream): void;
    /**
     * @param msg - Message
     *
     * @aetherMethodId 6
     */
    sendMessage(msg: Message): void;
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 7
     */
    sendMessages(msg: Message[]): void;
    /**
     * @param owner - UUID
     * @param uids - UUID[]
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 8
     */
    createAccessGroup(owner: UUID, uids: UUID[]): ARFuture<bigint>;
    /**
     * @param groupId - bigint
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 9
     */
    addToAccessGroup(groupId: bigint, uid: UUID): ARFuture<boolean>;
    /**
     * @param groupId - bigint
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 10
     */
    removeFromAccessGroup(groupId: bigint, uid: UUID): ARFuture<boolean>;
    /**
     * @param uid - UUID
     * @returns AFuture
     *
     * @aetherMethodId 11
     */
    checkAccessForSendMessage(uid: UUID): AFuture;
    /**
     * @param sid - number[]
     *
     * @aetherMethodId 12
     */
    resolverServers(sid: number[]): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 13
     */
    resolverClouds(uids: UUID[]): void;
    /**
     * @param uid - UUID
     * @returns ARFuture<bigint[]>
     *
     * @aetherMethodId 14
     */
    getAccessGroups(uid: UUID): ARFuture<bigint[]>;
    /**
     * @param groupId - bigint
     * @returns ARFuture<AccessGroup>
     *
     * @aetherMethodId 15
     */
    getAccessGroup(groupId: bigint): ARFuture<AccessGroup>;
    /**
     * @param uid - UUID
     * @returns ARFuture<UUID[]>
     *
     * @aetherMethodId 16
     */
    getAllAccessedClients(uid: UUID): ARFuture<UUID[]>;
    /**
     * @param uid1 - UUID
     * @param uid2 - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 17
     */
    checkAccessForSendMessage2(uid1: UUID, uid2: UUID): ARFuture<boolean>;
    /**
     * @param telemetry - Telemetry
     *
     * @aetherMethodId 18
     */
    sendTelemetry(telemetry: Telemetry): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 19
     */
    requestAccessGroupsForClients(uids: UUID[]): void;
    /**
     * @param ids - bigint[]
     *
     * @aetherMethodId 20
     */
    requestAccessGroupsItems(ids: bigint[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 22
     */
    sendAccessGroupForClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 23
     */
    addItemsToAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 24
     */
    removeItemsFromAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 25
     */
    addAccessGroupsToClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 26
     */
    removeAccessGroupsFromClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 27
     */
    requestAllAccessedClients(uids: UUID[]): void;
    /**
     * @param requests - AccessCheckPair[]
     *
     * @aetherMethodId 28
     */
    requestAccessCheck(requests: AccessCheckPair[]): void;
    
}
export namespace AuthorizedApi  {
    export const META: FastMetaApi<AuthorizedApi, AuthorizedApiRemote> = new Impl.AuthorizedApiMetaImpl();
    
}
export interface AuthorizedApiRemote extends AuthorizedApi, RemoteApi  {
    
}
export abstract class AuthorizedApiLocal<RT extends AuthorizedApiRemote> implements AuthorizedApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param id - number
     *
     * @aetherMethodId 3
     */
    public abstract backId(id: number): void;
    /**
     * @param nextConnectMsDuration - bigint
     * @returns AFuture
     *
     * @aetherMethodId 4
     */
    public abstract ping(nextConnectMsDuration: bigint): AFuture;
    /**
     * @param uid - UUID
     * @param stream - ClientApiStream
     *
     * @aetherMethodId 5
     */
    public abstract client(uid: UUID, stream: ClientApiStream): void;
    /**
     * @param msg - Message
     *
     * @aetherMethodId 6
     */
    public abstract sendMessage(msg: Message): void;
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 7
     */
    public abstract sendMessages(msg: Message[]): void;
    /**
     * @param owner - UUID
     * @param uids - UUID[]
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 8
     */
    public abstract createAccessGroup(owner: UUID, uids: UUID[]): ARFuture<bigint>;
    /**
     * @param groupId - bigint
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 9
     */
    public abstract addToAccessGroup(groupId: bigint, uid: UUID): ARFuture<boolean>;
    /**
     * @param groupId - bigint
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 10
     */
    public abstract removeFromAccessGroup(groupId: bigint, uid: UUID): ARFuture<boolean>;
    /**
     * @param uid - UUID
     * @returns AFuture
     *
     * @aetherMethodId 11
     */
    public abstract checkAccessForSendMessage(uid: UUID): AFuture;
    /**
     * @param sid - number[]
     *
     * @aetherMethodId 12
     */
    public abstract resolverServers(sid: number[]): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 13
     */
    public abstract resolverClouds(uids: UUID[]): void;
    /**
     * @param uid - UUID
     * @returns ARFuture<bigint[]>
     *
     * @aetherMethodId 14
     */
    public abstract getAccessGroups(uid: UUID): ARFuture<bigint[]>;
    /**
     * @param groupId - bigint
     * @returns ARFuture<AccessGroup>
     *
     * @aetherMethodId 15
     */
    public abstract getAccessGroup(groupId: bigint): ARFuture<AccessGroup>;
    /**
     * @param uid - UUID
     * @returns ARFuture<UUID[]>
     *
     * @aetherMethodId 16
     */
    public abstract getAllAccessedClients(uid: UUID): ARFuture<UUID[]>;
    /**
     * @param uid1 - UUID
     * @param uid2 - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 17
     */
    public abstract checkAccessForSendMessage2(uid1: UUID, uid2: UUID): ARFuture<boolean>;
    /**
     * @param telemetry - Telemetry
     *
     * @aetherMethodId 18
     */
    public abstract sendTelemetry(telemetry: Telemetry): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 19
     */
    public abstract requestAccessGroupsForClients(uids: UUID[]): void;
    /**
     * @param ids - bigint[]
     *
     * @aetherMethodId 20
     */
    public abstract requestAccessGroupsItems(ids: bigint[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 22
     */
    public abstract sendAccessGroupForClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 23
     */
    public abstract addItemsToAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param id - bigint
     * @param groups - UUID[]
     *
     * @aetherMethodId 24
     */
    public abstract removeItemsFromAccessGroup(id: bigint, groups: UUID[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 25
     */
    public abstract addAccessGroupsToClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uid - UUID
     * @param groups - bigint[]
     *
     * @aetherMethodId 26
     */
    public abstract removeAccessGroupsFromClient(uid: UUID, groups: bigint[]): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 27
     */
    public abstract requestAllAccessedClients(uids: UUID[]): void;
    /**
     * @param requests - AccessCheckPair[]
     *
     * @aetherMethodId 28
     */
    public abstract requestAccessCheck(requests: AccessCheckPair[]): void;
    
}
export interface LoginApi  {
    /**
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 3
     */
    getTimeUTC(): ARFuture<bigint>;
    /**
     * @param uid - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 4
     */
    loginByUID(uid: UUID, data: LoginStream): void;
    /**
     * @param alias - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 5
     */
    loginByAlias(alias: UUID, data: LoginStream): void;
    
}
export namespace LoginApi  {
    export const META: FastMetaApi<LoginApi, LoginApiRemote> = new Impl.LoginApiMetaImpl();
    
}
export interface LoginApiRemote extends LoginApi, RemoteApi  {
    
}
export abstract class LoginApiLocal<RT extends LoginApiRemote> implements LoginApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 3
     */
    public abstract getTimeUTC(): ARFuture<bigint>;
    /**
     * @param uid - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 4
     */
    public abstract loginByUID(uid: UUID, data: LoginStream): void;
    /**
     * @param alias - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 5
     */
    public abstract loginByAlias(alias: UUID, data: LoginStream): void;
    
}
export interface ServerApiByUidClient  {
    
}
export namespace ServerApiByUidClient  {
    export const META: FastMetaApi<ServerApiByUidClient, ServerApiByUidClientRemote> = new Impl.ServerApiByUidClientMetaImpl();
    
}
export interface ServerApiByUidClientRemote extends ServerApiByUidClient, RemoteApi  {
    
}
export abstract class ServerApiByUidClientLocal<RT extends ServerApiByUidClientRemote> implements ServerApiByUidClient  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    
}
export interface ServerApiByUid  {
    /**
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 3
     */
    getBalance(): ARFuture<bigint>;
    /**
     * @param uid - UUID
     * @returns AFuture
     *
     * @aetherMethodId 4
     */
    setParent(uid: UUID): AFuture;
    /**
     * @returns AFuture
     *
     * @aetherMethodId 5
     */
    block(): AFuture;
    /**
     * @returns ARFuture<Cloud>
     *
     * @aetherMethodId 6
     */
    getPosition(): ARFuture<Cloud>;
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 7
     */
    getParent(): ARFuture<UUID>;
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 8
     */
    getBeneficiary(): ARFuture<UUID>;
    /**
     * @param uid - UUID
     * @returns AFuture
     *
     * @aetherMethodId 9
     */
    setBeneficiary(uid: UUID): AFuture;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 10
     */
    getBlockTime(): ARFuture<Date>;
    /**
     * @returns AFuture
     *
     * @aetherMethodId 11
     */
    unblock(): AFuture;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 12
     */
    createTime(): ARFuture<Date>;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 13
     */
    onlineTime(): ARFuture<Date>;
    /**
     * @param groupId - bigint
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 14
     */
    addAccessGroup(groupId: bigint): ARFuture<boolean>;
    /**
     * @param groupId - bigint
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 15
     */
    removeAccessGroup(groupId: bigint): ARFuture<boolean>;
    
}
export namespace ServerApiByUid  {
    export const META: FastMetaApi<ServerApiByUid, ServerApiByUidRemote> = new Impl.ServerApiByUidMetaImpl();
    
}
export interface ServerApiByUidRemote extends ServerApiByUid, RemoteApi  {
    
}
export abstract class ServerApiByUidLocal<RT extends ServerApiByUidRemote> implements ServerApiByUid  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 3
     */
    public abstract getBalance(): ARFuture<bigint>;
    /**
     * @param uid - UUID
     * @returns AFuture
     *
     * @aetherMethodId 4
     */
    public abstract setParent(uid: UUID): AFuture;
    /**
     * @returns AFuture
     *
     * @aetherMethodId 5
     */
    public abstract block(): AFuture;
    /**
     * @returns ARFuture<Cloud>
     *
     * @aetherMethodId 6
     */
    public abstract getPosition(): ARFuture<Cloud>;
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 7
     */
    public abstract getParent(): ARFuture<UUID>;
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 8
     */
    public abstract getBeneficiary(): ARFuture<UUID>;
    /**
     * @param uid - UUID
     * @returns AFuture
     *
     * @aetherMethodId 9
     */
    public abstract setBeneficiary(uid: UUID): AFuture;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 10
     */
    public abstract getBlockTime(): ARFuture<Date>;
    /**
     * @returns AFuture
     *
     * @aetherMethodId 11
     */
    public abstract unblock(): AFuture;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 12
     */
    public abstract createTime(): ARFuture<Date>;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 13
     */
    public abstract onlineTime(): ARFuture<Date>;
    /**
     * @param groupId - bigint
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 14
     */
    public abstract addAccessGroup(groupId: bigint): ARFuture<boolean>;
    /**
     * @param groupId - bigint
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 15
     */
    public abstract removeAccessGroup(groupId: bigint): ARFuture<boolean>;
    
}
export interface ClientApiRegSafe  {
    
}
export namespace ClientApiRegSafe  {
    export const META: FastMetaApi<ClientApiRegSafe, ClientApiRegSafeRemote> = new Impl.ClientApiRegSafeMetaImpl();
    
}
export interface ClientApiRegSafeRemote extends ClientApiRegSafe, RemoteApi  {
    
}
export abstract class ClientApiRegSafeLocal<RT extends ClientApiRegSafeRemote> implements ClientApiRegSafe  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    
}
export interface GlobalRegClientApi  {
    
}
export namespace GlobalRegClientApi  {
    export const META: FastMetaApi<GlobalRegClientApi, GlobalRegClientApiRemote> = new Impl.GlobalRegClientApiMetaImpl();
    
}
export interface GlobalRegClientApiRemote extends GlobalRegClientApi, RemoteApi  {
    
}
export abstract class GlobalRegClientApiLocal<RT extends GlobalRegClientApiRemote> implements GlobalRegClientApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    
}
export interface ClientApiRegUnsafe  {
    /**
     * @param stream - ClientApiRegSafeStream
     *
     * @aetherMethodId 3
     */
    enter(stream: ClientApiRegSafeStream): void;
    /**
     * @param stream - GlobalRegClientApiStream
     *
     * @aetherMethodId 4
     */
    enterGlobal(stream: GlobalRegClientApiStream): void;
    
}
export namespace ClientApiRegUnsafe  {
    export const META: FastMetaApi<ClientApiRegUnsafe, ClientApiRegUnsafeRemote> = new Impl.ClientApiRegUnsafeMetaImpl();
    
}
export interface ClientApiRegUnsafeRemote extends ClientApiRegUnsafe, RemoteApi  {
    
}
export abstract class ClientApiRegUnsafeLocal<RT extends ClientApiRegUnsafeRemote> implements ClientApiRegUnsafe  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param stream - ClientApiRegSafeStream
     *
     * @aetherMethodId 3
     */
    public abstract enter(stream: ClientApiRegSafeStream): void;
    /**
     * @param stream - GlobalRegClientApiStream
     *
     * @aetherMethodId 4
     */
    public abstract enterGlobal(stream: GlobalRegClientApiStream): void;
    
}
export interface GlobalRegServerApi  {
    /**
     * @param key - Key
     *
     * @aetherMethodId 3
     */
    setMasterKey(key: Key): void;
    /**
     * @returns ARFuture<FinishResultGlobalRegServerApi>
     *
     * @aetherMethodId 4
     */
    finish(): ARFuture<FinishResultGlobalRegServerApi>;
    
}
export namespace GlobalRegServerApi  {
    export const META: FastMetaApi<GlobalRegServerApi, GlobalRegServerApiRemote> = new Impl.GlobalRegServerApiMetaImpl();
    
}
export interface GlobalRegServerApiRemote extends GlobalRegServerApi, RemoteApi  {
    
}
export abstract class GlobalRegServerApiLocal<RT extends GlobalRegServerApiRemote> implements GlobalRegServerApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param key - Key
     *
     * @aetherMethodId 3
     */
    public abstract setMasterKey(key: Key): void;
    /**
     * @returns ARFuture<FinishResultGlobalRegServerApi>
     *
     * @aetherMethodId 4
     */
    public abstract finish(): ARFuture<FinishResultGlobalRegServerApi>;
    
}
export interface ServerRegistrationApi  {
    /**
     * @param salt - string
     * @param suffix - string
     * @param passwords - number[]
     * @param parent - UUID
     * @param globalApi - GlobalApiRegistrationServerRegistrationApi
     *
     * @aetherMethodId 3
     */
    registration(salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiRegistrationServerRegistrationApi): void;
    /**
     * @param parent - UUID
     * @param powMethods - PowMethod
     * @returns ARFuture<WorkProofDTO>
     *
     * @aetherMethodId 4
     */
    requestWorkProofData(parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO>;
    /**
     * @param serverIds - Cloud
     * @returns ARFuture<ServerDescriptor[]>
     *
     * @aetherMethodId 5
     */
    resolveServers(serverIds: Cloud): ARFuture<ServerDescriptor[]>;
    /**
     * @param key - Key
     *
     * @aetherMethodId 6
     */
    setReturnKey(key: Key): void;
    
}
export namespace ServerRegistrationApi  {
    export const META: FastMetaApi<ServerRegistrationApi, ServerRegistrationApiRemote> = new Impl.ServerRegistrationApiMetaImpl();
    
}
export interface ServerRegistrationApiRemote extends ServerRegistrationApi, RemoteApi  {
    
}
export abstract class ServerRegistrationApiLocal<RT extends ServerRegistrationApiRemote> implements ServerRegistrationApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param salt - string
     * @param suffix - string
     * @param passwords - number[]
     * @param parent - UUID
     * @param globalApi - GlobalApiRegistrationServerRegistrationApi
     *
     * @aetherMethodId 3
     */
    public abstract registration(salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiRegistrationServerRegistrationApi): void;
    /**
     * @param parent - UUID
     * @param powMethods - PowMethod
     * @returns ARFuture<WorkProofDTO>
     *
     * @aetherMethodId 4
     */
    public abstract requestWorkProofData(parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO>;
    /**
     * @param serverIds - Cloud
     * @returns ARFuture<ServerDescriptor[]>
     *
     * @aetherMethodId 5
     */
    public abstract resolveServers(serverIds: Cloud): ARFuture<ServerDescriptor[]>;
    /**
     * @param key - Key
     *
     * @aetherMethodId 6
     */
    public abstract setReturnKey(key: Key): void;
    
}
export interface RegistrationRootApi  {
    /**
     * @param cryptoLib - CryptoLib
     * @returns ARFuture<SignedKey>
     *
     * @aetherMethodId 3
     */
    getAsymmetricPublicKey(cryptoLib: CryptoLib): ARFuture<SignedKey>;
    /**
     * @param cryptoLib - CryptoLib
     * @param stream - ServerRegistrationApiStream
     *
     * @aetherMethodId 4
     */
    enter(cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void;
    
}
export namespace RegistrationRootApi  {
    export const META: FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote> = new Impl.RegistrationRootApiMetaImpl();
    
}
export interface RegistrationRootApiRemote extends RegistrationRootApi, RemoteApi  {
    
}
export abstract class RegistrationRootApiLocal<RT extends RegistrationRootApiRemote> implements RegistrationRootApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    /**
     * @param cryptoLib - CryptoLib
     * @returns ARFuture<SignedKey>
     *
     * @aetherMethodId 3
     */
    public abstract getAsymmetricPublicKey(cryptoLib: CryptoLib): ARFuture<SignedKey>;
    /**
     * @param cryptoLib - CryptoLib
     * @param stream - ServerRegistrationApiStream
     *
     * @aetherMethodId 4
     */
    public abstract enter(cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void;
    
}
export namespace AllCustomMeta  {
    export const META_ARRAY_long: FastMetaType<bigint[]> = Impl.MetaArraylongImpl.INSTANCE;
    export const META_ARRAY_UUID: FastMetaType<UUID[]> = Impl.MetaArrayUUIDImpl.INSTANCE;
    export const META_ARRAY_ServerDescriptor: FastMetaType<ServerDescriptor[]> = Impl.MetaArrayServerDescriptorImpl.INSTANCE;
    
}
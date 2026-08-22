import  {
    AFuture, ARFuture, DataInOutStatic, DataInOut, FastMetaType, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastFutureContextStub, SyncMapChannel, MetaContext, RemoteApi, FastMetaApi, BytesConverter, UUID, URI, AConsumer, ToString, FastMetaHierarchyType, AString
}
from './aether_client';
import * as Impl from './aether_api_impl';
// This is always relative
export enum AetherCodec  {
    TCP = 'TCP', UDP = 'UDP', WS = 'WS', WSS = 'WSS' 
}
export namespace AetherCodec  {
    export const META: FastMetaType<AetherCodec> = new Impl.AetherCodecMetaImpl();
    
}
export enum ClientActivityType  {
    CONNECT = 'CONNECT', DISCONNECT = 'DISCONNECT', MESSAGE_SEND = 'MESSAGE_SEND', MESSAGE_RECEIVE = 'MESSAGE_RECEIVE', COMMAND_EXEC = 'COMMAND_EXEC', API_CALL = 'API_CALL' 
}
export namespace ClientActivityType  {
    export const META: FastMetaType<ClientActivityType> = new Impl.ClientActivityTypeMetaImpl();
    
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
export enum ServerType  {
    REG = 'REG', WORK = 'WORK' 
}
export namespace ServerType  {
    export const META: FastMetaType<ServerType> = new Impl.ServerTypeMetaImpl();
    
}
export enum Status  {
    PENDING = 'PENDING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' 
}
export namespace Status  {
    export const META: FastMetaType<Status> = new Impl.StatusMetaImpl();
    
}
/**
 * Represents the abstract AetherTypeDescriptor structure.
 */
export abstract class AetherTypeDescriptor implements ToString, FastMetaHierarchyType  {
    public abstract getKind(): string;
    public readonly id: bigint;
    public readonly docId: bigint | null;
    public getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<AetherTypeDescriptor> = new Impl.AetherTypeDescriptorMetaImpl();
    /**
     * Creates an instance of AetherTypeDescriptor.
     * @param id - bigint
     * @param docId - bigint | null
     */
    constructor(id: bigint, docId: bigint | null)  {
        this.id = id;
        this.docId = docId;
        
    }
    public getId(): bigint  {
        return this.id;
        
    }
    public getDocId(): bigint | null  {
        return this.docId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherTypeDescriptor.
     * @param {AetherTypeDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherTypeDescriptor | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherTypeDescriptor with another object.
     * @param {AetherTypeDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherTypeDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract IPAddress structure.
 */
export abstract class IPAddress implements ToString, FastMetaHierarchyType  {
    public getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<IPAddress> = new Impl.IPAddressMetaImpl();
    /**
     * Creates an instance of IPAddress.
     */
    constructor()  {
        
    }
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of IPAddress.
     * @param {IPAddress | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddress | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract Key structure.
 */
export abstract class Key implements ToString, FastMetaHierarchyType  {
    public getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<Key> = new Impl.KeyMetaImpl();
    /**
     * Creates an instance of Key.
     */
    constructor()  {
        
    }
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of Key.
     * @param {Key | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Key | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeyAsymmetric structure.
 */
export abstract class KeyAsymmetric extends Key implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeyAsymmetric.
     * @param {KeyAsymmetric | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyAsymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeyAsymmetricPrivate structure.
 */
export abstract class KeyAsymmetricPrivate extends KeyAsymmetric implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeyAsymmetricPrivate.
     * @param {KeyAsymmetricPrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyAsymmetricPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeyAsymmetricPublic structure.
 */
export abstract class KeyAsymmetricPublic extends KeyAsymmetric implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeyAsymmetricPublic.
     * @param {KeyAsymmetricPublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyAsymmetricPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeySign structure.
 */
export abstract class KeySign extends Key implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeySign.
     * @param {KeySign | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeySignPrivate structure.
 */
export abstract class KeySignPrivate extends KeySign implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeySignPrivate.
     * @param {KeySignPrivate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySignPrivate | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeySignPublic structure.
 */
export abstract class KeySignPublic extends KeySign implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeySignPublic.
     * @param {KeySignPublic | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySignPublic | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract KeySymmetric structure.
 */
export abstract class KeySymmetric extends Key implements ToString, FastMetaHierarchyType  {
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
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of KeySymmetric.
     * @param {KeySymmetric | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeySymmetric | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract PairKeys structure.
 */
export abstract class PairKeys implements ToString, FastMetaHierarchyType  {
    public getAetherTypeId(): number  {
        return -1;
        
    }
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
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract Sign structure.
 */
export abstract class Sign implements ToString, FastMetaHierarchyType  {
    public getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<Sign> = new Impl.SignMetaImpl();
    /**
     * Creates an instance of Sign.
     */
    constructor()  {
        
    }
    public abstract getData(): Uint8Array;
    /**
     * Calculates a hash code for a static instance of Sign.
     * @param {Sign | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Sign | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract Telemetry structure.
 */
export abstract class Telemetry implements ToString, FastMetaHierarchyType  {
    public getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<Telemetry> = new Impl.TelemetryMetaImpl();
    /**
     * Creates an instance of Telemetry.
     */
    constructor()  {
        
    }
    public abstract getUtm_id(): number;
    public abstract getBlob(): Uint8Array;
    public abstract getLib_version(): string;
    public abstract getOs(): string;
    public abstract getCompiler(): string;
    /**
     * Calculates a hash code for a static instance of Telemetry.
     * @param {Telemetry | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Telemetry | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
}
/**
 * Represents the abstract WorkProofConfig structure.
 */
export abstract class WorkProofConfig implements ToString, FastMetaHierarchyType  {
    public getAetherTypeId(): number  {
        return -1;
        
    }
    public static readonly META: FastMetaType<WorkProofConfig> = new Impl.WorkProofConfigMetaImpl();
    /**
     * Creates an instance of WorkProofConfig.
     */
    constructor()  {
        
    }
    public abstract getCostBCrypt(): number;
    public abstract getPoolSize(): number;
    public abstract getMaxHashVal(): number;
    /**
     * Calculates a hash code for a static instance of WorkProofConfig.
     * @param {WorkProofConfig | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: WorkProofConfig | null | undefined): number  {
        if (obj === null || obj === undefined) return 0;
        return (obj.constructor as any).META.metaHashCode(obj);
        
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
        return (v1.constructor as any).META.metaEquals(v1, v2);
        
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
    public abstract toAString(result: AString): AString;
    
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
        return AccessCheckPair.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AccessCheckPair with another object.
     * @param {AccessCheckPair | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AccessCheckPair | null | undefined, v2: any | null | undefined): boolean  {
        return AccessCheckPair.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        AccessCheckPair.META.metaToString(this, result);
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
        return AccessCheckResult.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AccessCheckResult with another object.
     * @param {AccessCheckResult | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AccessCheckResult | null | undefined, v2: any | null | undefined): boolean  {
        return AccessCheckResult.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        AccessCheckResult.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AccessGroup structure.
 */
export class AccessGroup implements ToString  {
    public readonly id: UUID;
    public readonly time: number;
    public readonly owner: UUID;
    public readonly data: UUID[];
    public static readonly META_BODY: FastMetaType<AccessGroup> = new Impl.AccessGroupMetaBodyImpl();
    public static readonly META: FastMetaType<AccessGroup> = AccessGroup.META_BODY;
    /**
     * Creates an instance of AccessGroup.
     * @param id - UUID
     * @param time - number
     * @param owner - UUID
     * @param data - UUID[]
     */
    constructor(id: UUID, time: number, owner: UUID, data: UUID[])  {
        this.id = id;
        this.time = time;
        this.owner = owner;
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type AccessGroup.`);
        
    }
    public getId(): UUID  {
        return this.id;
        
    }
    public getTime(): number  {
        return this.time;
        
    }
    public getOwner(): UUID  {
        return this.owner;
        
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
        return AccessGroup.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AccessGroup with another object.
     * @param {AccessGroup | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AccessGroup | null | undefined, v2: any | null | undefined): boolean  {
        return AccessGroup.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        AccessGroup.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherApiDefinition structure.
 */
export class AetherApiDefinition implements ToString  {
    public readonly id: bigint;
    public readonly nameId: bigint;
    public readonly methods: AetherMethodDescriptor[];
    public readonly docId: bigint | null;
    public static readonly META_BODY: FastMetaType<AetherApiDefinition> = new Impl.AetherApiDefinitionMetaBodyImpl();
    public static readonly META: FastMetaType<AetherApiDefinition> = AetherApiDefinition.META_BODY;
    /**
     * Creates an instance of AetherApiDefinition.
     * @param id - bigint
     * @param nameId - bigint
     * @param methods - AetherMethodDescriptor[]
     * @param docId - bigint | null
     */
    constructor(id: bigint, nameId: bigint, methods: AetherMethodDescriptor[], docId: bigint | null)  {
        this.id = id;
        this.nameId = nameId;
        this.methods = methods;
        this.docId = docId;
        if (methods === null || methods === undefined) throw new Error(`Field 'methods' cannot be null for type AetherApiDefinition.`);
        
    }
    public getId(): bigint  {
        return this.id;
        
    }
    public getNameId(): bigint  {
        return this.nameId;
        
    }
    public getMethods(): AetherMethodDescriptor[]  {
        return this.methods;
        
    }
    public methodsContains(el: AetherMethodDescriptor): boolean  {
        return (this.methods as AetherMethodDescriptor[]).includes(el as any);
        
    }
    public getDocId(): bigint | null  {
        return this.docId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherApiDefinition.
     * @param {AetherApiDefinition | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherApiDefinition | null | undefined): number  {
        return AetherApiDefinition.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherApiDefinition with another object.
     * @param {AetherApiDefinition | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherApiDefinition | null | undefined, v2: any | null | undefined): boolean  {
        return AetherApiDefinition.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherApiDefinition.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherApiDefinition.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherApiDefinition.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherArgumentDescriptor structure.
 */
export class AetherArgumentDescriptor implements ToString  {
    public readonly nameId: bigint;
    public readonly typeId: bigint;
    public readonly docId: bigint | null;
    public static readonly META_BODY: FastMetaType<AetherArgumentDescriptor> = new Impl.AetherArgumentDescriptorMetaBodyImpl();
    public static readonly META: FastMetaType<AetherArgumentDescriptor> = AetherArgumentDescriptor.META_BODY;
    /**
     * Creates an instance of AetherArgumentDescriptor.
     * @param nameId - bigint
     * @param typeId - bigint
     * @param docId - bigint | null
     */
    constructor(nameId: bigint, typeId: bigint, docId: bigint | null)  {
        this.nameId = nameId;
        this.typeId = typeId;
        this.docId = docId;
        
    }
    public getNameId(): bigint  {
        return this.nameId;
        
    }
    public getTypeId(): bigint  {
        return this.typeId;
        
    }
    public getDocId(): bigint | null  {
        return this.docId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherArgumentDescriptor.
     * @param {AetherArgumentDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherArgumentDescriptor | null | undefined): number  {
        return AetherArgumentDescriptor.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherArgumentDescriptor with another object.
     * @param {AetherArgumentDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherArgumentDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        return AetherArgumentDescriptor.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherArgumentDescriptor.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherArgumentDescriptor.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherArgumentDescriptor.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherArrayType structure.
 *
 * @aetherTypeId 2
 */
export class AetherArrayType extends AetherTypeDescriptor implements ToString, FastMetaHierarchyType  {
    public readonly elementTypeId: bigint;
    public override getKind(): string  {
        return "ARRAY";
        
    }
    public override getAetherTypeId(): number  {
        return 2;
        
    }
    public static readonly META_BODY: FastMetaType<AetherArrayType> = new Impl.AetherArrayTypeMetaBodyImpl();
    public static readonly META: FastMetaType<AetherArrayType> = new Impl.AetherArrayTypeMetaImpl();
    /**
     * Creates an instance of AetherArrayType.
     * @param id - bigint
     * @param docId - bigint | null
     * @param elementTypeId - bigint
     */
    constructor(id: bigint, docId: bigint | null, elementTypeId: bigint)  {
        super(id, docId);
        this.elementTypeId = elementTypeId;
        
    }
    public getElementTypeId(): bigint  {
        return this.elementTypeId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherArrayType.
     * @param {AetherArrayType | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherArrayType | null | undefined): number  {
        return AetherArrayType.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherArrayType with another object.
     * @param {AetherArrayType | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherArrayType | null | undefined, v2: any | null | undefined): boolean  {
        return AetherArrayType.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherArrayType.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherArrayType.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherArrayType.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherBaseType structure.
 *
 * @aetherTypeId 1
 */
export class AetherBaseType extends AetherTypeDescriptor implements ToString, FastMetaHierarchyType  {
    public readonly nameId: bigint;
    public override getKind(): string  {
        return "BASE";
        
    }
    public override getAetherTypeId(): number  {
        return 1;
        
    }
    public static readonly META_BODY: FastMetaType<AetherBaseType> = new Impl.AetherBaseTypeMetaBodyImpl();
    public static readonly META: FastMetaType<AetherBaseType> = new Impl.AetherBaseTypeMetaImpl();
    /**
     * Creates an instance of AetherBaseType.
     * @param id - bigint
     * @param docId - bigint | null
     * @param nameId - bigint
     */
    constructor(id: bigint, docId: bigint | null, nameId: bigint)  {
        super(id, docId);
        this.nameId = nameId;
        
    }
    public getNameId(): bigint  {
        return this.nameId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherBaseType.
     * @param {AetherBaseType | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherBaseType | null | undefined): number  {
        return AetherBaseType.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherBaseType with another object.
     * @param {AetherBaseType | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherBaseType | null | undefined, v2: any | null | undefined): boolean  {
        return AetherBaseType.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherBaseType.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherBaseType.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherBaseType.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherFieldDescriptor structure.
 */
export class AetherFieldDescriptor implements ToString  {
    public readonly nameId: bigint;
    public readonly typeId: bigint;
    public readonly docId: bigint | null;
    public static readonly META_BODY: FastMetaType<AetherFieldDescriptor> = new Impl.AetherFieldDescriptorMetaBodyImpl();
    public static readonly META: FastMetaType<AetherFieldDescriptor> = AetherFieldDescriptor.META_BODY;
    /**
     * Creates an instance of AetherFieldDescriptor.
     * @param nameId - bigint
     * @param typeId - bigint
     * @param docId - bigint | null
     */
    constructor(nameId: bigint, typeId: bigint, docId: bigint | null)  {
        this.nameId = nameId;
        this.typeId = typeId;
        this.docId = docId;
        
    }
    public getNameId(): bigint  {
        return this.nameId;
        
    }
    public getTypeId(): bigint  {
        return this.typeId;
        
    }
    public getDocId(): bigint | null  {
        return this.docId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherFieldDescriptor.
     * @param {AetherFieldDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherFieldDescriptor | null | undefined): number  {
        return AetherFieldDescriptor.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherFieldDescriptor with another object.
     * @param {AetherFieldDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherFieldDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        return AetherFieldDescriptor.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherFieldDescriptor.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherFieldDescriptor.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherFieldDescriptor.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherMethodDescriptor structure.
 */
export class AetherMethodDescriptor implements ToString  {
    public readonly nameId: bigint;
    public readonly args: AetherArgumentDescriptor[];
    public readonly returnTypeId: bigint;
    public readonly docId: bigint | null;
    public static readonly META_BODY: FastMetaType<AetherMethodDescriptor> = new Impl.AetherMethodDescriptorMetaBodyImpl();
    public static readonly META: FastMetaType<AetherMethodDescriptor> = AetherMethodDescriptor.META_BODY;
    /**
     * Creates an instance of AetherMethodDescriptor.
     * @param nameId - bigint
     * @param args - AetherArgumentDescriptor[]
     * @param returnTypeId - bigint
     * @param docId - bigint | null
     */
    constructor(nameId: bigint, args: AetherArgumentDescriptor[], returnTypeId: bigint, docId: bigint | null)  {
        this.nameId = nameId;
        this.args = args;
        this.returnTypeId = returnTypeId;
        this.docId = docId;
        if (args === null || args === undefined) throw new Error(`Field 'args' cannot be null for type AetherMethodDescriptor.`);
        
    }
    public getNameId(): bigint  {
        return this.nameId;
        
    }
    public getArgs(): AetherArgumentDescriptor[]  {
        return this.args;
        
    }
    public argsContains(el: AetherArgumentDescriptor): boolean  {
        return (this.args as AetherArgumentDescriptor[]).includes(el as any);
        
    }
    public getReturnTypeId(): bigint  {
        return this.returnTypeId;
        
    }
    public getDocId(): bigint | null  {
        return this.docId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherMethodDescriptor.
     * @param {AetherMethodDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherMethodDescriptor | null | undefined): number  {
        return AetherMethodDescriptor.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherMethodDescriptor with another object.
     * @param {AetherMethodDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherMethodDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        return AetherMethodDescriptor.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherMethodDescriptor.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherMethodDescriptor.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherMethodDescriptor.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherModuleDescriptor structure.
 */
export class AetherModuleDescriptor implements ToString  {
    public readonly stringPool: string[];
    public readonly typeRegistry: AetherTypeDescriptor[];
    public readonly structs: AetherStructDescriptor[];
    public readonly apis: AetherApiDefinition[];
    public static readonly META_BODY: FastMetaType<AetherModuleDescriptor> = new Impl.AetherModuleDescriptorMetaBodyImpl();
    public static readonly META: FastMetaType<AetherModuleDescriptor> = AetherModuleDescriptor.META_BODY;
    /**
     * Creates an instance of AetherModuleDescriptor.
     * @param stringPool - string[]
     * @param typeRegistry - AetherTypeDescriptor[]
     * @param structs - AetherStructDescriptor[]
     * @param apis - AetherApiDefinition[]
     */
    constructor(stringPool: string[], typeRegistry: AetherTypeDescriptor[], structs: AetherStructDescriptor[], apis: AetherApiDefinition[])  {
        this.stringPool = stringPool;
        this.typeRegistry = typeRegistry;
        this.structs = structs;
        this.apis = apis;
        if (stringPool === null || stringPool === undefined) throw new Error(`Field 'stringPool' cannot be null for type AetherModuleDescriptor.`);
        if (typeRegistry === null || typeRegistry === undefined) throw new Error(`Field 'typeRegistry' cannot be null for type AetherModuleDescriptor.`);
        if (structs === null || structs === undefined) throw new Error(`Field 'structs' cannot be null for type AetherModuleDescriptor.`);
        if (apis === null || apis === undefined) throw new Error(`Field 'apis' cannot be null for type AetherModuleDescriptor.`);
        
    }
    public getStringPool(): string[]  {
        return this.stringPool;
        
    }
    public stringPoolContains(el: string): boolean  {
        return (this.stringPool as string[]).includes(el as any);
        
    }
    public getTypeRegistry(): AetherTypeDescriptor[]  {
        return this.typeRegistry;
        
    }
    public typeRegistryContains(el: AetherTypeDescriptor): boolean  {
        return (this.typeRegistry as AetherTypeDescriptor[]).includes(el as any);
        
    }
    public getStructs(): AetherStructDescriptor[]  {
        return this.structs;
        
    }
    public structsContains(el: AetherStructDescriptor): boolean  {
        return (this.structs as AetherStructDescriptor[]).includes(el as any);
        
    }
    public getApis(): AetherApiDefinition[]  {
        return this.apis;
        
    }
    public apisContains(el: AetherApiDefinition): boolean  {
        return (this.apis as AetherApiDefinition[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AetherModuleDescriptor.
     * @param {AetherModuleDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherModuleDescriptor | null | undefined): number  {
        return AetherModuleDescriptor.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherModuleDescriptor with another object.
     * @param {AetherModuleDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherModuleDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        return AetherModuleDescriptor.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherModuleDescriptor.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherModuleDescriptor.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherModuleDescriptor.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherNullableType structure.
 *
 * @aetherTypeId 4
 */
export class AetherNullableType extends AetherTypeDescriptor implements ToString, FastMetaHierarchyType  {
    public readonly wrappedTypeId: bigint;
    public override getKind(): string  {
        return "NULLABLE";
        
    }
    public override getAetherTypeId(): number  {
        return 4;
        
    }
    public static readonly META_BODY: FastMetaType<AetherNullableType> = new Impl.AetherNullableTypeMetaBodyImpl();
    public static readonly META: FastMetaType<AetherNullableType> = new Impl.AetherNullableTypeMetaImpl();
    /**
     * Creates an instance of AetherNullableType.
     * @param id - bigint
     * @param docId - bigint | null
     * @param wrappedTypeId - bigint
     */
    constructor(id: bigint, docId: bigint | null, wrappedTypeId: bigint)  {
        super(id, docId);
        this.wrappedTypeId = wrappedTypeId;
        
    }
    public getWrappedTypeId(): bigint  {
        return this.wrappedTypeId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherNullableType.
     * @param {AetherNullableType | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherNullableType | null | undefined): number  {
        return AetherNullableType.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherNullableType with another object.
     * @param {AetherNullableType | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherNullableType | null | undefined, v2: any | null | undefined): boolean  {
        return AetherNullableType.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherNullableType.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherNullableType.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherNullableType.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherStreamType structure.
 *
 * @aetherTypeId 3
 */
export class AetherStreamType extends AetherTypeDescriptor implements ToString, FastMetaHierarchyType  {
    public readonly apiId: bigint;
    public readonly isCrypto: boolean;
    public override getKind(): string  {
        return "STREAM";
        
    }
    public override getAetherTypeId(): number  {
        return 3;
        
    }
    public static readonly META_BODY: FastMetaType<AetherStreamType> = new Impl.AetherStreamTypeMetaBodyImpl();
    public static readonly META: FastMetaType<AetherStreamType> = new Impl.AetherStreamTypeMetaImpl();
    /**
     * Creates an instance of AetherStreamType.
     * @param id - bigint
     * @param docId - bigint | null
     * @param apiId - bigint
     * @param isCrypto - boolean
     */
    constructor(id: bigint, docId: bigint | null, apiId: bigint, isCrypto: boolean)  {
        super(id, docId);
        this.apiId = apiId;
        this.isCrypto = isCrypto;
        
    }
    public getApiId(): bigint  {
        return this.apiId;
        
    }
    public isIsCrypto(): boolean  {
        return this.isCrypto;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherStreamType.
     * @param {AetherStreamType | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherStreamType | null | undefined): number  {
        return AetherStreamType.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherStreamType with another object.
     * @param {AetherStreamType | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherStreamType | null | undefined, v2: any | null | undefined): boolean  {
        return AetherStreamType.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherStreamType.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherStreamType.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherStreamType.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AetherStructDescriptor structure.
 */
export class AetherStructDescriptor implements ToString  {
    public readonly baseTypeId: bigint;
    public readonly parentTypeId: bigint | null;
    public readonly fields: AetherFieldDescriptor[];
    public readonly docId: bigint | null;
    public static readonly META_BODY: FastMetaType<AetherStructDescriptor> = new Impl.AetherStructDescriptorMetaBodyImpl();
    public static readonly META: FastMetaType<AetherStructDescriptor> = AetherStructDescriptor.META_BODY;
    /**
     * Creates an instance of AetherStructDescriptor.
     * @param baseTypeId - bigint
     * @param parentTypeId - bigint | null
     * @param fields - AetherFieldDescriptor[]
     * @param docId - bigint | null
     */
    constructor(baseTypeId: bigint, parentTypeId: bigint | null, fields: AetherFieldDescriptor[], docId: bigint | null)  {
        this.baseTypeId = baseTypeId;
        this.parentTypeId = parentTypeId;
        this.fields = fields;
        this.docId = docId;
        if (fields === null || fields === undefined) throw new Error(`Field 'fields' cannot be null for type AetherStructDescriptor.`);
        
    }
    public getBaseTypeId(): bigint  {
        return this.baseTypeId;
        
    }
    public getParentTypeId(): bigint | null  {
        return this.parentTypeId;
        
    }
    public getFields(): AetherFieldDescriptor[]  {
        return this.fields;
        
    }
    public fieldsContains(el: AetherFieldDescriptor): boolean  {
        return (this.fields as AetherFieldDescriptor[]).includes(el as any);
        
    }
    public getDocId(): bigint | null  {
        return this.docId;
        
    }
    /**
     * Calculates a hash code for a static instance of AetherStructDescriptor.
     * @param {AetherStructDescriptor | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AetherStructDescriptor | null | undefined): number  {
        return AetherStructDescriptor.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AetherStructDescriptor with another object.
     * @param {AetherStructDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AetherStructDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        return AetherStructDescriptor.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AetherStructDescriptor.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AetherStructDescriptor.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AetherStructDescriptor.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AppliedConfig structure.
 */
export class AppliedConfig implements ToString  {
    public readonly subjectUid: UUID;
    public readonly configVersion: bigint;
    public static readonly META_BODY: FastMetaType<AppliedConfig> = new Impl.AppliedConfigMetaBodyImpl();
    public static readonly META: FastMetaType<AppliedConfig> = AppliedConfig.META_BODY;
    /**
     * Creates an instance of AppliedConfig.
     * @param subjectUid - UUID
     * @param configVersion - bigint
     */
    constructor(subjectUid: UUID, configVersion: bigint)  {
        this.subjectUid = subjectUid;
        this.configVersion = configVersion;
        
    }
    public getSubjectUid(): UUID  {
        return this.subjectUid;
        
    }
    public getConfigVersion(): bigint  {
        return this.configVersion;
        
    }
    /**
     * Calculates a hash code for a static instance of AppliedConfig.
     * @param {AppliedConfig | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AppliedConfig | null | undefined): number  {
        return AppliedConfig.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AppliedConfig with another object.
     * @param {AppliedConfig | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AppliedConfig | null | undefined, v2: any | null | undefined): boolean  {
        return AppliedConfig.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AppliedConfig.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AppliedConfig.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AppliedConfig.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientActivity structure.
 */
export class ClientActivity implements ToString  {
    public readonly timestamp: bigint;
    public readonly type: ClientActivityType;
    public readonly clientUid: UUID;
    public readonly details: string;
    public readonly serverId: number | null;
    public static readonly META_BODY: FastMetaType<ClientActivity> = new Impl.ClientActivityMetaBodyImpl();
    public static readonly META: FastMetaType<ClientActivity> = ClientActivity.META_BODY;
    /**
     * Creates an instance of ClientActivity.
     * @param timestamp - bigint
     * @param type - ClientActivityType
     * @param clientUid - UUID
     * @param details - string
     * @param serverId - number | null
     */
    constructor(timestamp: bigint, type: ClientActivityType, clientUid: UUID, details: string, serverId: number | null)  {
        this.timestamp = timestamp;
        this.type = type;
        this.clientUid = clientUid;
        this.details = details;
        this.serverId = serverId;
        if (type === null || type === undefined) throw new Error(`Field 'type' cannot be null for type ClientActivity.`);
        
    }
    public getTimestamp(): bigint  {
        return this.timestamp;
        
    }
    public getType(): ClientActivityType  {
        return this.type;
        
    }
    public getClientUid(): UUID  {
        return this.clientUid;
        
    }
    public getDetails(): string  {
        return this.details;
        
    }
    public getServerId(): number | null  {
        return this.serverId;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientActivity.
     * @param {ClientActivity | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientActivity | null | undefined): number  {
        return ClientActivity.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientActivity with another object.
     * @param {ClientActivity | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientActivity | null | undefined, v2: any | null | undefined): boolean  {
        return ClientActivity.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientActivity.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientActivity.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientActivity.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientConnectionInfo structure.
 */
export class ClientConnectionInfo implements ToString  {
    public readonly connectedAt: bigint;
    public readonly disconnectedAt: bigint | null;
    public readonly serverId: number;
    public readonly context: KeyValuePair[];
    public readonly protocol: string;
    public static readonly META_BODY: FastMetaType<ClientConnectionInfo> = new Impl.ClientConnectionInfoMetaBodyImpl();
    public static readonly META: FastMetaType<ClientConnectionInfo> = ClientConnectionInfo.META_BODY;
    /**
     * Creates an instance of ClientConnectionInfo.
     * @param connectedAt - bigint
     * @param disconnectedAt - bigint | null
     * @param serverId - number
     * @param context - KeyValuePair[]
     * @param protocol - string
     */
    constructor(connectedAt: bigint, disconnectedAt: bigint | null, serverId: number, context: KeyValuePair[], protocol: string)  {
        this.connectedAt = connectedAt;
        this.disconnectedAt = disconnectedAt;
        this.serverId = serverId;
        this.context = context;
        this.protocol = protocol;
        if (context === null || context === undefined) throw new Error(`Field 'context' cannot be null for type ClientConnectionInfo.`);
        
    }
    public getConnectedAt(): bigint  {
        return this.connectedAt;
        
    }
    public getDisconnectedAt(): bigint | null  {
        return this.disconnectedAt;
        
    }
    public getServerId(): number  {
        return this.serverId;
        
    }
    public getContext(): KeyValuePair[]  {
        return this.context;
        
    }
    public contextContains(el: KeyValuePair): boolean  {
        return (this.context as KeyValuePair[]).includes(el as any);
        
    }
    public getProtocol(): string  {
        return this.protocol;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientConnectionInfo.
     * @param {ClientConnectionInfo | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientConnectionInfo | null | undefined): number  {
        return ClientConnectionInfo.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientConnectionInfo with another object.
     * @param {ClientConnectionInfo | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientConnectionInfo | null | undefined, v2: any | null | undefined): boolean  {
        return ClientConnectionInfo.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientConnectionInfo.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientConnectionInfo.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientConnectionInfo.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientInfo structure.
 */
export class ClientInfo implements ToString  {
    public readonly uid: UUID;
    public readonly cloud: Cloud;
    public readonly weights: CloudWeight[];
    public static readonly META_BODY: FastMetaType<ClientInfo> = new Impl.ClientInfoMetaBodyImpl();
    public static readonly META: FastMetaType<ClientInfo> = ClientInfo.META_BODY;
    /**
     * Creates an instance of ClientInfo.
     * @param uid - UUID
     * @param cloud - Cloud
     * @param weights - CloudWeight[]
     */
    constructor(uid: UUID, cloud: Cloud, weights: CloudWeight[])  {
        this.uid = uid;
        this.cloud = cloud;
        this.weights = weights;
        if (cloud === null || cloud === undefined) throw new Error(`Field 'cloud' cannot be null for type ClientInfo.`);
        if (weights === null || weights === undefined) throw new Error(`Field 'weights' cannot be null for type ClientInfo.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getCloud(): Cloud  {
        return this.cloud;
        
    }
    public getWeights(): CloudWeight[]  {
        return this.weights;
        
    }
    public weightsContains(el: CloudWeight): boolean  {
        return (this.weights as CloudWeight[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientInfo.
     * @param {ClientInfo | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientInfo | null | undefined): number  {
        return ClientInfo.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientInfo with another object.
     * @param {ClientInfo | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientInfo | null | undefined, v2: any | null | undefined): boolean  {
        return ClientInfo.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        ClientInfo.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientLogEntry structure.
 */
export class ClientLogEntry implements ToString  {
    public readonly timestamp: bigint;
    public readonly level: string;
    public readonly message: string;
    public readonly context: KeyValuePair[];
    public static readonly META_BODY: FastMetaType<ClientLogEntry> = new Impl.ClientLogEntryMetaBodyImpl();
    public static readonly META: FastMetaType<ClientLogEntry> = ClientLogEntry.META_BODY;
    /**
     * Creates an instance of ClientLogEntry.
     * @param timestamp - bigint
     * @param level - string
     * @param message - string
     * @param context - KeyValuePair[]
     */
    constructor(timestamp: bigint, level: string, message: string, context: KeyValuePair[])  {
        this.timestamp = timestamp;
        this.level = level;
        this.message = message;
        this.context = context;
        if (context === null || context === undefined) throw new Error(`Field 'context' cannot be null for type ClientLogEntry.`);
        
    }
    public getTimestamp(): bigint  {
        return this.timestamp;
        
    }
    public getLevel(): string  {
        return this.level;
        
    }
    public getMessage(): string  {
        return this.message;
        
    }
    public getContext(): KeyValuePair[]  {
        return this.context;
        
    }
    public contextContains(el: KeyValuePair): boolean  {
        return (this.context as KeyValuePair[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientLogEntry.
     * @param {ClientLogEntry | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientLogEntry | null | undefined): number  {
        return ClientLogEntry.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientLogEntry with another object.
     * @param {ClientLogEntry | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientLogEntry | null | undefined, v2: any | null | undefined): boolean  {
        return ClientLogEntry.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientLogEntry.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientLogEntry.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientLogEntry.META.metaToString(this, result);
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
        return ClientStateForSave.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientStateForSave with another object.
     * @param {ClientStateForSave | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientStateForSave | null | undefined, v2: any | null | undefined): boolean  {
        return ClientStateForSave.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        ClientStateForSave.META.metaToString(this, result);
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
        return Cloud.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of Cloud with another object.
     * @param {Cloud | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Cloud | null | undefined, v2: any | null | undefined): boolean  {
        return Cloud.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        Cloud.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the CloudConfig structure.
 */
export class CloudConfig implements ToString  {
    public readonly subjectUid: UUID;
    public readonly configVersion: bigint;
    public readonly cloud: Cloud;
    public static readonly META_BODY: FastMetaType<CloudConfig> = new Impl.CloudConfigMetaBodyImpl();
    public static readonly META: FastMetaType<CloudConfig> = CloudConfig.META_BODY;
    /**
     * Creates an instance of CloudConfig.
     * @param subjectUid - UUID
     * @param configVersion - bigint
     * @param cloud - Cloud
     */
    constructor(subjectUid: UUID, configVersion: bigint, cloud: Cloud)  {
        this.subjectUid = subjectUid;
        this.configVersion = configVersion;
        this.cloud = cloud;
        if (cloud === null || cloud === undefined) throw new Error(`Field 'cloud' cannot be null for type CloudConfig.`);
        
    }
    public getSubjectUid(): UUID  {
        return this.subjectUid;
        
    }
    public getConfigVersion(): bigint  {
        return this.configVersion;
        
    }
    public getCloud(): Cloud  {
        return this.cloud;
        
    }
    /**
     * Calculates a hash code for a static instance of CloudConfig.
     * @param {CloudConfig | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: CloudConfig | null | undefined): number  {
        return CloudConfig.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of CloudConfig with another object.
     * @param {CloudConfig | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: CloudConfig | null | undefined, v2: any | null | undefined): boolean  {
        return CloudConfig.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return CloudConfig.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return CloudConfig.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        CloudConfig.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the CloudWeight structure.
 */
export class CloudWeight implements ToString  {
    public readonly sid: number;
    public readonly weight: bigint;
    public static readonly META_BODY: FastMetaType<CloudWeight> = new Impl.CloudWeightMetaBodyImpl();
    public static readonly META: FastMetaType<CloudWeight> = CloudWeight.META_BODY;
    /**
     * Creates an instance of CloudWeight.
     * @param sid - number
     * @param weight - bigint
     */
    constructor(sid: number, weight: bigint)  {
        this.sid = sid;
        this.weight = weight;
        
    }
    public getSid(): number  {
        return this.sid;
        
    }
    public getWeight(): bigint  {
        return this.weight;
        
    }
    /**
     * Calculates a hash code for a static instance of CloudWeight.
     * @param {CloudWeight | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: CloudWeight | null | undefined): number  {
        return CloudWeight.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of CloudWeight with another object.
     * @param {CloudWeight | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: CloudWeight | null | undefined, v2: any | null | undefined): boolean  {
        return CloudWeight.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return CloudWeight.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return CloudWeight.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        CloudWeight.META.metaToString(this, result);
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
        return CoderAndPort.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of CoderAndPort with another object.
     * @param {CoderAndPort | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: CoderAndPort | null | undefined, v2: any | null | undefined): boolean  {
        return CoderAndPort.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        CoderAndPort.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the FinishResult structure.
 */
export class FinishResult implements ToString  {
    public readonly alias: UUID;
    public readonly uid: UUID;
    public readonly cloud: Cloud;
    public static readonly META_BODY: FastMetaType<FinishResult> = new Impl.FinishResultMetaBodyImpl();
    public static readonly META: FastMetaType<FinishResult> = FinishResult.META_BODY;
    /**
     * Creates an instance of FinishResult.
     * @param alias - UUID
     * @param uid - UUID
     * @param cloud - Cloud
     */
    constructor(alias: UUID, uid: UUID, cloud: Cloud)  {
        this.alias = alias;
        this.uid = uid;
        this.cloud = cloud;
        if (cloud === null || cloud === undefined) throw new Error(`Field 'cloud' cannot be null for type FinishResult.`);
        
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
     * Calculates a hash code for a static instance of FinishResult.
     * @param {FinishResult | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: FinishResult | null | undefined): number  {
        return FinishResult.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of FinishResult with another object.
     * @param {FinishResult | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: FinishResult | null | undefined, v2: any | null | undefined): boolean  {
        return FinishResult.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return FinishResult.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return FinishResult.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        FinishResult.META.metaToString(this, result);
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
        return FinishResultGlobalRegServerApi.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of FinishResultGlobalRegServerApi with another object.
     * @param {FinishResultGlobalRegServerApi | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: FinishResultGlobalRegServerApi | null | undefined, v2: any | null | undefined): boolean  {
        return FinishResultGlobalRegServerApi.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        FinishResultGlobalRegServerApi.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the HydrogenCurvePrivate structure.
 *
 * @aetherTypeId 1
 */
export class HydrogenCurvePrivate extends KeyAsymmetricPrivate implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenCurvePrivate must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return HydrogenCurvePrivate.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of HydrogenCurvePrivate with another object.
     * @param {HydrogenCurvePrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        return HydrogenCurvePrivate.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        HydrogenCurvePrivate.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the HydrogenCurvePublic structure.
 *
 * @aetherTypeId 2
 */
export class HydrogenCurvePublic extends KeyAsymmetricPublic implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenCurvePublic must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return HydrogenCurvePublic.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of HydrogenCurvePublic with another object.
     * @param {HydrogenCurvePublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        return HydrogenCurvePublic.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        HydrogenCurvePublic.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the HydrogenSecretBox structure.
 *
 * @aetherTypeId 3
 */
export class HydrogenSecretBox extends KeySymmetric implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenSecretBox must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return HydrogenSecretBox.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of HydrogenSecretBox with another object.
     * @param {HydrogenSecretBox | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenSecretBox | null | undefined, v2: any | null | undefined): boolean  {
        return HydrogenSecretBox.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        HydrogenSecretBox.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the HydrogenSignPrivate structure.
 *
 * @aetherTypeId 4
 */
export class HydrogenSignPrivate extends KeySignPrivate implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type HydrogenSignPrivate must be 64 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return HydrogenSignPrivate.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of HydrogenSignPrivate with another object.
     * @param {HydrogenSignPrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        return HydrogenSignPrivate.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        HydrogenSignPrivate.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the HydrogenSignPublic structure.
 *
 * @aetherTypeId 5
 */
export class HydrogenSignPublic extends KeySignPublic implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type HydrogenSignPublic must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return HydrogenSignPublic.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of HydrogenSignPublic with another object.
     * @param {HydrogenSignPublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: HydrogenSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        return HydrogenSignPublic.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        HydrogenSignPublic.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the IceCandidate structure.
 */
export class IceCandidate implements ToString  {
    public readonly data: Uint8Array;
    public static readonly META_BODY: FastMetaType<IceCandidate> = new Impl.IceCandidateMetaBodyImpl();
    public static readonly META: FastMetaType<IceCandidate> = IceCandidate.META_BODY;
    /**
     * Creates an instance of IceCandidate.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type IceCandidate.`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of IceCandidate.
     * @param {IceCandidate | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IceCandidate | null | undefined): number  {
        return IceCandidate.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IceCandidate with another object.
     * @param {IceCandidate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IceCandidate | null | undefined, v2: any | null | undefined): boolean  {
        return IceCandidate.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IceCandidate.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IceCandidate.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        IceCandidate.META.metaToString(this, result);
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
        return IPAddressAndPorts.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IPAddressAndPorts with another object.
     * @param {IPAddressAndPorts | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressAndPorts | null | undefined, v2: any | null | undefined): boolean  {
        return IPAddressAndPorts.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        IPAddressAndPorts.META.metaToString(this, result);
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
        return IPAddressAndPortsList.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IPAddressAndPortsList with another object.
     * @param {IPAddressAndPortsList | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressAndPortsList | null | undefined, v2: any | null | undefined): boolean  {
        return IPAddressAndPortsList.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        IPAddressAndPortsList.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the IPAddressV4 structure.
 *
 * @aetherTypeId 1
 */
export class IPAddressV4 extends IPAddress implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 4) throw new Error(`Array length for field 'data' in type IPAddressV4 must be 4 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return IPAddressV4.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IPAddressV4 with another object.
     * @param {IPAddressV4 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressV4 | null | undefined, v2: any | null | undefined): boolean  {
        return IPAddressV4.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        IPAddressV4.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the IPAddressV6 structure.
 *
 * @aetherTypeId 2
 */
export class IPAddressV6 extends IPAddress implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 16) throw new Error(`Array length for field 'data' in type IPAddressV6 must be 16 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return IPAddressV6.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IPAddressV6 with another object.
     * @param {IPAddressV6 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressV6 | null | undefined, v2: any | null | undefined): boolean  {
        return IPAddressV6.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        IPAddressV6.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the IPAddressWeb structure.
 *
 * @aetherTypeId 3
 */
export class IPAddressWeb extends IPAddress implements ToString, FastMetaHierarchyType  {
    public readonly data: Uint8Array;
    public override getAetherTypeId(): number  {
        return 3;
        
    }
    public static readonly META_BODY: FastMetaType<IPAddressWeb> = new Impl.IPAddressWebMetaBodyImpl();
    public static readonly META: FastMetaType<IPAddressWeb> = new Impl.IPAddressWebMetaImpl();
    /**
     * Creates an instance of IPAddressWeb.
     * @param data - Uint8Array
     */
    constructor(data: Uint8Array)  {
        super();
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type IPAddressWeb.`);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of IPAddressWeb.
     * @param {IPAddressWeb | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IPAddressWeb | null | undefined): number  {
        return IPAddressWeb.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IPAddressWeb with another object.
     * @param {IPAddressWeb | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IPAddressWeb | null | undefined, v2: any | null | undefined): boolean  {
        return IPAddressWeb.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IPAddressWeb.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IPAddressWeb.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        IPAddressWeb.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the IpInfo structure.
 */
export class IpInfo implements ToString  {
    public readonly ip: IPAddress;
    public readonly port: number;
    public readonly latitude: number;
    public readonly longitude: number;
    public static readonly META_BODY: FastMetaType<IpInfo> = new Impl.IpInfoMetaBodyImpl();
    public static readonly META: FastMetaType<IpInfo> = IpInfo.META_BODY;
    /**
     * Creates an instance of IpInfo.
     * @param ip - IPAddress
     * @param port - number
     * @param latitude - number
     * @param longitude - number
     */
    constructor(ip: IPAddress, port: number, latitude: number, longitude: number)  {
        this.ip = ip;
        this.port = port;
        this.latitude = latitude;
        this.longitude = longitude;
        if (ip === null || ip === undefined) throw new Error(`Field 'ip' cannot be null for type IpInfo.`);
        
    }
    public getIp(): IPAddress  {
        return this.ip;
        
    }
    public getPort(): number  {
        return this.port;
        
    }
    public getLatitude(): number  {
        return this.latitude;
        
    }
    public getLongitude(): number  {
        return this.longitude;
        
    }
    /**
     * Calculates a hash code for a static instance of IpInfo.
     * @param {IpInfo | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: IpInfo | null | undefined): number  {
        return IpInfo.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of IpInfo with another object.
     * @param {IpInfo | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: IpInfo | null | undefined, v2: any | null | undefined): boolean  {
        return IpInfo.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return IpInfo.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return IpInfo.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        IpInfo.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the KeyValuePair structure.
 */
export class KeyValuePair implements ToString  {
    public readonly key: string;
    public readonly value: string;
    public static readonly META_BODY: FastMetaType<KeyValuePair> = new Impl.KeyValuePairMetaBodyImpl();
    public static readonly META: FastMetaType<KeyValuePair> = KeyValuePair.META_BODY;
    /**
     * Creates an instance of KeyValuePair.
     * @param key - string
     * @param value - string
     */
    constructor(key: string, value: string)  {
        this.key = key;
        this.value = value;
        
    }
    public getKey(): string  {
        return this.key;
        
    }
    public getValue(): string  {
        return this.value;
        
    }
    /**
     * Calculates a hash code for a static instance of KeyValuePair.
     * @param {KeyValuePair | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: KeyValuePair | null | undefined): number  {
        return KeyValuePair.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of KeyValuePair with another object.
     * @param {KeyValuePair | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: KeyValuePair | null | undefined, v2: any | null | undefined): boolean  {
        return KeyValuePair.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return KeyValuePair.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return KeyValuePair.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        KeyValuePair.META.metaToString(this, result);
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
        return Message.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of Message with another object.
     * @param {Message | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Message | null | undefined, v2: any | null | undefined): boolean  {
        return Message.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        Message.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the MessageInfo structure.
 */
export class MessageInfo implements ToString  {
    public readonly timestamp: bigint;
    public readonly fromUid: UUID;
    public readonly toUid: UUID;
    public readonly size: number;
    public readonly messageId: UUID;
    public static readonly META_BODY: FastMetaType<MessageInfo> = new Impl.MessageInfoMetaBodyImpl();
    public static readonly META: FastMetaType<MessageInfo> = MessageInfo.META_BODY;
    /**
     * Creates an instance of MessageInfo.
     * @param timestamp - bigint
     * @param fromUid - UUID
     * @param toUid - UUID
     * @param size - number
     * @param messageId - UUID
     */
    constructor(timestamp: bigint, fromUid: UUID, toUid: UUID, size: number, messageId: UUID)  {
        this.timestamp = timestamp;
        this.fromUid = fromUid;
        this.toUid = toUid;
        this.size = size;
        this.messageId = messageId;
        
    }
    public getTimestamp(): bigint  {
        return this.timestamp;
        
    }
    public getFromUid(): UUID  {
        return this.fromUid;
        
    }
    public getToUid(): UUID  {
        return this.toUid;
        
    }
    public getSize(): number  {
        return this.size;
        
    }
    public getMessageId(): UUID  {
        return this.messageId;
        
    }
    /**
     * Calculates a hash code for a static instance of MessageInfo.
     * @param {MessageInfo | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: MessageInfo | null | undefined): number  {
        return MessageInfo.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of MessageInfo with another object.
     * @param {MessageInfo | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: MessageInfo | null | undefined, v2: any | null | undefined): boolean  {
        return MessageInfo.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return MessageInfo.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return MessageInfo.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        MessageInfo.META.metaToString(this, result);
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
        return MoneyOperation.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of MoneyOperation with another object.
     * @param {MoneyOperation | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: MoneyOperation | null | undefined, v2: any | null | undefined): boolean  {
        return MoneyOperation.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        MoneyOperation.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the PairKeysAsym structure.
 *
 * @aetherTypeId 1
 */
export class PairKeysAsym extends PairKeys implements ToString, FastMetaHierarchyType  {
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
        return PairKeysAsym.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of PairKeysAsym with another object.
     * @param {PairKeysAsym | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysAsym | null | undefined, v2: any | null | undefined): boolean  {
        return PairKeysAsym.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        PairKeysAsym.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the PairKeysAsymSigned structure.
 *
 * @aetherTypeId 2
 */
export class PairKeysAsymSigned extends PairKeys implements ToString, FastMetaHierarchyType  {
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
        return PairKeysAsymSigned.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of PairKeysAsymSigned with another object.
     * @param {PairKeysAsymSigned | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysAsymSigned | null | undefined, v2: any | null | undefined): boolean  {
        return PairKeysAsymSigned.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        PairKeysAsymSigned.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the PairKeysSign structure.
 *
 * @aetherTypeId 3
 */
export class PairKeysSign extends PairKeys implements ToString, FastMetaHierarchyType  {
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
        return PairKeysSign.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of PairKeysSign with another object.
     * @param {PairKeysSign | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysSign | null | undefined, v2: any | null | undefined): boolean  {
        return PairKeysSign.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        PairKeysSign.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the PairKeysSym structure.
 *
 * @aetherTypeId 4
 */
export class PairKeysSym extends PairKeys implements ToString, FastMetaHierarchyType  {
    public readonly clientToServer: KeySymmetric;
    public readonly serverToClient: KeySymmetric;
    public override getAetherTypeId(): number  {
        return 4;
        
    }
    public static readonly META_BODY: FastMetaType<PairKeysSym> = new Impl.PairKeysSymMetaBodyImpl();
    public static readonly META: FastMetaType<PairKeysSym> = new Impl.PairKeysSymMetaImpl();
    /**
     * Creates an instance of PairKeysSym.
     * @param clientToServer - KeySymmetric
     * @param serverToClient - KeySymmetric
     */
    constructor(clientToServer: KeySymmetric, serverToClient: KeySymmetric)  {
        super();
        this.clientToServer = clientToServer;
        this.serverToClient = serverToClient;
        if (clientToServer === null || clientToServer === undefined) throw new Error(`Field 'clientToServer' cannot be null for type PairKeysSym.`);
        if (serverToClient === null || serverToClient === undefined) throw new Error(`Field 'serverToClient' cannot be null for type PairKeysSym.`);
        
    }
    public getClientToServer(): KeySymmetric  {
        return this.clientToServer;
        
    }
    public getServerToClient(): KeySymmetric  {
        return this.serverToClient;
        
    }
    /**
     * Calculates a hash code for a static instance of PairKeysSym.
     * @param {PairKeysSym | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: PairKeysSym | null | undefined): number  {
        return PairKeysSym.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of PairKeysSym with another object.
     * @param {PairKeysSym | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: PairKeysSym | null | undefined, v2: any | null | undefined): boolean  {
        return PairKeysSym.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return PairKeysSym.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return PairKeysSym.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        PairKeysSym.META.metaToString(this, result);
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
        return ServerDescriptor.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerDescriptor with another object.
     * @param {ServerDescriptor | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerDescriptor | null | undefined, v2: any | null | undefined): boolean  {
        return ServerDescriptor.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        ServerDescriptor.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerDescriptorWithGeo structure.
 */
export class ServerDescriptorWithGeo implements ToString  {
    public readonly id: number;
    public readonly time: number;
    public readonly ipAddress: IPAddressAndPortsList;
    public readonly latitude: number;
    public readonly longitude: number;
    public readonly type: ServerType;
    public static readonly META_BODY: FastMetaType<ServerDescriptorWithGeo> = new Impl.ServerDescriptorWithGeoMetaBodyImpl();
    public static readonly META: FastMetaType<ServerDescriptorWithGeo> = ServerDescriptorWithGeo.META_BODY;
    /**
     * Creates an instance of ServerDescriptorWithGeo.
     * @param id - number
     * @param time - number
     * @param ipAddress - IPAddressAndPortsList
     * @param latitude - number
     * @param longitude - number
     * @param type - ServerType
     */
    constructor(id: number, time: number, ipAddress: IPAddressAndPortsList, latitude: number, longitude: number, type: ServerType)  {
        this.id = id;
        this.time = time;
        this.ipAddress = ipAddress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        if (ipAddress === null || ipAddress === undefined) throw new Error(`Field 'ipAddress' cannot be null for type ServerDescriptorWithGeo.`);
        if (type === null || type === undefined) throw new Error(`Field 'type' cannot be null for type ServerDescriptorWithGeo.`);
        
    }
    public getId(): number  {
        return this.id;
        
    }
    public getTime(): number  {
        return this.time;
        
    }
    public getIpAddress(): IPAddressAndPortsList  {
        return this.ipAddress;
        
    }
    public getLatitude(): number  {
        return this.latitude;
        
    }
    public getLongitude(): number  {
        return this.longitude;
        
    }
    public getType(): ServerType  {
        return this.type;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerDescriptorWithGeo.
     * @param {ServerDescriptorWithGeo | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerDescriptorWithGeo | null | undefined): number  {
        return ServerDescriptorWithGeo.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerDescriptorWithGeo with another object.
     * @param {ServerDescriptorWithGeo | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerDescriptorWithGeo | null | undefined, v2: any | null | undefined): boolean  {
        return ServerDescriptorWithGeo.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerDescriptorWithGeo.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerDescriptorWithGeo.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerDescriptorWithGeo.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SignAE_ED25519 structure.
 *
 * @aetherTypeId 1
 */
export class SignAE_ED25519 extends Sign implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type SignAE_ED25519 must be 64 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SignAE_ED25519.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SignAE_ED25519 with another object.
     * @param {SignAE_ED25519 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SignAE_ED25519 | null | undefined, v2: any | null | undefined): boolean  {
        return SignAE_ED25519.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SignAE_ED25519.META.metaToString(this, result);
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
        return SignedKey.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SignedKey with another object.
     * @param {SignedKey | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SignedKey | null | undefined, v2: any | null | undefined): boolean  {
        return SignedKey.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SignedKey.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SignHYDROGEN structure.
 *
 * @aetherTypeId 2
 */
export class SignHYDROGEN extends Sign implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type SignHYDROGEN must be 64 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SignHYDROGEN.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SignHYDROGEN with another object.
     * @param {SignHYDROGEN | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SignHYDROGEN | null | undefined, v2: any | null | undefined): boolean  {
        return SignHYDROGEN.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SignHYDROGEN.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SodiumChacha20Poly1305 structure.
 *
 * @aetherTypeId 6
 */
export class SodiumChacha20Poly1305 extends KeySymmetric implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumChacha20Poly1305 must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SodiumChacha20Poly1305.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SodiumChacha20Poly1305 with another object.
     * @param {SodiumChacha20Poly1305 | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumChacha20Poly1305 | null | undefined, v2: any | null | undefined): boolean  {
        return SodiumChacha20Poly1305.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SodiumChacha20Poly1305.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SodiumCurvePrivate structure.
 *
 * @aetherTypeId 7
 */
export class SodiumCurvePrivate extends KeyAsymmetricPrivate implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumCurvePrivate must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SodiumCurvePrivate.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SodiumCurvePrivate with another object.
     * @param {SodiumCurvePrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumCurvePrivate | null | undefined, v2: any | null | undefined): boolean  {
        return SodiumCurvePrivate.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SodiumCurvePrivate.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SodiumCurvePublic structure.
 *
 * @aetherTypeId 8
 */
export class SodiumCurvePublic extends KeyAsymmetricPublic implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumCurvePublic must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SodiumCurvePublic.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SodiumCurvePublic with another object.
     * @param {SodiumCurvePublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumCurvePublic | null | undefined, v2: any | null | undefined): boolean  {
        return SodiumCurvePublic.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SodiumCurvePublic.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SodiumSignPrivate structure.
 *
 * @aetherTypeId 9
 */
export class SodiumSignPrivate extends KeySignPrivate implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 64) throw new Error(`Array length for field 'data' in type SodiumSignPrivate must be 64 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SodiumSignPrivate.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SodiumSignPrivate with another object.
     * @param {SodiumSignPrivate | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumSignPrivate | null | undefined, v2: any | null | undefined): boolean  {
        return SodiumSignPrivate.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SodiumSignPrivate.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the SodiumSignPublic structure.
 *
 * @aetherTypeId 10
 */
export class SodiumSignPublic extends KeySignPublic implements ToString, FastMetaHierarchyType  {
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
        if (data.length !== 32) throw new Error(`Array length for field 'data' in type SodiumSignPublic must be 32 but was ${data ? data.length : 'null/undefined'}.`);
        
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
        return SodiumSignPublic.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of SodiumSignPublic with another object.
     * @param {SodiumSignPublic | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: SodiumSignPublic | null | undefined, v2: any | null | undefined): boolean  {
        return SodiumSignPublic.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        SodiumSignPublic.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the TelemetryCPP structure.
 *
 * @aetherTypeId 1
 */
export class TelemetryCPP extends Telemetry implements ToString, FastMetaHierarchyType  {
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
        return TelemetryCPP.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of TelemetryCPP with another object.
     * @param {TelemetryCPP | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: TelemetryCPP | null | undefined, v2: any | null | undefined): boolean  {
        return TelemetryCPP.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        TelemetryCPP.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the Uap structure.
 */
export class Uap implements ToString  {
    public readonly deltaMs: bigint;
    public readonly lastReadTimestamp: bigint;
    public static readonly META_BODY: FastMetaType<Uap> = new Impl.UapMetaBodyImpl();
    public static readonly META: FastMetaType<Uap> = Uap.META_BODY;
    /**
     * Creates an instance of Uap.
     * @param deltaMs - bigint
     * @param lastReadTimestamp - bigint
     */
    constructor(deltaMs: bigint, lastReadTimestamp: bigint)  {
        this.deltaMs = deltaMs;
        this.lastReadTimestamp = lastReadTimestamp;
        
    }
    public getDeltaMs(): bigint  {
        return this.deltaMs;
        
    }
    public getLastReadTimestamp(): bigint  {
        return this.lastReadTimestamp;
        
    }
    /**
     * Calculates a hash code for a static instance of Uap.
     * @param {Uap | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: Uap | null | undefined): number  {
        return Uap.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of Uap with another object.
     * @param {Uap | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: Uap | null | undefined, v2: any | null | undefined): boolean  {
        return Uap.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return Uap.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return Uap.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        Uap.META.metaToString(this, result);
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
        return UUIDAndCloud.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of UUIDAndCloud with another object.
     * @param {UUIDAndCloud | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: UUIDAndCloud | null | undefined, v2: any | null | undefined): boolean  {
        return UUIDAndCloud.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        UUIDAndCloud.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the WebRtcSession structure.
 */
export class WebRtcSession implements ToString  {
    public readonly sdp: Uint8Array;
    public readonly candidates: IceCandidate[];
    public static readonly META_BODY: FastMetaType<WebRtcSession> = new Impl.WebRtcSessionMetaBodyImpl();
    public static readonly META: FastMetaType<WebRtcSession> = WebRtcSession.META_BODY;
    /**
     * Creates an instance of WebRtcSession.
     * @param sdp - Uint8Array
     * @param candidates - IceCandidate[]
     */
    constructor(sdp: Uint8Array, candidates: IceCandidate[])  {
        this.sdp = sdp;
        this.candidates = candidates;
        if (sdp === null || sdp === undefined) throw new Error(`Field 'sdp' cannot be null for type WebRtcSession.`);
        if (candidates === null || candidates === undefined) throw new Error(`Field 'candidates' cannot be null for type WebRtcSession.`);
        
    }
    public getSdp(): Uint8Array  {
        return this.sdp;
        
    }
    public sdpContains(el: number): boolean  {
        return (this.sdp as Uint8Array).includes(el as any);
        
    }
    public getCandidates(): IceCandidate[]  {
        return this.candidates;
        
    }
    public candidatesContains(el: IceCandidate): boolean  {
        return (this.candidates as IceCandidate[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of WebRtcSession.
     * @param {WebRtcSession | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: WebRtcSession | null | undefined): number  {
        return WebRtcSession.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of WebRtcSession with another object.
     * @param {WebRtcSession | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: WebRtcSession | null | undefined, v2: any | null | undefined): boolean  {
        return WebRtcSession.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return WebRtcSession.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return WebRtcSession.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        WebRtcSession.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the WorkProofBCrypt structure.
 *
 * @aetherTypeId 1
 */
export class WorkProofBCrypt extends WorkProofConfig implements ToString, FastMetaHierarchyType  {
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
        return WorkProofBCrypt.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of WorkProofBCrypt with another object.
     * @param {WorkProofBCrypt | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: WorkProofBCrypt | null | undefined, v2: any | null | undefined): boolean  {
        return WorkProofBCrypt.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        WorkProofBCrypt.META.metaToString(this, result);
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
        return WorkProofDTO.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of WorkProofDTO with another object.
     * @param {WorkProofDTO | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: WorkProofDTO | null | undefined, v2: any | null | undefined): boolean  {
        return WorkProofDTO.META.metaEquals(v1, v2);
        
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
    public toAString(result: AString): AString  {
        WorkProofDTO.META.metaToString(this, result);
        return result;
        
    }
    
}
export class ClientApiRegSafeStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends ClientApiRegSafeStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => ClientApiRegSafe) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends ClientApiRegSafe>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => ClientApiRegSafe, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (ClientApiRegSafe as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends ClientApiRegSafeStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: ClientApiRegSafeRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        
    };
    public static readonly META: FastMetaType<ClientApiRegSafeStream> = new Impl.ClientApiRegSafeStreamMetaImpl();
    public toAString(result: AString): AString  {
        ClientApiRegSafeStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class ClientApiStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends ClientApiStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => ServerApiByUid) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends ServerApiByUid>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => ServerApiByUid, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (ServerApiByUid as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends ClientApiStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: ServerApiByUidRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        
    };
    public static readonly META: FastMetaType<ClientApiStream> = new Impl.ClientApiStreamMetaImpl();
    public toAString(result: AString): AString  {
        ClientApiStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class ClientInteractionClientStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends ClientInteractionClientStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => ServerApiByUidClient) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends ServerApiByUidClient>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => ServerApiByUidClient, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (ServerApiByUidClient as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends ClientInteractionClientStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: ServerApiByUidClientRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        
    };
    public static readonly META: FastMetaType<ClientInteractionClientStream> = new Impl.ClientInteractionClientStreamMetaImpl();
    public toAString(result: AString): AString  {
        ClientInteractionClientStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class GlobalApiStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends GlobalApiStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => GlobalRegServerApi) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends GlobalRegServerApi>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => GlobalRegServerApi, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (GlobalRegServerApi as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends GlobalApiStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: GlobalRegServerApiRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        
    };
    public static readonly META: FastMetaType<GlobalApiStream> = new Impl.GlobalApiStreamMetaImpl();
    public toAString(result: AString): AString  {
        GlobalApiStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class GlobalRegClientApiStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends GlobalRegClientApiStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => GlobalRegClientApi) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends GlobalRegClientApi>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => GlobalRegClientApi, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (GlobalRegClientApi as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends GlobalRegClientApiStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: GlobalRegClientApiRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        
    };
    public static readonly META: FastMetaType<GlobalRegClientApiStream> = new Impl.GlobalRegClientApiStreamMetaImpl();
    public toAString(result: AString): AString  {
        GlobalRegClientApiStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class LoginClientStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends LoginClientStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => ClientApiSafe) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends ClientApiSafe>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => ClientApiSafe, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (ClientApiSafe as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends LoginClientStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: ClientApiSafeRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        
    };
    public static readonly META: FastMetaType<LoginClientStream> = new Impl.LoginClientStreamMetaImpl();
    public toAString(result: AString): AString  {
        LoginClientStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class LoginStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends LoginStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => AuthorizedApi) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends AuthorizedApi>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        onFlushToRemote<RT extends RemoteApi>(meta: FastMetaApi<any, RT>, c: (data: Uint8Array, remote: RT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d, (this.parentContext as any).makeRemote(meta));
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => AuthorizedApi, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteApi(): ClientApiSafeRemote  {
            if (!this.factory) throw new Error("factory is not set");
            const activeCtx = this.parentContext!.findContext(this.factory!, ...(this._streamKeys || []));
            return activeCtx.makeRemote((ClientApiSafe as any).META) as ClientApiSafeRemote;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (AuthorizedApi as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends LoginStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: AuthorizedApiRemote) => void, factory: (ctx: MetaContext) => ClientApiSafe, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        
    };
    public static readonly META: FastMetaType<LoginStream> = new Impl.LoginStreamMetaImpl();
    public toAString(result: AString): AString  {
        LoginStream.META.metaToString(this, result);
        return result;
        
    }
    
}
export class ServerRegistrationApiStream implements ToString  {
    public data: Uint8Array;
    constructor(data: Uint8Array)  {
        this.data = data;
        
    }
    public asIn(): any  {
        return this as any;
        
    }
    public static readonly In = class In extends ServerRegistrationApiStream  {
        public parentContext: MetaContext | null = null;
        public activeContext: MetaContext | null = null;
        public factory: ((ctx: MetaContext) => ServerRegistrationApi) | null = null;
        public _streamKeys: any[] | null = null;
        public onFlushC: ((cc: MetaContext) => void) | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor(data: Uint8Array, parentContext: MetaContext)  {
            super(data);
            this.parentContext = parentContext;
            
        }
        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d);
                
            };
            return this;
            
        }
        onFlushWithLocal<LT extends ServerRegistrationApi>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(cc, d, cc.getLocalApi() as LT);
                
            };
            return this;
            
        }
        onFlushCtx(c: (cc: MetaContext) => void): this  {
            this.onFlushC = c;
            return this;
            
        }
        onFlushData(c: (data: Uint8Array) => void): this  {
            this.onFlushC = (cc) =>  {
                const d = cc.remoteDataToArrayAsArray();
                if (d.length > 0) c(d);
                
            };
            return this;
            
        }
        keys(factory: (ctx: MetaContext) => ServerRegistrationApi, ...keys: any[]): this  {
            this.factory = factory;
            this._streamKeys = keys;
            return this;
            
        }
        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT  {
            return this.parentContext!.makeRemote(meta) as RT;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        ctx(c: MetaContext): this  {
            this.activeContext = c;
            return this;
            
        }
        accept(): void  {
            let targetData = this.data;
            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);
            if (!this.activeContext)  {
                if (!this.factory) throw new Error("factory is null");
                let effectiveFactory = this.factory;
                if (this.onFlushC)  {
                    const flushCallback = this.onFlushC;
                    effectiveFactory = (ctx: MetaContext) =>  {
                        ctx.onFlush(() => flushCallback(ctx));
                        return this.factory!(ctx);
                        
                    };
                    
                }
                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));
                
            }
            (ServerRegistrationApi as any).META.makeLocal(this.activeContext, new DataInOutStatic(targetData));
            
        }
        
    };
    public static readonly Out = class Out extends ServerRegistrationApiStream  {
        public deferredRemoteGenerator: ((api: any) => void) | null = null;
        public deferredFactory: ((ctx: MetaContext) => any) | null = null;
        public deferredKeys: any[] | null = null;
        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;
        constructor()  {
            super(new Uint8Array(0));
            
        }
        static send(rawData: Uint8Array): Out  {
            const out = new Out();
            (out as any).data = rawData;
            return out;
            
        }
        static sendWithApi(remoteGenerator: (api: ServerRegistrationApiRemote) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out  {
            const out = new Out();
            out.deferredRemoteGenerator = remoteGenerator as any;
            out.deferredFactory = factory as any;
            out.deferredKeys = keys;
            return out;
            
        }
        convert(converter: (data: Uint8Array) => Uint8Array): this  {
            this.cryptoConverter = converter;
            return this;
            
        }
        
    };
    public static readonly META: FastMetaType<ServerRegistrationApiStream> = new Impl.ServerRegistrationApiStreamMetaImpl();
    public toAString(result: AString): AString  {
        ServerRegistrationApiStream.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiUnsafeSendSafeApiDataMultiArguments structure.
 */
export class ClientApiUnsafeSendSafeApiDataMultiArguments implements ToString  {
    public readonly backId: number;
    public readonly data: LoginClientStream;
    public static readonly META_BODY: FastMetaType<ClientApiUnsafeSendSafeApiDataMultiArguments> = new Impl.ClientApiUnsafeSendSafeApiDataMultiArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiUnsafeSendSafeApiDataMultiArguments> = ClientApiUnsafeSendSafeApiDataMultiArguments.META_BODY;
    /**
     * Creates an instance of ClientApiUnsafeSendSafeApiDataMultiArguments.
     * @param backId - number
     * @param data - LoginClientStream
     */
    constructor(backId: number, data: LoginClientStream)  {
        this.backId = backId;
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type ClientApiUnsafeSendSafeApiDataMultiArguments.`);
        
    }
    public getBackId(): number  {
        return this.backId;
        
    }
    public getData(): LoginClientStream  {
        return this.data;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiUnsafeSendSafeApiDataMultiArguments.
     * @param {ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined): number  {
        return ClientApiUnsafeSendSafeApiDataMultiArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiUnsafeSendSafeApiDataMultiArguments with another object.
     * @param {ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiUnsafeSendSafeApiDataMultiArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiUnsafeSendSafeApiDataMultiArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiUnsafeSendSafeApiDataMultiArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiUnsafeSendSafeApiDataMultiArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiUnsafeSendSafeApiDataMultiArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiUnsafeSendSafeApiDataArguments structure.
 */
export class ClientApiUnsafeSendSafeApiDataArguments implements ToString  {
    public readonly data: LoginClientStream;
    public static readonly META_BODY: FastMetaType<ClientApiUnsafeSendSafeApiDataArguments> = new Impl.ClientApiUnsafeSendSafeApiDataArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiUnsafeSendSafeApiDataArguments> = ClientApiUnsafeSendSafeApiDataArguments.META_BODY;
    /**
     * Creates an instance of ClientApiUnsafeSendSafeApiDataArguments.
     * @param data - LoginClientStream
     */
    constructor(data: LoginClientStream)  {
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type ClientApiUnsafeSendSafeApiDataArguments.`);
        
    }
    public getData(): LoginClientStream  {
        return this.data;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiUnsafeSendSafeApiDataArguments.
     * @param {ClientApiUnsafeSendSafeApiDataArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiUnsafeSendSafeApiDataArguments | null | undefined): number  {
        return ClientApiUnsafeSendSafeApiDataArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiUnsafeSendSafeApiDataArguments with another object.
     * @param {ClientApiUnsafeSendSafeApiDataArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiUnsafeSendSafeApiDataArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiUnsafeSendSafeApiDataArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiUnsafeSendSafeApiDataArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiUnsafeSendSafeApiDataArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiUnsafeSendSafeApiDataArguments.META.metaToString(this, result);
        return result;
        
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
    sendSafeApiDataMultiArguments?(args: ClientApiUnsafeSendSafeApiDataMultiArguments): void;
    /**
     * @param data - LoginClientStream
     *
     * @aetherMethodId 4
     */
    sendSafeApiData(data: LoginClientStream): void;
    sendSafeApiDataArguments?(args: ClientApiUnsafeSendSafeApiDataArguments): void;
    
}
export namespace ClientApiUnsafe  {
    export const META: FastMetaApi<ClientApiUnsafe, ClientApiUnsafeRemote> = new Impl.ClientApiUnsafeMetaImpl();
    
}
export interface ClientApiUnsafeRemote extends ClientApiUnsafe, RemoteApi  {
    openSendSafeApiDataMulti(backId: number, factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote;
    openSendSafeApiData(factory: (api: ClientApiSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiSafeRemote;
    
}
export abstract class ClientApiUnsafeLocal<RT extends RemoteApi> implements ClientApiUnsafe  {
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
    public sendSafeApiDataMultiArguments(args: ClientApiUnsafeSendSafeApiDataMultiArguments): void  {
        this.sendSafeApiDataMulti(args.backId, args.data);
        
    }
    /**
     * @param data - LoginClientStream
     *
     * @aetherMethodId 4
     */
    public abstract sendSafeApiData(data: LoginClientStream): void;
    public sendSafeApiDataArguments(args: ClientApiUnsafeSendSafeApiDataArguments): void  {
        this.sendSafeApiData(args.data);
        
    }
    
}
/**
 * Represents the ClientApiSafeChangeParentArguments structure.
 */
export class ClientApiSafeChangeParentArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<ClientApiSafeChangeParentArguments> = new Impl.ClientApiSafeChangeParentArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeChangeParentArguments> = ClientApiSafeChangeParentArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeChangeParentArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeChangeParentArguments.
     * @param {ClientApiSafeChangeParentArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeChangeParentArguments | null | undefined): number  {
        return ClientApiSafeChangeParentArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeChangeParentArguments with another object.
     * @param {ClientApiSafeChangeParentArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeChangeParentArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeChangeParentArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeChangeParentArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeChangeParentArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeChangeParentArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeChangeAliasArguments structure.
 */
export class ClientApiSafeChangeAliasArguments implements ToString  {
    public readonly alias: UUID;
    public static readonly META_BODY: FastMetaType<ClientApiSafeChangeAliasArguments> = new Impl.ClientApiSafeChangeAliasArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeChangeAliasArguments> = ClientApiSafeChangeAliasArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeChangeAliasArguments.
     * @param alias - UUID
     */
    constructor(alias: UUID)  {
        this.alias = alias;
        
    }
    public getAlias(): UUID  {
        return this.alias;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeChangeAliasArguments.
     * @param {ClientApiSafeChangeAliasArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeChangeAliasArguments | null | undefined): number  {
        return ClientApiSafeChangeAliasArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeChangeAliasArguments with another object.
     * @param {ClientApiSafeChangeAliasArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeChangeAliasArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeChangeAliasArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeChangeAliasArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeChangeAliasArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeChangeAliasArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeNewChildrenArguments structure.
 */
export class ClientApiSafeNewChildrenArguments implements ToString  {
    public readonly uids: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeNewChildrenArguments> = new Impl.ClientApiSafeNewChildrenArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeNewChildrenArguments> = ClientApiSafeNewChildrenArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeNewChildrenArguments.
     * @param uids - UUID[]
     */
    constructor(uids: UUID[])  {
        this.uids = uids;
        if (uids === null || uids === undefined) throw new Error(`Field 'uids' cannot be null for type ClientApiSafeNewChildrenArguments.`);
        
    }
    public getUids(): UUID[]  {
        return this.uids;
        
    }
    public uidsContains(el: UUID): boolean  {
        return (this.uids as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeNewChildrenArguments.
     * @param {ClientApiSafeNewChildrenArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeNewChildrenArguments | null | undefined): number  {
        return ClientApiSafeNewChildrenArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeNewChildrenArguments with another object.
     * @param {ClientApiSafeNewChildrenArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeNewChildrenArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeNewChildrenArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeNewChildrenArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeNewChildrenArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeNewChildrenArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendMessagesArguments structure.
 */
export class ClientApiSafeSendMessagesArguments implements ToString  {
    public readonly msg: Message[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendMessagesArguments> = new Impl.ClientApiSafeSendMessagesArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendMessagesArguments> = ClientApiSafeSendMessagesArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendMessagesArguments.
     * @param msg - Message[]
     */
    constructor(msg: Message[])  {
        this.msg = msg;
        if (msg === null || msg === undefined) throw new Error(`Field 'msg' cannot be null for type ClientApiSafeSendMessagesArguments.`);
        
    }
    public getMsg(): Message[]  {
        return this.msg;
        
    }
    public msgContains(el: Message): boolean  {
        return (this.msg as Message[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendMessagesArguments.
     * @param {ClientApiSafeSendMessagesArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendMessagesArguments | null | undefined): number  {
        return ClientApiSafeSendMessagesArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendMessagesArguments with another object.
     * @param {ClientApiSafeSendMessagesArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendMessagesArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendMessagesArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendMessagesArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendMessagesArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendServerDescriptorArguments structure.
 */
export class ClientApiSafeSendServerDescriptorArguments implements ToString  {
    public readonly serverDescriptor: ServerDescriptor;
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendServerDescriptorArguments> = new Impl.ClientApiSafeSendServerDescriptorArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendServerDescriptorArguments> = ClientApiSafeSendServerDescriptorArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendServerDescriptorArguments.
     * @param serverDescriptor - ServerDescriptor
     */
    constructor(serverDescriptor: ServerDescriptor)  {
        this.serverDescriptor = serverDescriptor;
        if (serverDescriptor === null || serverDescriptor === undefined) throw new Error(`Field 'serverDescriptor' cannot be null for type ClientApiSafeSendServerDescriptorArguments.`);
        
    }
    public getServerDescriptor(): ServerDescriptor  {
        return this.serverDescriptor;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendServerDescriptorArguments.
     * @param {ClientApiSafeSendServerDescriptorArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendServerDescriptorArguments | null | undefined): number  {
        return ClientApiSafeSendServerDescriptorArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendServerDescriptorArguments with another object.
     * @param {ClientApiSafeSendServerDescriptorArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendServerDescriptorArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendServerDescriptorArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendServerDescriptorArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendServerDescriptorArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendServerDescriptorArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendServerDescriptorsArguments structure.
 */
export class ClientApiSafeSendServerDescriptorsArguments implements ToString  {
    public readonly serverDescriptors: ServerDescriptor[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendServerDescriptorsArguments> = new Impl.ClientApiSafeSendServerDescriptorsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendServerDescriptorsArguments> = ClientApiSafeSendServerDescriptorsArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendServerDescriptorsArguments.
     * @param serverDescriptors - ServerDescriptor[]
     */
    constructor(serverDescriptors: ServerDescriptor[])  {
        this.serverDescriptors = serverDescriptors;
        if (serverDescriptors === null || serverDescriptors === undefined) throw new Error(`Field 'serverDescriptors' cannot be null for type ClientApiSafeSendServerDescriptorsArguments.`);
        
    }
    public getServerDescriptors(): ServerDescriptor[]  {
        return this.serverDescriptors;
        
    }
    public serverDescriptorsContains(el: ServerDescriptor): boolean  {
        return (this.serverDescriptors as ServerDescriptor[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendServerDescriptorsArguments.
     * @param {ClientApiSafeSendServerDescriptorsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendServerDescriptorsArguments | null | undefined): number  {
        return ClientApiSafeSendServerDescriptorsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendServerDescriptorsArguments with another object.
     * @param {ClientApiSafeSendServerDescriptorsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendServerDescriptorsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendServerDescriptorsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendServerDescriptorsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendServerDescriptorsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendServerDescriptorsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendCloudArguments structure.
 */
export class ClientApiSafeSendCloudArguments implements ToString  {
    public readonly uidAndCloud: UUIDAndCloud;
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendCloudArguments> = new Impl.ClientApiSafeSendCloudArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendCloudArguments> = ClientApiSafeSendCloudArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendCloudArguments.
     * @param uidAndCloud - UUIDAndCloud
     */
    constructor(uidAndCloud: UUIDAndCloud)  {
        this.uidAndCloud = uidAndCloud;
        if (uidAndCloud === null || uidAndCloud === undefined) throw new Error(`Field 'uidAndCloud' cannot be null for type ClientApiSafeSendCloudArguments.`);
        
    }
    public getUidAndCloud(): UUIDAndCloud  {
        return this.uidAndCloud;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendCloudArguments.
     * @param {ClientApiSafeSendCloudArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendCloudArguments | null | undefined): number  {
        return ClientApiSafeSendCloudArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendCloudArguments with another object.
     * @param {ClientApiSafeSendCloudArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendCloudArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendCloudArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendCloudArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendCloudArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendCloudArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendCloudsArguments structure.
 */
export class ClientApiSafeSendCloudsArguments implements ToString  {
    public readonly clouds: UUIDAndCloud[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendCloudsArguments> = new Impl.ClientApiSafeSendCloudsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendCloudsArguments> = ClientApiSafeSendCloudsArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendCloudsArguments.
     * @param clouds - UUIDAndCloud[]
     */
    constructor(clouds: UUIDAndCloud[])  {
        this.clouds = clouds;
        if (clouds === null || clouds === undefined) throw new Error(`Field 'clouds' cannot be null for type ClientApiSafeSendCloudsArguments.`);
        
    }
    public getClouds(): UUIDAndCloud[]  {
        return this.clouds;
        
    }
    public cloudsContains(el: UUIDAndCloud): boolean  {
        return (this.clouds as UUIDAndCloud[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendCloudsArguments.
     * @param {ClientApiSafeSendCloudsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendCloudsArguments | null | undefined): number  {
        return ClientApiSafeSendCloudsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendCloudsArguments with another object.
     * @param {ClientApiSafeSendCloudsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendCloudsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendCloudsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendCloudsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendCloudsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendCloudsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeRequestTelemetryArguments structure.
 */
export class ClientApiSafeRequestTelemetryArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ClientApiSafeRequestTelemetryArguments> = new Impl.ClientApiSafeRequestTelemetryArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeRequestTelemetryArguments> = ClientApiSafeRequestTelemetryArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeRequestTelemetryArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeRequestTelemetryArguments.
     * @param {ClientApiSafeRequestTelemetryArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeRequestTelemetryArguments | null | undefined): number  {
        return ClientApiSafeRequestTelemetryArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeRequestTelemetryArguments with another object.
     * @param {ClientApiSafeRequestTelemetryArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeRequestTelemetryArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeRequestTelemetryArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeRequestTelemetryArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeRequestTelemetryArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeRequestTelemetryArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendAccessGroupsArguments structure.
 */
export class ClientApiSafeSendAccessGroupsArguments implements ToString  {
    public readonly groups: AccessGroup[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendAccessGroupsArguments> = new Impl.ClientApiSafeSendAccessGroupsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendAccessGroupsArguments> = ClientApiSafeSendAccessGroupsArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendAccessGroupsArguments.
     * @param groups - AccessGroup[]
     */
    constructor(groups: AccessGroup[])  {
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type ClientApiSafeSendAccessGroupsArguments.`);
        
    }
    public getGroups(): AccessGroup[]  {
        return this.groups;
        
    }
    public groupsContains(el: AccessGroup): boolean  {
        return (this.groups as AccessGroup[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendAccessGroupsArguments.
     * @param {ClientApiSafeSendAccessGroupsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendAccessGroupsArguments | null | undefined): number  {
        return ClientApiSafeSendAccessGroupsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendAccessGroupsArguments with another object.
     * @param {ClientApiSafeSendAccessGroupsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendAccessGroupsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendAccessGroupsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendAccessGroupsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendAccessGroupsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendAccessGroupsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendAccessGroupForClientArguments structure.
 */
export class ClientApiSafeSendAccessGroupForClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendAccessGroupForClientArguments> = new Impl.ClientApiSafeSendAccessGroupForClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendAccessGroupForClientArguments> = ClientApiSafeSendAccessGroupForClientArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendAccessGroupForClientArguments.
     * @param uid - UUID
     * @param groups - UUID[]
     */
    constructor(uid: UUID, groups: UUID[])  {
        this.uid = uid;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type ClientApiSafeSendAccessGroupForClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendAccessGroupForClientArguments.
     * @param {ClientApiSafeSendAccessGroupForClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendAccessGroupForClientArguments | null | undefined): number  {
        return ClientApiSafeSendAccessGroupForClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendAccessGroupForClientArguments with another object.
     * @param {ClientApiSafeSendAccessGroupForClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendAccessGroupForClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendAccessGroupForClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendAccessGroupForClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendAccessGroupForClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendAccessGroupForClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeAddItemsToAccessGroupArguments structure.
 */
export class ClientApiSafeAddItemsToAccessGroupArguments implements ToString  {
    public readonly id: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeAddItemsToAccessGroupArguments> = new Impl.ClientApiSafeAddItemsToAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeAddItemsToAccessGroupArguments> = ClientApiSafeAddItemsToAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeAddItemsToAccessGroupArguments.
     * @param id - UUID
     * @param groups - UUID[]
     */
    constructor(id: UUID, groups: UUID[])  {
        this.id = id;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type ClientApiSafeAddItemsToAccessGroupArguments.`);
        
    }
    public getId(): UUID  {
        return this.id;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeAddItemsToAccessGroupArguments.
     * @param {ClientApiSafeAddItemsToAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeAddItemsToAccessGroupArguments | null | undefined): number  {
        return ClientApiSafeAddItemsToAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeAddItemsToAccessGroupArguments with another object.
     * @param {ClientApiSafeAddItemsToAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeAddItemsToAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeAddItemsToAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeAddItemsToAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeAddItemsToAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeAddItemsToAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeRemoveItemsFromAccessGroupArguments structure.
 */
export class ClientApiSafeRemoveItemsFromAccessGroupArguments implements ToString  {
    public readonly id: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeRemoveItemsFromAccessGroupArguments> = new Impl.ClientApiSafeRemoveItemsFromAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeRemoveItemsFromAccessGroupArguments> = ClientApiSafeRemoveItemsFromAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeRemoveItemsFromAccessGroupArguments.
     * @param id - UUID
     * @param groups - UUID[]
     */
    constructor(id: UUID, groups: UUID[])  {
        this.id = id;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type ClientApiSafeRemoveItemsFromAccessGroupArguments.`);
        
    }
    public getId(): UUID  {
        return this.id;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeRemoveItemsFromAccessGroupArguments.
     * @param {ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined): number  {
        return ClientApiSafeRemoveItemsFromAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeRemoveItemsFromAccessGroupArguments with another object.
     * @param {ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeRemoveItemsFromAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeRemoveItemsFromAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeRemoveItemsFromAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeRemoveItemsFromAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeRemoveItemsFromAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeAddAccessGroupsToClientArguments structure.
 */
export class ClientApiSafeAddAccessGroupsToClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeAddAccessGroupsToClientArguments> = new Impl.ClientApiSafeAddAccessGroupsToClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeAddAccessGroupsToClientArguments> = ClientApiSafeAddAccessGroupsToClientArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeAddAccessGroupsToClientArguments.
     * @param uid - UUID
     * @param groups - UUID[]
     */
    constructor(uid: UUID, groups: UUID[])  {
        this.uid = uid;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type ClientApiSafeAddAccessGroupsToClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeAddAccessGroupsToClientArguments.
     * @param {ClientApiSafeAddAccessGroupsToClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeAddAccessGroupsToClientArguments | null | undefined): number  {
        return ClientApiSafeAddAccessGroupsToClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeAddAccessGroupsToClientArguments with another object.
     * @param {ClientApiSafeAddAccessGroupsToClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeAddAccessGroupsToClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeAddAccessGroupsToClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeAddAccessGroupsToClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeAddAccessGroupsToClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeAddAccessGroupsToClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeRemoveAccessGroupsFromClientArguments structure.
 */
export class ClientApiSafeRemoveAccessGroupsFromClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeRemoveAccessGroupsFromClientArguments> = new Impl.ClientApiSafeRemoveAccessGroupsFromClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeRemoveAccessGroupsFromClientArguments> = ClientApiSafeRemoveAccessGroupsFromClientArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeRemoveAccessGroupsFromClientArguments.
     * @param uid - UUID
     * @param groups - UUID[]
     */
    constructor(uid: UUID, groups: UUID[])  {
        this.uid = uid;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type ClientApiSafeRemoveAccessGroupsFromClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeRemoveAccessGroupsFromClientArguments.
     * @param {ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined): number  {
        return ClientApiSafeRemoveAccessGroupsFromClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeRemoveAccessGroupsFromClientArguments with another object.
     * @param {ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeRemoveAccessGroupsFromClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeRemoveAccessGroupsFromClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeRemoveAccessGroupsFromClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeRemoveAccessGroupsFromClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeRemoveAccessGroupsFromClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendAllAccessedClientsArguments structure.
 */
export class ClientApiSafeSendAllAccessedClientsArguments implements ToString  {
    public readonly uid: UUID;
    public readonly accessedClients: UUID[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendAllAccessedClientsArguments> = new Impl.ClientApiSafeSendAllAccessedClientsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendAllAccessedClientsArguments> = ClientApiSafeSendAllAccessedClientsArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendAllAccessedClientsArguments.
     * @param uid - UUID
     * @param accessedClients - UUID[]
     */
    constructor(uid: UUID, accessedClients: UUID[])  {
        this.uid = uid;
        this.accessedClients = accessedClients;
        if (accessedClients === null || accessedClients === undefined) throw new Error(`Field 'accessedClients' cannot be null for type ClientApiSafeSendAllAccessedClientsArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getAccessedClients(): UUID[]  {
        return this.accessedClients;
        
    }
    public accessedClientsContains(el: UUID): boolean  {
        return (this.accessedClients as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendAllAccessedClientsArguments.
     * @param {ClientApiSafeSendAllAccessedClientsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendAllAccessedClientsArguments | null | undefined): number  {
        return ClientApiSafeSendAllAccessedClientsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendAllAccessedClientsArguments with another object.
     * @param {ClientApiSafeSendAllAccessedClientsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendAllAccessedClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendAllAccessedClientsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendAllAccessedClientsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendAllAccessedClientsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendAllAccessedClientsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendAccessCheckResultsArguments structure.
 */
export class ClientApiSafeSendAccessCheckResultsArguments implements ToString  {
    public readonly results: AccessCheckResult[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendAccessCheckResultsArguments> = new Impl.ClientApiSafeSendAccessCheckResultsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendAccessCheckResultsArguments> = ClientApiSafeSendAccessCheckResultsArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendAccessCheckResultsArguments.
     * @param results - AccessCheckResult[]
     */
    constructor(results: AccessCheckResult[])  {
        this.results = results;
        if (results === null || results === undefined) throw new Error(`Field 'results' cannot be null for type ClientApiSafeSendAccessCheckResultsArguments.`);
        
    }
    public getResults(): AccessCheckResult[]  {
        return this.results;
        
    }
    public resultsContains(el: AccessCheckResult): boolean  {
        return (this.results as AccessCheckResult[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendAccessCheckResultsArguments.
     * @param {ClientApiSafeSendAccessCheckResultsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendAccessCheckResultsArguments | null | undefined): number  {
        return ClientApiSafeSendAccessCheckResultsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendAccessCheckResultsArguments with another object.
     * @param {ClientApiSafeSendAccessCheckResultsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendAccessCheckResultsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendAccessCheckResultsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendAccessCheckResultsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendAccessCheckResultsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendAccessCheckResultsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendMessageArguments structure.
 */
export class ClientApiSafeSendMessageArguments implements ToString  {
    public readonly msg: Message;
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendMessageArguments> = new Impl.ClientApiSafeSendMessageArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendMessageArguments> = ClientApiSafeSendMessageArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendMessageArguments.
     * @param msg - Message
     */
    constructor(msg: Message)  {
        this.msg = msg;
        if (msg === null || msg === undefined) throw new Error(`Field 'msg' cannot be null for type ClientApiSafeSendMessageArguments.`);
        
    }
    public getMsg(): Message  {
        return this.msg;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendMessageArguments.
     * @param {ClientApiSafeSendMessageArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendMessageArguments | null | undefined): number  {
        return ClientApiSafeSendMessageArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendMessageArguments with another object.
     * @param {ClientApiSafeSendMessageArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendMessageArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendMessageArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendMessageArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendMessageArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendMessageArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeSendCloudConfigsArguments structure.
 */
export class ClientApiSafeSendCloudConfigsArguments implements ToString  {
    public readonly configs: CloudConfig[];
    public static readonly META_BODY: FastMetaType<ClientApiSafeSendCloudConfigsArguments> = new Impl.ClientApiSafeSendCloudConfigsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeSendCloudConfigsArguments> = ClientApiSafeSendCloudConfigsArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeSendCloudConfigsArguments.
     * @param configs - CloudConfig[]
     */
    constructor(configs: CloudConfig[])  {
        this.configs = configs;
        if (configs === null || configs === undefined) throw new Error(`Field 'configs' cannot be null for type ClientApiSafeSendCloudConfigsArguments.`);
        
    }
    public getConfigs(): CloudConfig[]  {
        return this.configs;
        
    }
    public configsContains(el: CloudConfig): boolean  {
        return (this.configs as CloudConfig[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeSendCloudConfigsArguments.
     * @param {ClientApiSafeSendCloudConfigsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeSendCloudConfigsArguments | null | undefined): number  {
        return ClientApiSafeSendCloudConfigsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeSendCloudConfigsArguments with another object.
     * @param {ClientApiSafeSendCloudConfigsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeSendCloudConfigsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeSendCloudConfigsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeSendCloudConfigsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeSendCloudConfigsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeSendCloudConfigsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiSafeClientInteractionArguments structure.
 */
export class ClientApiSafeClientInteractionArguments implements ToString  {
    public readonly uid: UUID;
    public readonly stream: ClientInteractionClientStream;
    public static readonly META_BODY: FastMetaType<ClientApiSafeClientInteractionArguments> = new Impl.ClientApiSafeClientInteractionArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiSafeClientInteractionArguments> = ClientApiSafeClientInteractionArguments.META_BODY;
    /**
     * Creates an instance of ClientApiSafeClientInteractionArguments.
     * @param uid - UUID
     * @param stream - ClientInteractionClientStream
     */
    constructor(uid: UUID, stream: ClientInteractionClientStream)  {
        this.uid = uid;
        this.stream = stream;
        if (stream === null || stream === undefined) throw new Error(`Field 'stream' cannot be null for type ClientApiSafeClientInteractionArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getStream(): ClientInteractionClientStream  {
        return this.stream;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiSafeClientInteractionArguments.
     * @param {ClientApiSafeClientInteractionArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiSafeClientInteractionArguments | null | undefined): number  {
        return ClientApiSafeClientInteractionArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiSafeClientInteractionArguments with another object.
     * @param {ClientApiSafeClientInteractionArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiSafeClientInteractionArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiSafeClientInteractionArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiSafeClientInteractionArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiSafeClientInteractionArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiSafeClientInteractionArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface ClientApiSafe  {
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 3
     */
    changeParent(uid: UUID): void;
    changeParentArguments?(args: ClientApiSafeChangeParentArguments): void;
    /**
     * @param alias - UUID
     *
     * @aetherMethodId 4
     */
    changeAlias(alias: UUID): void;
    changeAliasArguments?(args: ClientApiSafeChangeAliasArguments): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 5
     */
    newChildren(uids: UUID[]): void;
    newChildrenArguments?(args: ClientApiSafeNewChildrenArguments): void;
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 6
     */
    sendMessages(msg: Message[]): void;
    sendMessagesArguments?(args: ClientApiSafeSendMessagesArguments): void;
    /**
     * @param serverDescriptor - ServerDescriptor
     *
     * @aetherMethodId 7
     */
    sendServerDescriptor(serverDescriptor: ServerDescriptor): void;
    sendServerDescriptorArguments?(args: ClientApiSafeSendServerDescriptorArguments): void;
    /**
     * @param serverDescriptors - ServerDescriptor[]
     *
     * @aetherMethodId 8
     */
    sendServerDescriptors(serverDescriptors: ServerDescriptor[]): void;
    sendServerDescriptorsArguments?(args: ClientApiSafeSendServerDescriptorsArguments): void;
    /**
     * @param uidAndCloud - UUIDAndCloud
     *
     * @aetherMethodId 9
     */
    sendCloud(uidAndCloud: UUIDAndCloud): void;
    sendCloudArguments?(args: ClientApiSafeSendCloudArguments): void;
    /**
     * @param clouds - UUIDAndCloud[]
     *
     * @aetherMethodId 10
     */
    sendClouds(clouds: UUIDAndCloud[]): void;
    sendCloudsArguments?(args: ClientApiSafeSendCloudsArguments): void;
    /**
     * @aetherMethodId 11
     */
    requestTelemetry(): void;
    requestTelemetryArguments?(args: ClientApiSafeRequestTelemetryArguments): void;
    /**
     * @param groups - AccessGroup[]
     *
     * @aetherMethodId 12
     */
    sendAccessGroups(groups: AccessGroup[]): void;
    sendAccessGroupsArguments?(args: ClientApiSafeSendAccessGroupsArguments): void;
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 13
     */
    sendAccessGroupForClient(uid: UUID, groups: UUID[]): void;
    sendAccessGroupForClientArguments?(args: ClientApiSafeSendAccessGroupForClientArguments): void;
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 14
     */
    addItemsToAccessGroup(id: UUID, groups: UUID[]): void;
    addItemsToAccessGroupArguments?(args: ClientApiSafeAddItemsToAccessGroupArguments): void;
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 15
     */
    removeItemsFromAccessGroup(id: UUID, groups: UUID[]): void;
    removeItemsFromAccessGroupArguments?(args: ClientApiSafeRemoveItemsFromAccessGroupArguments): void;
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 16
     */
    addAccessGroupsToClient(uid: UUID, groups: UUID[]): void;
    addAccessGroupsToClientArguments?(args: ClientApiSafeAddAccessGroupsToClientArguments): void;
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 17
     */
    removeAccessGroupsFromClient(uid: UUID, groups: UUID[]): void;
    removeAccessGroupsFromClientArguments?(args: ClientApiSafeRemoveAccessGroupsFromClientArguments): void;
    /**
     * @param uid - UUID
     * @param accessedClients - UUID[]
     *
     * @aetherMethodId 18
     */
    sendAllAccessedClients(uid: UUID, accessedClients: UUID[]): void;
    sendAllAccessedClientsArguments?(args: ClientApiSafeSendAllAccessedClientsArguments): void;
    /**
     * @param results - AccessCheckResult[]
     *
     * @aetherMethodId 19
     */
    sendAccessCheckResults(results: AccessCheckResult[]): void;
    sendAccessCheckResultsArguments?(args: ClientApiSafeSendAccessCheckResultsArguments): void;
    /**
     * @param msg - Message
     *
     * @aetherMethodId 20
     */
    sendMessage(msg: Message): void;
    sendMessageArguments?(args: ClientApiSafeSendMessageArguments): void;
    /**
     * @param configs - CloudConfig[]
     *
     * @aetherMethodId 21
     */
    sendCloudConfigs(configs: CloudConfig[]): void;
    sendCloudConfigsArguments?(args: ClientApiSafeSendCloudConfigsArguments): void;
    /**
     * @param uid - UUID
     * @param stream - ClientInteractionClientStream
     *
     * @aetherMethodId 22
     */
    clientInteraction(uid: UUID, stream: ClientInteractionClientStream): void;
    clientInteractionArguments?(args: ClientApiSafeClientInteractionArguments): void;
    
}
export namespace ClientApiSafe  {
    export const META: FastMetaApi<ClientApiSafe, ClientApiSafeRemote> = new Impl.ClientApiSafeMetaImpl();
    
}
export interface ClientApiSafeRemote extends ClientApiSafe, RemoteApi  {
    openClientInteraction(uid: UUID, factory: (api: ServerApiByUidClientRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidClientRemote;
    
}
export abstract class ClientApiSafeLocal<RT extends RemoteApi> implements ClientApiSafe  {
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
    public changeParentArguments(args: ClientApiSafeChangeParentArguments): void  {
        this.changeParent(args.uid);
        
    }
    /**
     * @param alias - UUID
     *
     * @aetherMethodId 4
     */
    public abstract changeAlias(alias: UUID): void;
    public changeAliasArguments(args: ClientApiSafeChangeAliasArguments): void  {
        this.changeAlias(args.alias);
        
    }
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 5
     */
    public abstract newChildren(uids: UUID[]): void;
    public newChildrenArguments(args: ClientApiSafeNewChildrenArguments): void  {
        this.newChildren(args.uids);
        
    }
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 6
     */
    public abstract sendMessages(msg: Message[]): void;
    public sendMessagesArguments(args: ClientApiSafeSendMessagesArguments): void  {
        this.sendMessages(args.msg);
        
    }
    /**
     * @param serverDescriptor - ServerDescriptor
     *
     * @aetherMethodId 7
     */
    public abstract sendServerDescriptor(serverDescriptor: ServerDescriptor): void;
    public sendServerDescriptorArguments(args: ClientApiSafeSendServerDescriptorArguments): void  {
        this.sendServerDescriptor(args.serverDescriptor);
        
    }
    /**
     * @param serverDescriptors - ServerDescriptor[]
     *
     * @aetherMethodId 8
     */
    public abstract sendServerDescriptors(serverDescriptors: ServerDescriptor[]): void;
    public sendServerDescriptorsArguments(args: ClientApiSafeSendServerDescriptorsArguments): void  {
        this.sendServerDescriptors(args.serverDescriptors);
        
    }
    /**
     * @param uidAndCloud - UUIDAndCloud
     *
     * @aetherMethodId 9
     */
    public abstract sendCloud(uidAndCloud: UUIDAndCloud): void;
    public sendCloudArguments(args: ClientApiSafeSendCloudArguments): void  {
        this.sendCloud(args.uidAndCloud);
        
    }
    /**
     * @param clouds - UUIDAndCloud[]
     *
     * @aetherMethodId 10
     */
    public abstract sendClouds(clouds: UUIDAndCloud[]): void;
    public sendCloudsArguments(args: ClientApiSafeSendCloudsArguments): void  {
        this.sendClouds(args.clouds);
        
    }
    /**
     * @aetherMethodId 11
     */
    public abstract requestTelemetry(): void;
    public requestTelemetryArguments(args: ClientApiSafeRequestTelemetryArguments): void  {
        this.requestTelemetry();
        
    }
    /**
     * @param groups - AccessGroup[]
     *
     * @aetherMethodId 12
     */
    public abstract sendAccessGroups(groups: AccessGroup[]): void;
    public sendAccessGroupsArguments(args: ClientApiSafeSendAccessGroupsArguments): void  {
        this.sendAccessGroups(args.groups);
        
    }
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 13
     */
    public abstract sendAccessGroupForClient(uid: UUID, groups: UUID[]): void;
    public sendAccessGroupForClientArguments(args: ClientApiSafeSendAccessGroupForClientArguments): void  {
        this.sendAccessGroupForClient(args.uid, args.groups);
        
    }
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 14
     */
    public abstract addItemsToAccessGroup(id: UUID, groups: UUID[]): void;
    public addItemsToAccessGroupArguments(args: ClientApiSafeAddItemsToAccessGroupArguments): void  {
        this.addItemsToAccessGroup(args.id, args.groups);
        
    }
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 15
     */
    public abstract removeItemsFromAccessGroup(id: UUID, groups: UUID[]): void;
    public removeItemsFromAccessGroupArguments(args: ClientApiSafeRemoveItemsFromAccessGroupArguments): void  {
        this.removeItemsFromAccessGroup(args.id, args.groups);
        
    }
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 16
     */
    public abstract addAccessGroupsToClient(uid: UUID, groups: UUID[]): void;
    public addAccessGroupsToClientArguments(args: ClientApiSafeAddAccessGroupsToClientArguments): void  {
        this.addAccessGroupsToClient(args.uid, args.groups);
        
    }
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 17
     */
    public abstract removeAccessGroupsFromClient(uid: UUID, groups: UUID[]): void;
    public removeAccessGroupsFromClientArguments(args: ClientApiSafeRemoveAccessGroupsFromClientArguments): void  {
        this.removeAccessGroupsFromClient(args.uid, args.groups);
        
    }
    /**
     * @param uid - UUID
     * @param accessedClients - UUID[]
     *
     * @aetherMethodId 18
     */
    public abstract sendAllAccessedClients(uid: UUID, accessedClients: UUID[]): void;
    public sendAllAccessedClientsArguments(args: ClientApiSafeSendAllAccessedClientsArguments): void  {
        this.sendAllAccessedClients(args.uid, args.accessedClients);
        
    }
    /**
     * @param results - AccessCheckResult[]
     *
     * @aetherMethodId 19
     */
    public abstract sendAccessCheckResults(results: AccessCheckResult[]): void;
    public sendAccessCheckResultsArguments(args: ClientApiSafeSendAccessCheckResultsArguments): void  {
        this.sendAccessCheckResults(args.results);
        
    }
    /**
     * @param msg - Message
     *
     * @aetherMethodId 20
     */
    public abstract sendMessage(msg: Message): void;
    public sendMessageArguments(args: ClientApiSafeSendMessageArguments): void  {
        this.sendMessage(args.msg);
        
    }
    /**
     * @param configs - CloudConfig[]
     *
     * @aetherMethodId 21
     */
    public abstract sendCloudConfigs(configs: CloudConfig[]): void;
    public sendCloudConfigsArguments(args: ClientApiSafeSendCloudConfigsArguments): void  {
        this.sendCloudConfigs(args.configs);
        
    }
    /**
     * @param uid - UUID
     * @param stream - ClientInteractionClientStream
     *
     * @aetherMethodId 22
     */
    public abstract clientInteraction(uid: UUID, stream: ClientInteractionClientStream): void;
    public clientInteractionArguments(args: ClientApiSafeClientInteractionArguments): void  {
        this.clientInteraction(args.uid, args.stream);
        
    }
    
}
/**
 * Represents the AuthorizedApiBackIdArguments structure.
 */
export class AuthorizedApiBackIdArguments implements ToString  {
    public readonly id: number;
    public static readonly META_BODY: FastMetaType<AuthorizedApiBackIdArguments> = new Impl.AuthorizedApiBackIdArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiBackIdArguments> = AuthorizedApiBackIdArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiBackIdArguments.
     * @param id - number
     */
    constructor(id: number)  {
        this.id = id;
        
    }
    public getId(): number  {
        return this.id;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiBackIdArguments.
     * @param {AuthorizedApiBackIdArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiBackIdArguments | null | undefined): number  {
        return AuthorizedApiBackIdArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiBackIdArguments with another object.
     * @param {AuthorizedApiBackIdArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiBackIdArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiBackIdArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiBackIdArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiBackIdArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiBackIdArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiPingArguments structure.
 */
export class AuthorizedApiPingArguments implements ToString  {
    public readonly nextConnectMsDuration: bigint;
    public readonly rxWindowMs: bigint;
    public static readonly META_BODY: FastMetaType<AuthorizedApiPingArguments> = new Impl.AuthorizedApiPingArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiPingArguments> = AuthorizedApiPingArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiPingArguments.
     * @param nextConnectMsDuration - bigint
     * @param rxWindowMs - bigint
     */
    constructor(nextConnectMsDuration: bigint, rxWindowMs: bigint)  {
        this.nextConnectMsDuration = nextConnectMsDuration;
        this.rxWindowMs = rxWindowMs;
        
    }
    public getNextConnectMsDuration(): bigint  {
        return this.nextConnectMsDuration;
        
    }
    public getRxWindowMs(): bigint  {
        return this.rxWindowMs;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiPingArguments.
     * @param {AuthorizedApiPingArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiPingArguments | null | undefined): number  {
        return AuthorizedApiPingArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiPingArguments with another object.
     * @param {AuthorizedApiPingArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiPingArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiPingArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiPingArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiPingArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiPingArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiClientArguments structure.
 */
export class AuthorizedApiClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly stream: ClientApiStream;
    public static readonly META_BODY: FastMetaType<AuthorizedApiClientArguments> = new Impl.AuthorizedApiClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiClientArguments> = AuthorizedApiClientArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiClientArguments.
     * @param uid - UUID
     * @param stream - ClientApiStream
     */
    constructor(uid: UUID, stream: ClientApiStream)  {
        this.uid = uid;
        this.stream = stream;
        if (stream === null || stream === undefined) throw new Error(`Field 'stream' cannot be null for type AuthorizedApiClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getStream(): ClientApiStream  {
        return this.stream;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiClientArguments.
     * @param {AuthorizedApiClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiClientArguments | null | undefined): number  {
        return AuthorizedApiClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiClientArguments with another object.
     * @param {AuthorizedApiClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSendMessageArguments structure.
 */
export class AuthorizedApiSendMessageArguments implements ToString  {
    public readonly msg: Message;
    public static readonly META_BODY: FastMetaType<AuthorizedApiSendMessageArguments> = new Impl.AuthorizedApiSendMessageArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSendMessageArguments> = AuthorizedApiSendMessageArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSendMessageArguments.
     * @param msg - Message
     */
    constructor(msg: Message)  {
        this.msg = msg;
        if (msg === null || msg === undefined) throw new Error(`Field 'msg' cannot be null for type AuthorizedApiSendMessageArguments.`);
        
    }
    public getMsg(): Message  {
        return this.msg;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSendMessageArguments.
     * @param {AuthorizedApiSendMessageArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSendMessageArguments | null | undefined): number  {
        return AuthorizedApiSendMessageArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSendMessageArguments with another object.
     * @param {AuthorizedApiSendMessageArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSendMessageArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSendMessageArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSendMessageArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSendMessageArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSendMessageArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSendMessagesArguments structure.
 */
export class AuthorizedApiSendMessagesArguments implements ToString  {
    public readonly msg: Message[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiSendMessagesArguments> = new Impl.AuthorizedApiSendMessagesArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSendMessagesArguments> = AuthorizedApiSendMessagesArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSendMessagesArguments.
     * @param msg - Message[]
     */
    constructor(msg: Message[])  {
        this.msg = msg;
        if (msg === null || msg === undefined) throw new Error(`Field 'msg' cannot be null for type AuthorizedApiSendMessagesArguments.`);
        
    }
    public getMsg(): Message[]  {
        return this.msg;
        
    }
    public msgContains(el: Message): boolean  {
        return (this.msg as Message[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSendMessagesArguments.
     * @param {AuthorizedApiSendMessagesArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSendMessagesArguments | null | undefined): number  {
        return AuthorizedApiSendMessagesArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSendMessagesArguments with another object.
     * @param {AuthorizedApiSendMessagesArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSendMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSendMessagesArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSendMessagesArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSendMessagesArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSendMessagesArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSendMulticastArguments structure.
 */
export class AuthorizedApiSendMulticastArguments implements ToString  {
    public readonly uids: UUID[];
    public readonly data: Uint8Array;
    public static readonly META_BODY: FastMetaType<AuthorizedApiSendMulticastArguments> = new Impl.AuthorizedApiSendMulticastArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSendMulticastArguments> = AuthorizedApiSendMulticastArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSendMulticastArguments.
     * @param uids - UUID[]
     * @param data - Uint8Array
     */
    constructor(uids: UUID[], data: Uint8Array)  {
        this.uids = uids;
        this.data = data;
        if (uids === null || uids === undefined) throw new Error(`Field 'uids' cannot be null for type AuthorizedApiSendMulticastArguments.`);
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type AuthorizedApiSendMulticastArguments.`);
        
    }
    public getUids(): UUID[]  {
        return this.uids;
        
    }
    public uidsContains(el: UUID): boolean  {
        return (this.uids as UUID[]).includes(el as any);
        
    }
    public getData(): Uint8Array  {
        return this.data;
        
    }
    public dataContains(el: number): boolean  {
        return (this.data as Uint8Array).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSendMulticastArguments.
     * @param {AuthorizedApiSendMulticastArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSendMulticastArguments | null | undefined): number  {
        return AuthorizedApiSendMulticastArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSendMulticastArguments with another object.
     * @param {AuthorizedApiSendMulticastArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSendMulticastArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSendMulticastArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSendMulticastArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSendMulticastArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSendMulticastArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSendMessageWithResultArguments structure.
 */
export class AuthorizedApiSendMessageWithResultArguments implements ToString  {
    public readonly msg: Message;
    public static readonly META_BODY: FastMetaType<AuthorizedApiSendMessageWithResultArguments> = new Impl.AuthorizedApiSendMessageWithResultArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSendMessageWithResultArguments> = AuthorizedApiSendMessageWithResultArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSendMessageWithResultArguments.
     * @param msg - Message
     */
    constructor(msg: Message)  {
        this.msg = msg;
        if (msg === null || msg === undefined) throw new Error(`Field 'msg' cannot be null for type AuthorizedApiSendMessageWithResultArguments.`);
        
    }
    public getMsg(): Message  {
        return this.msg;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSendMessageWithResultArguments.
     * @param {AuthorizedApiSendMessageWithResultArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSendMessageWithResultArguments | null | undefined): number  {
        return AuthorizedApiSendMessageWithResultArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSendMessageWithResultArguments with another object.
     * @param {AuthorizedApiSendMessageWithResultArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSendMessageWithResultArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSendMessageWithResultArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSendMessageWithResultArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSendMessageWithResultArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSendMessageWithResultArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiCreateAccessGroupArguments structure.
 */
export class AuthorizedApiCreateAccessGroupArguments implements ToString  {
    public readonly owner: UUID;
    public readonly uids: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiCreateAccessGroupArguments> = new Impl.AuthorizedApiCreateAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiCreateAccessGroupArguments> = AuthorizedApiCreateAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiCreateAccessGroupArguments.
     * @param owner - UUID
     * @param uids - UUID[]
     */
    constructor(owner: UUID, uids: UUID[])  {
        this.owner = owner;
        this.uids = uids;
        if (uids === null || uids === undefined) throw new Error(`Field 'uids' cannot be null for type AuthorizedApiCreateAccessGroupArguments.`);
        
    }
    public getOwner(): UUID  {
        return this.owner;
        
    }
    public getUids(): UUID[]  {
        return this.uids;
        
    }
    public uidsContains(el: UUID): boolean  {
        return (this.uids as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiCreateAccessGroupArguments.
     * @param {AuthorizedApiCreateAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiCreateAccessGroupArguments | null | undefined): number  {
        return AuthorizedApiCreateAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiCreateAccessGroupArguments with another object.
     * @param {AuthorizedApiCreateAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiCreateAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiCreateAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiCreateAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiCreateAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiCreateAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiAddToAccessGroupArguments structure.
 */
export class AuthorizedApiAddToAccessGroupArguments implements ToString  {
    public readonly groupId: UUID;
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiAddToAccessGroupArguments> = new Impl.AuthorizedApiAddToAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiAddToAccessGroupArguments> = AuthorizedApiAddToAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiAddToAccessGroupArguments.
     * @param groupId - UUID
     * @param uid - UUID
     */
    constructor(groupId: UUID, uid: UUID)  {
        this.groupId = groupId;
        this.uid = uid;
        
    }
    public getGroupId(): UUID  {
        return this.groupId;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiAddToAccessGroupArguments.
     * @param {AuthorizedApiAddToAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiAddToAccessGroupArguments | null | undefined): number  {
        return AuthorizedApiAddToAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiAddToAccessGroupArguments with another object.
     * @param {AuthorizedApiAddToAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiAddToAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiAddToAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiAddToAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiAddToAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiAddToAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRemoveFromAccessGroupArguments structure.
 */
export class AuthorizedApiRemoveFromAccessGroupArguments implements ToString  {
    public readonly groupId: UUID;
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiRemoveFromAccessGroupArguments> = new Impl.AuthorizedApiRemoveFromAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRemoveFromAccessGroupArguments> = AuthorizedApiRemoveFromAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRemoveFromAccessGroupArguments.
     * @param groupId - UUID
     * @param uid - UUID
     */
    constructor(groupId: UUID, uid: UUID)  {
        this.groupId = groupId;
        this.uid = uid;
        
    }
    public getGroupId(): UUID  {
        return this.groupId;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRemoveFromAccessGroupArguments.
     * @param {AuthorizedApiRemoveFromAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRemoveFromAccessGroupArguments | null | undefined): number  {
        return AuthorizedApiRemoveFromAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRemoveFromAccessGroupArguments with another object.
     * @param {AuthorizedApiRemoveFromAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRemoveFromAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRemoveFromAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRemoveFromAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRemoveFromAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRemoveFromAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiCheckAccessForSendMessageArguments structure.
 */
export class AuthorizedApiCheckAccessForSendMessageArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiCheckAccessForSendMessageArguments> = new Impl.AuthorizedApiCheckAccessForSendMessageArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiCheckAccessForSendMessageArguments> = AuthorizedApiCheckAccessForSendMessageArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiCheckAccessForSendMessageArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiCheckAccessForSendMessageArguments.
     * @param {AuthorizedApiCheckAccessForSendMessageArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiCheckAccessForSendMessageArguments | null | undefined): number  {
        return AuthorizedApiCheckAccessForSendMessageArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiCheckAccessForSendMessageArguments with another object.
     * @param {AuthorizedApiCheckAccessForSendMessageArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiCheckAccessForSendMessageArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiCheckAccessForSendMessageArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiCheckAccessForSendMessageArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiCheckAccessForSendMessageArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiCheckAccessForSendMessageArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiResolverServersArguments structure.
 */
export class AuthorizedApiResolverServersArguments implements ToString  {
    public readonly sid: number[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiResolverServersArguments> = new Impl.AuthorizedApiResolverServersArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiResolverServersArguments> = AuthorizedApiResolverServersArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiResolverServersArguments.
     * @param sid - number[]
     */
    constructor(sid: number[])  {
        this.sid = sid;
        if (sid === null || sid === undefined) throw new Error(`Field 'sid' cannot be null for type AuthorizedApiResolverServersArguments.`);
        
    }
    public getSid(): number[]  {
        return this.sid;
        
    }
    public sidContains(el: number): boolean  {
        return (this.sid as number[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiResolverServersArguments.
     * @param {AuthorizedApiResolverServersArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiResolverServersArguments | null | undefined): number  {
        return AuthorizedApiResolverServersArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiResolverServersArguments with another object.
     * @param {AuthorizedApiResolverServersArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiResolverServersArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiResolverServersArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiResolverServersArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiResolverServersArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiResolverServersArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiResolveCloudsArguments structure.
 */
export class AuthorizedApiResolveCloudsArguments implements ToString  {
    public readonly uids: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiResolveCloudsArguments> = new Impl.AuthorizedApiResolveCloudsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiResolveCloudsArguments> = AuthorizedApiResolveCloudsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiResolveCloudsArguments.
     * @param uids - UUID[]
     */
    constructor(uids: UUID[])  {
        this.uids = uids;
        if (uids === null || uids === undefined) throw new Error(`Field 'uids' cannot be null for type AuthorizedApiResolveCloudsArguments.`);
        
    }
    public getUids(): UUID[]  {
        return this.uids;
        
    }
    public uidsContains(el: UUID): boolean  {
        return (this.uids as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiResolveCloudsArguments.
     * @param {AuthorizedApiResolveCloudsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiResolveCloudsArguments | null | undefined): number  {
        return AuthorizedApiResolveCloudsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiResolveCloudsArguments with another object.
     * @param {AuthorizedApiResolveCloudsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiResolveCloudsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiResolveCloudsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiResolveCloudsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiResolveCloudsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiResolveCloudsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiReportAppliedConfigArguments structure.
 */
export class AuthorizedApiReportAppliedConfigArguments implements ToString  {
    public readonly configs: AppliedConfig[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiReportAppliedConfigArguments> = new Impl.AuthorizedApiReportAppliedConfigArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiReportAppliedConfigArguments> = AuthorizedApiReportAppliedConfigArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiReportAppliedConfigArguments.
     * @param configs - AppliedConfig[]
     */
    constructor(configs: AppliedConfig[])  {
        this.configs = configs;
        if (configs === null || configs === undefined) throw new Error(`Field 'configs' cannot be null for type AuthorizedApiReportAppliedConfigArguments.`);
        
    }
    public getConfigs(): AppliedConfig[]  {
        return this.configs;
        
    }
    public configsContains(el: AppliedConfig): boolean  {
        return (this.configs as AppliedConfig[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiReportAppliedConfigArguments.
     * @param {AuthorizedApiReportAppliedConfigArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiReportAppliedConfigArguments | null | undefined): number  {
        return AuthorizedApiReportAppliedConfigArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiReportAppliedConfigArguments with another object.
     * @param {AuthorizedApiReportAppliedConfigArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiReportAppliedConfigArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiReportAppliedConfigArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiReportAppliedConfigArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiReportAppliedConfigArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiReportAppliedConfigArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetAccessGroupsArguments structure.
 */
export class AuthorizedApiGetAccessGroupsArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetAccessGroupsArguments> = new Impl.AuthorizedApiGetAccessGroupsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetAccessGroupsArguments> = AuthorizedApiGetAccessGroupsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetAccessGroupsArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetAccessGroupsArguments.
     * @param {AuthorizedApiGetAccessGroupsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetAccessGroupsArguments | null | undefined): number  {
        return AuthorizedApiGetAccessGroupsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetAccessGroupsArguments with another object.
     * @param {AuthorizedApiGetAccessGroupsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetAccessGroupsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetAccessGroupsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetAccessGroupsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetAccessGroupsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetAccessGroupsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetAccessGroupArguments structure.
 */
export class AuthorizedApiGetAccessGroupArguments implements ToString  {
    public readonly groupId: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetAccessGroupArguments> = new Impl.AuthorizedApiGetAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetAccessGroupArguments> = AuthorizedApiGetAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetAccessGroupArguments.
     * @param groupId - UUID
     */
    constructor(groupId: UUID)  {
        this.groupId = groupId;
        
    }
    public getGroupId(): UUID  {
        return this.groupId;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetAccessGroupArguments.
     * @param {AuthorizedApiGetAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetAccessGroupArguments | null | undefined): number  {
        return AuthorizedApiGetAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetAccessGroupArguments with another object.
     * @param {AuthorizedApiGetAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetAllAccessedClientsArguments structure.
 */
export class AuthorizedApiGetAllAccessedClientsArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetAllAccessedClientsArguments> = new Impl.AuthorizedApiGetAllAccessedClientsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetAllAccessedClientsArguments> = AuthorizedApiGetAllAccessedClientsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetAllAccessedClientsArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetAllAccessedClientsArguments.
     * @param {AuthorizedApiGetAllAccessedClientsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetAllAccessedClientsArguments | null | undefined): number  {
        return AuthorizedApiGetAllAccessedClientsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetAllAccessedClientsArguments with another object.
     * @param {AuthorizedApiGetAllAccessedClientsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetAllAccessedClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetAllAccessedClientsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetAllAccessedClientsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetAllAccessedClientsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetAllAccessedClientsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiCheckAccessForSendMessage2Arguments structure.
 */
export class AuthorizedApiCheckAccessForSendMessage2Arguments implements ToString  {
    public readonly uid1: UUID;
    public readonly uid2: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiCheckAccessForSendMessage2Arguments> = new Impl.AuthorizedApiCheckAccessForSendMessage2ArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiCheckAccessForSendMessage2Arguments> = AuthorizedApiCheckAccessForSendMessage2Arguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiCheckAccessForSendMessage2Arguments.
     * @param uid1 - UUID
     * @param uid2 - UUID
     */
    constructor(uid1: UUID, uid2: UUID)  {
        this.uid1 = uid1;
        this.uid2 = uid2;
        
    }
    public getUid1(): UUID  {
        return this.uid1;
        
    }
    public getUid2(): UUID  {
        return this.uid2;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiCheckAccessForSendMessage2Arguments.
     * @param {AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined): number  {
        return AuthorizedApiCheckAccessForSendMessage2Arguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiCheckAccessForSendMessage2Arguments with another object.
     * @param {AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiCheckAccessForSendMessage2Arguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiCheckAccessForSendMessage2Arguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiCheckAccessForSendMessage2Arguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiCheckAccessForSendMessage2Arguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiCheckAccessForSendMessage2Arguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSendTelemetryArguments structure.
 */
export class AuthorizedApiSendTelemetryArguments implements ToString  {
    public readonly telemetry: Telemetry;
    public static readonly META_BODY: FastMetaType<AuthorizedApiSendTelemetryArguments> = new Impl.AuthorizedApiSendTelemetryArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSendTelemetryArguments> = AuthorizedApiSendTelemetryArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSendTelemetryArguments.
     * @param telemetry - Telemetry
     */
    constructor(telemetry: Telemetry)  {
        this.telemetry = telemetry;
        if (telemetry === null || telemetry === undefined) throw new Error(`Field 'telemetry' cannot be null for type AuthorizedApiSendTelemetryArguments.`);
        
    }
    public getTelemetry(): Telemetry  {
        return this.telemetry;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSendTelemetryArguments.
     * @param {AuthorizedApiSendTelemetryArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSendTelemetryArguments | null | undefined): number  {
        return AuthorizedApiSendTelemetryArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSendTelemetryArguments with another object.
     * @param {AuthorizedApiSendTelemetryArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSendTelemetryArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSendTelemetryArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSendTelemetryArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSendTelemetryArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSendTelemetryArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRequestAccessGroupsForClientsArguments structure.
 */
export class AuthorizedApiRequestAccessGroupsForClientsArguments implements ToString  {
    public readonly uids: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiRequestAccessGroupsForClientsArguments> = new Impl.AuthorizedApiRequestAccessGroupsForClientsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRequestAccessGroupsForClientsArguments> = AuthorizedApiRequestAccessGroupsForClientsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRequestAccessGroupsForClientsArguments.
     * @param uids - UUID[]
     */
    constructor(uids: UUID[])  {
        this.uids = uids;
        if (uids === null || uids === undefined) throw new Error(`Field 'uids' cannot be null for type AuthorizedApiRequestAccessGroupsForClientsArguments.`);
        
    }
    public getUids(): UUID[]  {
        return this.uids;
        
    }
    public uidsContains(el: UUID): boolean  {
        return (this.uids as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRequestAccessGroupsForClientsArguments.
     * @param {AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined): number  {
        return AuthorizedApiRequestAccessGroupsForClientsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRequestAccessGroupsForClientsArguments with another object.
     * @param {AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRequestAccessGroupsForClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRequestAccessGroupsForClientsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRequestAccessGroupsForClientsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRequestAccessGroupsForClientsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRequestAccessGroupsForClientsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRequestAccessGroupsItemsArguments structure.
 */
export class AuthorizedApiRequestAccessGroupsItemsArguments implements ToString  {
    public readonly ids: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiRequestAccessGroupsItemsArguments> = new Impl.AuthorizedApiRequestAccessGroupsItemsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRequestAccessGroupsItemsArguments> = AuthorizedApiRequestAccessGroupsItemsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRequestAccessGroupsItemsArguments.
     * @param ids - UUID[]
     */
    constructor(ids: UUID[])  {
        this.ids = ids;
        if (ids === null || ids === undefined) throw new Error(`Field 'ids' cannot be null for type AuthorizedApiRequestAccessGroupsItemsArguments.`);
        
    }
    public getIds(): UUID[]  {
        return this.ids;
        
    }
    public idsContains(el: UUID): boolean  {
        return (this.ids as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRequestAccessGroupsItemsArguments.
     * @param {AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined): number  {
        return AuthorizedApiRequestAccessGroupsItemsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRequestAccessGroupsItemsArguments with another object.
     * @param {AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRequestAccessGroupsItemsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRequestAccessGroupsItemsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRequestAccessGroupsItemsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRequestAccessGroupsItemsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRequestAccessGroupsItemsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSendAccessGroupForClientArguments structure.
 */
export class AuthorizedApiSendAccessGroupForClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiSendAccessGroupForClientArguments> = new Impl.AuthorizedApiSendAccessGroupForClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSendAccessGroupForClientArguments> = AuthorizedApiSendAccessGroupForClientArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSendAccessGroupForClientArguments.
     * @param uid - UUID
     * @param groups - UUID[]
     */
    constructor(uid: UUID, groups: UUID[])  {
        this.uid = uid;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type AuthorizedApiSendAccessGroupForClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSendAccessGroupForClientArguments.
     * @param {AuthorizedApiSendAccessGroupForClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSendAccessGroupForClientArguments | null | undefined): number  {
        return AuthorizedApiSendAccessGroupForClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSendAccessGroupForClientArguments with another object.
     * @param {AuthorizedApiSendAccessGroupForClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSendAccessGroupForClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSendAccessGroupForClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSendAccessGroupForClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSendAccessGroupForClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSendAccessGroupForClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiAddItemsToAccessGroupArguments structure.
 */
export class AuthorizedApiAddItemsToAccessGroupArguments implements ToString  {
    public readonly id: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiAddItemsToAccessGroupArguments> = new Impl.AuthorizedApiAddItemsToAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiAddItemsToAccessGroupArguments> = AuthorizedApiAddItemsToAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiAddItemsToAccessGroupArguments.
     * @param id - UUID
     * @param groups - UUID[]
     */
    constructor(id: UUID, groups: UUID[])  {
        this.id = id;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type AuthorizedApiAddItemsToAccessGroupArguments.`);
        
    }
    public getId(): UUID  {
        return this.id;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiAddItemsToAccessGroupArguments.
     * @param {AuthorizedApiAddItemsToAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiAddItemsToAccessGroupArguments | null | undefined): number  {
        return AuthorizedApiAddItemsToAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiAddItemsToAccessGroupArguments with another object.
     * @param {AuthorizedApiAddItemsToAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiAddItemsToAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiAddItemsToAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiAddItemsToAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiAddItemsToAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiAddItemsToAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRemoveItemsFromAccessGroupArguments structure.
 */
export class AuthorizedApiRemoveItemsFromAccessGroupArguments implements ToString  {
    public readonly id: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiRemoveItemsFromAccessGroupArguments> = new Impl.AuthorizedApiRemoveItemsFromAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRemoveItemsFromAccessGroupArguments> = AuthorizedApiRemoveItemsFromAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRemoveItemsFromAccessGroupArguments.
     * @param id - UUID
     * @param groups - UUID[]
     */
    constructor(id: UUID, groups: UUID[])  {
        this.id = id;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type AuthorizedApiRemoveItemsFromAccessGroupArguments.`);
        
    }
    public getId(): UUID  {
        return this.id;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRemoveItemsFromAccessGroupArguments.
     * @param {AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined): number  {
        return AuthorizedApiRemoveItemsFromAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRemoveItemsFromAccessGroupArguments with another object.
     * @param {AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRemoveItemsFromAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRemoveItemsFromAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRemoveItemsFromAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRemoveItemsFromAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRemoveItemsFromAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiAddAccessGroupsToClientArguments structure.
 */
export class AuthorizedApiAddAccessGroupsToClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiAddAccessGroupsToClientArguments> = new Impl.AuthorizedApiAddAccessGroupsToClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiAddAccessGroupsToClientArguments> = AuthorizedApiAddAccessGroupsToClientArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiAddAccessGroupsToClientArguments.
     * @param uid - UUID
     * @param groups - UUID[]
     */
    constructor(uid: UUID, groups: UUID[])  {
        this.uid = uid;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type AuthorizedApiAddAccessGroupsToClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiAddAccessGroupsToClientArguments.
     * @param {AuthorizedApiAddAccessGroupsToClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiAddAccessGroupsToClientArguments | null | undefined): number  {
        return AuthorizedApiAddAccessGroupsToClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiAddAccessGroupsToClientArguments with another object.
     * @param {AuthorizedApiAddAccessGroupsToClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiAddAccessGroupsToClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiAddAccessGroupsToClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiAddAccessGroupsToClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiAddAccessGroupsToClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiAddAccessGroupsToClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRemoveAccessGroupsFromClientArguments structure.
 */
export class AuthorizedApiRemoveAccessGroupsFromClientArguments implements ToString  {
    public readonly uid: UUID;
    public readonly groups: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiRemoveAccessGroupsFromClientArguments> = new Impl.AuthorizedApiRemoveAccessGroupsFromClientArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRemoveAccessGroupsFromClientArguments> = AuthorizedApiRemoveAccessGroupsFromClientArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRemoveAccessGroupsFromClientArguments.
     * @param uid - UUID
     * @param groups - UUID[]
     */
    constructor(uid: UUID, groups: UUID[])  {
        this.uid = uid;
        this.groups = groups;
        if (groups === null || groups === undefined) throw new Error(`Field 'groups' cannot be null for type AuthorizedApiRemoveAccessGroupsFromClientArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getGroups(): UUID[]  {
        return this.groups;
        
    }
    public groupsContains(el: UUID): boolean  {
        return (this.groups as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRemoveAccessGroupsFromClientArguments.
     * @param {AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined): number  {
        return AuthorizedApiRemoveAccessGroupsFromClientArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRemoveAccessGroupsFromClientArguments with another object.
     * @param {AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRemoveAccessGroupsFromClientArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRemoveAccessGroupsFromClientArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRemoveAccessGroupsFromClientArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRemoveAccessGroupsFromClientArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRemoveAccessGroupsFromClientArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRequestAllAccessedClientsArguments structure.
 */
export class AuthorizedApiRequestAllAccessedClientsArguments implements ToString  {
    public readonly uids: UUID[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiRequestAllAccessedClientsArguments> = new Impl.AuthorizedApiRequestAllAccessedClientsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRequestAllAccessedClientsArguments> = AuthorizedApiRequestAllAccessedClientsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRequestAllAccessedClientsArguments.
     * @param uids - UUID[]
     */
    constructor(uids: UUID[])  {
        this.uids = uids;
        if (uids === null || uids === undefined) throw new Error(`Field 'uids' cannot be null for type AuthorizedApiRequestAllAccessedClientsArguments.`);
        
    }
    public getUids(): UUID[]  {
        return this.uids;
        
    }
    public uidsContains(el: UUID): boolean  {
        return (this.uids as UUID[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRequestAllAccessedClientsArguments.
     * @param {AuthorizedApiRequestAllAccessedClientsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRequestAllAccessedClientsArguments | null | undefined): number  {
        return AuthorizedApiRequestAllAccessedClientsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRequestAllAccessedClientsArguments with another object.
     * @param {AuthorizedApiRequestAllAccessedClientsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRequestAllAccessedClientsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRequestAllAccessedClientsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRequestAllAccessedClientsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRequestAllAccessedClientsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRequestAllAccessedClientsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRequestAccessCheckArguments structure.
 */
export class AuthorizedApiRequestAccessCheckArguments implements ToString  {
    public readonly requests: AccessCheckPair[];
    public static readonly META_BODY: FastMetaType<AuthorizedApiRequestAccessCheckArguments> = new Impl.AuthorizedApiRequestAccessCheckArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRequestAccessCheckArguments> = AuthorizedApiRequestAccessCheckArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRequestAccessCheckArguments.
     * @param requests - AccessCheckPair[]
     */
    constructor(requests: AccessCheckPair[])  {
        this.requests = requests;
        if (requests === null || requests === undefined) throw new Error(`Field 'requests' cannot be null for type AuthorizedApiRequestAccessCheckArguments.`);
        
    }
    public getRequests(): AccessCheckPair[]  {
        return this.requests;
        
    }
    public requestsContains(el: AccessCheckPair): boolean  {
        return (this.requests as AccessCheckPair[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRequestAccessCheckArguments.
     * @param {AuthorizedApiRequestAccessCheckArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRequestAccessCheckArguments | null | undefined): number  {
        return AuthorizedApiRequestAccessCheckArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRequestAccessCheckArguments with another object.
     * @param {AuthorizedApiRequestAccessCheckArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRequestAccessCheckArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRequestAccessCheckArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRequestAccessCheckArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRequestAccessCheckArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRequestAccessCheckArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetClientActivityArguments structure.
 */
export class AuthorizedApiGetClientActivityArguments implements ToString  {
    public readonly uid: UUID;
    public readonly fromTime: bigint;
    public readonly toTime: bigint;
    public readonly limit: number;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetClientActivityArguments> = new Impl.AuthorizedApiGetClientActivityArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetClientActivityArguments> = AuthorizedApiGetClientActivityArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetClientActivityArguments.
     * @param uid - UUID
     * @param fromTime - bigint
     * @param toTime - bigint
     * @param limit - number
     */
    constructor(uid: UUID, fromTime: bigint, toTime: bigint, limit: number)  {
        this.uid = uid;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.limit = limit;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getFromTime(): bigint  {
        return this.fromTime;
        
    }
    public getToTime(): bigint  {
        return this.toTime;
        
    }
    public getLimit(): number  {
        return this.limit;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetClientActivityArguments.
     * @param {AuthorizedApiGetClientActivityArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetClientActivityArguments | null | undefined): number  {
        return AuthorizedApiGetClientActivityArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetClientActivityArguments with another object.
     * @param {AuthorizedApiGetClientActivityArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetClientActivityArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetClientActivityArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetClientActivityArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetClientActivityArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetClientActivityArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSearchClientLogsArguments structure.
 */
export class AuthorizedApiSearchClientLogsArguments implements ToString  {
    public readonly uid: UUID;
    public readonly query: string;
    public readonly limit: number;
    public static readonly META_BODY: FastMetaType<AuthorizedApiSearchClientLogsArguments> = new Impl.AuthorizedApiSearchClientLogsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSearchClientLogsArguments> = AuthorizedApiSearchClientLogsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSearchClientLogsArguments.
     * @param uid - UUID
     * @param query - string
     * @param limit - number
     */
    constructor(uid: UUID, query: string, limit: number)  {
        this.uid = uid;
        this.query = query;
        this.limit = limit;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getQuery(): string  {
        return this.query;
        
    }
    public getLimit(): number  {
        return this.limit;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSearchClientLogsArguments.
     * @param {AuthorizedApiSearchClientLogsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSearchClientLogsArguments | null | undefined): number  {
        return AuthorizedApiSearchClientLogsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSearchClientLogsArguments with another object.
     * @param {AuthorizedApiSearchClientLogsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSearchClientLogsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSearchClientLogsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSearchClientLogsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSearchClientLogsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSearchClientLogsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetClientConnectionsArguments structure.
 */
export class AuthorizedApiGetClientConnectionsArguments implements ToString  {
    public readonly uid: UUID;
    public readonly limit: number;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetClientConnectionsArguments> = new Impl.AuthorizedApiGetClientConnectionsArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetClientConnectionsArguments> = AuthorizedApiGetClientConnectionsArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetClientConnectionsArguments.
     * @param uid - UUID
     * @param limit - number
     */
    constructor(uid: UUID, limit: number)  {
        this.uid = uid;
        this.limit = limit;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getLimit(): number  {
        return this.limit;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetClientConnectionsArguments.
     * @param {AuthorizedApiGetClientConnectionsArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetClientConnectionsArguments | null | undefined): number  {
        return AuthorizedApiGetClientConnectionsArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetClientConnectionsArguments with another object.
     * @param {AuthorizedApiGetClientConnectionsArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetClientConnectionsArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetClientConnectionsArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetClientConnectionsArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetClientConnectionsArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetClientConnectionsArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetClientMessagesArguments structure.
 */
export class AuthorizedApiGetClientMessagesArguments implements ToString  {
    public readonly uid: UUID;
    public readonly fromTime: bigint;
    public readonly toTime: bigint;
    public readonly limit: number;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetClientMessagesArguments> = new Impl.AuthorizedApiGetClientMessagesArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetClientMessagesArguments> = AuthorizedApiGetClientMessagesArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetClientMessagesArguments.
     * @param uid - UUID
     * @param fromTime - bigint
     * @param toTime - bigint
     * @param limit - number
     */
    constructor(uid: UUID, fromTime: bigint, toTime: bigint, limit: number)  {
        this.uid = uid;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.limit = limit;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getFromTime(): bigint  {
        return this.fromTime;
        
    }
    public getToTime(): bigint  {
        return this.toTime;
        
    }
    public getLimit(): number  {
        return this.limit;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetClientMessagesArguments.
     * @param {AuthorizedApiGetClientMessagesArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetClientMessagesArguments | null | undefined): number  {
        return AuthorizedApiGetClientMessagesArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetClientMessagesArguments with another object.
     * @param {AuthorizedApiGetClientMessagesArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetClientMessagesArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetClientMessagesArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetClientMessagesArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetClientMessagesArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetClientMessagesArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSetNextReadDelayArguments structure.
 */
export class AuthorizedApiSetNextReadDelayArguments implements ToString  {
    public readonly delayMillis: bigint;
    public static readonly META_BODY: FastMetaType<AuthorizedApiSetNextReadDelayArguments> = new Impl.AuthorizedApiSetNextReadDelayArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSetNextReadDelayArguments> = AuthorizedApiSetNextReadDelayArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSetNextReadDelayArguments.
     * @param delayMillis - bigint
     */
    constructor(delayMillis: bigint)  {
        this.delayMillis = delayMillis;
        
    }
    public getDelayMillis(): bigint  {
        return this.delayMillis;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSetNextReadDelayArguments.
     * @param {AuthorizedApiSetNextReadDelayArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSetNextReadDelayArguments | null | undefined): number  {
        return AuthorizedApiSetNextReadDelayArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSetNextReadDelayArguments with another object.
     * @param {AuthorizedApiSetNextReadDelayArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSetNextReadDelayArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSetNextReadDelayArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSetNextReadDelayArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSetNextReadDelayArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSetNextReadDelayArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetUapArguments structure.
 */
export class AuthorizedApiGetUapArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetUapArguments> = new Impl.AuthorizedApiGetUapArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetUapArguments> = AuthorizedApiGetUapArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetUapArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetUapArguments.
     * @param {AuthorizedApiGetUapArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetUapArguments | null | undefined): number  {
        return AuthorizedApiGetUapArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetUapArguments with another object.
     * @param {AuthorizedApiGetUapArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetUapArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetUapArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetUapArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetUapArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetUapArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiRequestWebRtcSessionArguments structure.
 */
export class AuthorizedApiRequestWebRtcSessionArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<AuthorizedApiRequestWebRtcSessionArguments> = new Impl.AuthorizedApiRequestWebRtcSessionArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiRequestWebRtcSessionArguments> = AuthorizedApiRequestWebRtcSessionArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiRequestWebRtcSessionArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiRequestWebRtcSessionArguments.
     * @param {AuthorizedApiRequestWebRtcSessionArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiRequestWebRtcSessionArguments | null | undefined): number  {
        return AuthorizedApiRequestWebRtcSessionArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiRequestWebRtcSessionArguments with another object.
     * @param {AuthorizedApiRequestWebRtcSessionArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiRequestWebRtcSessionArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiRequestWebRtcSessionArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiRequestWebRtcSessionArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiRequestWebRtcSessionArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiRequestWebRtcSessionArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiPublishWebRtcSessionArguments structure.
 */
export class AuthorizedApiPublishWebRtcSessionArguments implements ToString  {
    public readonly session: WebRtcSession;
    public static readonly META_BODY: FastMetaType<AuthorizedApiPublishWebRtcSessionArguments> = new Impl.AuthorizedApiPublishWebRtcSessionArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiPublishWebRtcSessionArguments> = AuthorizedApiPublishWebRtcSessionArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiPublishWebRtcSessionArguments.
     * @param session - WebRtcSession
     */
    constructor(session: WebRtcSession)  {
        this.session = session;
        if (session === null || session === undefined) throw new Error(`Field 'session' cannot be null for type AuthorizedApiPublishWebRtcSessionArguments.`);
        
    }
    public getSession(): WebRtcSession  {
        return this.session;
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiPublishWebRtcSessionArguments.
     * @param {AuthorizedApiPublishWebRtcSessionArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiPublishWebRtcSessionArguments | null | undefined): number  {
        return AuthorizedApiPublishWebRtcSessionArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiPublishWebRtcSessionArguments with another object.
     * @param {AuthorizedApiPublishWebRtcSessionArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiPublishWebRtcSessionArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiPublishWebRtcSessionArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiPublishWebRtcSessionArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiPublishWebRtcSessionArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiPublishWebRtcSessionArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiSelfDestructArguments structure.
 */
export class AuthorizedApiSelfDestructArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<AuthorizedApiSelfDestructArguments> = new Impl.AuthorizedApiSelfDestructArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiSelfDestructArguments> = AuthorizedApiSelfDestructArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiSelfDestructArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiSelfDestructArguments.
     * @param {AuthorizedApiSelfDestructArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiSelfDestructArguments | null | undefined): number  {
        return AuthorizedApiSelfDestructArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiSelfDestructArguments with another object.
     * @param {AuthorizedApiSelfDestructArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiSelfDestructArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiSelfDestructArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiSelfDestructArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiSelfDestructArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiSelfDestructArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the AuthorizedApiGetServersArguments structure.
 */
export class AuthorizedApiGetServersArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<AuthorizedApiGetServersArguments> = new Impl.AuthorizedApiGetServersArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<AuthorizedApiGetServersArguments> = AuthorizedApiGetServersArguments.META_BODY;
    /**
     * Creates an instance of AuthorizedApiGetServersArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of AuthorizedApiGetServersArguments.
     * @param {AuthorizedApiGetServersArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: AuthorizedApiGetServersArguments | null | undefined): number  {
        return AuthorizedApiGetServersArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of AuthorizedApiGetServersArguments with another object.
     * @param {AuthorizedApiGetServersArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: AuthorizedApiGetServersArguments | null | undefined, v2: any | null | undefined): boolean  {
        return AuthorizedApiGetServersArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return AuthorizedApiGetServersArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return AuthorizedApiGetServersArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        AuthorizedApiGetServersArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface AuthorizedApi  {
    /**
     * @param id - number
     *
     * @aetherMethodId 3
     */
    backId(id: number): void;
    backIdArguments?(args: AuthorizedApiBackIdArguments): void;
    /**
     * @param nextConnectMsDuration - bigint
     * @param rxWindowMs - bigint
     *
     * @aetherMethodId 4
     */
    ping(nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture;
    pingArguments?(args: AuthorizedApiPingArguments): AFuture;
    /**
     * @param uid - UUID
     * @param stream - ClientApiStream
     *
     * @aetherMethodId 5
     */
    client(uid: UUID, stream: ClientApiStream): void;
    clientArguments?(args: AuthorizedApiClientArguments): void;
    /**
     * @param msg - Message
     *
     * @aetherMethodId 6
     */
    sendMessage(msg: Message): void;
    sendMessageArguments?(args: AuthorizedApiSendMessageArguments): void;
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 7
     */
    sendMessages(msg: Message[]): void;
    sendMessagesArguments?(args: AuthorizedApiSendMessagesArguments): void;
    /**
     * @param uids - UUID[]
     * @param data - Uint8Array
     *
     * @aetherMethodId 37
     */
    sendMulticast(uids: UUID[], data: Uint8Array): void;
    sendMulticastArguments?(args: AuthorizedApiSendMulticastArguments): void;
    /**
     * @param msg - Message
     *
     * @aetherMethodId 39
     */
    sendMessageWithResult(msg: Message): AFuture;
    sendMessageWithResultArguments?(args: AuthorizedApiSendMessageWithResultArguments): AFuture;
    /**
     * @param owner - UUID
     * @param uids - UUID[]
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 8
     */
    createAccessGroup(owner: UUID, uids: UUID[]): ARFuture<UUID>;
    createAccessGroupArguments?(args: AuthorizedApiCreateAccessGroupArguments): ARFuture<UUID>;
    /**
     * @param groupId - UUID
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 9
     */
    addToAccessGroup(groupId: UUID, uid: UUID): ARFuture<boolean>;
    addToAccessGroupArguments?(args: AuthorizedApiAddToAccessGroupArguments): ARFuture<boolean>;
    /**
     * @param groupId - UUID
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 10
     */
    removeFromAccessGroup(groupId: UUID, uid: UUID): ARFuture<boolean>;
    removeFromAccessGroupArguments?(args: AuthorizedApiRemoveFromAccessGroupArguments): ARFuture<boolean>;
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 11
     */
    checkAccessForSendMessage(uid: UUID): AFuture;
    checkAccessForSendMessageArguments?(args: AuthorizedApiCheckAccessForSendMessageArguments): AFuture;
    /**
     * @param sid - number[]
     *
     * @aetherMethodId 12
     */
    resolverServers(sid: number[]): void;
    resolverServersArguments?(args: AuthorizedApiResolverServersArguments): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 13
     */
    resolveClouds(uids: UUID[]): void;
    resolveCloudsArguments?(args: AuthorizedApiResolveCloudsArguments): void;
    /**
     * @param configs - AppliedConfig[]
     *
     * @aetherMethodId 38
     */
    reportAppliedConfig(configs: AppliedConfig[]): void;
    reportAppliedConfigArguments?(args: AuthorizedApiReportAppliedConfigArguments): void;
    /**
     * @param uid - UUID
     * @returns ARFuture<UUID[]>
     *
     * @aetherMethodId 14
     */
    getAccessGroups(uid: UUID): ARFuture<UUID[]>;
    getAccessGroupsArguments?(args: AuthorizedApiGetAccessGroupsArguments): ARFuture<UUID[]>;
    /**
     * @param groupId - UUID
     * @returns ARFuture<AccessGroup>
     *
     * @aetherMethodId 15
     */
    getAccessGroup(groupId: UUID): ARFuture<AccessGroup>;
    getAccessGroupArguments?(args: AuthorizedApiGetAccessGroupArguments): ARFuture<AccessGroup>;
    /**
     * @param uid - UUID
     * @returns ARFuture<UUID[]>
     *
     * @aetherMethodId 16
     */
    getAllAccessedClients(uid: UUID): ARFuture<UUID[]>;
    getAllAccessedClientsArguments?(args: AuthorizedApiGetAllAccessedClientsArguments): ARFuture<UUID[]>;
    /**
     * @param uid1 - UUID
     * @param uid2 - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 17
     */
    checkAccessForSendMessage2(uid1: UUID, uid2: UUID): ARFuture<boolean>;
    checkAccessForSendMessage2Arguments?(args: AuthorizedApiCheckAccessForSendMessage2Arguments): ARFuture<boolean>;
    /**
     * @param telemetry - Telemetry
     *
     * @aetherMethodId 18
     */
    sendTelemetry(telemetry: Telemetry): void;
    sendTelemetryArguments?(args: AuthorizedApiSendTelemetryArguments): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 19
     */
    requestAccessGroupsForClients(uids: UUID[]): void;
    requestAccessGroupsForClientsArguments?(args: AuthorizedApiRequestAccessGroupsForClientsArguments): void;
    /**
     * @param ids - UUID[]
     *
     * @aetherMethodId 20
     */
    requestAccessGroupsItems(ids: UUID[]): void;
    requestAccessGroupsItemsArguments?(args: AuthorizedApiRequestAccessGroupsItemsArguments): void;
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 22
     */
    sendAccessGroupForClient(uid: UUID, groups: UUID[]): void;
    sendAccessGroupForClientArguments?(args: AuthorizedApiSendAccessGroupForClientArguments): void;
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 23
     */
    addItemsToAccessGroup(id: UUID, groups: UUID[]): void;
    addItemsToAccessGroupArguments?(args: AuthorizedApiAddItemsToAccessGroupArguments): void;
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 24
     */
    removeItemsFromAccessGroup(id: UUID, groups: UUID[]): void;
    removeItemsFromAccessGroupArguments?(args: AuthorizedApiRemoveItemsFromAccessGroupArguments): void;
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 25
     */
    addAccessGroupsToClient(uid: UUID, groups: UUID[]): void;
    addAccessGroupsToClientArguments?(args: AuthorizedApiAddAccessGroupsToClientArguments): void;
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 26
     */
    removeAccessGroupsFromClient(uid: UUID, groups: UUID[]): void;
    removeAccessGroupsFromClientArguments?(args: AuthorizedApiRemoveAccessGroupsFromClientArguments): void;
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 27
     */
    requestAllAccessedClients(uids: UUID[]): void;
    requestAllAccessedClientsArguments?(args: AuthorizedApiRequestAllAccessedClientsArguments): void;
    /**
     * @param requests - AccessCheckPair[]
     *
     * @aetherMethodId 28
     */
    requestAccessCheck(requests: AccessCheckPair[]): void;
    requestAccessCheckArguments?(args: AuthorizedApiRequestAccessCheckArguments): void;
    /**
     * @param uid - UUID
     * @param fromTime - bigint
     * @param toTime - bigint
     * @param limit - number
     * @returns ARFuture<ClientActivity[]>
     *
     * @aetherMethodId 29
     */
    getClientActivity(uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]>;
    getClientActivityArguments?(args: AuthorizedApiGetClientActivityArguments): ARFuture<ClientActivity[]>;
    /**
     * @param uid - UUID
     * @param query - string
     * @param limit - number
     * @returns ARFuture<ClientLogEntry[]>
     *
     * @aetherMethodId 30
     */
    searchClientLogs(uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]>;
    searchClientLogsArguments?(args: AuthorizedApiSearchClientLogsArguments): ARFuture<ClientLogEntry[]>;
    /**
     * @param uid - UUID
     * @param limit - number
     * @returns ARFuture<ClientConnectionInfo[]>
     *
     * @aetherMethodId 31
     */
    getClientConnections(uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]>;
    getClientConnectionsArguments?(args: AuthorizedApiGetClientConnectionsArguments): ARFuture<ClientConnectionInfo[]>;
    /**
     * @param uid - UUID
     * @param fromTime - bigint
     * @param toTime - bigint
     * @param limit - number
     * @returns ARFuture<MessageInfo[]>
     *
     * @aetherMethodId 32
     */
    getClientMessages(uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]>;
    getClientMessagesArguments?(args: AuthorizedApiGetClientMessagesArguments): ARFuture<MessageInfo[]>;
    /**
     * @param delayMillis - bigint
     *
     * @aetherMethodId 33
     */
    setNextReadDelay(delayMillis: bigint): void;
    setNextReadDelayArguments?(args: AuthorizedApiSetNextReadDelayArguments): void;
    /**
     * @param uid - UUID
     * @returns ARFuture<Uap>
     *
     * @aetherMethodId 34
     */
    getUap(uid: UUID): ARFuture<Uap>;
    getUapArguments?(args: AuthorizedApiGetUapArguments): ARFuture<Uap>;
    /**
     * @param uid - UUID
     * @returns ARFuture<WebRtcSession>
     *
     * @aetherMethodId 40
     */
    requestWebRtcSession(uid: UUID): ARFuture<WebRtcSession>;
    requestWebRtcSessionArguments?(args: AuthorizedApiRequestWebRtcSessionArguments): ARFuture<WebRtcSession>;
    /**
     * @param session - WebRtcSession
     *
     * @aetherMethodId 41
     */
    publishWebRtcSession(session: WebRtcSession): void;
    publishWebRtcSessionArguments?(args: AuthorizedApiPublishWebRtcSessionArguments): void;
    /**
     * @aetherMethodId 42
     */
    selfDestruct(): AFuture;
    selfDestructArguments?(args: AuthorizedApiSelfDestructArguments): AFuture;
    /**
     * @returns ARFuture<ServerDescriptorWithGeo[]>
     *
     * @aetherMethodId 43
     */
    getServers(): ARFuture<ServerDescriptorWithGeo[]>;
    getServersArguments?(args: AuthorizedApiGetServersArguments): ARFuture<ServerDescriptorWithGeo[]>;
    
}
export namespace AuthorizedApi  {
    export const META: FastMetaApi<AuthorizedApi, AuthorizedApiRemote> = new Impl.AuthorizedApiMetaImpl();
    
}
export interface AuthorizedApiRemote extends AuthorizedApi, RemoteApi  {
    openClient(uid: UUID, factory: (api: ServerApiByUidRemote) => any, converter: BytesConverter, ...keys: any[]): ServerApiByUidRemote;
    
}
export abstract class AuthorizedApiLocal<RT extends RemoteApi> implements AuthorizedApi  {
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
    public backIdArguments(args: AuthorizedApiBackIdArguments): void  {
        this.backId(args.id);
        
    }
    /**
     * @param nextConnectMsDuration - bigint
     * @param rxWindowMs - bigint
     *
     * @aetherMethodId 4
     */
    public abstract ping(nextConnectMsDuration: bigint, rxWindowMs: bigint): AFuture;
    public pingArguments(args: AuthorizedApiPingArguments): AFuture  {
        return this.ping(args.nextConnectMsDuration, args.rxWindowMs);
        
    }
    /**
     * @param uid - UUID
     * @param stream - ClientApiStream
     *
     * @aetherMethodId 5
     */
    public abstract client(uid: UUID, stream: ClientApiStream): void;
    public clientArguments(args: AuthorizedApiClientArguments): void  {
        this.client(args.uid, args.stream);
        
    }
    /**
     * @param msg - Message
     *
     * @aetherMethodId 6
     */
    public abstract sendMessage(msg: Message): void;
    public sendMessageArguments(args: AuthorizedApiSendMessageArguments): void  {
        this.sendMessage(args.msg);
        
    }
    /**
     * @param msg - Message[]
     *
     * @aetherMethodId 7
     */
    public abstract sendMessages(msg: Message[]): void;
    public sendMessagesArguments(args: AuthorizedApiSendMessagesArguments): void  {
        this.sendMessages(args.msg);
        
    }
    /**
     * @param uids - UUID[]
     * @param data - Uint8Array
     *
     * @aetherMethodId 37
     */
    public abstract sendMulticast(uids: UUID[], data: Uint8Array): void;
    public sendMulticastArguments(args: AuthorizedApiSendMulticastArguments): void  {
        this.sendMulticast(args.uids, args.data);
        
    }
    /**
     * @param msg - Message
     *
     * @aetherMethodId 39
     */
    public abstract sendMessageWithResult(msg: Message): AFuture;
    public sendMessageWithResultArguments(args: AuthorizedApiSendMessageWithResultArguments): AFuture  {
        return this.sendMessageWithResult(args.msg);
        
    }
    /**
     * @param owner - UUID
     * @param uids - UUID[]
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 8
     */
    public abstract createAccessGroup(owner: UUID, uids: UUID[]): ARFuture<UUID>;
    public createAccessGroupArguments(args: AuthorizedApiCreateAccessGroupArguments): ARFuture<UUID>  {
        return this.createAccessGroup(args.owner, args.uids);
        
    }
    /**
     * @param groupId - UUID
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 9
     */
    public abstract addToAccessGroup(groupId: UUID, uid: UUID): ARFuture<boolean>;
    public addToAccessGroupArguments(args: AuthorizedApiAddToAccessGroupArguments): ARFuture<boolean>  {
        return this.addToAccessGroup(args.groupId, args.uid);
        
    }
    /**
     * @param groupId - UUID
     * @param uid - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 10
     */
    public abstract removeFromAccessGroup(groupId: UUID, uid: UUID): ARFuture<boolean>;
    public removeFromAccessGroupArguments(args: AuthorizedApiRemoveFromAccessGroupArguments): ARFuture<boolean>  {
        return this.removeFromAccessGroup(args.groupId, args.uid);
        
    }
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 11
     */
    public abstract checkAccessForSendMessage(uid: UUID): AFuture;
    public checkAccessForSendMessageArguments(args: AuthorizedApiCheckAccessForSendMessageArguments): AFuture  {
        return this.checkAccessForSendMessage(args.uid);
        
    }
    /**
     * @param sid - number[]
     *
     * @aetherMethodId 12
     */
    public abstract resolverServers(sid: number[]): void;
    public resolverServersArguments(args: AuthorizedApiResolverServersArguments): void  {
        this.resolverServers(args.sid);
        
    }
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 13
     */
    public abstract resolveClouds(uids: UUID[]): void;
    public resolveCloudsArguments(args: AuthorizedApiResolveCloudsArguments): void  {
        this.resolveClouds(args.uids);
        
    }
    /**
     * @param configs - AppliedConfig[]
     *
     * @aetherMethodId 38
     */
    public abstract reportAppliedConfig(configs: AppliedConfig[]): void;
    public reportAppliedConfigArguments(args: AuthorizedApiReportAppliedConfigArguments): void  {
        this.reportAppliedConfig(args.configs);
        
    }
    /**
     * @param uid - UUID
     * @returns ARFuture<UUID[]>
     *
     * @aetherMethodId 14
     */
    public abstract getAccessGroups(uid: UUID): ARFuture<UUID[]>;
    public getAccessGroupsArguments(args: AuthorizedApiGetAccessGroupsArguments): ARFuture<UUID[]>  {
        return this.getAccessGroups(args.uid);
        
    }
    /**
     * @param groupId - UUID
     * @returns ARFuture<AccessGroup>
     *
     * @aetherMethodId 15
     */
    public abstract getAccessGroup(groupId: UUID): ARFuture<AccessGroup>;
    public getAccessGroupArguments(args: AuthorizedApiGetAccessGroupArguments): ARFuture<AccessGroup>  {
        return this.getAccessGroup(args.groupId);
        
    }
    /**
     * @param uid - UUID
     * @returns ARFuture<UUID[]>
     *
     * @aetherMethodId 16
     */
    public abstract getAllAccessedClients(uid: UUID): ARFuture<UUID[]>;
    public getAllAccessedClientsArguments(args: AuthorizedApiGetAllAccessedClientsArguments): ARFuture<UUID[]>  {
        return this.getAllAccessedClients(args.uid);
        
    }
    /**
     * @param uid1 - UUID
     * @param uid2 - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 17
     */
    public abstract checkAccessForSendMessage2(uid1: UUID, uid2: UUID): ARFuture<boolean>;
    public checkAccessForSendMessage2Arguments(args: AuthorizedApiCheckAccessForSendMessage2Arguments): ARFuture<boolean>  {
        return this.checkAccessForSendMessage2(args.uid1, args.uid2);
        
    }
    /**
     * @param telemetry - Telemetry
     *
     * @aetherMethodId 18
     */
    public abstract sendTelemetry(telemetry: Telemetry): void;
    public sendTelemetryArguments(args: AuthorizedApiSendTelemetryArguments): void  {
        this.sendTelemetry(args.telemetry);
        
    }
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 19
     */
    public abstract requestAccessGroupsForClients(uids: UUID[]): void;
    public requestAccessGroupsForClientsArguments(args: AuthorizedApiRequestAccessGroupsForClientsArguments): void  {
        this.requestAccessGroupsForClients(args.uids);
        
    }
    /**
     * @param ids - UUID[]
     *
     * @aetherMethodId 20
     */
    public abstract requestAccessGroupsItems(ids: UUID[]): void;
    public requestAccessGroupsItemsArguments(args: AuthorizedApiRequestAccessGroupsItemsArguments): void  {
        this.requestAccessGroupsItems(args.ids);
        
    }
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 22
     */
    public abstract sendAccessGroupForClient(uid: UUID, groups: UUID[]): void;
    public sendAccessGroupForClientArguments(args: AuthorizedApiSendAccessGroupForClientArguments): void  {
        this.sendAccessGroupForClient(args.uid, args.groups);
        
    }
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 23
     */
    public abstract addItemsToAccessGroup(id: UUID, groups: UUID[]): void;
    public addItemsToAccessGroupArguments(args: AuthorizedApiAddItemsToAccessGroupArguments): void  {
        this.addItemsToAccessGroup(args.id, args.groups);
        
    }
    /**
     * @param id - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 24
     */
    public abstract removeItemsFromAccessGroup(id: UUID, groups: UUID[]): void;
    public removeItemsFromAccessGroupArguments(args: AuthorizedApiRemoveItemsFromAccessGroupArguments): void  {
        this.removeItemsFromAccessGroup(args.id, args.groups);
        
    }
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 25
     */
    public abstract addAccessGroupsToClient(uid: UUID, groups: UUID[]): void;
    public addAccessGroupsToClientArguments(args: AuthorizedApiAddAccessGroupsToClientArguments): void  {
        this.addAccessGroupsToClient(args.uid, args.groups);
        
    }
    /**
     * @param uid - UUID
     * @param groups - UUID[]
     *
     * @aetherMethodId 26
     */
    public abstract removeAccessGroupsFromClient(uid: UUID, groups: UUID[]): void;
    public removeAccessGroupsFromClientArguments(args: AuthorizedApiRemoveAccessGroupsFromClientArguments): void  {
        this.removeAccessGroupsFromClient(args.uid, args.groups);
        
    }
    /**
     * @param uids - UUID[]
     *
     * @aetherMethodId 27
     */
    public abstract requestAllAccessedClients(uids: UUID[]): void;
    public requestAllAccessedClientsArguments(args: AuthorizedApiRequestAllAccessedClientsArguments): void  {
        this.requestAllAccessedClients(args.uids);
        
    }
    /**
     * @param requests - AccessCheckPair[]
     *
     * @aetherMethodId 28
     */
    public abstract requestAccessCheck(requests: AccessCheckPair[]): void;
    public requestAccessCheckArguments(args: AuthorizedApiRequestAccessCheckArguments): void  {
        this.requestAccessCheck(args.requests);
        
    }
    /**
     * @param uid - UUID
     * @param fromTime - bigint
     * @param toTime - bigint
     * @param limit - number
     * @returns ARFuture<ClientActivity[]>
     *
     * @aetherMethodId 29
     */
    public abstract getClientActivity(uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<ClientActivity[]>;
    public getClientActivityArguments(args: AuthorizedApiGetClientActivityArguments): ARFuture<ClientActivity[]>  {
        return this.getClientActivity(args.uid, args.fromTime, args.toTime, args.limit);
        
    }
    /**
     * @param uid - UUID
     * @param query - string
     * @param limit - number
     * @returns ARFuture<ClientLogEntry[]>
     *
     * @aetherMethodId 30
     */
    public abstract searchClientLogs(uid: UUID, query: string, limit: number): ARFuture<ClientLogEntry[]>;
    public searchClientLogsArguments(args: AuthorizedApiSearchClientLogsArguments): ARFuture<ClientLogEntry[]>  {
        return this.searchClientLogs(args.uid, args.query, args.limit);
        
    }
    /**
     * @param uid - UUID
     * @param limit - number
     * @returns ARFuture<ClientConnectionInfo[]>
     *
     * @aetherMethodId 31
     */
    public abstract getClientConnections(uid: UUID, limit: number): ARFuture<ClientConnectionInfo[]>;
    public getClientConnectionsArguments(args: AuthorizedApiGetClientConnectionsArguments): ARFuture<ClientConnectionInfo[]>  {
        return this.getClientConnections(args.uid, args.limit);
        
    }
    /**
     * @param uid - UUID
     * @param fromTime - bigint
     * @param toTime - bigint
     * @param limit - number
     * @returns ARFuture<MessageInfo[]>
     *
     * @aetherMethodId 32
     */
    public abstract getClientMessages(uid: UUID, fromTime: bigint, toTime: bigint, limit: number): ARFuture<MessageInfo[]>;
    public getClientMessagesArguments(args: AuthorizedApiGetClientMessagesArguments): ARFuture<MessageInfo[]>  {
        return this.getClientMessages(args.uid, args.fromTime, args.toTime, args.limit);
        
    }
    /**
     * @param delayMillis - bigint
     *
     * @aetherMethodId 33
     */
    public abstract setNextReadDelay(delayMillis: bigint): void;
    public setNextReadDelayArguments(args: AuthorizedApiSetNextReadDelayArguments): void  {
        this.setNextReadDelay(args.delayMillis);
        
    }
    /**
     * @param uid - UUID
     * @returns ARFuture<Uap>
     *
     * @aetherMethodId 34
     */
    public abstract getUap(uid: UUID): ARFuture<Uap>;
    public getUapArguments(args: AuthorizedApiGetUapArguments): ARFuture<Uap>  {
        return this.getUap(args.uid);
        
    }
    /**
     * @param uid - UUID
     * @returns ARFuture<WebRtcSession>
     *
     * @aetherMethodId 40
     */
    public abstract requestWebRtcSession(uid: UUID): ARFuture<WebRtcSession>;
    public requestWebRtcSessionArguments(args: AuthorizedApiRequestWebRtcSessionArguments): ARFuture<WebRtcSession>  {
        return this.requestWebRtcSession(args.uid);
        
    }
    /**
     * @param session - WebRtcSession
     *
     * @aetherMethodId 41
     */
    public abstract publishWebRtcSession(session: WebRtcSession): void;
    public publishWebRtcSessionArguments(args: AuthorizedApiPublishWebRtcSessionArguments): void  {
        this.publishWebRtcSession(args.session);
        
    }
    /**
     * @aetherMethodId 42
     */
    public abstract selfDestruct(): AFuture;
    public selfDestructArguments(args: AuthorizedApiSelfDestructArguments): AFuture  {
        return this.selfDestruct();
        
    }
    /**
     * @returns ARFuture<ServerDescriptorWithGeo[]>
     *
     * @aetherMethodId 43
     */
    public abstract getServers(): ARFuture<ServerDescriptorWithGeo[]>;
    public getServersArguments(args: AuthorizedApiGetServersArguments): ARFuture<ServerDescriptorWithGeo[]>  {
        return this.getServers();
        
    }
    
}
/**
 * Represents the LoginApiGetTimeUTCArguments structure.
 */
export class LoginApiGetTimeUTCArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<LoginApiGetTimeUTCArguments> = new Impl.LoginApiGetTimeUTCArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<LoginApiGetTimeUTCArguments> = LoginApiGetTimeUTCArguments.META_BODY;
    /**
     * Creates an instance of LoginApiGetTimeUTCArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of LoginApiGetTimeUTCArguments.
     * @param {LoginApiGetTimeUTCArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: LoginApiGetTimeUTCArguments | null | undefined): number  {
        return LoginApiGetTimeUTCArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of LoginApiGetTimeUTCArguments with another object.
     * @param {LoginApiGetTimeUTCArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: LoginApiGetTimeUTCArguments | null | undefined, v2: any | null | undefined): boolean  {
        return LoginApiGetTimeUTCArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return LoginApiGetTimeUTCArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return LoginApiGetTimeUTCArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        LoginApiGetTimeUTCArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the LoginApiLoginByUIDArguments structure.
 */
export class LoginApiLoginByUIDArguments implements ToString  {
    public readonly uid: UUID;
    public readonly data: LoginStream;
    public static readonly META_BODY: FastMetaType<LoginApiLoginByUIDArguments> = new Impl.LoginApiLoginByUIDArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<LoginApiLoginByUIDArguments> = LoginApiLoginByUIDArguments.META_BODY;
    /**
     * Creates an instance of LoginApiLoginByUIDArguments.
     * @param uid - UUID
     * @param data - LoginStream
     */
    constructor(uid: UUID, data: LoginStream)  {
        this.uid = uid;
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type LoginApiLoginByUIDArguments.`);
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    public getData(): LoginStream  {
        return this.data;
        
    }
    /**
     * Calculates a hash code for a static instance of LoginApiLoginByUIDArguments.
     * @param {LoginApiLoginByUIDArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: LoginApiLoginByUIDArguments | null | undefined): number  {
        return LoginApiLoginByUIDArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of LoginApiLoginByUIDArguments with another object.
     * @param {LoginApiLoginByUIDArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: LoginApiLoginByUIDArguments | null | undefined, v2: any | null | undefined): boolean  {
        return LoginApiLoginByUIDArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return LoginApiLoginByUIDArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return LoginApiLoginByUIDArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        LoginApiLoginByUIDArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the LoginApiLoginByAliasArguments structure.
 */
export class LoginApiLoginByAliasArguments implements ToString  {
    public readonly alias: UUID;
    public readonly data: LoginStream;
    public static readonly META_BODY: FastMetaType<LoginApiLoginByAliasArguments> = new Impl.LoginApiLoginByAliasArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<LoginApiLoginByAliasArguments> = LoginApiLoginByAliasArguments.META_BODY;
    /**
     * Creates an instance of LoginApiLoginByAliasArguments.
     * @param alias - UUID
     * @param data - LoginStream
     */
    constructor(alias: UUID, data: LoginStream)  {
        this.alias = alias;
        this.data = data;
        if (data === null || data === undefined) throw new Error(`Field 'data' cannot be null for type LoginApiLoginByAliasArguments.`);
        
    }
    public getAlias(): UUID  {
        return this.alias;
        
    }
    public getData(): LoginStream  {
        return this.data;
        
    }
    /**
     * Calculates a hash code for a static instance of LoginApiLoginByAliasArguments.
     * @param {LoginApiLoginByAliasArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: LoginApiLoginByAliasArguments | null | undefined): number  {
        return LoginApiLoginByAliasArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of LoginApiLoginByAliasArguments with another object.
     * @param {LoginApiLoginByAliasArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: LoginApiLoginByAliasArguments | null | undefined, v2: any | null | undefined): boolean  {
        return LoginApiLoginByAliasArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return LoginApiLoginByAliasArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return LoginApiLoginByAliasArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        LoginApiLoginByAliasArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the LoginApiGetMyIpArguments structure.
 */
export class LoginApiGetMyIpArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<LoginApiGetMyIpArguments> = new Impl.LoginApiGetMyIpArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<LoginApiGetMyIpArguments> = LoginApiGetMyIpArguments.META_BODY;
    /**
     * Creates an instance of LoginApiGetMyIpArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of LoginApiGetMyIpArguments.
     * @param {LoginApiGetMyIpArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: LoginApiGetMyIpArguments | null | undefined): number  {
        return LoginApiGetMyIpArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of LoginApiGetMyIpArguments with another object.
     * @param {LoginApiGetMyIpArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: LoginApiGetMyIpArguments | null | undefined, v2: any | null | undefined): boolean  {
        return LoginApiGetMyIpArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return LoginApiGetMyIpArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return LoginApiGetMyIpArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        LoginApiGetMyIpArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface LoginApi  {
    /**
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 3
     */
    getTimeUTC(): ARFuture<bigint>;
    getTimeUTCArguments?(args: LoginApiGetTimeUTCArguments): ARFuture<bigint>;
    /**
     * @param uid - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 4
     */
    loginByUID(uid: UUID, data: LoginStream): void;
    loginByUIDArguments?(args: LoginApiLoginByUIDArguments): void;
    /**
     * @param alias - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 5
     */
    loginByAlias(alias: UUID, data: LoginStream): void;
    loginByAliasArguments?(args: LoginApiLoginByAliasArguments): void;
    /**
     * @returns ARFuture<IpInfo>
     *
     * @aetherMethodId 6
     */
    getMyIp(): ARFuture<IpInfo>;
    getMyIpArguments?(args: LoginApiGetMyIpArguments): ARFuture<IpInfo>;
    
}
export namespace LoginApi  {
    export const META: FastMetaApi<LoginApi, LoginApiRemote> = new Impl.LoginApiMetaImpl();
    
}
export interface LoginApiRemote extends LoginApi, RemoteApi  {
    openLoginByUID(uid: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote;
    openLoginByAlias(alias: UUID, factory: (api: AuthorizedApiRemote) => ClientApiSafe, converter: BytesConverter, ...keys: any[]): AuthorizedApiRemote;
    
}
export abstract class LoginApiLocal<RT extends RemoteApi> implements LoginApi  {
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
    public getTimeUTCArguments(args: LoginApiGetTimeUTCArguments): ARFuture<bigint>  {
        return this.getTimeUTC();
        
    }
    /**
     * @param uid - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 4
     */
    public abstract loginByUID(uid: UUID, data: LoginStream): void;
    public loginByUIDArguments(args: LoginApiLoginByUIDArguments): void  {
        this.loginByUID(args.uid, args.data);
        
    }
    /**
     * @param alias - UUID
     * @param data - LoginStream
     *
     * @aetherMethodId 5
     */
    public abstract loginByAlias(alias: UUID, data: LoginStream): void;
    public loginByAliasArguments(args: LoginApiLoginByAliasArguments): void  {
        this.loginByAlias(args.alias, args.data);
        
    }
    /**
     * @returns ARFuture<IpInfo>
     *
     * @aetherMethodId 6
     */
    public abstract getMyIp(): ARFuture<IpInfo>;
    public getMyIpArguments(args: LoginApiGetMyIpArguments): ARFuture<IpInfo>  {
        return this.getMyIp();
        
    }
    
}
export interface ServerApiByUidClient  {
    
}
export namespace ServerApiByUidClient  {
    export const EMPTY: ServerApiByUidClient =  {
        
    };
    export const META: FastMetaApi<ServerApiByUidClient, ServerApiByUidClientRemote> = new Impl.ServerApiByUidClientMetaImpl();
    
}
export interface ServerApiByUidClientRemote extends ServerApiByUidClient, RemoteApi  {
    
}
export abstract class ServerApiByUidClientLocal<RT extends RemoteApi> implements ServerApiByUidClient  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    
}
/**
 * Represents the ServerApiByUidGetBalanceArguments structure.
 */
export class ServerApiByUidGetBalanceArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidGetBalanceArguments> = new Impl.ServerApiByUidGetBalanceArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidGetBalanceArguments> = ServerApiByUidGetBalanceArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidGetBalanceArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidGetBalanceArguments.
     * @param {ServerApiByUidGetBalanceArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidGetBalanceArguments | null | undefined): number  {
        return ServerApiByUidGetBalanceArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidGetBalanceArguments with another object.
     * @param {ServerApiByUidGetBalanceArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidGetBalanceArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidGetBalanceArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidGetBalanceArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidGetBalanceArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidGetBalanceArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidSetParentArguments structure.
 */
export class ServerApiByUidSetParentArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<ServerApiByUidSetParentArguments> = new Impl.ServerApiByUidSetParentArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidSetParentArguments> = ServerApiByUidSetParentArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidSetParentArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidSetParentArguments.
     * @param {ServerApiByUidSetParentArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidSetParentArguments | null | undefined): number  {
        return ServerApiByUidSetParentArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidSetParentArguments with another object.
     * @param {ServerApiByUidSetParentArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidSetParentArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidSetParentArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidSetParentArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidSetParentArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidSetParentArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidBlockArguments structure.
 */
export class ServerApiByUidBlockArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidBlockArguments> = new Impl.ServerApiByUidBlockArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidBlockArguments> = ServerApiByUidBlockArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidBlockArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidBlockArguments.
     * @param {ServerApiByUidBlockArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidBlockArguments | null | undefined): number  {
        return ServerApiByUidBlockArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidBlockArguments with another object.
     * @param {ServerApiByUidBlockArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidBlockArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidBlockArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidBlockArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidBlockArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidBlockArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidGetPositionArguments structure.
 */
export class ServerApiByUidGetPositionArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidGetPositionArguments> = new Impl.ServerApiByUidGetPositionArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidGetPositionArguments> = ServerApiByUidGetPositionArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidGetPositionArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidGetPositionArguments.
     * @param {ServerApiByUidGetPositionArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidGetPositionArguments | null | undefined): number  {
        return ServerApiByUidGetPositionArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidGetPositionArguments with another object.
     * @param {ServerApiByUidGetPositionArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidGetPositionArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidGetPositionArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidGetPositionArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidGetPositionArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidGetPositionArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidGetParentArguments structure.
 */
export class ServerApiByUidGetParentArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidGetParentArguments> = new Impl.ServerApiByUidGetParentArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidGetParentArguments> = ServerApiByUidGetParentArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidGetParentArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidGetParentArguments.
     * @param {ServerApiByUidGetParentArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidGetParentArguments | null | undefined): number  {
        return ServerApiByUidGetParentArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidGetParentArguments with another object.
     * @param {ServerApiByUidGetParentArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidGetParentArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidGetParentArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidGetParentArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidGetParentArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidGetParentArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidGetBeneficiaryArguments structure.
 */
export class ServerApiByUidGetBeneficiaryArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidGetBeneficiaryArguments> = new Impl.ServerApiByUidGetBeneficiaryArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidGetBeneficiaryArguments> = ServerApiByUidGetBeneficiaryArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidGetBeneficiaryArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidGetBeneficiaryArguments.
     * @param {ServerApiByUidGetBeneficiaryArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidGetBeneficiaryArguments | null | undefined): number  {
        return ServerApiByUidGetBeneficiaryArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidGetBeneficiaryArguments with another object.
     * @param {ServerApiByUidGetBeneficiaryArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidGetBeneficiaryArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidGetBeneficiaryArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidGetBeneficiaryArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidGetBeneficiaryArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidGetBeneficiaryArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidSetBeneficiaryArguments structure.
 */
export class ServerApiByUidSetBeneficiaryArguments implements ToString  {
    public readonly uid: UUID;
    public static readonly META_BODY: FastMetaType<ServerApiByUidSetBeneficiaryArguments> = new Impl.ServerApiByUidSetBeneficiaryArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidSetBeneficiaryArguments> = ServerApiByUidSetBeneficiaryArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidSetBeneficiaryArguments.
     * @param uid - UUID
     */
    constructor(uid: UUID)  {
        this.uid = uid;
        
    }
    public getUid(): UUID  {
        return this.uid;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidSetBeneficiaryArguments.
     * @param {ServerApiByUidSetBeneficiaryArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidSetBeneficiaryArguments | null | undefined): number  {
        return ServerApiByUidSetBeneficiaryArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidSetBeneficiaryArguments with another object.
     * @param {ServerApiByUidSetBeneficiaryArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidSetBeneficiaryArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidSetBeneficiaryArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidSetBeneficiaryArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidSetBeneficiaryArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidSetBeneficiaryArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidGetBlockTimeArguments structure.
 */
export class ServerApiByUidGetBlockTimeArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidGetBlockTimeArguments> = new Impl.ServerApiByUidGetBlockTimeArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidGetBlockTimeArguments> = ServerApiByUidGetBlockTimeArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidGetBlockTimeArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidGetBlockTimeArguments.
     * @param {ServerApiByUidGetBlockTimeArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidGetBlockTimeArguments | null | undefined): number  {
        return ServerApiByUidGetBlockTimeArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidGetBlockTimeArguments with another object.
     * @param {ServerApiByUidGetBlockTimeArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidGetBlockTimeArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidGetBlockTimeArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidGetBlockTimeArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidGetBlockTimeArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidGetBlockTimeArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidUnblockArguments structure.
 */
export class ServerApiByUidUnblockArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidUnblockArguments> = new Impl.ServerApiByUidUnblockArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidUnblockArguments> = ServerApiByUidUnblockArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidUnblockArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidUnblockArguments.
     * @param {ServerApiByUidUnblockArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidUnblockArguments | null | undefined): number  {
        return ServerApiByUidUnblockArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidUnblockArguments with another object.
     * @param {ServerApiByUidUnblockArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidUnblockArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidUnblockArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidUnblockArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidUnblockArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidUnblockArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidCreateTimeArguments structure.
 */
export class ServerApiByUidCreateTimeArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidCreateTimeArguments> = new Impl.ServerApiByUidCreateTimeArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidCreateTimeArguments> = ServerApiByUidCreateTimeArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidCreateTimeArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidCreateTimeArguments.
     * @param {ServerApiByUidCreateTimeArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidCreateTimeArguments | null | undefined): number  {
        return ServerApiByUidCreateTimeArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidCreateTimeArguments with another object.
     * @param {ServerApiByUidCreateTimeArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidCreateTimeArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidCreateTimeArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidCreateTimeArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidCreateTimeArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidCreateTimeArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidOnlineTimeArguments structure.
 */
export class ServerApiByUidOnlineTimeArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<ServerApiByUidOnlineTimeArguments> = new Impl.ServerApiByUidOnlineTimeArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidOnlineTimeArguments> = ServerApiByUidOnlineTimeArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidOnlineTimeArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidOnlineTimeArguments.
     * @param {ServerApiByUidOnlineTimeArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidOnlineTimeArguments | null | undefined): number  {
        return ServerApiByUidOnlineTimeArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidOnlineTimeArguments with another object.
     * @param {ServerApiByUidOnlineTimeArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidOnlineTimeArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidOnlineTimeArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidOnlineTimeArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidOnlineTimeArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidOnlineTimeArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidAddAccessGroupArguments structure.
 */
export class ServerApiByUidAddAccessGroupArguments implements ToString  {
    public readonly groupId: UUID;
    public static readonly META_BODY: FastMetaType<ServerApiByUidAddAccessGroupArguments> = new Impl.ServerApiByUidAddAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidAddAccessGroupArguments> = ServerApiByUidAddAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidAddAccessGroupArguments.
     * @param groupId - UUID
     */
    constructor(groupId: UUID)  {
        this.groupId = groupId;
        
    }
    public getGroupId(): UUID  {
        return this.groupId;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidAddAccessGroupArguments.
     * @param {ServerApiByUidAddAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidAddAccessGroupArguments | null | undefined): number  {
        return ServerApiByUidAddAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidAddAccessGroupArguments with another object.
     * @param {ServerApiByUidAddAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidAddAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidAddAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidAddAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidAddAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidAddAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidRemoveAccessGroupArguments structure.
 */
export class ServerApiByUidRemoveAccessGroupArguments implements ToString  {
    public readonly groupId: UUID;
    public static readonly META_BODY: FastMetaType<ServerApiByUidRemoveAccessGroupArguments> = new Impl.ServerApiByUidRemoveAccessGroupArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidRemoveAccessGroupArguments> = ServerApiByUidRemoveAccessGroupArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidRemoveAccessGroupArguments.
     * @param groupId - UUID
     */
    constructor(groupId: UUID)  {
        this.groupId = groupId;
        
    }
    public getGroupId(): UUID  {
        return this.groupId;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidRemoveAccessGroupArguments.
     * @param {ServerApiByUidRemoveAccessGroupArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidRemoveAccessGroupArguments | null | undefined): number  {
        return ServerApiByUidRemoveAccessGroupArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidRemoveAccessGroupArguments with another object.
     * @param {ServerApiByUidRemoveAccessGroupArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidRemoveAccessGroupArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidRemoveAccessGroupArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidRemoveAccessGroupArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidRemoveAccessGroupArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidRemoveAccessGroupArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidSetMsgQueueLimitArguments structure.
 */
export class ServerApiByUidSetMsgQueueLimitArguments implements ToString  {
    public readonly limit: number;
    public static readonly META_BODY: FastMetaType<ServerApiByUidSetMsgQueueLimitArguments> = new Impl.ServerApiByUidSetMsgQueueLimitArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidSetMsgQueueLimitArguments> = ServerApiByUidSetMsgQueueLimitArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidSetMsgQueueLimitArguments.
     * @param limit - number
     */
    constructor(limit: number)  {
        this.limit = limit;
        
    }
    public getLimit(): number  {
        return this.limit;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidSetMsgQueueLimitArguments.
     * @param {ServerApiByUidSetMsgQueueLimitArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidSetMsgQueueLimitArguments | null | undefined): number  {
        return ServerApiByUidSetMsgQueueLimitArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidSetMsgQueueLimitArguments with another object.
     * @param {ServerApiByUidSetMsgQueueLimitArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidSetMsgQueueLimitArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidSetMsgQueueLimitArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidSetMsgQueueLimitArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidSetMsgQueueLimitArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidSetMsgQueueLimitArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidSetMsgTimeLimitArguments structure.
 */
export class ServerApiByUidSetMsgTimeLimitArguments implements ToString  {
    public readonly seconds: number;
    public static readonly META_BODY: FastMetaType<ServerApiByUidSetMsgTimeLimitArguments> = new Impl.ServerApiByUidSetMsgTimeLimitArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidSetMsgTimeLimitArguments> = ServerApiByUidSetMsgTimeLimitArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidSetMsgTimeLimitArguments.
     * @param seconds - number
     */
    constructor(seconds: number)  {
        this.seconds = seconds;
        
    }
    public getSeconds(): number  {
        return this.seconds;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidSetMsgTimeLimitArguments.
     * @param {ServerApiByUidSetMsgTimeLimitArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidSetMsgTimeLimitArguments | null | undefined): number  {
        return ServerApiByUidSetMsgTimeLimitArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidSetMsgTimeLimitArguments with another object.
     * @param {ServerApiByUidSetMsgTimeLimitArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidSetMsgTimeLimitArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidSetMsgTimeLimitArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidSetMsgTimeLimitArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidSetMsgTimeLimitArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidSetMsgTimeLimitArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidAddServersToCloudArguments structure.
 */
export class ServerApiByUidAddServersToCloudArguments implements ToString  {
    public readonly sids: number[];
    public static readonly META_BODY: FastMetaType<ServerApiByUidAddServersToCloudArguments> = new Impl.ServerApiByUidAddServersToCloudArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidAddServersToCloudArguments> = ServerApiByUidAddServersToCloudArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidAddServersToCloudArguments.
     * @param sids - number[]
     */
    constructor(sids: number[])  {
        this.sids = sids;
        if (sids === null || sids === undefined) throw new Error(`Field 'sids' cannot be null for type ServerApiByUidAddServersToCloudArguments.`);
        
    }
    public getSids(): number[]  {
        return this.sids;
        
    }
    public sidsContains(el: number): boolean  {
        return (this.sids as number[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidAddServersToCloudArguments.
     * @param {ServerApiByUidAddServersToCloudArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidAddServersToCloudArguments | null | undefined): number  {
        return ServerApiByUidAddServersToCloudArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidAddServersToCloudArguments with another object.
     * @param {ServerApiByUidAddServersToCloudArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidAddServersToCloudArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidAddServersToCloudArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidAddServersToCloudArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidAddServersToCloudArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidAddServersToCloudArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerApiByUidRemoveServersFromCloudArguments structure.
 */
export class ServerApiByUidRemoveServersFromCloudArguments implements ToString  {
    public readonly sids: number[];
    public static readonly META_BODY: FastMetaType<ServerApiByUidRemoveServersFromCloudArguments> = new Impl.ServerApiByUidRemoveServersFromCloudArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerApiByUidRemoveServersFromCloudArguments> = ServerApiByUidRemoveServersFromCloudArguments.META_BODY;
    /**
     * Creates an instance of ServerApiByUidRemoveServersFromCloudArguments.
     * @param sids - number[]
     */
    constructor(sids: number[])  {
        this.sids = sids;
        if (sids === null || sids === undefined) throw new Error(`Field 'sids' cannot be null for type ServerApiByUidRemoveServersFromCloudArguments.`);
        
    }
    public getSids(): number[]  {
        return this.sids;
        
    }
    public sidsContains(el: number): boolean  {
        return (this.sids as number[]).includes(el as any);
        
    }
    /**
     * Calculates a hash code for a static instance of ServerApiByUidRemoveServersFromCloudArguments.
     * @param {ServerApiByUidRemoveServersFromCloudArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerApiByUidRemoveServersFromCloudArguments | null | undefined): number  {
        return ServerApiByUidRemoveServersFromCloudArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerApiByUidRemoveServersFromCloudArguments with another object.
     * @param {ServerApiByUidRemoveServersFromCloudArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerApiByUidRemoveServersFromCloudArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerApiByUidRemoveServersFromCloudArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerApiByUidRemoveServersFromCloudArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerApiByUidRemoveServersFromCloudArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerApiByUidRemoveServersFromCloudArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface ServerApiByUid  {
    /**
     * @returns ARFuture<bigint>
     *
     * @aetherMethodId 3
     */
    getBalance(): ARFuture<bigint>;
    getBalanceArguments?(args: ServerApiByUidGetBalanceArguments): ARFuture<bigint>;
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 4
     */
    setParent(uid: UUID): AFuture;
    setParentArguments?(args: ServerApiByUidSetParentArguments): AFuture;
    /**
     * @aetherMethodId 5
     */
    block(): AFuture;
    blockArguments?(args: ServerApiByUidBlockArguments): AFuture;
    /**
     * @returns ARFuture<CloudConfig>
     *
     * @aetherMethodId 6
     */
    getPosition(): ARFuture<CloudConfig>;
    getPositionArguments?(args: ServerApiByUidGetPositionArguments): ARFuture<CloudConfig>;
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 7
     */
    getParent(): ARFuture<UUID>;
    getParentArguments?(args: ServerApiByUidGetParentArguments): ARFuture<UUID>;
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 8
     */
    getBeneficiary(): ARFuture<UUID>;
    getBeneficiaryArguments?(args: ServerApiByUidGetBeneficiaryArguments): ARFuture<UUID>;
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 9
     */
    setBeneficiary(uid: UUID): AFuture;
    setBeneficiaryArguments?(args: ServerApiByUidSetBeneficiaryArguments): AFuture;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 10
     */
    getBlockTime(): ARFuture<Date>;
    getBlockTimeArguments?(args: ServerApiByUidGetBlockTimeArguments): ARFuture<Date>;
    /**
     * @aetherMethodId 11
     */
    unblock(): AFuture;
    unblockArguments?(args: ServerApiByUidUnblockArguments): AFuture;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 12
     */
    createTime(): ARFuture<Date>;
    createTimeArguments?(args: ServerApiByUidCreateTimeArguments): ARFuture<Date>;
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 13
     */
    onlineTime(): ARFuture<Date>;
    onlineTimeArguments?(args: ServerApiByUidOnlineTimeArguments): ARFuture<Date>;
    /**
     * @param groupId - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 14
     */
    addAccessGroup(groupId: UUID): ARFuture<boolean>;
    addAccessGroupArguments?(args: ServerApiByUidAddAccessGroupArguments): ARFuture<boolean>;
    /**
     * @param groupId - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 15
     */
    removeAccessGroup(groupId: UUID): ARFuture<boolean>;
    removeAccessGroupArguments?(args: ServerApiByUidRemoveAccessGroupArguments): ARFuture<boolean>;
    /**
     * @param limit - number
     *
     * @aetherMethodId 16
     */
    setMsgQueueLimit(limit: number): AFuture;
    setMsgQueueLimitArguments?(args: ServerApiByUidSetMsgQueueLimitArguments): AFuture;
    /**
     * @param seconds - number
     *
     * @aetherMethodId 17
     */
    setMsgTimeLimit(seconds: number): AFuture;
    setMsgTimeLimitArguments?(args: ServerApiByUidSetMsgTimeLimitArguments): AFuture;
    /**
     * @param sids - number[]
     *
     * @aetherMethodId 18
     */
    addServersToCloud(sids: number[]): AFuture;
    addServersToCloudArguments?(args: ServerApiByUidAddServersToCloudArguments): AFuture;
    /**
     * @param sids - number[]
     *
     * @aetherMethodId 19
     */
    removeServersFromCloud(sids: number[]): AFuture;
    removeServersFromCloudArguments?(args: ServerApiByUidRemoveServersFromCloudArguments): AFuture;
    
}
export namespace ServerApiByUid  {
    export const META: FastMetaApi<ServerApiByUid, ServerApiByUidRemote> = new Impl.ServerApiByUidMetaImpl();
    
}
export interface ServerApiByUidRemote extends ServerApiByUid, RemoteApi  {
    
}
export abstract class ServerApiByUidLocal<RT extends RemoteApi> implements ServerApiByUid  {
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
    public getBalanceArguments(args: ServerApiByUidGetBalanceArguments): ARFuture<bigint>  {
        return this.getBalance();
        
    }
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 4
     */
    public abstract setParent(uid: UUID): AFuture;
    public setParentArguments(args: ServerApiByUidSetParentArguments): AFuture  {
        return this.setParent(args.uid);
        
    }
    /**
     * @aetherMethodId 5
     */
    public abstract block(): AFuture;
    public blockArguments(args: ServerApiByUidBlockArguments): AFuture  {
        return this.block();
        
    }
    /**
     * @returns ARFuture<CloudConfig>
     *
     * @aetherMethodId 6
     */
    public abstract getPosition(): ARFuture<CloudConfig>;
    public getPositionArguments(args: ServerApiByUidGetPositionArguments): ARFuture<CloudConfig>  {
        return this.getPosition();
        
    }
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 7
     */
    public abstract getParent(): ARFuture<UUID>;
    public getParentArguments(args: ServerApiByUidGetParentArguments): ARFuture<UUID>  {
        return this.getParent();
        
    }
    /**
     * @returns ARFuture<UUID>
     *
     * @aetherMethodId 8
     */
    public abstract getBeneficiary(): ARFuture<UUID>;
    public getBeneficiaryArguments(args: ServerApiByUidGetBeneficiaryArguments): ARFuture<UUID>  {
        return this.getBeneficiary();
        
    }
    /**
     * @param uid - UUID
     *
     * @aetherMethodId 9
     */
    public abstract setBeneficiary(uid: UUID): AFuture;
    public setBeneficiaryArguments(args: ServerApiByUidSetBeneficiaryArguments): AFuture  {
        return this.setBeneficiary(args.uid);
        
    }
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 10
     */
    public abstract getBlockTime(): ARFuture<Date>;
    public getBlockTimeArguments(args: ServerApiByUidGetBlockTimeArguments): ARFuture<Date>  {
        return this.getBlockTime();
        
    }
    /**
     * @aetherMethodId 11
     */
    public abstract unblock(): AFuture;
    public unblockArguments(args: ServerApiByUidUnblockArguments): AFuture  {
        return this.unblock();
        
    }
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 12
     */
    public abstract createTime(): ARFuture<Date>;
    public createTimeArguments(args: ServerApiByUidCreateTimeArguments): ARFuture<Date>  {
        return this.createTime();
        
    }
    /**
     * @returns ARFuture<Date>
     *
     * @aetherMethodId 13
     */
    public abstract onlineTime(): ARFuture<Date>;
    public onlineTimeArguments(args: ServerApiByUidOnlineTimeArguments): ARFuture<Date>  {
        return this.onlineTime();
        
    }
    /**
     * @param groupId - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 14
     */
    public abstract addAccessGroup(groupId: UUID): ARFuture<boolean>;
    public addAccessGroupArguments(args: ServerApiByUidAddAccessGroupArguments): ARFuture<boolean>  {
        return this.addAccessGroup(args.groupId);
        
    }
    /**
     * @param groupId - UUID
     * @returns ARFuture<boolean>
     *
     * @aetherMethodId 15
     */
    public abstract removeAccessGroup(groupId: UUID): ARFuture<boolean>;
    public removeAccessGroupArguments(args: ServerApiByUidRemoveAccessGroupArguments): ARFuture<boolean>  {
        return this.removeAccessGroup(args.groupId);
        
    }
    /**
     * @param limit - number
     *
     * @aetherMethodId 16
     */
    public abstract setMsgQueueLimit(limit: number): AFuture;
    public setMsgQueueLimitArguments(args: ServerApiByUidSetMsgQueueLimitArguments): AFuture  {
        return this.setMsgQueueLimit(args.limit);
        
    }
    /**
     * @param seconds - number
     *
     * @aetherMethodId 17
     */
    public abstract setMsgTimeLimit(seconds: number): AFuture;
    public setMsgTimeLimitArguments(args: ServerApiByUidSetMsgTimeLimitArguments): AFuture  {
        return this.setMsgTimeLimit(args.seconds);
        
    }
    /**
     * @param sids - number[]
     *
     * @aetherMethodId 18
     */
    public abstract addServersToCloud(sids: number[]): AFuture;
    public addServersToCloudArguments(args: ServerApiByUidAddServersToCloudArguments): AFuture  {
        return this.addServersToCloud(args.sids);
        
    }
    /**
     * @param sids - number[]
     *
     * @aetherMethodId 19
     */
    public abstract removeServersFromCloud(sids: number[]): AFuture;
    public removeServersFromCloudArguments(args: ServerApiByUidRemoveServersFromCloudArguments): AFuture  {
        return this.removeServersFromCloud(args.sids);
        
    }
    
}
/**
 * Represents the ClientApiRegUnsafeEnterArguments structure.
 */
export class ClientApiRegUnsafeEnterArguments implements ToString  {
    public readonly stream: ClientApiRegSafeStream;
    public static readonly META_BODY: FastMetaType<ClientApiRegUnsafeEnterArguments> = new Impl.ClientApiRegUnsafeEnterArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiRegUnsafeEnterArguments> = ClientApiRegUnsafeEnterArguments.META_BODY;
    /**
     * Creates an instance of ClientApiRegUnsafeEnterArguments.
     * @param stream - ClientApiRegSafeStream
     */
    constructor(stream: ClientApiRegSafeStream)  {
        this.stream = stream;
        if (stream === null || stream === undefined) throw new Error(`Field 'stream' cannot be null for type ClientApiRegUnsafeEnterArguments.`);
        
    }
    public getStream(): ClientApiRegSafeStream  {
        return this.stream;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiRegUnsafeEnterArguments.
     * @param {ClientApiRegUnsafeEnterArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiRegUnsafeEnterArguments | null | undefined): number  {
        return ClientApiRegUnsafeEnterArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiRegUnsafeEnterArguments with another object.
     * @param {ClientApiRegUnsafeEnterArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiRegUnsafeEnterArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiRegUnsafeEnterArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiRegUnsafeEnterArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiRegUnsafeEnterArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiRegUnsafeEnterArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ClientApiRegUnsafeEnterGlobalArguments structure.
 */
export class ClientApiRegUnsafeEnterGlobalArguments implements ToString  {
    public readonly stream: GlobalRegClientApiStream;
    public static readonly META_BODY: FastMetaType<ClientApiRegUnsafeEnterGlobalArguments> = new Impl.ClientApiRegUnsafeEnterGlobalArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ClientApiRegUnsafeEnterGlobalArguments> = ClientApiRegUnsafeEnterGlobalArguments.META_BODY;
    /**
     * Creates an instance of ClientApiRegUnsafeEnterGlobalArguments.
     * @param stream - GlobalRegClientApiStream
     */
    constructor(stream: GlobalRegClientApiStream)  {
        this.stream = stream;
        if (stream === null || stream === undefined) throw new Error(`Field 'stream' cannot be null for type ClientApiRegUnsafeEnterGlobalArguments.`);
        
    }
    public getStream(): GlobalRegClientApiStream  {
        return this.stream;
        
    }
    /**
     * Calculates a hash code for a static instance of ClientApiRegUnsafeEnterGlobalArguments.
     * @param {ClientApiRegUnsafeEnterGlobalArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ClientApiRegUnsafeEnterGlobalArguments | null | undefined): number  {
        return ClientApiRegUnsafeEnterGlobalArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ClientApiRegUnsafeEnterGlobalArguments with another object.
     * @param {ClientApiRegUnsafeEnterGlobalArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ClientApiRegUnsafeEnterGlobalArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ClientApiRegUnsafeEnterGlobalArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ClientApiRegUnsafeEnterGlobalArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ClientApiRegUnsafeEnterGlobalArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ClientApiRegUnsafeEnterGlobalArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface ClientApiRegUnsafe  {
    /**
     * @param stream - ClientApiRegSafeStream
     *
     * @aetherMethodId 3
     */
    enter(stream: ClientApiRegSafeStream): void;
    enterArguments?(args: ClientApiRegUnsafeEnterArguments): void;
    /**
     * @param stream - GlobalRegClientApiStream
     *
     * @aetherMethodId 4
     */
    enterGlobal(stream: GlobalRegClientApiStream): void;
    enterGlobalArguments?(args: ClientApiRegUnsafeEnterGlobalArguments): void;
    
}
export namespace ClientApiRegUnsafe  {
    export const META: FastMetaApi<ClientApiRegUnsafe, ClientApiRegUnsafeRemote> = new Impl.ClientApiRegUnsafeMetaImpl();
    
}
export interface ClientApiRegUnsafeRemote extends ClientApiRegUnsafe, RemoteApi  {
    openEnter(factory: (api: ClientApiRegSafeRemote) => any, converter: BytesConverter, ...keys: any[]): ClientApiRegSafeRemote;
    openEnterGlobal(factory: (api: GlobalRegClientApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegClientApiRemote;
    
}
export abstract class ClientApiRegUnsafeLocal<RT extends RemoteApi> implements ClientApiRegUnsafe  {
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
    public enterArguments(args: ClientApiRegUnsafeEnterArguments): void  {
        this.enter(args.stream);
        
    }
    /**
     * @param stream - GlobalRegClientApiStream
     *
     * @aetherMethodId 4
     */
    public abstract enterGlobal(stream: GlobalRegClientApiStream): void;
    public enterGlobalArguments(args: ClientApiRegUnsafeEnterGlobalArguments): void  {
        this.enterGlobal(args.stream);
        
    }
    
}
/**
 * Represents the GlobalRegServerApiSetMasterKeyArguments structure.
 */
export class GlobalRegServerApiSetMasterKeyArguments implements ToString  {
    public readonly key: Key;
    public static readonly META_BODY: FastMetaType<GlobalRegServerApiSetMasterKeyArguments> = new Impl.GlobalRegServerApiSetMasterKeyArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<GlobalRegServerApiSetMasterKeyArguments> = GlobalRegServerApiSetMasterKeyArguments.META_BODY;
    /**
     * Creates an instance of GlobalRegServerApiSetMasterKeyArguments.
     * @param key - Key
     */
    constructor(key: Key)  {
        this.key = key;
        if (key === null || key === undefined) throw new Error(`Field 'key' cannot be null for type GlobalRegServerApiSetMasterKeyArguments.`);
        
    }
    public getKey(): Key  {
        return this.key;
        
    }
    /**
     * Calculates a hash code for a static instance of GlobalRegServerApiSetMasterKeyArguments.
     * @param {GlobalRegServerApiSetMasterKeyArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: GlobalRegServerApiSetMasterKeyArguments | null | undefined): number  {
        return GlobalRegServerApiSetMasterKeyArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of GlobalRegServerApiSetMasterKeyArguments with another object.
     * @param {GlobalRegServerApiSetMasterKeyArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: GlobalRegServerApiSetMasterKeyArguments | null | undefined, v2: any | null | undefined): boolean  {
        return GlobalRegServerApiSetMasterKeyArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return GlobalRegServerApiSetMasterKeyArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return GlobalRegServerApiSetMasterKeyArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        GlobalRegServerApiSetMasterKeyArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the GlobalRegServerApiFinishArguments structure.
 */
export class GlobalRegServerApiFinishArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<GlobalRegServerApiFinishArguments> = new Impl.GlobalRegServerApiFinishArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<GlobalRegServerApiFinishArguments> = GlobalRegServerApiFinishArguments.META_BODY;
    /**
     * Creates an instance of GlobalRegServerApiFinishArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of GlobalRegServerApiFinishArguments.
     * @param {GlobalRegServerApiFinishArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: GlobalRegServerApiFinishArguments | null | undefined): number  {
        return GlobalRegServerApiFinishArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of GlobalRegServerApiFinishArguments with another object.
     * @param {GlobalRegServerApiFinishArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: GlobalRegServerApiFinishArguments | null | undefined, v2: any | null | undefined): boolean  {
        return GlobalRegServerApiFinishArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return GlobalRegServerApiFinishArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return GlobalRegServerApiFinishArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        GlobalRegServerApiFinishArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface GlobalRegServerApi  {
    /**
     * @param key - Key
     *
     * @aetherMethodId 3
     */
    setMasterKey(key: Key): void;
    setMasterKeyArguments?(args: GlobalRegServerApiSetMasterKeyArguments): void;
    /**
     * @returns ARFuture<FinishResultGlobalRegServerApi>
     *
     * @aetherMethodId 4
     */
    finish(): ARFuture<FinishResultGlobalRegServerApi>;
    finishArguments?(args: GlobalRegServerApiFinishArguments): ARFuture<FinishResultGlobalRegServerApi>;
    
}
export namespace GlobalRegServerApi  {
    export const META: FastMetaApi<GlobalRegServerApi, GlobalRegServerApiRemote> = new Impl.GlobalRegServerApiMetaImpl();
    
}
export interface GlobalRegServerApiRemote extends GlobalRegServerApi, RemoteApi  {
    
}
export abstract class GlobalRegServerApiLocal<RT extends RemoteApi> implements GlobalRegServerApi  {
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
    public setMasterKeyArguments(args: GlobalRegServerApiSetMasterKeyArguments): void  {
        this.setMasterKey(args.key);
        
    }
    /**
     * @returns ARFuture<FinishResultGlobalRegServerApi>
     *
     * @aetherMethodId 4
     */
    public abstract finish(): ARFuture<FinishResultGlobalRegServerApi>;
    public finishArguments(args: GlobalRegServerApiFinishArguments): ARFuture<FinishResultGlobalRegServerApi>  {
        return this.finish();
        
    }
    
}
/**
 * Represents the ServerRegistrationApiRegistrationArguments structure.
 */
export class ServerRegistrationApiRegistrationArguments implements ToString  {
    public readonly salt: string;
    public readonly suffix: string;
    public readonly passwords: number[];
    public readonly parent: UUID;
    public readonly globalApi: GlobalApiStream;
    public static readonly META_BODY: FastMetaType<ServerRegistrationApiRegistrationArguments> = new Impl.ServerRegistrationApiRegistrationArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerRegistrationApiRegistrationArguments> = ServerRegistrationApiRegistrationArguments.META_BODY;
    /**
     * Creates an instance of ServerRegistrationApiRegistrationArguments.
     * @param salt - string
     * @param suffix - string
     * @param passwords - number[]
     * @param parent - UUID
     * @param globalApi - GlobalApiStream
     */
    constructor(salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream)  {
        this.salt = salt;
        this.suffix = suffix;
        this.passwords = passwords;
        this.parent = parent;
        this.globalApi = globalApi;
        if (passwords === null || passwords === undefined) throw new Error(`Field 'passwords' cannot be null for type ServerRegistrationApiRegistrationArguments.`);
        if (globalApi === null || globalApi === undefined) throw new Error(`Field 'globalApi' cannot be null for type ServerRegistrationApiRegistrationArguments.`);
        
    }
    public getSalt(): string  {
        return this.salt;
        
    }
    public getSuffix(): string  {
        return this.suffix;
        
    }
    public getPasswords(): number[]  {
        return this.passwords;
        
    }
    public passwordsContains(el: number): boolean  {
        return (this.passwords as number[]).includes(el as any);
        
    }
    public getParent(): UUID  {
        return this.parent;
        
    }
    public getGlobalApi(): GlobalApiStream  {
        return this.globalApi;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerRegistrationApiRegistrationArguments.
     * @param {ServerRegistrationApiRegistrationArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerRegistrationApiRegistrationArguments | null | undefined): number  {
        return ServerRegistrationApiRegistrationArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerRegistrationApiRegistrationArguments with another object.
     * @param {ServerRegistrationApiRegistrationArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerRegistrationApiRegistrationArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerRegistrationApiRegistrationArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerRegistrationApiRegistrationArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerRegistrationApiRegistrationArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerRegistrationApiRegistrationArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerRegistrationApiRequestWorkProofDataArguments structure.
 */
export class ServerRegistrationApiRequestWorkProofDataArguments implements ToString  {
    public readonly parent: UUID;
    public readonly powMethods: PowMethod;
    public static readonly META_BODY: FastMetaType<ServerRegistrationApiRequestWorkProofDataArguments> = new Impl.ServerRegistrationApiRequestWorkProofDataArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerRegistrationApiRequestWorkProofDataArguments> = ServerRegistrationApiRequestWorkProofDataArguments.META_BODY;
    /**
     * Creates an instance of ServerRegistrationApiRequestWorkProofDataArguments.
     * @param parent - UUID
     * @param powMethods - PowMethod
     */
    constructor(parent: UUID, powMethods: PowMethod)  {
        this.parent = parent;
        this.powMethods = powMethods;
        if (powMethods === null || powMethods === undefined) throw new Error(`Field 'powMethods' cannot be null for type ServerRegistrationApiRequestWorkProofDataArguments.`);
        
    }
    public getParent(): UUID  {
        return this.parent;
        
    }
    public getPowMethods(): PowMethod  {
        return this.powMethods;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerRegistrationApiRequestWorkProofDataArguments.
     * @param {ServerRegistrationApiRequestWorkProofDataArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerRegistrationApiRequestWorkProofDataArguments | null | undefined): number  {
        return ServerRegistrationApiRequestWorkProofDataArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerRegistrationApiRequestWorkProofDataArguments with another object.
     * @param {ServerRegistrationApiRequestWorkProofDataArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerRegistrationApiRequestWorkProofDataArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerRegistrationApiRequestWorkProofDataArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerRegistrationApiRequestWorkProofDataArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerRegistrationApiRequestWorkProofDataArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerRegistrationApiRequestWorkProofDataArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerRegistrationApiResolveServersArguments structure.
 */
export class ServerRegistrationApiResolveServersArguments implements ToString  {
    public readonly serverIds: Cloud;
    public static readonly META_BODY: FastMetaType<ServerRegistrationApiResolveServersArguments> = new Impl.ServerRegistrationApiResolveServersArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerRegistrationApiResolveServersArguments> = ServerRegistrationApiResolveServersArguments.META_BODY;
    /**
     * Creates an instance of ServerRegistrationApiResolveServersArguments.
     * @param serverIds - Cloud
     */
    constructor(serverIds: Cloud)  {
        this.serverIds = serverIds;
        if (serverIds === null || serverIds === undefined) throw new Error(`Field 'serverIds' cannot be null for type ServerRegistrationApiResolveServersArguments.`);
        
    }
    public getServerIds(): Cloud  {
        return this.serverIds;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerRegistrationApiResolveServersArguments.
     * @param {ServerRegistrationApiResolveServersArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerRegistrationApiResolveServersArguments | null | undefined): number  {
        return ServerRegistrationApiResolveServersArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerRegistrationApiResolveServersArguments with another object.
     * @param {ServerRegistrationApiResolveServersArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerRegistrationApiResolveServersArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerRegistrationApiResolveServersArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerRegistrationApiResolveServersArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerRegistrationApiResolveServersArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerRegistrationApiResolveServersArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the ServerRegistrationApiSetReturnKeyArguments structure.
 */
export class ServerRegistrationApiSetReturnKeyArguments implements ToString  {
    public readonly key: Key;
    public static readonly META_BODY: FastMetaType<ServerRegistrationApiSetReturnKeyArguments> = new Impl.ServerRegistrationApiSetReturnKeyArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<ServerRegistrationApiSetReturnKeyArguments> = ServerRegistrationApiSetReturnKeyArguments.META_BODY;
    /**
     * Creates an instance of ServerRegistrationApiSetReturnKeyArguments.
     * @param key - Key
     */
    constructor(key: Key)  {
        this.key = key;
        if (key === null || key === undefined) throw new Error(`Field 'key' cannot be null for type ServerRegistrationApiSetReturnKeyArguments.`);
        
    }
    public getKey(): Key  {
        return this.key;
        
    }
    /**
     * Calculates a hash code for a static instance of ServerRegistrationApiSetReturnKeyArguments.
     * @param {ServerRegistrationApiSetReturnKeyArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: ServerRegistrationApiSetReturnKeyArguments | null | undefined): number  {
        return ServerRegistrationApiSetReturnKeyArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of ServerRegistrationApiSetReturnKeyArguments with another object.
     * @param {ServerRegistrationApiSetReturnKeyArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: ServerRegistrationApiSetReturnKeyArguments | null | undefined, v2: any | null | undefined): boolean  {
        return ServerRegistrationApiSetReturnKeyArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return ServerRegistrationApiSetReturnKeyArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return ServerRegistrationApiSetReturnKeyArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        ServerRegistrationApiSetReturnKeyArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface ServerRegistrationApi  {
    /**
     * @param salt - string
     * @param suffix - string
     * @param passwords - number[]
     * @param parent - UUID
     * @param globalApi - GlobalApiStream
     *
     * @aetherMethodId 3
     */
    registration(salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void;
    registrationArguments?(args: ServerRegistrationApiRegistrationArguments): void;
    /**
     * @param parent - UUID
     * @param powMethods - PowMethod
     * @returns ARFuture<WorkProofDTO>
     *
     * @aetherMethodId 4
     */
    requestWorkProofData(parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO>;
    requestWorkProofDataArguments?(args: ServerRegistrationApiRequestWorkProofDataArguments): ARFuture<WorkProofDTO>;
    /**
     * @param serverIds - Cloud
     * @returns ARFuture<ServerDescriptor[]>
     *
     * @aetherMethodId 5
     */
    resolveServers(serverIds: Cloud): ARFuture<ServerDescriptor[]>;
    resolveServersArguments?(args: ServerRegistrationApiResolveServersArguments): ARFuture<ServerDescriptor[]>;
    /**
     * @param key - Key
     *
     * @aetherMethodId 6
     */
    setReturnKey(key: Key): void;
    setReturnKeyArguments?(args: ServerRegistrationApiSetReturnKeyArguments): void;
    
}
export namespace ServerRegistrationApi  {
    export const META: FastMetaApi<ServerRegistrationApi, ServerRegistrationApiRemote> = new Impl.ServerRegistrationApiMetaImpl();
    
}
export interface ServerRegistrationApiRemote extends ServerRegistrationApi, RemoteApi  {
    openRegistration(salt: string, suffix: string, passwords: number[], parent: UUID, factory: (api: GlobalRegServerApiRemote) => any, converter: BytesConverter, ...keys: any[]): GlobalRegServerApiRemote;
    
}
export abstract class ServerRegistrationApiLocal<RT extends RemoteApi> implements ServerRegistrationApi  {
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
     * @param globalApi - GlobalApiStream
     *
     * @aetherMethodId 3
     */
    public abstract registration(salt: string, suffix: string, passwords: number[], parent: UUID, globalApi: GlobalApiStream): void;
    public registrationArguments(args: ServerRegistrationApiRegistrationArguments): void  {
        this.registration(args.salt, args.suffix, args.passwords, args.parent, args.globalApi);
        
    }
    /**
     * @param parent - UUID
     * @param powMethods - PowMethod
     * @returns ARFuture<WorkProofDTO>
     *
     * @aetherMethodId 4
     */
    public abstract requestWorkProofData(parent: UUID, powMethods: PowMethod): ARFuture<WorkProofDTO>;
    public requestWorkProofDataArguments(args: ServerRegistrationApiRequestWorkProofDataArguments): ARFuture<WorkProofDTO>  {
        return this.requestWorkProofData(args.parent, args.powMethods);
        
    }
    /**
     * @param serverIds - Cloud
     * @returns ARFuture<ServerDescriptor[]>
     *
     * @aetherMethodId 5
     */
    public abstract resolveServers(serverIds: Cloud): ARFuture<ServerDescriptor[]>;
    public resolveServersArguments(args: ServerRegistrationApiResolveServersArguments): ARFuture<ServerDescriptor[]>  {
        return this.resolveServers(args.serverIds);
        
    }
    /**
     * @param key - Key
     *
     * @aetherMethodId 6
     */
    public abstract setReturnKey(key: Key): void;
    public setReturnKeyArguments(args: ServerRegistrationApiSetReturnKeyArguments): void  {
        this.setReturnKey(args.key);
        
    }
    
}
/**
 * Represents the RegistrationRootApiGetAsymmetricPublicKeyArguments structure.
 */
export class RegistrationRootApiGetAsymmetricPublicKeyArguments implements ToString  {
    public readonly cryptoLib: CryptoLib;
    public static readonly META_BODY: FastMetaType<RegistrationRootApiGetAsymmetricPublicKeyArguments> = new Impl.RegistrationRootApiGetAsymmetricPublicKeyArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<RegistrationRootApiGetAsymmetricPublicKeyArguments> = RegistrationRootApiGetAsymmetricPublicKeyArguments.META_BODY;
    /**
     * Creates an instance of RegistrationRootApiGetAsymmetricPublicKeyArguments.
     * @param cryptoLib - CryptoLib
     */
    constructor(cryptoLib: CryptoLib)  {
        this.cryptoLib = cryptoLib;
        if (cryptoLib === null || cryptoLib === undefined) throw new Error(`Field 'cryptoLib' cannot be null for type RegistrationRootApiGetAsymmetricPublicKeyArguments.`);
        
    }
    public getCryptoLib(): CryptoLib  {
        return this.cryptoLib;
        
    }
    /**
     * Calculates a hash code for a static instance of RegistrationRootApiGetAsymmetricPublicKeyArguments.
     * @param {RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined): number  {
        return RegistrationRootApiGetAsymmetricPublicKeyArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of RegistrationRootApiGetAsymmetricPublicKeyArguments with another object.
     * @param {RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: RegistrationRootApiGetAsymmetricPublicKeyArguments | null | undefined, v2: any | null | undefined): boolean  {
        return RegistrationRootApiGetAsymmetricPublicKeyArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return RegistrationRootApiGetAsymmetricPublicKeyArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return RegistrationRootApiGetAsymmetricPublicKeyArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        RegistrationRootApiGetAsymmetricPublicKeyArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the RegistrationRootApiEnterArguments structure.
 */
export class RegistrationRootApiEnterArguments implements ToString  {
    public readonly cryptoLib: CryptoLib;
    public readonly stream: ServerRegistrationApiStream;
    public static readonly META_BODY: FastMetaType<RegistrationRootApiEnterArguments> = new Impl.RegistrationRootApiEnterArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<RegistrationRootApiEnterArguments> = RegistrationRootApiEnterArguments.META_BODY;
    /**
     * Creates an instance of RegistrationRootApiEnterArguments.
     * @param cryptoLib - CryptoLib
     * @param stream - ServerRegistrationApiStream
     */
    constructor(cryptoLib: CryptoLib, stream: ServerRegistrationApiStream)  {
        this.cryptoLib = cryptoLib;
        this.stream = stream;
        if (cryptoLib === null || cryptoLib === undefined) throw new Error(`Field 'cryptoLib' cannot be null for type RegistrationRootApiEnterArguments.`);
        if (stream === null || stream === undefined) throw new Error(`Field 'stream' cannot be null for type RegistrationRootApiEnterArguments.`);
        
    }
    public getCryptoLib(): CryptoLib  {
        return this.cryptoLib;
        
    }
    public getStream(): ServerRegistrationApiStream  {
        return this.stream;
        
    }
    /**
     * Calculates a hash code for a static instance of RegistrationRootApiEnterArguments.
     * @param {RegistrationRootApiEnterArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: RegistrationRootApiEnterArguments | null | undefined): number  {
        return RegistrationRootApiEnterArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of RegistrationRootApiEnterArguments with another object.
     * @param {RegistrationRootApiEnterArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: RegistrationRootApiEnterArguments | null | undefined, v2: any | null | undefined): boolean  {
        return RegistrationRootApiEnterArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return RegistrationRootApiEnterArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return RegistrationRootApiEnterArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        RegistrationRootApiEnterArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
/**
 * Represents the RegistrationRootApiGetMyIpArguments structure.
 */
export class RegistrationRootApiGetMyIpArguments implements ToString  {
    public static readonly META_BODY: FastMetaType<RegistrationRootApiGetMyIpArguments> = new Impl.RegistrationRootApiGetMyIpArgumentsMetaBodyImpl();
    public static readonly META: FastMetaType<RegistrationRootApiGetMyIpArguments> = RegistrationRootApiGetMyIpArguments.META_BODY;
    /**
     * Creates an instance of RegistrationRootApiGetMyIpArguments.
     */
    constructor()  {
        
    }
    /**
     * Calculates a hash code for a static instance of RegistrationRootApiGetMyIpArguments.
     * @param {RegistrationRootApiGetMyIpArguments | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */
    public static staticHashCode(obj: RegistrationRootApiGetMyIpArguments | null | undefined): number  {
        return RegistrationRootApiGetMyIpArguments.META.metaHashCode(obj);
        
    }
    /**
     * Compares a static instance of RegistrationRootApiGetMyIpArguments with another object.
     * @param {RegistrationRootApiGetMyIpArguments | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */
    public static staticEquals(v1: RegistrationRootApiGetMyIpArguments | null | undefined, v2: any | null | undefined): boolean  {
        return RegistrationRootApiGetMyIpArguments.META.metaEquals(v1, v2);
        
    }
    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */
    public hashCode(): number  {
        return RegistrationRootApiGetMyIpArguments.staticHashCode(this);
        
    }
    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */
    public equals(other: any): boolean  {
        return RegistrationRootApiGetMyIpArguments.staticEquals(this, other);
        
    }
    public toAString(result: AString): AString  {
        RegistrationRootApiGetMyIpArguments.META.metaToString(this, result);
        return result;
        
    }
    
}
export interface RegistrationRootApi  {
    /**
     * @param cryptoLib - CryptoLib
     * @returns ARFuture<SignedKey>
     *
     * @aetherMethodId 3
     */
    getAsymmetricPublicKey(cryptoLib: CryptoLib): ARFuture<SignedKey>;
    getAsymmetricPublicKeyArguments?(args: RegistrationRootApiGetAsymmetricPublicKeyArguments): ARFuture<SignedKey>;
    /**
     * @param cryptoLib - CryptoLib
     * @param stream - ServerRegistrationApiStream
     *
     * @aetherMethodId 4
     */
    enter(cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void;
    enterArguments?(args: RegistrationRootApiEnterArguments): void;
    /**
     * @returns ARFuture<IpInfo>
     *
     * @aetherMethodId 6
     */
    getMyIp(): ARFuture<IpInfo>;
    getMyIpArguments?(args: RegistrationRootApiGetMyIpArguments): ARFuture<IpInfo>;
    
}
export namespace RegistrationRootApi  {
    export const META: FastMetaApi<RegistrationRootApi, RegistrationRootApiRemote> = new Impl.RegistrationRootApiMetaImpl();
    
}
export interface RegistrationRootApiRemote extends RegistrationRootApi, RemoteApi  {
    openEnter(cryptoLib: CryptoLib, factory: (api: ServerRegistrationApiRemote) => any, converter: BytesConverter, ...keys: any[]): ServerRegistrationApiRemote;
    
}
export abstract class RegistrationRootApiLocal<RT extends RemoteApi> implements RegistrationRootApi  {
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
    public getAsymmetricPublicKeyArguments(args: RegistrationRootApiGetAsymmetricPublicKeyArguments): ARFuture<SignedKey>  {
        return this.getAsymmetricPublicKey(args.cryptoLib);
        
    }
    /**
     * @param cryptoLib - CryptoLib
     * @param stream - ServerRegistrationApiStream
     *
     * @aetherMethodId 4
     */
    public abstract enter(cryptoLib: CryptoLib, stream: ServerRegistrationApiStream): void;
    public enterArguments(args: RegistrationRootApiEnterArguments): void  {
        this.enter(args.cryptoLib, args.stream);
        
    }
    /**
     * @returns ARFuture<IpInfo>
     *
     * @aetherMethodId 6
     */
    public abstract getMyIp(): ARFuture<IpInfo>;
    public getMyIpArguments(args: RegistrationRootApiGetMyIpArguments): ARFuture<IpInfo>  {
        return this.getMyIp();
        
    }
    
}
export interface ClientApiRegSafe  {
    
}
export namespace ClientApiRegSafe  {
    export const EMPTY: ClientApiRegSafe =  {
        
    };
    export const META: FastMetaApi<ClientApiRegSafe, ClientApiRegSafeRemote> = new Impl.ClientApiRegSafeMetaImpl();
    
}
export interface ClientApiRegSafeRemote extends ClientApiRegSafe, RemoteApi  {
    
}
export abstract class ClientApiRegSafeLocal<RT extends RemoteApi> implements ClientApiRegSafe  {
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
    export const EMPTY: GlobalRegClientApi =  {
        
    };
    export const META: FastMetaApi<GlobalRegClientApi, GlobalRegClientApiRemote> = new Impl.GlobalRegClientApiMetaImpl();
    
}
export interface GlobalRegClientApiRemote extends GlobalRegClientApi, RemoteApi  {
    
}
export abstract class GlobalRegClientApiLocal<RT extends RemoteApi> implements GlobalRegClientApi  {
    protected readonly remoteApi: RT;
    public getRemoteApi(): RT  {
        return this.remoteApi;
        
    }
    protected constructor(remoteApi: RT)  {
        this.remoteApi = remoteApi;
        
    }
    
}
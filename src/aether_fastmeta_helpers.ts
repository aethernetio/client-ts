// @ts-nocheck
// =============================================================================================
// FILE: aether.fastmeta_helpers.ts
// PURPOSE: Contains runtime helpers for hashCode and equals operations.
// DEPENDENCIES: aether.types.ts
// =============================================================================================

import { UUID, URI } from './aether_types';

/**
 * Interface for a runtime helper that provides hashCode and equals logic.
 */
interface HashCodeEqualsHelper<T> {
    /**
     * Calculates a hash code for a value.
     * @param val - The value (can be null or undefined).
     * @returns {number} A 32-bit integer hash code.
     */
    hashCode(val: T | null | undefined): number;

    /**
     * Compares two values for equality.
     * @param v1 - The first value (can be null or undefined).
     * @param v2 - The second value (can be null or undefined).
     * @returns {boolean} True if the values are considered equal.
     */
    equals(v1: T | null | undefined, v2: any | null | undefined): boolean;
}

/**
 * Calculates a hash code for a string.
 * @param {string | null | undefined} str - The string.
 * @returns {number} The hash code.
 */
function stringHashCode(str: string | null | undefined): number {
    if (str === null || str === undefined) return 0;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash | 0; // Convert to 32bit integer
    }
    return hash;
}

/**
 * Calculates a hash code for a number.
 * @param {number | null | undefined} val - The number.
 * @returns {number} The hash code.
 */
function numberHashCode(val: number | null | undefined): number {
    if (val === null || val === undefined) return 0;
    // Simple hash for numbers, good enough for most cases.
    return val | 0;
}

/**
 * Calculates a hash code for a bigint.
 * @param {bigint | null | undefined} val - The bigint.
 * @returns {number} The hash code.
 */
function bigIntHashCode(val: bigint | null | undefined): number {
    if (val === null || val === undefined) return 0;
    // Simple conversion to number for hash.
    return numberHashCode(Number(val % BigInt(0x7FFFFFFF)));
}

/**
 * Standard equality check that handles nulls.
 * @param {any} v1 - First value.
 * @param {any} v2 - Second value.
 * @returns {boolean} True if equal.
 */
function standardEquals(v1: any | null | undefined, v2: any | null | undefined): boolean {
    if (v1 === v2) return true;
    if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
    if (v2 === null || v2 === undefined) return false;
    return v1 === v2;
}

// --- Individual Helpers ---

const typeString: HashCodeEqualsHelper<string> = {
    hashCode: stringHashCode,
    equals: standardEquals,
};

const typeNumber: HashCodeEqualsHelper<number> = {
    hashCode: numberHashCode,
    equals: standardEquals,
};

const typeBigInt: HashCodeEqualsHelper<bigint> = {
    hashCode: bigIntHashCode,
    equals: standardEquals,
};

const typeBoolean: HashCodeEqualsHelper<boolean> = {
    hashCode: (val) => (val === null || val === undefined) ? 0 : (val ? 1231 : 1237),
    equals: standardEquals,
};

const typeDate: HashCodeEqualsHelper<Date> = {
    hashCode: (val) => (val === null || val === undefined) ? 0 : numberHashCode(val.getTime()),
    equals: (v1, v2) => {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Date)) return false;
        return v1.getTime() === v2.getTime();
    }
};

const typeURI: HashCodeEqualsHelper<URI> = {
    hashCode: stringHashCode,
    equals: standardEquals,
};

const typeObject: HashCodeEqualsHelper<object> = {
    hashCode: (val) => {
        if (val === null || val === undefined) return 0;
        if (typeof (val as any).hashCode !== 'function') {
            console.warn("Missing .hashCode() method on object", val);
            return 0;
        }
        return (val as any).hashCode();
    },
    equals: (v1, v2) => {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined) return false;
        if (typeof (v1 as any).equals !== 'function') {
            console.warn("Missing .equals() method on object", v1);
            return false;
        }
        return (v1 as any).equals(v2);
    }
};

const typeArrayByte: HashCodeEqualsHelper<Uint8Array> = {
    hashCode: (val) => {
        if (val === null || val === undefined) return 0;
        let hash = 1;
        for (let i = 0; i < val.length; i++) {
            hash = (31 * hash + val[i]) | 0;
        }
        return hash;
    },
    equals: (v1, v2) => {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof Uint8Array)) return false;
        if (v1.length !== v2.length) return false;
        for (let i = 0; i < v1.length; i++) {
            if (v1[i] !== v2[i]) return false;
        }
        return true;
    }
};

// --- Helpers that depend on other helpers ---

const typeUUID: HashCodeEqualsHelper<UUID> = {
    hashCode: (val) => (val === null || val === undefined) ? 0 : typeArrayByte.hashCode(val.data),
    equals: (v1, v2) => {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !(v2 instanceof UUID)) return false;
        return typeArrayByte.equals(v1.data, v2.data);
    }
};

const typeArrayObject = (
    elementHasher: (el: any) => number,
    elementComparer: (v1: any, v2: any) => boolean
): HashCodeEqualsHelper<any[]> => ({
    hashCode: (val) => {
        if (val === null || val === undefined) return 0;
        let hash = 1;
        for (const el of val) {
            hash = (31 * hash + elementHasher(el)) | 0;
        }
        return hash;
    },
    equals: (v1, v2) => {
        if (v1 === v2) return true;
        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);
        if (v2 === null || v2 === undefined || !Array.isArray(v2)) return false;
        if (v1.length !== v2.length) return false;
        for (let i = 0; i < v1.length; i++) {
            if (!elementComparer(v1[i], v2[i])) return false;
        }
        return true;
    }
});

/**
 * A collection of runtime helpers for calculating hashCode and equals.
 */
export const hashCodeEqualsHelpers = {
    typeString,
    typeNumber,
    typeBigInt,
    typeBoolean,
    typeDate,
    typeUUID,
    typeURI,
    typeObject,
    typeArrayByte,
    typeArrayObject
};
// =============================================================================================
// FILE: aether_astring.ts (Final version with JSDoc comments)
// PURPOSE: A string builder implementation supporting type-specific renderers (like Java's StringBuilder).
// =============================================================================================

// --- Basic Types & Mocks ---

export type char = string;
export type char_arr = string[];
export type byte_arr = Uint8Array;
export type Object_arr = any[];
export type Iterable<T> = Array<T> | Set<T> | T[];
export type Object = any;

/**
 * Interface for objects that can efficiently render themselves directly into an AString
 * instance, avoiding intermediate string concatenations.
 */
export interface ToString {
    /**
     * Renders the object's content into the provided AString buffer.
     * @param result The AString instance to which the text should be appended.
     */
    toString(result: AString): void;
}

// Primitive types from aether_types.ts (Mocks)
export type AFunction<A, B> = (a: A) => B;
export type ABiConsumer<T, U> = (t: T, u: U) => void;
export class UUID {
    data!: Uint8Array;
    static fromString(_s: string): UUID { throw new Error("Mock"); }
    toString(): string { return ''; }
}
export class AtomicReference<T> {
    private value: T;
    constructor(initial: T) { this.value = initial; }
    public get(): T { return this.value; }
    public compareAndSet(_expect: T, _update: T): boolean { return false; }
}

// Mocking Java IO classes (for addStackTrace)
class Writer {
    write(_cbuf: char_arr, _off: number, _len: number): void { }
    flush(): void { }
    close(): void { }
}
class PrintWriter {
    constructor(_writer: Writer) { }
    printStackTrace(_error: Error) { /* Mock implementation */ }
}

// Mock HexUtils
const HexUtils = {
    toHexString(_bytes: Uint8Array | number[], _offset: number, _endIndex: number, result: AString) {
        result.addStringSequence('<HEX>');
    }
};

// --- ENUMS ---

export enum Style { CLEAR, BRIGHT, DIM, ITALIC, UNDERSCORE, BLINK, UNKNOWN1, REVERSE, HIDDEN, UNKNOWN2, CROSSED }
export enum Color { BLACK = "30", RED = "31", GREEN = "32", ORANGE = "33", BLUE = "34", PURPLE = "35", CYAN = "36", WHITE = "37" }
export enum BackgroundColor { BLACK = "40", RED = "41", GREEN = "42", ORANGE = "43", BLUE = "44", PURPLE = "45", CYAN = "46", WHITE = "47" }
export enum Style2 { UNDERSCORE_DOUBLE = "21", BORDER = "51", BORDER2 = "52", UNDERSCORE2 = "53" }


// =============================================================================================
// AString INTERFACE (The public API for the text builder)
// =============================================================================================

export interface AString {
    // Char Sequence interface methods
    readonly length: number;
    charAt(index: number): char;
    subSequence(start: number, end: number): string;
    toString(): string;
    indexOf(searchString: string, position?: number): number;

    // Unified ADD methods with overloads
    /** Appends a string, char, number, boolean, or complex object, using a registered renderer. */
    add(val: string | char | number | boolean | Object): AString;
    add(val: ToString): AString;
    add(val: UUID): AString;
    add(val: Error): AString;
    add(val: byte_arr): AString;
    add(val: char_arr): AString;
    add(val: Object_arr): AString;
    add(val: Iterable<any>): AString;

    /** Appends a single character (primitive). */
    addChar(val: char): AString;

    // Helper/Low-level append methods
    /** Appends a string sequence directly. */
    addStringSequence(val: string): AString;
    addStringSequenceSub(val: string, offset: number, len: number): AString;
    addCharArraySub(val: char_arr, offset: number, len: number): AString;
    /** Appends the string "null". */
    addNull(): AString;

    // Utility methods
    /** Repeats the given value `count` times. */
    repeat(count: number, val: char | string | Object): AString;
    /** Returns a limiting wrapper around the current AString. */
    limit(count: number): AString;
    /** Appends `count` space characters (' '). */
    addSpace(count: number): AString;
    /** Calculates the number of visible symbols, ignoring ANSI escape codes. */
    calcVisibleSymbols(begin: number, end?: number): number;

    // Style/ANSI methods
    styleClear(): AString;
    styleForeground(mode: Style | null, red: number, green: number, blue: number): AString;
    styleBackground(mode: Style | null, red: number, green: number, blue: number): AString;
    color(color: Color): AString;
    style(mode: Style | null, color?: Color): AString;

    /** Gets a registered renderer for a specific class/constructor. */
    getLocalRenderer<T>(cl: (new (...args: any[]) => T) | T): ABiConsumer<T, AString>;
    /** Appends the stack trace of an Error. */
    addStackTrace(e: Error): AString;
    /** Returns a PrintWriter-like object that pipes output back to this AString. */
    toPrintWriter(): PrintWriter;
    /** Appends a message, replacing $variables with values from vars or a function. */
    addVars(msg: string, vars: any[] | AFunction<string, Object>): AString;
    /** Replaces all occurrences of `sample` char in `src` string with `s`. */
    replaceAll(src: string, sample: char, s: string): AString;
    /** Returns a limiting wrapper for byte array output. */
    limitByteArrays(max: number): AString;
    /** Converts the contents to a UTF-8 Uint8Array (byte array). */
    getBytes(): Uint8Array;
    /** Appends text with alignment and indentation control. */
    addWithAlign(width: number, firstIndent: number, indent: number, txt: string): AString;
}


// =============================================================================================
// ABSTRACT CLASS AStringBase (Base implementation)
// =============================================================================================

export abstract class AStringBase implements AString {
    // Abstract members
    abstract readonly length: number;
    abstract charAt(index: number): char;
    abstract subSequence(start: number, end: number): string;
    abstract toString(): string;
    abstract addStringSequence(val: string): AString;

    // --- Core Methods ---

    /** @inheritDoc */
    indexOf(searchString: string, position: number = 0): number {
        if (searchString == null) return -1;
        return this.toString().indexOf(searchString, position);
    }

    /** @inheritDoc */
    add(val: any): AString {
        const self = this as AString;

        if (val === null || val === undefined) return self.addNull();

        const type = typeof val;
        // 1. Primitives (String, Number, Boolean)
        if (type === 'string' || type === 'number' || type === 'boolean') {
            return self.addStringSequence(String(val));
        }

        // 2. Special Interfaces/Classes (ToString, Error, UUID, AtomicReference)
        // Check for ToString interface (method exists and takes one argument)
        if (typeof (val as ToString).toString === 'function' && (val as ToString).toString.length === 1) {
            return this._addToString(val as ToString);
        }
        if (val instanceof Error) {
            return this._addError(val);
        }
        if (val instanceof UUID) {
            return this._addUUID(val);
        }
        if (val instanceof AtomicReference) {
            return this._addAtomicReference(val);
        }

        // 3. Collections (Byte array, Object array, Iterable)
        if (val instanceof Uint8Array || (Array.isArray(val) && val.every(v => typeof v === 'number'))) {
            return this._addByteArray(val as byte_arr);
        }
        if (Array.isArray(val)) {
            return this._addObjectArray(val as Object_arr);
        }
        if (val[Symbol.iterator]) {
            return this._addIterable(val as Iterable<any>);
        }

        // 4. Fallback to Class Renderer
        const constructor = val.constructor;
        this.getLocalRenderer(constructor).call(null, val, self);
        return self;
    }

    // Internal helpers for add()
    private _addToString(val: ToString): AString {
        val.toString(this as AString);
        return this as AString;
    }
    private _addError(val: Error): AString {
        const self = this as AString;
        self.addStringSequence(val.constructor.name).add('(').addStringSequence(val.message || "").add(')');
        return self;
    }
    private _addUUID(val: UUID): AString {
        AStringBase.getRenderer(UUID).call(null, val, this as AString);
        return this as AString;
    }
    private _addAtomicReference(val: AtomicReference<any>): AString {
        const vv = val.get();
        if (vv !== undefined) this.add(vv);
        return this as AString;
    }
    private _addByteArray(val: byte_arr): AString {
        HexUtils.toHexString(val, 0, val.length, this as AString);
        return this as AString;
    }
    private _addObjectArray(val: Object_arr): AString {
        const self = this as AString;
        let first = true;
        for (const j of val) {
            if (first) {
                first = false;
            } else {
                self.addChar(',').addChar(' ');
            }
            self.add(j);
        }
        return self;
    }
    private _addIterable(val: Iterable<any>): AString {
        const self = this as AString;
        let first = true;
        for (const e of val) {
            if (first) first = false; else self.addChar(',');
            self.add(e);
        }
        return self;
    }

    /** @inheritDoc */
    addChar(val: char): AString {
        return this.addStringSequence(val);
    }

    /** @inheritDoc */
    addCharArraySub(val: char_arr, offset: number, len: number): AString {
        return this.addStringSequence(val.slice(offset, offset + len).join(''));
    }

    /** @inheritDoc */
    addStringSequenceSub(val: string, offset: number, len: number): AString {
        return this.addStringSequence(val.substring(offset, offset + len));
    }

    /** @inheritDoc */
    addNull(): AString {
        return this.addStringSequence("null");
    }

    // --- Utility Methods (Stubs) ---

    /** @inheritDoc */
    repeat(_count: number, _val: char | string | Object): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    limit(_count: number): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    addSpace(count: number): AString {
        if (count <= 0) return this as AString;
        for (let i = 0; i < count; i++) this.addChar(' ');
        return this as AString;
    }
    /** @inheritDoc */
    calcVisibleSymbols(_begin: number, _end: number = this.length): number { return 0; }
    /** @inheritDoc */
    styleClear(): AString { return this.addStringSequence("\u001B[0m"); }
    /** @inheritDoc */
    styleForeground(_mode: Style | null, _red: number, _green: number, _blue: number): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    styleBackground(_mode: Style | null, _red: number, _green: number, _blue: number): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    color(_color: Color): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    style(_mode: Style | null, _color?: Color): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    getLocalRenderer<T>(cl: (new (...args: any[]) => T) | T): ABiConsumer<T, AString> {
        return AStringBase.getRenderer(cl);
    }
    /** @inheritDoc */
    addStackTrace(_error: Error): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    toPrintWriter(): PrintWriter { throw new Error("Not implemented"); }
    /** @inheritDoc */
    addVars(_msg: string, _fOrVars: any[] | AFunction<string, Object>): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    replaceAll(_src: string, _sample: char, _s: string): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    limitByteArrays(_max: number): AString { throw new Error("Not implemented"); }
    /** @inheritDoc */
    getBytes(): Uint8Array { return new TextEncoder().encode(this.toString()); }
    /** @inheritDoc */
    addWithAlign(_width: number, _firstIndent: number, _indent: number, _txt: string): AString { throw new Error("Not implemented"); }


    // --- STATIC IMPLEMENTATIONS (Renderers and Factory Methods) ---

    private static renderers: Map<any, ABiConsumer<any, AString>> = new Map();
    public static DEFAULT_RENDERER: ABiConsumer<any, AString> = (v, s) => s.addStringSequence(String(v));
    private static DATE_FORMAT = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

    /** Registers a custom renderer for a class/constructor. */
    public static putRenderer<T>(cl: (new (...args: any[]) => T) | T, f: ABiConsumer<T, AString>): void {
        AStringBase.renderers.set(cl, f);
    }

    /** Retrieves the appropriate renderer for a given type, falling back to DEFAULT_RENDERER. */
    public static getRenderer<T>(type: (new (...args: any[]) => T) | T): ABiConsumer<T, AString> {
        if (type == null) return AStringBase.DEFAULT_RENDERER;

        let renderer = AStringBase.renderers.get(type);
        if (renderer) return renderer;

        // Logic for checking superclass/prototype chain
        if (typeof type === 'function') {
            const superclass = Object.getPrototypeOf(type.prototype.constructor);
            if (superclass && superclass !== Object) {
                renderer = AStringBase.getRenderer(superclass);
            }

            if (renderer === undefined || renderer === AStringBase.DEFAULT_RENDERER) {
                renderer = AStringBase.DEFAULT_RENDERER;
            }

            AStringBase.renderers.set(type, renderer);
            return renderer;
        }
        return AStringBase.DEFAULT_RENDERER;
    }

    /** Factory method to create an empty AString instance. */
    public static ofEmpty(): AString {
        return new Simple([]);
    }

    static {
        // Default renderers registration
        const putRenderer = AStringBase.putRenderer;

        putRenderer(UUID, (v: UUID, sb) => {
             HexUtils.toHexString(Array.from(v.data), 0, v.data.length, sb);
        });
        putRenderer(Date, (v, s) => s.addStringSequence(AStringBase.DATE_FORMAT.format(v as Date)));
        putRenderer(AtomicReference, (v, s) => {
            const vv = (v as AtomicReference<any>).get();
            if (vv !== undefined) s.add(vv);
        });
    }
}


// =============================================================================================
// CONCRETE IMPLEMENTATION: Simple (Internal to this module)
// =============================================================================================

class Simple extends AStringBase {
    private parts: string[];
    private _stringCache: string | null = null;

    constructor(parts: string[]) {
        super();
        this.parts = parts;
    }

    override get length(): number { return this.toString().length; }

    override toString(): string {
        if (this._stringCache === null) {
            this._stringCache = this.parts.join('');
        }
        return this._stringCache;
    }

    override addStringSequence(val: string): AString {
        if (val.length > 0) {
            this.parts.push(val);
            this._stringCache = null;
        }
        return this as AString;
    }

    override subSequence(start: number, end: number): string { return this.toString().substring(start, end); }
    override charAt(index: number): char { return this.toString().charAt(index); }
}
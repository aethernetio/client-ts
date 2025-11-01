// =============================================================================================
// FILE: aether_astring.ts
// PURPOSE: A powerful string builder implementation supporting type-specific renderers,
// ported from the AString.java implementation. (FIXED: Corrected TS overloads)
// =============================================================================================

import {
    AFunction,
    ABiConsumer,
    UUID,
    AtomicReference,
} from './aether_types';

/**
 * @file JSDoc mock for Java's java.text.DateFormat.
 */
const DATE_FORMAT = {
    /**
     * Formats a Date object.
     * @param {Date} v The date.
     * @returns {string} The formatted string.
     */
    format: (v: Date): string => {
        // "MM:dd:HH:mm:ss.SSSS"
        const p = (n: number, l = 2) => String(n).padStart(l, '0');
        return `${p(v.getMonth() + 1)}:${p(v.getDate())}:${p(v.getHours())}:${p(v.getMinutes())}:${p(v.getSeconds())}.${p(v.getMilliseconds(), 4)}`;
    }
};

/**
 * @file JSDoc mock for Java's java.io.Writer.
 */
class Writer {
    /**
     * Writes a portion of an array of characters.
     * @param {string} str The string buffer.
     * @param {number} off Offset from which to start writing characters.
     * @param {number} len Number of characters to write.
     */
    write(str: string, off: number, len: number): void {
        // Mock implementation, subclasses should override
    }
    /** Flushes the stream. */
    flush(): void {}
    /** Closes the stream. */
    close(): void {}
}

/**
 * @file JSDoc mock for Java's java.io.PrintWriter.
 */
class PrintWriter {
    /**
     * @param {Writer} writer The writer to delegate to.
     */
    constructor(private writer: Writer) {}

    /**
     * Prints the stack trace of an error.
     * @param {Error} e The error.
     */
    printStackTrace(e: Error): void {
        const stack = e.stack ?? `${e.name}: ${e.message}`;
        this.writer.write(stack, 0, stack.length);
    }
}

/**
 * @file JSDoc mock for Java's HexUtils.
 */
const HexUtils = {
    /**
     * Converts bytes to a hex string and appends to an AString.
     * @param {Uint8Array | number} val The value to convert.
     * @param {number | AString} offsetOrSb Start offset or the AString builder.
     * @param {number} [len] The length to read.
     * @param {AString} [sb] The AString builder.
     */
    toHexString: (val: Uint8Array | number, offsetOrSb?: number | AString, len?: number, sb?: AString) => {
        let aString: AString;
        let str: string;

        if (typeof val === 'number') {
            // This is the overload used by UUID: toHexString(long val, AString sb)
            aString = offsetOrSb as AString;
            // Simulate extracting the last byte
            str = (val & 0xFF).toString(16).padStart(2, '0');
        } else {
            // This is the overload for byte[]
            aString = (sb ?? offsetOrSb) as AString;
            const offset = (sb ? offsetOrSb : 0) as number;
            const end = offset + (len ?? val.length);
            const slice = val.slice(offset, end);
            str = Array.from(slice).map(b => b.toString(16).padStart(2, '0')).join('');
        }

        if (aString) {
            aString.add(str);
        }
    }
};

/**
 * @file JSDoc mock for Java's RU utility class.
 */
const RU = {
    /**
     * Casts a value to a given type. (Mock implementation)
     * @template T
     * @param {any} v The value to cast.
     * @returns {T} The casted value.
     */
    cast: <T>(v: any): T => v as T,
};

/**
 * @file JSDoc mock for Java's Objects.equals.
 */
const Objects = {
    /**
     * Checks if two values are equal.
     * @param {any} a The first value.
     * @param {any} b The second value.
     * @returns {boolean} True if equal.
     */
    equals: (a: any, b: any): boolean => a === b,
};

/**
 * @file JSDoc utility for checking Java identifier parts.
 */
const Character = {
    /**
     * Checks if a character is a valid part of a Java identifier.
     * @param {string} char The character to check.
     * @returns {boolean} True if it is.
     */
    isJavaIdentifierPart: (char: string): boolean => {
        return char.length === 1 && /[a-zA-Z0-9_$]/.test(char);
    }
};

// --- Enums Ported from AString.java ---

/**
 * ANSI SGR (Select Graphic Rendition) style codes.
 */
export enum Style {
    CLEAR, BRIGHT, DIM, ITALIC, UNDERSCORE, BLINK, UNKNOWN1, REVERSE, HIDDEN, UNKNOWN2, CROSSED,
}

/**
 * Basic 8-bit ANSI foreground colors.
 */
export enum Color {
    BLACK = "30", RED = "31", GREEN = "32", ORANGE = "33", BLUE = "34", PURPLE = "35", CYAN = "36", WHITE = "37",
}

/**
 * Basic 8-bit ANSI background colors.
 */
export enum BackgroundColor {
    BLACK = "40", RED = "41", GREEN = "42", ORANGE = "43", BLUE = "44", PURPLE = "45", CYAN = "46", WHITE = "47",
}

/**
 * Additional ANSI style codes.
 */
export enum Style2 {
    UNDERSCORE_DOUBLE = "21", BORDER = "51", BORDER2 = "52", UNDERSCORE2 = "53",
}

// --- AString Class ---

/**
 * A mutable sequence of characters, providing a powerful and fluent API
 * for string manipulation, formatting, and ANSI styling.
 *
 * This class merges the AString interface and the Simple implementation from Java.
 */
export class AString {

    /**
     * The internal parts of the string.
     * @private
     */
    private parts: string[] = [];
    /**
     * A cache for the .toString() result.
     * @private
     */
    private _stringCache: string | null = null;

    /**
     * Private constructor. Use AString.of() to create instances.
     */
    constructor() {
        // private
    }

    /**
     * Creates a new, empty AString instance.
     * @returns {AString} A new AString.
     */
    public static of(): AString {
        return new AString();
    }

    // --- CharSequence Implementation ---

    /**
     * Gets the current length of the string.
     * @returns {number} The length.
     */
    public get length(): number {
        return this.toString().length;
    }

    /**
     * Gets the character at the specified index.
     * @param {number} index The index.
     * @returns {string} The character (as a string).
     */
    public charAt(index: number): string {
        return this.toString().charAt(index);
    }

    /**
     * Returns a new string that is a subsequence of this sequence.
     * @param {number} start The start index, inclusive.
     * @param {number} end The end index, exclusive.
     * @returns {string} The subsequence.
     */
    public subSequence(start: number, end: number): string {
        return this.toString().substring(start, end);
    }

    /**
     * Returns the full string value.
     * @returns {string} The concatenated string.
     */
    public toString(): string {
        if (this._stringCache === null) {
            this._stringCache = this.parts.join('');
        }
        return this._stringCache;
    }

    // --- Core Add Methods (Overloads) ---

    /**
     * Appends a character sequence (string) or a single character.
     * @param {string} val The string or character to append.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: string): AString;
    /**
     * Appends a portion of a character sequence (string).
     * @param {string} val The string.
     * @param {number} offset The start offset.
     * @param {number} len The length.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: string, offset: number, len: number): AString;
    /**
     * Appends a character array (string array).
     * @param {string[]} val The character array.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: string[]): AString;
    /**
     * Appends a portion of a character array (string array).
     * @param {string[]} val The character array.
     * @param {number} offset The start offset.
     * @param {number} len The length.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: string[], offset: number, len: number): AString;
    /**
     * Appends a boolean value.
     * @param {boolean} val The value.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: boolean): AString;
    /**
     * Appends a number value.
     * @param {number} val The value.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: number): AString;
    /**
     * Appends a bigint value.
     * @param {bigint} val The value.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: bigint): AString;
    /**
     * Appends a byte array (Uint8Array) as hex.
     * @param {Uint8Array} val The byte array.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: Uint8Array): AString;
    /**
     * Appends an array of objects, joined by ", ".
     * @param {any[]} val The array.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: any[]): AString;
    /**
     * Appends an array of numbers, joined by ",".
     * @param {number[]} val The array.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: number[]): AString;
    /**
     * Appends an object that implements the ToString interface.
     * @param {ToString} val The object.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: ToString): AString;
    /**
     * Appends an iterable, joining elements with ",".
     * @param {Iterable<unknown>} val The iterable.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: Iterable<unknown>): AString;
    /**
     * Appends any value, using the registered renderer system.
     * This is the main dispatcher, ported from `add(Object val)`.
     * @param {unknown} val The value to append.
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: unknown): AString;

    /**
     * Appends a value to the string.
     * This is the single implementation for all 'add' overloads.
     * @param {unknown} val The value to add.
     * @param {number} [offset] Optional start index (for string/array).
     * @param {number} [len] Optional length (for string/array).
     * @returns {AString} This AString instance for chaining.
     */
    public add(val: unknown, offset?: number, len?: number): AString {

        // Handle add(val, offset, len) cases first
        if (offset !== undefined && len !== undefined) {
            if (typeof val === 'string') {
                // add(CharSequence val, int offset, int len)
                const sub = val.substring(offset, offset + len);
                if (sub) {
                    this.parts.push(sub);
                    this._stringCache = null;
                }
                return this;
            }
            if (Array.isArray(val) && val.every(item => typeof item === 'string')) {
                // add(char[] val, int offset, int len)
                const sub = val.slice(offset, offset + len).join('');
                if (sub) {
                    this.parts.push(sub);
                    this._stringCache = null;
                }
                return this;
            }
            // If offset/len are passed with an invalid type, ignore them and fall through
        }

        // --- Handle add(val) cases ---
        if (val == null) {
            return this.addNull();
        }

        const type = typeof val;

        // add(CharSequence val) / add(String val) / add(char val)
        if (type === 'string') {
            if (val) {
                this.parts.push(val as string);
                this._stringCache = null;
            }
            return this;
        }

        // add(int val), add(boolean val), add(bigint val)
        if (type === 'number' || type === 'boolean' || type === 'bigint') {
            const str = String(val);
            this.parts.push(str);
            this._stringCache = null;
            return this;
        }

        // --- Handle Objects ---

        // add(ToString val)
        // Check for our specific ToString interface (1 arg) vs. JS default (0 args)
        if (typeof (val as ToString).toString === 'function' && (val as ToString).toString.length === 1) {
             if (val.constructor !== String) {
                try {
                    (val as ToString).toString(this);
                    return this;
                } catch (e) {
                    // Fallback to default renderer
                }
             }
        }

        // add(byte[] val)
        if (val instanceof Uint8Array) {
            HexUtils.toHexString(val, 0, val.length, this);
            return this;
        }

        // add(Object[] val) / add(int[] val) / add(char[] val)
        if (Array.isArray(val)) {
            let first = true;
            let joiner = ", "; // Default for Object[]

            // Check for primitive arrays
            if (val.every(item => typeof item === 'number')) {
                 joiner = ","; // For int[], float[], etc.
            } else if (val.every(item => typeof item === 'string' && item.length === 1)) {
                // This is add(char[] val)
                const str = val.join('');
                if (str) {
                    this.parts.push(str);
                    this._stringCache = null;
                }
                return this;
            }

            if (val.length === 0) return this;

            for (const j of val) {
                if (first) first = false;
                else this.add(joiner); // Note: This is a recursive call to add(string)
                this.add(j); // Recursive call to handle each item
            }
            return this;
        }

        // add(Iterable<?> val)
        if (typeof (val as any)[Symbol.iterator] === 'function') {
             let first = true;
             for (const e of (val as Iterable<unknown>)) {
                if (first) first = false;
                else this.add(","); // Note: recursive call
                this.add(e); // Recursive call
             }
             return this;
        }

        // add(Object val) - Fallback to renderer system
        const ctor = (val as any).constructor;
        this.getLocalRenderer(ctor)(RU.cast(val), this);
        return this;
    }

    // --- Other Methods (from AString interface) ---

    /**
     * Returns a wrapper around this AString that limits output to a specific length.
     * @param {number} count The maximum number of characters to add.
     * @returns {AString} A new, limiting AString wrapper.
     */
    public limit(count: number): AString {
        return new AStringLimiter(this, count);
    }

    /**
     * Appends a number of space characters.
     * @param {number} count The number of spaces.
     * @returns {AString} This AString instance for chaining.
     */
    public addSpace(count: number): AString {
        if (count <= 0) return this;
        this.add(" ".repeat(count));
        return this;
    }

    /**
     * Repeats and appends a value multiple times.
     * @param {number} count The number of times to repeat.
     * @param {unknown} val The value to append (char, string, or object).
     * @returns {AString} This AString instance for chaining.
     */
    public repeat(count: number, val: unknown): AString {
        for (let i = 0; i < count; i++) {
            this.add(val);
        }
        return this;
    }

    /**
     * Calculates the number of visible symbols (ignoring ANSI codes).
     * @param {number} begin The start index.
     * @param {number} [end] The end index (defaults to current length).
     * @returns {number} The count of visible symbols.
     */
    public calcVisibleSymbols(begin: number, end?: number): number {
        const e = end ?? this.length;
        if (e > this.length) {
            throw new Error("End index out of bounds");
        }
        let i = 0;
        const s = this.toString(); // Work on the full string

        while (begin < e) {
            if (s.charAt(begin) === '\u001B') {
                while (begin < e && s.charAt(begin) !== 'm') begin++;
            } else {
                i++;
            }
            begin++;
        }
        return i;
    }

    /**
     * Appends the ANSI code to clear all styles.
     * @returns {AString} This AString instance for chaining.
     */
    public styleClear(): AString {
        return this.add("\u001B[0m");
    }

    /**
     * Appends ANSI codes for 24-bit RGB foreground color.
     * @param {Style | null} mode A style (e.g., BRIGHT) or null.
     * @param {number} red Red component (0-255).
     * @param {number} green Green component (0-255).
     * @param {number} blue Blue component (0-255).
     * @returns {AString} This AString instance for chaining.
     */
    public styleForeground(mode: Style | null, red: number, green: number, blue: number): AString {
        this.add("\u001B[");
        if (mode != null) {
            this.add(String(mode)).add(";");
        }
        this.add("38;2;").add(String(red)).add(";").add(String(green)).add(";").add(String(blue)).add("m");
        return this;
    }

    /**
     * Appends ANSI codes for 24-bit RGB background color.
     * @param {Style | null} mode A style (e.g., BRIGHT) or null.
     * @param {number} red Red component (0-255).
     * @param {number} green Green component (0-255).
     * @param {number} blue Blue component (0-255).
     * @returns {AString} This AString instance for chaining.
     */
    public styleBackground(mode: Style | null, red: number, green: number, blue: number): AString {
        this.add("\u001B[");
        if (mode != null) {
            this.add(String(mode)).add(";");
        }
        this.add("48;2;").add(String(red)).add(";").add(String(green)).add(";").add(String(blue)).add("m");
        return this;
    }

    /**
     * Appends an ANSI code for a basic color.
     * @param {Color} color The color enum.
     * @returns {AString} This AString instance for chaining.
     */
    public color(color: Color): AString {
        this.add("\u001B[").add(color).add("m");
        return this;
    }

    /**
     * Appends ANSI codes for style and basic color.
     * @param {Style | null} mode A style or null.
     * @param {Color} [color] An optional color.
     * @returns {AString} This AString instance for chaining.
     */
    public style(mode: Style | null, color?: Color): AString {
        if (color == null && mode != null) {
            return this.add("\u001B[").add(String(mode)).add("m");
        }
        this.add("\u001B[");
        if (mode != null) {
            this.add(String(mode)).add(";");
        }
        if (color) {
            this.add(color);
        }
        this.add("m");
        return this;
    }

    /**
     * Gets the renderer for a given class.
     * @template T
     * @param {any} cl The class constructor.
     * @returns {ABiConsumer<T, AString>} The renderer.
     */
    public getLocalRenderer<T>(cl: any): ABiConsumer<T, AString> {
        return AString.getRenderer(cl);
    }

    /**
     * Appends "null".
     * @returns {AString} This AString instance for chaining.
     */
    public addNull(): AString {
        this.add("null");
        return this;
    }

    /**
     * Appends the stack trace of an error.
     * @param {Error} e The error.
     * @returns {AString} This AString instance for chaining.
     */
    public addStackTrace(e: Error): AString {
        this.toPrintWriter().printStackTrace(e);
        return this;
    }

    /**
     * Finds the first index of a character sequence.
     * @param {string} c The sequence to find.
     * @param {number} [offset] The index to start searching from.
     * @returns {number} The index, or -1 if not found.
     */
    public indexOf(c: string, offset: number = 0): number {
        if (c == null) return -1;
        // Use native toString() and indexOf()
        return this.toString().indexOf(c, offset);
    }

    /**
     * Creates a PrintWriter that writes to this AString.
     * @returns {PrintWriter} The PrintWriter instance.
     */
    public toPrintWriter(): PrintWriter {
        const self = this;
        class AStringWriter extends Writer {
            write(str: string, off: number, len: number): void {
                self.add(str.substring(off, off + len));
            }
        }
        return new PrintWriter(new AStringWriter());
    }

    /**
     * Appends a message, replacing $variables with values from a key-value array.
     * @param {string} msg The message template.
     * @param {...unknown} vars Key-value pairs (e.g., "key1", val1, "key2", val2).
     * @returns {AString} This AString instance for chaining.
     */
    public addVars(msg: string, ...vars: unknown[]): AString;
    /**
     * Appends a message, replacing $variables with values from a lookup function.
     * @param {string} msg The message template.
     * @param {AFunction<string, unknown>} f A lookup function.
     * @returns {AString} This AString instance for chaining.
     */
    public addVars(msg: string, f: AFunction<string, unknown>): AString;
    /**
     * Implementation for addVars.
     */
    public addVars(msg: string, fOrVars: AFunction<string, unknown> | unknown, ...restVars: unknown[]): AString {
        let f: AFunction<string, unknown>;

        if (typeof fOrVars === 'function' && restVars.length === 0) {
            f = fOrVars as AFunction<string, unknown>;
        } else {
            const vars = [fOrVars, ...restVars];
            f = (v: string) => {
                for (let i = 0; i < vars.length; i += 2) {
                    if (Objects.equals(vars[i], v)) {
                        return vars[i + 1];
                    }
                }
                return null;
            };
        }

        let vi = msg.indexOf('$');
        if (vi === -1) {
            this.add(msg);
            return this;
        }

        let start = 0;
        while (true) {
            let vEnd = vi + 1;
            this.add(msg.substring(start, vi)); // Add text before '$'

            while (vEnd < msg.length && Character.isJavaIdentifierPart(msg.charAt(vEnd))) {
                vEnd++;
            }

            const key = msg.substring(vi + 1, vEnd);
            const v = f(key);

            if (v != null) {
                try {
                    this.add(v);
                } catch (e) {
                    try {
                        this.add("[[error]]: ").add(String(v));
                    } catch (e2) {
                        this.add("[[error]]");
                    }
                }
            }

            start = vEnd;
            let nextVi = msg.indexOf('$', start);
            if (nextVi === -1) {
                break;
            }
            vi = nextVi;
        }

        const l = msg.length - start;
        if (l > 0) this.add(msg.substring(start, start + l));
        return this;
    }

    /**
     * Replaces all occurrences of a character in a source string and appends the result.
     * @param {string} src The source string.
     * @param {string} sample The character to replace (must be length 1).
     * @param {string} s The replacement string.
     * @returns {AString} This AString instance for chaining.
     */
    public replaceAll(src: string, sample: string, s: string): AString {
        if (sample.length !== 1) {
            throw new Error("Sample must be a single character");
        }
        // Use native replaceAll
        this.add(src.replaceAll(sample, s));
        return this;
    }

    /**
     * Returns a wrapper that limits the size of byte arrays when printed.
     * @param {number} max The maximum number of bytes to print.
     * @returns {AString} A new, limiting AString wrapper.
     */
    public limitByteArrays(max: number): AString {
        return new LimitByteArrays(this, max);
    }

    /**
     * Gets the full string content as a UTF-8 byte array.
     * @returns {Uint8Array} The byte array.
     */
    public getBytes(): Uint8Array {
        return new TextEncoder().encode(this.toString());
    }

    /**
     * Appends text with alignment and indentation.
     * @param {number} width The total line width.
     * @param {number} firstIndent Indentation for the first line.
     * @param {number} indent Indentation for subsequent lines.
     * @param {string} txt The text to add.
     * @returns {AString} This AString instance for chaining.
     */
    public addWithAlign(width: number, firstIndent: number, indent: number, txt: string): AString {
        const text = txt.split(" ");
        let i = 0;
        let line = 0;

        // Corrected logic for first line indent
        this.addSpace(firstIndent);
        line += firstIndent;

        while (i < text.length) {
            const word = text[i];
            const wordLen = word.length;

            // Check if word fits on the current line
            // We need a space if we are not at the very beginning of a line
            const needsSpace = (line > indent) || (line > firstIndent && i > 0);
            const space = needsSpace ? 1 : 0;

            if (line === indent || (line === firstIndent && i === 0) || (line + space + wordLen <= width)) {
                if (needsSpace) {
                    this.add(" ");
                    line += 1;
                }
                this.add(word);
                line += wordLen;
            } else {
                // New line
                line = 0;
                this.add("\n");
                this.addSpace(indent);
                line += indent;
                this.add(word); // Add the word that didn't fit
                line += wordLen;
            }
            i++;
        }
        this.add("\n");
        return this;
    }

    // --- Static Renderer System ---

    /**
     * The default renderer, converts any value to a string.
     * @type {ABiConsumer<any, AString>}
     */
    public static DEFAULT_RENDERER: ABiConsumer<any, AString> = (v, s) => s.add(String(v));

    /**
     * The central map of type constructors to their rendering functions.
     * @type {Map<any, ABiConsumer<any, AString>>}
     * @private
     */
    private static renderers = new Map<any, ABiConsumer<any, AString>>();

    /**
     * Registers a renderer for a specific class/constructor.
     * @template T
     * @param {any} cl The class constructor (e.g., Date, MyClass).
     * @param {ABiConsumer<T, AString>} f The rendering function.
     */
    public static putRenderer<T>(cl: any, f: ABiConsumer<T, AString>): void {
        AString.renderers.set(cl, f as ABiConsumer<any, AString>);
    }

    /**
     * Alias for putRenderer.
     * @template T
     * @param {any} type The class constructor.
     * @param {ABiConsumer<T, AString>} renderer The rendering function.
     */
    public static addRenderer<T>(type: any, renderer: ABiConsumer<T, AString>): void {
        AString.renderers.set(type, renderer as ABiConsumer<any, AString>);
    }

    /**
     * Retrieves the renderer for a given type, traversing prototypes.
     * @template T
     * @param {any} type The class constructor.
     * @returns {ABiConsumer<T, AString>} The found renderer or the default renderer.
     */
    public static getRenderer<T>(type: any): ABiConsumer<T, AString> {
        if (type == null) {
            return RU.cast(AString.DEFAULT_RENDERER);
        }

        let renderer = AString.renderers.get(type);
        if (renderer != null) {
            return RU.cast(renderer);
        }

        // In JS, arrays don't have a distinct class like `Object[]`
        if (type === Array) {
             renderer = (v, s) => s.add(v as any[]);
        } else {
            // Traverse prototype chain
            let currentProto = Object.getPrototypeOf(type.prototype);
            while (currentProto && currentProto.constructor !== Object) {
                renderer = AString.renderers.get(currentProto.constructor);
                if (renderer) break;
                currentProto = Object.getPrototypeOf(currentProto);
            }

            if (!renderer) {
                 renderer = AString.DEFAULT_RENDERER;
            }
        }

        AString.renderers.set(type, renderer);
        return RU.cast(renderer);
    }

    /**
     * Static initializer block to register default renderers.
     */
    static {
        const put = AString.putRenderer;

        // Primitives and basic types
        put<String>(String, (v, s) => s.add(v));
        put<Number>(Number, (v, s) => s.add(String(v)));
        put<Boolean>(Boolean, (v, s) => s.add(String(v)));
        put<BigInt>(BigInt, (v, s) => s.add(String(v)));
        put<Date>(Date, (v, s) => s.add(DATE_FORMAT.format(v)));

        // Arrays
        put<Uint8Array>(Uint8Array, (v, s) => s.add(v));
        put<Array<any>>(Array, (v, s) => s.add(v as any[])); // Handles Object[]

        // Special classes
        put<Error>(Error, (v, s) => {
            s.add(v.name).add("(");
            if (v.message) {
                s.add(v.message);
            }
            s.add(")");
        });

        // Mock for SoftReference -> WeakRef
        if (typeof WeakRef !== 'undefined') {
            put<WeakRef<any>>(WeakRef, (v, s) => {
                 const vv = v.deref();
                 s.add(vv);
            });
        }

        // Handle AtomicReference
        put<AtomicReference<any>>(AtomicReference, (v, s) => {
             const vv = v.get();
             s.add(vv);
        });

    }
}

export interface ToString {
    toString(s: AString):AString;
}
// --- Internal Wrapper Classes ---

/**
 * An AString wrapper that limits the total number of characters that can be added.
 * Ported from `AString.limit()` inner class.
 * @extends AString
 */
class AStringLimiter extends AString {
    private limit0: number;
    private end: boolean = false;

    /**
     * @param {AString} self The AString to wrap.
     * @param {number} count The character limit.
     */
    constructor(private self: AString, count: number) {
        super();
        this.limit0 = count - 3; // Reserve space for "..."
    }

    /**
     * Appends "..." if the limit has been reached.
     * @private
     */
    private checkEnd(): void {
        if (this.end) return;
        this.self.add("...");
        this.end = true;
    }

    /** {@inheritDoc} */
    public toString(): string {
        return this.self.toString();
    }

    /** {@inheritDoc} */
    public get length(): number {
         return this.self.length;
    }

    /** {@inheritDoc} */
    public charAt(index: number): string {
         return this.self.charAt(index);
    }

    /** {@inheritDoc} */
    public subSequence(start: number, end: number): string {
         return this.self.subSequence(start, end);
    }

    // --- Overridden add ---

    /**
     * Overridden 'add' implementation that respects the limit.
     */
    public add(val: unknown, offset?: number, len?: number): AString {
        if (this.limit0 <= 0) {
            this.checkEnd();
            return this;
        }

        // We need to capture the string representation to measure its length.
        // Create a temporary AString to render the value.
        const tempAString = AString.of();

        // Handle the original call in the temp string
        if (offset !== undefined && len !== undefined) {
             // @ts-ignore
             tempAString.add(val, offset, len);
        } else {
             // @ts-ignore
             tempAString.add(val);
        }

        const strVal = tempAString.toString();
        const valLen = strVal.length;
        if (valLen === 0) return this;

        if (valLen <= this.limit0) {
            this.limit0 -= valLen;
            this.self.add(strVal); // Add the rendered string
        } else {
            this.self.add(strVal.substring(0, this.limit0));
            this.limit0 = 0;
            this.checkEnd();
        }
        return this;
    }
}


/**
 * An AString wrapper that intercepts `add(Uint8Array)` calls to limit their output.
 * Ported from `LimitByteArrays` inner class.
 * @extends AString
 */
class LimitByteArrays extends AString {
    private cycleCounter: number = 0;

    /**
     * @param {AString} self The AString to wrap.
     * @param {number} max The max bytes to print from a byte array.
     */
    constructor(private self: AString, private max: number) {
        super();
    }

    // --- Pass-through methods ---

    /** {@inheritDoc} */
    public toString(): string { return this.self.toString(); }
    /** {@inheritDoc} */
    public get length(): number { return this.self.length; }
    /** {@inheritDoc} */
    public charAt(index: number): string { return this.self.charAt(index); }
    /** {@inheritDoc} */
    public subSequence(start: number, end: number): string { return this.self.subSequence(start, end); }

    // --- Overridden add ---

    /**
     * Overridden 'add' implementation that intercepts byte arrays.
     */
    public add(val: unknown, offset?: number, len?: number): AString {
        this.cycleCounter++;
        if (this.cycleCounter > 10) {
            throw new Error("AString cycle detected");
        }

        try {
            // Handle offset/len calls
            if (offset !== undefined && len !== undefined) {
                 // @ts-ignore
                this.self.add(val, offset, len);
                return this;
            }

            if (val instanceof Uint8Array) {
                // This is the intercepted call
                if (val == null) return this;
                const l = Math.min(val.length, this.max);
                HexUtils.toHexString(val, 0, l, this.self); // Add to underlying string
                if (l !== val.length) {
                    this.self.add("...");
                }
                return this;
            }

            // Delegate all other types to the wrapped instance's add(Object)
            this.self.add(val);
            return this;

        } finally {
            this.cycleCounter--;
        }
    }
}
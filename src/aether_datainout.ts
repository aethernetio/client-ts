// =============================================================================================
// FILE: aether.datainout.ts
// PURPOSE: Contains Data I/O interfaces and implementation (DataInOutImpl).
// DEPENDENCIES: aether.types.ts, aether.utils.ts (for HexUtils, RU)
// =============================================================================================

import { Uint8Array } from './aether_types';
import { HexUtils, RU } from './aether_utils';

// Helper types for write operations (minimal structure for DTO types)
/** Minimal interface representing Java's DataInOut class for write operations. */
type DataInOutJava = { data: Uint8Array, readPos: number, writePos: number, getSizeForRead: () => number, clear: () => void };
/** Minimal interface representing Java's DataInOutStatic class for write operations. */
type DataInOutStaticJava = { data: Uint8Array, readPos: number, writePos: number, getSizeForRead: () => number, clear: () => void };


// =============================================================================================
// SECTION 6: DATA I/O INTERFACES AND IMPLEMENTATION (Little Endian)
// =============================================================================================

// --- DataIn Interface (All method names made unique to avoid TS overload conflicts) ---
export interface DataIn {
    /** Returns the size of the data that can be read from this input stream, in bytes. */
    getSizeForRead(): number;
    /** Returns true if this input stream is readable, false otherwise. */
    isReadable(): boolean;
    /** Returns true if this input stream is empty, false otherwise. */
    isEmpty(): boolean;

    // Read methods (Now with unique names)
    read(b: Uint8Array, offset: number, len: number): number; // 3-arg, Uint8Array (Core abstraction)
    read(b: number[], offset: number, len: number): number; // 3-arg, number[]
    read(b: Uint8Array): number; // 1-arg, Uint8Array
    read(b: number[]): number; // 1-arg, number[]

    // Primitive read methods
    readByte(): number;
    readUByte(): number;
    readShort(): number;
    readUShort(): number;
    readInt(): number;
    readUInt(): number;
    readLong(): number;
    readFloat(): number;
    readDouble(): number;
    readChar(): string;
    readBoolean(): boolean;
    readString1(): string;
    readSubData(length: number): DataIO;
    readBytes(len: number): Uint8Array;

    // Utility methods
    skipBytes(n: number): void;
    skipAllBytes(): void;
    indexOf(limit: number, val: number): number;
    toArray(): Uint8Array;
}


// --- DataOut Interface (All method names made unique to avoid TS overload conflicts) ---
export interface DataOut {
    /** Returns whether this output stream is writable or not. */
    isWritable(): boolean;
    /** Returns the size of this output stream for writing, in bytes. */
    getSizeForWrite(): number;
    /** Clears this output stream. */
    clear(): void;

    // Write methods (All 7 signatures)
    write(b: Uint8Array): void; // 1-arg, Uint8Array
    write(b: number[]): void; // 1-arg, number[]
    write(b: Uint8Array, off: number, len: number): number; // 3-arg, Uint8Array (Core abstraction)
    write(b: number[], off: number, len: number): number; // 3-arg, number[]
    write(data: DataIn): void; // write(DataIn)
    write(data: DataInOutJava): void; // write(DataInOutJava)
    write(data: DataInOutStaticJava): void; // write(DataInOutStaticJava)

    // Primitive write methods
    writeByte(v: number): void;
    writeBoolean(v: boolean): void;
    writeShort(v: number): void;
    writeChar(v: string): void;
    writeInt(v: number): void;
    writeLong(v: number): void;
    writeFloat(v: number): void;
    writeDouble(v: number): void;
    writeHexBytes(hex: string): void;
}


// --- DataIO Interface ---
export interface DataIO extends DataIn, DataOut { }


// --- DataInOut Related Interfaces ---
export interface DataInOut extends DataIO {
    data: Uint8Array;
    writePos: number;
    readPos: number;
    toArrayCopy(): Uint8Array;
    getData(): Uint8Array;
    setData(data: Uint8Array): void;
    checkSize(size: number): void;
    getWritePos(): number;
    setWritePos(writePos: number): void;
    getReadPos(): number;
    setReadPos(readPos: number): void;
}
export interface DataInOutStatic extends DataIO {
    readonly data: Uint8Array;
    writePos: number;
    readPos: number;
    total(): number;
    getWritePos(): number;
    setWritePos(writePos: number): void;
    getReadPos(): number;
    setReadPos(readPos: number): void;
}


// --- Implementation Helpers ---
const DataIO_Utils = {
    /** Reads N bytes in Little Endian format, calling readUByte0 for each byte. */
    readLE(readUByte0: () => number, numBytes: number, isLong: boolean): number {
        let res = 0;
        if (isLong) {
            for (let i = 0; i < numBytes; i++) {
                res += readUByte0() * Math.pow(2, 8 * i);
            }
        } else {
            for (let i = 0; i < numBytes; i++) {
                res = res | (readUByte0() << (8 * i));
            }
        }
        return res;
    },
};


// --- DataIOBase Abstract Class (Core implementation delegating to unique internal names) ---

abstract class DataIOBase implements DataIO {
    // --- Core Abstract Methods (Minimal set required by the lowest level implementations) ---
    abstract getSizeForRead(): number;
    abstract readUByte(): number;
    abstract writeByte(v: number): void;
    abstract clear(): void;
    abstract indexOf(limit: number, val: number): number;
    abstract isWritable(): boolean;
    abstract getSizeForWrite(): number;
    abstract skipBytes(n: number): void;
    abstract toArray(): Uint8Array;

    // Primary internal implementation methods (Uniquely named to avoid conflicts with overloads)
    /** Core abstract method to read bytes into a buffer with offset/length. */
    abstract _readCore(b: Uint8Array, offset: number, len: number): number;
    /** Core abstract method to write bytes from a buffer with offset/length. */
    abstract _writeCore(b: Uint8Array, off: number, len: number): number;


    // --- DataIn Implementations (All 5 signatures implemented) ---

    /** Implements read(b: Uint8Array, offset: number, len: number) */
    read(b: Uint8Array, offset: number, len: number): number;
    /** Implements read(b: number[], offset: number, len: number) */
    read(b: number[], offset: number, len: number): number;
    /** Implements read(b: Uint8Array) */
    read(b: Uint8Array): number;
    /** Implements read(b: number[]) */
    read(b: number[]): number;
    /** General implementation method for all read overloads. */
    read(b: Uint8Array | number[], offset?: number, len?: number): number {
        if (offset === undefined) {
            // Case: read(b: Uint8Array) or read(b: number[])
            const buf = b instanceof Uint8Array ? b : new Uint8Array(b as number[]);
            return this._readCore(buf, 0, buf.length);
        }

        if (b instanceof Uint8Array) {
            // Case: read(b: Uint8Array, offset: number, len: number)
            return this._readCore(b, offset, len);
        } else {
            // Case: read(b: number[], offset: number, len: number)
            let elementsRead = 0;
            const targetLen = Math.min(len, b.length - offset);
            for (let i = offset; i < offset + targetLen; i++) {
                 if (this.getSizeForRead() < 4) return elementsRead;
                 b[i] = this.readInt();
                 elementsRead++;
            }
            return elementsRead;
        }
    }


    isEmpty(): boolean { return this.getSizeForRead() === 0; }
    isReadable(): boolean { return this.getSizeForRead() !== 0; }
    skipAllBytes(): void { this.skipBytes(this.getSizeForRead()); }

    // Primitive read implementations
    readBoolean(): boolean { return this.readUByte() !== 0; }
    readByte(): number {
        const ubyte = this.readUByte();
        return ubyte > 127 ? ubyte - 256 : ubyte;
    }
    readUShort(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 2, false) & 0xFFFF; }
    readShort(): number { return this.readUShort(); }
    readInt(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 4, false) | 0; }
    readUInt(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 4, true); }
    readLong(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 8, true); }
    readChar(): string { return String.fromCharCode(this.readUByte()); }
    readFloat(): number { return (new DataView(this.readBytes(4).buffer)).getFloat32(0, true); }
    readDouble(): number { return (new DataView(this.readBytes(8).buffer)).getFloat64(0, true); }
    readString1(): string {
        const len = this.readUByte();
        const data = this.readBytes(len);
        return new TextDecoder("latin1").decode(data);
    }
    readSubData(length: number): DataIO {
        const res = new DataInOutStaticImpl(length);
        this.read(res.data, 0, length);
        res.setWritePos(length);
        return res;
    }
    readBytes(len: number): Uint8Array {
        const res = new Uint8Array(len);
        this._readCore(res, 0, len);
        return res;
    }


    // --- DataOut Implementations (All 7 signatures implemented) ---

    /** Implements write(b: Uint8Array, off: number, len: number) */
    write(b: Uint8Array, off: number, len: number): number;
    /** Implements write(b: number[], off: number, len: number) */
    write(b: number[], off: number, len: number): number;
    /** Implements write(b: Uint8Array) */
    write(b: Uint8Array): void;
    /** Implements write(b: number[]) */
    write(b: number[]): void;
    /** Implements write(data: DataIn) */
    write(data: DataIn): void;
    /** Implements write(data: DataInOutJava) */
    write(data: DataInOutJava): void;
    /** Implements write(data: DataInOutStaticJava) */
    write(data: DataInOutStaticJava): void;
    /** General implementation method for all write overloads. */
    write(b: Uint8Array | number[] | DataIn | DataInOutJava | DataInOutStaticJava, off?: number, len?: number): number | void {
        if (off !== undefined) {
            // Case: write(b, off, len) for Uint8Array or number[]
            const targetLen = len as number;
            if (b instanceof Uint8Array) {
                return this._writeCore(b, off, targetLen); // Delegate to core write
            } else {
                const buf = new Uint8Array((b as number[]).slice(off, off + targetLen));
                return this._writeCore(buf, 0, buf.length);
            }
        }

        // Case: write(b) or write(data)
        if (b instanceof Uint8Array || b instanceof Array) {
            // Case: write(b: Uint8Array) or write(b: number[])
            const buf = b instanceof Uint8Array ? b : new Uint8Array(b as number[]);
            const r = this._writeCore(buf, 0, buf.length);
            if (r !== buf.length) { throw new Error("Assertion failed: Failed to write all bytes"); }
            return;
        }

        if ('getSizeForRead' in b) {
             // Case: write(data: DataInOut/DataInOutStatic)
             const dataIn = b as DataIn & DataInOutJava;
             const size = dataIn.getSizeForRead();
             const bytesWritten = this._writeCore(dataIn.data, dataIn.readPos, size);
             if (bytesWritten !== size) { throw new Error("Assertion failed: Failed to write all data"); }
             dataIn.clear();
             return;
        }

        // Case: write(DataIn)
        this.write((b as DataIn).toArray());
        return;
    }


    writeBoolean(v: boolean): void { this.writeByte(v ? 1 : 0); }
    writeShort(v: number): void {
        this.writeByte((v) & 0xFF);
        this.writeByte((v >>> 8) & 0xFF);
    }
    writeChar(v: string): void { this.writeByte(v.charCodeAt(0)); }
    writeInt(v: number): void {
        this.writeShort(v & 0xFFFF);
        this.writeShort(v >>> 16);
    }
    writeLong(v: number): void {
        this.writeInt(v & 0xFFFFFFFF);
        this.writeInt(Math.floor(v / 4294967296));
    }
    writeFloat(v: number): void {
        const buffer = new ArrayBuffer(4); (new DataView(buffer)).setFloat32(0, v, true);
        this.write(new Uint8Array(buffer), 0, 4);
    }
    writeDouble(v: number): void {
        const buffer = new ArrayBuffer(8); (new DataView(buffer)).setFloat64(0, v, true);
        this.write(new Uint8Array(buffer), 0, 8);
    }
    writeHexBytes(hex: string): void { this.write(HexUtils.hexToBytes(hex)); }
}


// --- DataInOutStatic Implementation (Fixed-size buffer) ---

export class DataInOutStaticImpl extends DataIOBase implements DataInOutStatic {
    public readonly data: Uint8Array;
    public writePos: number = 0;
    public readPos: number = 0;

    constructor(ar: Uint8Array | number, readPos: number = 0, writePos?: number) {
        super();
        if (typeof ar === 'number') {
            this.data = new Uint8Array(ar);
        } else {
            this.data = ar;
        }
        this.readPos = readPos;
        this.writePos = writePos !== undefined ? writePos : this.data.length;
        if (this.writePos > this.data.length) throw new Error("Assertion failed: writePos > data.length");
    }

    // --- Core Abstract Implementations (Implements logic for _readCore, _writeCore) ---
    override _readCore(b: Uint8Array, offset: number, len: number): number {
        const available = this.getSizeForRead();
        const l = Math.min(len, available);
        if (l > 0) {
            b.set(this.data.subarray(this.readPos, this.readPos + l), offset);
            this.readPos += l;
        }
        return l;
    }
    override _writeCore(b: Uint8Array, off: number, len: number): number {
        const l = Math.min(len, (this.data.length - this.writePos));
        if (l < len) throw new Error("IllegalStateException: Not enough space to write all bytes (DataInOutStatic)");

        this.data.set(b.subarray(off, off + l), this.writePos);
        this.writePos += l;
        return l;
    }
    override readUByte(): number {
        if (this.readPos >= this.writePos) { throw new Error(`IllegalStateException: Read position [${this.readPos}] > write position [${this.writePos}]`); }
        return this.data[this.readPos++];
    }
    override writeByte(v: number): void {
        if (this.writePos >= this.data.length) { throw new Error("IllegalStateException: Buffer overflow (DataInOutStatic)"); }
        this.data[this.writePos++] = v & 0xFF;
    }
    override toArray(): Uint8Array {
        if (this.readPos === 0 && this.writePos === this.data.length) return this.data;
        const r = this.data.subarray(this.readPos, this.writePos);
        this.clear();
        return r;
    }
    override indexOf(limit: number, val: number): number {
        const searchLimit = Math.min(this.writePos, limit);
        for (let i = this.readPos; i < searchLimit; i++) {
            if (this.data[i] === val) return i;
        }
        return -1;
    }
    override skipBytes(n: number): void {
        this.readPos += n;
        if (this.data.length < this.readPos) { throw new Error(`IllegalStateException: data.length(${this.data.length}) < readPos(${this.readPos})`); }
    }
    override clear(): void { this.writePos = 0; this.readPos = 0; }
    override getSizeForRead(): number { return this.writePos - this.readPos; }
    override isWritable(): boolean { return this.writePos < this.data.length; }
    override getSizeForWrite(): number { return this.data.length - this.writePos; }

    // --- DataInOutStatic specific methods ---
    total(): number { return this.data.length; }
    getWritePos(): number { return this.writePos; }
    setWritePos(writePos: number): void {
        if (writePos > this.data.length) throw new Error("Assertion failed: writePos > data.length");
        this.writePos = writePos;
    }
    getReadPos(): number { return this.readPos; }
    setReadPos(readPos: number): void { this.readPos = readPos; }
}


// --- DataInOut Implementation (Dynamically sized buffer) ---

export class DataInOutImpl extends DataIOBase implements DataInOut {
    public data: Uint8Array;
    public writePos: number = 0;
    public readPos: number = 0;

    constructor(data?: Uint8Array, len?: number) {
        super();
        if (data) {
            this.data = data;
            this.writePos = len !== undefined ? len : data.length;
        } else {
            this.data = new Uint8Array(100);
            this.writePos = 0;
        }
    }

    // Helper to get raw byte (used internally by readInt/readLong)
    private readUByte0(): number {
        if (this.readPos >= this.writePos) { throw new Error("Underflow on read"); }
        return this.data[this.readPos++];
    }

    // Helper from DataInOut.java
    private trim(): void {
        if (this.writePos === this.readPos) {
            this.writePos = 0;
            this.readPos = 0;
        }
    }

    // Overridden primitive reads using trim() (from DataInOut.java)
    override readInt(): number {
        if (this.readPos + 4 > this.writePos) throw new Error("Underflow on readInt");
        const readUByte0 = this.readUByte0.bind(this);
        const res = DataIO_Utils.readLE(readUByte0, 4, false) | 0;
        this.trim();
        return res;
    }
    override readLong(): number {
        if (this.readPos + 8 > this.writePos) throw new Error("Underflow on readLong");
        const readUByte0 = this.readUByte0.bind(this);
        const res = DataIO_Utils.readLE(readUByte0, 8, true);
        this.trim();
        return res;
    }
    override readUShort(): number {
        if (this.readPos + 2 > this.writePos) throw new Error("Underflow on readUShort");
        const readUByte0 = this.readUByte0.bind(this);
        const res = DataIO_Utils.readLE(readUByte0, 2, false) & 0xFFFF;
        this.trim();
        return res;
    }
    override readUByte(): number {
        if (this.readPos >= this.writePos) { throw new Error("Underflow"); }
        const res = this.readUByte0();
        this.trim();
        return res;
    }

    // --- Core Abstract Implementations (Implements logic for _readCore, _writeCore) ---
    override _readCore(b: Uint8Array, offset: number, len: number): number {
        const available = this.getSizeForRead();
        const l = Math.min(len, available);
        if (l > 0) {
            b.set(this.data.subarray(this.readPos, this.readPos + l), offset);
            this.readPos += l;
        }
        this.trim();
        return l;
    }
    override _writeCore(b: Uint8Array, off: number, len: number): number {
        this.checkSize(len);
        this.data.set(b.subarray(off, off + len), this.writePos);
        this.writePos += len;
        return len;
    }
    override writeByte(v: number): void {
        this.checkSize(1);
        this.data[this.writePos++] = (v) & 0xFF;
    }
    override toArray(): Uint8Array {
        const sizeForRead = this.getSizeForRead();
        if (this.data.length === sizeForRead) {
            const d = this.data;
            this.data = new Uint8Array(d.length);
            this.clear();
            return d;
        } else {
            const r = this.toArrayCopy();
            this.clear();
            return r;
        }
    }
    override indexOf(limit: number, val: number): number {
        const searchLimit = Math.min(this.writePos, limit);
        for (let i = this.readPos; i < searchLimit; i++) {
            if (this.data[i] === val) return i;
        }
        return -1;
    }
    override skipBytes(n: number): void {
        this.readPos += n;
        if (this.readPos > this.writePos) { throw new Error("Underflow on skip"); }
        this.trim();
    }
    override clear(): void { this.writePos = 0; this.readPos = 0; }
    override getSizeForRead(): number { return this.writePos - this.readPos; }
    override isWritable(): boolean { return this.data.length - this.writePos > 0; }
    override getSizeForWrite(): number { return this.data.length - this.writePos; }

    // --- DataInOut specific methods ---
    toArrayCopy(): Uint8Array { return this.data.subarray(this.readPos, this.writePos); }
    getData(): Uint8Array { return this.data; }
    setData(data: Uint8Array): void { this.data = data; this.writePos = data.length; this.readPos = 0; }
    getWritePos(): number { return this.writePos; }
    setWritePos(writePos: number): void { this.writePos = writePos; }
    getReadPos(): number { return this.readPos; }
    setReadPos(readPos: number): void { this.readPos = readPos; }

    checkSize(size: number): void {
        if (this.data.length - this.writePos < size) {
            const newSize = Math.max(this.data.length * 2, Math.ceil((this.writePos + size) * 1.3));
            const newData = new Uint8Array(newSize);
            newData.set(this.data.subarray(0, this.writePos));
            this.data = newData;
        }
    }
}
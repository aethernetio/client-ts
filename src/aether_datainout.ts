// =============================================================================================
// FILE: aether_datainout.ts
// PURPOSE: Contains Data I/O interfaces and implementation (DataInOut, DataInOutStatic).
// DEPENDENCIES: aether_types.ts, aether_utils.ts (for HexUtils)
// (ИСПРАВЛЕННАЯ ВЕРСИЯ - Refactored: Merged Impl classes with interfaces, fixed exports)
// (ВЕРСИЯ 2: Обновлена поддержка 64-bit Long -> readLong() : bigint, writeLong(v: number | bigint))
// =============================================================================================

import { Uint8Array } from './aether_types';
import { HexUtils } from './aether_utils';

// Helper types for write operations (minimal structure for DTO types) - Kept for compatibility if needed elsewhere
/** Minimal interface representing Java's DataInOut class for write operations. */
type DataInOutJava = { data: Uint8Array, readPos: number, writePos: number, getSizeForRead: () => number, clear: () => void };
/** Minimal interface representing Java's DataInOutStatic class for write operations. */
type DataInOutStaticJava = { data: Uint8Array, readPos: number, writePos: number, getSizeForRead: () => number, clear: () => void };


// =============================================================================================
// SECTION 6: DATA I/O INTERFACES AND IMPLEMENTATION (Little Endian)
// =============================================================================================

// --- DataIn Interface ---
export interface DataIn {
    /** Returns the size of the data that can be read from this input stream, in bytes. */
    getSizeForRead(): number;
    /** Returns true if this input stream is readable, false otherwise. */
    isReadable(): boolean;
    /** Returns true if this input stream is empty, false otherwise. */
    isEmpty(): boolean;

    // Read methods
    read(b: Uint8Array, offset: number, len: number): number;
    read(b: number[], offset: number, len: number): number;
    read(b: Uint8Array): number;
    read(b: number[]): number;

    // Primitive read methods
    readByte(): number;
    readUByte(): number;
    readShort(): number;
    readUShort(): number;
    readInt(): number;
    readUInt(): number;
    /** Reads a 64-bit signed long integer (Little Endian). */
    readLong(): bigint;
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


// --- DataOut Interface ---
export interface DataOut {
    /** Returns whether this output stream is writableConsumer or not. */
    isWritable(): boolean;
    /** Returns the size of this output stream for writing, in bytes. */
    getSizeForWrite(): number;
    /** Clears this output stream. */
    clear(): void;

    // Write methods
    write(b: Uint8Array): void;
    write(b: number[]): void;
    write(b: Uint8Array, off: number, len: number): number;
    write(b: number[], off: number, len: number): number;
    write(data: DataIn): void;
    write(data: DataInOutJava): void;
    write(data: DataInOutStaticJava): void;

    // Primitive write methods
    writeByte(v: number): void;
    writeBoolean(v: boolean): void;
    writeShort(v: number): void;
    writeChar(v: string): void;
    writeInt(v: number): void;
    /** Writes a 64-bit signed long integer (Little Endian). */
    writeLong(v: number | bigint): void;
    writeFloat(v: number): void;
    writeDouble(v: number): void;
    writeHexBytes(hex: string): void;
}


// --- DataIO Interface ---
export interface DataIO extends DataIn, DataOut { }


// --- Implementation Helpers ---
const DataIO_Utils = {
    /** Reads N bytes in Little Endian format, calling readUByte0 for each byte. */
    readLE(readUByte0: () => number, numBytes: number, isLong: boolean): number {
        let res = 0;
        if (isLong) { // Use floating-point arithmetic for potential > 32-bit results (e.g., readUInt)
            for (let i = 0; i < numBytes; i++) {
                res += readUByte0() * Math.pow(2, 8 * i);
            }
        } else { // Use bitwise operations for up to 32-bit results
            for (let i = 0; i < numBytes; i++) {
                res |= (readUByte0() << (8 * i));
            }
        }
        return res;
    },
};


// --- DataIOBase Abstract Class ---
abstract class DataIOBase implements DataIO {
    // --- Core Abstract Methods ---
    abstract getSizeForRead(): number;
    abstract readUByte(): number; // Needs direct implementation for efficiency
    abstract writeByte(v: number): void; // Needs direct implementation for efficiency
    abstract clear(): void;
    abstract indexOf(limit: number, val: number): number;
    abstract isWritable(): boolean;
    abstract getSizeForWrite(): number;
    abstract skipBytes(n: number): void;
    abstract toArray(): Uint8Array;
    abstract _readCore(b: Uint8Array, offset: number, len: number): number;
    abstract _writeCore(b: ArrayLike<number>, off: number, len: number): number;


    // --- DataIn Implementations ---
    read(b: Uint8Array, offset: number, len: number): number;
    read(b: number[], offset: number, len: number): number;
    read(b: Uint8Array): number;
    read(b: number[]): number;
    read(b: Uint8Array | number[], offset?: number, len?: number): number {
        if (offset === undefined && len === undefined) { // Check for 1-argument overload
            const buf = b instanceof Uint8Array ? b : new Uint8Array(b as number[]);
            return this._readCore(buf, 0, buf.length);
        }

        if (offset !== undefined && len !== undefined) { // Check for 3-argument overload
            if (b instanceof Uint8Array) {
                return this._readCore(b, offset, len);
            } else if (b instanceof Array) { // number[]
                // Reading into number[] (assuming reading ints) - Less efficient
                let elementsRead = 0;
                const targetLen = Math.min(len, b.length - offset);
                for (let i = offset; i < offset + targetLen; i++) {
                    if (this.getSizeForRead() < 4) return elementsRead; // Check if enough bytes remain for an int
                    b[i] = this.readInt(); // Use the class's readInt method
                    elementsRead++;
                }
                return elementsRead;
            }
        }
        throw new Error("Invalid arguments for read()");
    }


    isEmpty(): boolean { return this.getSizeForRead() === 0; }
    isReadable(): boolean { return this.getSizeForRead() !== 0; }
    skipAllBytes(): void { this.skipBytes(this.getSizeForRead()); }

    readBoolean(): boolean { return this.readUByte() !== 0; }
    readByte(): number {
        const ubyte = this.readUByte();
        return ubyte > 127 ? ubyte - 256 : ubyte; // Convert unsigned to signed byte
    }
    readUShort(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 2, false) & 0xFFFF; }
    readShort(): number {
        let value = 0;
        value |= this.readUByte();
        value |= (this.readUByte() << 8);
        return (value >= 0x8000) ? value - 0x10000 : value;
    }
    readInt(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 4, false) | 0; } // Ensure 32-bit signed int
    readUInt(): number { return DataIO_Utils.readLE(this.readUByte.bind(this), 4, true); } // Use floating point for unsigned

    readLong(): bigint {
        let res = 0n;
        let shift = 0n;
        const readUByte = this.readUByte.bind(this); // Bind once
        for (let i = 0; i < 8; i++) {
            const byte = BigInt(readUByte());
            res |= (byte << shift);
            shift += 8n;
        }

        // Handle signed 64-bit integer (twos complement)
        if (res >= 0x8000000000000000n) { // If sign bit (63) is set
            res -= 0x10000000000000000n; // Subtract 2^64
        }
        return res;
    }

    readChar(): string { return String.fromCharCode(this.readUByte()); }
    readFloat(): number {
        const buffer = this.readBytes(4).buffer;
        return (new DataView(buffer, 0, 4)).getFloat32(0, true);
    }
    readDouble(): number {
        const buffer = this.readBytes(8).buffer;
        return (new DataView(buffer, 0, 8)).getFloat64(0, true);
    }
    readString1(): string {
        const len = this.readUByte();
        const data = this.readBytes(len);
        if (typeof TextDecoder !== 'undefined') {
            return new TextDecoder("latin1").decode(data);
        } else {
            let str = '';
            for (let i = 0; i < data.length; i++) { str += String.fromCharCode(data[i]); }
            return str;
        }
    }
    readSubData(length: number): DataIO {
        const res = new DataInOutStatic(length);
        const bytesRead = this._readCore(res.data, 0, length);
        if (bytesRead !== length) {
            throw new Error(`Underflow: Tried to readSubData of length ${length}, but only got ${bytesRead} bytes.`);
        }
        res.setWritePos(length);
        return res;
    }
    readBytes(len: number): Uint8Array {
        const res = new Uint8Array(len);
        const bytesRead = this._readCore(res, 0, len);
        if (bytesRead !== len) {
            throw new Error(`Underflow: Tried to readBytes of length ${len}, but only got ${bytesRead} bytes.`);
        }
        return res;
    }

    write(b: Uint8Array, off: number, len: number): number;
    write(b: number[], off: number, len: number): number;
    write(b: Uint8Array): void;
    write(b: number[]): void;
    write(data: DataIn): void;
    write(data: DataInOutJava): void;
    write(data: DataInOutStaticJava): void;
    write(b: Uint8Array | number[] | DataIn | DataInOutJava | DataInOutStaticJava | ArrayBuffer | Buffer, off?: number, len?: number): number | void {
        if (off !== undefined && len !== undefined) {
            const targetLen = len as number;
            let bb = b as any;
            if (b instanceof Uint8Array) {
                return this._writeCore(b, off, targetLen);
            } else if (b instanceof Array) {
                const buf = new Uint8Array((b as number[]).slice(off, off + targetLen));
                return this._writeCore(buf, 0, buf.length);
            } else if (b instanceof ArrayBuffer) {
                const buf = new Uint8Array(b, off, targetLen);
                return this._writeCore(buf, 0, buf.length);
            } else if (typeof Buffer !== 'undefined' && b instanceof Buffer) {
                // Для Node.js Buffer
                const buf = new Uint8Array(b.buffer, b.byteOffset + off, targetLen);
                return this._writeCore(buf, 0, buf.length);
            } else if (b && (b as any).buffer instanceof ArrayBuffer && typeof (b as any).byteLength === 'number') {
                // Для других типизированных массивов (Int8Array, Uint16Array и т.д.)
                const buf = new Uint8Array((b as any).buffer, (b as any).byteOffset + off, targetLen);
                return this._writeCore(buf, 0, buf.length);
            } else if (bb && typeof bb.length === 'number') {
                const r = this._writeCore(bb as ArrayLike<number>, 0, bb.length);
                if (r !== bb.length) { throw new Error("Assertion failed: Failed to write all bytes from TypedArray"); }
                return;

            } else {
                throw new Error("Invalid arguments for write(b, off, len)");
            }
        }
        let bb = b as any;
        if (b instanceof Uint8Array) {
            const r = this._writeCore(b, 0, b.length);
            if (r !== b.length) { throw new Error("Assertion failed: Failed to write all bytes from Uint8Array"); }
            return;
        } else if (b instanceof Array) {
            const buf = new Uint8Array(b as number[]);
            const r = this._writeCore(buf, 0, buf.length);
            if (r !== buf.length) { throw new Error("Assertion failed: Failed to write all bytes from number[]"); }
            return;
        } else if (b && typeof (b as any).getSizeForRead === 'function' && (b as any).data instanceof Uint8Array) {
            const dataIn = b as DataIn & { data: Uint8Array, readPos: number };
            const size = dataIn.getSizeForRead();
            if (size > 0) {
                const bytesWritten = this._writeCore(dataIn.data, dataIn.readPos, size);
                if (bytesWritten !== size) { throw new Error("Assertion failed: Failed to write all data from DataIn source"); }
            }
            return;
        } else if (b && typeof (b as any).toArray === 'function') {
            this.write((b as DataIn).toArray());
            return;
        } else if (b instanceof ArrayBuffer) {
            const buf = new Uint8Array(b);
            const r = this._writeCore(buf, 0, buf.length);
            if (r !== buf.length) { throw new Error("Assertion failed: Failed to write all bytes from ArrayBuffer"); }
            return;
        } else if (typeof Buffer !== 'undefined' && b instanceof Buffer) {
            const buf = new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
            const r = this._writeCore(buf, 0, buf.length);
            if (r !== buf.length) { throw new Error("Assertion failed: Failed to write all bytes from Buffer"); }
            return;
        } else if (b && bb.buffer instanceof ArrayBuffer && typeof bb.byteLength === 'number') {
            // Для других типизированных массивов (Int8Array, Uint16Array и т.д.)
            let bb = (b as any);
            const buf = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength);
            const r = this._writeCore(buf, 0, buf.length);
            if (r !== buf.length) { throw new Error("Assertion failed: Failed to write all bytes from TypedArray"); }
            return;
        } else if (bb && typeof bb.length === 'number') {
            const r = this._writeCore(bb as ArrayLike<number>, 0, bb.length);
            if (r !== bb.length) { throw new Error("Assertion failed: Failed to write all bytes from TypedArray"); }
            return;
        } else {
            throw new Error(`Invalid arguments for write: expected Uint8Array, number[], DataIn, or toArrayable, got ${typeof b} with value ${JSON.stringify(b)}`);
        }
    }

    writeBoolean(v: boolean): void { this.writeByte(v ? 1 : 0); }
    writeShort(v: number): void {
        this.writeByte((v) & 0xFF);
        this.writeByte((v >>> 8) & 0xFF);
    }
    writeChar(v: string): void { this.writeByte(v.charCodeAt(0) & 0xFF); }
    writeInt(v: number): void {
        this.writeByte((v) & 0xFF);
        this.writeByte((v >>> 8) & 0xFF);
        this.writeByte((v >>> 16) & 0xFF);
        this.writeByte((v >>> 24) & 0xFF);
    }

    writeLong(v: number | bigint): void {
        if (typeof v === 'bigint') {
            const low = v & 0xFFFFFFFFn;
            const high = v >> 32n;
            this.writeInt(Number(low));  // Write low 32 bits
            this.writeInt(Number(high)); // Write high 32 bits
        } else {
            this.writeInt(v & 0xFFFFFFFF);
            this.writeInt(Math.floor(v / 0x100000000));
        }
    }

    writeFloat(v: number): void {
        const buffer = new ArrayBuffer(4); (new DataView(buffer)).setFloat32(0, v, true);
        this._writeCore(new Uint8Array(buffer), 0, 4);
    }
    writeDouble(v: number): void {
        const buffer = new ArrayBuffer(8); (new DataView(buffer)).setFloat64(0, v, true);
        this._writeCore(new Uint8Array(buffer), 0, 8);
    }
    writeHexBytes(hex: string): void { this.write(HexUtils.hexToBytes(hex)); }
}


export class DataInOutStatic extends DataIOBase {
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
        this.writePos = writePos !== undefined ? writePos : (typeof ar === 'number' ? 0 : ar.length);

        if (this.readPos < 0 || this.readPos > this.data.length || this.writePos < 0 || this.writePos > this.data.length || this.readPos > this.writePos) {
            throw new Error(`Invalid initial positions: readPos=${readPos}, writePos=${writePos}, capacity=${this.data.length}`);
        }
    }

    // --- Core Abstract Implementations ---
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
        const availableSpace = this.data.length - this.writePos;
        const l = Math.min(len, availableSpace);
        if (l < len) throw new Error(`BufferOverflow: Not enough space to write ${len} bytes (available: ${availableSpace}) in DataInOutStatic`);

        this.data.set(b.subarray(off, off + l), this.writePos);
        this.writePos += l;
        return l;
    }
    override readUByte(): number {
        if (this.readPos >= this.writePos) { throw new Error(`Underflow: Cannot read byte, readPos=${this.readPos}, writePos=${this.writePos}`); }
        return this.data[this.readPos++];
    }
    override writeByte(v: number): void {
        if (this.writePos >= this.data.length) { throw new Error("BufferOverflow: Cannot write byte, buffer full (DataInOutStatic)"); }
        this.data[this.writePos++] = v & 0xFF;
    }
    override toArray(): Uint8Array {
        const readableBytes = this.data.slice(this.readPos, this.writePos);
        this.readPos = this.writePos;
        return readableBytes;
    }
    override indexOf(limit: number, val: number): number {
        const searchEnd = Math.min(this.writePos, this.readPos + limit);
        for (let i = this.readPos; i < searchEnd; i++) {
            if (this.data[i] === val) return i - this.readPos;
        }
        return -1;
    }
    override skipBytes(n: number): void {
        const newReadPos = this.readPos + n;
        if (newReadPos > this.writePos) { throw new Error(`Underflow: Cannot skip ${n} bytes, only ${this.getSizeForRead()} available.`); }
        this.readPos = newReadPos;
    }
    override clear(): void { this.writePos = 0; this.readPos = 0; }
    override getSizeForRead(): number { return this.writePos - this.readPos; }
    override isWritable(): boolean { return this.writePos < this.data.length; }
    override getSizeForWrite(): number { return this.data.length - this.writePos; }

    // --- DataInOutStatic specific methods ---
    total(): number { return this.data.length; }
    getWritePos(): number { return this.writePos; }
    setWritePos(writePos: number): void {
        if (writePos < 0 || writePos > this.data.length) throw new Error(`IndexOutOfBounds: writePos ${writePos} is out of bounds [0, ${this.data.length}]`);
        if (writePos < this.readPos) throw new Error(`IllegalArgument: writePos ${writePos} cannot be less than readPos ${this.readPos}`);
        this.writePos = writePos;
    }
    getReadPos(): number { return this.readPos; }
    setReadPos(readPos: number): void {
        if (readPos < 0 || readPos > this.writePos) throw new Error(`IndexOutOfBounds: readPos ${readPos} is out of bounds [0, ${this.writePos}]`);
        this.readPos = readPos;
    }
}


export class DataInOut extends DataIOBase {
    public data: Uint8Array;
    public writePos: number = 0;
    public readPos: number = 0;

    constructor(dataOrCapacity: Uint8Array | number = 100, len?: number) {
        super();
        if (dataOrCapacity instanceof Uint8Array) {
            this.data = dataOrCapacity;
            this.writePos = len !== undefined ? len : dataOrCapacity.length;
        } else {
            this.data = new Uint8Array(dataOrCapacity);
            this.writePos = 0;
        }
        this.readPos = 0;
    }

    private readUByte0(): number {
        if (this.readPos >= this.writePos) { throw new Error("Underflow: Cannot read byte, buffer empty or read past end."); }
        return this.data[this.readPos++];
    }

    private trim(): void {
        if (this.readPos > 0 && this.readPos === this.writePos) {
            this.writePos = 0;
            this.readPos = 0;
        }
    }

    // Overridden primitive reads using trim()
    override readUByte(): number {
        const res = this.readUByte0();
        this.trim();
        return res;
    }
    override readUShort(): number {
        if (this.readPos + 2 > this.writePos) throw new Error(`Underflow: Cannot read UShort, need 2 bytes, have ${this.getSizeForRead()}`);
        const res = DataIO_Utils.readLE(this.readUByte0.bind(this), 2, false) & 0xFFFF;
        this.trim();
        return res;
    }
    override readShort(): number {
        if (this.readPos + 2 > this.writePos) throw new Error(`Underflow: Cannot read Short, need 2 bytes, have ${this.getSizeForRead()}`);
        const ushortVal = DataIO_Utils.readLE(this.readUByte0.bind(this), 2, false);
        this.trim();
        return (ushortVal >= 0x8000) ? ushortVal - 0x10000 : ushortVal;
    }

    override readInt(): number {
        if (this.readPos + 4 > this.writePos) throw new Error(`Underflow: Cannot read Int, need 4 bytes, have ${this.getSizeForRead()}`);
        const res = DataIO_Utils.readLE(this.readUByte0.bind(this), 4, false) | 0;
        this.trim();
        return res;
    }
    override readUInt(): number {
        if (this.readPos + 4 > this.writePos) throw new Error(`Underflow: Cannot read UInt, need 4 bytes, have ${this.getSizeForRead()}`);
        const res = DataIO_Utils.readLE(this.readUByte0.bind(this), 4, true);
        this.trim();
        return res;
    }

    override readLong(): bigint {
        if (this.readPos + 8 > this.writePos) throw new Error(`Underflow: Cannot read Long, need 8 bytes, have ${this.getSizeForRead()}`);

        let res = 0n;
        let shift = 0n;
        const readUByte0 = this.readUByte0.bind(this); // Use the internal, non-trimming read

        for (let i = 0; i < 8; i++) {
            const byte = BigInt(readUByte0());
            res |= (byte << shift);
            shift += 8n;
        }

        this.trim(); // Trim once at the end

        // Handle signed 64-bit integer (twos complement)
        if (res >= 0x8000000000000000n) {
            res -= 0x10000000000000000n;
        }
        return res;
    }

    // --- Core Abstract Implementations ---
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
        const readableBytes = this.data.slice(this.readPos, this.writePos);
        this.clear();
        return readableBytes;
    }
    override indexOf(limit: number, val: number): number {
        const searchEnd = Math.min(this.writePos, this.readPos + limit);
        for (let i = this.readPos; i < searchEnd; i++) {
            if (this.data[i] === val) return i - this.readPos;
        }
        return -1;
    }
    override skipBytes(n: number): void {
        const newReadPos = this.readPos + n;
        if (newReadPos > this.writePos) { throw new Error(`Underflow: Cannot skip ${n} bytes, only ${this.getSizeForRead()} available.`); }
        this.readPos = newReadPos;
        this.trim();
    }
    override clear(): void { this.writePos = 0; this.readPos = 0; }
    override getSizeForRead(): number { return this.writePos - this.readPos; }
    override isWritable(): boolean { return true; }
    override getSizeForWrite(): number { return Infinity; }

    // --- DataInOut specific methods ---
    toArrayCopy(): Uint8Array { return this.data.slice(this.readPos, this.writePos); }
    getData(): Uint8Array { return this.data; }
    setData(data: Uint8Array, readPos: number = 0, writePos?: number): void {
        this.data = data;
        this.readPos = readPos;
        this.writePos = writePos !== undefined ? writePos : data.length;
        if (this.readPos < 0 || this.readPos > this.data.length || this.writePos < 0 || this.writePos > this.data.length || this.readPos > this.writePos) {
            throw new Error(`Invalid positions set via setData: readPos=${readPos}, writePos=${writePos}, capacity=${this.data.length}`);
        }
    }
    getWritePos(): number { return this.writePos; }
    setWritePos(writePos: number): void {
        if (writePos < 0) throw new Error("writePos cannot be negative");
        if (writePos < this.readPos) throw new Error(`IllegalArgument: writePos ${writePos} cannot be less than readPos ${this.readPos}`);
        if (writePos > this.data.length) {
            this.checkSize(writePos - this.writePos);
        }
        this.writePos = writePos;
    }
    getReadPos(): number { return this.readPos; }
    setReadPos(readPos: number): void {
        if (readPos < 0 || readPos > this.writePos) throw new Error(`IndexOutOfBounds: readPos ${readPos} is out of bounds [0, ${this.writePos}]`);
        this.readPos = readPos;
        this.trim();
    }

    checkSize(sizeNeeded: number): void {
        const requiredCapacity = this.writePos + sizeNeeded;
        if (this.data.length < requiredCapacity) {
            const doubleSize = this.data.length * 2;
            const resizeWithFactor = Math.ceil(requiredCapacity * 1.3);
            const newSize = Math.max(doubleSize, resizeWithFactor, requiredCapacity);

            const newData = new Uint8Array(newSize);
            if (this.writePos > 0) {
                newData.set(this.data.subarray(0, this.writePos));
            }
            this.data = newData;
        }
    }
}
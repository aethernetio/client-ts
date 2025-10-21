// =G_E_M_I_N_I_S_P_L_I_T_T_E_R
// =============================================================================================
// FILE: aether.core.ts (Combined and Corrected for TypeScript/Browser - v18 - TS2612 Fix)
// =============================================================================================

// =============================================================================================
// SECTION 0: BROWSER ATOMICS AND UTILS
// =============================================================================================

class AtomicLong_C {
    public value: number;
    constructor(value: number) { this.value = value; }
    getAndIncrement(): number {
        const oldValue = this.value;
        this.value += 1;
        return oldValue;
    }
    public compareAndSet(expected: number, update: number): boolean {
        if (this.value === expected) {
            this.value = update;
            return true;
        }
        return false;
    }
}

class AtomicReference_C<T> {
    public value: T;
    constructor(value: T) { this.value = value; }
    compareAndSet(expected: T, update: T): boolean {
        if (this.value === expected) {
            this.value = update;
            return true;
        }
        return false;
    }
}

class ConcurrentLinkedQueue_C<T> {
    private data: T[] = [];
    shift(): T | undefined { return this.data.shift(); }
    push(...t: T[]) { this.data.push(...t); return this.data.length; }
    get length() { return this.data.length; }
    clear(): void { this.data = []; } // Added clear
}


// =============================================================================================
// SECTION 1: aether.interfaces.ts (Functional Interfaces & TaskConsumer)
// =============================================================================================

export interface Disposable {
    [Symbol.dispose](): void;
}

export type ARunnable = () => void;
export type ASupplier<T> = () => T;
export type AConsumer<T> = (value: T) => void;
export type AFunction<T, R> = (value: T) => R;
export type APredicate<T> = (value: T) => boolean;
export type ABiConsumer<T1, T2> = (v1: T1, v2: T2) => void;
export type A2Function<T1, T2, R> = (v1: T1, v2: T2) => R;
export type ABiFunction<T1, T2, R> = A2Function<T1, T2, R>;
export type A3Consumer<T1, T2, T3> = (v1: T1, v2: T2, v3: T3) => void;
export type A3Function<T1, T2, T3, R> = (v1: T1, v2: T2, v3: T3) => R;
export type A3Predicate<T1, T2, T3> = (v1: T1, v2: T2, v3: T3) => boolean;

// ИСПРАВЛЕНО: Добавлен RCollection<T> в тип
export type Collection<T> = T[] | Set<T> | RCollection<T>;

export interface Executor {
    execute(task: ARunnable): void;
}

export interface ToString {
    toString2(): string;
}

// ---------------------------------------------------------------------------------------------
// TaskConsumer
// ---------------------------------------------------------------------------------------------

export interface TaskConsumer<T> extends AConsumer<T> {
    isExecuted(): boolean;
    accept: AConsumer<T>;
}

export abstract class TaskConsumerBase<T> {
    private _isExecuted: boolean = false;
    public isExecuted(): boolean { return this._isExecuted; }

    public accept: AConsumer<T> = (value: T) => {
        if (this._isExecuted) return;
        this._isExecuted = true;
        this.runTask(value);
    }
    protected abstract runTask(value: T): void;
}

export function createTaskConsumer<T>(runTask: (value: T) => void): TaskConsumer<T> {
    const instance = new (class extends TaskConsumerBase<T> {
        protected runTask(value: T): void {
            runTask(value);
        }
    })();

    const consumerFunction = instance.accept.bind(instance) as AConsumer<T>;

    return Object.assign(consumerFunction, {
        isExecuted: instance.isExecuted.bind(instance),
        accept: consumerFunction
    }) as TaskConsumer<T>;
}

export namespace AConsumer {
    export interface Weak<T> extends AConsumer<T> {
        isEmptyRef(): boolean;
        weak(): Weak<T>;
    }
}

// Moved RU definition here as it uses Disposable/ARunnable
const RU = {
    schedule: (ms: number, task: ARunnable): Disposable => {
        const timer = setTimeout(task, ms);
        return { [Symbol.dispose]: () => clearTimeout(timer) };
    },
};

// =============================================================================================
// SECTION 4: logger.interfaces.ts (Logger Interfaces) - MOVED UP
// =============================================================================================

export interface AString {
    add: (...parts: any[]) => AString;
    addVars: (template: string, valueSupplier: (key: string) => any) => AString;
    addStackTrace: (e: Error) => AString;
    length: () => number;
    limit: (i: number) => AString;
    limitByteArrays: (i: number) => AString;
    styleForeground: (style: any, r: number, g: number, b: number) => AString;
    styleBackground: (style: any, r: number, g: number, b: number) => AString;
    style: (style: any, color: any) => AString;
    styleClear: () => AString;
    toString: () => string;
}

export enum LogLevel {
    TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

export interface LNode {
    data: Map<string, any>;
    parent: LNode | null;
    level?: LogLevel;
    msg?: string;
    time?: Date;
}

export type LogFilter = APredicate<LNode>;

export interface LogPrinter extends Disposable {
    print(node: LNode): void;
}

export interface LogWrapper {
    wrap(t: ARunnable): ARunnable;
    wrap<T>(t: ASupplier<T>): ASupplier<T>;
    wrap<T>(t: AConsumer<T>): AConsumer<T>;
    wrap<T1, T2>(t: ABiConsumer<T1, T2>): ABiConsumer<T1, T2>;
    wrap<T, R>(t: AFunction<T, R>): AFunction<T, R>;
}

export type LogData = Record<string, any>;

export interface Log {
    readonly LEVEL: string;
    readonly SYSTEM_COMPONENT: string;
    readonly MSG: string;
    readonly EXCEPTION_STR: string;

    createContext(key: string, value: any, component?: string): LNode;
    context(key: string, value: any, component?: string): Disposable;
    context(key: string, value: ASupplier<any>, component?: string): Disposable;
    push(n: LNode): void;
    get(): LNode | null;
    pop(n: LNode): void;

    trace(msg: string | ToString, data?: LogData): LNode;
    trace(msg: ASupplier<string>, data?: LogData): LNode;
    debug(msg: string | ToString, data?: LogData): LNode;
    debug(msg: ASupplier<string>, data?: LogData): LNode;
    info(msg: string | ToString, data?: LogData): LNode;
    info(msg: ASupplier<string>, data?: LogData): LNode;
    warn(msg: string | ToString, data?: LogData): LNode;
    warn(msg: ASupplier<string>, data?: LogData): LNode;
    error(msg: string | ToString, throwable: Error, data?: LogData): LNode;
    error(msg: string | ToString, data?: LogData): LNode;
    error(throwable: Error, data?: LogData): LNode;

    wrapExecutor(executor: Executor): Executor;
    wrap: LogWrapper['wrap'];
    addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable;

    filter(filter: LogFilter): void;
    loggerOff(): void;
    loggerOn(): void;
}

// =============================================================================================
// SECTION 5: logger.implementation.ts (Logger Implementation) - MOVED UP
// =============================================================================================

class AStringImpl implements AString {
    private value: string = '';
    constructor(initialValue: string = '') { this.value = initialValue; }
    public add(...parts: any[]): AString {
        this.value += parts.map((p: any) => this.logValueToString(p)).join('');
        return this;
    }
    public addVars(template: string, valueSupplier: (key: string) => any): AString {
        this.value += template.replace(/{(\w+)}/g, (_, key) => {
            const v = valueSupplier(key);
            return this.logValueToString(v);
        });
        return this;
    }
    public addStackTrace(e: Error): AString {
        this.value += '\n' + (e.stack || e.message);
        return this;
    }
    public length(): number { return this.value.length; }
    public limit(i: number): AString { this.value = this.value.substring(0, i); return this; }
    public limitByteArrays(_i: number): AString { return this; } // Placeholder
    public styleForeground(_style: any, _r: number, _g: number, _b: number): AString { return this; } // Placeholder
    public styleBackground(_style: any, _r: number, _g: number, _b: number): AString { return this; } // Placeholder
    public style(_style: any, _color: any): AString { return this; } // Placeholder
    public styleClear(): AString { return this; } // Placeholder
    public toString(): string { return this.value; }
    private logValueToString(value: any): string {
        if (value === null || value === undefined) return '';
        if (typeof value === 'object' && 'toString2' in value && typeof (value as ToString).toString2 === 'function') {
            return (value as ToString).toString2();
        }
        if (value instanceof Error) {
            return `[Error: ${value.message}]`;
        }
        // Basic object/array handling (can be improved)
        if (typeof value === 'object') {
            try { return JSON.stringify(value); } catch { return '[Object]'; }
        }
        return String(value);
    }
    public static of(initialValue: string = ''): AString {
        return new AStringImpl(initialValue);
    }
}

class LogContextCloser implements Disposable {
    private readonly node: LNode;
    constructor(node: LNode) { this.node = node; }
    public [Symbol.dispose](): void { LogStatics.pop(this.node); }
}

class ConsoleLogPrinterImpl implements LogPrinter {
    public print(node: LNode): void {
        const component = node.data.get(LogStatics.SYSTEM_COMPONENT) || 'GLOBAL';
        const level = (node.data.get(LogStatics.LEVEL) as LogLevel) || LogLevel.INFO; // Default level
        const message = node.data.get(LogStatics.MSG) || '';
        const exception = node.data.get(LogStatics.EXCEPTION_STR);
        const output = AStringImpl.of(`[${level}][${component}] ${message}`);

        if (exception) { output.add('\nException: ').add(exception); }

        const contextData: Record<string, any> = {};
        let current: LNode | null = node;
        const processedKeys = new Set<string>([LogStatics.LEVEL, LogStatics.MSG, LogStatics.EXCEPTION_STR, LogStatics.SYSTEM_COMPONENT]);

        // Gather context from node and parents, avoiding overwrites
        while (current) {
            current.data.forEach((v: any, k: string) => {
                if (!processedKeys.has(k)) {
                    contextData[k] = v;
                    processedKeys.add(k); // Mark as processed
                }
            });
            // Only gather from direct log node, not parents for console simplicity?
            // Adjust this loop if full parent context is desired in contextData object.
            break; // Remove this break to include parent context in the object
            // current = current.parent;
        }


        const logFunc = this.getConsoleMethod(level);
        if (Object.keys(contextData).length > 0) {
            logFunc(output.toString(), contextData);
        } else {
            logFunc(output.toString());
        }
    }
    private getConsoleMethod(level: LogLevel): (...data: any[]) => void {
        switch (level) {
            case LogLevel.ERROR: return console.error.bind(console);
            case LogLevel.WARN: return console.warn.bind(console);
            case LogLevel.INFO: return console.info.bind(console);
            case LogLevel.DEBUG: return console.debug.bind(console);
            case LogLevel.TRACE:
            default: return console.trace?.bind(console) ?? console.log.bind(console); // Use trace if available
        }
    }
    public [Symbol.dispose](): void { /* No-op for console */ }
}

// LogStatics needs ARunnable, ASupplier, LNode, LogFilter, LogPrinter, Disposable, Executor
export class LogStatics {
    public static readonly LEVEL = 'L';
    public static readonly SYSTEM_COMPONENT = 'C';
    public static readonly MSG = 'M';
    public static readonly EXCEPTION_STR = 'E';

    private static readonly LOG_STACK: LNode[] = [];
    private static readonly PRINTERS: LogPrinter[] = [new ConsoleLogPrinterImpl()];
    private static readonly LISTENERS: { filter: LogFilter, consumer: AConsumer<LNode>, disposer: Disposable }[] = [];
    private static IS_ENABLED = true;
    private static LOG_FILTER: LogFilter = (_node: LNode) => LogStatics.IS_ENABLED; // Filter should check the node

    public static get(): LNode | null { return this.LOG_STACK.length > 0 ? this.LOG_STACK[this.LOG_STACK.length - 1] : null; }
    public static push(node: LNode): void { node.parent = this.get(); this.LOG_STACK.push(node); }
    public static pop(node: LNode): void { if (this.get() === node) { this.LOG_STACK.pop(); } }

    public static createContext(key: string, value: any, component?: string): LNode {
        const data = new Map<string, any>();
        data.set(key, value);
        if (component) { data.set(this.SYSTEM_COMPONENT, component); }
        // Inherit parent context directly into the new node's data for simpler access
        const parent = this.get();
        if (parent) {
            parent.data.forEach((v, k) => {
                if (!data.has(k)) { // Don't overwrite explicit values
                    data.set(k, v);
                }
            });
        }
        const node: LNode = { data, parent: null }; // Parent link for stack pop only
        return node;
    }

    public static context(key: string, value: any | ASupplier<any>, component?: string): Disposable {
        const resolvedValue = typeof value === 'function' ? (value as ASupplier<any>)() : value;
        const node = this.createContext(key, resolvedValue, component);
        this.push(node);
        return new LogContextCloser(node);
    }

    private static log(level: LogLevel, msg: string | ASupplier<string> | ToString, data?: LogData, throwable?: Error): LNode {
        // Build the node data first
        const logNodeData = new Map<string, any>();
        logNodeData.set(this.LEVEL, level);

        let resolvedMsg = '[No Message]';
        try {
            if (typeof msg === 'function') { resolvedMsg = (msg as ASupplier<string>)(); }
            else if (typeof msg === 'object' && msg !== null && 'toString2' in msg) { resolvedMsg = (msg as ToString).toString2(); }
            else { resolvedMsg = String(msg); }
        } catch (e) {
            resolvedMsg = `[Error resolving log message: ${e instanceof Error ? e.message : String(e)}]`;
        }
        logNodeData.set(this.MSG, resolvedMsg);

        if (throwable) { logNodeData.set(this.EXCEPTION_STR, throwable.stack || throwable.message); }
        if (data) {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key) && !logNodeData.has(key)) {
                    logNodeData.set(String(key), data[key]);
                }
            }
        }

        // Inherit context from parent stack
        const parent = this.get();
        if (parent) {
            parent.data.forEach((v, k) => {
                if (!logNodeData.has(k)) {
                    logNodeData.set(k, v);
                }
            });
        }

        const logNode: LNode = { data: logNodeData, level, msg: resolvedMsg, time: new Date(), parent };

        // Check filter *after* building the full node context
        if (!this.IS_ENABLED || !this.LOG_FILTER(logNode)) {
            return logNode; // Return node even if not published, might be useful
        }

        this.publish(logNode);
        return logNode;
    }


    private static publish(node: LNode): void {
        this.LISTENERS.forEach(listener => {
            try {
                if (listener.filter(node)) { listener.consumer(node); }
            } catch (e) {
                console.error("Error in log listener:", e);
            }
        });
        this.PRINTERS.forEach(printer => {
            try {
                printer.print(node);
            } catch (e) {
                console.error("Error in log printer:", e);
            }
        });
    }

    public static trace(msg: string | ASupplier<string> | ToString, data?: LogData): LNode { return this.log(LogLevel.TRACE, msg, data); }
    public static debug(msg: string | ASupplier<string> | ToString, data?: LogData): LNode { return this.log(LogLevel.DEBUG, msg, data); }
    public static info(msg: string | ASupplier<string> | ToString, data?: LogData): LNode { return this.log(LogLevel.INFO, msg, data); }
    public static warn(msg: string | ASupplier<string> | ToString, data?: LogData): LNode { return this.log(LogLevel.WARN, msg, data); }

    public static error(
        msgOrThrowable: string | ASupplier<string> | ToString | Error,
        throwableOrData?: Error | LogData,
        data?: LogData
    ): LNode {
        let msg: string | ASupplier<string> | ToString | null = null;
        let throwable: Error | undefined;
        let finalData: LogData | undefined;

        if (msgOrThrowable instanceof Error) {
            throwable = msgOrThrowable;
            finalData = throwableOrData as LogData;
        } else {
            msg = msgOrThrowable;
            if (throwableOrData instanceof Error) {
                throwable = throwableOrData;
                finalData = data;
            } else {
                finalData = throwableOrData as LogData;
            }
        }
        // If msg is still null (only error was passed), provide a default.
        if (msg === null) msg = throwable ? `Exception: ${throwable.message}` : "Error occurred";

        return this.log(LogLevel.ERROR, msg, finalData, throwable);
    }


    // Simplified wrapper - assumes context is captured correctly by closure
    public static wrapInternal<T extends Function>(fn: T): T {
        const capturedContextNode = this.get(); // Get context at definition time

        // Return a new function that temporarily sets the context
        const wrapper = function(this: any, ...args: any[]) {
            const currentContext = LogStatics.get();
            if (currentContext === capturedContextNode) {
                // Already in the correct context, execute directly
                return fn.apply(this, args);
            } else {
                // Need to switch context
                const needsPush = capturedContextNode && LogStatics.LOG_STACK[LogStatics.LOG_STACK.length - 1] !== capturedContextNode;
                if (needsPush) {
                    LogStatics.push(capturedContextNode!);
                }
                try {
                    return fn.apply(this, args);
                } finally {
                    if (needsPush) {
                        LogStatics.pop(capturedContextNode!);
                    }
                }
            }
        };
        return wrapper as unknown as T;
    }


    public static wrapExecutor(executor: Executor): Executor {
        return { execute: (command: ARunnable) => executor.execute(this.wrapInternal(command)), };
    }

    public static addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable {
        const listenerEntry = { filter, consumer, disposer: { [Symbol.dispose]: () => { } } };
        const disposer: Disposable = {
            [Symbol.dispose]: () => {
                const index = LogStatics.LISTENERS.indexOf(listenerEntry);
                if (index > -1) { LogStatics.LISTENERS.splice(index, 1); }
            },
        };
        listenerEntry.disposer = disposer;
        this.LISTENERS.push(listenerEntry);
        return disposer;
    }

    public static loggerOff(): void { this.IS_ENABLED = false; }
    public static loggerOn(): void { this.IS_ENABLED = true; }
    public static filter(filter: LogFilter): void { this.LOG_FILTER = filter; }
}

// LogFacade needs LogStatics
export const LogFacade: Log = {
    LEVEL: LogStatics.LEVEL, SYSTEM_COMPONENT: LogStatics.SYSTEM_COMPONENT, MSG: LogStatics.MSG, EXCEPTION_STR: LogStatics.EXCEPTION_STR,
    filter: LogStatics.filter.bind(LogStatics),
    createContext: LogStatics.createContext.bind(LogStatics) as any, context: LogStatics.context.bind(LogStatics) as any,
    push: LogStatics.push.bind(LogStatics), get: LogStatics.get.bind(LogStatics), pop: LogStatics.pop.bind(LogStatics),
    trace: LogStatics.trace.bind(LogStatics) as any, debug: LogStatics.debug.bind(LogStatics) as any,
    info: LogStatics.info.bind(LogStatics) as any, warn: LogStatics.warn.bind(LogStatics) as any,
    error: LogStatics.error.bind(LogStatics) as any,
    wrapExecutor: LogStatics.wrapExecutor.bind(LogStatics),
    wrap: LogStatics.wrapInternal.bind(LogStatics) as LogWrapper['wrap'],
    addListener: LogStatics.addListener.bind(LogStatics),
    loggerOff: LogStatics.loggerOff.bind(LogStatics), loggerOn: LogStatics.loggerOn.bind(LogStatics),
};

// =============================================================================================
// SECTION 6: dataio.interfaces.ts (Data I/O Interfaces) - MOVED UP
// =============================================================================================

export interface DataIO extends DataIn, DataOut { }
export interface DataIn {
    getSizeForRead(): number;
    read(b: Uint8Array, offset: number, len: number): number;
    read(b: number[], offset: number, len: number): number;
    isEmpty(): boolean;
    skipBytes(n: number): void;
    isReadable(): boolean;
    readBoolean(): boolean;
    readByte(): number;
    readUByte(): number;
    readSubData(length: number): DataIO;
    readShort(): number;
    readUShort(): number;
    readChar(): string;
    readInt(): number;
    readUInt(): number;
    readLong(): number | bigint;
    readFloat(): number;
    readDouble(): number;
    readString1(): string;
    toArray(): Uint8Array;
    skipAllBytes(): void;
    indexOf(limit: number, val: number): number;
    readBytes(len: number): Uint8Array;
}
export interface DataOut {
    write(b: Uint8Array): void;
    write(b: number[]): void;
    write(b: Uint8Array, off: number, len: number): number; // Should return void?
    write(b: number[], off: number, len: number): number; // Should return void?
    write(data: DataIn): void;
    clear(): void;
    writeBoolean(v: boolean): void;
    writeByte(v: number): void;
    writeShort(v: number): void;
    writeChar(v: string): void;
    writeInt(v: number): void;
    writeLong(v: number | bigint): void;
    writeFloat(v: number): void;
    writeDouble(v: number): void;
    isWritable(): boolean;
    getSizeForWrite(): number;
    writeHexBytes(hex: string): void;
}
export interface DataInOut extends DataIO {
    data: Uint8Array;
    writePos: number;
    readPos: number;
    toArrayCopy(): Uint8Array;
    getData(): Uint8Array;
    setData(data: Uint8Array): void;
    checkSize(size: number): void;
}
export interface DataInOutStatic extends DataIO {
    readonly data: Uint8Array;
    writePos: number;
    readPos: number;
    total(): number;
}

// =============================================================================================
// SECTION 7-9: Data I/O and FastMeta Interfaces - MOVED UP
// =============================================================================================

export interface FastFutureContext { }
export interface FastApiContext {
    flush(f: AFuture): void; // Needs AFuture
}

// =============================================================================================
// SECTION 10.1: slots.implementation.ts (Event/AMFuture Implementations) - MOVED UP
// Needs AConsumer, ABiConsumer, LogFacade, TaskConsumer, create..., RU, AFuture, ARFuture
// =============================================================================================

export class EventConsumer<T> {
    public readonly listeners: Set<AConsumer<T>> = new Set(); // ИСПРАВЛЕНО: public

    public once(task: TaskConsumer<T>): void;
    public once(task: AConsumer<T>): void;
    public once(taskOrT2: AConsumer<T> | TaskConsumer<T>): void {
        let taskToAdd: TaskConsumer<T>;
        if (typeof (taskOrT2 as TaskConsumer<T>).isExecuted === 'function') {
            taskToAdd = taskOrT2 as TaskConsumer<T>;
        } else {
            const task = taskOrT2 as AConsumer<T>;
            taskToAdd = createTaskConsumer<T>((value: T) => {
                task(value);
            });
        }
        this.add(taskToAdd);
    }


    public add(listener: AConsumer<T>): void {
        this.listeners.add(LogFacade.wrap(listener));
    }
    public addRun(listener: ARunnable): void {
        this.listeners.add(LogFacade.wrap(((_v: T) => listener()) as AConsumer<T>));
    }

    public remove(listener: AConsumer<T>): void {
        // We need to remove the potentially wrapped listener.
        // This requires either storing the original->wrapped mapping
        // or iterating to find the wrapper. Iteration is simpler for now.
        let toDelete: AConsumer<T> | null = null;
        for (const existing of this.listeners) {
            // This check is imperfect; wrapping might hide the original.
            // A better solution involves storing the original listener maybe on the wrapped function.
            if (existing === listener /* || (existing as any).__original === listener */) {
                toDelete = existing;
                break;
            }
        }
        if (toDelete) {
            this.listeners.delete(toDelete);
        }
    }


    public fire(v: T): void {
        const currentListeners = Array.from(this.listeners);
        const toRemove: AConsumer<T>[] = [];

        for (const l of currentListeners) {
            if (!this.listeners.has(l)) continue;

            try {
                l(v);
                const taskConsumer = l as unknown as TaskConsumer<T>;
                if (taskConsumer.isExecuted && typeof taskConsumer.isExecuted === 'function' && taskConsumer.isExecuted()) {
                    toRemove.push(l);
                } else {
                    const weakConsumer = l as AConsumer.Weak<T>;
                    if (weakConsumer.isEmptyRef && typeof weakConsumer.isEmptyRef === 'function' && weakConsumer.isEmptyRef()) {
                        toRemove.push(l);
                    }
                }
            } catch (e) {
                console.error("Error firing event listener:", e);
                // Optionally remove the faulty listener: toRemove.push(l);
            }
        }
        toRemove.forEach(l => this.listeners.delete(l));
    }


    public toString(): string {
        return `EventConsumer(${this.listeners.size})`;
    }

    public hasListener(): boolean {
        return this.listeners.size > 0;
    }
}

export class EventBiConsumer<T1, T2> {
    private readonly listeners: Set<ABiConsumer<T1, T2>> = new Set();

    public add(listener: ABiConsumer<T1, T2>): void {
        this.listeners.add(LogFacade.wrap(listener));
    }


    public remove(listener: ABiConsumer<T1, T2>): void {
        // Similar issue as EventConsumer.remove regarding wrapped listeners
        let toDelete: ABiConsumer<T1, T2> | null = null;
        for (const existing of this.listeners) {
            if (existing === listener) { // Imperfect check
                toDelete = existing;
                break;
            }
        }
        if (toDelete) this.listeners.delete(toDelete);
    }


    public fire(v1: T1, v2: T2): void {
        const currentListeners = Array.from(this.listeners);
        for (const l of currentListeners) {
            if (!this.listeners.has(l)) continue;
            try {
                l(v1, v2);
            } catch (e) {
                console.error("Error firing bi-event listener:", e);
            }
        }
    }


    public hasListener(): boolean {
        return this.listeners.size > 0;
    }

    public addRun(task: ARunnable): void {
        this.add((_v1: T1, _v2: T2) => {
            task();
        });
    }
}

// AMFutureBase needs EventConsumer, AConsumer, AFunction, TaskConsumer, create..., RU, ARFuture, LogFacade
// AFuture/ARFuture interfaces defined *after* this section
class AMFutureBase<T> {
    public eventConsumer: EventConsumer<T>;
    private value: T | null;

    constructor(value?: T) {
        this.value = value === undefined ? null : value;
        this.eventConsumer = new EventConsumer<T>();
    }

    public refresh(): void {
        if (this.value !== null) {
            this.eventConsumer.fire(this.value);
        }
    }

    public accept: AConsumer<T> = (value: T) => {
        this.set(value);
    };

    public set(value: T): boolean {
        const oldValue = this.value;
        if (oldValue === value) {
            return false;
        }
        this.value = value;
        this.eventConsumer.fire(value);
        return true;
    }

    public map<V2>(f: AFunction<T, V2>): AMFuture<V2> { // Needs AMFuture interface
        const res = createAMFuture<V2>();
        this.add((v: T) => {
            try {
                res.set(f(v));
            } catch (e) {
                console.error("Error in AMFuture map function:", e);
                // How to handle errors? Maybe set error state on result?
            }
        });
        if (this.value !== null) {
            try {
                res.set(f(this.value));
            } catch (e) {
                console.error("Error in AMFuture map function (initial value):", e);
            }
        }
        return res;
    }

    public once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;
    public once(t2: TaskConsumer<T>): void;
    public once(task: AConsumer<T>): void;
    public once(taskOrT2: AConsumer<T> | TaskConsumer<T>, msOrSeconds?: number, timeoutTask?: ARunnable): void {
        if (typeof msOrSeconds === 'number' && typeof timeoutTask === 'function') {
            const ms = msOrSeconds > 1000000 ? msOrSeconds : msOrSeconds * 1000;
            const task = taskOrT2 as AConsumer<T>;

            let timerDisposer: Disposable | null = null;
            let executed = false;

            const onceTask = createTaskConsumer<T>((value: T) => {
                if (executed) return;
                executed = true;
                timerDisposer?.[Symbol.dispose]();
                try { task(value); } catch (e) { LogFacade.error(e as Error); }
            });

            timerDisposer = RU.schedule(ms, () => {
                timerDisposer = null;
                if (!executed) {
                    executed = true;
                    try { timeoutTask(); this.eventConsumer.remove(onceTask); } catch (e) { LogFacade.error(e as Error); }
                }
            });

            this.eventConsumer.once(onceTask); // Use EventConsumer's once
            // Manually fire if value exists AND listener wasn't already fired by add/once
            if (this.value !== null && !onceTask.isExecuted()) {
                try { onceTask.accept(this.value); } catch (e) { LogFacade.error(e as Error); timerDisposer?.[Symbol.dispose](); this.eventConsumer.remove(onceTask); }
            }

        } else if (typeof (taskOrT2 as TaskConsumer<T>).isExecuted === 'function') {
            const t2 = taskOrT2 as TaskConsumer<T>;
            this.eventConsumer.once(t2); // Use EventConsumer's once
            if (this.value !== null && !t2.isExecuted()) {
                try { t2(this.value); } catch (e) { LogFacade.error(e as Error); this.eventConsumer.remove(t2); }
            }
        } else if (typeof taskOrT2 === 'function' && arguments.length === 1) { // Check args.length
            this.toOnce(taskOrT2 as AConsumer<T>);
        } else {
            throw new Error("Invalid arguments for AMFuture.once");
        }
    }

    public toOnce(task: AConsumer<T>): void {
        const t2 = createTaskConsumer<T>((value: T) => {
            try { task(value); } catch (e) { LogFacade.error(e as Error); }
        });
        this.once(t2);
    }

    public addWeak(task: AConsumer<T>): void {
        LogFacade.warn("AMFuture.addWeak is not truly weak in this JS implementation.");
        this.add(task);
    }

    public add(task: AConsumer<T>): void {
        this.eventConsumer.add(task);
        if (this.value !== null) {
            try { LogFacade.wrap(task)(this.value); } catch (e) { LogFacade.error(e as Error); }
        }
    }

    public getNow(): T | null { return this.value; }

    // Needs ARFutureImpl
    public mapToARFuture(): ARFuture<T> { // Needs ARFuture interface
        if (this.value !== null) return ARFutureImpl.of(this.value);
        const res = new ARFutureImpl<T>();
        this.once((value: T) => res.tryDone(value)); // Assuming ARFutureImpl is defined later
        return res;
    }

    public isDone(): boolean { return this.value !== null; }
}

// Needs AMFutureBase, AMFuture interface
function createAMFuture<T>(initialValue?: T): AMFuture<T> { // Needs AMFuture interface
    const instance = new AMFutureBase<T>(initialValue);
    const consumerFunction = instance.accept.bind(instance) as AConsumer<T>;

    return Object.assign(consumerFunction, {
        eventConsumer: instance.eventConsumer,
        refresh: instance.refresh.bind(instance),
        set: instance.set.bind(instance),
        map: instance.map.bind(instance),
        once: instance.once.bind(instance),
        toOnce: instance.toOnce.bind(instance),
        addWeak: instance.addWeak.bind(instance),
        add: instance.add.bind(instance),
        getNow: instance.getNow.bind(instance),
        mapToARFuture: instance.mapToARFuture.bind(instance),
        isDone: instance.isDone.bind(instance),
        accept: consumerFunction
    }) as AMFuture<T>; // Needs AMFuture interface
}

// Needs createAMFuture, AMFuture interface
export namespace AMFutureImpl {
    export function completed<T>(value: T): AMFuture<T> { // Needs AMFuture interface
        const res = createAMFuture<T>();
        res.set(value);
        return res;
    }
}


// =============================================================================================
// SECTION 2: future.interfaces.ts (Future Interfaces) - MOVED UP (Definitions before Impl)
// Needs AConsumer, ARunnable, Disposable, Executor, AFunction, ASupplier
// =============================================================================================

export type Tuple2<T1, T2> = [T1, T2];
export type Tuple3<T1, T2, T3> = [T1, T2, T3];

export interface Destroyable {
    destroy(force: boolean): AFuture; // Needs AFuture interface
}

export interface AFutureBase<Self extends AFutureBase<Self>> extends Destroyable {
    waitSuccessful(timeout?: number): boolean;
    waitDone(timeout?: number): boolean;
    onCancel(l: ARunnable): Self;
    onError(l: AConsumer<Error>): Self;
    isFinalStatus(): boolean;
    isError(): boolean;
    error(e: Error): Self;
    getError(): Error | null;
    setError(e: Error): void;
    isNotDone(): boolean;
    isDone(): boolean;
    isCanceled(): boolean;
    cancel(): void;
    timeoutError(seconds: number, text: string): Self;
    timeoutMs(ms: number, task: ARunnable): Self;
    addListener(l: AConsumer<Self>): boolean;
    to(executor: Executor, t: ARunnable): Self;
    to(t: ARunnable): Self;
}

export interface AFuture extends AFutureBase<AFuture> {
    done(): void;
    tryDone(): boolean;
    and(f: AFuture): AFuture;
    apply(t: ARunnable): AFuture;
    mapRFuture<T>(t: ASupplier<T>): ARFuture<T>; // Needs ARFuture interface

    // Перегрузки из AFutureBase
    to(executor: Executor, t: ARunnable): AFuture;
    to(t: ARunnable): AFuture;
    // Новая перегрузка
    to(f: AFuture): AFuture;
}

export interface ARFuture<T> extends AFutureBase<ARFuture<T>> {
    toWithFlag(): ARFutureWithFlag<T>; // Needs ARFutureWithFlag interface
    done(value: T): void;
    tryDone(value: T): boolean;
    get(): T; // Potential blocking call, consider async version
    get(timeout: number): T; // Potential blocking call
    getNow(): T | null;
    getNowElse(elseValue: T): T;

    // --- Исправленные перегрузки 'to' ---
    // (Из AFutureBase)
    to(executor: Executor, t: ARunnable): ARFuture<T>;
    // (Из AFutureBase)
    to(t: ARunnable): ARFuture<T>;
    // (Специфично для ARFuture)
    to(onDone: AConsumer<T>): ARFuture<T>;
    // (Специфично для ARFuture)
    to(onDone: AConsumer<T>, onError: AConsumer<Error>): ARFuture<T>;
    // (Специфично для ARFuture)
    to(f: ARFuture<T>): ARFuture<T>;
    // (Специфично для ARFuture)
    to(f: AFuture): ARFuture<T>;
    // (Специфично для ARFuture)
    to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable): ARFuture<T>;

    toFuture(): AFuture;
    and<T2>(f: ARFuture<T2>): ARFuture<Tuple2<T, T2>>;
    map<E>(f: AFunction<T, E>): ARFuture<E>;
    mapRFuture<E>(f: AFunction<T, ARFuture<E>>): ARFuture<E>;
    apply(c: AConsumer<T> | ARunnable): ARFuture<T>;
    decompose<E>(): ARFuture<E>; // Unsafe, use with caution
    decomposeFuture(): AFuture; // Safer alternative to decompose
}
export interface ARFutureWithFlag<T> extends ARFuture<T> {
    tryRequest(): boolean;
    tryError(error: Error): boolean;
}

// AMFuture interface needs AConsumer, EventConsumer, TaskConsumer, AFunction, ARunnable, ARFuture
export interface AMFuture<T> extends AConsumer<T> {
    eventConsumer: EventConsumer<T>; // Needs EventConsumer
    refresh(): void;
    set(value: T): boolean;
    map<V2>(f: AFunction<T, V2>): AMFuture<V2>;
    once(task: AConsumer<T>, msOrSeconds: number, timeoutTask: ARunnable): void;
    once(t2: TaskConsumer<T>): void; // Needs TaskConsumer
    toOnce(task: AConsumer<T>): void;
    once(task: AConsumer<T>): void;
    addWeak(task: AConsumer<T>): void;
    add(task: AConsumer<T>): void;
    getNow(): T | null;
    mapToARFuture(): ARFuture<T>; // Needs ARFuture
    isDone(): boolean;
}


// =============================================================================================
// SECTION 3: future.implementation.ts (Future Implementations) - MOVED DOWN
// Needs AFutureBase, AFuture, ARFuture, ARFutureWithFlag interfaces
// Needs LogFacade, AConsumer, ARunnable, Executor, Error, ASupplier, Tuple2
// =============================================================================================

enum FutureStatus { PENDING, DONE, ERROR, CANCELED }

abstract class AFutureBaseImpl<Self extends AFutureBase<Self>> implements Destroyable {
    protected status: FutureStatus = FutureStatus.PENDING;
    protected errorValue: Error | null = null;
    protected listeners: AConsumer<Self>[] = [];

    public isFinalStatus(): boolean { return this.status !== FutureStatus.PENDING; }
    public isError(): boolean { return this.status === FutureStatus.ERROR; }
    public isDone(): boolean { return this.status === FutureStatus.DONE; }
    public isCanceled(): boolean { return this.status === FutureStatus.CANCELED; }
    public isNotDone(): boolean { return this.status !== FutureStatus.DONE; }
    public getError(): Error | null { return this.errorValue; }

    public error(e: Error): Self { this.resolve(FutureStatus.ERROR, e); return this as unknown as Self; }
    public setError(e: Error): void { this.error(e); }
    public cancel(): void { this.resolve(FutureStatus.CANCELED); }
    protected resolve(newStatus: FutureStatus, error?: Error): boolean {
        if (this.status !== FutureStatus.PENDING) return false;
        this.status = newStatus;
        if (error) this.errorValue = error;
        const currentListeners = [...this.listeners];
        this.listeners = [];
        currentListeners.forEach(l => {
            try {
                LogFacade.wrap(l as AConsumer<AFutureBase<Self>>)(this as unknown as Self)
            } catch (e) {
                console.error("Error executing future listener:", e);
            }
        });
        return true;
    }

    public addListener(l: AConsumer<Self>): boolean {
        if (this.isFinalStatus()) {
            try {
                l(this as unknown as Self);
            } catch (e) {
                console.error("Error executing immediate future listener:", e);
            }
            return false;
        }
        this.listeners.push(l);
        return true;
    }

    public onCancel(l: ARunnable): Self {
        this.addListener(f => { if (f.isCanceled()) l(); });
        return this as unknown as Self;
    }

    public onError(l: AConsumer<Error>): Self {
        this.addListener(f => { if (f.isError() && f.getError()) l(f.getError()!); });
        return this as unknown as Self;
    }

    // `to` implementation moved to concrete classes
    public abstract to(...args: any[]): Self; // Add abstract method to satisfy base interface

    public waitSuccessful(_timeout?: number): boolean {
        LogFacade.warn("waitSuccessful is not implemented asynchronously in JS.");
        return this.isFinalStatus();
    }
    public waitDone(_timeout?: number): boolean {
        LogFacade.warn("waitDone is not implemented asynchronously in JS.");
        return this.isFinalStatus();
    }

    public timeoutError(seconds: number, text: string): Self {
        setTimeout(() => {
            if (this.isNotDone()) {
                this.error(new Error(`Timeout: ${text} after ${seconds}s`));
            }
        }, seconds * 1000);
        return this as unknown as Self;
    }
    public timeoutMs(ms: number, task: ARunnable): Self {
        setTimeout(() => {
            if (this.isNotDone()) {
                try { task(); } catch (e) { LogFacade.error("Error in future timeout task", e as Error); }
                this.cancel(); // Typically timeout implies cancellation if task doesn't resolve
            }
        }, ms);
        return this as unknown as Self;
    }
    public destroy(_force: boolean): AFuture { this.cancel(); return AFutureImpl.of(); }
}

export class AFutureImpl extends AFutureBaseImpl<AFuture> implements AFuture {
    public done(): void { this.resolve(FutureStatus.DONE); }
    public tryDone(): boolean { return this.resolve(FutureStatus.DONE); }
    public and(f: AFuture): AFuture {
         const res = new AFutureImpl();
         let count = 0;
         let firstError: Error | null = null;
         let canceled = false;
         const checkDone = () => {
             count++;
             if (count === 2 && !res.isFinalStatus()) {
                  if (canceled) res.cancel();
                  else if (firstError) res.error(firstError);
                  else res.tryDone();
             }
         };
         const onError = (e: Error) => { if (!res.isFinalStatus()) { if(!firstError) firstError = e; checkDone(); } };
         const onCancel = () => { if (!res.isFinalStatus()) { canceled = true; checkDone(); } };

         this.to(checkDone).onError(onError).onCancel(onCancel);
         f.to(checkDone).onError(onError).onCancel(onCancel);
         return res;
     }
    public apply(t: ARunnable): AFuture {
         if(this.isDone()) {
              try { t(); } catch(e) { LogFacade.error("Error in AFuture.apply", e as Error); }
         }
         return this; // apply returns the same future
     }
    public mapRFuture<T>(_t: ASupplier<T>): ARFuture<T> {
         const res = new ARFutureImpl<T>();
         this.to(
             () => { try { res.tryDone(_t()); } catch(e) { res.error(e as Error); } }
         ).onError(
             (err: Error) => res.error(err)
         ).onCancel(() => res.cancel());
         return res;
     }

    // ИСПРАВЛЕНО: Раздельные реализации для каждой перегрузки метода to
    public to(executor: Executor, t: ARunnable): AFuture;
    public to(t: ARunnable): AFuture;
    public to(f: AFuture): AFuture;
    public to(...args: any[]): AFuture {
        const first = args[0];
        const second = args[1];

        // Handle: to(f: AFuture)
        if (args.length === 1 && first && typeof (first as AFuture).addListener === 'function') {
             const f = first as AFuture;
             this.addListener(self => {
                 if (self.isDone()) f.tryDone();
                 else if (self.isError()) f.error(self.getError()!);
                 else if (self.isCanceled()) f.cancel();
             });
             return this;
        }

        // Handle: to(executor: Executor, t: ARunnable) or to(t: ARunnable)
        const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
        const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;

        // Ensure we actually received valid arguments for the runnable cases
        if(!taskRunnable) {
             LogFacade.error("Invalid arguments for AFuture.to (runnable)", new Error("Invalid args"), { args });
             throw new Error("Invalid arguments for AFuture.to (runnable)");
        }

        const taskToRun = () => {
             if (this.isDone()) {
                 try { taskRunnable(); } catch(e) { LogFacade.error("Error in future ARunnable task", e as Error); }
             }
        };

        this.addListener(_f => {
            if (executor) {
                 try { executor.execute(taskToRun); } catch(e) { LogFacade.error("Error submitting future task to executor", e as Error); }
            } else {
                taskToRun(); // Execute directly
            }
        });
        return this;
    }

public static of(e?: Error): AFuture {
        const f = new AFutureImpl();
        if (e) {
            f.error(e);
        } else {
            f.done();
        }
        return f;
    }
    public static canceled(): AFuture { const f = new AFutureImpl(); f.cancel(); return f; }
    // Удален дубликат public static of(e: Error)
    public static run(executor: Executor, task: ARunnable): AFuture {
         const f = new AFutureImpl();
         try {
             executor.execute(() => {
                 try {
                      task();
                      f.tryDone();
                 } catch (e) {
                      f.error(e as Error);
                 }
             });
         } catch (e) {
              f.error(e as Error); // Handle executor submission error
         }
         return f;
     }
    public static any(futures: Collection<AFuture>): AFuture {
        const result = new AFutureImpl();
        let completed = false;
        // ИСПРАВЛЕНО: Использовать Array.from для Collection
        const futuresArray = Array.from(futures);

        if (futuresArray.length === 0) {
             result.cancel();
             return result;
        }

        futuresArray.forEach(f => {
             f.to(
                 () => { if (!completed) { completed = true; result.tryDone(); } }
             ).onError(
                 (error: Error) => { if (!completed) { completed = true; result.error(error); } }
             ).onCancel(() => { if (!completed) { completed = true; result.cancel(); } });
        });
        return result;
     }
    public static all(...futures: AFuture[]): AFuture { // Use rest parameter
        const result = new AFutureImpl();
        let count = 0;
        let firstError: Error | null = null;
        let canceled = false;

        if (futures.length === 0) {
             result.tryDone();
             return result;
        }

        futures.forEach(f => {
             f.to(
                 () => {
                     if (result.isFinalStatus()) return;
                     count++;
                     if (count === futures.length) {
                         result.tryDone();
                     }
                 }
             ).onError(
                 (error: Error) => {
                     if (result.isFinalStatus()) return;
                     if (!firstError) firstError = error;
                     result.error(error); // Fail fast on first error
                 }
             ).onCancel(() => {
                 if (result.isFinalStatus()) return;
                 canceled = true;
                 result.cancel(); // Cancel fast
             });
        });
        return result;
     }
}

export class ARFutureImpl<T> extends AFutureBaseImpl<ARFuture<T>> implements ARFuture<T> {
    private value: T | null = null;

    public toWithFlag(): ARFutureWithFlag<T> {
        const flagFuture = new ARFutureWithFlagImpl<T>();
        this.to(flagFuture as unknown as ARFuture<T>); // Pipe result to flagFuture
        // If already resolved, pipe immediately
        if (this.isDone()) flagFuture.tryDone(this.value as T);
        else if (this.isError()) flagFuture.tryError(this.getError()!);
        else if (this.isCanceled()) flagFuture.cancel();
        return flagFuture;
    }

    public done(value: T): void { this.resolve(FutureStatus.DONE, undefined); this.value = value; } // Set value *after* resolve
    public tryDone(value: T): boolean {
        const resolved = this.resolve(FutureStatus.DONE, undefined);
        if(resolved) this.value = value; // Set value only if resolved now
        return resolved;
    }
    public get(_timeout?: number): T {
        if (this.status === FutureStatus.DONE) return this.value as T;
        throw new Error("Future not done (get() called)");
    }
    public getNow(): T | null { return this.isDone() ? this.value as T : null; }
    public getNowElse(elseValue: T): T { return this.isDone() ? this.value as T : elseValue; }
    public toFuture(): AFuture {
        const f = new AFutureImpl();
        this.to(f); // Use AFuture.to(AFuture) overload
        return f;
     }
    public and<T2>(f2: ARFuture<T2>): ARFuture<Tuple2<T, T2>> {
        const res = new ARFutureImpl<Tuple2<T, T2>>();
        // ИСПРАВЛЕНО: ARFutureImpl.all теперь принимает только массив
        ARFutureImpl.all([this, f2] as Array<ARFuture<any>>).to(
            (value: any[]) => res.tryDone(value as Tuple2<T, T2>), // Values from all result array
            (err: Error) => res.error(err)
        ).onCancel(() => res.cancel());
        return res;
    }
    public map<E>(func: AFunction<T, E>): ARFuture<E> {
        const res = new ARFutureImpl<E>();
        this.to(
            (value: T) => { try { res.tryDone(func(value)); } catch(e) { res.error(e as Error); } },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }
    public mapRFuture<E>(func: AFunction<T, ARFuture<E>>): ARFuture<E> {
        const res = new ARFutureImpl<E>();
        this.to(
            (value: T) => {
                try {
                     const nextFuture = func(value);
                     nextFuture.to(res); // Pipe result directly
                 } catch(e) {
                     res.error(e as Error);
                 }
             },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
    }

    public apply(c: AConsumer<T> | ARunnable): ARFuture<T> {
        this.to((value: T) => { // Use 'to' to ensure it runs only on success
             try {
                if (typeof c === 'function' && c.length === 1) {
                    (c as AConsumer<T>)(value);
                } else {
                    (c as ARunnable)();
                }
             } catch(e) {
                 LogFacade.error("Error in ARFuture.apply callback", e as Error);
             }
        });
        return this;
    }

    public decompose<E>(): ARFuture<E> {
        LogFacade.warn("ARFuture.decompose is unsafe and likely indicates a design issue.");
        return this as unknown as ARFuture<E>;
    }
    public decomposeFuture(): AFuture {
        return this as unknown as AFuture;
    }

    // ИСПРАВЛЕНО: Раздельные реализации для каждой перегрузки метода to
    public to(executor: Executor, t: ARunnable): ARFuture<T>;
    public to(t: ARunnable): ARFuture<T>;
    public to(onDone: AConsumer<T>): ARFuture<T>;
    public to(onDone: AConsumer<T>, onError: AConsumer<Error>): ARFuture<T>;
    public to(f: ARFuture<T>): ARFuture<T>;
    public to(f: AFuture): ARFuture<T>;
    public to(task: AConsumer<T>, timeout: number, onTimeout: ARunnable): ARFuture<T>;
    public to(...args: any[]): ARFuture<T> {
        const first = args[0];
        const second = args[1];
        const third = args[2];

        // --- ARFuture Specific Overloads ---
        if (typeof first === 'function' && first.length === 1 && args.length === 1) { // to(onDone)
            this.addListener(f => { if (f.isDone()) (first as AConsumer<T>)(f.getNow()!); });
            return this;
        }
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'function' && second.length === 1 && args.length === 2) { // to(onDone, onError)
            this.addListener(f => {
                if (f.isDone()) (first as AConsumer<T>)(f.getNow()!);
                else if (f.isError() && f.getError()) (second as AConsumer<Error>)(f.getError()!);
            });
            return this;
        }
        else if (typeof first === 'function' && first.length === 1 && typeof second === 'number' && typeof third === 'function' && args.length === 3) { // to(task, timeout, onTimeout)
            this.addListener(f => { if (f.isDone()) (first as AConsumer<T>)(f.getNow()!); });
            LogFacade.warn("ARFuture.to with timeout does not implement timeout logic in this version.");
            return this;
        }
        else if (first && typeof (first as AFuture).addListener === 'function' && args.length === 1) { // to(f: Future)
            const f = first as AFuture;
            this.addListener(self => {
                if (self.isDone()) {
                    const fAsArFuture = f as unknown as ARFuture<T>;
                    if (fAsArFuture.tryDone && typeof fAsArFuture.tryDone === 'function' && fAsArFuture.tryDone.length === 1) {
                        fAsArFuture.tryDone(self.getNow()!);
                    } else { f.tryDone(); }
                } else if (self.isError()) { f.error(self.getError()!); }
                else if (self.isCanceled()) { f.cancel(); }
            });
            return this;
        }

        // --- Base Class Overloads (ARunnable) ---
        if ((typeof first === 'function' && first.length === 0) || (typeof first === 'object' && first !== null && typeof (first as Executor).execute === 'function')) {
            const taskRunnable = (typeof first === 'function' ? first : second) as ARunnable;
            const executor = (typeof first !== 'function' ? first : undefined) as Executor | undefined;

            // Ensure we actually received valid arguments for the runnable cases
            if(!taskRunnable) {
                 LogFacade.error("Invalid arguments for ARFuture.to (runnable)", new Error("Invalid args"), { args });
                 throw new Error("Invalid arguments for ARFuture.to (runnable)");
            }

            const taskToRun = () => {
                 if (this.isDone()) {
                     try { taskRunnable(); } catch(e) { LogFacade.error("Error in future ARunnable task", e as Error); }
                 }
            };

            this.addListener(_f => {
                if (executor) {
                     try { executor.execute(taskToRun); } catch(e) { LogFacade.error("Error submitting future task to executor", e as Error); }
                } else {
                    taskToRun();
                }
            });
            return this;
        }

        LogFacade.error("Invalid arguments for ARFuture.to", new Error("Invalid args"), { args });
        throw new Error("Invalid arguments for ARFuture.to");
    }

    public static of<T>(value?: T): ARFuture<T> { const f = new ARFutureImpl<T>(); if (value !== undefined) f.done(value as T); return f; }
    public static canceled<T>(): ARFuture<T> { const f = new ARFutureImpl<T>(); f.cancel(); return f; }
    public static ofThrow<T>(throwable: Error): ARFuture<T> { const f = new ARFutureImpl<T>(); f.error(throwable); return f; }
    public static run<T>(executor: Executor, task: ASupplier<T>): ARFuture<T> {
         const f = new ARFutureImpl<T>();
         try {
             executor.execute(() => {
                 try { f.tryDone(task()); } catch (e) { f.error(e as Error); }
             });
         } catch(e) { f.error(e as Error); }
         return f;
     }

    public static any<T>(futures: Collection<ARFuture<T>>): ARFuture<T> {
        const result = new ARFutureImpl<T>();
        // ИСПРАВЛЕНО: Использовать Array.from
        const futuresArray = Array.from(futures);
        if (futuresArray.length === 0) { result.cancel(); return result; }
        let completed = false;
        futuresArray.forEach(f => {
             f.to(
                 (value: T) => { if (!completed && result.isNotDone()) { completed = true; result.tryDone(value); } },
                 (error: Error) => { if (!completed && result.isNotDone()) { completed = true; result.error(error); } }
             ).onCancel(() => { if (!completed && result.isNotDone()) { completed = true; result.cancel(); } });
        });
        return result;
    }

    // ИСПРАВЛЕНО: Перегрузка all(T1, T2) удалена, т.к. ее невозможно корректно реализовать
    //            без изменения сигнатуры all(Array). Оставлена только all(Array).
    public static all<T>(list: Array<ARFuture<T>>): ARFuture<Array<T>>;
    public static all<T>(list: Array<ARFuture<T>>): ARFuture<Array<T>> {
        const futures = list;
        if (futures.length === 0) {
             const result = new ARFutureImpl<T[]>();
             result.tryDone([]);
             return result;
        }
        const result = new ARFutureImpl<T[]>();
        const results: T[] = new Array(futures.length);
        let count = 0;
        let firstError: Error | null = null;

        futures.forEach((f, index) => {
             f.to(
                 (value: T) => {
                     if (result.isFinalStatus()) return;
                     results[index] = value;
                     count++;
                     if (count === futures.length) result.tryDone(results);
                 },
                 (error: Error) => {
                     if (result.isFinalStatus()) return;
                     if (!firstError) firstError = error;
                     result.error(error); // Fail fast
                 }
             ).onCancel(() => { if (result.isNotDone()) result.cancel(); }); // Cancel fast
        });
        return result;
    }

    public static map<T1, T2, R>(f1: ARFuture<T1>, f2: ARFuture<T2>, task: A2Function<T1, T2, R>): ARFuture<R> {
        // ИСПРАВЛЕНО: Используем all(Array)
        return ARFutureImpl.all([f1, f2] as Array<ARFuture<any>>).map(([v1, v2]) => task(v1, v2));
     }
    public static mapToFuture<T1, T2>(f1: ARFuture<T1>, f2: ARFuture<T2>, task: A2Function<T1, T2, AFuture>): AFuture {
        const res = new AFutureImpl();
        // ИСПРАВЛЕНО: Используем all(Array)
        ARFutureImpl.all([f1, f2] as Array<ARFuture<any>>).to(
            ([v1, v2]: [T1, T2]) => {
                try {
                     const nextFuture = task(v1, v2);
                     nextFuture.to(res); // Pipe result
                 } catch(e) { res.error(e as Error); }
            },
            (error: Error) => res.error(error)
        ).onCancel(() => res.cancel());
        return res;
     }

}

export class ARFutureWithFlagImpl<T> extends ARFutureImpl<T> implements ARFutureWithFlag<T> {
    private requested: boolean = false;
    public tryRequest(): boolean {
        if (this.isFinalStatus() || this.requested) return false;
        this.requested = true;
        return true;
    }
    public tryError(error: Error): boolean {
        // Allow erroring even if already done/canceled? Original Java might allow this.
        // Let's stick to standard resolve logic via error() for now.
        return this.error(error) === this; // error() returns Self, returns true if status changed
    }
    // No need to redeclare 'to'
}

// =============================================================================================
// SECTION 11: RCollections Interfaces & Implementation - MOVED DOWN
// Needs AFuture, ARFuture, ARFutureWithFlag, EventConsumer, LogFacade, RCol types
// =============================================================================================

// --- Interfaces ---
export interface RCollection<T> extends Iterable<T> {
    // Методы из RCollection.java
    readonly forAdd: EventConsumer<T>;
    readonly forRemove: EventConsumer<T>;
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2>;

    // Методы из Java Collection<T>
    readonly size: number;
    isEmpty(): boolean;
    contains(o: any): boolean;
    iterator(): IterableIterator<T>; // ИСПРАВЛЕНО: Добавлен iterator()
    toArray(): any[];
    toArray<U>(a: U[]): U[];
    add(e: T): boolean;
    remove(o: any): boolean;
    containsAll(c: Collection<any>): boolean; // Используем TS тип Collection
    addAll(c: Collection<T>): boolean;
    removeAll(c: Collection<any>): boolean;
    retainAll(c: Collection<any>): boolean;
    clear(): void;
    [Symbol.iterator](): IterableIterator<T>;
}
export namespace RCollection {
    export interface Update<T> {
        newValue: T;
        oldValue: T;
    }
}

// =============================================================================================
// ИСПРАВЛЕНИЕ 1: RSet теперь явно определяет обе перегрузки map с возвратом RSet<T2>
// =============================================================================================
export interface RSet<T> extends RCollection<T> {
    // Re-declare map from RCollection but change return type
    map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RSet<T2>; // <-- Change to RSet<T2>

    // Add the new overload
    map<T2>(f: AFunction<T, T2>): RSet<T2>;

    // Other RSet methods...
    addAndRemove(s: Set<T>): boolean;
    toMap<K>(keyGetter: AFunction<T, K>): RMap<K, T>;
    link<T2>(other: RSet<T2>, f: AFunction<T, T2>, back: AFunction<T2, T>): void;
    link(other: RSet<T>): void;
}

type MapContract<K, V> = Omit<Map<K, V>, 'values' | 'keys' | 'entries' | 'set' | 'clear' | 'delete'>;

export interface RMap<K, V> extends MapContract<K, V>, Destroyable {
    readonly size: number;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this; // ИСПРАВЛЕНО: Возвращаемый тип this (соответствует JS Map)
    delete(key: K): boolean;
    clear(): void;

    values(): RCollection<V> & Iterable<V> & { readonly size: number }; // Special return type
    keySet(): RSet<K>;
    entrySet(): RSet<RMap.Entry<K, V>>;

    forUpdate(): EventConsumer<RMap.Update<K, V>>; // ИСПРАВЛЕНО: Сделано методом
    forRemove(): EventConsumer<RMap.Entry<K, V>>; // ИСПРАВЛЕНО: Сделано методом

    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    [Symbol.iterator](): IterableIterator<[K, V]>;

    // Methods from Java not on JS Map
    mapKeyFuture<K2>(vToK2: AFunction<V, K2>, vToK: AFunction<K2, K>): RFMap<K2, V>;
    mapValFuture<V2>(vToV2: AFunction<V, V2>, v2ToV: AFunction<V2, V>): RFMap<K, V2>;
    mapVal<V2>(v1ToV2: AFunction<V, V2>, v2ToV?: AFunction<V2, V>): RMap<K, V2>;
    link(other: RMap<K, V>): void;
    mapToFutures(): RFMap<K, V>; // This seems specific
}

export namespace RMap {
    export interface Entry<K, V> {
        key: K;
        value: V;
    }
    export interface Update<K, V> {
        key: K;
        newValue: V;
        oldValue: V;
    }
}

export interface RFMap<K, V> extends RMap<K, ARFutureWithFlag<V>> {
    // RFMap specific methods if any
}

export interface BMap<K, V> extends RFMap<K, V> {
    getFuture(key: K): ARFutureWithFlag<V>;
    getPendingRequests(): Set<K>;
    putResolved(key: K, value: V): void;
    putError(key: K, error: Error): void;
    forValueUpdate(): EventConsumer<RMap.Update<K, V>>; // Overrides RFMap/RMap?
    getRequestsFor(elementType: any, sender: any): K[];
    isRequests(): boolean;
    isRequestsFor(sender: any): boolean;
}

// --- Implementation ---
class ConcurrentHashMapWithDefault<K, V> extends Map<K, V> {
    constructor(private readonly defaultValueSupplier: (key: K) => V, _initialCapacity?: number) { super(); } // Optional capacity
    get(key: K): V {
        if (super.has(key)) { return super.get(key)!; }
        const newValue = this.defaultValueSupplier(key);
        super.set(key, newValue);
        return newValue;
    }
}
class ConcurrentHashSet<T> extends Set<T> { } // Basic Set wrapper
class WeakConcurrentHashMap<K, V> extends Map<K, V> {
    // JS Maps hold strong references. Real WeakMap has limitations (keys must be objects).
    // This is just a Map alias for now. Real implementation needs WeakRef/FinalizationRegistry.
    constructor() {
        super();
        LogFacade.warn("WeakConcurrentHashMap is not truly weak in this JS implementation.");
    }
}
class ObjectArrayList<T> extends Array<T> { toArray(): T[] { return Array.from(this); } }

// =============================================================================================
// УСТАРЕВШИЕ ЗАГЛУШКИ (StubRCollection / StubRSet)
// Оставлены для обратной совместимости, если они где-то используются.
// Новые реализации RCollectionBySrc / RSetBySrc находятся ниже.
// =============================================================================================
class StubRCollection<T> implements RCollection<T> {
    public readonly forAdd: EventConsumer<T>;
    public readonly forRemove: EventConsumer<T>;
    protected readonly data: Array<T>;

    constructor(...items: T[]) {
        this.data = [...items];
        this.forAdd = new EventConsumer<T>();
        this.forRemove = new EventConsumer<T>();
    }

    map<T2>(f: AFunction<T, T2>, _f2: AFunction<T2, T>): RCollection<T2> {
        LogFacade.warn("StubRCollection.map() is not implemented (stub mapping)");
        const mappedData = this.data.map(f);
        return new StubRCollection<T2>(...mappedData);
    }

    get size(): number { return this.data.length; }
    isEmpty(): boolean { return this.data.length === 0; }
    contains(o: any): boolean { return this.data.includes(o); }

    // ИСПРАВЛЕНО: Добавлен iterator() для соответствия интерфейсу
    iterator(): IterableIterator<T> { return this.data.values(); }
    [Symbol.iterator](): IterableIterator<T> { return this.data[Symbol.iterator](); }

    toArray(): any[];
    toArray<U>(_a?: U[]): U[] | any[] {
        return [...this.data] as any;
    }

    add(e: T): boolean {
        this.data.push(e);
        return true;
    }
    remove(o: any): boolean {
        const index = this.data.indexOf(o);
        if (index > -1) {
            this.data.splice(index, 1);
            return true;
        }
        return false;
    }
    containsAll(c: Collection<any>): boolean {
        const arr = Array.isArray(c) ? c : Array.from(c);
        for (const item of arr) {
            if (!this.contains(item)) return false;
        }
        return true;
    }
    addAll(c: Collection<T>): boolean {
        let changed = false;
        for (const item of c) {
            if (this.add(item)) {
                changed = true;
            }
        }
        return changed;
    }
    removeAll(c: Collection<any>): boolean {
        let changed = false;
        for (const item of c) {
            if (this.remove(item)) {
                changed = true;
            }
        }
        return changed;
    }
    retainAll(c: Collection<any>): boolean {
        const cSet = new Set(c as any);
        let changed = false;
        for (let i = this.data.length - 1; i >= 0; i--) {
            if (!cSet.has(this.data[i])) {
                this.data.splice(i, 1);
                changed = true;
            }
        }
        return changed;
    }
    clear(): void {
        this.data.length = 0;
    }
}

class StubRSet<T> extends StubRCollection<T> implements RSet<T> {
    constructor(...items: T[]) {
        super(...new Set(items).values());
    }
    override add(e: T): boolean {
        if (this.contains(e)) {
            return false;
        }
        return super.add(e);
    }
    addAndRemove(_s: Set<T>): boolean {
        LogFacade.warn("StubRSet.addAndRemove() is not implemented");
        return false;
    }
    toMap<K>(_keyGetter: AFunction<T, K>): RMap<K, T> {
        LogFacade.warn("StubRSet.toMap() is not implemented");
        return {} as RMap<K, T>;
    }
    link<T2>(_other: RSet<T2> | RSet<T>, _f?: AFunction<T, T2>, _back?: AFunction<T2, T>): void {
        LogFacade.warn("StubRSet.link() is not implemented");
    }
    map<T2>(f: AFunction<T, T2>, back: AFunction<T2, T>): RSet<T2>;
    map<T2>(f: AFunction<T, T2>): RSet<T2>;
    map<T2>(f: AFunction<T, T2>, _back?: AFunction<T2, T>): RSet<T2> {
        LogFacade.warn("StubRSet.map() stub implementation called.");
        const mappedData = this.data.map(f);
        return new StubRSet<T2>(...mappedData);
    }
}


// =============================================================================================
// SECTION 11.1: RCollection/RSet/RMap "BySrc" Implementations (NEW CODE)
// (Портировано из RCollectionBySrc.java, RSetBySrc.java, RMapBySrc.java и default-методов)
// =============================================================================================

/**
 * Базовая реализация RCollection, которая оборачивает стандартную коллекцию JS (Set или Array)
 * и корректно вызывает события forAdd/forRemove.
 * Порт RCollectionBySrc.java и RCollection.java (default методы).
 */
export class RCollectionBySrc<T> implements RCollection<T> {
    public readonly forAdd: EventConsumer<T>;
    public readonly forRemove: EventConsumer<T>;
    protected readonly src: Collection<T>; // T[] | Set<T> | RCollection<T> (но в конструкторе сужается до T[] | Set<T>)

    constructor(src: T[] | Set<T>) { // Принимаем только базовые типы
        this.src = src;
        this.forAdd = new EventConsumer<T>();
        this.forRemove = new EventConsumer<T>();
    }

    // --- Базовые методы Collection ---

    public get size(): number {
        return Array.isArray(this.src) ? this.src.length : (this.src as Set<T>).size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public contains(o: any): boolean {
        if (Array.isArray(this.src)) {
            return this.src.includes(o);
        }
        return (this.src as Set<T>).has(o);
    }

    // ИСПРАВЛЕНО: Добавлены оба 'iterator' и '[Symbol.iterator]' для полного соответствия
    public iterator(): IterableIterator<T> {
        return this.src[Symbol.iterator]();
    }

    public [Symbol.iterator](): IterableIterator<T> {
        return this.src[Symbol.iterator]();
    }

    public toArray(): any[];
    public toArray<U>(a: U[]): U[];
    public toArray<U>(_a?: U[]): U[] | any[] {
        // Игнорируем `a` по аналогии со StubRCollection, т.к. в JS это нетипично
        return Array.from(this.src);
    }

    public add(e: T): boolean {
        if (Array.isArray(this.src)) {
            // Для массива просто добавляем
            this.src.push(e);
            this.forAdd.fire(e);
            return true;
        } else {
            // Для Set проверяем, был ли элемент *действительно* добавлен
            if (!(this.src as Set<T>).has(e)) {
                (this.src as Set<T>).add(e);
                this.forAdd.fire(e);
                return true;
            }
            return false;
        }
    }

    public remove(o: any): boolean {
        let removed = false;
        if (Array.isArray(this.src)) {
            const index = this.src.indexOf(o);
            if (index > -1) {
                this.src.splice(index, 1);
                removed = true;
            }
        } else {
            removed = (this.src as Set<T>).delete(o);
        }

        if (removed) {
            this.forRemove.fire(o as T); // o *должен* быть T
            return true;
        }
        return false;
    }

    // --- Портированные default-методы из RCollection.java ---

    public containsAll(c: Collection<any>): boolean {
        // ИСПРАВЛЕНО: Использовать for..of для Collection
        for (const item of c) {
            if (!this.contains(item)) return false;
        }
        return true;
    }

    public addAll(c: Collection<T>): boolean {
        let res = false;
        // ИСПРАВЛЕНО: 'c' может быть RCollection, используем for...of
        for (const v of c) {
            res = this.add(v) || res; // `|=` -> `||`
        }
        return res;
    }

    public removeAll(c: Collection<any>): boolean {
        let res = false;
        for (const v of c) {
            res = this.remove(v) || res;
        }
        return res;
    }

    /**
     * Переопределенная реализация (default из RCollection.java использует it.remove(),
     * который не поддерживается в JS-итераторах).
     */
    public clear(): void {
        if (this.isEmpty()) return;

        const items = Array.from(this.src); // Снимок

        if (Array.isArray(this.src)) {
            this.src.length = 0;
        } else {
            (this.src as Set<T>).clear();
        }

        for (const item of items) {
            this.forRemove.fire(item);
        }
    }

    /**
     * Переопределенная реализация (default из RCollection.java использует it.remove()).
     */
    public retainAll(c: Collection<any>): boolean {
        // ИСПРАВЛЕНО: Преобразование Collection в Set
        const cSet = new Set<any>();
        for(const item of c) {
            cSet.add(item);
        }

        let modified = false;
        const itemsToRemove: T[] = [];

        for (const item of this.src) {
            if (!cSet.has(item)) {
                itemsToRemove.push(item);
                modified = true;
            }
        }

        if (modified) {
            for (const item of itemsToRemove) {
                this.remove(item); // this.remove() вызовет forRemove.fire()
            }
        }
        return modified;
    }

    public map<T2>(f: AFunction<T, T2>, f2: AFunction<T2, T>): RCollection<T2> {
        const self = this;
        const res = new RCollectionBySrc<T2>([]); // Новая коллекция

        // Логика подписки из RCollection.java
        self.forAdd.add(v => res.add(f(v)));
        self.forRemove.add(v => res.remove(f(v)));
        res.forAdd.add(v => self.add(f2(v)));
        res.forRemove.add(v => self.remove(f2(v)));

        // Инициализация
        res.addAll(Array.from(self).map(f));

        return res;
    }
}


/**
 * Реализация RSet, которая оборачивает стандартный JS Set.
 * Порт RSetBySrc.java и RSet.java (default методы).
 */
export class RSetBySrc<T> extends RCollectionBySrc<T> implements RSet<T> {

    // ИСПРАВЛЕНО: Удалена повторная декларация 'src'.
    // Тип уточняется в конструкторе и при использовании через 'this.src as Set<T>'

    constructor(src: Set<T>) {
        super(src);
        // this.src из RCollectionBySrc уже установлен как Set<T>
    }

    /**
     * Переопределяем 'add', чтобы вызывать forAdd только для новых элементов.
     */
    override add(e: T): boolean {
        // Используем type assertion для доступа к методам Set
        const srcSet = this.src as Set<T>;
        if (!srcSet.has(e)) {
            srcSet.add(e);
            this.forAdd.fire(e);
            return true;
        }
        return false;
    }

    // --- Портированные default-методы из RSet.java ---

    public addAndRemove(s: Set<T>): boolean {
        let res = this.addAll(s);
        const itemsToRemove: T[] = [];
        // Используем type assertion
        for (const item of this.src as Set<T>) {
            if (!s.has(item)) {
                itemsToRemove.push(item);
            }
        }
        if (itemsToRemove.length > 0) {
            res = true;
            for (const item of itemsToRemove) {
                this.remove(item); // Используем this.remove() для вызова событий
            }
        }
        return res;
    }

    public toMap<K>(keyGetter: AFunction<T, K>): RMap<K, T> {
        // RCol.map() теперь возвращает RMapBySrc, который нам и нужен
        const res = AetherRCol.map<K, T>(); // Используем AetherRCol

        this.forAdd.add(v => res.set(keyGetter(v), v));
        this.forRemove.add(v => res.delete(keyGetter(v)));

        // Обратная связь
        res.forUpdate().add(e => {
            if (e.newValue != null) this.add(e.newValue);
            if (e.oldValue != null && e.oldValue !== e.newValue) this.remove(e.oldValue);
        });
        res.forRemove().add(e => {
            if (e.value != null) {
                // В Java-коде здесь 'this.add(e.getValue())', что кажется ошибкой.
                // Логика toMap: если из map удалили, надо удалить из set
                this.remove(e.value);
            }
        });

        // Первичная загрузка
        // Используем type assertion
        for(const v of this.src as Set<T>) {
            res.set(keyGetter(v), v);
        }

        return res;
    }

    public link(other: RSet<T>): void;
    public link<T2>(other: RSet<T2>, f: AFunction<T, T2>, back: AFunction<T2, T>): void;
    public link<T2>(other: RSet<T2> | RSet<T>, f?: AFunction<T, T2>, back?: AFunction<T2, T>): void {
        if (f && back) {
            // Перегрузка <T2>
            const otherRSet = other as RSet<T2>;
            this.forAdd.add(v => otherRSet.add(f(v)));
            this.forRemove.add(v => otherRSet.remove(f(v)));
            otherRSet.forAdd.add(v => this.add(back(v)));
            otherRSet.forRemove.add(v => this.remove(back(v)));

            // Инициализация
            for (const e of otherRSet) { this.add(back(e)); }
            for (const e of this) { otherRSet.add(f(e)); }

        } else {
            // Перегрузка <T>
            const otherRSet = other as RSet<T>;
            this.forAdd.add(v => otherRSet.add(v));
            this.forRemove.add(v => otherRSet.remove(v));
            otherRSet.forAdd.add(v => this.add(v));
            otherRSet.forRemove.add(v => this.remove(v));

            // Инициализация
            this.addAll(otherRSet);
            otherRSet.addAll(this);
        }
    }

    // Реализация RSet.map (две перегрузки)
    public map<T2>(f: AFunction<T, T2>, back: AFunction<T2, T>): RSet<T2>;
    public map<T2>(f: AFunction<T, T2>): RSet<T2>;
    public map<T2>(f: AFunction<T, T2>, back?: AFunction<T2, T>): RSet<T2> {
        const self = this;

        if (back) {
            // --- Логика RSet.map(f, back) из RSet.java ---
            // (В Java-коде она создает анонимный класс, но link() делает то же самое)
            const res = AetherRCol.set<T2>();
            this.link(res, f, back);
            return res;

        } else {
            // --- Логика RSet.map(f) из RSet.java ---
            const res = AetherRCol.set<T2>(); // Используем AetherRCol.set()
            self.forAdd.add(v => {
                res.add(f(v));
            });
            self.forRemove.add(v => {
                res.remove(f(v));
            });
            // Инициализация
            // Используем type assertion
            for(const v of self.src as Set<T>) {
                res.add(f(v));
            }
            return res;
        }
    }
}


/**
 * Реализация RMap, которая оборачивает стандартный JS Map.
 * Порт RMapBySrc.java и RMap.java (default методы).
 */
export class RMapBySrc<K, V> implements RMap<K, V> {

    // ИСПРАВЛЕНО: Сделано private
    private readonly _forUpdate: EventConsumer<RMap.Update<K, V>>;
    private readonly _forRemove: EventConsumer<RMap.Entry<K, V>>;
    private readonly src: Map<K, V>;

    // Для соответствия интерфейсу Map
    public readonly [Symbol.toStringTag]: string = 'Map';

    constructor(src: Map<K, V>) {
        this.src = src;
        this._forUpdate = new EventConsumer<RMap.Update<K, V>>();
        this._forRemove = new EventConsumer<RMap.Entry<K, V>>();
    }

    // --- Базовые методы Map ---

    public get(key: K): V | undefined {
        return this.src.get(key);
    }

    // ИСПРАВЛЕНО: Возвращаемый тип this для соответствия интерфейсу RMap
    public set(key: K, value: V): this {
        const old = this.src.get(key);
        this.src.set(key, value);
        if (old !== value) {
            this._forUpdate.fire({ key, newValue: value, oldValue: old } as RMap.Update<K,V>);
        }
        return this; // Соответствует JS Map.set и RMap interface
    }

    public delete(key: K): boolean {
        const old = this.src.get(key);
        const removed = this.src.delete(key);
        if (removed) {
            this._forRemove.fire({ key, value: old } as RMap.Entry<K,V>);
        }
        return removed;
    }

    public has(key: K): boolean {
        return this.src.has(key);
    }

    public get size(): number {
        return this.src.size;
    }

    public isEmpty(): boolean {
        return this.src.size === 0;
    }

    // @ts-ignore - 'key' (Object) vs 'key' (K)
    public containsKey(key: K): boolean {
        return this.src.has(key);
    }

    // @ts-ignore - 'value' (Object) vs 'value' (V)
    public containsValue(value: V): boolean {
        for (const v of this.src.values()) {
            if (v === value) return true;
        }
        return false;
    }

    public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
        this.src.forEach(callbackfn, thisArg);
    }

    public [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.src[Symbol.iterator]();
    }

    public entries(): IterableIterator<[K, V]> {
        return this.src.entries();
    }

    public keys(): IterableIterator<K> {
        return this.src.keys();
    }

    // --- RMap/RCollection интерфейсы ---

    /**
     * Возвращает RSet, обернутый в *копию* ключей.
     */
    public keySet(): RSet<K> {
        return new RSetBySrc(new Set(this.src.keys()));
    }

    /**
     * Возвращает RCollection, обернутую в *копию* значений.
     */
    public values(): RCollection<V> & Iterable<V> & { readonly size: number; } {
        return new RCollectionBySrc(Array.from(this.src.values()));
    }

    /**
     * Возвращает RSet, обернутый в *копию* записей.
     */
    public entrySet(): RSet<RMap.Entry<K, V>> {
        const entries = Array.from(this.src.entries()).map(([key, value]) => ({ key, value }));
        return new RSetBySrc(new Set(entries));
    }


    // --- Портированные default-методы из RMap.java ---

    // ИСПРАВЛЕНО: Реализация методов интерфейса
    public forUpdate(): EventConsumer<RMap.Update<K, V>> {
        return this._forUpdate;
    }
    public forRemove(): EventConsumer<RMap.Entry<K, V>> {
        return this._forRemove;
    }

    /**
     * Порт RMap.java default clear().
     */
    public clear(): void {
        if (this.isEmpty()) return;

        const entries = Array.from(this.src.entries()); // Снимок
        this.src.clear();

        for (const [key, value] of entries) {
            this._forRemove.fire({ key, value });
        }
    }

    /**
     * Порт RMap.java default putAll().
     */
    // @ts-ignore
    public putAll(m: Map<K, V>): void {
        for (const [key, value] of m.entries()) {
            this.set(key, value); // Используем this.set() для вызова событий
        }
    }

    public mapToFutures(): RFMap<K, V> {
        // Эта реализация по умолчанию из RMap.java сложна.
        // Делегируем RCol.mapToFutures, который уже портирован в aether.core.ts
        // и использует BMapImpl.
        return AetherRCol.mapToFutures(this);
    }

    public link(other: RMap<K, V>): void {
        this.forUpdate().add(e => other.set(e.key, e.newValue));
        this.forRemove().add(e => other.delete(e.key));
        other.forUpdate().add(e => this.set(e.key, e.newValue));
        other.forRemove().add(e => this.delete(e.key));

        // Инициализация
        other.forEach((v, k) => this.set(k, v));
        this.forEach((v, k) => other.set(k, v));
    }

    public mapVal<V2>(v1ToV2: AFunction<V, V2>, v2ToV?: AFunction<V2, V>): RMap<K, V2> {
        // AFunction.stub() не существует, создадим заглушки
        const stub = (v: any) => v;
        const stubThrow = (_v: any) => { throw new Error("UnsupportedOperationException"); };

        const k1ToK2 = stub as AFunction<K, K>;
        const k2ToK1 = stub as AFunction<K, K>;
        const v2ToV1 = v2ToV || stubThrow;

        return this.map(k1ToK2, k2ToK1, v1ToV2, v2ToV1);
    }

    public map<K2, V2>(
        k1ToK2: AFunction<K, K2>, k2ToK1: AFunction<K2, K>,
        v1ToV2: AFunction<V, V2>, v2ToV1: AFunction<V2, V>
    ): RMap<K2, V2> {
        const self = this;
        // Используем RMapBySrc для новой карты
        const res = new RMapBySrc<K2, V2>(new Map());

        self.forUpdate().add(u => {
            res.forUpdate().fire({
                key: k1ToK2(u.key),
                newValue: v1ToV2(u.newValue),
                oldValue: v1ToV2(u.oldValue)
            } as RMap.Update<K2, V2>);
        });
        self.forRemove().add(u => {
            res.forRemove().fire({
                key: k1ToK2(u.key),
                value: v1ToV2(u.value)
            } as RMap.Entry<K2, V2>);
        });

        // Обратная связь
        res.forUpdate().add(u => {
            self.set(k2ToK1(u.key), v2ToV1(u.newValue));
        });
        res.forRemove().add(u => {
            self.delete(k2ToK1(u.key));
        });

        // Инициализация
        self.forEach((v, k) => {
            res.set(k1ToK2(k), v1ToV2(v));
        });

        return res;
    }

    public mapKeyFuture<K2>(..._args: any[]): RFMap<K2, V> {
         LogFacade.error(new Error("RMapBySrc.mapKeyFuture() is not implemented."));
         return {} as RFMap<K2, V>;
    }
    public mapValFuture<V2>(..._args: any[]): RFMap<K, V2> {
         LogFacade.error(new Error("RMapBySrc.mapValFuture() is not implemented."));
         return {} as RFMap<K, V2>;
    }

    // (Метод destroy() из Destroyable)
    public destroy(_force: boolean): AFuture {
        this.clear();
        this._forUpdate.listeners.clear(); // Используем .listeners.clear()
        this._forRemove.listeners.clear();
        return AFutureImpl.of();
    }
}


export class BMapImpl<K, V> implements BMap<K, V> {
    public readonly [Symbol.toStringTag]: string = 'Map';

    private Sender: { new(allRequests: Set<K>): { requests: Set<K>, extract(elementType: any): K[] } };
    private readonly allRequests: Set<K> = new ConcurrentHashSet<K>();
    // ИСПРАВЛЕНО: valueUpdate -> _forValueUpdate (private)
    private readonly _forValueUpdate: EventConsumer<RMap.Update<K, V>> = new EventConsumer<RMap.Update<K, V>>();
    private readonly senders: Map<any, { requests: Set<K>, extract(elementType: any): K[] }> = new WeakConcurrentHashMap<any, any>();
    private readonly data: ConcurrentHashMapWithDefault<K, ARFutureWithFlag<V>>;

    // ИСПРАВЛЕНО: Добавлены private EventConsumers для forUpdate/forRemove
    private readonly _forUpdate: EventConsumer<RMap.Update<K, ARFutureWithFlag<V>>>;
    private readonly _forRemove: EventConsumer<RMap.Entry<K, ARFutureWithFlag<V>>>;


    constructor(initialCapacity: number, _name: string, _timeoutMs: number = 5000) { // Added default timeout
        // ИСПРАВЛЕНО: Инициализация _forUpdate/_forRemove
        this._forUpdate = new EventConsumer<RMap.Update<K, ARFutureWithFlag<V>>>();
        this._forRemove = new EventConsumer<RMap.Entry<K, ARFutureWithFlag<V>>>();

        this.Sender = class {
            public readonly requests: Set<K> = new ConcurrentHashSet<K>();
            constructor(allRequests: Set<K>) { allRequests.forEach(key => this.requests.add(key)); }
            public extract(_elementType: any): K[] {
                const r = new ObjectArrayList<K>(...this.requests); // Use spread to copy
                this.requests.clear();
                return r.toArray(); // Already an array
            }
        };

        this.data = new ConcurrentHashMapWithDefault<K, ARFutureWithFlag<V>>((k: K) => {
            const future = new ARFutureWithFlagImpl<V>();
            future.to( // Use 'to' on the future itself
                (_v: V) => this.removeRequest(k), // Remove request on success
                (_e: Error) => this.removeRequest(k) // Также remove on error
            ).onCancel(() => this.removeRequest(k)); // Также remove on cancel

            // Default timeout for futures created by BMap
            if (_timeoutMs > 0) future.timeoutError(_timeoutMs / 1000, `BMap future timeout for key: ${k}`);

            this.addRequest(k);
            return future;
        }, initialCapacity);
    }


    private removeRequest(key: K): boolean {
        const wasPresent = this.allRequests.delete(key);
        if (wasPresent) { // Only update senders if it was actually removed
            this.senders.forEach(s => s.requests.delete(key));
        }
        return wasPresent;
    }

    private addRequest(key: K): void {
        if (this.allRequests.has(key)) return;
        this.allRequests.add(key);
        this.senders.forEach(s => s.requests.add(key));
    }

    private getSender(k: any): { requests: Set<K>, extract(elementType: any): K[] } {
        let sender = this.senders.get(k);
        if (!sender) {
            sender = new this.Sender(this.allRequests);
            this.senders.set(k, sender);
        }
        return sender;
    }


    // --- BMap Interface Implementation ---
    public getFuture(key: K): ARFutureWithFlag<V> {
        return this.data.get(key)!; // Use get to ensure creation/requesting
    }

    public getPendingRequests(): Set<K> { return new ConcurrentHashSet(this.allRequests); }


    public putResolved(key: K, value: V): void {
        const future = this.data.get(key); // Ensures future exists
        const wasAlreadyDone = future.isDone();
        const resolvedNow = future.tryDone(value);
        if (resolvedNow && !wasAlreadyDone) {
            // Future listener will remove request. Fire update event.
            this._forValueUpdate.fire({ key: key, newValue: value, oldValue: null as any });
        } else if (!resolvedNow && future.isDone() && future.getNow() !== value) {
            // Optional: Handle case where value is "updated" after already resolved
            // this._forValueUpdate.fire({ key: key, newValue: value, oldValue: future.getNow() });
        }
    }

    public putError(key: K, error: Error): void {
        const future = this.data.get(key); // Ensures future exists
        future.tryError(error); // Future listener will remove request.
    }

    // ИСПРАВЛЕНО: Реализация forValueUpdate
    public forValueUpdate(): EventConsumer<RMap.Update<K, V>> { return this._forValueUpdate; }
    public getRequestsFor(elementType: any, sender: any): K[] { return this.getSender(sender).extract(elementType); }
    public isRequests(): boolean { return this.allRequests.size > 0; }
    public isRequestsFor(sender: any): boolean {
        const s = this.senders.get(sender);
        return s ? s.requests.size > 0 : false;
    }
    public destroy(_force: boolean): AFuture {
        this.allRequests.forEach(key => this.data.get(key)?.cancel());
        this.allRequests.clear();
        this.senders.clear();
        this.data.clear();
        // ИСПРАВЛЕНО: Очистка listeners
        this._forUpdate.listeners.clear();
        this._forRemove.listeners.clear();
        this._forValueUpdate.listeners.clear();
        return AFutureImpl.of();
    }


    // --- RMap Implementations ---
    public get(key: K): ARFutureWithFlag<V> | undefined { return this.data.get(key); }
    // ИСПРАВЛЕНО: Возвращаемый тип this
    public set(_key: K, _value: ARFutureWithFlag<V>): this {
        throw new Error("UnsupportedOperationException: Cannot set futures directly on BMapImpl");
    }
    public delete(key: K): boolean {
        const wasPresent = this.data.has(key);
        if (wasPresent) {
            this.removeRequest(key);
            const future = this.data.get(key); // Получаем future
            future?.cancel();
            this.data.delete(key);
             // ИСПРАВЛЕНО: Вызываем _forRemove
            this._forRemove.fire({key, value: future} as RMap.Entry<K, ARFutureWithFlag<V>>);
        }
        return wasPresent;
    }

    public has(key: K): boolean { return this.data.has(key); }
    public clear(): void { this.destroy(false); }
    public forEach(callbackfn: (value: ARFutureWithFlag<V>, key: K, map: Map<K, ARFutureWithFlag<V>>) => void, thisArg?: any): void { this.data.forEach(callbackfn, thisArg); }
    public get size(): number { return this.data.size; }
    public entries(): IterableIterator<[K, ARFutureWithFlag<V>]> { return this.data.entries(); }
    public keys(): IterableIterator<K> { return this.data.keys(); }
    public [Symbol.iterator](): IterableIterator<[K, ARFutureWithFlag<V>]> { return this.data[Symbol.iterator](); }

    public values(): RCollection<ARFutureWithFlag<V>> & Iterable<ARFutureWithFlag<V>> & { readonly size: number } {
        // ИСПРАВЛЕНО: Используем RCollectionBySrc вместо StubRCollection
        return new RCollectionBySrc(Array.from(this.data.values()));
    }

    // ИСПРАВЛЕНО: Реализация forUpdate/forRemove
    public forUpdate(): EventConsumer<RMap.Update<K, ARFutureWithFlag<V>>> {
        LogFacade.warn("BMapImpl.forUpdate() on futures is not actively supported.");
        return this._forUpdate;
    }
    public forRemove(): EventConsumer<RMap.Entry<K, ARFutureWithFlag<V>>> {
        LogFacade.warn("BMapImpl.forRemove() is not implemented.");
        return this._forRemove;
    }

    // --- BMapImpl.keySet/entrySet теперь возвращают RSetBySrc ---
    public keySet(): RSet<K> {
        // ИСПРАВЛЕНО: Используем RSetBySrc вместо StubRSet
        return new RSetBySrc(new Set(this.data.keys()));
    }
    public entrySet(): RSet<RMap.Entry<K, ARFutureWithFlag<V>>> {
        const entries = Array.from(this.data.entries()).map(([key, value]) => ({ key, value }));
        // ИСПРАВЛЕНО: Используем RSetBySrc вместо StubRSet
        return new RSetBySrc(new Set(entries));
    }


    public mapKeyFuture<K2>(_vToK2: AFunction<ARFutureWithFlag<V>, K2>, _vToK: AFunction<K2, K>): RFMap<K2, ARFutureWithFlag<V>> {
        LogFacade.error(new Error("BMapImpl.mapKeyFuture() is not implemented."));
        return {} as RFMap<K2, ARFutureWithFlag<V>>;
    }
    public mapValFuture<V2>(_vToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV: AFunction<V2, ARFutureWithFlag<V>>): RFMap<K, V2> {
        LogFacade.error(new Error("BMapImpl.mapValFuture() is not implemented."));
        return {} as RFMap<K, V2>;
    }
    public mapVal<V2>(_v1ToV2: AFunction<ARFutureWithFlag<V>, V2>, _v2ToV?: AFunction<V2, ARFutureWithFlag<V>>): RMap<K, V2> {
        LogFacade.error(new Error("BMapImpl.mapVal() is not implemented."));
        return {} as RMap<K, V2>;
    }
    public link(_other: RMap<K, ARFutureWithFlag<V>>): void {
        LogFacade.error(new Error("BMapImpl.link() is not implemented."));
    }
    public mapToFutures(): RFMap<K, ARFutureWithFlag<V>> {
        LogFacade.warn("BMapImpl.mapToFutures() returning 'this', type compatibility might be inexact.");
        return this as unknown as RFMap<K, ARFutureWithFlag<V>>;
    }

}

// =============================================================================================
// SECTION 11.2: RCol Factory Namespace (NEW/MERGED CODE)
// (Портировано из RCol.java и объединено с существующим RCol)
// =============================================================================================

// Переименовано в AetherRCol, чтобы избежать конфликта с 'type Collection<T>'
export namespace AetherRCol {

    // --- Новые методы из RCol.java ---

    // (RQueue не портирован, оставляем заглушки)
    // export function of<T>(src: Queue<T>): RQueue<T> { ... }
    // export function queue<T>(): RQueue<T> { ... }

    // ИСПРАВЛЕНО: Реализованы корректные перегрузки
    export function of<T>(src: Set<T>): RSet<T>;
    export function of<T>(src: T[]): RCollection<T>;
    export function of<K, V>(src: Map<K, V>): RMap<K, V>;
    export function of<T>(src: Collection<T>): RCollection<T>; // Общая перегрузка (должна быть последней)
    export function of<T, K, V>(src: Collection<T> | Map<K, V> | T[] | Set<T>): RCollection<T> | RSet<T> | RMap<K, V> {
        // 1. Проверяем, не RCollection ли это уже
        if (typeof (src as any).forAdd === 'function' || typeof (src as any).forUpdate === 'function') {
            return src as any;
        }

        // 2. Проверяем конкретные типы JS
        if (src instanceof Map) {
            return new RMapBySrc(src as Map<K, V>);
        }
        if (src instanceof Set) {
            return new RSetBySrc(src as Set<T>);
        }
        if (Array.isArray(src)) {
            return new RCollectionBySrc(src as T[]);
        }

        // 3. Обработка по умолчанию (например, RCollection от Iterable)
        // Если это не массив и не Set, но является итерируемым объектом
        if (typeof (src as any)[Symbol.iterator] === 'function') {
             LogFacade.warn("AetherRCol.of() received unknown iterable type. Wrapping as Array.", { src });
             return new RCollectionBySrc(Array.from(src as Iterable<T>));
        }

        LogFacade.error("AetherRCol.of() received unsupported source type.", new Error("Unsupported type"), {src});
        // Возвращаем пустую коллекцию в случае ошибки
        return new RCollectionBySrc([]);
    }


    export function map<K, V>(): RMap<K, V> {
        return new RMapBySrc(new Map<K, V>());
    }

    export function set<T>(): RSet<T> {
        return new RSetBySrc(new Set<T>());
    }

    // --- Существующие методы ---

    export function bMap<K, V>(initialCapacity: number, name: string, timeoutMs: number = 5000): BMap<K, V> {
        return new BMapImpl<K, V>(initialCapacity, name, timeoutMs);
    }

    export function mapToFutures<K, V>(sourceMap: RMap<K, V>): RFMap<K, V> {
        // BMapImpl - это единственная известная реализация RFMap
        const targetRfMap = new BMapImpl<K, V>(sourceMap.size, `mappedFutures(${sourceMap.constructor.name})`);

        sourceMap.forEach((value: V, key: K) => {
            if (value !== null && value !== undefined) {
                targetRfMap.putResolved(key, value);
            }
        });

        // Add error handling for listeners
        try {
            // ИСПРАВЛЕНО: .forUpdate() и .forRemove() теперь методы
            sourceMap.forUpdate().add((update: RMap.Update<K, V>) => {
                targetRfMap.putResolved(update.key, update.newValue);
            });
        } catch (e) { LogFacade.error("Failed to add forUpdate listener in mapToFutures", e as Error); }

        try {
            sourceMap.forRemove().add((entry: RMap.Entry<K, V>) => {
                targetRfMap.delete(entry.key);
            });
        } catch (e) { LogFacade.error("Failed to add forRemove listener in mapToFutures", e as Error); }


        LogFacade.warn("RCol.mapToFutures created a one-way mapping (RMap -> RFMap).");

        return targetRfMap;
    }
}

// Экспортируем под оригинальным именем RCol
export const RCol = AetherRCol;


// =============================================================================================
// SECTION 12-13: Client Interfaces, Types, Implementation - MOVED DOWN
// Needs AFuture, ARFuture, BMap, LogFacade, LNode, Disposable, AMFuture, etc.
// =============================================================================================

// --- Client Interfaces & Types ---
export class UUID_type {
    public readonly value: string;
    private constructor(s: string) { this.value = s; }
    public toString(): string { return this.value; }
    public static fromString(s: string): UUID_type {
        // Basic validation (length and hyphens)
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s)) {
            throw new Error(`Invalid UUID format: ${s}`);
        }
        return new UUID_type(s.toLowerCase()); // Store consistently
    }
}

type UUID_C = UUID_type;
type URI_C = string;
export type Key = any; // Placeholder for cryptographic key type
export type CryptoLib = any; // Placeholder for crypto library object
// SignChecker defined later in Crypto section
// export type SignChecker = any;
export type ServerDescriptor = any; // Placeholder - define structure if known
export type Cloud = any; // Placeholder - define structure if known (e.g., { data: [number] } )
export type AuthorizedApi = any; // Placeholder - define interface
export type RegistrationRootApiRemote = any; // Placeholder - define interface
export type ClientApiRegUnsafe = any; // Placeholder - define interface
export type ClientApiUnsafe = any; // Placeholder - define interface
// export type LoginApiRemote = any; // Defined as interface later
export type ServerApiByUid = any; // Placeholder - define interface
export type FinishResult = any; // Placeholder - define structure if known (e.g., FinishResult_C)
export type Message = any; // Placeholder - define structure if known (e.g., Message_C)
export type UUIDAndCloud = { uuid: UUID_C, cloud: Cloud }; // Example structure
export type Value_C<T> = { data: T, success: (o: any) => void }; // Generic value wrapper

export class ConnectionWork_C_Base { } // Base class if needed by MessageEventListener

export enum RegStatus_C { NO = 'NO', BEGIN = 'BEGIN', CONFIRM = 'CONFIRM' }

export class ClientStartException extends Error { constructor(message: string, cause?: Error) { super(message + (cause ? `: ${cause.message}` : '')); this.cause = cause; } }
export class ClientApiException extends Error { constructor(message: string, cause?: Error) { super(message + (cause ? `: ${cause.message}` : '')); this.cause = cause; } }
export class ClientTimeoutException extends Error { constructor(message: string, cause?: Error) { super(message + (cause ? `: ${cause.message}` : '')); this.cause = cause; } }


export interface ClientState {
    getUid(): UUID_C | null; setUid(uid: UUID_C): void;
    getAlias(): UUID_C | null; setAlias(alias: UUID_C | null): void; // Allow setting null alias
    setMasterKey(key: Key): void;
    getMasterKey(): Key | null;
    getServerInfo(sid: number): ClientState.ServerInfo;
    getServerDescriptor(serverId: number): ServerDescriptor | null;
    getClientInfo(uid: UUID_C): ClientState.ClientInfo;
    setCloud(uid: UUID_C, cloud: Cloud): void;
    getCloud(uid: UUID_C): Cloud | null;
    getRegistrationUri(): URI_C[];
    getPingDuration(): AMFuture<number>;
    getParentUid(): UUID_C;
    getCryptoLib(): CryptoLib;
    getRootSigners(): Set<SignChecker>; // Needs SignChecker
}
export namespace ClientState {
    export interface ServerInfo {
        getServerId(): number;
        getDescriptor(): ServerDescriptor | null;
        setDescriptor(serverDescriptor: ServerDescriptor): void;
    }
    export interface ClientInfo {
        getUid(): UUID_C;
        getCloud(): Cloud | null;
        setCloud(cloud: Cloud): void;
    }
}

// --- Crypto Interfaces & Mocks (Needed by ClientState, Connection etc.) ---
// Forward declaration
export interface SignChecker extends CryptoProviderUnit {
    checkSign(data: Uint8Array, sign: Sign): boolean;
    getPublicKey(): AKey.SignPublic;
}

export enum KeyType { SYMMETRIC, ASYMMETRIC_PUBLIC, ASYMMETRIC_PRIVATE, SIGN_PUBLIC, SIGN_PRIVATE }
export interface CryptoProviderUnit { getProviderName(): string; getCryptoProvider(): CryptoProvider; } // Needs CryptoProvider
export interface AKey extends CryptoProviderUnit { getData(): Uint8Array; getKeyType(): KeyType; toSignedKey(signer: Signer): SignedKey; toSignedKey(sign: Sign): SignedKey; keyToString(): string; } // Needs Signer, SignedKey, Sign
export namespace AKey {
    export interface AsymmetricPublic extends AKey { }
    export interface AsymmetricPrivate extends AKey { }
    export interface SignPublic extends AKey { toSignChecker(): SignChecker; }
    export interface SignPrivate extends AKey { }
    export interface Symmetric extends AKey { }
}
export interface Sign extends CryptoProviderUnit { getSignData(): Uint8Array; }
export interface Signer extends SignChecker { sign(data: Uint8Array): Sign; sign(key: AKey): Sign; }
export interface PairKeys extends CryptoProviderUnit { getPrivateKey(): AKey | null; getPublicKey(): AKey; toCryptoEngine(): CryptoEngine; } // Needs CryptoEngine
export interface PairSignKeys extends PairKeys { getPublicKey(): AKey.SignPublic; getPrivateKey(): AKey.SignPrivate | null; toSigner(): Signer; }
export interface SignedKey extends CryptoProviderUnit {
    key: AKey;
    sign: Sign;
    getKey(): AKey;
    getSign(): Sign;
    check(signerOrChecker: AKey.SignPublic | SignChecker): boolean;
    toString(): string;
}
export interface CryptoProvider { getCryptoLibName(): string; createSigner(keys: PairSignKeys): Signer; createAsymmetricEngine(privateKey: AKey.AsymmetricPrivate, publicKey: AKey.AsymmetricPublic): CryptoEngine; createKey<T extends AKey>(keyType: KeyType, data: Uint8Array): T; createKey<T extends AKey>(data: string): T; createSign(data: string): Sign; createSign(data: Uint8Array): Sign; }
export interface CryptoEngine { decrypt: (data: Uint8Array) => Uint8Array; of: (key: Key) => CryptoEngine; }

// --- LoginApiRemote Interface ---
export interface LoginApiRemote {
    getAuthorizedApi(): ARFuture<AuthorizedApi_C>; // Needs ARFuture, AuthorizedApi_C
    // Add other methods based on actual API
}
// Type alias can still exist if needed for compatibility elsewhere, but interface should be primary
// type LoginApiRemote = any;


// --- MessageEventListener & Default ---
// Needs MessageNode_C, Cloud, ServerDescriptor, ConnectionWork_C_Base
export class MessageNode_C {
    public readonly connectionsOut: Set<any> = new Set();
    public readonly bufferOut: Value_C<Uint8Array>[] = [];
    public readonly consumer: UUID_C; // Should be initialized
    constructor(consumerId: UUID_C) { this.consumer = consumerId; } // Example initializer

    sendMessageFromServerToClient(v: Value_C<Uint8Array>): void {
        LogFacade.trace("MessageNode received message for client.", { consumer: this.consumer.toString(), size: v.data.length });
        // Example: Forward to all connected consumers
        if (this.connectionsOut.size > 0) {
            this.connectionsOut.forEach(conn => {
                try { (conn as any).send(v.data); } // Assuming a 'send' method
                catch (e) { LogFacade.error("Error sending message via connection consumer", e as Error); }
            });
        } else {
            this.bufferOut.push(v); // Buffer if no consumers yet
            LogFacade.debug("Buffered message, no connection consumers yet.", { consumer: this.consumer.toString() });
        }
    }
    addConsumerServerOut(serverId: number): void {
        LogFacade.trace("MessageNode adding server consumer target.", { consumer: this.consumer.toString(), serverId });
        // This typically implies needing a connection to that server, handled elsewhere.
    }
    addConsumerConnectionOut(conn: any): void {
        LogFacade.trace("MessageNode adding connection consumer.", { consumer: this.consumer.toString() });
        this.connectionsOut.add(conn);
        // Send buffered messages now that a connection is available
        LogFacade.debug(`Processing ${this.bufferOut.length} buffered messages.`);
        let msg: Value_C<Uint8Array> | undefined;
        while ((msg = this.bufferOut.shift()) !== undefined) {
            try { (conn as any).send(msg.data); } // Assuming 'send' method
            catch (e) { LogFacade.error("Error sending buffered message via connection consumer", e as Error); }
        }
    }
    removeConsumerConnectionOut(conn: any): void { this.connectionsOut.delete(conn); }
}

export interface MessageEventListener {
    setConsumerCloud(messageNode: MessageNode_C, cloud: Cloud): void;
    onResolveConsumerServer(messageNode: MessageNode_C, serverDescriptor: ServerDescriptor): void;
    onResolveConsumerConnection(messageNode: MessageNode_C, connection: ConnectionWork_C_Base): void;
}

export const MessageEventListenerDefault: MessageEventListener = {
    setConsumerCloud: (messageNode, cloud) => {
        const serverId = (cloud as any)?.data?.[0];
        if (typeof serverId === 'number') {
            messageNode.addConsumerServerOut(serverId);
        } else {
            LogFacade.warn("Could not determine server ID from cloud for MessageNode.", { cloud });
        }
    },
    onResolveConsumerServer: (messageNode, serverDescriptor) => {
        LogFacade.trace("onResolveConsumerServer called, connection resolution delegated.", { serverId: (serverDescriptor as any)?.id });
        // Connection resolution happens in AetherCloudClient.resolveMessageNodeDeps
    },
    onResolveConsumerConnection: (messageNode, connection) => {
        messageNode.addConsumerConnectionOut(connection);
    }
};

// --- Connection Base Class ---
// Needs AFuture, ARFuture, AuthorizedApi, RegistrationRootApiRemote, LNode, ARFutureWithFlag
export abstract class Connection<RT extends AuthorizedApi | RegistrationRootApiRemote> implements Destroyable {
    protected readonly client: AetherCloudClient; // Use specific type
    protected readonly uri: URI_C;
    public readonly connectFuture: ARFuture<RT> = new ARFutureImpl<RT>();
    protected readonly log: LNode;
    protected readonly isReady: ARFutureWithFlag<boolean> = new ARFutureWithFlagImpl<boolean>();
    protected readonly metaClient: any;
    protected readonly metaRemote: any;

    constructor(client: AetherCloudClient, uri: URI_C, log: LNode, metaClient: any, metaRemote: any) {
        this.client = client;
        this.uri = uri;
        this.log = log;
        this.metaClient = metaClient;
        this.metaRemote = metaRemote;
    }

    public abstract destroy(force: boolean): AFuture;
    public getRootApiFuture(): ARFuture<RT> { return this.connectFuture; } // Made public
}

// --- Standard UUIDs ---
// Needs UUID_type
export interface StandardUUIDs { ROOT_UID: UUID_type; TEST_UID: UUID_type; ANONYMOUS_UID: UUID_type; }
export const StandardUUIDsImpl: StandardUUIDs = { ROOT_UID: UUID_type.fromString("ed307ca7-8369-4342-91ee-60c8fc6f9b6b"), TEST_UID: UUID_type.fromString("3ac93165-3d37-4970-87a6-fa4ee27744e4"), ANONYMOUS_UID: UUID_type.fromString("237e2dc0-21a4-4e83-8184-c43052f93b79"), };

// --- Type Aliases & Constants ---
type UUID = UUID_type;
type URI = string;
type FinishResult_C = { getUid: () => UUID, getCloud: () => Cloud, getAlias: () => UUID | null };
type ServerDescriptor_C = { id: number, getIpAddress: () => { getURI: (codec: any) => string; }, getId: () => number; } & ServerDescriptor;
type Message_C = { getUid: () => UUID, getData: () => Uint8Array } & Message;
type ClientApiUnsafe_C = { sendMessages: (msg: Message_C[]) => void, sendServerDescriptor: (v: ServerDescriptor_C) => void, sendCloud: (uid: UUID, cloud: Cloud) => void, newChild: (uid: UUID) => void };
type AuthorizedApi_C = { resolverClouds: (uids: UUID[]) => void, resolverServers: (ids: number[]) => void, sendMessages: (msgs: Message_C[]) => void, ping: (time: number) => ARFuture<number>, flush: () => void, getFastMetaContext: () => FastFutureContext, destroy: (f: boolean) => AFuture } & AuthorizedApi; // Needs FastFutureContext
type LoginStream = any;

// --- CryptoEngine Implementation (Mock) ---
const CryptoEngineImpl: CryptoEngine = { decrypt: (d) => d, of: (_k) => CryptoEngineImpl };

// --- RemoteApiFuture Implementation (Mock) ---
// Needs AFuture
interface RemoteApiFuture { executeAll(context: any, sendFuture: AFuture): void; }
class RemoteApiFutureImpl implements RemoteApiFuture {
    constructor(_config: { makeRemote: () => AuthorizedApi_C, makeLocal: () => any }) { } // Needs AuthorizedApi_C
    executeAll(_context: any, sendFuture: AFuture): void {
        LogFacade.trace("RemoteApiFuture executeAll (mock)");
        sendFuture.tryDone();
    }
}

// --- RU_C Constants ---
// Needs Atomic*, Concurrent*, Event*, StandardUUIDs
const RU_C = {
    AtomicLong: AtomicLong_C,
    AtomicReference: AtomicReference_C,
    ConcurrentHashMap: Map,
    ConcurrentLinkedQueue: ConcurrentLinkedQueue_C,
    AetherCodec: { TCP: "tcp" as any },
    EventConsumer: EventConsumer,
    EventBiConsumer: EventBiConsumer,
    StandardUUIDs: StandardUUIDsImpl,
};
const Value_C_Impl = { of: <T>(d: T): Value_C<T> => ({ data: d, success: (_o: any) => { } }) };

// --- ClientStateInMemory_C Implementation ---
// Needs ClientState, UUID, URI, Key, ServerDescriptor, Cloud, AMFuture, SignChecker, AMFutureImpl, Map, LogFacade
class ClientStateInMemory_C implements ClientState {
    private uid: UUID | null;
    private alias: UUID | null = null;
    private masterKey: Key | null = null;
    private servers = new Map<number, { descriptor: ServerDescriptor | null }>();
    private clients = new Map<string, { cloud: Cloud | null }>();
    private registrationUris: URI[];
    private pingDuration = AMFutureImpl.completed(0);

    constructor(initialUid: UUID | null, uris: string[]) {
        this.uid = initialUid;
        this.registrationUris = uris.slice(); // Copy uris
    }

    getUid(): UUID | null { return this.uid; }
    setUid(uid: UUID): void { LogFacade.debug("ClientState: UID set", { uid: uid.toString() }); this.uid = uid; }
    getAlias(): UUID | null { return this.alias; }
    setAlias(alias: UUID | null): void { LogFacade.debug("ClientState: Alias set", { alias: alias?.toString() }); this.alias = alias; }
    setMasterKey(key: Key): void { LogFacade.debug("ClientState: MasterKey set"); this.masterKey = key; }
    getMasterKey(): Key | null { return this.masterKey; }

    getServerInfo(sid: number): ClientState.ServerInfo {
        if (!this.servers.has(sid)) {
            LogFacade.trace("ClientState: Creating ServerInfo", { serverId: sid });
            this.servers.set(sid, { descriptor: null });
        }
        const serverData = this.servers.get(sid)!;
        return {
            getServerId: () => sid,
            getDescriptor: () => serverData.descriptor,
            setDescriptor: (desc: ServerDescriptor) => { LogFacade.trace("ClientState: Setting descriptor", { serverId: sid }); serverData.descriptor = desc; }
        };
    }

    getServerDescriptor(serverId: number): ServerDescriptor | null {
        return this.servers.get(serverId)?.descriptor ?? null;
    }

    getClientInfo(uid: UUID): ClientState.ClientInfo {
        if (!this.clients.has(uid.toString())) { // Use string UUID as Map key
            LogFacade.trace("ClientState: Creating ClientInfo", { uid: uid.toString() });
            this.clients.set(uid.toString(), { cloud: null });
        }
        const clientData = this.clients.get(uid.toString())!;
        return {
            getUid: () => uid,
            getCloud: () => clientData.cloud,
            setCloud: (cloud: Cloud) => { LogFacade.trace("ClientState: Setting cloud", { uid: uid.toString() }); clientData.cloud = cloud; }
        };
    }

    setCloud(uid: UUID, cloud: Cloud): void {
        const key = uid.toString();
        if (!this.clients.has(key)) {
            this.clients.set(key, { cloud: null });
        }
        LogFacade.trace("ClientState: Setting cloud (direct)", { uid: key });
        this.clients.get(key)!.cloud = cloud;
    }
    getCloud(uid: UUID): Cloud | null {
        return this.clients.get(uid.toString())?.cloud ?? null;
    }
    getRegistrationUri(): URI[] { return [...this.registrationUris]; }
    getPingDuration(): AMFuture<number> { return this.pingDuration; }
    getParentUid(): UUID { return RU_C.StandardUUIDs.ROOT_UID; }
    getCryptoLib(): CryptoLib { return {} as any; }
    getRootSigners(): Set<SignChecker> { return new Set(); }
}


// --- AetherCloudClient Implementation ---
// Needs AFuture, BMap, UUID, Cloud, ServerDescriptor, LogFacade, LNode, AtomicReference_C, RegStatus_C, RCol, Map, EventConsumer, EventBiConsumer, ConcurrentLinkedQueue_C, ClientState, ConnectionWork_C, MessageNode_C, MessageEventListener, ClientStateInMemory_C, ConnectionRegistration_C, ARFuture, AuthorizedApi, ClientStartException, AFutureImpl, CryptoEngine, CryptoEngineImpl, SignChecker
export class AetherCloudClient implements Destroyable {
    public readonly startFuture: AFuture = new AFutureImpl();
    public readonly destroyer: Destroyable;
    public readonly logClientContext: LNode;

    public readonly clouds: BMap<UUID, Cloud>;
    public readonly regStatus: AtomicReference_C<RegStatus_C> = new RU_C.AtomicReference(RegStatus_C.NO); // Made public
    public readonly servers: BMap<number, ServerDescriptor>;

    public readonly messageNodeMap: Map<string, MessageNode_C> = new RU_C.ConcurrentHashMap<string, MessageNode_C>(); // Use string key
    public readonly onNewChild: EventConsumer<UUID> = new RU_C.EventConsumer();
    public readonly onNewChildApi: EventBiConsumer<UUID, any> = new RU_C.EventBiConsumer();
    // Commented out as unused for now
    // private readonly _queueAuth: ConcurrentLinkedQueue_C<AConsumer<AuthorizedApi>> = new RU_C.ConcurrentLinkedQueue<AConsumer<AuthorizedApi>>();
    private readonly connections: Map<number, ConnectionWork_C> = new Map();

    private readonly clientState: ClientState;
    private currentUid: UUID | null;

    constructor(store?: ClientState, name: string = "AetherClient") {
        this.clientState = store || new ClientStateInMemory_C(RU_C.StandardUUIDs.ANONYMOUS_UID, ["tcp://registration.aethernet.io:9010"]);
        this.logClientContext = LogFacade.createContext("SystemComponent", name);
        this.currentUid = this.clientState.getUid();
        this.destroyer = { destroy: this.destroy.bind(this) };

        this.clouds = RCol.bMap(2000, `${name}-CloudCache`);
        this.servers = RCol.bMap(2000, `${name}-ServerCache`);

        this.clouds.forValueUpdate().add((update: RMap.Update<UUID, Cloud>) => {
            if (update.newValue !== null) {
                this.clientState.setCloud(update.key, update.newValue);
            }
        });
        this.servers.forValueUpdate().add((update: RMap.Update<number, ServerDescriptor>) => {
            if (update.newValue !== null) {
                const serverInfo = this.clientState.getServerInfo(update.key);
                serverInfo.setDescriptor(update.newValue);
            }
        });

        this.makeFirstConnection();
    }


    public getUid(): UUID | null { return this.currentUid; }
    public getCryptLib(): CryptoLib { return this.clientState.getCryptoLib(); }
    public verifySign(_signedKey: any): boolean { return true; }
    public getParent(): UUID { return this.clientState.getParentUid(); }
    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        LogFacade.warn(`Using placeholder CryptoEngine for server ${serverId}`);
        return CryptoEngineImpl.of(null);
    }
    public getMessageNode(uid: UUID, listener: MessageEventListener = MessageEventListenerDefault): MessageNode_C {
        const uidStr = uid.toString();
        if (!this.messageNodeMap.has(uidStr)) {
            const newNode = new MessageNode_C(uid); // Pass UID to constructor
            this.messageNodeMap.set(uidStr, newNode);
            this.resolveMessageNodeDeps(newNode, uid, listener);
        }
        return this.messageNodeMap.get(uidStr)!;
    }

    private resolveMessageNodeDeps(node: MessageNode_C, uid: UUID, listener: MessageEventListener): void {
        this.getCloud(uid).to((cloud: Cloud) => { // Type added
            listener.setConsumerCloud(node, cloud);
            const serverId = (cloud as any)?.data?.[0];
            if (typeof serverId === 'number') {
                this.getServer(serverId).to((descriptor: ServerDescriptor) => { // Type added
                    listener.onResolveConsumerServer(node, descriptor);
                    const connection = this.getConnection(descriptor as ServerDescriptor_C);
                    connection.ready.to(() => {
                        listener.onResolveConsumerConnection(node, connection as any);
                    }).onError(e => LogFacade.error(`Connection readiness failed for server ${serverId}`, e));
                }).onError(e => LogFacade.error(`Failed to resolve server ${serverId} for message node ${uid}`, e));
            } else { LogFacade.warn("Could not determine server ID from cloud in resolveMessageNodeDeps", { uid: uid.toString() }); }
        }).onError(e => LogFacade.error(`Failed to resolve cloud for message node ${uid}`, e));
    }


    public getCloud(uid: UUID): ARFuture<Cloud> {
        const cachedCloud = this.clientState.getCloud(uid);
        if (cachedCloud) return ARFutureImpl.of(cachedCloud);

        const future = this.clouds.getFuture(uid);
        future.timeoutError(4, `Timeout getting cloud: ${uid.toString()}`);

        this.requestCloudResolution([uid]);

        return future;
    }

    public getServer(id: number): ARFuture<ServerDescriptor> {
        const cachedDescriptor = this.clientState.getServerDescriptor(id);
        if (cachedDescriptor) return ARFutureImpl.of(cachedDescriptor);

        const future = this.servers.getFuture(id);
        future.timeoutMs(5000, () => { LogFacade.warn("Timeout waiting for server description", { serverId: id }); }); // Corrected log param

        this.requestServerResolution([id]);

        return future;
    }

    private requestCloudResolution(uids: UUID[]): void {
        const needed = uids.filter(uid => !this.clouds.has(uid) || this.clouds.get(uid)?.isNotDone());
        if (needed.length === 0) return;
        LogFacade.debug("Requesting cloud resolution", { uids: needed.map(u => u.toString()) });
        this.executeAuthorizedApi(api => api.resolverClouds(needed));
    }

    private requestServerResolution(ids: number[]): void {
        const needed = ids.filter(id => !this.servers.has(id) || this.servers.get(id)?.isNotDone());
        if (needed.length === 0) return;
        LogFacade.debug("Requesting server resolution", { ids });
        this.executeAuthorizedApi(api => api.resolverServers(needed));
    }

    private executeAuthorizedApi(action: AConsumer<AuthorizedApi_C>): void {
        let readyConn: ConnectionWork_C | null = null;
        for (const conn of this.connections.values()) {
            // Check connectFuture as well, as 'ready' might resolve before API is available
            if (conn.ready.isDone() && conn.connectFuture.isDone()) {
                readyConn = conn;
                break;
            }
        }

        if (readyConn) {
            const apiFuture = readyConn.getRootApiFuture() as ARFuture<LoginApiRemote>;
            apiFuture.to((loginApi: LoginApiRemote) => { // Type added
                if (!loginApi) { // Handle case where future resolved null? Unlikely.
                    LogFacade.error("LoginApi is null despite connectFuture being done.");
                    // Queue the action again?
                    // this._queueAuth.push(action as AConsumer<AuthorizedApi>);
                    return;
                }
                loginApi.getAuthorizedApi().to((authApi: AuthorizedApi_C) => { // Type added
                    LogFacade.debug("Executing API action on ready connection.");
                    try {
                        LogFacade.wrap(action)(authApi);
                        authApi.flush();
                    } catch (e) { LogFacade.error("Error executing authorized API action", e as Error); }
                }).onError((e: Error) => {
                    LogFacade.error("Failed to get AuthorizedApi from LoginApi", e);
                    // Queue the action again?
                    // this._queueAuth.push(action as AConsumer<AuthorizedApi>);
                });
            }); // No immediate onError needed, already checked connectFuture.isDone()
        } else {
            LogFacade.debug("No ready connection found, cannot execute API action now.", { actionName: action.name || 'anonymous' });
            // Queueing removed as _queueAuth is commented out
            // this._queueAuth.push(action as AConsumer<AuthorizedApi>);
            if (this.connections.size === 0) { this.makeFirstConnection(); }
        }
    }


    public setCloud(uid: UUID, cloud: Cloud): void {
        this.clouds.putResolved(uid, cloud);
    }

    private makeFirstConnection(): void {
        const _logCtx = LogFacade.context("method", "makeFirstConnection");
        if (this.connections.size > 0 /* || connection attempt in progress */) {
            _logCtx[Symbol.dispose]();
            return;
        }

        if (!this.currentUid || this.currentUid === RU_C.StandardUUIDs.ANONYMOUS_UID || this.regStatus.value !== RegStatus_C.CONFIRM) {
            const regUris = this.clientState.getRegistrationUri();
            if (regUris.length > 0) {
                LogFacade.info("No valid UID or registration not confirmed. Connecting to registration URI.", { uri: regUris[0] });
                new ConnectionRegistration_C(this, regUris[0]);
            } else {
                LogFacade.error("Anonymous user and no registration URI configured.");
                this.startFuture.error(new ClientStartException("Registration URI required for anonymous user."));
            }
        } else {
            LogFacade.info("Client has UID, attempting connection based on cloud info.");
            this.getCloud(this.currentUid).to((cloud: Cloud) => {
                const serverId = (cloud as any)?.data?.[0];
                if (typeof serverId === 'number') {
                    this.getServer(serverId).to((descriptor: ServerDescriptor) => {
                        this.getConnection(descriptor as ServerDescriptor_C);
                    }).onError(e => this.startFuture.error(new ClientStartException("Failed to get own server descriptor.", e)));
                } else { this.startFuture.error(new ClientStartException("Could not determine server ID from own cloud.")); }
            }).onError(e => this.startFuture.error(new ClientStartException("Failed to get own cloud info.", e)));
        }
        _logCtx[Symbol.dispose]();
    }


    public getConnection(serverDescriptor: ServerDescriptor_C): ConnectionWork_C {
        this.servers.putResolved(serverDescriptor.getId(), serverDescriptor);

        let connection = this.connections.get(serverDescriptor.getId());
        if (!connection /* || connection.isClosed() */) {
            const _logCtx = LogFacade.context('server', serverDescriptor.getId());
            LogFacade.info("Creating new work connection.", { uri: serverDescriptor.getIpAddress().getURI(RU_C.AetherCodec.TCP) });
            connection = new ConnectionWork_C(this, serverDescriptor);
            this.connections.set(serverDescriptor.getId(), connection);

            connection.ready.onError(e => {
                LogFacade.error("Connection failed.", e, { serverId: serverDescriptor.getId() });
                this.connections.delete(serverDescriptor.getId());
            });
            connection.ready.to((conn: ConnectionWork_C) => this.processApiQueue(conn)); // Use conn from callback
            _logCtx[Symbol.dispose]();
        }
        return connection;
    }

    private processApiQueue(connection: ConnectionWork_C): void {
        // Queue processing removed as _queueAuth is commented out
        LogFacade.debug("Connection ready, API queue processing skipped (queue unused).", { serverId: connection.serverDescriptor.getId() });
    }


    public flush(): void {
        const _logCtx = LogFacade.context("method", "flush");
        if (this.connections.size === 0) {
            // Queue check removed
            if (this.servers.isRequests() || this.clouds.isRequests()) {
                LogFacade.debug("Flush triggered with pending requests but no connections. Attempting connection.");
                this.makeFirstConnection();
            } else { LogFacade.trace("Flush triggered, no active connections or pending items."); }
            _logCtx[Symbol.dispose]();
            return;
        }
        LogFacade.trace(`Flushing ${this.connections.size} connections.`);
        for (const c of this.connections.values()) {
            try {
                if (c.ready.isDone()) { c.flush(); }
                else { LogFacade.trace("Skipping flush for connection not ready.", { serverId: c.serverDescriptor.getId() }); }
            } catch (e) { LogFacade.error("Error flushing connection", e as Error, { connection: c.toString2() }); }
        }
        _logCtx[Symbol.dispose]();
    }

    public confirmRegistration(regResp: FinishResult_C): void {
        const newUid = regResp.getUid();
        const _logCtx = LogFacade.context("method", `confirmRegistration[${newUid.toString()}]`);
        if (!this.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.CONFIRM)) {
            LogFacade.warn("Registration confirmation ignored, status was not BEGIN.", { currentStatus: this.regStatus.value });
            _logCtx[Symbol.dispose]();
            return;
        }

        const newAlias = regResp.getAlias();
        const cloud = regResp.getCloud();

        LogFacade.info("Registration confirmed.", { uid: newUid, alias: newAlias?.toString() });

        this.clientState.setUid(newUid);
        if (newAlias !== undefined) this.clientState.setAlias(newAlias); // Allow null alias

        this.currentUid = newUid;
        this.setCloud(newUid, cloud);

        this.startFuture.tryDone();
        this.flush();
        _logCtx[Symbol.dispose]();
    }


    public destroy(force: boolean): AFuture {
        const _logCtx = LogFacade.context("method", "destroy");
        LogFacade.info("Destroying AetherCloudClient.", { force });

        const destroyFutures: AFuture[] = [];
        this.connections.forEach(conn => {
            destroyFutures.push(conn.destroy(force));
        });
        destroyFutures.push(this.clouds.destroy(force));
        destroyFutures.push(this.servers.destroy(force));

        this.messageNodeMap.clear();
        // this._queueAuth.clear(); // Clear queue if re-enabled
        this.connections.clear();

        const allDestroy = AFutureImpl.all(...destroyFutures);
        allDestroy.to(() => {
            LogFacade.info("AetherCloudClient destroyed.");
            if (this.startFuture.isNotDone()) this.startFuture.cancel();
        });
        allDestroy.onError(e => LogFacade.error("Error during AetherCloudClient destroy", e));
        _logCtx[Symbol.dispose]();
        return allDestroy;
    }

}

// --- Connection Implementations ---
// Needs Connection, ARFuture, AFuture, ClientApiRegUnsafe, RegistrationRootApiRemote, CryptoEngine, CryptoEngineImpl, FastApiContext, LogFacade, ClientApiUnsafe, LoginApiRemote, RemoteApiFutureImpl, AuthorizedApi_C, ClientApiException, etc.

export class ConnectionRegistration_C extends Connection<RegistrationRootApiRemote> implements ClientApiRegUnsafe {
    private readonly clientInstance: AetherCloudClient;
    private readonly _tempKeyNative: any = {} as any; // Mock key
    private readonly tempKeyCp: CryptoEngine = CryptoEngineImpl.of(null);
    private readonly ctxSafe: FastApiContext = { flush: (f: AFuture) => f.tryDone() }; // Use tryDone
    private readonly globalCtx: FastApiContext = { flush: (f: AFuture) => f.tryDone() }; // Use tryDone
    private gcp: CryptoEngine | null = null;


    constructor(client: AetherCloudClient, uri: URI) {
        const logContext = LogFacade.createContext("Connection", "Registration");
        super(client, uri, logContext, {}, {});
        this.clientInstance = client;
        client.regStatus.compareAndSet(RegStatus_C.NO, RegStatus_C.BEGIN);
        this.connect();
    }

    private connect(): void {
        LogFacade.info("Attempting registration connection...", { uri: this.uri });
        setTimeout(() => {
            if (Math.random() > 0.1) {
                LogFacade.info("Registration connection established (simulated).");
                // --- Mock Registration API ---
                const mockApi: RegistrationRootApiRemote = {
                    getAsymmetricPublicKey: (_lib: CryptoLib) => ARFutureImpl.of({} /* Mock SignedKey */),
                    enter: (_lib: CryptoLib, _key: Key) => ({
                        requestWorkProofData: (_p: UUID, _d: any, _tK: Key) => ARFutureImpl.of({
                            getGlobalKey: () => ({ type: 'globalKey' } as Key),
                            getSalt: () => HexUtilsCrypto.hexToBytes("0102030405060708"),
                            getSuffix: () => HexUtilsCrypto.hexToBytes("090a0b0c0d0e0f10"),
                        }),
                        registration: (_s: any, _suf: any, _p: any, _par: any, _tK: any, _pubK: any) => ({
                            finish: () => ARFutureImpl.of({
                                getUid: () => UUID_type.fromString("a7e6e2f1-a1d8-4b7f-8c3b-7f3e1b9a1e0f"),
                                getCloud: () => ({ data: [1] } as Cloud), // Points to server 1
                                getAlias: () => UUID_type.fromString("b8f7f3a2-b2e9-4c8a-9d4c-8a4f2c0b2f1a"),
                            } as FinishResult_C)
                        }),
                        resolveServers: (_c: Cloud) => ARFutureImpl.of([{
                            id: 1, getId: () => 1,
                            getIpAddress: () => ({ getURI: (_co: any) => "tcp://mockserver:1234" }),
                        }] as ServerDescriptor_C[]),
                    }),
                    flush: () => { /* Mock flush */ },
                };
                // --- End Mock API ---
                this.connectFuture.tryDone(mockApi);
                this.isReady.tryDone(true);
                // Trigger regProcess after connection is established
                this.getRootApiFuture()
                    .to((api: RegistrationRootApiRemote) => { // Type added
                        (api as any).getAsymmetricPublicKey(this.client.getCryptLib()).to(this.regProcess.bind(this));
                        (api as any).flush();
                    })
                    .onError((e: Error) => {
                        LogFacade.error("Reg Process trigger failed after connect.", e);
                        this.clientInstance.startFuture.error(e);
                        this.clientInstance.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.NO);
                    });

            } else {
                LogFacade.error("Registration connection failed (simulated).");
                const error = new Error("Simulated connection failure");
                this.connectFuture.error(error);
                this.isReady.tryError(error);
                this.clientInstance.startFuture.error(error);
                this.clientInstance.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.NO);
            }
        }, 50);
    }

    private regProcess(_signedKey: any): void {
        this.getRootApiFuture().to((api: any) => {
            LogFacade.debug("Starting registration process flow.");
            api.enter(this.client.getCryptLib(), {} as Key)
                .requestWorkProofData(this.client.getParent(), 0 as any, this._tempKeyNative)
                .to((wpd: { getGlobalKey: () => Key, getSalt: () => Uint8Array, getSuffix: () => Uint8Array }) => {
                    LogFacade.debug("Received WorkProofData.");
                    this.gcp = CryptoEngineImpl.of(wpd.getGlobalKey());
                    api.enter(this.client.getCryptLib(), {} as Key)
                        .registration(wpd.getSalt(), wpd.getSuffix(), [], this.client.getParent(), this._tempKeyNative, {} as Key)
                        .finish()
                        .to((d: FinishResult_C) => {
                            LogFacade.debug("Registration finished, resolving servers.");
                            api.enter(this.client.getCryptLib(), {} as Key)
                                .resolveServers(d.getCloud())
                                .to((ss: ServerDescriptor_C[]) => {
                                    LogFacade.info("Servers resolved.", { count: ss.length });
                                    for (const s of ss) this.clientInstance.servers.putResolved(s.getId(), s);
                                    this.clientInstance.confirmRegistration(d);
                                }).onError((e: Error) => {
                                    LogFacade.error("Failed to resolve servers.", e);
                                    this.clientInstance.startFuture.error(e);
                                    this.clientInstance.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.NO);
                                });
                            api.flush();
                        }).onError((e: Error) => {
                            LogFacade.error("Registration finish step failed.", e);
                            this.clientInstance.startFuture.error(e);
                            this.clientInstance.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.NO);
                        });
                    api.flush();
                })
                .timeoutError(15, "RegConn: timeout requestWorkProofData")
                .onError((e: Error) => {
                    LogFacade.error("requestWorkProofData failed.", e);
                    this.clientInstance.startFuture.error(e);
                    this.clientInstance.regStatus.compareAndSet(RegStatus_C.BEGIN, RegStatus_C.NO);
                });
            api.flush();
        });
    }


    public enterGlobal(stream: LoginStream): void { (stream as any).accept(this.globalCtx, this.gcp!.decrypt, {} /* API impl */); }
    public enter(stream: LoginStream): void { (stream as any).accept(this.ctxSafe, this.tempKeyCp.decrypt, {} /* API impl */); }
    public destroy(_force: boolean): AFuture {
        this.connectFuture.cancel();
        this.isReady.cancel();
        return AFutureImpl.of();
    }
    public toString2(): string { return `RegistrationConnection(${this.uri.toString()})`; }
}


class MyClientApiSafe_C implements ClientApiUnsafe_C {
    private readonly client: AetherCloudClient;
    constructor(client: AetherCloudClient) { this.client = client; }
    public sendMessages(msg: Message_C[]): void {
        LogFacade.trace("ClientApiSafe: Received messages from server.", { count: msg.length });
        for (const m of msg) {
            const node = this.client.getMessageNode(m.getUid());
            node.sendMessageFromServerToClient(Value_C_Impl.of(m.getData()));
        }
    }
    public sendServerDescriptor(v: ServerDescriptor_C): void {
        LogFacade.trace("ClientApiSafe: Received server descriptor.", { serverId: v.getId() });
        this.client.servers.putResolved(v.getId(), v as ServerDescriptor);
    }
    public sendCloud(uid: UUID, cloud: Cloud): void {
        LogFacade.trace("ClientApiSafe: Received cloud info.", { uid: uid.toString() });
        this.client.setCloud(uid, cloud);
    }
    public newChild(uid: UUID): void {
        LogFacade.trace("ClientApiSafe: Received new child notification.", { childUid: uid.toString() });
        this.client.onNewChild.fire(uid);
    }
}

export class ConnectionWork_C extends Connection<LoginApiRemote> implements ClientApiUnsafe {
    public readonly lastBackPing: AtomicLong_C = new AtomicLong_C(Date.now());
    public readonly ready: ARFuture<ConnectionWork_C> = new ARFutureImpl();
    private readonly apiSafe: MyClientApiSafe_C;
    private readonly apiSafeCtx: FastApiContext;
    private readonly cryptoEngine: CryptoEngine;
    private readonly remoteApiFuture: RemoteApiFuture;
    public readonly serverDescriptor: ServerDescriptor_C;


    constructor(client: AetherCloudClient, s: ServerDescriptor_C) {
        const uri = s.getIpAddress().getURI(RU_C.AetherCodec.TCP);
        const logContext = LogFacade.createContext("Connection", `Work-${s.getId()}`);
        super(client, uri, logContext, {}, {});
        this.serverDescriptor = s;
        this.cryptoEngine = client.getCryptoEngineForServer(s.id);
        this.remoteApiFuture = new RemoteApiFutureImpl({ makeRemote: () => ({} as AuthorizedApi_C), makeLocal: () => (this.apiSafe) });
        this.apiSafe = new MyClientApiSafe_C(client);
        this.apiSafeCtx = { flush: (f: AFuture) => { LogFacade.trace("Flushing API Safe Context"); f.tryDone(); } };

        this.connect();
    }

    private connect(): void {
        LogFacade.info(`Attempting work connection to server ${this.serverDescriptor.getId()}`, { uri: this.uri });
        setTimeout(() => {
            if (Math.random() > 0.1) {
                LogFacade.info(`Work connection established to server ${this.serverDescriptor.getId()} (simulated).`);
                // --- Mock Login/Auth API ---
                const mockAuthorizedApi: AuthorizedApi_C = {
                    resolverClouds: (uids: UUID[]) => LogFacade.debug("AuthAPI: resolverClouds called", { uids: uids.map(u => u.toString()) }),
                    resolverServers: (ids: number[]) => LogFacade.debug("AuthAPI: resolverServers called", { ids }),
                    sendMessages: (msgs: Message_C[]) => LogFacade.debug("AuthAPI: sendMessages called", { count: msgs.length }),
                    ping: (time: number) => { const now = Date.now(); this.lastBackPing.value = now; return ARFutureImpl.of(now - time); },
                    flush: () => LogFacade.debug("AuthAPI: flush called"),
                    getFastMetaContext: () => ({} as FastFutureContext),
                    destroy: (_f: boolean) => AFutureImpl.of(),
                };
                const mockLoginApi: LoginApiRemote = {
                    getAuthorizedApi: () => ARFutureImpl.of(mockAuthorizedApi)
                };
                // --- End Mock API ---

                this.connectFuture.tryDone(mockLoginApi);
                this.isReady.tryDone(true);
                this.ready.tryDone(this);
            } else {
                LogFacade.error(`Work connection failed to server ${this.serverDescriptor.getId()} (simulated).`);
                const error = new Error(`Simulated connection failure to server ${this.serverDescriptor.getId()}`);
                this.connectFuture.error(error);
                this.isReady.tryError(error);
                this.ready.error(error);
            }
        }, 50);
    }


    public flush(): void {
        const _logCtx = LogFacade.context("method", `ConnectionWork.flush[${this.serverDescriptor.getId()}]`);
        LogFacade.trace("Executing flush on remote API future.");
        const sendFuture = new AFutureImpl();
        this.remoteApiFuture.executeAll({}, sendFuture);
        sendFuture.to(
            () => LogFacade.trace("Remote API future flushed.")
        ).onError(
            (e: Error) => LogFacade.error("Flush sendFuture failed", e)
        );
        this.apiSafeCtx.flush(new AFutureImpl());
        _logCtx[Symbol.dispose]();
    }


    public sendSafeApiData(data: LoginStream): void {
        const _logCtx = LogFacade.context("method", "sendSafeApiData");
        try {
            (data as any).accept(this.apiSafeCtx, this.cryptoEngine.decrypt, this.apiSafe);
        } catch (e) { LogFacade.error("Error processing safe API data", e as Error); }
        _logCtx[Symbol.dispose]();
    }

    public destroy(force: boolean): AFuture {
        const _logCtx = LogFacade.context("method", `ConnectionWork.destroy[${this.serverDescriptor.getId()}]`);
        LogFacade.info("Destroying work connection.", { force });
        this.connectFuture.cancel();
        this.isReady.cancel();
        this.ready.cancel();
        this.connectFuture.apply(() => {
            const loginApi = this.connectFuture.getNow();
            loginApi?.getAuthorizedApi().apply(authApi => authApi?.destroy(force));
        });

        _logCtx[Symbol.dispose]();
        return AFutureImpl.of();
    }


    public toString2(): string { return `WorkConnection(${this.uri.toString()})`; }

    // --- ClientApiUnsafe Implementation ---
    public sendMessages(msg: Message_C[]): void {
        LogFacade.warn("ClientApiUnsafe.sendMessages delegated to safe API."); this.apiSafe.sendMessages(msg);
    }
    public sendServerDescriptor(v: ServerDescriptor_C): void {
        LogFacade.warn("ClientApiUnsafe.sendServerDescriptor delegated to safe API."); this.apiSafe.sendServerDescriptor(v);
    }
    public sendCloud(uid: UUID, cloud: Cloud): void {
        LogFacade.warn("ClientApiUnsafe.sendCloud delegated to safe API."); this.apiSafe.sendCloud(uid, cloud);
    }
    public newChild(uid: UUID): void {
        LogFacade.warn("ClientApiUnsafe.newChild delegated to safe API."); this.apiSafe.newChild(uid);
    }
}


// =============================================================================================
// SECTION 14: AETHER MODULE REGISTRY (Service Loader Pattern) (NEW CODE)
// =============================================================================================

/**
 * Базовый интерфейс для всех фабрик, регистрируемых в модульной системе.
 */
export interface Factory {
    /**
     * Возвращает уникальное имя модуля/реализации.
     * @example "default-client-impl", "advanced-crypto-provider"
     */
    getModuleName(): string;

    /**
     * Возвращает строковый тип фабрики.
     * @example "FastMetaClientFactory", "CryptoProviderFactory"
     */
    getFactoryType(): string;
}

/**
 * Центральный реестр для модульных фабрик (реализация паттерна Service Loader).
 * Позволяет модулям регистрировать реализации (фабрики) по строковому ключу типа.
 */
class ModuleRegistry {

    // Хранилище: Map<"FactoryTypeString", RSet<Factory>>
    // Используем RSet (RSetBySrc), чтобы подписки forAdd работали.
    private readonly registry: Map<string, RSet<Factory>>;

    constructor() {
        this.registry = new Map<string, RSet<Factory>>();
    }

    /**
     * Получает (или создает) наблюдаемый RSet<Factory> для данного типа фабрики.
     */
    private getRSetForType(factoryType: string): RSet<Factory> {
        let set = this.registry.get(factoryType);
        if (!set) {
            set = RCol.set<Factory>(); // Используем AetherRCol.set()
            this.registry.set(factoryType, set);
        }
        return set;
    }

    /**
     * Регистрирует новую фабрику в системе.
     * @param factory Фабрика для регистрации.
     * @returns Объект Disposable, вызов [Symbol.dispose]() которого разрегистрирует фабрику.
     */
    public registerFactory(factory: Factory): Disposable {
        if (!factory || typeof factory.getFactoryType !== 'function' || typeof factory.getModuleName !== 'function') {
            const err = new Error("Invalid factory object: must implement getFactoryType() and getModuleName()");
            LogFacade.error("Attempted to register invalid factory", err, { factory });
            return { [Symbol.dispose]: () => {} };
        }

        const factoryType = factory.getFactoryType();
        const moduleName = factory.getModuleName();
        LogFacade.debug(`Registering factory: ${factoryType} -> ${moduleName}`);

        const set = this.getRSetForType(factoryType);

        // Проверка, что фабрика с таким именем уже не зарегистрирована
        for(const f of set) {
            if(f.getModuleName() === moduleName) {
                LogFacade.warn(`Factory with name "${moduleName}" already registered for type "${factoryType}". Overwriting.`);
                set.remove(f); // Удаляем старую
                break;
            }
        }

        set.add(factory);

        // Возвращаем Disposer для дерегистрации
        return {
            [Symbol.dispose]: () => {
                LogFacade.debug(`Unregistering factory: ${factoryType} -> ${moduleName}`);
                set.remove(factory);
            }
        };
    }

    /**
     * Находит все фабрики, соответствующие заданному типу.
     * Возвращает RSet, на который можно подписаться (forAdd/forRemove),
     * чтобы отслеживать появление новых (асинхронно загруженных) фабрик.
     * * @example
     * const clientFactories = AetherModuleRegistry.findFactories<FastMetaClientFactory>("FastMetaClientFactory");
     * clientFactories.forAdd.add(factory => console.log(`New client factory added: ${factory.getModuleName()}`));
     */
    public findFactories<T extends Factory>(factoryType: string): RSet<T> {
        // Мы возвращаем RSet<Factory>, но кастуем его к RSet<T> для удобства вызывающего.
        // Безопасность типов здесь - ответственность вызывающего.
        return this.getRSetForType(factoryType) as RSet<T>;
    }

    /**
     * Находит одну (уже зарегистрированную) фабрику по типу и имени.
     * Возвращает *текущее* значение или undefined, если не найдено.
     * * @example
     * const factory = AetherModuleRegistry.findFactory<FastMetaClientFactory>("default", "FastMetaClientFactory");
     */
    public findFactory<T extends Factory>(moduleName: string, factoryType: string): T | undefined {
        const set = this.getRSetForType(factoryType);

        for (const factory of set) {
            if (factory.getModuleName() === moduleName) {
                return factory as T;
            }
        }
        return undefined;
    }

    /**
     * Асинхронно находит фабрику по типу и имени.
     * Немедленно возвращает ARFuture.
     * Future будет выполнен, как только фабрика будет зарегистрирована.
     * Если фабрика уже зарегистрирована, Future будет выполнен немедленно.
     * * @param moduleName Имя модуля (фабрики).
     * @param factoryType Тип фабрики.
     * @param timeoutMs Таймаут ожидания.
     * @returns ARFuture<T>, который зарезолвится фабрикой или уйдет в ошибку по таймауту.
     */
    public findFactoryAsync<T extends Factory>(moduleName: string, factoryType: string, timeoutMs: number = 10000): ARFuture<T> {
        const resultFuture = new ARFutureImpl<T>();

        // 1. Проверяем, может фабрика уже здесь?
        const existing = this.findFactory<T>(moduleName, factoryType);
        if (existing) {
            resultFuture.tryDone(existing);
            return resultFuture;
        }

        // 2. Устанавливаем таймаут
        const timeoutDisposer = RU.schedule(timeoutMs, () => {
            if (resultFuture.isNotDone()) {
                resultFuture.error(new ClientTimeoutException(`Timeout waiting for factory: ${factoryType} -> ${moduleName}`));
            }
        });

        // 3. Подписываемся на будущие добавления
        const set = this.findFactories<T>(factoryType);

        // Используем TaskConsumer, чтобы подписка сработала один раз
        const task = createTaskConsumer<T>((factory: T) => {
            if (factory.getModuleName() === moduleName) {
                // tryDone вернет true только если future еще не был выполнен (например, по таймауту)
                if (resultFuture.tryDone(factory)) {
                    timeoutDisposer[Symbol.dispose](); // Отменяем таймаут
                }
                // TaskConsumer автоматически удалится из EventConsumer после выполнения
            }
        });

        // Подписываемся через .once(), который использует TaskConsumer
        set.forAdd.once(task);

        // 4. Обрабатываем отмену/ошибку (например, по таймауту)
        // Нам нужно отписаться, если future завершился неудачно
        const cleanupListener = () => {
            set.forAdd.remove(task); // Удаляем TaskConsumer из подписчиков
            timeoutDisposer[Symbol.dispose](); // На всякий случай
        };
        resultFuture.onError(cleanupListener);
        resultFuture.onCancel(cleanupListener);

        // 5. Повторная проверка на случай гонки потоков
        // (фабрика могла быть добавлена между findFactory и set.forAdd.once)
        const existingAfterListen = this.findFactory<T>(moduleName, factoryType);
        if (existingAfterListen && !task.isExecuted()) {
            task(existingAfterListen); // Выполняем задачу вручную
        }

        return resultFuture;
    }
}

/**
 * Глобальный синглтон-экземпляр реестра модулей.
 * * @example
 * // В файле модуля (например, MyFastMetaClient.ts):
 * import { AetherModuleRegistry, Factory } from './aether.core.ts';
 * * class MyClientFactory implements Factory, FastMetaClientFactory {
 * getModuleName(): string { return "my-client"; }
 * getFactoryType(): string { return "FastMetaClientFactory"; }
 * createClient(): FastMetaClient { ... }
 * }
 * * // Регистрация (выполнится при импорте файла)
 * AetherModuleRegistry.registerFactory(new MyClientFactory());
 * * * // В файле приложения (например, main.ts):
 * import './MyFastMetaClient.ts'; // Импорт для побочного эффекта (регистрации)
 * import { AetherModuleRegistry } from './aether.core.ts';
 * * // ...
 * const factory = AetherModuleRegistry.findFactory<FastMetaClientFactory>("my-client", "FastMetaClientFactory");
 * const client = factory.createClient();
 */
export const AetherModuleRegistry = new ModuleRegistry();


// =============================================================================================
// SECTION 15: Crypto Implementation (Mocks)
// =============================================================================================

// Needs AKey, Sign, Signer, PairKeys, PairSignKeys, SignedKey, CryptoProvider, CryptoEngine, LogFacade, HexUtilsCrypto
const HexUtilsCrypto = {
    hexToBytes: (hex: string): Uint8Array => {
        if (hex.length % 2 !== 0) throw new Error(`Invalid hex string (odd length): ${hex}`);
        const bytes = [];
        for (let i = 0; i < hex.length; i += 2) {
            const byteString = hex.substring(i, i + 2);
            const byte = parseInt(byteString, 16);
            if (isNaN(byte)) throw new Error(`Invalid hex string component: ${byteString}`);
            bytes.push(byte);
        }
        return new Uint8Array(bytes);
    },
    toHexString: (bytes: Uint8Array | null | undefined): string => { // Handle null/undefined
        if (!bytes) return '';
        return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    }
};

const MockCryptoProvider: CryptoProvider = {
    getCryptoLibName: () => "MOCK",
    createSigner: (keys: PairSignKeys): Signer => ({
        checkSign: (_d: Uint8Array, _s: Sign) => true,
        getPublicKey: () => keys.publicKey,
        getProviderName: () => "MOCK",
        getCryptoProvider: () => MockCryptoProvider,
        sign: (dataOrKey: Uint8Array | AKey): Sign => {
            const data = dataOrKey instanceof Uint8Array ? dataOrKey : dataOrKey.getData();
            const mockSignData = new Uint8Array([...data.slice(0, 8), ...(keys.privateKey?.getData()?.slice(0, 8) ?? [])]);
            return {
                getSignData: () => mockSignData,
                getProviderName: () => "MOCK",
                getCryptoProvider: () => MockCryptoProvider,
            };
        }
    }),
    createAsymmetricEngine: (_priv: AKey.AsymmetricPrivate, _pub: AKey.AsymmetricPublic): CryptoEngine => ({
        decrypt: (data: Uint8Array) => data,
        of: (k: Key) => CryptoEngineImpl.of(k)
    }),
    createKey: <T extends AKey>(arg1: KeyType | string, arg2?: Uint8Array): T => {
        let keyType: KeyType; let data: Uint8Array;
        if (typeof arg1 === 'string') {
            const parts = arg1.split(':'); if (parts.length !== 3) throw new Error(`Invalid string key format: ${arg1}`);
            const typeName = parts[0] as keyof typeof KeyType; if (!(typeName in KeyType)) throw new Error(`Invalid key type in string: ${typeName}`);
            keyType = KeyType[typeName]; data = HexUtilsCrypto.hexToBytes(parts[2]);
        } else { keyType = arg1; if (!arg2) throw new Error("Data required"); data = arg2; }
        const baseKey = {
            getData: () => data, getKeyType: () => keyType, getProviderName: () => "MOCK", getCryptoProvider: () => MockCryptoProvider,
            keyToString: () => `${KeyType[keyType]}:MOCK:${HexUtilsCrypto.toHexString(data)}`,
            toSignedKey(s: Sign | Signer): SignedKey { return new SignedKey(this as AKey, s); }
        };
        if (keyType === KeyType.SIGN_PUBLIC) {
            (baseKey as AKey.SignPublic).toSignChecker = () => ({
                checkSign: (_d: Uint8Array, _s: Sign) => true, getPublicKey: () => baseKey as AKey.SignPublic,
                getProviderName: () => "MOCK", getCryptoProvider: () => MockCryptoProvider,
            });
        }
        return baseKey as T;
    },
    createSign: (dataOrHex: string | Uint8Array): Sign => {
        const data = typeof dataOrHex === 'string' ? HexUtilsCrypto.hexToBytes(dataOrHex) : dataOrHex;
        return { getSignData: () => data, getProviderName: () => "MOCK", getCryptoProvider: () => MockCryptoProvider };
    }
};

export const CryptoProviderFactory = {
    createSignChecker: (s: string): SignChecker | null => {
        try { const k = MockCryptoProvider.createKey<AKey.SignPublic>(s); return k.getKeyType() === KeyType.SIGN_PUBLIC ? k.toSignChecker() : null; }
        catch (e) { LogFacade.error("Error creating SignChecker", e as Error, { s }); return null; }
    },
    createKey: (s: string): AKey | null => {
        try { return MockCryptoProvider.createKey(s); }
        catch (e) { LogFacade.error("Error creating Key", e as Error, { s }); return null; }
    }
};

export namespace SignCheckerUtil { export function of(s: string): SignChecker | null { return CryptoProviderFactory.createSignChecker(s); } }
export namespace PairKeysDefaults { export function toCryptoEngine(p: PairKeys): CryptoEngine { const pk = p.getPublicKey(); const prk = p.getPrivateKey(); if (pk.getKeyType() !== KeyType.ASYMMETRIC_PUBLIC || !prk || prk.getKeyType() !== KeyType.ASYMMETRIC_PRIVATE) throw new Error(`Invalid key types. Pub:${KeyType[pk.getKeyType()]}, Priv:${prk ? KeyType[prk.getKeyType()] : 'null'}`); return p.getCryptoProvider().createAsymmetricEngine(prk as AKey.AsymmetricPrivate, pk as AKey.AsymmetricPublic); } }

export class PairSignKeys implements PairKeys {
    public readonly publicKey: AKey.SignPublic; public readonly privateKey: AKey.SignPrivate | null;
    constructor(pub: AKey.SignPublic, priv: AKey.SignPrivate | null) { if (pub.getKeyType() !== KeyType.SIGN_PUBLIC || (priv && priv.getKeyType() !== KeyType.SIGN_PRIVATE)) throw new Error("Invalid key types"); this.publicKey = pub; this.privateKey = priv; }
    public toSigner(): Signer { if (!this.privateKey) throw new Error("No private key"); return this.getCryptoProvider().createSigner(this); }
    public getProviderName(): string { return this.publicKey.getProviderName(); }
    public getCryptoProvider(): CryptoProvider { return this.publicKey.getCryptoProvider(); }
    public getPublicKey(): AKey.SignPublic { return this.publicKey; }
    public getPrivateKey(): AKey.SignPrivate | null { return this.privateKey; }
    public toCryptoEngine(): CryptoEngine { throw new Error("PairSignKeys cannot be used for encryption."); }
}
export class SignedKey implements CryptoProviderUnit {
    public key: AKey;
    public sign: Sign;
    constructor(key: AKey, signOrSigner: Sign | Signer) {
        if (!key || !signOrSigner) throw new Error("Args required");
        this.key = key;
        if (typeof (signOrSigner as Signer).sign === 'function') {
            this.sign = (signOrSigner as Signer).sign(key);
        } else {
            this.sign = signOrSigner as Sign;
        }
    }
    public getProviderName(): string { return this.key.getProviderName(); }
    public getCryptoProvider(): CryptoProvider { return this.key.getCryptoProvider(); }
    public static of(k: AKey, s: Sign): SignedKey { return new SignedKey(k, s); }
    public getKey(): AKey { return this.key; }
    public getSign(): Sign { return this.sign; }
    public check(soc: AKey.SignPublic | SignChecker): boolean { let chk: SignChecker; if (typeof (soc as AKey.SignPublic).toSignChecker === 'function') chk = (soc as AKey.SignPublic).toSignChecker(); else chk = soc as SignChecker; try { return chk.checkSign(this.key.getData(), this.sign); } catch (e) { LogFacade.error("Sign check error", e as Error); return false; } }
    public toString(): string { return `${this.key.keyToString()}:${this.sign.getProviderName()}:${HexUtilsCrypto.toHexString(this.sign.getSignData())}`; }
    public static fromString(s: string, cryptoProvider: CryptoProvider = MockCryptoProvider): SignedKey | null {
        try {
            const lastColon = s.lastIndexOf(':'); if (lastColon === -1) throw new Error("Bad format: missing sign hex");
            const secondLastColon = s.lastIndexOf(':', lastColon - 1); if (secondLastColon === -1) throw new Error("Bad format: missing sign provider");
            const keyString = s.substring(0, secondLastColon); const signHex = s.substring(lastColon + 1);
            const key = cryptoProvider.createKey(keyString); const sign = cryptoProvider.createSign(signHex);
            return new SignedKey(key, sign);
        } catch (e) { LogFacade.error("Error parsing SignedKey", e as Error, { s }); return null; }
    }
}
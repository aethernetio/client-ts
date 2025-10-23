// =============================================================================================
// FILE: aether_logging.ts (TypeScript Contextual Logger Implementation - FINAL)
// PURPOSE: A powerful contextual and structured logger, adapted from Java's architecture.
// =============================================================================================

import { ToString, AStringBase, UUID } from './aether_astring';
import {
    Disposable, Executor, ARunnable, AConsumer, APredicate,
    ASupplier, AFunction, ABiConsumer
} from './aether_types';

// --- Type Definitions ---

/** Log levels corresponding to the Java Enum. */
export enum LogLevel { TRACE = 'TRACE', DEBUG = 'DEBUG', INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR' }

/** Log entry keys (similar to Log.java constants). */
export const LogKeys = {
    TIME: 'logTime',
    LEVEL: 'logLevel',
    SYSTEM_COMPONENT: 'SystemComponent',
    MSG: 'logMessage',
    EXCEPTION_STR: 'exception',
};

/** A single, immutable log context node, representing structured data. */
export interface LNode {
    readonly id: number;
    /** The combined data map for this node. */
    readonly data: Map<string, any>;
    /** Reference to the parent node/context. */
    readonly parent: LNode | null;
    /** Logs this node using the AString printer (for console output). */
    logPrint(): void;
    /** Gets a value from the combined context chain (this node and all parents). */
    get(key: string): any;
    /** Iterates over all key-value pairs in the combined context. */
    forEach(callback: (key: string, value: any) => void): void;
    /** Checks if a specific value exists in the context for a given key. */
    check(key: string, value: any): boolean;
    getLevel(): LogLevel | undefined;
}

/** Standard format for key-value log data objects. */
export type LogData = Record<string, any>;

/** A predicate function used for filtering LNodes. */
export type LogFilter = APredicate<LNode>;

/** Disposable wrapper for context management (similar to LogAutoClose). */
export interface ContextCloser extends Disposable {
    readonly node: LNode;
}

// --- Implementation Classes ---

/** Simple implementation of LNode. */
class SimpleLNode implements LNode {
    readonly id: number;
    readonly data: Map<string, any>;
    parent: LNode | null;

    constructor(id: number, data: LogData, parent: LNode | null) {
        this.id = id;
        this.data = new Map(Object.entries(data));
        this.parent = parent;
    }

    /** @inheritDoc */
    get(key: string): any {
        let current: LNode | null = this;
        while (current) {
            const val = current.data.get(key);
            if (val !== undefined) {
                return val;
            }
            current = current.parent;
        }
        return undefined;
    }

    /** @inheritDoc */
    forEach(callback: (key: string, value: any) => void): void {
        const seenKeys = new Set<string>();
        let current: LNode | null = this;
        while (current) {
            current.data.forEach((value, key) => {
                if (!seenKeys.has(key)) {
                    callback(key, value);
                    seenKeys.add(key);
                }
            });
            current = current.parent;
        }
    }

    /** @inheritDoc */
    check(key: string, value: any): boolean {
        return this.get(key) === value;
    }

    /** @inheritDoc */
    getLevel(): LogLevel | undefined {
        return this.get(LogKeys.LEVEL) as LogLevel;
    }

    /** @inheritDoc */
    logPrint(): void {
        console.log(`[LNode #${this.id}] ${this.get(LogKeys.MSG)}`);
        this.forEach((k, v) => {
            if (k !== LogKeys.MSG) console.log(`  ${k}: ${v}`);
        });
    }

    get msg() { return this.get(LogKeys.MSG); }
}

class ContextCloserImpl implements ContextCloser {
    readonly node: LNode;
    constructor(node: LNode) { this.node = node; }
    public [Symbol.dispose](): void { LogStatics.pop(this.node); }
}

/** Central static logic and state management for the logger. */
export class LogStatics {
    private static ID_COUNTER = 0;
    private static readonly LOG_STACK: LNode[] = [];
    private static IS_ENABLED = true;
    private static LOG_FILTER: LogFilter = (_node: LNode) => LogStatics.IS_ENABLED;
    private static readonly LISTENERS: { filter: LogFilter, consumer: AConsumer<LNode>, disposer: Disposable }[] = [];

    // --- Core Stack Management ---

    /** Gets the current combined context node from the stack. */
    public static get(): LNode | null {
        if (!LogStatics.IS_ENABLED || LogStatics.LOG_STACK.length === 0) return null;
        return LogStatics.LOG_STACK[LogStatics.LOG_STACK.length - 1];
    }

    /** Pushes a new node onto the context stack. */
    public static push(node: LNode): void {
        if (!LogStatics.IS_ENABLED) return;
        (node as SimpleLNode).parent = this.get();
        LogStatics.LOG_STACK.push(node);
    }

    /** Pops the expected node from the context stack. */
    public static pop(node: LNode): void {
        if (!LogStatics.IS_ENABLED) return;
        const top = LogStatics.LOG_STACK[LogStatics.LOG_STACK.length - 1];
        if (top === node) {
            LogStatics.LOG_STACK.pop();
        } else {
            console.error("Logger context stack corruption: Node to pop is not the top element.");
        }
    }

    // --- Context Creation ---

    /** Creates a new LNode from structured data. */
    public static of(data: LogData = {}): LNode {
        if (!LogStatics.IS_ENABLED) return {} as LNode;
        return new SimpleLNode(++LogStatics.ID_COUNTER, data, null);
    }

    /** * Creates an auto-closing context (from data) OR pushes an existing LNode onto the stack.
     * @param dataOrNode The structured log data (`{key: value}`) OR an existing LNode instance.
     * @returns A ContextCloser object to be used in try-finally or using().
     */
    public static context(dataOrNode: LogData | LNode): ContextCloser {
        if (!LogStatics.IS_ENABLED) return { [Symbol.dispose]: () => {} } as ContextCloser;

        let node: LNode;

        // Check if the argument is already an LNode instance
        const isLNode = dataOrNode &&
            (typeof (dataOrNode as LNode).id === 'number') &&
            (typeof (dataOrNode as LNode).get === 'function');

        if (isLNode) {
            node = dataOrNode as LNode;
        } else {
            // Treat as LogData and create a new node
            node = LogStatics.of(dataOrNode as LogData);
        }

        // Push the LNode onto the stack
        LogStatics.push(node);
        return new ContextCloserImpl(node);
    }

    // --- Core Log Processing ---

    private static log(level: LogLevel, msg: string | ToString, data: LogData, throwable?: Error): LNode {
        if (!LogStatics.IS_ENABLED) return {} as LNode;

        const logData: LogData = {
            [LogKeys.TIME]: new Date(),
            [LogKeys.LEVEL]: level,
            [LogKeys.MSG]: LogStatics.resolveMessage(msg),
            ...data,
        };

        if (throwable) {
            logData[LogKeys.EXCEPTION_STR] = throwable;
            logData[LogKeys.MSG] = (msg && typeof msg === 'string') ? msg : (throwable.message || 'Error occurred');
        }

        const logNode = LogStatics.of(logData);

        (logNode as SimpleLNode).parent = this.get();

        if (LogStatics.LOG_FILTER(logNode)) {
            LogStatics.publish(logNode);
        }
        return logNode;
    }

    private static resolveMessage(msg: string | ToString): string {
        if (typeof msg === 'string') return msg;
        if (msg instanceof UUID) return msg.toString();

        try {
            const sb = AStringBase.ofEmpty();
            (msg as ToString).toString(sb);
            return sb.toString();
        } catch (e) {
            return `[Error rendering object: ${e instanceof Error ? e.message : String(e)}]`;
        }
    }

    private static publish(node: LNode): void {
        const time = node.get(LogKeys.TIME) as Date;
        const level = node.get(LogKeys.LEVEL) as LogLevel;
        const msg = node.get(LogKeys.MSG) as string;
        const component = node.get(LogKeys.SYSTEM_COMPONENT) || 'GLOBAL';

        const contextData: LogData = {};
        node.forEach((k, v) => {
            if (!Object.values(LogKeys).includes(k)) { contextData[k] = v; }
        });

        const exception = node.get(LogKeys.EXCEPTION_STR) as Error;
        const exceptionStr = exception ? `\n\tException: ${exception.stack || exception.message}` : '';

        const logFunc = (l: LogLevel) => {
            if (l === LogLevel.ERROR) return console.error.bind(console);
            if (l === LogLevel.WARN) return console.warn.bind(console);
            if (l === LogLevel.INFO) return console.info.bind(console);
            if (l === LogLevel.DEBUG) return console.debug.bind(console);
            return console.log.bind(console);
        };

        const logMessage = `[${time.toISOString().substring(11, 23)}][${level}][${component}] ${msg}${exceptionStr}`;
        logFunc(level)(logMessage, Object.keys(contextData).length > 0 ? contextData : '');

        this.LISTENERS.forEach(listener => {
            try {
                if (listener.filter(node)) { listener.consumer(node); }
            } catch (e) {
                console.error("Error in log listener:", e);
            }
        });
    }

    // --- Logging API Methods ---

    /** * Logs a TRACE level message.
     * @param msg The log message string or a ToString object.
     * @param data Optional structured data object (`{key: value}`).
     * @returns The created LNode.
     */
    public static trace(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.TRACE, msg, data); }

    /** * Logs a DEBUG level message.
     * @param msg The log message string or a ToString object.
     * @param data Optional structured data object (`{key: value}`).
     * @returns The created LNode.
     */
    public static debug(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.DEBUG, msg, data); }

    /** * Logs an INFO level message.
     * @param msg The log message string or a ToString object.
     * @param data Optional structured data object (`{key: value}`).
     * @returns The created LNode.
     */
    public static info(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.INFO, msg, data); }

    /** * Logs a WARN level message.
     * @param msg The log message string or a ToString object.
     * @param data Optional structured data object (`{key: value}`).
     * @returns The created LNode.
     */
    public static warn(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.WARN, msg, data); }

    /** * Logs an ERROR level message. Supports multiple signature styles.
     * @param msgOrThrowable The primary message string or the Error object itself.
     * @param throwableOrData The optional Error object to log stack trace, or the data object.
     * @param data Optional structured data object (`{key: value}`).
     * @returns The created LNode.
     */
    public static error(msgOrThrowable: string | ToString | Error, throwableOrData?: Error | LogData, data: LogData = {}): LNode {
        let msg: string | ToString;
        let throwable: Error | undefined;
        let finalData: LogData = data;

        if (msgOrThrowable instanceof Error) {
            throwable = msgOrThrowable;
            msg = throwable.message;
            if (throwableOrData) finalData = throwableOrData as LogData;
        } else {
            msg = msgOrThrowable;
            if (throwableOrData instanceof Error) {
                throwable = throwableOrData;
                if (data) finalData = data;
            } else if (throwableOrData) {
                finalData = throwableOrData as LogData;
            }
        }
        return this.log(LogLevel.ERROR, msg, finalData, throwable);
    }

    // --- Wrapper Methods (Preserving Context) ---

    public static wrapInternal<T extends Function>(fn: T): T {
        const capturedContextNode = this.get();
        if (!capturedContextNode) return fn;

        const wrapper = function(this: any, ...args: any[]) {
            const needsPush = !LogStatics.LOG_STACK.includes(capturedContextNode);

            if (needsPush) { LogStatics.push(capturedContextNode); }
            try { return fn.apply(this, args); }
            finally { if (needsPush) { LogStatics.pop(capturedContextNode); } }
        };
        return wrapper as unknown as T;
    }

    /** * Wraps an Executor function to ensure the current logging context is preserved
     * when the task (ARunnable) is executed.
     * @param executor The original Executor function.
     * @returns The wrapped Executor function.
     */
    public static wrapExecutor(executor: Executor): Executor {
        return (command: ARunnable) => {
            const wrappedCommand = this.wrapInternal(command);
            executor(wrappedCommand);
        };
    }

    /** * Wraps a function (Runnable, Supplier, Consumer, Function, BiConsumer) to preserve logging context.
     * @param fn The function to wrap.
     * @returns The wrapped function.
     */
    public static wrap<T extends ARunnable | ASupplier<any> | AConsumer<any> | AFunction<any, any> | ABiConsumer<any, any>>(fn: T): T {
        return this.wrapInternal(fn as unknown as Function) as unknown as T;
    }

    // --- Global Controls ---

    /** Disables all logging globally. */
    public static loggerOff(): void { this.IS_ENABLED = false; }

    /** Enables all logging globally. */
    public static loggerOn(): void { this.IS_ENABLED = true; }

    /** Adds a log filter predicate. */
    public static addFilter(_filter: LogFilter): void { /* filter logic here */ }

    /** * Adds a listener for published log events.
     * @param filter Filter for which events to receive.
     * @param consumer Consumer to handle the filtered log events.
     * @returns Disposable object to remove the listener.
     */
    public static addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable {
        const listenerEntry = { filter, consumer: this.wrapInternal(consumer), disposer: { [Symbol.dispose]: () => { } } };
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

    /** The public, globally accessible logging facade. */
    public static readonly Log: LogFacadeInterface = {
        // Initialize all readonly properties here
        LEVEL: LogKeys.LEVEL,
        SYSTEM_COMPONENT: LogKeys.SYSTEM_COMPONENT,
        MSG: LogKeys.MSG,
        EXCEPTION_STR: LogKeys.EXCEPTION_STR,
    } as LogFacadeInterface;
}


// --- LogFacade Interface (Public API) ---

/**
 * Interface representing the public Log object.
 */
export interface LogFacadeInterface {
    // Keys
    readonly LEVEL: string;
    readonly SYSTEM_COMPONENT: string;
    readonly MSG: string;
    readonly EXCEPTION_STR: string;

    // Context
    /** Creates an LNode from key-value pairs. */
    of(data: LogData): LNode;
    /** Gets the current combined context node. */
    get(): LNode | null;
    /** Pushes an LNode onto the context stack. */
    push(n: LNode): void;
    /** Pops the expected LNode from the context stack. */
    pop(n: LNode): void;
    /** Creates and pushes an auto-closing context (from data) or pushes an existing LNode. */
    context(dataOrNode: LogData | LNode): ContextCloser;

    // Logging Methods
    /** Logs a TRACE level message. */
    trace(msg: string | ToString, data?: LogData): LNode;
    /** Logs a DEBUG level message. */
    debug(msg: string | ToString, data?: LogData): LNode;
    /** Logs an INFO level message. */
    info(msg: string | ToString, data?: LogData): LNode;
    /** Logs a WARN level message. */
    warn(msg: string | ToString, data?: LogData): LNode;
    /** Logs an ERROR level message. */
    error(msg: string | ToString | Error, throwable?: Error | LogData, data?: LogData): LNode;

    // Wrappers
    /** Wraps an Executor function to preserve logging context in executed tasks. */
    wrapExecutor(executor: Executor): Executor;
    /** Wraps a function (Runnable, Supplier, Consumer, Function, BiConsumer) to preserve logging context. */
    wrap<T extends ARunnable | ASupplier<any> | AConsumer<any> | AFunction<any, any> | ABiConsumer<any, any>>(fn: T): T;

    // Controls
    /** Disables all logging globally. */
    loggerOff(): void;
    /** Enables all logging globally. */
    loggerOn(): void;
    /** Adds a log filter predicate. */
    addFilter(filter: LogFilter): void;
    /** Adds a listener for log events with filtering. */
    addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable;
}

// Final Log Export (assigning method properties to the initialized readonly instance)
LogStatics.Log.of = LogStatics.of.bind(LogStatics);
LogStatics.Log.get = LogStatics.get.bind(LogStatics);
LogStatics.Log.push = LogStatics.push.bind(LogStatics);
LogStatics.Log.pop = LogStatics.pop.bind(LogStatics);
LogStatics.Log.context = LogStatics.context.bind(LogStatics);
LogStatics.Log.trace = LogStatics.trace.bind(LogStatics) as any;
LogStatics.Log.debug = LogStatics.debug.bind(LogStatics) as any;
LogStatics.Log.info = LogStatics.info.bind(LogStatics) as any;
LogStatics.Log.warn = LogStatics.warn.bind(LogStatics) as any;
LogStatics.Log.error = LogStatics.error.bind(LogStatics) as any;
LogStatics.Log.wrapExecutor = LogStatics.wrapExecutor.bind(LogStatics);
LogStatics.Log.wrap = LogStatics.wrap.bind(LogStatics) as any;
LogStatics.Log.loggerOff = LogStatics.loggerOff.bind(LogStatics);
LogStatics.Log.loggerOn = LogStatics.loggerOn.bind(LogStatics);
LogStatics.Log.addFilter = LogStatics.addFilter.bind(LogStatics);
LogStatics.Log.addListener = LogStatics.addListener.bind(LogStatics);

/**
 * The globally accessible logging object (Facade), providing static-like methods
 * for contextual logging.
 */
export const Log: LogFacadeInterface = LogStatics.Log;
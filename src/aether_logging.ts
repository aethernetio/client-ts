// =============================================================================================
// FILE: aether_logging.ts (TypeScript Contextual Logger Implementation - FINAL)
// PURPOSE: A powerful contextual and structured logger, adapted from Java's architecture.
// =============================================================================================

import { ToString, AString } from './aether_astring';
import {
    Disposable, Executor, ARunnable, AConsumer, APredicate,
    ASupplier, AFunction, ABiConsumer
} from './aether_types';
// ИМПОРТИРУЕМ НОВЫЙ LogPrinter
import { LogPrinter } from './LogPrinter';

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
        // This method is no longer the primary output.
        // It can be used for debugging.
        const sb = AString.of();
        sb.add(`[LNode #${this.id}] ${this.get(LogKeys.MSG) ?? ''}\n`);
        this.forEach((k, v) => {
            if (k !== LogKeys.MSG) sb.add(`  ${k}: ${v}\n`);
        });
        console.log(sb.toString());
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
        if (!LogStatics.IS_ENABLED) return { } as LNode; // Dummy
        return new SimpleLNode(++LogStatics.ID_COUNTER, data, null);
    }

    /**
     * Creates a new LNode, combining provided data with the current
     * stack context (snapshot), but DOES NOT push the node to the stack.
     */
    public static createContext(data: LogData = {}): LNode {
        if (!LogStatics.IS_ENABLED) return {} as LNode; // Dummy
        const newNode = LogStatics.of(data);
        const currentContext = LogStatics.get();
        if (currentContext) {
            (newNode as SimpleLNode).parent = currentContext;
        }
        return newNode;
    }


    /**
     * Creates an auto-closing context (from data) OR pushes an existing LNode onto the stack.
     */
    public static context(dataOrNode: LogData | LNode): ContextCloser {
        if (!LogStatics.IS_ENABLED) return { [Symbol.dispose]: () => {} } as ContextCloser;

        let node: LNode;
        const isLNode = dataOrNode &&
            (typeof (dataOrNode as LNode).id === 'number') &&
            (typeof (dataOrNode as LNode).get === 'function');

        if (isLNode) {
            node = dataOrNode as LNode;
        } else {
            node = LogStatics.of(dataOrNode as LogData);
        }

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
            if (!msg) {
                 logData[LogKeys.MSG] = throwable.message || 'Error occurred';
            }
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

        try {
            const sb = AString.of();
            (msg as ToString).toString(sb);
            return sb.toString();
        } catch (e) {
            return `[Error rendering object: ${e instanceof Error ? e.message : String(e)}]`;
        }
    }

    /**
     * Publishes the log node to all registered listeners.
     * This method NO LONGER prints to the console directly.
     */
    private static publish(node: LNode): void {
        this.LISTENERS.forEach(listener => {
            try {
                if (listener.filter(node)) {
                    listener.consumer(node);
                }
            } catch (e) {
                console.error("Error in log listener:", e);
            }
        });
    }

    // --- Logging API Methods ---

    public static trace(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.TRACE, msg, data); }
    public static debug(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.DEBUG, msg, data); }
    public static info(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.INFO, msg, data); }
    public static warn(msg: string | ToString, data: LogData = {}): LNode { return this.log(LogLevel.WARN, msg, data); }

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
                finalData = { ...throwableOrData, ...data };
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

    public static wrapExecutor(executor: Executor): Executor {
        return (command: ARunnable) => {
            const wrappedCommand = this.wrapInternal(command);
            executor(wrappedCommand);
        };
    }

    public static wrap<T extends ARunnable | ASupplier<any> | AConsumer<any> | AFunction<any, any> | ABiConsumer<any, any>>(fn: T): T {
        return this.wrapInternal(fn as unknown as Function) as unknown as T;
    }

    // --- Global Controls ---

    public static loggerOff(): void { this.IS_ENABLED = false; }
    public static loggerOn(): void { this.IS_ENABLED = true; }
    public static addFilter(filter: LogFilter): void {
        const oldFilter = this.LOG_FILTER;
        this.LOG_FILTER = (node) => oldFilter(node) && filter(node);
    }

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

    // --- Printer Factory (NEW) ---

    private static consolePrinter: LogPrinter | null = null;

    /**
     * Creates and attaches a colored console printer, similar to the Java version.
     * Ensures only one console printer is created.
     * @param filter An optional filter to apply just for this printer.
     */
    public static printConsoleColored(filter: LogFilter = () => true): LogPrinter {
        if (LogStatics.consolePrinter) {
            return LogStatics.consolePrinter;
        }

        // Define columns based on Java implementation
        const columns = [
            LogPrinter.col(LogKeys.TIME, (v: Date) =>
                // Simple ISO time format
                v.toISOString().substring(11, 23)
            ).min(12),
            LogPrinter.splitter(" "),
            LogPrinter.col(LogKeys.LEVEL).min(5),
            LogPrinter.splitter("│"),
            LogPrinter.col(LogKeys.SYSTEM_COMPONENT).min(10),
            LogPrinter.splitter("│"),
            LogPrinter.col(LogKeys.MSG).min(50), // Java has custom logic, we'll keep it simple
            LogPrinter.splitter("  "),
            LogPrinter.colAll()
        ];

        // Create a LogPrinter subclass that applies color
        const printer = new class extends LogPrinter {
            constructor() {
                super(columns, filter);
            }

            override printNode(s: AString, n: LNode): AString {
                const level = n.getLevel();
                if (level) {
                    switch (level) {
                        case LogLevel.TRACE: s.styleForeground(null, 150, 150, 150); break;
                        case LogLevel.DEBUG: s.styleForeground(null, 100, 255, 100); break;
                        case LogLevel.INFO: s.styleForeground(null, 100, 100, 255); break;
                        case LogLevel.WARN: s.styleForeground(null, 255, 50, 50); break;
                        case LogLevel.ERROR: s.styleForeground(null, 255, 0, 0); break;
                    }
                }

                // Call super.printNode to print columns
                super.printNode(s, n);
                // Clear style
                s.styleClear();
                return s;
            }
        }();

        LogStatics.consolePrinter = printer;
        return printer;
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

export interface LogFacadeInterface {
    // Keys
    readonly LEVEL: string;
    readonly SYSTEM_COMPONENT: string;
    readonly MSG: string;
    readonly EXCEPTION_STR: string;

    // Context
    of(data: LogData): LNode;
    get(): LNode | null;
    push(n: LNode): void;
    pop(n: LNode): void;
    context(dataOrNode: LogData | LNode): ContextCloser;
    createContext(data?: LogData): LNode;

    // Logging Methods
    trace(msg: string | ToString, data?: LogData): LNode;
    debug(msg: string | ToString, data?: LogData): LNode;
    info(msg: string | ToString, data?: LogData): LNode;
    warn(msg: string | ToString, data?: LogData): LNode;
    error(msg: string | ToString | Error, throwable?: Error | LogData, data?: LogData): LNode;

    // Wrappers
    wrapExecutor(executor: Executor): Executor;
    wrap<T extends ARunnable | ASupplier<any> | AConsumer<any> | AFunction<any, any> | ABiConsumer<any, any>>(fn: T): T;

    // Controls
    loggerOff(): void;
    loggerOn(): void;
    addFilter(filter: LogFilter): void;
    addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable;

    // Printers (NEW)
    /** Creates and attaches a colored console printer. */
    printConsoleColored(filter?: LogFilter): LogPrinter;
}

// Final Log Export (assigning method properties to the initialized readonly instance)
LogStatics.Log.of = LogStatics.of.bind(LogStatics);
LogStatics.Log.get = LogStatics.get.bind(LogStatics);
LogStatics.Log.push = LogStatics.push.bind(LogStatics);
LogStatics.Log.pop = LogStatics.pop.bind(LogStatics);
LogStatics.Log.context = LogStatics.context.bind(LogStatics);
LogStatics.Log.createContext = LogStatics.createContext.bind(LogStatics);
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
LogStatics.Log.printConsoleColored = LogStatics.printConsoleColored.bind(LogStatics); // <<< ДОБАВЛЕНО

/**
 * The globally accessible logging object (Facade), providing static-like methods
 * for contextual logging.
 */
export const Log: LogFacadeInterface = LogStatics.Log;
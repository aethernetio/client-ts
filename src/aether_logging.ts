// =============================================================================================
// FILE: aether_logging.ts (TypeScript Contextual Logger Implementation - FINAL)
// PURPOSE: A powerful contextual and structured logger, ported from the new Java architecture.
//          LogInternal = Static class with global stack and logic.
//          Log = Public facade.
//          LNode = "Smart" node with instance methods for logging.
//
// NOTE: This version uses a global stack, not AsyncLocalStorage.
// Context must be manually propagated into async callbacks using `Log.wrap()`.
// =============================================================================================

import { ToString, AString } from './aether_astring';
import {
    Disposable, Executor, ARunnable, AConsumer, APredicate,
    ASupplier, AFunction, ABiConsumer
} from './aether_types';
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

/** Standard format for key-value log data objects. */
export type LogData = Record<string, any>;

/** A predicate function used for filtering LNodes. */
export type LogFilter = APredicate<LNode>;

/** Disposable wrapper for context management (similar to LogAutoClose). */
export interface ContextCloser extends Disposable {
    readonly node: LNode;
}

// =============================================================================================
// LNode Implementation (The "Smart" Node)
// =============================================================================================

let LNODE_ID_COUNTER = 0;

/**
 * A single, immutable log context node.
 * This class now contains instance methods (.info, .warn, .add)
 * that create new child nodes, using `this` as the parent.
 */
export abstract class LNode {
    /** The unique ID for this node. */
    public readonly id: number = LNODE_ID_COUNTER++;
    /** The parent node in the single-linked list. */
    public readonly parent: LNode | null;

    protected constructor(parent: LNode | null) {
        this.parent = parent;
    }

    // --- Abstract Methods (to be implemented by private subclasses) ---

    /**
     * Gets a value for a key from *this node only*.
     * @param key The key to look up.
     * @returns The value, or undefined if not found.
     */
    protected abstract get0(key: string): any;

    /**
     * Iterates over key-value pairs *in this node only*.
     * @param callback The consumer to accept key-value pairs.
     */
    protected abstract forEach0(callback: (key: string, value: any) => void): void;

    /**
     * Counts key-value pairs *in this node only*.
     * @returns The count of pairs.
     */
    protected abstract count0(): number;

    // --- Core "add" Methods (equivalent to Java LNode.add) ---

    /**
     * Creates a new LNode (from key-value data) with `this` as its parent.
     * @param data The key-value data object.
     * @returns The new LNode.
     */
    public add(data: LogData): LNode {
        return LNode.ofData(this, data);
    }

    /**
     * Creates a new composite LNode with `this` as its parent.
     * @param nodes The child nodes to compose.
     * @returns The new LNode.
     */
    public addNodes(nodes: LNode[]): LNode {
        return LNode.ofComposite(this, nodes);
    }

    // --- Core API Methods (get, forEach, context) ---

    /**
     * Pushes this node onto the stack and returns a Disposable
     * that will pop it off when disposed.
     * @returns A ContextCloser (Disposable).
     */
    public context(): ContextCloser {
        LogInternal.push(this);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            node: self,
            [Symbol.dispose](): void {
                LogInternal.pop(self);
            }
        };
    }

    /**
     * Gets a value for a key, recursively searching parents (O(N) complexity).
     * @param key The key to look up.
     * @returns The value, or undefined if not found.
     */
    public get(key: string): any {
        let val = this.get0(key);
        if (val !== undefined) {
            return val;
        }
        if (this.parent) {
            return this.parent.get(key);
        }
        return undefined;
    }

    /**
     * Iterates over all key-value pairs, recursively searching parents.
     * @param callback The consumer to accept key-value pairs.
     */
    public forEach(callback: (key: string, value: any) => void): void {
        const seenKeys = new Set<string>();
        let current: LNode | null = this;
        while (current) {
            current.forEach0((key, value) => {
                if (!seenKeys.has(key)) {
                    callback(key, value);
                    seenKeys.add(key);
                }
            });
            current = current.parent;
        }
    }

    /**
     * Counts all key-value pairs, recursively searching parents.
     * @returns The total count of unique pairs.
     */
    public count(): number {
        let count = this.count0();
        if (this.parent) {
            count += this.parent.count(); // Note: This isn't perfectly accurate for composite keys
        }
        return count;
    }

    /**
     * Checks if the node and its parents are empty.
     * @returns true if count() is 0.
     */
    public isEmpty(): boolean {
        return this.count() === 0;
    }

    /**
     * Checks if a specific value exists in the context for a given key.
     * @param key The key to check.
     * @param value The value to check against.
     * @returns true if equal.
     */
    public check(key: string, value: any): boolean {
        return this.get(key) === value;
    }

    /**
     * Gets the log level (Log.LEVEL).
     * @returns The LogLevel enum, or undefined.
     */
    public getLevel(): LogLevel | undefined {
        return this.get(LogKeys.LEVEL) as LogLevel;
    }

    // --- Instance Logging Methods (The "Syntax Sugar") ---
    // These methods create a new log node and FIRE it.

    /**
     * Logs a custom LNode, firing it to the event bus.
     * @param node The node to log.
     */
    public log(node: LNode): void {
        if (!LogInternal.IS_ENABLED) return;
        LogInternal.fire(node);
    }

    /**
     * Logs a TRACE level message.
     * @param msg The message string or ToString object.
     * @param data Additional key-value data.
     * @returns The created LNode.
     */
    public trace(msg: string | ToString, data: LogData = {}): LNode {
        if (!LogInternal.IS_ENABLED || !LogInternal.TRACE) return LNode.EMPTY;

        data[LogKeys.TIME] = Date.now();
        data[LogKeys.LEVEL] = LogLevel.TRACE;
        data[LogKeys.MSG] = LogInternal.resolveMessage(msg);

        const logNode = this.add(data);
        LogInternal.fire(logNode);
        return logNode;
    }

    /**
     * Logs a DEBUG level message.
     * @param msg The message string or ToString object.
     * @param data Additional key-value data.
     * @returns The created LNode.
     */
    public debug(msg: string | ToString, data: LogData = {}): LNode {
        if (!LogInternal.IS_ENABLED) return LNode.EMPTY;

        data[LogKeys.TIME] = Date.now();
        data[LogKeys.LEVEL] = LogLevel.DEBUG;
        data[LogKeys.MSG] = LogInternal.resolveMessage(msg);

        const logNode = this.add(data);
        LogInternal.fire(logNode);
        return logNode;
    }

    /**
     * Logs an INFO level message.
     * @param msg The message string or ToString object.
     * @param data Additional key-value data.
     * @returns The created LNode.
     */
    public info(msg: string | ToString, data: LogData = {}): LNode {
        if (!LogInternal.IS_ENABLED) return LNode.EMPTY;
        data[LogKeys.TIME]=Date.now();
        data[LogKeys.LEVEL]=LogLevel.INFO;
        data[LogKeys.MSG]=LogInternal.resolveMessage(msg);
        let logNode=this.add(data);
        LogInternal.fire(logNode);
        return logNode;
    }

    /**
     * Logs a WARN level message.
     * @param msg The message string or ToString object.
     * @param data Additional key-value data.
     * @returns The created LNode.
     */
    public warn(msg: string | ToString, data: LogData = {}): LNode {
        if (!LogInternal.IS_ENABLED) return LNode.EMPTY;

        data[LogKeys.TIME] = Date.now();
        data[LogKeys.LEVEL] = LogLevel.WARN;
        data[LogKeys.MSG] = LogInternal.resolveMessage(msg);

        const logNode = this.add(data);
        LogInternal.fire(logNode);
        return logNode;
    }

    /**
     * Logs an ERROR level message.
     * @param msgOrThrowable The message, or the Error itself.
     * @param throwableOrData The Error (if msg was provided) or data (if Error was provided).
     * @param data Additional data.
     * @returns The created LNode.
     */
    public error(
        msgOrThrowable: string | ToString | Error,
        throwableOrData?: Error | LogData,
        data: LogData = {}
    ): LNode {
        if (!LogInternal.IS_ENABLED) return LNode.EMPTY;

        let msg: string | ToString;
        let throwable: Error | undefined;
        let finalData: LogData = data; // Начинаем с 3-го параметра

        if (msgOrThrowable instanceof Error) {
            throwable = msgOrThrowable;
            msg = throwable.message;
            // Если 2-й параметр есть, это и есть finalData
            if (throwableOrData) finalData = throwableOrData as LogData;
        } else {
            msg = msgOrThrowable;
            if (throwableOrData instanceof Error) {
                throwable = throwableOrData;
                // finalData уже `data` (3-й параметр)
            } else if (throwableOrData) {
                // 2-й параметр - это данные, объединяем с 3-м
                finalData = { ...throwableOrData, ...data };
            }
        }

        // `finalData` - это объект, который нужно модифицировать
        finalData[LogKeys.TIME] = Date.now();
        finalData[LogKeys.LEVEL] = LogLevel.ERROR;
        finalData[LogKeys.MSG] = LogInternal.resolveMessage(msg);

        if (throwable) {
            finalData[LogKeys.EXCEPTION_STR] = throwable;
        }

        const logNode = this.add(finalData); // Создаем один узел
        LogInternal.fire(logNode);
        return logNode;
    }

    // --- Static Factory Methods (Used by .add() and Log facade) ---

    /**
     * Factory for creating a node from key-value data.
     * @param parent The parent node.
     * @param data The data object.
     * @returns A new LNode.
     */
    public static ofData(parent: LNode | null, data: LogData): LNode {
        const map = new Map(Object.entries(data));
        const keys = Object.keys(data);

        return new class extends LNode {
            constructor() { super(parent); }
            protected get0(key: string): any { return map.get(key); }
            protected forEach0(cb: (k: string, v: any) => void): void {
                map.forEach((v, k) => cb(k, v));
            }
            protected count0(): number { return keys.length; }
        }();
    }

    /**
     * Factory for creating a composite node from other LNodes.
     * @param parent The parent node.
     * @param nodes The child nodes to compose.
     * @returns A new LNode.
     */
    public static ofComposite(parent: LNode | null, nodes: LNode[]): LNode {
        const validNodes = nodes.filter(n => n && !n.isEmpty());

        return new class extends LNode {
            constructor() { super(parent); }
            protected get0(key: string): any {
                for (const n of validNodes) {
                    const val = n.get(key); // Must use get() to check internal parents
                    if (val !== undefined) return val;
                }
                return undefined;
            }
            protected forEach0(cb: (k: string, v: any) => void): void {
                for (const n of validNodes) {
                    n.forEach(cb); // Must use forEach() to get all data
                }
            }
            protected count0(): number {
                return validNodes.reduce((sum, n) => sum + n.count(), 0);
            }
        }();
    }

    /**
     * A global, shared, immutable empty LNode.
     * This is returned when logging is disabled, silencing all
     * subsequent chained calls (.info, .warn, etc).
     */
    public static EMPTY: LNode = new class extends LNode {
        constructor() { super(null); }
        protected get0(): any { return undefined; }
        protected forEach0(): void { /* do nothing */ }
        protected count0(): number { return 0; }

        // Override all methods to do nothing
        public override add(): LNode { return this; }
        public override addNodes(): LNode { return this; }
        public override context(): ContextCloser { return { node: this, [Symbol.dispose]: () => { } }; }
        public override log(): void { /* do nothing */ }
        public override trace(): LNode { return this; }
        public override debug(): LNode { return this; }
        public override info(): LNode { return this; }
        public override warn(): LNode { return this; }
        public override error(): LNode { return this; }
    }();
}


// =============================================================================================
// LogInternal Class (The Static Facade and Stack Manager)
// =============================================================================================

/**
 * Central static logic and state management for the logger.
 * Renamed to `LogInternal` to avoid conflict with the exported `Log` const.
 */
class LogInternal {
    /**
     * The global logger stack.
     * This is a simple array, mimicking Java's ThreadLocal.
     * It is not automatically async-safe; `Log.wrap()` must be used.
     */
    private static readonly STACK: LNode[] = [];

    /**
     * Global TRACE toggle.
     */
    public static TRACE = true;
    /**
     * Global logger toggle.
     */
    public static IS_ENABLED = true;

    private static LOG_FILTER: LogFilter = (_node: LNode) => LogInternal.IS_ENABLED;
    private static readonly LISTENERS: { filter: LogFilter, consumer: AConsumer<LNode>, disposer: Disposable }[] = [];

    // --- Core Stack Management (Global Array) ---

    /**
     * Gets the current LNode from the top of the global stack.
     * If the stack is empty, it creates and pushes
     * a new "Root Node" to act as a base parent.
     * @returns The current LNode, or LNode.EMPTY if logging is disabled.
     */
    public static get(): LNode {
        // Case 1: Logging is globally disabled.
        if (!LogInternal.IS_ENABLED) {
            return LNode.EMPTY;
        }

        // We use the simple global STACK array. It always exists.
        const store = this.STACK;

        // Case 2: The stack is empty. Create and push the Root Node.
        // This is now 1:1 identical to your Java logic.
        if (store.length === 0) {
            // LNode.ofData(null, {}) creates the Root Node (null parent, empty data).
            const rootNode = LNode.ofData(null, {});

            // Push this new root node onto the stack.
            store.push(rootNode);

            return rootNode;
        }

        // Case 3: The stack is not empty. Return the top element.
        return store[store.length - 1];
    }

    /**
     * Pushes a new node onto the global stack.
     * @param node The LNode to push.
     */
    public static push(node: LNode): void {
        if (!LogInternal.IS_ENABLED) return;
        this.STACK.push(node);
    }

    /**
     * Pops the expected node from the global stack.
     * @param node The LNode to pop.
     */
    public static pop(node: LNode): void {
        if (!LogInternal.IS_ENABLED) return;

        const store = this.STACK;

        if (store.length > 0) {
            const top = store[store.length - 1];
            if (top === node) {
                store.pop();
            } else {
                console.error("Logger context stack corruption: Node to pop is not the top element.");
            }
        } else {
            // Store exists, but is empty
            console.error("Logger context stack corruption: Pop called on empty stack.");
        }
    }

    // --- Centralized Event & Utility Methods ---

    /**
     * Centralized method to dispatch a log event.
     * Applies the global filter and fires an event to listeners.
     * @param node The LNode to fire.
     */
    public static fire(node: LNode): void {
        if (!LogInternal.IS_ENABLED) return;
        if (!LogInternal.LOG_FILTER(node)) {
            return;
        }
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

    /**
     * Resolves a message object (string or ToString) into a string.
     * @param msg The message to resolve.
     * @returns The plain string message.
     */
    public static resolveMessage(msg: string | ToString): string {
        if (typeof msg === 'string') return msg;
        try {
            const sb = AString.of();
            (msg as ToString).toString(sb);
            return sb.toString();
        } catch (e) {
            return `[Error rendering object: ${e instanceof Error ? e.message : String(e)}]`;
        }
    }

    // --- Proxy Logging API Methods ---
    // These methods simply delegate to the current LNode (LogInternal.get()).

    /**
     * Creates a new LNode from data, using the current node as parent.
     * @param data The key-value data.
     * @returns The new LNode.
     */
    public static of(data: LogData = {}): LNode {
        return this.get().add(data);
    }

    /**
     * Creates a new composite LNode from other nodes, using the current node as parent.
     * @param nodes The nodes to compose.
     * @returns The new LNode.
     */
    public static ofNodes(nodes: LNode[]): LNode {
        return this.get().addNodes(nodes);
    }

    /**
     * Creates an auto-closing context.
     * @param dataOrNode The data for a new node, or an existing node.
     * @returns A ContextCloser (Disposable).
     */
    public static context(dataOrNode: LogData | LNode): ContextCloser {
        let node: LNode;
        if (dataOrNode instanceof LNode) {
            node = dataOrNode;
        } else {
            node = this.get().add(dataOrNode);
        }
        return node.context();
    }

    /**
     * Creates a new LNode with the current node as parent, but DOES NOT push it.
     * This is just an alias for `LogInternal.of()`.
     * @param data The key-value data.
     * @returns The new LNode.
     */
    public static createContext(data: LogData = {}): LNode {
        return this.get().add(data);
    }

    public static trace(msg: string | ToString, data: LogData = {}): LNode { return this.get().trace(msg, data); }
    public static debug(msg: string | ToString, data: LogData = {}): LNode { return this.get().debug(msg, data); }
    public static info(msg: string | ToString, data: LogData = {}): LNode { return this.get().info(msg, data); }
    public static warn(msg: string | ToString, data: LogData = {}): LNode { return this.get().warn(msg, data); }
    public static error(msg: string | ToString | Error, throwable?: Error | LogData, data: LogData = {}): LNode {
        return this.get().error(msg, throwable, data);
    }

    // --- Wrapper Methods (Manual Context Propagation) ---

    /**
     * Wraps a function to ensure it runs with the *current* logging context.
     * This is necessary for manual context propagation into callbacks
     * like setTimeout, setInterval, or event listeners.
     * @param fn The function to wrap.
     * @returns The wrapped function.
     */
    public static wrap<T extends (...args: any[]) => any>(fn: T): T {
        // Capture the node that is active *when wrap is called*.
        const capturedNode = this.get();
        if (!capturedNode || capturedNode.isEmpty()) {
            return fn; // Nothing to capture
        }

        const wrapper = function(this: any, ...args: any[]) {
            // When the wrapper executes (e.g., in a setTimeout):
            // Check what the *current* global node is.
            // We MUST use the STACK directly, not get(), to avoid
            // creating a new Root node if the stack is empty.
            const currentNode = LogInternal.STACK.length > 0 ?
                LogInternal.STACK[LogInternal.STACK.length - 1] :
                null;

            // We only need to push/pop if the current node
            // is different from the one we captured.
            const needsPush = !currentNode || currentNode.id !== capturedNode.id;

            if (needsPush) { LogInternal.push(capturedNode); }
            try {
                return fn.apply(this, args);
            } finally {
                if (needsPush) { LogInternal.pop(capturedNode); }
            }
        };
        return wrapper as T;
    }

    public static wrapExecutor(executor: Executor): Executor {
        return (command: ARunnable) => {
            const wrappedCommand = this.wrap(command);
            executor(wrappedCommand);
        };
    }

    // --- Global Controls ---

    public static loggerOff(): void { this.IS_ENABLED = false; }
    public static loggerOn(): void { this.IS_ENABLED = true; }

    public static addFilter(filter: LogFilter): void {
        const oldFilter = this.LOG_FILTER;
        this.LOG_FILTER = (node) => oldFilter(node) && filter(node);
    }

    public static addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable {
        // Wrap the consumer to ensure it runs with the context
        // that was active when addListener was called.
        const wrappedConsumer = this.wrap(consumer);

        const listenerEntry = { filter, consumer: wrappedConsumer, disposer: { [Symbol.dispose]: () => { } } };
        const disposer: Disposable = {
            [Symbol.dispose]: () => {
                const index = LogInternal.LISTENERS.indexOf(listenerEntry);
                if (index > -1) { LogInternal.LISTENERS.splice(index, 1); }
            },
        };
        listenerEntry.disposer = disposer;
        LogInternal.LISTENERS.push(listenerEntry);
        return disposer;
    }

    // --- Printer Factory ---

    private static consolePrinter: LogPrinter | null = null;
    /**
         * Creates and attaches a colored console printer, similar to the Java version.
         * Ensures only one console printer is created.
         * @param filter An optional filter to apply just for this printer.
         */
    public static printConsoleColored(filter: LogFilter = () => true): LogPrinter {
        if (LogInternal.consolePrinter) {
            return LogInternal.consolePrinter;
        }

        const columns = [
            LogPrinter.col(LogKeys.TIME, (v: number) => // <-- Changed to number
                new Date(v).toISOString().substring(11, 23) // Format timestamp
            ).min(12),
            LogPrinter.splitter(" "),
            LogPrinter.col(LogKeys.LEVEL).min(5),
            LogPrinter.splitter("│"),
            LogPrinter.col(LogKeys.SYSTEM_COMPONENT).min(10),
            LogPrinter.splitter("│"),
            LogPrinter.col(LogKeys.MSG).min(50),
            LogPrinter.splitter("  "),
            LogPrinter.colAll()
        ];

        const printer = new class extends LogPrinter {
            constructor() { super(columns, filter); }
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
                super.printNode(s, n);
                s.styleClear();
                return s;
            }
        }();

        LogInternal.addListener(filter, (node) => {
            const sb = AString.of();
            printer.printNode(sb, node);
            console.log(sb.toString());
        });

        LogInternal.consolePrinter = printer;
        return printer;
    }
}


// =============================================================================================
// Public API Facade
// =============================================================================================

export interface LogFacadeInterface {
    // Keys
    readonly LEVEL: string;
    readonly SYSTEM_COMPONENT: string;
    readonly MSG: string;
    readonly EXCEPTION_STR: string;

    // Context
    of(data: LogData): LNode;
    ofNodes(nodes: LNode[]): LNode;
    get(): LNode;
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

    wrapExecutor(executor: Executor): Executor;
    wrap<T extends (...args: any[]) => any>(fn: T): T;

    loggerOff(): void;
    loggerOn(): void;
    addFilter(filter: LogFilter): void;
    addListener(filter: LogFilter, consumer: AConsumer<LNode>): Disposable;

    printConsoleColored(filter?: LogFilter): LogPrinter;
}

/**
 * The globally accessible logging object (Facade), providing static-like methods
 * for contextual logging.
 *
 * NOTE: This implementation uses a global stack and is not automatically
 * safe for concurrent asynchronous operations. You must use `Log.wrap()`
 * to manually propagate context into async callbacks (e.g., setTimeout).
 */
export const Log: LogFacadeInterface = {
    // Keys
    LEVEL: LogKeys.LEVEL,
    SYSTEM_COMPONENT: LogKeys.SYSTEM_COMPONENT,
    MSG: LogKeys.MSG,
    EXCEPTION_STR: LogKeys.EXCEPTION_STR,

    of: LogInternal.of.bind(LogInternal),
    ofNodes: LogInternal.ofNodes.bind(LogInternal),
    get: LogInternal.get.bind(LogInternal),
    push: LogInternal.push.bind(LogInternal),
    pop: LogInternal.pop.bind(LogInternal),
    context: LogInternal.context.bind(LogInternal),
    createContext: LogInternal.createContext.bind(LogInternal),
    trace: LogInternal.trace.bind(LogInternal) as any,
    debug: LogInternal.debug.bind(LogInternal) as any,
    info: LogInternal.info.bind(LogInternal) as any,
    warn: LogInternal.warn.bind(LogInternal) as any,
    error: LogInternal.error.bind(LogInternal) as any,
    wrapExecutor: LogInternal.wrapExecutor.bind(LogInternal),
    wrap: LogInternal.wrap.bind(LogInternal) as any,
    loggerOff: LogInternal.loggerOff.bind(LogInternal),
    loggerOn: LogInternal.loggerOn.bind(LogInternal),
    addFilter: LogInternal.addFilter.bind(LogInternal),
    addListener: LogInternal.addListener.bind(LogInternal),
    printConsoleColored: LogInternal.printConsoleColored.bind(LogInternal),
};
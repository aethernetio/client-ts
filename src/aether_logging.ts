// =============================================================================================
// FILE: aether_logging.ts
// PURPOSE: Unified Contextual Logger (Zero-overhead version)
// =============================================================================================

import { ToString, AString, Style, Color } from './aether_astring';
import { AFuture } from './aether_future';
import {
    Destroyable, Executor, ARunnable, AConsumer, APredicate,
    ABiPredicate
} from './aether_types';

// --- 1. Core Definitions ---

export enum LogLevel { TRACE = 'TRACE', DEBUG = 'DEBUG', INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR' }

export const LogKeys = {
    TIME: 'logTime',
    LEVEL: 'logLevel',
    SYSTEM_COMPONENT: 'SystemComponent',
    MSG: 'logMessage',
    EXCEPTION_STR: 'exception',
};

export type LogData = Record<string, any>;

/** Internal listener structure */
interface LogListener {
    filter: APredicate<LNode> | LogFilter;
    consumer: AConsumer<LNode>;
    disposer: Destroyable;
}

export interface ContextCloser extends Destroyable {
    readonly node: LNode;
}

// =============================================================================================
// --- 2. LNode (The Context Node) ---
// =============================================================================================

let LNODE_ID_COUNTER = 0;

export abstract class LNode {
    public readonly id: number = LNODE_ID_COUNTER++;
    public readonly parent: LNode | null;

    protected constructor(parent: LNode | null) {
        this.parent = parent;
    }

    // --- Abstract Internal Methods ---
    protected abstract get0(key: string): any;
    protected abstract forEach0(callback: (key: string, value: any) => void): void;
    protected abstract count0(): number;

    // --- Core API ---

    public add(data: LogData): LNode { return LNode.ofData(this, data); }
    public addNodes(nodes: LNode[]): LNode { return LNode.ofComposite(this, nodes); }

    public context(): ContextCloser {
        Log.push(this);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            node: self,
            destroy(f: boolean): AFuture {
                Log.pop(self);
                return AFuture.completed();
            }
        };
    }

    public get(key: string): any {
        const val = this.get0(key);
        if (val !== undefined) return val;
        if (this.parent) return this.parent.get(key);
        return undefined;
    }

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

    public count(): number {
        let count = this.count0();
        if (this.parent) count += this.parent.count();
        return count;
    }

    public isEmpty(): boolean { return this.count() === 0; }

    public check(key: string, value: any): boolean { return this.get(key) === value; }

    public getLevel(): LogLevel | undefined { return this.get(LogKeys.LEVEL) as LogLevel; }

    // --- Logging Methods (Directly call Log class) ---

    public log(node: LNode): void { if (Log.IS_ENABLED) Log.fire(node); }

    public trace(msg: string | ToString, data: LogData = {}): LNode { return this.doLog(LogLevel.TRACE, msg, data); }
    public debug(msg: string | ToString, data: LogData = {}): LNode { return this.doLog(LogLevel.DEBUG, msg, data); }
    public info(msg: string | ToString, data: LogData = {}): LNode { return this.doLog(LogLevel.INFO, msg, data); }
    public warn(msg: string | ToString, data: LogData = {}): LNode { return this.doLog(LogLevel.WARN, msg, data); }

    public error(msgOrThrowable: string | ToString | Error, throwableOrData?: Error | LogData, data: LogData = {}): LNode {
        if (!Log.IS_ENABLED) return LNode.EMPTY;
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
            } else if (throwableOrData) {
                finalData = { ...throwableOrData, ...data };
            }
        }

        finalData[LogKeys.TIME] = Date.now();
        finalData[LogKeys.LEVEL] = LogLevel.ERROR;
        finalData[LogKeys.MSG] = Log.resolveMessage(msg);
        if (throwable) finalData[LogKeys.EXCEPTION_STR] = throwable;

        const logNode = this.add(finalData);
        Log.fire(logNode);
        return logNode;
    }

    private doLog(level: LogLevel, msg: string | ToString, data: LogData): LNode {
        if (!Log.IS_ENABLED) return LNode.EMPTY;
        // Optimization: Log.filter check could go here
        data[LogKeys.TIME] = Date.now();
        data[LogKeys.LEVEL] = level;
        data[LogKeys.MSG] = Log.resolveMessage(msg);
        const logNode = this.add(data);
        Log.fire(logNode);
        return logNode;
    }

    // --- Factories ---

    public static ofData(parent: LNode | null, data: LogData): LNode {
        const map = new Map(Object.entries(data));
        return new class extends LNode {
            constructor() { super(parent); }
            protected get0(key: string): any { return map.get(key); }
            protected forEach0(cb: (k: string, v: any) => void): void { map.forEach((v, k) => cb(k, v)); }
            protected count0(): number { return map.size; }
        }();
    }

    public static ofComposite(parent: LNode | null, nodes: LNode[]): LNode {
        const validNodes = nodes.filter(n => n && !n.isEmpty());
        return new class extends LNode {
            constructor() { super(parent); }
            protected get0(key: string): any {
                for (const n of validNodes) {
                    const val = n.get(key);
                    if (val !== undefined) return val;
                }
                return undefined;
            }
            protected forEach0(cb: (k: string, v: any) => void): void {
                for (const n of validNodes) n.forEach(cb);
            }
            protected count0(): number { return validNodes.reduce((sum, n) => sum + n.count(), 0); }
        }();
    }

    public static EMPTY: LNode = new class extends LNode {
        constructor() { super(null); }
        protected get0(): any { return undefined; }
        protected forEach0(): void { }
        protected count0(): number { return 0; }
        public override add(): LNode { return this; }
        public override context(): ContextCloser { return { node: this, destroy: (f: boolean): AFuture => { return AFuture.completed() } }; }
        public override log(): void { }
    }();
}

// =============================================================================================
// --- 3. LogFilter ---
// =============================================================================================

export class LogFilter {
    notLevel(level: LogLevel): LogFilter {
        return this.not(n => n.getLevel() === level);
    }
    private predicate: APredicate<LNode> = () => true;
    private fieldDropper: ABiPredicate<string, any> = () => false;

    public applyDropFields(node: LNode): LNode {
        if (this.isFieldDropperEmpty()) return node;
        const dropper = this.fieldDropper;
        return new class extends LNode {
            constructor() { super(null); }
            public override get(key: string): any {
                const val = node.get(key);
                if (val !== undefined && dropper(key, val)) return undefined;
                return val;
            }
            public override forEach(callback: (key: string, value: any) => void): void {
                node.forEach((k, v) => { if (!dropper(k, v)) callback(k, v); });
            }
            protected get0(): any { return undefined; }
            protected forEach0(): void { }
            protected count0(): number { return 0; }
        }();
    }

    private isFieldDropperEmpty(): boolean {
        return this.fieldDropper.toString() === "() => false";
    }

    public test(node: LNode): boolean {
        try { return this.predicate(node); }
        catch (e) { console.error("LogFilter error", e); return true; }
    }

    // --- Fluent API ---
    public filter(predicate: APredicate<LNode>): this {
        const old = this.predicate;
        this.predicate = (n) => old(n) && predicate(n);
        return this;
    }
    public not(predicate: APredicate<LNode>): this { return this.filter(n => !predicate(n)); }

    public filterText(text: string): this { return this.filter(n => String(n.get(LogKeys.MSG) || '').includes(text)); }
    public notText(text: string): this { return this.not(n => String(n.get(LogKeys.MSG) || '').includes(text)); }

    public filterRegex(expr: string | RegExp): this {
        const regex = typeof expr === 'string' ? new RegExp(expr) : expr;
        return this.filter(n => regex.test(String(n.get(LogKeys.MSG) || '')));
    }
    public notRegex(expr: string | RegExp): this {
        const regex = typeof expr === 'string' ? new RegExp(expr) : expr;
        return this.not(n => regex.test(String(n.get(LogKeys.MSG) || '')));
    }

    public traceOff(): this { return this.not(n => n.check(LogKeys.LEVEL, LogLevel.TRACE)); }
    public debugOff(): this { return this.not(n => n.check(LogKeys.LEVEL, LogLevel.DEBUG)); }
    public infoOff(): this { return this.not(n => n.check(LogKeys.LEVEL, LogLevel.INFO)); }
    public warnOff(): this { return this.not(n => n.check(LogKeys.LEVEL, LogLevel.WARN)); }
    public errorOff(): this { return this.not(n => n.check(LogKeys.LEVEL, LogLevel.ERROR)); }

    public drop(predicate: ABiPredicate<string, any>): this {
        const old = this.fieldDropper;
        this.fieldDropper = (k, v) => old(k, v) || predicate(k, v);
        return this;
    }
    public dropKey(keyName: string): this { return this.drop((k) => k === keyName); }
    public dropValueContains(text: string): this { return this.drop((_k, v) => typeof v === 'string' && v.includes(text)); }

    public reset(): void {
        this.predicate = () => true;
        this.fieldDropper = () => false;
    }
}

// =============================================================================================
// --- 4. LogPrinter ---
// =============================================================================================

export interface Column {
    print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void;
    getKey(): string | null;
    min(width: number): Column;
    max(width: number): Column;
    style(style: Style | null, color?: Color): Column;
    foregroundColorRGB(r: number, g: number, b: number): Column;
}

abstract class ColumnBase implements Column {
    abstract print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void;
    abstract getKey(): string | null;
    public min(width: number): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(p: LogPrinter, out: AString, n: LNode, wk: Set<string>) {
                const start = out.length;
                self.print(p, out, n, wk);
                const diff = out.length - start;
                if (diff < width) out.addSpace(width - diff);
            }
        }();
    }
    public max(width: number): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(p: LogPrinter, out: AString, n: LNode, wk: Set<string>) { self.print(p, out.limit(width), n, wk); }
        }();
    }
    public style(style: Style | null, color?: Color): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(p: LogPrinter, out: AString, n: LNode, wk: Set<string>) {
                out.style(style, color);
                self.print(p, out, n, wk);
                out.styleClear();
            }
        }();
    }
    public foregroundColorRGB(r: number, g: number, b: number): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(p: LogPrinter, out: AString, n: LNode, wk: Set<string>) {
                out.styleForeground(null, r, g, b);
                self.print(p, out, n, wk);
                out.styleClear();
            }
        }();
    }
}

export class LogPrinter implements Destroyable {
    public readonly filter: LogFilter;
    protected readonly columns: Column[];
    private readonly listenerDisposer: Destroyable;

    constructor(columns: Column[], filter: LogFilter = new LogFilter()) {
        this.columns = columns;
        this.filter = filter;
        this.listenerDisposer = Log.addListener(filter, (node: LNode) => {
            this.printRow(AString.of(), node);
        });
    }

    public printRow(s: AString, n: LNode): void {
        const line = this.printNode(s, n).toString();
        if (typeof console !== 'undefined') console.log(line);
    }

    public printNode(s: AString, n: LNode): AString {
        const workKeys = new Set<string>();
        for (const c of this.columns) c.print(this, s, n, workKeys);
        const err = n.get(LogKeys.EXCEPTION_STR) as Error;
        if (err) s.add("\n").add(err.stack || err.message);
        return s;
    }

    public destroy(f: boolean): AFuture {
        return this.listenerDisposer.destroy(f);
    }

    public static splitter(text: string): Column {
        return new class extends ColumnBase {
            getKey(): string | null { return null; }
            print(_p: LogPrinter, out: AString) { out.add(text); }
        }();
    }

    public static col(key: string, mapper?: (v: any) => any): Column {
        return new class extends ColumnBase {
            getKey = () => key;
            print(_p: LogPrinter, out: AString, node: LNode, workKeys: Set<string>) {
                let v = node.get(key);
                if (v !== undefined) {
                    if (mapper) v = mapper(v);
                    out.add(v);
                }
                workKeys.add(key);
            }
        }();
    }

    public static colAll(): Column {
        return new class extends ColumnBase {
            getKey(): string | null { return null; }
            print(_p: LogPrinter, out: AString, node: LNode, workKeys: Set<string>) {
                out.add('{');
                let first = true;
                node.forEach((key, value) => {
                    if (workKeys.has(key) || Object.values(LogKeys).includes(key)) return;
                    if (!first) out.add(", ");
                    out.add(key).add('=').add(value);
                    first = false;
                });
                out.add('}');
            }
        }();
    }
}

// =============================================================================================
// --- 5. Log (The Main Static Facade & Logic) ---
// =============================================================================================

export class Log {
    // --- Private Implementation Details ---
    private static readonly STACK: LNode[] = [];
    private static readonly LISTENERS: LogListener[] = [];
    private static consolePrinter: LogPrinter | null = null;

    // --- Public Configuration ---
    public static TRACE = true;
    public static IS_ENABLED = true;
    public static readonly filter = new LogFilter();

    // --- Constants Aliases ---
    public static readonly LEVEL = LogKeys.LEVEL;
    public static readonly MSG = LogKeys.MSG;
    public static readonly EXCEPTION_STR = LogKeys.EXCEPTION_STR;

    // Prevent instantiation
    private constructor() { }

    // --- Stack Management ---

    public static get(): LNode {
        if (!Log.IS_ENABLED) return LNode.EMPTY;
        if (this.STACK.length === 0) {
            const root = LNode.ofData(null, {});
            this.STACK.push(root);
            return root;
        }
        return this.STACK[this.STACK.length - 1];
    }

    public static push(node: LNode): void {
        if (Log.IS_ENABLED) this.STACK.push(node);
    }

    public static pop(node: LNode): void {
        if (!Log.IS_ENABLED) return;
        if (this.STACK.length > 0) {
            if (this.STACK[this.STACK.length - 1] === node) this.STACK.pop();
            else console.error("Logger corrupted: Pop mismatch");
        } else {
            console.error("Logger corrupted: Pop on empty");
        }
    }

    // --- Context API ---

    public static of(data: LogData): LNode { return this.get().add(data); }
    public static ofNodes(nodes: LNode[]): LNode { return this.get().addNodes(nodes); }
    public static context(dataOrNode: LogData | LNode): ContextCloser {
        const node = dataOrNode instanceof LNode ? dataOrNode : this.get().add(dataOrNode);
        return node.context();
    }

    // --- Logging API ---

    public static trace(msg: string | ToString, data?: LogData): LNode { return this.get().trace(msg, data); }
    public static debug(msg: string | ToString, data?: LogData): LNode { return this.get().debug(msg, data); }
    public static info(msg: string | ToString, data?: LogData): LNode { return this.get().info(msg, data); }
    public static warn(msg: string | ToString, data?: LogData): LNode { return this.get().warn(msg, data); }
    public static error(msg: string | ToString | Error, th?: Error | LogData, data?: LogData): LNode {
        return this.get().error(msg, th, data);
    }

    // --- Internal Logic (Public to LNode, technically) ---

    public static fire(node: LNode): void {
        if (!Log.IS_ENABLED) return;
        if (!this.filter.test(node)) return;

        const processedNode = this.filter.applyDropFields(node);

        this.LISTENERS.forEach(l => {
            try {
                let allowed = true;
                if (l.filter instanceof LogFilter) allowed = l.filter.test(processedNode);
                else if (typeof l.filter === 'function') allowed = l.filter(processedNode);

                if (allowed) l.consumer(processedNode);
            } catch (e) { console.error("Log listener error:", e); }
        });
    }

    public static resolveMessage(msg: string | ToString): string {
        if (typeof msg === 'string') return msg;
        try {
            const sb = AString.of();
            (msg as ToString).toAString(sb);
            return sb.toString();
        } catch (e) { return `[Error: ${e}]`; }
    }

    // --- Utilities & Wrappers ---

    public static wrap<T extends (...args: any[]) => any>(fn: T): T {
        const capturedNode = this.get();
        if (!capturedNode || capturedNode.isEmpty()) return fn;

        return function(this: any, ...args: any[]) {
            const current = Log.STACK.length > 0 ? Log.STACK[Log.STACK.length - 1] : null;
            const needsPush = !current || current.id !== capturedNode.id;
            if (needsPush) Log.push(capturedNode);
            try { return fn.apply(this, args); }
            finally { if (needsPush) Log.pop(capturedNode); }
        } as T;
    }

    public static wrapExecutor(executor: Executor): Executor {
        return (command: ARunnable) => executor(this.wrap(command));
    }

    // --- Global Controls ---

    public static loggerOff(): void { this.IS_ENABLED = false; }
    public static loggerOn(): void { this.IS_ENABLED = true; }

    public static addFilter(f: APredicate<LNode>): void { this.filter.filter(f); }

    public static addListener(filter: LogFilter | APredicate<LNode>, consumer: AConsumer<LNode>): Destroyable {
        const wrappedConsumer = this.wrap(consumer);
        const entry: LogListener = { filter, consumer: wrappedConsumer, disposer: { destroy: (f: boolean): AFuture => { return AFuture.completed() } } };
        entry.disposer = {
            destroy: (f: boolean): AFuture => {
                const idx = this.LISTENERS.indexOf(entry);
                if (idx > -1) this.LISTENERS.splice(idx, 1);
                return AFuture.completed();
            }
        };
        this.LISTENERS.push(entry);
        return entry.disposer;
    }

    // --- Printers ---

    public static printConsolePlain(filter: LogFilter = new LogFilter()): LogPrinter {
        if (this.consolePrinter) return this.consolePrinter;
        const columns = [
            LogPrinter.col(LogKeys.TIME, (v) => new Date(v).toISOString().substring(11, 23)).min(12),
            LogPrinter.splitter(" "),
            LogPrinter.col(LogKeys.LEVEL).min(5),
            LogPrinter.splitter(" | "),
            LogPrinter.col(LogKeys.MSG).min(60),
            LogPrinter.splitter("  "),
            LogPrinter.colAll()
        ];
        this.consolePrinter = new LogPrinter(columns, filter);
        return this.consolePrinter;
    }

    public static printConsoleColored(filter: LogFilter = new LogFilter()): LogPrinter {
        if (this.consolePrinter) return this.consolePrinter;

        const levelCol = LogPrinter.col(LogKeys.LEVEL).min(5);
        const coloredLevel = new class extends ColumnBase {
            getKey(): string | null { return LogKeys.LEVEL; }
            print(p: LogPrinter, out: AString, n: LNode, wk: Set<string>) {
                const l = n.getLevel();
                if (l === LogLevel.TRACE) out.styleForeground(null, 150, 150, 150);
                else if (l === LogLevel.DEBUG) out.styleForeground(null, 100, 255, 100);
                else if (l === LogLevel.INFO) out.styleForeground(null, 100, 100, 255);
                else if (l === LogLevel.WARN) out.styleForeground(null, 255, 50, 50);
                else if (l === LogLevel.ERROR) out.styleForeground(null, 255, 0, 0);
                levelCol.print(p, out, n, wk);
                out.styleClear();
            }
        }();

        const columns = [
            LogPrinter.col(LogKeys.TIME, (v) => new Date(v).toISOString().substring(11, 23)).min(12),
            LogPrinter.splitter(" "),
            coloredLevel,
            LogPrinter.splitter(" | "),
            LogPrinter.col(LogKeys.MSG).min(60),
            LogPrinter.splitter("  "),
            LogPrinter.colAll()
        ];
        this.consolePrinter = new LogPrinter(columns, filter);
        return this.consolePrinter;
    }
}
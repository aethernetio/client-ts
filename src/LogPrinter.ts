// =============================================================================================
// FILE: LogPrinter.ts
// PURPOSE: Column-based log formatter and printer for the Aether logging system.
// =============================================================================================

import { AString, Color, Style } from "./aether_astring";
import { Log, LogFilter, LNode, LogKeys, LogLevel } from "./aether_logging";
import { Disposable } from "./aether_types";

/**
 * Defines a single column in the LogPrinter.
 */
export interface Column {
    /**
     * Renders this column's content for the given node into the AString.
     * @param printer The parent LogPrinter (rarely needed).
     * @param out The AString buffer to append to.
     * @param node The log node being printed.
     * @param workKeys A set of keys that have already been handled by other columns.
     */
    print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void;

    /**
     * Returns the primary key this column is responsible for, or null.
     * Used by `colAll` to avoid re-printing.
     */
    getKey(): string | null;

    // --- Column Decorators ---

    /**
     * Wraps the column to ensure its output is at least `width` characters.
     * @param width The minimum width.
     */
    min(width: number): Column;

    /**
     * Wraps the column to ensure its output is at most `width` characters.
     * @param width The maximum width.
     */
    max(width: number): Column;

    /**
     * Wraps the column output with a specific style and/or color.
     * @param style The AString.Style (e.g., BRIGHT, UNDERSCORE).
     * @param color The AString.Color (e.g., RED, GREEN).
     */
    style(style: Style | null, color?: Color): Column;

    /**
     * Wraps the column output with a specific RGB foreground color.
     * @param r Red component (0-255).
     * @param g Green component (0-255).
     * @param b Blue component (0-255).
     */
    foregroundColorRGB(r: number, g: number, b: number): Column;
}

/**
 * Base implementation of Column decorators to avoid reimplementing them.
 */
export abstract class ColumnBase implements Column {
    abstract print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void;
    abstract getKey(): string | null;

    public min(width: number): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void {
                const startLen = out.length;
                self.print(printer, out, node, workKeys);
                const endLen = out.length;
                const diff = endLen - startLen;
                if (diff < width) {
                    out.addSpace(width - diff);
                }
            }
        }();
    }

    public max(width: number): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void {
                // We pass a *limited* AString wrapper to the underlying print method
                self.print(printer, out.limit(width), node, workKeys);
            }
        }();
    }

    public style(style: Style | null, color?: Color): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void {
                out.style(style, color);
                self.print(printer, out, node, workKeys);
                out.styleClear();
            }
        }();
    }

    public foregroundColorRGB(r: number, g: number, b: number): Column {
        const self = this;
        return new class extends ColumnBase {
            getKey(): string | null { return self.getKey(); }
            print(printer: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void {
                out.styleForeground(null, r, g, b);
                self.print(printer, out, node, workKeys);
                out.styleClear();
            }
        }();
    }
}


/**
 * A LogPrinter listens for log events and prints them to the console
 * using a configurable set of columns.
 */
export class LogPrinter implements Disposable {
    public readonly filter: LogFilter;
    protected readonly columns: Column[];
    protected readonly keys: Set<string>;
    private readonly listenerDisposer: Disposable;

    /**
     * @param columns An array of Column definitions.
     * @param filter An optional filter to apply. Only nodes passing this filter will be printed.
     */
    constructor(columns: Column[], filter: LogFilter = () => true) {
        this.columns = columns;
        this.filter = filter;

        // Collect all primary keys from columns
        this.keys = new Set<string>();
        for (const c of columns) {
            const key = c.getKey();
            if (key) this.keys.add(key);
        }

        // Add this printer as a listener to the global logger
        this.listenerDisposer = Log.addListener(filter, (node) => {
            this.printRow(AString.of(), node);
        });
    }

    /**
     * Prints a single log node to the console (the default destination).
     * @param s An empty AString to build the output.
     * @param n The LNode to print.
     */
    public printRow(s: AString, n: LNode): void {
        let line = this.printNode(s, n).toString();
        if (process) {
            process.stdout.write(line + '\n');
        } else if (console) {
            console.log(line);
        }
    }

    /**
     * Renders the LNode into the AString according to the column rules.
     * Can be overridden by subclasses (e.g., to add color).
     * @param s The AString buffer.
     * @param n The LNode to print.
     * @returns The same AString buffer (for chaining).
     */
    public printNode(s: AString, n: LNode): AString {
        const workKeys = new Set<string>();

        // Print all defined columns
        for (const c of this.columns) {
            c.print(this, s, n, workKeys);
        }

        // If it's an error, append the stack trace
        const err = n.get(LogKeys.EXCEPTION_STR) as Error;
        if (err) {
            s.add("\n");
            // AString.addStackTrace is a mock, so we'll just add the stack manually.
            s.add(err.stack || err.message);
        }
        return s;
    }

    /**
     * Removes the listener from the global logger.
     */
    public [Symbol.dispose](): void {
        this.listenerDisposer[Symbol.dispose]();
    }

    // --- Static Column Factories ---

    /**
     * Creates a column that prints a static string separator.
     * @param text The static text to print.
     */
    public static splitter(text: string): Column {
        return new class extends ColumnBase {
            getKey(): string | null {
                return null;
            }
            print = (_p: LogPrinter, out: AString) => {
                out.add(text);
            }
        }();
    }

    /**
     * Creates a column that prints all remaining key-value pairs
     * that haven't been printed by other columns.
     */
    public static colAll(): Column {
        return new class extends ColumnBase {
            getKey(): string | null {
                return null;
            }
            print(_p: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void {
                out.add('{');
                let first = true;

                node.forEach((key, value) => {
                    // Skip if already printed OR is a default log key
                    if (workKeys.has(key) || Object.values(LogKeys).includes(key)) {
                        return;
                    }

                    if (first) first = false;
                    else out.add(", ");

                    out.add(key).add('=').add(value);
                });
                out.add('}');
            }
        }();
    }

    /**
     * Creates a column that prints the value for a specific key.
     * @param key The key to retrieve from the LNode.
     * @param mapper An optional function to transform the value before printing.
     */
    public static col(key: string, mapper?: (value: any) => any): Column {
        return new class extends ColumnBase {
            getKey = () => key;
            print(_p: LogPrinter, out: AString, node: LNode, workKeys: Set<string>): void {
                let v = node.get(key);
                if (v !== undefined) {
                    if (mapper) {
                        v = mapper(v);
                    }
                    out.add(v);
                }
                workKeys.add(key);
            }
        }();
    }
}
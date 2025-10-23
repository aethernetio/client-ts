// =============================================================================================
// FILE: TypeScriptCodeFormatter.ts
// PURPOSE: A simple code formatter for generated TypeScript/Java-like code.
// =============================================================================================

/**
 * @enum CodeState
 * @description States for the finite state machine used during formatting.
 */
enum CodeState {
    CODE,
    STRING_DOUBLE,
    COMMENT_LINE,
    COMMENT_BLOCK,
    STRING_SINGLE,
}

/**
 * @class TypeScriptCodeFormatter
 * @description Implements a simple code formatter to enforce indentation and newline rules
 * based on structural characters ({, }, ;).
 */
export class TypeScriptCodeFormatter {

    private static readonly INDENT_CHAR = '    '; // 4 spaces

    /**
     * @method format
     * @description Formats the source code string by adjusting indentation and inserting newlines.
     * @param {string} src - The unformatted source code.
     * @returns {string} The formatted code.
     */
    public format(src: string): string {
        if (!src) return '';

        const result: string[] = [];
        let currentState: CodeState = CodeState.CODE;
        let indentLevel: number = 0;
        let newLine: boolean = true;
        let trimmedSrc = src.replace(/\r/g, '');

        const len = trimmedSrc.length;

        for (let i = 0; i < len; i++) {
            const currentChar = trimmedSrc[i];
            const nextChar = i < len - 1 ? trimmedSrc[i + 1] : '';
            const prevChar = i > 0 ? trimmedSrc[i - 1] : '';

            // 1. Handle Whitespace/Newline Skipping and Indentation insertion
            if (newLine) {
                if (/\s/.test(currentChar)) {
                    continue;
                }

                result.push(TypeScriptCodeFormatter.INDENT_CHAR.repeat(indentLevel));
                newLine = false;
            }

            // 2. State Machine Logic
            switch (currentState) {
                case CodeState.CODE:
                    // --- Transitions to other states (String/Comment) ---
                    if (currentChar === '"' && prevChar !== '\\') {
                        currentState = CodeState.STRING_DOUBLE;
                    } else if (currentChar === "'" && prevChar !== '\\') {
                        currentState = CodeState.STRING_SINGLE;
                    } else if (currentChar === '/' && nextChar === '/') {
                        currentState = CodeState.COMMENT_LINE;
                        result.push(currentChar, nextChar);
                        i++;
                        continue;
                    } else if (currentChar === '/' && nextChar === '*') {
                        currentState = CodeState.COMMENT_BLOCK;
                        result.push(currentChar, nextChar);
                        i++;
                        continue;
                    }

                    // --- Formatting Logic ---
                    if (currentChar === '{') {
                        result.push(' ', currentChar, '\n');
                        indentLevel++;
                        newLine = true;
                        continue;
                    } else if (currentChar === '}') {
                        indentLevel = Math.max(0, indentLevel - 1);

                        if (!newLine) {
                            result.push('\n');
                            result.push(TypeScriptCodeFormatter.INDENT_CHAR.repeat(indentLevel));
                        }
                        result.push(currentChar);

                        if (nextChar !== ';' && nextChar !== '\n' && nextChar !== '}') {
                            result.push('\n');
                            newLine = true;
                        } else if (nextChar === '\n') {
                            result.push('\n');
                            newLine = true;
                            i++;
                        }
                        continue;
                    } else if (currentChar === ';') {
                        result.push(currentChar, '\n');
                        newLine = true;
                        continue;
                    } else if (/\s/.test(currentChar)) {
                        if (currentChar === '\n') continue;

                        const lastChar = result[result.length - 1];
                        if (lastChar && !/\s|[{(\n]/.test(lastChar)) {
                            result.push(' ');
                        }
                        continue;
                    }

                    result.push(currentChar);
                    break;

                case CodeState.STRING_DOUBLE:
                    result.push(currentChar);
                    if (currentChar === '"' && prevChar !== '\\') {
                        currentState = CodeState.CODE;
                    }
                    break;

                case CodeState.STRING_SINGLE:
                    result.push(currentChar);
                    if (currentChar === "'" && prevChar !== '\\') {
                        currentState = CodeState.CODE;
                    }
                    break;

                case CodeState.COMMENT_LINE:
                    result.push(currentChar);
                    if (currentChar === '\n') {
                        currentState = CodeState.CODE;
                        newLine = true;
                    }
                    break;

                case CodeState.COMMENT_BLOCK:
                    result.push(currentChar);
                    if (currentChar === '*' && nextChar === '/') {
                        result.push(nextChar);
                        i++;
                        currentState = CodeState.CODE;

                        if (i < len - 1) {
                            result.push('\n');
                            newLine = true;
                        }
                    }
                    break;
            }
        }

        return result.join('').trim();
    }
}
// @ts-nocheck
// This file contains the logic for generating TypeScript code for DSL API definitions
// (Interfaces, Remote, and Local implementations).

import {
    GeneratorLogic,
    TypeDefinition,
    TypeInfo
} from "./aether_protocol_core";

/**
 * Responsible for generating TypeScript code for DSL API definitions
 * (Interfaces, Remote, and Local implementations).
 */
export class ApiGenerator {
    private readonly generatorLogic: GeneratorLogic;

    /**
     * Creates an instance of ApiGenerator.
     * @param generatorLogic - The shared GeneratorLogic instance.
     */
    constructor(generatorLogic: GeneratorLogic) { this.generatorLogic = generatorLogic; }

    /**
     * Generates all code related to a single API definition.
     * @param apiName - The name of the API.
     * @param apiDef - The TypeDefinition for the API.
     * @returns A map containing the generated code, keyed by API name.
     */
    generateApi(apiName: string, apiDef: TypeDefinition): { [key: string]: string } {
        const methods = this.getAllMethods(apiName, apiDef);

        // Generate the implementation class and add it to the logic store
        const metaImplName = `${apiName}MetaImpl`;
        this.generateApiMetaImpl(apiName, metaImplName, methods);

        // Generate the interface/namespace file content
        let apiCode = this.generateApiInterface(apiName, apiDef, methods, metaImplName);
        apiCode += '\n\n' + this.generateApiRemote(apiName, apiDef);
        apiCode += '\n\n' + this.generateApiLocal(apiName, apiDef);

        return { [apiName]: apiCode };
    }

    /**
     * Recursively collects all methods for an API, including from parent APIs.
     * @param apiName - The name of the API.
     * @param apiDef - The TypeDefinition for the API.
     * @returns A Map of method names to their definitions.
     */
    private getAllMethods(apiName: string, apiDef: TypeDefinition): Map<string, any> {
        const methods: Map<string, any> = new Map();
        const methodList: any[] = [];
        this.getAllMethodsRecursive(methodList, false, apiName, apiDef);

        methodList.forEach((m, index) => {
            // --- [ИЗМЕНЕНИЕ] Добавлена проверка apiDef?.methods ---
            const yamlMethodDef = ((apiDef?.methods || {}) as any)[m.name] || {};
            m.id = yamlMethodDef.id !== undefined ? yamlMethodDef.id : (index + 3);

            // --- [ИЗМЕНЕНИЕ] Захватываем 'doc' из определения метода ---
            m.doc = (yamlMethodDef as any).doc;
            // --- [ИЗМЕНЕНИЕ] Конец ---

            methods.set(m.name, m);
        });
        return methods;
    }

    /**
     * Recursive helper for getAllMethods.
     * @param res - The accumulating array of method definitions.
     * @param parent - True if the methods being added are from a parent API.
     * @param apiName - The name of the current API being processed.
     * @param apiDef - The definition of the current API.
     */
    private getAllMethodsRecursive(res: any[], parent: boolean, apiName: string, apiDef: TypeDefinition | undefined): void {
        if (!apiDef) return;

        (apiDef.parents as string[])?.forEach(p => {
            const parentApiDef = this.generatorLogic.allTypes.get(p);
            if (!parentApiDef) throw new Error(`Parent API '${p}' not found for API '${apiName}'.`);
            this.getAllMethodsRecursive(res, true, p, parentApiDef);
        });

        Object.entries(apiDef.methods || {}).forEach(([methodName, m]) => {
            const methodDef: any = { id: 0, name: methodName, params: {}, returns: null, throws: null, parent: parent };
            const mDef = m as TypeDefinition;
            if (!mDef) return;

            // --- [ИЗМЕНЕНИЕ] Переносим 'doc' из mDef в methodDef ---
            // (Это нужно, если 'doc' определен на самом методе, а не в списке)
            if ((mDef as any).doc) {
                methodDef.doc = (mDef as any).doc;
            }
            // --- [ИЗМЕНЕНИЕ] Конец ---


            if (mDef.params) {
                Object.entries(mDef.params).forEach(([paramName, paramType]) => {
                    if (typeof paramType === 'object' && paramType !== null && !(paramType as any).stream) {
                        throw new Error(`[ApiGenerator] Unexpected anonymous type object in method ${methodName}. The pre-pass should have replaced it with a name.`);
                    }
                    methodDef.params[paramName] = paramType as string | TypeDefinition;
                });
            }
            if (mDef.returns) {
                if (typeof mDef.returns === 'object' && mDef.returns !== null && !(mDef.returns as any).stream) {
                    throw new Error(`[ApiGenerator] Unexpected anonymous type object in method ${methodName} returns. The pre-pass should have replaced it with a name.`);
                }
                methodDef.returns = mDef.returns as string | TypeDefinition;
            }
            if (mDef.throws) {
                if (typeof mDef.throws === 'object' && mDef.throws !== null && !(mDef.throws as any).stream) {
                    throw new Error(`[ApiGenerator] Unexpected anonymous type object in method ${methodName} throws. The pre-pass should have replaced it with a name.`);
                }
                methodDef.throws = mDef.throws as string | TypeDefinition;
            }
            if (!res.some(it => it.name == methodName)) res.push(methodDef);
        });
    }

    /**
     * Generates the API `META` implementation class and adds it to the generator logic.
     * @param apiName - The name of the API.
     * @param metaImplName - The name of the implementation class (e.g., "MyApiMetaImpl").
     * @param methods - A Map of all methods for this API.
     */
    private generateApiMetaImpl(apiName: string, metaImplName: string, methods: Map<string, any>): void {
        const sbImpl: string[] = [];
        sbImpl.push(`export class ${metaImplName} implements FastMetaApi<${apiName}, ${apiName}Remote> {`);

        this.generateMetaMakeLocal_fromDataIn(sbImpl, apiName, methods);
        this.generateMetaMakeLocal_fromBytes_ctxLocal(sbImpl, apiName);
        this.generateMetaMakeLocal_fromBytes_ctx(sbImpl, apiName);
        this.generateMetaMakeRemote(sbImpl, apiName, methods);

        sbImpl.push(`}`);
        this.generatorLogic.allImplCode.push(sbImpl.join('\n'));
    }

    // --- [ИЗМЕНЕНИЕ] Новый приватный хелпер для генерации JSDoc метода ---
    /**
     * Generates a JSDoc block for an API method.
     * @param m - The method definition.
     * @param finalReturns - The calculated return type string (e.g., "AFuture<string>").
     * @param indent - The indentation (e.g., "    ").
     * @returns An array of JSDoc strings.
     */
    private generateMethodJSDoc(m: any, finalReturns: string, indent: string): string[] {
        const sb: string[] = [];
        const doc = (m as any).doc;
        const docLines: string[] = [];

        if (doc) {
            (doc as string).split('\n').forEach(line => docLines.push(`${indent} * ${line}`));
        }

        const paramEntries = Object.entries(m.params);
        if (paramEntries.length > 0) {
            if (docLines.length > 0) docLines.push(`${indent} *`); // Separator
            paramEntries.forEach(([pn, pt]) => {
                const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                    ? (pt as TypeDefinition).stream!.name!
                    : pt as string;
                // TODO: Add support for param doc if the model supports it
                docLines.push(`${indent} * @param ${pn} - ${new TypeInfo(typeStr).getArgumentType()}`);
            });
        }

        if (finalReturns !== "void") {
            if (docLines.length > 0 && paramEntries.length === 0) docLines.push(`${indent} *`); // Separator
            docLines.push(`${indent} * @returns ${finalReturns}`);
        }

        // Add the method ID as requested
        if (m.id !== undefined) {
            if (docLines.length > 0) docLines.push(`${indent} *`); // Separator
            docLines.push(`${indent} * @aetherMethodId ${m.id}`);
        }

        if (docLines.length > 0) {
            sb.push(`${indent}/**`);
            docLines.forEach(line => sb.push(line));
            sb.push(`${indent} */`);
        }

        return sb;
    }
    // --- [ИЗМЕНЕНИЕ] Конец нового хелпера ---


    /**
     * Generates the main API interface and its `META` namespace.
     * @param apiName - The name of the API.
     * @param apiDef - The TypeDefinition for the API.
     * @param methods - A Map of all methods for this API.
     * @param metaImplName - The name of the implementation class for the META field.
     * @returns The generated TypeScript code as a string.
     */
    private generateApiInterface(apiName: string, apiDef: TypeDefinition, methods: Map<string, any>, metaImplName: string): string {
        const sb: string[] = [];
        const parents = (apiDef?.parents || []) as string[];
        const extendsClause = parents.length > 0 ? ` extends ${parents.join(', ')}` : '';

        // --- [ИЗМЕНЕНИЕ] JSDoc для интерфейса API (с проверкой) ---
        const doc = (apiDef as any)?.doc; // <-- [ИСПРАВЛЕНИЕ] Использован optional chaining
        if (doc) {
            sb.push(`/**`);
            (doc as string).split('\n').forEach(line => sb.push(` * ${line}`));
            sb.push(` */`);
        }
        // --- [ИЗМЕНЕНИЕ] Конец JSDoc ---

        sb.push(`export interface ${apiName}${extendsClause} {`);
        methods.forEach(m => {
            if (m.parent) return;
            this.generateApiInterfaceMethod(sb, m);
        });

        sb.push(`}`);
        sb.push(`export namespace ${apiName} {`);
        sb.push(`    export const META: FastMetaApi<${apiName}, ${apiName}Remote> = new Impl.${metaImplName}();`);
        sb.push(`}`);
        return sb.join('\n');
    }

    /**
     * Generates a single method signature for the API interface.
     * @param sb - The string array to append code lines to.
     * @param m - The method definition object.
     */
    private generateApiInterfaceMethod(sb: string[], m: any): void {
        const paramTypes = Object.entries(m.params).map(([pn, pt]) => {
            const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                ? (pt as TypeDefinition).stream!.name!
                : pt as string;
            return `${pn}: ${new TypeInfo(typeStr).getArgumentType()}`;
        }).join(', ');

        const hasReturns = m.returns != null;
        const hasThrows = m.throws != null;
        let finalReturns: string;

        if (hasReturns) {
            const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
                ? (m.returns as TypeDefinition).stream!.name!
                : m.returns as string;

            if (returnTypeStr === "void") {
                finalReturns = "AFuture";
            } else {
                const returnTypeInfo = new TypeInfo(returnTypeStr);
                finalReturns = returnTypeInfo.getAsReturnType();
            }
        } else if (hasThrows) {
            finalReturns = "AFuture";
        } else {
            finalReturns = "void";
        }

        // --- [ИЗМЕНЕНИЕ] Генерация JSDoc ---
        sb.push(...this.generateMethodJSDoc(m, finalReturns, '    '));
        // --- [ИЗМЕНЕНИЕ] Конец JSDoc ---

        sb.push(`    ${m.name}(${paramTypes}): ${finalReturns};`);
    }

    /**
     * Generates the `Remote` interface for an API (e.g., `MyApiRemote`).
     * @param apiName - The name of the API.
     * @param apiDef - The TypeDefinition for the API.
     * @returns The generated TypeScript code as a string.
     */
    private generateApiRemote(apiName: string, apiDef: TypeDefinition): string {
        const parents = (apiDef?.parents || []) as string[];
        const extendsParents = parents.map(p => `${p}Remote`).join(', ');
        const extendsClause = parents.length > 0 ? `, ${extendsParents}` : '';
        return `export interface ${apiName}Remote extends ${apiName}, RemoteApi${extendsClause} {}`;
    }

    /**
     * Generates the `Local` abstract base class for an API (e.g., `MyApiLocal`).
     * @param apiName - The name of the API.
     * @param apiDef - The TypeDefinition for the API.
     * @returns The generated TypeScript code as a string.
     */
    private generateApiLocal(apiName: string, apiDef: TypeDefinition): string {
        const sb: string[] = [];
        const remoteType = `${apiName}Remote`;

        sb.push(`export abstract class ${apiName}Local<RT extends ${remoteType}> implements ${apiName} {`);
        sb.push(`    protected readonly remoteApi: RT;`);
        sb.push(`    public getRemoteApi(): RT { return this.remoteApi; }`);
        sb.push(`    protected constructor(remoteApi: RT) { this.remoteApi = remoteApi; }`);

        const methods = this.getAllMethods(apiName, apiDef);
        methods.forEach(m => {
            this.generateApiLocalMethod(sb, m);
        });

        sb.push(`}`);
        return sb.join('\n');
    }

    /**
     * Generates a single abstract method for the `Local` base class.
     * @param sb - The string array to append code lines to.
     * @param m - The method definition object.
     */
    private generateApiLocalMethod(sb: string[], m: any): void {
        const paramTypes = Object.entries(m.params).map(([pn, pt]) => {
            const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                ? (pt as TypeDefinition).stream!.name!
                : pt as string;
            return `${pn}: ${new TypeInfo(typeStr).getArgumentType()}`;
        }).join(', ');

        const hasReturns = m.returns != null;
        const hasThrows = m.throws != null;
        let finalReturns: string;

        if (hasReturns) {
            const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
                ? (m.returns as TypeDefinition).stream!.name!
                : m.returns as string;

            if (returnTypeStr === "void") {
                finalReturns = "AFuture";
            } else {
                const returnTypeInfo = new TypeInfo(returnTypeStr);
                finalReturns = returnTypeInfo.getAsReturnType();
            }
        } else if (hasThrows) {
            finalReturns = "AFuture";
        } else {
            finalReturns = "void";
        }

        // --- [ИЗМЕНЕНИЕ] Генерация JSDoc ---
        sb.push(...this.generateMethodJSDoc(m, finalReturns, '    '));
        // --- [ИЗМЕНЕНИЕ] Конец JSDoc ---

        sb.push(`    public abstract ${m.name}(${paramTypes}): ${finalReturns};`);
    }

    /**
     * Generates the `makeLocal_fromDataIn` method for the API `META`.
     * @param sb - The string array to append code lines to.
     * @param apiName - The name of the API.
     * @param methods - A Map of all methods for this API.
     */
    private generateMetaMakeLocal_fromDataIn(sb: string[], apiName: string, methods: Map<string, any>): void {
        const localApiVar = methods.size > 0 ? 'localApi' : '_localApi';

        sb.push(`    makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, ${localApiVar}: ${apiName}): void {`);
        sb.push(`        while(dataIn.isReadable()) { const commandId = dataIn.readUByte(); switch(commandId) {`);
        sb.push(`                case 0: { const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn); const futureRec = ctx.getFuture(reqId); if (futureRec) futureRec.onDone(dataIn); break; }`);
        sb.push(`                case 1: { const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn); const futureRec = ctx.getFuture(reqId); if (futureRec) futureRec.onError(dataIn); break; }`);

        methods.forEach(m => {
            this.generateApiMethodCase(sb, this.generatorLogic, m, localApiVar);
        });

        sb.push(`            default: throw new Error(\`Unknown command ID: \${commandId}\`);`);
        sb.push(`        }}`);
        sb.push(`    }`);
    }

    /**
     * Generates the code for a single `case` statement in `makeLocal_fromDataIn`,
     * handling one API method call.
     * @param sb - The string array to append code lines to.
     * @param g - The GeneratorLogic instance.
     * @param m - The method definition object.
     * @param localApiVar - The name of the local API implementation variable.
     */
    private generateApiMethodCase(sb: string[], g: GeneratorLogic, m: any, localApiVar: string): void {
        const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
            ? (m.returns as TypeDefinition).stream!.name!
            : m.returns as string;

        const returnTypeInfo = new TypeInfo(returnTypeStr);

        const throwsTypeStr = (typeof m.throws === 'object' && m.throws !== null && (m.throws as TypeDefinition).stream?.name)
            ? (m.throws as TypeDefinition).stream!.name!
            : m.throws as string;

        const hasResponse = m.returns != null || m.throws != null;
        const reqIdVar = g.getUniqueVarName('reqId');
        const paramVars: string[] = [];
        const fieldsForDeserialize = new Map<string, TypeInfo>();

        sb.push(`            case ${m.id}: {`);
        if (hasResponse) sb.push(`                const ${reqIdVar} = dataIn.readInt();`);

        const paramNames: string[] = [];
        Object.entries(m.params).forEach(([paramName, paramType]) => {
            const typeStr = (typeof paramType === 'object' && paramType !== null && (paramType as TypeDefinition).stream?.name)
                ? (paramType as TypeDefinition).stream!.name!
                : paramType as string;
            const typeInfo = new TypeInfo(typeStr);
            const localVar = g.getUniqueVarName(paramName);

            sb.push(`                let ${localVar}: ${typeInfo.getLocalVarType()};`);
            fieldsForDeserialize.set(localVar, typeInfo);
            paramVars.push(localVar);
            paramNames.push(paramName);
        });

        const deserLines: string[] = [];
        g.generateDeserializerFields(deserLines, 'ctx', 'dataIn', fieldsForDeserialize);
        deserLines.forEach(l => sb.push(`                ${l}`));

        const argsNamesVar = g.getUniqueVarName("argsNames");
        const argsValuesVar = g.getUniqueVarName("argsValues");
        sb.push(`                const ${argsNamesVar}: string[] = [${paramNames.map(n => `"${n}"`).join(', ')}];`);
        sb.push(`                const ${argsValuesVar}: any[] = [${paramVars.join(', ')}];`);
        sb.push(`                ctx.invokeLocalMethodBefore("${m.name}", ${argsNamesVar}, ${argsValuesVar});`);

        const call = `${localApiVar}.${m.name}(${paramVars.join(', ')})`;
        if (throwsTypeStr) sb.push(`                try {`);

        const callIndent = throwsTypeStr ? '    ' : '';

        if (hasResponse) {
            sb.push(`                    ${callIndent}ctx.regLocalFuture(); const resultFuture = ${call};`);
            sb.push(`                    ${callIndent}ctx.invokeLocalMethodAfter("${m.name}", resultFuture, ${argsNamesVar}, ${argsValuesVar});`);

            if (m.returns != null && returnTypeInfo.javaType === "void") {
                sb.push(`                    ${callIndent}resultFuture.to(() => { ctx.sendResultToRemoteNoData(${reqIdVar}); });`);
            }
            else if (m.returns != null) {
                const rt = returnTypeInfo;
                const d = g.getUniqueVarName("data");
                const rr = g.getUniqueVarName("v");
                const serLines: string[] = [];
                g.generateSerializer(serLines, 'ctx', d, rr, rt);

                sb.push(`                    ${callIndent}resultFuture.to((${rr}: ${rt.getArgumentType()}) => { const ${d} = new DataInOut();`);
                serLines.forEach(l => sb.push(`                    ${callIndent}    ${l}`));
                sb.push(`                    ${callIndent}    ctx.sendResultToRemote(${reqIdVar}, ${d}.toArray()); });`);
            }
        } else {
            sb.push(`                    ${callIndent}${call};`);
            sb.push(`                    ${callIndent}ctx.invokeLocalMethodAfter("${m.name}", null, ${argsNamesVar}, ${argsValuesVar});`);
        }

        if (throwsTypeStr) {
            const et = new TypeInfo(throwsTypeStr as string);
            const d = g.getUniqueVarName("data");
            sb.push(`                } catch (e: any) {`);
            sb.push(`                    ctx.invokeLocalMethodAfter("${m.name}", null, ${argsNamesVar}, ${argsValuesVar});`);
            sb.push(`                    const ${d} = new DataInOut();`);
            sb.push(`                    FastMeta.META_COMMAND.serialize(ctx, 1, ${d}); FastMeta.META_REQUEST_ID.serialize(ctx, ${reqIdVar}, ${d});`);
            sb.push(`                    ${g.generateAccessMeta(et)}.serialize(ctx, e as ${et.getArgumentType()}, ${d}); ctx.sendToRemote(${d}.toArray()); }`);
        }
        sb.push(`                break; }`);
    }

    /**
     * Generates the `makeLocal_fromBytes_ctxLocal` method for the API `META`.
     * @param sb - The string array to append code lines to.
     * @param apiName - The name of the API.
     */
    private generateMetaMakeLocal_fromBytes_ctxLocal(sb: string[], apiName: string): void {
        sb.push(`    makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<${apiName}>, data: Uint8Array): void {`);
        sb.push(`        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);`);
        sb.push(`    }`);
    }

    /**
     * Generates the `makeLocal_fromBytes_ctx` method for the API `META`.
     * @param sb - The string array to append code lines to.
     * @param apiName - The name of the API.
     */
    private generateMetaMakeLocal_fromBytes_ctx(sb: string[], apiName: string): void {
        sb.push(`    makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ${apiName}): void {`);
        sb.push(`        this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);`);
        sb.push(`    }`);
    }

    /**
     * Generates the `makeRemote` method for the API `META`.
     * @param sb - The string array to append code lines to.
     * @param apiName - The name of the API.
     * @param methods - A Map of all methods for this API.
     */
    private generateMetaMakeRemote(sb: string[], apiName: string, methods: Map<string, any>): void {
        const g = this.generatorLogic;
        const sCtx = g.getUniqueVarName('sCtx');

        sb.push(`    makeRemote(${sCtx}: FastFutureContext): ${apiName}Remote {`);
        sb.push(`        const remoteApiImpl = {`);
        sb.push(`            flush: (sendFuture?: AFuture) => { ${sCtx}.flush(sendFuture || AFuture.make()); },`);
        sb.push(`            getFastMetaContext: () => ${sCtx},`);

        methods.forEach(m => {
            this.generateRemoteApiMethodImpl(sb, g, m, sCtx);
        });

        sb.push(`        };`);
        sb.push(`        return remoteApiImpl as ${apiName}Remote;`);
        sb.push(`    }`);
    }

    /**
     * Generates the implementation for a single remote API method inside `makeRemote`.
     * @param sb - The string array to append code lines to.
     * @param g - The GeneratorLogic instance.
     * @param m - The method definition object.
     * @param sCtx - The name of the FastFutureContext variable.
     */
    private generateRemoteApiMethodImpl(sb: string[], g: GeneratorLogic, m: any, sCtx: string): void {
        const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
            ? (m.returns as TypeDefinition).stream!.name!
            : m.returns as string;

        const returnTypeInfo = new TypeInfo(returnTypeStr);

        const throwsTypeStr = (typeof m.throws === 'object' && m.throws !== null && (m.throws as TypeDefinition).stream?.name)
            ? (m.throws as TypeDefinition).stream!.name!
            : m.throws as string;

        const hasResponse = m.returns != null || m.throws != null;

        const paramTypes = Object.entries(m.params).map(([pn, pt]) => {
            const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                ? (pt as TypeDefinition).stream!.name!
                : pt as string;
            return `${pn}: ${new TypeInfo(typeStr).getArgumentType()}`;
        }).join(', ');

        const hasReturns_sig = m.returns != null;
        const hasThrows_sig = m.throws != null;
        let finalReturns: string;

        if (hasReturns_sig) {
            if (returnTypeStr === "void") {
                finalReturns = "AFuture";
            } else {
                finalReturns = returnTypeInfo.getAsReturnType();
            }
        } else if (hasThrows_sig) {
            finalReturns = "AFuture";
        } else {
            finalReturns = "void";
        }

        const paramNames = Object.keys(m.params);
        const reqIdVar = g.getUniqueVarName('reqId');
        const dataOutVar = g.getUniqueVarName('dataOut');
        const resultVar = g.getUniqueVarName('result');

        sb.push(`            ${m.name}: (${paramTypes}): ${finalReturns} => {`);
        sb.push(`                const ${dataOutVar} = new DataInOut(); ${dataOutVar}.writeByte(${m.id});`);

        const argsNamesVar = g.getUniqueVarName("argsNames");
        const argsValuesVar = g.getUniqueVarName("argsValues");
        sb.push(`                const ${argsNamesVar}: string[] = [${paramNames.map(n => `"${n}"`).join(', ')}];`);
        sb.push(`                const ${argsValuesVar}: any[] = [${paramNames.join(', ')}];`);

        if (hasResponse) {
            sb.push(`                const ${resultVar} = ${returnTypeInfo.getInitFuture()};`);
            sb.push(`                ${sCtx}.invokeRemoteMethodAfter("${m.name}", ${resultVar}, ${argsNamesVar}, ${argsValuesVar});`);
            sb.push(`                const ${reqIdVar} = ${sCtx}.regFuture({`);
            sb.push(`                    onDone: (in_: DataIn) => {`);

            if (m.returns != null && returnTypeInfo.javaType !== "void") {
                const rt = returnTypeInfo;
                sb.push(`                        (${resultVar} as ARFuture<${rt.getArgumentType()}>).tryDone(${g.generateAccessMeta(rt)}.deserialize(${sCtx}, in_));`);
            } else {
                sb.push(`                        (${resultVar} as AFuture).tryDone();`);
            }

            sb.push(`                    },`);
            const onErrorInParam = throwsTypeStr ? 'in_' : '_in_';
            sb.push(`                    onError: (${onErrorInParam}: DataIn) => {`);

            if (throwsTypeStr) {
                const et = new TypeInfo(throwsTypeStr as string);
                sb.push(`                        const errorObj: ${et.getArgumentType()} = ${g.generateAccessMeta(et)}.deserialize(${sCtx}, ${onErrorInParam}); ${resultVar}.error(errorObj as Error);`);
            } else {
                sb.push(`                        ${resultVar}.error(new Error("Remote call failed without a typed exception"));`);
            }

            sb.push(`                    }`);
            sb.push(`                }); ${dataOutVar}.writeInt(${reqIdVar});`);
        } else {
            sb.push(`                ${sCtx}.invokeRemoteMethodAfter("${m.name}", null, ${argsNamesVar}, ${argsValuesVar});`);
        }

        const fieldsForSerialize = new Map(paramNames.map(pn => {
            const pt = (m.params as any)[pn];
            const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                ? (pt as TypeDefinition).stream!.name!
                : pt as string;
            return [pn, new TypeInfo(typeStr)];
        }));

        const serLines: string[] = [];
        g.generateSerializerFields(serLines, sCtx, dataOutVar, fieldsForSerialize);
        serLines.forEach(l => sb.push(`                ${l}`));

        sb.push(`                ${sCtx}.sendToRemote(${dataOutVar}.toArray());`);

        if (hasResponse) {
            sb.push(`                return ${resultVar};`);
        }

        sb.push(`            },`);
    }
}
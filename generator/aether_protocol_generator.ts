#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import {
    AetherDslMeta,
    AetherDslMetaMap,
    IncludeResolver,
    TypeDefinition,
    GeneratorLogic
} from "./aether_protocol_core";
import { TypeGenerator } from "./type_generator";
import { ApiGenerator } from "./api_generator";

/**
 * Main orchestrator for the Aether DSL to TypeScript code generation process.
 */
export class AetherDslMetaProcessor {
    private readonly generatorLogic: GeneratorLogic;
    private readonly apiGenerator: ApiGenerator;
    private readonly typeGenerator: TypeGenerator;
    private readonly globalProtocolData: AetherDslMetaMap;
    private generatedCode: string = '';
    private generatedImplCode: string = '';
    private generatedTypes: Set<string> = new Set();
    private generatedApis: Set<string> = new Set();

    /**
     * @private
     * @readonly
     * @type {string}
     */
    private readonly importPrefix: string;

    /**
     * Creates an instance of AetherDslMetaProcessor.
     * @param globalProtocolData - A map of all loaded DSL metadata.
     * @param baseName - The base name of the protocol being generated.
     * @param initialDslMeta - The primary DSL metadata for this generator.
     */
    constructor(globalProtocolData: AetherDslMetaMap, baseName: string, initialDslMeta: AetherDslMeta) {
        this.globalProtocolData = globalProtocolData;
        this.generatorLogic = new GeneratorLogic(globalProtocolData, baseName, initialDslMeta);
        this.typeGenerator = new TypeGenerator(this.generatorLogic);
        this.apiGenerator = new ApiGenerator(this.generatorLogic);

        let runningPackageName = '';
        try {
            const pkgPath = path.resolve(process.cwd(), 'package.json');
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            runningPackageName = pkg.name;
        } catch (e) {
            console.warn("Could not read package.json, defaulting to package imports.");
        }

        if (runningPackageName === 'aether-client') {
            this.importPrefix = './aether_client';
        } else {
            this.importPrefix = 'aether-client';
        }
        console.log(`Generator running in '${runningPackageName}', using import prefix: '${this.importPrefix}'`);
    }

    /**
     * Generates the standard import preamble for the main `aether_api.ts` file.
     * @returns The preamble code string.
     */
    private getPreambleImports(): string {
        return `import {
    AFuture,
    ARFuture,
    DataInOutStatic,
    FastMetaType,
    FastFutureContext,
    RemoteApi,
    FastMetaApi,
    BytesConverter,
    UUID,
    URI,
    AConsumer,
    ToString,
    AString
} from '${this.importPrefix}';
import * as Impl from './aether_api_impl'; // This is always relative

`;
    }

    /**
     * Generates the preamble for the `aether_api_impl.ts` file.
     * @param allTypeNames - All generated DTO/Enum/Stream names.
     * @param allApiNames - All generated API interface names.
     * @returns The preamble code string for the implementation file.
     */
    private getPreambleImportsImpl(allTypeNames: string[], allApiNames: string[]): string {
        const allImports = [...allTypeNames, ...allApiNames];

        allApiNames.forEach(apiName => {
            allImports.push(`${apiName}Remote`);
        });

        return `import {
    AFuture,
    ARFuture,
    DataIn,
    DataOut,
    DataInOut,
    DataInOutStatic,
    FastMetaType,
    FastFutureContext,
    FastMeta,
    SerializerPackNumber,
    DeserializerPackNumber,
    FastApiContextLocal,
    FastMetaApi,
    FastFutureContextStub,
    UUID,
    URI,
    AString,
    FlushReport
} from '${this.importPrefix}';
import {
    ${allImports.join(',\n    ')}
} from './aether_api'; // This is always relative

`;
    }

    /**
     * Runs the entire code generation process.
     * @returns A map of file names to their generated code content.
     */
    generate(): { [fileName: string]: string } {
        const enums: string[] = [];
        const abstracts: string[] = [];
        const concretes: string[] = [];
        const streams: string[] = [];
        const apisCode: string[] = [];

        this.performAnonymousTypeDiscovery();

        const sortedTypeNames = Array.from(this.generatorLogic.allTypes.keys()).sort((a, b) => {
            const defA = this.generatorLogic.allTypes.get(a);
            const defB = this.generatorLogic.allTypes.get(b);
            if (!defA || !defB) return !defA ? (!defB ? 0 : 1) : -1;
            if (defA.parent === b) return 1;
            if (defB.parent === a) return -1;
            const typeRank = (def: TypeDefinition | undefined): number => {
                if (!def) return 4; if (def.enum) return 0; if (def.abstract) return 1; if (def.stream) return 3; return 2;
            };
            const rankA = typeRank(defA);
            const rankB = typeRank(defB);
            if (rankA !== rankB) return rankA - rankB;
            return a.localeCompare(b);
        });

        this.generateSortedTypes(sortedTypeNames, enums, abstracts, concretes, streams);
        this.generateApiCode(apisCode);

        this.generatedCode = this.assembleGeneratedFile(
            enums, abstracts, concretes, streams, apisCode
        );

        const allTypeNames = Array.from(this.generatedTypes);
        const allApiNames = Array.from(this.generatedApis);

        const implPreamble = this.getPreambleImportsImpl(allTypeNames, allApiNames);
        const implBody = this.generatorLogic.allImplCode.join('\n\n');

        this.generatedImplCode = [implPreamble, implBody].filter(Boolean).join('\n\n');

        this.generatedCode = this.formatCode(this.generatedCode);
        this.generatedImplCode = this.formatCode(this.generatedImplCode);

        return {
            [`aether_api.ts`]: this.generatedCode,
            [`aether_api_impl.ts`]: this.generatedImplCode
        };
    }

    /**
     * Helper function to format generated code (e.g., fix indentation).
     * @param code - The code string to format.
     * @returns The formatted code string.
     */
    private formatCode(code: string): string {
        return code.replace(/\n{3,}/g, '\n\n')
            .replace(/^( {4})/gm, '    ')
            .replace(/^( {8})/gm, '        ')
            .replace(/^( {12})/gm, '            ')
            .replace(/^( {16})/gm, '                ')
            .replace(/^( {20})/gm, '                    ');
    }
    private performAnonymousTypeDiscovery(): void {
        Object.values(this.globalProtocolData).forEach(dslMeta => {
            Object.entries(dslMeta.api || {}).forEach(([apiName, apiDef]) => {
                this.discoverAnonymousTypesInApi(apiName, apiDef as TypeDefinition);
            });
            Object.entries(dslMeta.types || {}).forEach(([typeName, typeDef]) => {
                this.discoverAnonymousTypesInDto(typeName, typeDef as TypeDefinition);
            });
        });
    }

    private generateSortedTypes(sortedTypeNames: string[], enums: string[], abstracts: string[], concretes: string[], streams: string[]): void {
        sortedTypeNames.forEach(name => {
            const defn = this.generatorLogic.allTypes.get(name);
            const isApi = this.generatorLogic.isApiDefinition(name);

            if (!defn || this.generatedTypes.has(name) || isApi) return;

            const code = this.typeGenerator.generateType(name, defn);
            if (defn.enum) enums.push(code);
            else if (defn.abstract) abstracts.push(code);
            else if (defn.stream) streams.push(code);
            else concretes.push(code);
            this.generatedTypes.add(name);
        });
    }

    private generateApiCode(apisCode: string[]): void {
        this.generatorLogic.canonicalApiMap.forEach((canonicalName, lowerName) => {
            if (!this.generatedApis.has(canonicalName)) {
                const defn = this.generatorLogic.allTypes.get(canonicalName);
                if (defn) {
                    const apiOutput = this.apiGenerator.generateApi(canonicalName, defn as TypeDefinition);
                    apisCode.push(apiOutput[canonicalName]);
                    this.generatedApis.add(canonicalName);
                }
            }
        });
    }

    private assembleGeneratedFile(enums: string[], abstracts: string[], concretes: string[], streams: string[], apisCode: string[]): string {
        let code = this.getPreambleImports();
        code += enums.join('\n\n') + (enums.length ? '\n\n' : '');
        code += abstracts.join('\n\n') + (abstracts.length ? '\n\n' : '');
        code += concretes.join('\n\n') + (concretes.length ? '\n\n' : '');
        code += streams.join('\n\n') + (streams.length ? '\n\n' : '');
        code += apisCode.join('\n\n');
        return code;
    }

    private discoverAnonymousTypesInApi(apiName: string, apiDef: TypeDefinition | null | undefined): void {
        if (!apiDef) return;

        const processPotentialAnon = (parts: string[], typeDef: any): string | any => {
            if (typeof typeDef === 'object' && typeDef !== null) {
                const nameParts = [...parts];
                if (typeDef.stream && !nameParts.some(p => p.toLowerCase().includes("stream"))) {
                    nameParts.push("Stream");
                }
                const anonName = this.generatorLogic.declareAnonymType(nameParts, typeDef as TypeDefinition);
                if (!this.generatorLogic.allTypes.has(anonName)) {
                    this.generatorLogic.allTypes.set(anonName, typeDef as TypeDefinition);
                    this.generatorLogic.declaredTypeNames.add(anonName);
                }
                return anonName;
            }
            return typeDef;
        };

        if (apiDef.methods) {
            for (const methodName in apiDef.methods) {
                const mDef = apiDef.methods[methodName];
                if (!mDef) continue;

                if (mDef.params) {
                    for (const paramName in mDef.params) {
                        mDef.params[paramName] = processPotentialAnon([paramName, methodName, apiName], mDef.params[paramName]);
                    }
                }
                if (mDef.returns) {
                    apiDef.methods[methodName].returns = processPotentialAnon([methodName + "Result", apiName], mDef.returns);
                }
                if (mDef.throws) {
                    apiDef.methods[methodName].throws = processPotentialAnon([methodName + "Exception", apiName], mDef.throws);
                }
            }
        }
    }

    private discoverAnonymousTypesInDto(dtoName: string, dtoDef: TypeDefinition | null | undefined): void {
        if (!dtoDef || !dtoDef.fields) return;

        const processFieldType = (parts: string[], typeDef: any): string | any => {
            if (typeof typeDef === 'object' && typeDef !== null) {
                const anonName = this.generatorLogic.declareAnonymType(parts, typeDef as TypeDefinition);
                if (!this.generatorLogic.allTypes.has(anonName)) {
                    this.generatorLogic.allTypes.set(anonName, typeDef as TypeDefinition);
                    this.generatorLogic.declaredTypeNames.add(anonName);
                    this.discoverAnonymousTypesInDto(anonName, typeDef as TypeDefinition);
                }
                return anonName;
            }
            return typeDef;
        };

        Object.entries(dtoDef.fields).forEach(([fieldName, fieldType]) => {
            dtoDef.fields![fieldName] = processFieldType([fieldName, dtoName], fieldType);
        });
    }
}

    /**
     * Iterates through all DSL data and discovers anonymous types in
     * API definitions and DTO fields, registering them.
     */

/**
 * Public entry point for generating Aether protocol code.
 * @param meta - A map of all loaded DSL metadata.
 * @param resolver - An include resolver function (not used in this version).
 * @param baseName - The base name of the protocol to generate.
 * @returns A promise resolving to a map of file names to their code content.
 */
export async function generateAetherProtocol(
    meta: AetherDslMetaMap,
    resolver: IncludeResolver,
    baseName: string
): Promise<{ [fileName: string]: string }> {
    const globalProtocolData = meta;
    const primaryDslMeta = globalProtocolData[baseName];
    if (!primaryDslMeta) throw new Error(`Primary DSL meta for baseName '${baseName}' not found in provided map.`);

    const processor = new AetherDslMetaProcessor(globalProtocolData, baseName, primaryDslMeta);
    return processor.generate();
}
import { AetherDslMetaMap, TypeDefinition } from './aether_protocol_core';
import { TypeInfo } from './aether_protocol_core';
import * as path from 'path';

/**
 * Validates Aether Protocol YAML definitions against known types and structural rules.
 * This is a TypeScript port of the logic from the Java/Groovy Validator.
 */
export class Validator {
    private readonly protocolDataMap: AetherDslMetaMap;
    private readonly fileMap: Map<string, string>; // baseName -> fullPath
    private readonly errors: string[] = [];

    private readonly canonicalTypeMap = new Map<string, string>();
    private readonly canonicalApiMap = new Map<string, string>();

    private readonly allTypes = new Map<string, TypeDefinition>();
    private readonly allApis = new Map<string, TypeDefinition>();
    private readonly parentToChildrenMap = new Map<string, string[]>();

    /**
     * Helper to add a name to a canonical map and check for collisions.
     */
    private addCanonicalName(
        map: Map<string, string>,
        name: string,
        sourceFile: string,
        entityType: 'Type' | 'API'
    ): void {
        const lowerName = name.toLowerCase();
        if (map.has(lowerName)) {
            const existingName = map.get(lowerName);
            if (existingName !== name) {
                this.errors.push(`In file '${path.basename(sourceFile)}': Ambiguous ${entityType} declaration.
    '${name}' collides with '${existingName}' (both resolve to '${lowerName}').
    Please ensure all ${entityType} declarations have unique names, ignoring case.`);
            }
        } else {
            map.set(lowerName, name);
        }
    }

    /**
     * Constructs a Validator.
     * @param protocolDataMap The map of parsed protocol definitions.
     * @param fileMap A map from base name to the original file path for error reporting.
     */
    constructor(protocolDataMap: AetherDslMetaMap, fileMap: Map<string, string>) {
        this.protocolDataMap = protocolDataMap;
        this.fileMap = fileMap;

        Object.entries(this.protocolDataMap).forEach(([baseName, meta]) => {
            const sourceFile = this.fileMap.get(baseName) || baseName;

            Object.entries(meta.types || {}).forEach(([name, def]) => {
                this.allTypes.set(name, def as TypeDefinition);
                this.addCanonicalName(this.canonicalTypeMap, name, sourceFile, 'Type');
            });
            Object.entries(meta.api || {}).forEach(([name, def]) => {
                this.allApis.set(name, def as TypeDefinition);
                this.addCanonicalName(this.canonicalApiMap, name, sourceFile, 'API');
            });
        });

        this.allTypes.forEach((def, name) => {
            if (def.parent) {
                if (!this.parentToChildrenMap.has(def.parent)) {
                    this.parentToChildrenMap.set(def.parent, []);
                }
                this.parentToChildrenMap.get(def.parent)!.push(name);
            }
        });
    }

    /**
     * Runs the validation process.
     * Throws an Error if any errors are found.
     */
    public validate(): void {
        Object.entries(this.protocolDataMap).forEach(([baseName, data]) => {
            this.validateTypes(baseName, data.types as { [key: string]: TypeDefinition });
            this.validateApis(baseName, data.api as { [key: string]: TypeDefinition });
        });

        this.validateAbstractConstants();

        if (this.errors.length > 0) {
            const errorMessage = `ADSL Validation failed with the following errors:\n` +
                this.errors.map(e => `  - ${e}`).join('\n');
            throw new Error(errorMessage);
        }
    }

    /**
     * Validates all type definitions in a protocol file.
     */
    private validateTypes(baseName: string, types: { [key: string]: TypeDefinition }): void {
        if (!types) return;
        const sourceFile = this.fileMap.get(baseName) || baseName;

        Object.entries(types).forEach(([typeName, typeDef]) => {
            if (!typeDef) return;

            const parentName = typeDef.parent as string;
            if (parentName && parentName !== 'Exception' && !this.findTypeDefinition(parentName)) {
                this.errors.push(`In file '${path.basename(sourceFile)}': Type '${typeName}' refers to an unknown parent type '${parentName}'.`);
            }

            const fields = typeDef.fields as { [key: string]: any };
            if (!fields) return;

            Object.entries(fields).forEach(([fieldName, fieldTypeNameRaw]) => {
                if (typeof fieldTypeNameRaw === 'object' && fieldTypeNameRaw !== null) {
                    this.validateFields(fieldName, fieldTypeNameRaw, sourceFile, `${typeName}.${fieldName}`);
                } else {
                    const fieldTypeInfo = new TypeInfo(fieldTypeNameRaw as string, false);
                    if (!this.findTypeDefinition(fieldTypeInfo.javaType)) {
                        this.errors.push(`In file '${path.basename(sourceFile)}': In type '${typeName}', field '${fieldName}' refers to an unknown type '${fieldTypeInfo.javaType}'.`);
                    }
                }
            });
        });
    }

    /**
     * Validates all API definitions in a protocol file.
     */
    private validateApis(baseName: string, apis: { [key: string]: TypeDefinition }): void {
        if (!apis) return;
        const sourceFile = this.fileMap.get(baseName) || baseName;

        Object.entries(apis).forEach(([apiName, apiDef]) => {
            if (!apiDef) return;

            const parents = apiDef.parents as string[];
            if (parents) {
                parents.forEach(parentName => {
                    if (!this.findApiDefinition(parentName)) {
                        this.errors.push(`In file '${path.basename(sourceFile)}': API '${apiName}' refers to an unknown parent API '${parentName}'.`);
                    }
                });
            }

            const methods = apiDef.methods as { [key: string]: any };
            if (!methods) return;

            Object.entries(methods).forEach(([methodName, methodDef]) => {
                if (!methodDef) return;

                const context = `API '${apiName}', method '${methodName}'`;

                const returns = methodDef['returns'];
                if (returns) {
                    if (typeof returns === 'object' && returns !== null) {
                        this.validateFields("returns", returns, sourceFile, `${apiName}.${methodName}`);
                    } else {
                        const returnTypeInfo = new TypeInfo(returns as string, false);
                        if (!this.findTypeDefinition(returnTypeInfo.javaType)) {
                            this.errors.push(`In file '${path.basename(sourceFile)}': In ${context}, has an unknown return type '${returnTypeInfo.javaType}'.`);
                        }
                    }
                }

                const throwsDef = methodDef['throws'];
                if (throwsDef) {
                    if (typeof throwsDef === 'object' && throwsDef !== null) {
                        this.validateFields("throws", throwsDef, sourceFile, `${apiName}.${methodName}`);
                    } else {
                        const throwsTypeInfo = new TypeInfo(throwsDef as string, false);
                        if (!this.findTypeDefinition(throwsTypeInfo.javaType)) {
                            this.errors.push(`In file '${path.basename(sourceFile)}': In ${context}, has an unknown throws type '${throwsTypeInfo.javaType}'.`);
                        }
                    }
                }

                const params = methodDef.params as { [key: string]: any };
                if (!params) return;

                Object.entries(params).forEach(([paramName, paramTypeNameRaw]) => {
                    if (typeof paramTypeNameRaw === 'object' && paramTypeNameRaw !== null) {
                        this.validateFields(paramName, paramTypeNameRaw, sourceFile, `${apiName}.${methodName}`);
                    } else {
                        const paramTypeInfo = new TypeInfo(paramTypeNameRaw as string, false);
                        if (!this.findTypeDefinition(paramTypeInfo.javaType)) {
                            this.errors.push(`In file '${path.basename(sourceFile)}': In ${context}, parameter '${paramName}' refers to an unknown type '${paramTypeInfo.javaType}'.`);
                        }
                    }
                });
            });
        });
    }

    /**
     * Recursively validates fields within an anonymous type definition.
     */
    private validateFields(fieldName: string, fieldDef: { [key: string]: any }, sourceFile: string, contextName: string): void {
        const fields = fieldDef.fields as { [key: string]: any };
        if (!fields) return;

        Object.entries(fields).forEach(([nestedFieldName, nestedFieldType]) => {
            if (typeof nestedFieldType === 'object' && nestedFieldType !== null) {
                this.validateFields(nestedFieldName, nestedFieldType, sourceFile, `${contextName}.${fieldName}`);
            } else {
                const fieldTypeInfo = new TypeInfo(nestedFieldType as string, false);
                if (!this.findTypeDefinition(fieldTypeInfo.javaType)) {
                    this.errors.push(`In file '${path.basename(sourceFile)}': In '${contextName}', anonymous type for field '${fieldName}' (nested field '${nestedFieldName}') refers to an unknown type '${fieldTypeInfo.javaType}'.`);
                }
            }
        });
    }

    /**
     * Checks if a type is defined in the protocol or is a recognized primitive.
     * @param typeName The name of the type to find.
     * @return True if the type is found or is primitive, false otherwise.
     */
    private findTypeDefinition(typeName: string): boolean {
        if (new TypeInfo(typeName, false).isPrimitive()) return true;
        return this.canonicalTypeMap.has(typeName.toLowerCase());
    }

    /**
     * Checks if an API is defined in the protocol.
     * @param apiName The name of the API to find.
     * @return True if the API is found, false otherwise.
     */
    private findApiDefinition(apiName: string): boolean {
        return this.canonicalApiMap.has(apiName.toLowerCase());
    }

    /**
     * Validates for the specific conflict of defining a "generic" constant
     * (like 'string') in an abstract parent, which conflicts with child definitions.
     */
    private validateAbstractConstants(): void {
        const problematicValues = new Set(['string', 'number', 'boolean']);

        this.allTypes.forEach((def, name) => {
            if (!def.abstract || !def.constants) {
                return;
            }

            const children = this.parentToChildrenMap.get(name) || [];
            if (children.length === 0) {
                return;
            }

            const sourceFile = this.findFileForType(name);

            Object.entries(def.constants).forEach(([constName, constValue]) => {

                if (problematicValues.has(constValue as string)) {

                    const childHasConflictingConstant = children.some(childName => {
                        const childDef = this.allTypes.get(childName);
                        return childDef?.constants && childDef.constants[constName] !== undefined;
                    });

                    if (childHasConflictingConstant) {
                        this.errors.push(`In file '${path.basename(sourceFile)}': ADSL Validation Error in abstract type '${name}':
    The constant '${constName}' is defined with a generic type ('${constValue}') in the abstract parent,
    AND it is also defined in its child classes. This creates a conflict.

    To fix this: Remove the 'constants' definition for '${constName}' from the parent type '${name}'.
    The generator will automatically create the required abstract getter because
    the constant is defined by its children.`);
                    }
                }
            });
        });
    }

    /**
     * Helper to find the source file for a type to improve error messages.
     * @param typeName The name of the type to locate.
     * @returns A file path string.
     */
    private findFileForType(typeName: string): string {
        for (const [baseName, data] of Object.entries(this.protocolDataMap)) {
            if (data.types && data.types[typeName]) {
                return this.fileMap.get(baseName) || 'unknown file';
            }
        }
        return 'unknown file';
    }
}
// =============================================================================================
// FILE: aether_protocol_generator.ts
// PURPOSE: Standalone Generator для генерации TypeScript кода из ADSL YAML,
//          на основе Groovy-генератора. (ИСПРАВЛЕННАЯ ВЕРСИЯ 24 - Add crypto support for Streams)
// =============================================================================================

// --- Импорты типов, используемых в генерируемом коде (для ссылок) ---
import {
    AFuture, ARFuture,
} from './aether_future';
import {
    DataIn, DataOut, DataInOut, DataInOutStatic
} from './aether_datainout';
import {
    FastMetaType, FastFutureContext, RemoteApi, FastMeta,
    SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi,
    BytesConverter, RemoteApiFuture // <-- Добавлен импорт BytesConverter, RemoteApiFuture
} from './aether_fastmeta';
import {
    UUID, URI, Uint8Array, AConsumer // <-- Добавлен импорт AConsumer
} from './aether_types';
import { ToString, AString } from './aether_astring';

// --- Типы DSL ---

export type AetherDslMeta = {
    services?: { [key: string]: any };
    types?: { [key: string]: any };
    enums?: { [key: string]: any };
    methods?: { [key: string]: any };
    includes?: string[];
    baseName?: string;
    api?: { [key: string]: any }; // Добавлено для совместимости с Groovy
};

export type AetherDslMetaMap = { [baseName: string]: AetherDslMeta };
export type IncludeResolver = (includeName: string) => Promise<AetherDslMeta>;
// --- ИЗМЕНЕНИЕ: TypeDefinition теперь может содержать stream с crypto ---
export type TypeDefinition = {
    [key: string]: any;
    fields?: { [key: string]: any };
    constants?: { [key: string]: string | number | boolean }; // <-- ДОБАВЛЕНО
    stream?: { api?: string, crypto?: boolean, name?: string };
    enum?: string[];
    abstract?: boolean;
    parent?: string;
};
// =============================================================================================
// 1.A. ConstantInfo (Парсинг констант DSL)
// =============================================================================================
/**
 * Вспомогательный класс для хранения информации о константе (имя, тип, значение).
 */
class ConstantInfo {
    public readonly name: string;
    public readonly type: 'string' | 'number' | 'boolean';
    public readonly value: string | number | boolean;
    public readonly capitalName: string;

    constructor(name: string, value: any) {
        this.name = name;
        this.value = value;
        this.capitalName = name.charAt(0).toUpperCase() + name.slice(1);
        const tsType = typeof value;

        if (tsType === 'string' || tsType === 'number' || tsType === 'boolean') {
            this.type = tsType;
        } else {
            throw new Error(`Constant '${name}' has invalid type '${tsType}'. Must be string, number, or boolean.`);
        }
    }

    /**
     * Возвращает TypeScript-тип константы (e.g., "string")
     */
    getGetterType(): string {
        return this.type;
    }

    /**
     * Возвращает имя геттера (e.g., "getMessageType")
     */
    getGetterName(): string {
        // Для boolean-констант (e.g., "isEvent") 'is' уже может быть в имени.
        // Groovy-версия не делает 'is' префикс для констант, следуем ей.
        return `get${this.capitalName}`;
    }

    /**
     * Возвращает строковое представление значения для вставки в код
     * (e.g., "LOGIN" -> "\"LOGIN\"", 123 -> "123")
     */
    getTsValue(): string {
        if (this.type === 'string') {
            // JSON.stringify корректно экранирует строки
            return JSON.stringify(this.value);
        }
        return String(this.value);
    }

    /**
     * Сравнивает с другой ConstantInfo (для проверки совпадения в иерархии)
     */
    equals(other: ConstantInfo): boolean {
        // Мы сравниваем только имя и ТИП. Значения могут (и должны) различаться.
        return this.name === other.name && this.type === other.type;
    }
}
// =============================================================================================
// 1. TypeInfo (Парсинг типов DSL) - БЕЗ ИЗМЕНЕНИЙ
// =============================================================================================
// ... (код TypeInfo остается прежним) ...
class TypeInfo {
    public readonly javaType: string;
    public readonly javaTypeBoxed: string;
    public readonly arrayStaticSize: number;
    public readonly isNullable: boolean;
    public readonly isArray: boolean;
    public readonly isPack: boolean;
    public readonly isAbstract: boolean;

    private static readonly PRIMITIVE_TYPES = new Set([
        "void", "byte", "short", "int", "long", "float", "double", "boolean",
        "String", "UUID", "URI", "Date", "java.util.Date"
    ]);

    constructor(type: string, isAbstract: boolean = false) {
        this.isAbstract = isAbstract;
        let t = type ? type.trim() : "";

        if (!t) {
            this.javaType = "void"; this.javaTypeBoxed = "void"; this.arrayStaticSize = 0;
            this.isNullable = false; this.isArray = false; this.isPack = false;
            return;
        }

        if (t.endsWith('?')) {
            this.isNullable = true;
            t = t.substring(0, t.length - 1);
        } else {
            this.isNullable = false;
        }

        if (t.toLowerCase() === "intpack") {
            this.isPack = true;
            t = "long";
        } else if (t.endsWith('(intpack)')) {
            this.isPack = true;
            t = t.substring(0, t.length - 9);
        } else {
            this.isPack = false;
        }

        const sIndex = t.lastIndexOf("[");
        if (t.endsWith("]") && sIndex > -1) {
            this.isArray = true;
            const sizeStr = t.substring(sIndex + 1, t.length - 1);
            if (sizeStr === '') {
                this.arrayStaticSize = 0;
            } else if (sizeStr.match(/^\d+$/)) {
                this.arrayStaticSize = parseInt(sizeStr);
            } else {
                this.arrayStaticSize = 0; // Default if size is not a number
            }
            t = t.substring(0, sIndex);
        } else {
            this.arrayStaticSize = 0;
            this.isArray = false;
        }

        const lowerType = t.toLowerCase();
        switch (lowerType) {
            case "byte": this.javaType = 'byte'; this.javaTypeBoxed = 'byte'; break;
            case "short": this.javaType = 'short'; this.javaTypeBoxed = 'short'; break;
            case "int": this.javaType = 'int'; this.javaTypeBoxed = 'int'; break;
            case "long": this.javaType = 'long'; this.javaTypeBoxed = 'long'; break;
            case "float": this.javaType = 'float'; this.javaTypeBoxed = 'float'; break;
            case "double": this.javaType = 'double'; this.javaTypeBoxed = 'double'; break;
            case "boolean": case "bool": this.javaType = 'boolean'; this.javaTypeBoxed = 'boolean'; break;
            case "string": this.javaType = 'string'; this.javaTypeBoxed = 'string'; break;
            case "uuid": this.javaType = 'UUID'; this.javaTypeBoxed = 'UUID'; break;
            case "uri": this.javaType = 'URI'; this.javaTypeBoxed = 'URI'; break;
            case "date": case "java.util.date": this.javaType = 'Date'; this.javaTypeBoxed = 'Date'; break;
            default: this.javaType = t; this.javaTypeBoxed = t;
        }
    }

    getClassName(): string { return this.javaTypeBoxed; }
    isPrimitive(): boolean { return !this.isArray && TypeInfo.PRIMITIVE_TYPES.has(this.javaType); }

    getElementType(): TypeInfo {
        return new TypeInfo(this.javaType, this.isAbstract);
    }

    getInitFuture(): string {
        if (this.javaType === "void") { return "AFuture.make()"; }
        const tsType = this.toTsType(false, false);
        return `ARFuture.of<${tsType}>()`;
    }
    getAsReturnType(): string {
        if (this.javaType === "void") { return "AFuture"; }
        const tsType = this.toTsType(false, false);
        return `ARFuture<${tsType}>`;
    }
    getGetterType(): string { return this.toTsType(true, false); }
    getFieldType(): string { return this.toTsType(true, false); }
    getArgumentType(): string { return this.toTsType(false, false); }
    getLocalVarType(): string { return this.toTsType(false, false); }

    private toTsType(allowNullable: boolean, _isField: boolean): string {
        let baseType: string;
        switch (this.javaType) {
            case 'byte': case 'short': case 'int': case 'long': case 'float': case 'double': baseType = 'number'; break;
            case 'boolean': case 'string': case 'UUID': case 'URI': case 'Date': baseType = this.javaType; break;
            default: baseType = this.javaTypeBoxed;
        }
        let result = baseType;
        if (this.isArray) {
            // Map byte[] to Uint8Array
            result = (this.javaType === 'byte') ? 'Uint8Array' : `${baseType}[]`;
        }
        if (allowNullable && this.isNullable) {
            result += ' | null';
        }
        return result;
    }

    toString(): string {
        return `${this.javaType}${this.isPack ? '(pack)' : ''}${this.isArray ? `[${this.arrayStaticSize > 0 ? this.arrayStaticSize : ''}]` : ''}${this.isNullable ? '?' : ''}`;
    }
}
// =============================================================================================
// 2. GeneratorLogic (Вспомогательные методы и логика сериализации/десериализации) - БЕЗ ИЗМЕНЕНИЙ
// =============================================================================================
// ... (код GeneratorLogic остается прежним) ...
class GeneratorLogic {
    private varCounter: number = 0;
    private generatedMeta: Map<string, string> = new Map();
    private metaAccessors: Map<string, string> = new Map();
    public allMetaCode: string[] = [];
    public declaredTypeNames: Set<string> = new Set();
    public readonly baseName: string;
    public readonly protocolData: AetherDslMeta;
    public readonly allTypes: Map<string, TypeDefinition> = new Map();
    private readonly typeHierarchyIds: Map<string, Map<string, number>> = new Map();
    private readonly typeToRootMap: Map<string, string> = new Map();
    private readonly rootToChildrenMap: Map<string, string[]> = new Map();
    public readonly globalProtocolData: AetherDslMetaMap;

    constructor(globalProtocolData: AetherDslMetaMap, baseName: string, initialDslMeta: AetherDslMeta) {
        this.baseName = baseName;
        this.protocolData = initialDslMeta;
        this.globalProtocolData = globalProtocolData;

        Object.values(globalProtocolData).forEach(data => {
            Object.keys(data.types || {}).forEach(typeName => {
                this.declaredTypeNames.add(typeName);
                this.allTypes.set(typeName, (data.types as any)[typeName]);
            });
            Object.keys(data.api || {}).forEach(typeName => {
                 this.declaredTypeNames.add(typeName);
                 this.allTypes.set(typeName, (data.api as any)[typeName] || {});
            });
        });

        this.buildTypeHierarchies();
        this.initStandardMeta();
    }

    private buildTypeHierarchies(): void {
        const parentToChildren: Map<string, string[]> = new Map();
        this.allTypes.forEach((typeDef, typeName) => {
            if (typeDef?.parent) {
                const parent = typeDef.parent as string;
                if (!parentToChildren.has(parent)) parentToChildren.set(parent, []);
                parentToChildren.get(parent)!.push(typeName);
            }
        });

        const rootTypes: Set<string> = new Set();
        this.allTypes.forEach((typeDef, typeName) => {
             const hasParent = typeDef?.parent && this.allTypes.has(typeDef.parent);
             const hasChildren = parentToChildren.has(typeName);
             const isApiType = this.isApiDefinition(typeName);

            if (!hasParent && hasChildren && !isApiType) {
                 rootTypes.add(typeName);
            }
        });


        rootTypes.forEach(rootType => {
            const hierarchyIds: Map<string, number> = new Map();
            const allConcreteTypes = this.findAllConcreteTypes(rootType, parentToChildren, new Set<string>());
            if (allConcreteTypes.length > 0) {
                allConcreteTypes.forEach(typeName => {
                    const typeDef = this.allTypes.get(typeName);
                    if (!typeDef) throw new Error(`Internal error: Type definition for '${typeName}' not found.`);
                    const typeId = typeDef.id as number;
                    if (typeId !== null && typeId !== undefined) {
                        if (typeId === 0) throw new Error(`Type '${typeName}' has id: 0. This ID is reserved.`);
                        for (const [existingType, existingId] of hierarchyIds.entries()) {
                            if (existingId === typeId) throw new Error(`Duplicate ID in hierarchy '${rootType}': '${typeName}' and '${existingType}' both have id: ${typeId}.`);
                        }
                        hierarchyIds.set(typeName, typeId);
                    }
                    this.typeToRootMap.set(typeName, rootType);
                });
                if (hierarchyIds.size > 0) this.typeHierarchyIds.set(rootType, hierarchyIds);
                this.rootToChildrenMap.set(rootType, allConcreteTypes);
            }
        });
    }

    public isApiDefinition(typeName: string): boolean {
         return Object.values(this.globalProtocolData).some(meta => meta.api && meta.api[typeName]);
    }


    private findAllConcreteTypes(currentType: string, parentToChildren: Map<string, string[]>, visitedTypes: Set<string>): string[] {
        if (visitedTypes.has(currentType)) return [];
        visitedTypes.add(currentType);
        const typeDef = this.allTypes.get(currentType);
        if (!typeDef || this.isApiDefinition(currentType)) {
             return [];
        }

        const result: string[] = typeDef.abstract ? [] : [currentType];
        if (parentToChildren.has(currentType)) {
            parentToChildren.get(currentType)!.forEach(childType => {
                result.push(...this.findAllConcreteTypes(childType, parentToChildren, visitedTypes));
            });
        }
        return Array.from(new Set(result));
    }

    public getTypeIdInHierarchy(typeName: string): number | undefined {
        const rootType = this.typeToRootMap.get(typeName);
        return rootType ? this.typeHierarchyIds.get(rootType)?.get(typeName) : undefined;
    }

    public getConcreteTypesInHierarchy(rootType: string): string[] {
        return this.rootToChildrenMap.get(rootType) || [];
    }

    public getRootTypeFor(typeName: string): string | undefined {
        return this.typeToRootMap.get(typeName);
    }

    public isInTypeHierarchy(typeName: string): boolean {
        return this.typeToRootMap.has(typeName);
    }

    public findTypeDefinition(typeName: string): TypeDefinition | undefined {
         const def = this.allTypes.get(typeName);
         // Ensure it's not an API definition being returned as a type
         if (def && !this.isApiDefinition(typeName)) {
             return def;
         }
         return undefined;
    }


    private initStandardMeta() {
        const add = (type: string, meta: string) => this.metaAccessors.set(new TypeInfo(type).toString(), meta);
        add("string", "FastMeta.META_STRING"); add("UUID", "FastMeta.META_UUID"); add("URI", "FastMeta.META_URI");
        add("intpack", "FastMeta.META_PACK"); add("byte", "FastMeta.META_BYTE"); add("short", "FastMeta.META_SHORT");
        add("int", "FastMeta.META_INT"); add("long", "FastMeta.META_LONG"); add("float", "FastMeta.META_FLOAT");
        add("double", "FastMeta.META_DOUBLE"); add("Date", "FastMeta.META_DATE"); add("boolean", "FastMeta.META_BOOLEAN");
        add("byte[]", "FastMeta.META_ARRAY_BYTE");
    }

    getUniqueVarName(baseName: string): string {
        const cleanBaseName = baseName.replace(/[^a-zA-Z0-9_]/g, '_');
        const finalBase = cleanBaseName.startsWith('_') ? cleanBaseName.substring(1) : cleanBaseName;
        const safeBase = ['in', 'out', 'key', 'string', 'number', 'boolean', 'any'].includes(finalBase) ? `_${finalBase}` : finalBase;
        return `${safeBase}_${this.varCounter++}`;
    }

    generateAccessMeta(t: TypeInfo): string {
        const typeKey = t.toString();
        let res = this.metaAccessors.get(typeKey);
        if (res) return res;
        if (t.isArray) {
            res = (t.javaType === 'byte') ? "FastMeta.META_ARRAY_BYTE" : this.regMeta(t);
        } else {
            const className = t.getClassName();
            const isKnownNonGenerated = ['UUID', 'URI', 'Date'].includes(className);
            const isGeneratedType = !!this.findTypeDefinition(className);

            if (isKnownNonGenerated || isGeneratedType) {
                 res = `${className}.META`;
            } else {
                 if (t.javaType === 'string') return 'FastMeta.META_STRING';
                 if (t.javaType === 'int') return 'FastMeta.META_INT';
                 if (t.javaType === 'long') return 'FastMeta.META_LONG';
                 if (t.javaType === 'byte') return 'FastMeta.META_BYTE';
                 if (t.javaType === 'boolean') return 'FastMeta.META_BOOLEAN';
                 throw new Error(`Could not find or determine meta accessor for type: ${t.javaType} (className: ${className}, toString: ${typeKey})`);
            }
        }
        this.metaAccessors.set(typeKey, res);
        return res;
    }


    private regMeta(t: TypeInfo): string {
        if (!t.isArray || t.javaType === 'byte') return "FastMeta.META_ARRAY_BYTE";

        const namespaceName = "AllCustomMeta";
        const elementType = t.getElementType();
        const elementTypeNameClean = elementType.javaTypeBoxed.replace(/\./g, '_');
        const name = `META_ARRAY_${elementTypeNameClean}`;
        const ma = `${namespaceName}.${name}`;
        if (this.generatedMeta.has(name)) return ma;
        this.generatedMeta.set(name, ma);
        const sCtx = '_sCtx';
        const objVar = 'obj';
        const outVar = 'out';
        const inVar = 'in_';
        const serializer = `
            ${t.arrayStaticSize === 0 ? `SerializerPackNumber.INSTANCE.put(${outVar}, ${objVar}.length);` : `/* Static length ${t.arrayStaticSize} */`}
            for (const el of ${objVar}) { ${this.generateAccessMeta(elementType)}.serialize(${sCtx}, el, ${outVar}); }`;
        const deserializer = `
            const len = ${t.arrayStaticSize === 0 ? `DeserializerPackNumber.INSTANCE.put(${inVar}).valueOf()` : `${t.arrayStaticSize}`};
            const ar = new Array<${elementType.getArgumentType()}>(len);
            for (let i = 0; i < len; i++) { ar[i] = ${this.generateAccessMeta(elementType)}.deserialize(${sCtx}, ${inVar}); }
            return ar;`;
        this.regMeta0(t, name, serializer, deserializer);
        return ma;
    }

    private regMeta0(t: TypeInfo, name: string, serializerCode: string, deserializerCode: string) {
        const sCtx = '_sCtx', obj = 'obj', out = 'out', in_ = 'in_';
        this.allMetaCode.push(`
export const ${name}: FastMetaType<${t.getArgumentType()}> = new class implements FastMetaType<${t.getArgumentType()}> {
    serialize(${sCtx}: FastFutureContext, ${obj}: ${t.getArgumentType()}, ${out}: DataOut): void { ${serializerCode.trim()} }
    deserialize(${sCtx}: FastFutureContext, ${in_}: DataIn): ${t.getArgumentType()} { ${deserializerCode.trim()} }
    ${FAST_META_TYPE_IMPL_STUB_METHODS}
}();`);
    }

    generateSerializer(sb: string[], serializeContextVar: string, outVar: string, inVar: string, type: TypeInfo): void {
        const vv = this.getUniqueVarName("el");
        if (type.isArray) {
            if (type.arrayStaticSize === 0) {
                sb.push(`SerializerPackNumber.INSTANCE.put(${outVar}, ${inVar}.length);`);
            } else {
                sb.push(`if (${inVar}.length !== ${type.arrayStaticSize}) throw new Error(\`IllegalStateException: Array length for ${inVar} must be ${type.arrayStaticSize} but was \${${inVar}.length}\`);`);
            }
            const elementType = type.getElementType();
            if (elementType.javaType === "byte") {
                sb.push(`${outVar}.write(${inVar});`);
            } else {
                sb.push(`for (const ${vv} of ${inVar}) {`);
                this.generateSerializer(sb, serializeContextVar, outVar, vv, elementType);
                sb.push(`}`);
            }
        } else {
            switch (type.javaType) {
                case "boolean": sb.push(`${outVar}.writeBoolean(${inVar});`); break;
                case "byte": sb.push(`${outVar}.writeByte(${inVar});`); break;
                case "short": sb.push(`${outVar}.writeShort(${inVar});`); break;
                case "int": sb.push(`${outVar}.writeInt(${inVar});`); break;
                case "long":
                    if (type.isPack) sb.push(`SerializerPackNumber.INSTANCE.put(${outVar}, ${inVar});`);
                    else sb.push(`${outVar}.writeLong(${inVar});`);
                    break;
                case "float": sb.push(`${outVar}.writeFloat(${inVar});`); break;
                case "double": sb.push(`${outVar}.writeDouble(${inVar});`); break;
                case "Date": sb.push(`${outVar}.writeLong(${inVar}.getTime());`); break;
                case "string":
                    const sdv = this.getUniqueVarName("stringBytes");
                    sb.push(`const ${sdv} = new TextEncoder().encode(${inVar});`);
                    this.generateSerializer(sb, serializeContextVar, outVar, sdv, new TypeInfo("byte[]"));
                    break;
                case "UUID": case "URI":
                    sb.push(`${this.generateAccessMeta(type)}.serialize(${serializeContextVar}, ${inVar}, ${outVar});`);
                    break;
                default:
                     const className = type.getClassName();
                     sb.push(`${className}.META.serialize(${serializeContextVar}, ${inVar}, ${outVar});`);
            }
        }
    }

    generateDeserializer(sb: string[], serializeContextVar: string, inVar: string, outVar: string, type: TypeInfo): void {
        const vv = this.getUniqueVarName("idx");
        if (type.isArray) {
            const elementType = type.getElementType();
            const vs = this.getUniqueVarName("len");
            if (type.arrayStaticSize === 0) {
                sb.push(`const ${vs} = DeserializerPackNumber.INSTANCE.put(${inVar}).valueOf();`);
            } else {
                sb.push(`const ${vs} = ${type.arrayStaticSize};`);
            }
            if (elementType.javaType === "byte") {
                const bytesVar = this.getUniqueVarName("bytes");
                sb.push(`const ${bytesVar} = ${inVar}.readBytes(${vs});`);
                sb.push(`${outVar} = ${bytesVar};`); // Assign Uint8Array
            } else {
                sb.push(`${outVar} = new Array<${elementType.getArgumentType()}>(${vs});`);
                sb.push(`for (let ${vv} = 0; ${vv} < ${vs}; ${vv}++) {`);
                this.generateDeserializer(sb, serializeContextVar, inVar, `${outVar}[${vv}]`, elementType);
                sb.push(`}`);
            }
        } else {
            switch (type.javaType) {
                case "boolean": sb.push(`${outVar} = ${inVar}.readBoolean();`); break;
                case "byte": sb.push(`${outVar} = ${inVar}.readByte();`); break;
                case "short": sb.push(`${outVar} = ${inVar}.readShort();`); break;
                case "int": sb.push(`${outVar} = ${inVar}.readInt();`); break;
                case "long":
                    if (type.isPack) sb.push(`${outVar} = DeserializerPackNumber.INSTANCE.put(${inVar}).valueOf();`);
                    else sb.push(`${outVar} = ${inVar}.readLong();`);
                    break;
                case "float": sb.push(`${outVar} = ${inVar}.readFloat();`); break;
                case "double": sb.push(`${outVar} = ${inVar}.readDouble();`); break;
                case "Date": sb.push(`${outVar} = new Date(${inVar}.readLong());`); break;
                case "string":
                    const sdv = this.getUniqueVarName("stringBytes");
                    sb.push(`let ${sdv}: Uint8Array;`);
                    this.generateDeserializer(sb, serializeContextVar, inVar, sdv, new TypeInfo("byte[]"));
                    sb.push(`${outVar} = new TextDecoder('utf-8').decode(${sdv});`);
                    break;
                case "UUID": case "URI":
                    sb.push(`${outVar} = ${this.generateAccessMeta(type)}.deserialize(${serializeContextVar}, ${inVar});`);
                    break;
                default:
                     const className = type.getClassName();
                     sb.push(`${outVar} = ${className}.META.deserialize(${serializeContextVar}, ${inVar});`);
            }
        }
    }


    generateSerializerFields(sb: string[], serializeContextVar: string, outVar: string, allFields: Map<string, TypeInfo>): void {
        const nullableFields = new Map([...allFields].filter(([_, v]) => v.isNullable));
        const nullableCount = nullableFields.size;
        if (nullableCount > 0) {
            let writeMethod: string;
            if (nullableCount <= 8) writeMethod = "writeByte";
            else if (nullableCount <= 16) writeMethod = "writeShort";
            else if (nullableCount <= 32) writeMethod = "writeInt";
            else writeMethod = "writeLong";
            sb.push(`let _mask: number = 0;`);
            let bitIndex = 0;
            nullableFields.forEach((_, fieldName) => {
                const shift = bitIndex === 0 ? "1" : `(1 << ${bitIndex})`;
                sb.push(`if (${fieldName} === null) _mask |= ${shift};`);
                bitIndex++;
            });
            sb.push(`${outVar}.${writeMethod}(_mask);`);
            allFields.forEach((fieldType, fieldName) => {
                if (fieldType.isNullable) {
                    sb.push(`if (${fieldName} !== null) {`);
                    this.generateSerializer(sb, serializeContextVar, outVar, fieldName, fieldType);
                    sb.push(`}`);
                } else {
                    this.generateSerializer(sb, serializeContextVar, outVar, fieldName, fieldType);
                }
            });
        } else {
            allFields.forEach((fieldType, fieldName) => {
                this.generateSerializer(sb, serializeContextVar, outVar, fieldName, fieldType);
            });
        }
    }

    generateDeserializerFields(sb: string[], serializeContextVar: string, inVar: string, fieldVars: Map<string, TypeInfo>): void {
        const nullableFields = new Map([...fieldVars].filter(([_, v]) => v.isNullable));
        const nullableCount = nullableFields.size;
        if (nullableCount > 0) {
            let readMethod: string;
            if (nullableCount <= 8) readMethod = "readByte";
            else if (nullableCount <= 16) readMethod = "readShort";
            else if (nullableCount <= 32) readMethod = "readInt";
            else readMethod = "readLong";
            sb.push(`const _mask: number = ${inVar}.${readMethod}();`);
            let bitIndex = 0;
            fieldVars.forEach((fieldType, varName) => {
                if (fieldType.isNullable) {
                    const shift = bitIndex === 0 ? "1" : `(1 << ${bitIndex})`;
                    const check = `((_mask & ${shift}) === 0)`; // Check if the bit is NOT set (meaning not null)
                    sb.push(`if (${check}) {`);
                    this.generateDeserializer(sb, serializeContextVar, inVar, varName, fieldType);
                    sb.push(`} else { ${varName} = null; }`);
                    bitIndex++;
                } else {
                    this.generateDeserializer(sb, serializeContextVar, inVar, varName, fieldType);
                }
            });
        } else {
            fieldVars.forEach((fieldType, varName) => {
                this.generateDeserializer(sb, serializeContextVar, inVar, varName, fieldType);
            });
        }
    }

    declareAnonymType(nameParts: string[], typeDefinition: TypeDefinition): string {
        let generatedName: string = typeDefinition.name || typeDefinition.stream?.name || ""; // Use name from stream if available
        if (!generatedName) {
            let tempName = nameParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("");
            generatedName = tempName;
            let counter = 0;
            const processorDeclaredNames = this.declaredTypeNames;
            while (processorDeclaredNames.has(generatedName)) {
                generatedName = tempName + counter++;
            }
        }
        return generatedName;
    }
}


// =============================================================================================
// 3. TypeGenerator (Генерация классов, перечислений и Stream)
// =============================================================================================

const FAST_META_TYPE_IMPL_STUB_METHODS = `
    serializeToBytes(_obj: any): Uint8Array { throw new Error('Not implemented'); }
    deserializeFromBytes(_data: Uint8Array): any { throw new Error('Not implemented'); }
    loadFromFile(_file: string): any { throw new Error('Not implemented'); }`;

// =============================================================================================
// 3. TypeGenerator (Генерация классов, перечислений и Stream)
// =============================================================================================

const FAST_META_TYPE_IMPL_STUB_METHODS = `
    serializeToBytes(_obj: any): Uint8Array { throw new Error('Not implemented'); }
    deserializeFromBytes(_data: Uint8Array): any { throw new Error('Not implemented'); }
    loadFromFile(_file: string): any { throw new Error('Not implemented'); }`;

class TypeGenerator {
    private readonly generatorLogic: GeneratorLogic;
    constructor(generatorLogic: GeneratorLogic) { this.generatorLogic = generatorLogic; }

    generateType(name: string, defn: TypeDefinition): string {
        if (defn?.stream) return this.generateStreamClass(name, defn);
        if (defn?.enum) return this.generateEnum(name, defn.enum as string[]);
        return this.generateStructure(name, defn || {});
    }

    // --- (ИЗМЕНЕНИЕ) Методы для FIELDS (полей) ---

    private getFieldTypes(fields: { [fn: string]: any }): Map<string, TypeInfo> {
        const fieldTypes: Map<string, TypeInfo> = new Map();
        Object.entries(fields || {}).forEach(([fn, type]) => {
            if (typeof type === 'object' && type !== null) throw new Error(`Anonymous types cannot be validated this way.`);
            fieldTypes.set(fn, new TypeInfo(type as string));
        });
        return fieldTypes;
    }

    public getAllFields(cfg: TypeDefinition): Map<string, TypeInfo> {
        const res: Map<string, TypeInfo> = new Map();
        this.getAllFieldsRecursive(res, cfg);
        return res;
    }

    private getAllFieldsRecursive(res: Map<string, TypeInfo>, cfg: TypeDefinition): void {
        if (cfg?.parent) {
             const parentName = cfg.parent as string;
             const parentCfg = this.generatorLogic.findTypeDefinition(parentName);
             if (parentCfg) this.getAllFieldsRecursive(res, parentCfg);
        }
        if (cfg?.fields) this.getFieldTypes(cfg.fields).forEach((v, k) => res.set(k, v));
    }

    // --- (ИЗМЕНЕНИЕ) НОВЫЕ МЕТОДЫ для CONSTANTS (констант) ---

    /**
     * Парсит 'constants' из YAML, возвращая Map<string, ConstantInfo>
     */
    private getConstantTypes(cfgConstants: { [fn: string]: any } | undefined): Map<string, ConstantInfo> {
        const constTypes: Map<string, ConstantInfo> = new Map();
        Object.entries(cfgConstants || {}).forEach(([name, value]) => {
            constTypes.set(name, new ConstantInfo(name, value));
        });
        return constTypes;
    }

    /**
     * Рекурсивно (сверху-вниз) собирает все константы, включая родительские.
     */
    public getAllConstants(cfg: TypeDefinition): Map<string, ConstantInfo> {
        const res: Map<string, ConstantInfo> = new Map();
        this.getAllConstantsRecursive(res, cfg);
        return res;
    }

    private getAllConstantsRecursive(res: Map<string, ConstantInfo>, cfg: TypeDefinition): void {
        // 1. Сначала идем к родителю (Top-Down)
        if (cfg?.parent) {
             const parentName = cfg.parent as string;
             const parentCfg = this.generatorLogic.findTypeDefinition(parentName);
             if (parentCfg) this.getAllConstantsRecursive(res, parentCfg);
        }
        // 2. Затем применяем (переопределяем) константы текущего типа
        if (cfg?.constants) this.getConstantTypes(cfg.constants).forEach((v, k) => res.set(k, v));
    }

    /**
     * (ИЗМЕНЕНИЕ) Генерирует АБСТРАКТНЫЕ геттеры в родительском классе (Bottom-Up)
     * Ищет общие константы у всех дочерних типов.
     */
    private generateAbstractGettersForCommonConstants(sb: string[], children: string[]): void {
        if (children.length === 0) return;

        // 1. Собираем константы всех дочерних типов
        const allChildrenConstants = children.map(childName => {
            const childCfg = this.generatorLogic.findTypeDefinition(childName);
            return childCfg ? this.getAllConstants(childCfg) : new Map<string, ConstantInfo>();
        });

        if (allChildrenConstants.length === 0) return;

        // 2. Находим 'пересечение' (общие константы)
        // Начинаем с констант первого ребенка
        const commonConstants = new Map<string, ConstantInfo>(allChildrenConstants[0]);

        // 3. Исключаем те, которых нет у других, или у которых не совпадает тип
        allChildrenConstants.slice(1).forEach(childConstants => {
            // Проходим по текущему списку общих
            for (const [name, constInfo] of commonConstants.entries()) {
                const otherConst = childConstants.get(name);
                if (!otherConst || !constInfo.equals(otherConst)) {
                    // Если у ребенка нет этой константы ИЛИ тип не совпадает,
                    // удаляем ее из 'общих'.
                    commonConstants.delete(name);
                }
            }
        });

        // 4. Генерируем абстрактные геттеры для оставшихся общих констант
        commonConstants.forEach(constInfo => {
            sb.push(`\n    public abstract ${constInfo.getGetterName()}(): ${constInfo.getGetterType()};`);
        });
    }

    /**
     * (ИЗМЕНЕНИЕ) Генерирует КОНКРЕТНЫЕ геттеры для констант
     */
    private generateConstantGetters(sb: string[], constants: Map<string, ConstantInfo>, hasParent: boolean): void {
        constants.forEach(constInfo => {
            const override = hasParent ? 'override ' : ''; // Добавляем 'override', если есть родитель
            sb.push(`\n    public ${override}${constInfo.getGetterName()}(): ${constInfo.getGetterType()} {`);
            sb.push(`        return ${constInfo.getTsValue()};`);
            sb.push(`    }`);
        });
        if (constants.size > 0) sb.push(``); // Пустая строка для разделения
    }

    // --- (КОНЕЦ ИЗМЕНЕНИЙ) ---


    private generateStructure(name: string, cfg: TypeDefinition): string {
        const sb: string[] = []; const g = this.generatorLogic;
        const isAbstract = !!cfg?.abstract;
        const allFields = this.getAllFields(cfg);
        const currentFields = this.getFieldTypes(cfg?.fields);
        const parent = cfg?.parent; const extendsClause = parent ? ` extends ${parent}` : '';
        const constructorParams = Array.from(allFields.entries()).map(([fn, ti]) => `${fn}: ${ti.getArgumentType()}`).join(', ');
        const superFields = Array.from(allFields.keys()).filter(fn => !currentFields.has(fn));

        sb.push(`// --- Generated Structure: ${name} ---`);
        sb.push(`export ${isAbstract ? 'abstract class' : 'class'} ${name}${extendsClause} implements ToString {`);

        // (ИЗМЕНЕНИЕ) Логика для определения иерархии
        const typeId = g.getTypeIdInHierarchy(name);
        const rootForChildren = g.getRootTypeFor(name) || name;
        const children = g.getConcreteTypesInHierarchy(rootForChildren);
        const needsTypeIdMethod = parent || g.isInTypeHierarchy(name) || (children.length > 0 && name !== "Message");

        // (ИЗМЕНЕНИЕ) Генерируем АБСТРАКТНЫЕ геттеры для констант (Bottom-Up)
        if (isAbstract) {
            // (Аналог Groovy: generateAbstractGettersForCommonFields)
            // Мы пока не знаем, какие поля общие, но для констант - можем
            this.generateAbstractGettersForCommonConstants(sb, children);
        }

        // --- Генерируем ПОЛЯ (Fields) ---
        currentFields.forEach((typeInfo, fieldName) => sb.push(`    public readonly ${fieldName}: ${typeInfo.getFieldType()};`));

        // (ИЗМЕНЕНИЕ) Генерируем КОНКРЕТНЫЕ геттеры для КОНСТАНТ
        const currentConstants = this.getConstantTypes(cfg?.constants);
        this.generateConstantGetters(sb, currentConstants, !!parent);

        // --- Генерируем getAetherTypeId ---
        if (needsTypeIdMethod) {
            if (parent || g.isInTypeHierarchy(name)) {
                sb.push(`    public ${parent ? 'override ' : ''}getAetherTypeId(): number {`);
                if (typeId !== undefined) sb.push(`        return ${typeId};`);
                else sb.push(`        return -1; ${isAbstract ? '// Abstract type without ID' : '// Type not in hierarchy ID map'}`);
                sb.push(`    }`);
            } else if (children.length > 0 && name !== "Message") {
                if (isAbstract) sb.push(`    public abstract getAetherTypeId(): number;`);
                else sb.push(`    public getAetherTypeId(): number { return 0; }`);
            }
        }

        // --- Генерируем META ---
        if (!isAbstract) this.generateMeta(sb, name, 'META_BODY', true, allFields);

         const hierarchyHasIds = (rootForChildren && g.getTypeIdInHierarchy(rootForChildren) !== undefined) || children.some(c => g.getTypeIdInHierarchy(c) !== undefined);
         const needsMeta = isAbstract || hierarchyHasIds || (typeId !== undefined && typeId >= 0);

        if (needsMeta) {
             this.generateMeta(sb, name, 'META', false, allFields, isAbstract, children);
        } else if (!isAbstract) {
             sb.push(`\n    public static readonly META: FastMetaType<${name}> = ${name}.META_BODY;`);
        } else {
             this.generateMeta(sb, name, 'META', false, allFields, isAbstract, children);
        }

        // --- Генерируем Конструктор ---
        sb.push(`\n    constructor(${constructorParams}) {`);
        if (superFields.length > 0) sb.push(`        super(${superFields.join(', ')});`);
        else if (parent) sb.push(`        super();`);
        currentFields.forEach((_, fieldName) => sb.push(`        this.${fieldName} = ${fieldName};`));
        allFields.forEach((typeInfo, fieldName) => {
            if (!typeInfo.isNullable && (!typeInfo.isPrimitive() || typeInfo.isArray)) {
                sb.push(`        if (${fieldName} === null || ${fieldName} === undefined) throw new Error(\`Field '${fieldName}' cannot be null for type ${name}.\`);`);
            }
            if (typeInfo.isArray && typeInfo.arrayStaticSize > 0) {
                const lenCheck = `${fieldName}.length !== ${typeInfo.arrayStaticSize}`;
                const condition = typeInfo.isNullable ? `${fieldName} !== null && ${fieldName} !== undefined && ${lenCheck}` : lenCheck;
                sb.push(`        if (${condition}) throw new Error(\`Array length for field '${fieldName}' in type ${name} must be ${typeInfo.arrayStaticSize} but was \${${fieldName} ? ${fieldName}.length : 'null/undefined'}.\`);`);
            }
        });
        sb.push(`    }\n`);

        // --- Генерируем Геттеры для ПОЛЕЙ ---
        this.generateFieldGetters(sb, allFields);

        // --- Генерируем toString ---
        sb.push(`    public toString(result: AString): void {`);
        const simpleClassName = name.replace(/.*\./, '');
        sb.push(`        result.addStringSequence('${simpleClassName}(');`);
        let isFirstField = true;
        allFields.forEach((_, fieldName) => {
            if (!isFirstField) sb.push(`        result.addStringSequence(', ');`);
            sb.push(`        result.addStringSequence('${fieldName}:').add(this.${fieldName});`);
            isFirstField = false;
        });

        // (ИЗМЕНЕНИЕ) Добавляем константы в toString
        const allConstants = this.getAllConstants(cfg);
        allConstants.forEach((constInfo, constName) => {
            if (!isFirstField) sb.push(`        result.addStringSequence(', ');`);
            // Вызываем геттер, чтобы получить значение
            sb.push(`        result.addStringSequence('${constName}:').add(this.${constInfo.getGetterName()}());`);
            isFirstField = false;
        });

        sb.push(`        result.addChar(')');`);
        sb.push(`    }`);
        sb.push(`}\n`);
        return sb.join('\n');
    }

    private generateMeta(sb: string[], name: string, fieldName: string, isMetaBody: boolean, fields: Map<string, TypeInfo>, isAbstract: boolean = false, children: string[] = []): void {
        // ... (Код generateMeta БЕЗ ИЗМЕНЕНИЙ, т.к. константы не сериализуются) ...
        const g = this.generatorLogic;
        const useSCtxSerialize = !(isMetaBody && fields.size === 0) && (isMetaBody || children.length > 0);
        const useSCtxDeserialize = !(isMetaBody && fields.size === 0) && (isMetaBody || children.length > 0);
        const sCtx = useSCtxSerialize ? g.getUniqueVarName('sCtx') : g.getUniqueVarName('_sCtx');
        const sCtxDeser = useSCtxDeserialize ? (useSCtxSerialize ? sCtx : g.getUniqueVarName('sCtx')) : g.getUniqueVarName('_sCtx');
        const objVar = g.getUniqueVarName('obj');
        const outVar = g.getUniqueVarName('out'); const inVar = g.getUniqueVarName('in_');

        sb.push(`\n    public static readonly ${fieldName}: FastMetaType<${name}> = new class implements FastMetaType<${name}> {`);

        sb.push(`        serialize(${sCtx}: FastFutureContext, ${objVar}: ${name}, ${outVar}: DataOut): void {`);
        if (isMetaBody) {
            const serializeLines: string[] = [];
            const fieldsForSerialize = new Map(Array.from(fields.entries()).map(([k, v]) => [`${objVar}.${k}`, v]));
            g.generateSerializerFields(serializeLines, sCtx, outVar, fieldsForSerialize);
            sb.push(serializeLines.map(l => `            ${l}`).join('\n'));
        } else {
            const rootType = g.getRootTypeFor(name);
            const actualChildren = g.getConcreteTypesInHierarchy(rootType || name);
            const needsDispatch = isAbstract || (g.isInTypeHierarchy(name) && actualChildren.length > 0 && name !== "Message");

            if (needsDispatch) {
                sb.push(`            const typeId = typeof (${objVar} as any).getAetherTypeId === 'function' ? ${objVar}.getAetherTypeId() : -1;`);
                sb.push(`            if (typeId === undefined || typeId < 0) throw new Error(\`Cannot serialize '${name}' with invalid type id \${typeId}\`);`);
                sb.push(`            ${outVar}.writeByte(typeId);`);
                sb.push(`            switch(typeId) {`);
                if (!isAbstract) {
                     const selfId = g.getTypeIdInHierarchy(name);
                     if (selfId !== undefined && selfId >= 0) {
                         sb.push(`                case ${selfId}: (${name} as any).META_BODY.serialize(${sCtx}, ${objVar} as any as ${name}, ${outVar}); break;`);
                     }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (typeId !== undefined && (isAbstract || childName !== name)) {
                        sb.push(`                case ${typeId}: (${childName} as any).META_BODY.serialize(${sCtx}, ${objVar} as any as ${childName}, ${outVar}); break;`);
                    }
                });
                sb.push(`                default: throw new Error(\`Cannot serialize '${name}' with unknown type id \${typeId}\`);`);
                sb.push(`            }`);
            } else {
                 if (!isAbstract) sb.push(`            (${name} as any).META_BODY.serialize(${sCtx}, ${objVar}, ${outVar});`);
                 else sb.push(`            throw new Error(\`Cannot serialize abstract type '${name}' without children or dispatch logic.\`);`);
            }
        }
        sb.push(`        }`); // End serialize

        sb.push(`        deserialize(${sCtxDeser}: FastFutureContext, ${inVar}: DataIn): ${name} {`);
        if (isMetaBody) {
            const deserializeLines: string[] = [];
            const fieldsForDeserialize = new Map<string, TypeInfo>();
            const constructorParams: string[] = [];
            fields.forEach((typeInfo, fieldName) => {
                const localVar = g.getUniqueVarName(fieldName);
                deserializeLines.push(`let ${localVar}: ${typeInfo.getLocalVarType()};`);
                fieldsForDeserialize.set(localVar, typeInfo);
                constructorParams.push(localVar);
            });
            g.generateDeserializerFields(deserializeLines, sCtxDeser, inVar, fieldsForDeserialize);
            sb.push(deserializeLines.map(l => `            ${l}`).join('\n'));
            sb.push(`            return new ${name}(${constructorParams.join(', ')});`);
        } else {
            const rootType = g.getRootTypeFor(name);
            const actualChildren = g.getConcreteTypesInHierarchy(rootType || name);
            const needsDispatch = isAbstract || (g.isInTypeHierarchy(name) && actualChildren.length > 0 && name !== "Message");
            if (needsDispatch) {
                sb.push(`            const typeId = ${inVar}.readUByte();`);
                sb.push(`            switch(typeId) {`);
                if (!isAbstract) {
                     const selfId = g.getTypeIdInHierarchy(name);
                     if (selfId !== undefined && selfId >= 0) {
                         sb.push(`                case ${selfId}: return (${name} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar}) as any as ${name};`);
                     }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                     if (typeId !== undefined && (isAbstract || childName !== name)) {
                         sb.push(`                case ${typeId}: return (${childName} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar}) as any as ${name};`);
                     }
                });
                sb.push(`                default: throw new Error(\`Bad type id \${typeId} for type '${name}'\`);`);
                sb.push(`            }`);
            } else {
                 if (!isAbstract) sb.push(`            return (${name} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar});`);
                 else sb.push(`            throw new Error(\`Cannot deserialize abstract type '${name}' without children or dispatch logic.\`);`);
            }
        }
        sb.push(`        }`); // End deserialize
        sb.push(FAST_META_TYPE_IMPL_STUB_METHODS);
        sb.push(`    }();`); // End anonymous class
    }


    private generateEnum(name: string, values: string[]): string {
        // ... (Код generateEnum БЕЗ ИЗМЕНЕНИЙ) ...
        const sb: string[] = [];
        sb.push(`// --- Generated Enum: ${name} ---`);
        sb.push(`export enum ${name} { ${values.map(v => `${v} = '${v}'`).join(', ')} }\n`);
        sb.push(`export namespace ${name} {`);
        sb.push(`    export const META: FastMetaType<${name}> = new class implements FastMetaType<${name}> {`);
        sb.push(`        serialize(_sCtx: FastFutureContext, obj: ${name}, out: DataOut): void {`);
        sb.push(`            const values = Object.keys(${name}).filter(k => isNaN(parseInt(k)));`);
        sb.push(`            out.writeByte(values.indexOf(obj as string));`);
        sb.push(`        }`);
        sb.push(`        deserialize(_sCtx: FastFutureContext, in_: DataIn): ${name} {`);
        sb.push(`            const ordinal = in_.readUByte();`);
        sb.push(`            const keys = Object.keys(${name}).filter(k => isNaN(parseInt(k)));`);
        sb.push(`            if (ordinal < 0 || ordinal >= keys.length) throw new Error(\`Invalid ordinal \${ordinal} for enum ${name}\`);`);
        sb.push(`            return ${name}[keys[ordinal] as keyof typeof ${name}] as ${name};`);
        sb.push(`        }`);
        sb.push(FAST_META_TYPE_IMPL_STUB_METHODS);
        sb.push(`    }();`); // End anonymous class
        sb.push(`}\n`);
        return sb.join('\n');
    }

    private generateStreamClass(name: string, cfg: TypeDefinition): string {
        // ... (Код generateStreamClass БЕЗ ИЗМЕНЕНИЙ) ...
        const sb: string[] = [];
        const hasApi = cfg.stream?.api as string;
        const apiType = hasApi;
        const hasCrypto = !!cfg.stream?.crypto;
        const apiRemoteType = hasApi ? `${apiType}Remote` : 'unknown';

        sb.push(`// --- Generated Stream: ${name} ---`);
        sb.push(`export class ${name} implements ToString {`);
        sb.push(`    public readonly data: Uint8Array;`);

        sb.push(`    constructor(data: Uint8Array) { this.data = data; }\n`);

        sb.push(`    public static readonly META: FastMetaType<${name}> = new class implements FastMetaType<${name}> {`);
        sb.push(`        serialize(ctx: FastFutureContext, obj: ${name}, out: DataOut): void { FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out); }`);
        sb.push(`        deserialize(ctx: FastFutureContext, in_: DataIn): ${name} { return new ${name}(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_)); }`);
        sb.push(FAST_META_TYPE_IMPL_STUB_METHODS);
        sb.push(`    }();\n`);

        sb.push(`    public toString(result: AString): void { result.addStringSequence('${name}(').addStringSequence('data:').add(this.data).addChar(')'); }`);

        if (hasApi && hasCrypto) {
            sb.push(`\n    public accept(context: FastFutureContext, provider: BytesConverter, localApi: ${apiType}): void {`);
            sb.push(`        const decryptedData = provider(this.data);`);
            sb.push(`        const dataInStatic = new DataInOutStatic(decryptedData);`);
            sb.push(`        if (!(${apiType} as any).META) throw new Error(\`META not found for API type ${apiType}\`);`);
            sb.push(`        (${apiType} as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);`);
            sb.push(`    }`);
        } else if (hasApi) {
            sb.push(`\n    public accept(context: FastFutureContext, localApi: ${apiType}): void {`);
            sb.push(`        const dataInStatic = new DataInOutStatic(this.data);`);
            sb.push(`        if (!(${apiType} as any).META) throw new Error(\`META not found for API type ${apiType}\`);`);
            sb.push(`        (${apiType} as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);`);
            sb.push(`    }`);
        } else if (hasCrypto) {
            sb.push(`\n    public accept(provider: BytesConverter, dataConsumer: AConsumer<Uint8Array>): void {`);
            sb.push(`        const decryptedData = provider(this.data);`);
            sb.push(`        dataConsumer(decryptedData);`);
            sb.push(`    }`);
        }

        if (hasApi && hasCrypto) {
            sb.push(`\n    public static fromRemote(context: FastFutureContext, provider: BytesConverter, remote: RemoteApiFuture<${apiRemoteType}>, sendFuture: AFuture): ${name} {`);
            sb.push(`        remote.executeAll(context, sendFuture);`);
            sb.push(`        const encryptedData = provider(context.remoteDataToArrayAsArray());`);
            sb.push(`        return new ${name}(encryptedData);`);
            sb.push(`    }`);
            sb.push(`\n    public static fromRemoteConsumer(context: FastFutureContext, provider: BytesConverter, remoteConsumer: AConsumer<${apiRemoteType}>): ${name} {`);
            sb.push(`        const api = (${apiType} as any).META.makeRemote(context);`);
            sb.push(`        remoteConsumer(api);`);
            sb.push(`        const encryptedData = provider(context.remoteDataToArrayAsArray());`);
            sb.push(`        return new ${name}(encryptedData);`);
            sb.push(`    }`);
            sb.push(`\n    public static fromRemoteBytes(provider: BytesConverter, remoteData: Uint8Array): ${name} {`);
            sb.push(`        const encryptedData = provider(remoteData);`);
            sb.push(`        return new ${name}(encryptedData);`);
            sb.push(`    }`);
        } else if (hasApi) {
            sb.push(`\n    public static fromRemote(context: FastFutureContext, remote: RemoteApiFuture<${apiRemoteType}>, sendFuture: AFuture): ${name} {`);
            sb.push(`        remote.executeAll(context, sendFuture);`);
            sb.push(`        return new ${name}(context.remoteDataToArrayAsArray());`);
            sb.push(`    }`);
            sb.push(`\n    public static fromRemoteConsumer(context: FastFutureContext, remoteConsumer: AConsumer<${apiRemoteType}>): ${name} {`);
            sb.push(`        const api = (${apiType} as any).META.makeRemote(context);`);
            sb.push(`        remoteConsumer(api);`);
            sb.push(`        return new ${name}(context.remoteDataToArrayAsArray());`);
            sb.push(`    }`);
        } else if (hasCrypto) {
            sb.push(`\n    public static fromBytes(provider: BytesConverter, data: Uint8Array): ${name} {`);
            sb.push(`        const encryptedData = provider(data);`);
            sb.push(`        return new ${name}(encryptedData);`);
            sb.push(`    }`);
        }

        sb.push(`}\n`);
        return sb.join('\n');
    }

    /**
     * (ИЗМЕНЕНИЕ) Переименован в generateFieldGetters, чтобы отличать от
     * generateConstantGetters
     */
    private generateFieldGetters(sb: string[], fields: Map<string, TypeInfo>): void {
        fields.forEach((typeInfo, fieldName) => {
            const isBoolean = typeInfo.javaType === 'boolean' && !typeInfo.isArray && !typeInfo.isNullable;
            const prefix = isBoolean ? 'is' : 'get';
            const capitalName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

            sb.push(`\n    public ${prefix}${capitalName}(): ${typeInfo.getGetterType()} {`);
            sb.push(`        return this.${fieldName};`);
            sb.push(`    }`);

            if (typeInfo.isArray) {
                const elType = typeInfo.getElementType().getArgumentType();
                const arrayType = (typeInfo.javaType === 'byte') ? `Uint8Array` : `${elType}[]`;
                const elTypeForCheck = (typeInfo.javaType === 'byte') ? `number` : elType;

                sb.push(`\n    public ${fieldName}Contains(el: ${elTypeForCheck}): boolean {`);
                sb.push(`        return (this.${fieldName} as ${arrayType}).includes(el as any);`);
                sb.push(`    }`);
            }
        });
        sb.push(``); // Add a newline at the end
    }
}



// =============================================================================================
// 4. ApiGenerator (Генерация API-интерфейсов и заглушек) - БЕЗ ИЗМЕНЕНИЙ (логирование добавлено ранее)
// =============================================================================================
// ... (код ApiGenerator остается прежним, хуки логирования уже добавлены) ...
class ApiGenerator {
    private readonly generatorLogic: GeneratorLogic;
    constructor(generatorLogic: GeneratorLogic) { this.generatorLogic = generatorLogic; }

    generateApi(apiName: string, apiDef: TypeDefinition): { [key: string]: string } {
        const methods = this.getAllMethods(apiName, apiDef);
        let apiCode = this.generateApiInterface(apiName, apiDef, methods);
        apiCode += '\n\n' + this.generateApiRemote(apiName, apiDef);
        apiCode += '\n\n' + this.generateApiLocal(apiName, apiDef);
        return { [apiName]: apiCode };
    }

    private getAllMethods(apiName: string, apiDef: TypeDefinition): Map<string, any> {
        const methods: Map<string, any> = new Map(); const methodList: any[] = [];
        this.getAllMethodsRecursive(methodList, false, apiName, apiDef);
        methodList.forEach((m, index) => {
             const yamlMethodDef = ((apiDef?.methods || {}) as any)[m.name] || {};
             m.id = yamlMethodDef.id !== undefined ? yamlMethodDef.id : (index + 3);
             methods.set(m.name, m);
        });
        return methods;
    }

    private getAllMethodsRecursive(res: any[], parent: boolean, apiName: string, apiDef: TypeDefinition | undefined): void {
         if (!apiDef) return;
         (apiDef.parents as string[])?.forEach(p => {
             const parentApiDef = this.generatorLogic.allTypes.get(p);
             if (!parentApiDef) throw new Error(`Parent API '${p}' not found for API '${apiName}'.`);
             this.getAllMethodsRecursive(res, true, p, parentApiDef);
         });
         Object.entries(apiDef.methods || {}).forEach(([methodName, m]) => {
            const methodDef: any = { id: 0, name: methodName, params: {}, returns: 'void', throws: null, parent: parent };
            const mDef = m as TypeDefinition;
             if (!mDef) return;

            if (mDef.params) {
                Object.entries(mDef.params).forEach(([paramName, paramType]) => {
                     if (typeof paramType === 'object' && paramType !== null && !(paramType as any).stream) { // Allow stream objects
                         throw new Error(`[ApiGenerator] Unexpected anonymous type object in method ${methodName}. The pre-pass should have replaced it with a name.`);
                     }
                    methodDef.params[paramName] = paramType as string | TypeDefinition; // Allow TypeDefinition for streams
                });
            }
            if (mDef.returns) {
                 if (typeof mDef.returns === 'object' && mDef.returns !== null && !(mDef.returns as any).stream ) { // Allow stream objects
                     throw new Error(`[ApiGenerator] Unexpected anonymous type object in method ${methodName} returns. The pre-pass should have replaced it with a name.`);
                 }
                methodDef.returns = mDef.returns as string | TypeDefinition; // Allow TypeDefinition for streams
            }
            if (mDef.throws) {
                 if (typeof mDef.throws === 'object' && mDef.throws !== null && !(mDef.throws as any).stream ) { // Allow stream objects
                      throw new Error(`[ApiGenerator] Unexpected anonymous type object in method ${methodName} throws. The pre-pass should have replaced it with a name.`);
                 }
                 methodDef.throws = mDef.throws as string | TypeDefinition; // Allow TypeDefinition for streams
            }
            if (!res.some(it => it.name == methodName)) res.push(methodDef);
         });
    }


    private generateApiInterface(apiName: string, apiDef: TypeDefinition, methods: Map<string, any>): string {
        const sb: string[] = []; const parents = (apiDef?.parents || []) as string[];
        const extendsClause = parents.length > 0 ? ` extends ${parents.join(', ')}` : '';
        sb.push(`// --- Generated API Interface: ${apiName} ---`);
        sb.push(`export interface ${apiName}${extendsClause} {`);
        methods.forEach(m => {
            if (m.parent) return;
            // Handle cases where param or return type might be an object (stream definition)
            const paramTypes = Object.entries(m.params).map(([pn, pt]) => {
                const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                    ? (pt as TypeDefinition).stream!.name!
                    : pt as string;
                return `${pn}: ${new TypeInfo(typeStr).getArgumentType()}`;
            }).join(', ');

             const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
                 ? (m.returns as TypeDefinition).stream!.name!
                 : m.returns as string;
            const returnTypeInfo = new TypeInfo(returnTypeStr);

            const returns = returnTypeInfo.getAsReturnType();
            const finalReturns = (returnTypeInfo.javaType === 'void') && !m.throws ? 'AFuture' : returns;
            sb.push(`    ${m.name}(${paramTypes}): ${finalReturns};`);
        });
        sb.push(`}`);
        sb.push(`export namespace ${apiName} {`);
        // --- FIX: Use anonymous class syntax and implement all methods ---
        sb.push(`    export const META: FastMetaApi<${apiName}, ${apiName}Remote> = new class implements FastMetaApi<${apiName}, ${apiName}Remote> {`);
        this.generateMetaMakeLocal_fromDataIn(sb, apiName, methods);
        this.generateMetaMakeLocal_fromBytes_ctxLocal(sb, apiName);
        this.generateMetaMakeLocal_fromBytes_ctx(sb, apiName);
        this.generateMetaMakeRemote(sb, apiName, methods);
        sb.push(`    }();`); // End anonymous class
        sb.push(`}`);
        return sb.join('\n');
    }

    private generateApiRemote(apiName: string, apiDef: TypeDefinition): string {
        const parents = (apiDef?.parents || []) as string[];
        const extendsParents = parents.map(p => `${p}Remote`).join(', ');
        const extendsClause = parents.length > 0 ? `, ${extendsParents}` : '';
        return `// --- Generated API Remote Interface: ${apiName}Remote ---\nexport interface ${apiName}Remote extends ${apiName}, RemoteApi${extendsClause} {}`;
    }

    private generateApiLocal(apiName: string, apiDef: TypeDefinition): string {
        const sb: string[] = []; const remoteType = `${apiName}Remote`;
        sb.push(`// --- Generated API Local Class: ${apiName}Local ---`);
        sb.push(`export abstract class ${apiName}Local<RT extends ${remoteType}> implements ${apiName} {`);
        sb.push(`    protected readonly remoteApi: RT;`);
        sb.push(`    public getRemoteApi(): RT { return this.remoteApi; }`);
        sb.push(`    protected constructor(remoteApi: RT) { this.remoteApi = remoteApi; }`);
        const methods = this.getAllMethods(apiName, apiDef);
        methods.forEach(m => {
            // Handle cases where param or return type might be an object (stream definition)
             const paramTypes = Object.entries(m.params).map(([pn, pt]) => {
                const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                    ? (pt as TypeDefinition).stream!.name!
                    : pt as string;
                return `${pn}: ${new TypeInfo(typeStr).getArgumentType()}`;
            }).join(', ');

             const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
                 ? (m.returns as TypeDefinition).stream!.name!
                 : m.returns as string;
            const returnTypeInfo = new TypeInfo(returnTypeStr);

            const returns = returnTypeInfo.getAsReturnType();
            const finalReturns = (returnTypeInfo.javaType === 'void') && !m.throws ? 'AFuture' : returns;
            sb.push(`    public abstract ${m.name}(${paramTypes}): ${finalReturns};`);
        });
        sb.push(`}`);
        return sb.join('\n');
    }

    // --- FIX: Renamed from generateMetaMakeLocal and uses standard params ---
    private generateMetaMakeLocal_fromDataIn(sb: string[], apiName: string, methods: Map<string, any>): void {
        const g = this.generatorLogic;
        const localApiVar = methods.size > 0 ? 'localApi' : '_localApi';
        sb.push(`        makeLocal_fromDataIn(ctx: FastFutureContext, dataIn: DataIn, ${localApiVar}: ${apiName}): void {`);
        sb.push(`            while(dataIn.isReadable()) { const commandId = dataIn.readUByte(); switch(commandId) {`);
        sb.push(`                    case 0: { const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn); const futureRec = ctx.getFuture(reqId); if (futureRec) futureRec.onDone(dataIn); break; }`);
        sb.push(`                    case 1: { const reqId = FastMeta.META_REQUEST_ID.deserialize(ctx, dataIn); const futureRec = ctx.getFuture(reqId); if (futureRec) futureRec.onError(dataIn); break; }`);
        methods.forEach(m => {
             // Handle cases where return or throws type might be an object (stream definition)
             const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
                 ? (m.returns as TypeDefinition).stream!.name!
                 : m.returns as string;
            const returnTypeInfo = new TypeInfo(returnTypeStr);

            const throwsTypeStr = (typeof m.throws === 'object' && m.throws !== null && (m.throws as TypeDefinition).stream?.name)
                 ? (m.throws as TypeDefinition).stream!.name!
                 : m.throws as string;


            const hasResponse = returnTypeInfo.javaType !== 'void' || !!throwsTypeStr;
            const reqIdVar = g.getUniqueVarName('reqId'); const paramVars: string[] = [];
            const fieldsForDeserialize = new Map<string, TypeInfo>();
            sb.push(`                case ${m.id}: {`);
            if (hasResponse) sb.push(`                    const ${reqIdVar} = dataIn.readInt();`);

            // --- ADDED: Logic for logging hooks ---
            const paramNames: string[] = [];
            Object.entries(m.params).forEach(([paramName, paramType]) => {
                 const typeStr = (typeof paramType === 'object' && paramType !== null && (paramType as TypeDefinition).stream?.name)
                    ? (paramType as TypeDefinition).stream!.name!
                    : paramType as string;
                const typeInfo = new TypeInfo(typeStr);
                const localVar = g.getUniqueVarName(paramName);
                sb.push(`                    let ${localVar}: ${typeInfo.getLocalVarType()};`);
                fieldsForDeserialize.set(localVar, typeInfo);
                paramVars.push(localVar);
                paramNames.push(paramName); // Store original param name
            });

            g.generateDeserializerFields(sb, 'ctx', 'dataIn', fieldsForDeserialize);

            const argsNamesVar = g.getUniqueVarName("argsNames");
            const argsValuesVar = g.getUniqueVarName("argsValues");
            sb.push(`                    const ${argsNamesVar}: string[] = [${paramNames.map(n => `"${n}"`).join(', ')}];`);
            sb.push(`                    const ${argsValuesVar}: any[] = [${paramVars.join(', ')}];`);
            sb.push(`                    ctx.invokeLocalMethodBefore("${m.name}", ${argsNamesVar}, ${argsValuesVar});`);
            // --- END ADDED ---

            const call = `${localApiVar}.${m.name}(${paramVars.join(', ')})`;
            if (throwsTypeStr) sb.push(`                    try {`);
            if (hasResponse) {
                sb.push(`                        ctx.regLocalFuture(); const resultFuture = ${call};`);
                sb.push(`                        ctx.invokeLocalMethodAfter("${m.name}", resultFuture, ${argsNamesVar}, ${argsValuesVar});`); // Log after call
                if (returnTypeInfo.javaType !== 'void') {
                    const rt = returnTypeInfo; const d = g.getUniqueVarName("data"); const rr = g.getUniqueVarName("v");
                    sb.push(`                        resultFuture.to((${rr}: ${rt.getArgumentType()}) => { const ${d} = new DataInOut();`);
                    g.generateSerializer(sb, 'ctx', d, rr, rt);
                    sb.push(`                            ctx.sendResultToRemote(${reqIdVar}, ${d}.toArray()); });`);
                } else {
                    sb.push(`                        resultFuture.to(() => { ctx.sendResultToRemoteNoData(${reqIdVar}); });`);
                }
            } else {
                 sb.push(`                        ${call};`);
                 sb.push(`                        ctx.invokeLocalMethodAfter("${m.name}", null, ${argsNamesVar}, ${argsValuesVar});`); // Log after call
            }
             if (throwsTypeStr) {
                 const et = new TypeInfo(throwsTypeStr as string); const d = g.getUniqueVarName("data");
                 sb.push(`                    } catch (e: any) {`);
                 sb.push(`                        ctx.invokeLocalMethodAfter("${m.name}", null, ${argsNamesVar}, ${argsValuesVar});`); // Log error
                 sb.push(`                        const ${d} = new DataInOut();`);
                 sb.push(`                        FastMeta.META_COMMAND.serialize(ctx, 1, ${d}); FastMeta.META_REQUEST_ID.serialize(ctx, ${reqIdVar}, ${d});`);
                 sb.push(`                        ${g.generateAccessMeta(et)}.serialize(ctx, e as ${et.getArgumentType()}, ${d}); ctx.sendToRemote(${d}.toArray()); }`);
            }
            sb.push(`                    break; }`);
        });
        sb.push(`                default: throw new Error(\`Unknown command ID: \${commandId}\`);`);
        sb.push(`            }}`);
        sb.push(`        }`); // End makeLocal_fromDataIn method
    }

    // --- FIX: Add implementation for makeLocal_fromBytes_ctxLocal ---
    private generateMetaMakeLocal_fromBytes_ctxLocal(sb: string[], apiName: string): void {
        sb.push(`        makeLocal_fromBytes_ctxLocal(ctx: FastApiContextLocal<${apiName}>, data: Uint8Array): void {`);
        sb.push(`            this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), ctx.localApi);`);
        sb.push(`        }`);
    }

    // --- FIX: Add implementation for makeLocal_fromBytes_ctx ---
    private generateMetaMakeLocal_fromBytes_ctx(sb: string[], apiName: string): void {
        sb.push(`        makeLocal_fromBytes_ctx(ctx: FastFutureContext, data: Uint8Array, localApi: ${apiName}): void {`);
        sb.push(`            this.makeLocal_fromDataIn(ctx, new DataInOutStatic(data), localApi);`);
        sb.push(`        }`);
    }


    private generateMetaMakeRemote(sb: string[], apiName: string, methods: Map<string, any>): void {
        const g = this.generatorLogic; const sCtx = g.getUniqueVarName('sCtx');
        // Method definition within the anonymous class
        sb.push(`        makeRemote(${sCtx}: FastFutureContext): ${apiName}Remote {`);
        sb.push(`            const remoteApiImpl = {`);
        sb.push(`                flush: (sendFuture?: AFuture) => { ${sCtx}.flush(sendFuture || AFuture.make()); },`);
        sb.push(`                getFastMetaContext: () => ${sCtx},`);
        methods.forEach(m => {
            // Handle cases where return or throws type might be an object (stream definition)
             const returnTypeStr = (typeof m.returns === 'object' && m.returns !== null && (m.returns as TypeDefinition).stream?.name)
                 ? (m.returns as TypeDefinition).stream!.name!
                 : m.returns as string;
            const returnTypeInfo = new TypeInfo(returnTypeStr);

            const throwsTypeStr = (typeof m.throws === 'object' && m.throws !== null && (m.throws as TypeDefinition).stream?.name)
                 ? (m.throws as TypeDefinition).stream!.name!
                 : m.throws as string;


            const hasResponse = returnTypeInfo.javaType !== 'void' || !!throwsTypeStr;

            const paramTypes = Object.entries(m.params).map(([pn, pt]) => {
                const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                    ? (pt as TypeDefinition).stream!.name!
                    : pt as string;
                return `${pn}: ${new TypeInfo(typeStr).getArgumentType()}`;
            }).join(', ');

            const returns = returnTypeInfo.getAsReturnType();
            const finalReturns = (returnTypeInfo.javaType === 'void') && !throwsTypeStr ? 'AFuture' : returns;
            const paramNames = Object.keys(m.params); const reqIdVar = g.getUniqueVarName('reqId');
            const dataOutVar = g.getUniqueVarName('dataOut'); const resultVar = g.getUniqueVarName('result');
            sb.push(`                ${m.name}: (${paramTypes}): ${finalReturns} => {`);
            sb.push(`                    const ${dataOutVar} = new DataInOut(); ${dataOutVar}.writeByte(${m.id});`);

            // --- ADDED: Logic for logging hooks ---
            const argsNamesVar = g.getUniqueVarName("argsNames");
            const argsValuesVar = g.getUniqueVarName("argsValues");
            sb.push(`                    const ${argsNamesVar}: string[] = [${paramNames.map(n => `"${n}"`).join(', ')}];`);
            sb.push(`                    const ${argsValuesVar}: any[] = [${paramNames.join(', ')}];`);
            // --- END ADDED ---

            if (hasResponse) {
                sb.push(`                    const ${resultVar} = ${returnTypeInfo.getInitFuture()};`);
                sb.push(`                    ${sCtx}.invokeRemoteMethodAfter("${m.name}", ${resultVar}, ${argsNamesVar}, ${argsValuesVar});`); // Log before send
                sb.push(`                    const ${reqIdVar} = ${sCtx}.regFuture({`);
                sb.push(`                        onDone: (in_: DataIn) => {`);
                if (returnTypeInfo.javaType !== 'void') {
                    const rt = returnTypeInfo;
                    sb.push(`                            (${resultVar} as ARFuture<${rt.getArgumentType()}>).tryDone(${g.generateAccessMeta(rt)}.deserialize(${sCtx}, in_));`);
                } else {
                    sb.push(`                            (${resultVar} as AFuture).tryDone();`);
                }
                sb.push(`                        },`);
                const onErrorInParam = throwsTypeStr ? 'in_' : '_in_';
                sb.push(`                        onError: (${onErrorInParam}: DataIn) => {`);
                if (throwsTypeStr) {
                    const et = new TypeInfo(throwsTypeStr as string);
                    sb.push(`                            const errorObj: ${et.getArgumentType()} = ${g.generateAccessMeta(et)}.deserialize(${sCtx}, ${onErrorInParam}); ${resultVar}.error(errorObj as Error);`);
                } else {
                    sb.push(`                            ${resultVar}.error(new Error("Remote call failed without a typed exception"));`);
                }
                sb.push(`                        }`);
                sb.push(`                    }); ${dataOutVar}.writeInt(${reqIdVar});`);
            } else {
                sb.push(`                    ${sCtx}.invokeRemoteMethodAfter("${m.name}", null, ${argsNamesVar}, ${argsValuesVar});`); // Log before send
            }
            const fieldsForSerialize = new Map(paramNames.map(pn => {
                 const pt = (m.params as any)[pn];
                 const typeStr = (typeof pt === 'object' && pt !== null && (pt as TypeDefinition).stream?.name)
                    ? (pt as TypeDefinition).stream!.name!
                    : pt as string;
                return [pn, new TypeInfo(typeStr)];
            }));
            g.generateSerializerFields(sb, sCtx, dataOutVar, fieldsForSerialize);
            sb.push(`                    ${sCtx}.sendToRemote(${dataOutVar}.toArray());`);
            sb.push(`                    return ${hasResponse ? resultVar : 'AFuture.of()'};`);
            sb.push(`                },`);
        });
        sb.push(`            };`);
        sb.push(`            return remoteApiImpl as ${apiName}Remote;`);
        sb.push(`        }`); // End makeRemote method
    }
}


// =============================================================================================
// 5. Main Generator Logic (AetherDslMetaProcessor) - БЕЗ ИЗМЕНЕНИЙ
// =============================================================================================
// ... (код AetherDslMetaProcessor остается прежним) ...
export class AetherDslMetaProcessor {
    private readonly generatorLogic: GeneratorLogic;
    private readonly apiGenerator: ApiGenerator;
    private readonly typeGenerator: TypeGenerator;
    private readonly globalProtocolData: AetherDslMetaMap;
    private generatedCode: string = '';
    private generatedTypes: Set<string> = new Set();
    private generatedApis: Set<string> = new Set();

    constructor(globalProtocolData: AetherDslMetaMap, baseName: string, initialDslMeta: AetherDslMeta) {
        this.globalProtocolData = globalProtocolData;
        this.generatorLogic = new GeneratorLogic(globalProtocolData, baseName, initialDslMeta);
        this.typeGenerator = new TypeGenerator(this.generatorLogic);
        this.apiGenerator = new ApiGenerator(this.generatorLogic);
    }

    private getPreambleImports(): string {
        // --- FIX: Re-added FastApiContextLocal import ---
        return `// ===============================================================================
// GENERATED FILE: aether_api.ts
// Generated by AetherProtocolGenerator
// ===============================================================================

// --- External Dependencies (Core Aether Types) ---
import { AFuture, ARFuture } from './aether_future';
import { DataIn, DataOut, DataInOut, DataInOutStatic } from './aether_datainout';
// --- ИЗМЕНЕНИЕ: Добавлены BytesConverter, RemoteApiFuture ---
import { FastMetaType, FastFutureContext, RemoteApi, FastMeta, SerializerPackNumber, DeserializerPackNumber, FastApiContextLocal, FastMetaApi, BytesConverter, RemoteApiFuture } from './aether_fastmeta';
// --- ИЗМЕНЕНИЕ: Добавлен AConsumer ---
import { UUID, URI, Uint8Array, AConsumer } from './aether_types';
import { ToString, AString } from './aether_astring';

// NOTE: TextEncoder/TextDecoder should be available globally.

// --- Forward Declarations & Imports ---
// (Not strictly necessary in a single file)

// --- Generated Structures and APIs ---
`;
    }

    generate(): { [fileName: string]: string } {
        const enums: string[] = []; const abstracts: string[] = []; const concretes: string[] = [];
        const streams: string[] = []; const apisCode: string[] = [];

        const mainLogic = this.generatorLogic;

         // Pre-pass to discover anonymous types BEFORE sorting and generating
         Object.values(this.globalProtocolData).forEach(dslMeta => {
            Object.entries(dslMeta.api || {}).forEach(([apiName, apiDef]) => {
                this.discoverAnonymousTypesInApi(apiName, apiDef as TypeDefinition);
            });
             // --- ИЗМЕНЕНИЕ: Discover anonymous types in DTO fields too ---
             Object.entries(dslMeta.types || {}).forEach(([typeName, typeDef]) => {
                 this.discoverAnonymousTypesInDto(typeName, typeDef as TypeDefinition);
             });
         });

        const sortedTypeNames = Array.from(mainLogic.allTypes.keys()).sort((a, b) => {
            const defA = mainLogic.allTypes.get(a); const defB = mainLogic.allTypes.get(b);
            if (!defA || !defB) return !defA ? (!defB ? 0 : 1) : -1;
             if (defA.parent === b) return 1;
             if (defB.parent === a) return -1;
            const typeRank = (def: TypeDefinition | undefined): number => {
                if (!def) return 4; if (def.enum) return 0; if (def.abstract) return 1; if (def.stream) return 3; return 2;
            };
            const rankA = typeRank(defA); const rankB = typeRank(defB);
            if (rankA !== rankB) return rankA - rankB;
            return a.localeCompare(b);
        });

        // Generate known types AND discovered anonymous types together
        sortedTypeNames.forEach(name => {
             const defn = mainLogic.allTypes.get(name);
             const isApi = mainLogic.isApiDefinition(name);

             if (!defn || this.generatedTypes.has(name) || isApi) return;

             if (defn?.fields || defn?.enum || defn?.stream || defn?.abstract !== undefined) {
                 const code = this.typeGenerator.generateType(name, defn);
                 if (defn.enum) enums.push(code);
                 else if (defn.abstract) abstracts.push(code);
                 else if (defn.stream) streams.push(code);
                 else concretes.push(code);
                 this.generatedTypes.add(name);
             }
        });


        // Generate APIs
        Object.entries(this.globalProtocolData).forEach(([_, dslMeta]) => {
            Object.entries(dslMeta.api || {}).forEach(([name, defn]) => {
                if (!this.generatedApis.has(name)) {
                    const apiOutput = this.apiGenerator.generateApi(name, defn as TypeDefinition);
                    apisCode.push(apiOutput[name]);
                    this.generatedApis.add(name);
                }
            });
        });

        // Generate Custom Meta Namespaces
        const metaNamespacesCode = this.generateAllMetaNamespaces(mainLogic);

        // Assemble the final code string
        this.generatedCode = this.getPreambleImports();
        this.generatedCode += enums.join('\n\n') + (enums.length ? '\n\n' : '');
        this.generatedCode += abstracts.join('\n\n') + (abstracts.length ? '\n\n' : '');
        this.generatedCode += concretes.join('\n\n') + (concretes.length ? '\n\n' : '');
        this.generatedCode += streams.join('\n\n') + (streams.length ? '\n\n' : '');
        this.generatedCode += apisCode.join('\n\n');
        if (metaNamespacesCode) {
            this.generatedCode += '\n\n' + metaNamespacesCode;
        }

        // Apply formatting globally (using REGULAR spaces)
        this.generatedCode = this.generatedCode.replace(/^( {4})/gm, '    ')
                                             .replace(/^( {8})/gm, '        ')
                                             .replace(/^( {12})/gm, '            ')
                                             .replace(/^( {16})/gm, '                ')
                                             .replace(/^( {20})/gm, '                    ');


        return { [`aether_api.ts`]: this.generatedCode.replace(/\n{3,}/g, '\n\n') };
    }

    /**
     * [MUTATING FUNCTION]
     * Discovers anonymous types within an API definition.
     */
     private discoverAnonymousTypesInApi(apiName: string, apiDef: TypeDefinition | null | undefined): void {
        if (!apiDef) return;

        if (!this.generatorLogic || typeof this.generatorLogic.declareAnonymType !== 'function') {
            throw new Error("Internal error: generatorLogic or declareAnonymType is not available.");
        }

         Object.entries(apiDef.methods || {}).forEach(([methodName, m]) => {
             const mDef = m as TypeDefinition;
             if (!mDef) return;

             const processPotentialAnon = (parts: string[], typeDef: any): string | any => {
                 if (typeof typeDef === 'object' && typeDef !== null) {
                     // Check if it's a stream definition or a regular anonymous type
                     const isStream = !!(typeDef as TypeDefinition).stream;
                     const anonName = this.generatorLogic.declareAnonymType(parts, typeDef as TypeDefinition);
                      // Define the anonymous type within the generator's context
                     if (!this.generatorLogic.allTypes.has(anonName)) {
                         this.generatorLogic.allTypes.set(anonName, typeDef as TypeDefinition);
                         this.generatorLogic.declaredTypeNames.add(anonName);
                          // If it's a stream, we might need to recursively check its 'api' field if it were complex
                         if (isStream && (typeDef as TypeDefinition).stream?.api) {
                            // Potentially discover types within the stream's API definition if needed
                         }
                     }
                     return anonName; // Return the generated name
                 }
                 return typeDef; // Not an object or null, return as is
             };


             if (mDef.params) {
                 Object.entries(mDef.params).forEach(([paramName, paramType]) => {
                     mDef.params[paramName] = processPotentialAnon([paramName, methodName, apiName], paramType);
                 });
             }
             if (mDef.returns) {
                 mDef.returns = processPotentialAnon([methodName + "Result", apiName], mDef.returns);
             }
             if (mDef.throws) {
                 mDef.throws = processPotentialAnon([methodName + "Exception", apiName], mDef.throws);
             }
         });
     }

     // --- ИЗМЕНЕНИЕ: Added function to discover anonymous types in DTO fields ---
     /**
      * [MUTATING FUNCTION]
      * Discovers anonymous types within DTO fields recursively.
      */
     private discoverAnonymousTypesInDto(dtoName: string, dtoDef: TypeDefinition | null | undefined): void {
         if (!dtoDef || !dtoDef.fields) return;

         if (!this.generatorLogic || typeof this.generatorLogic.declareAnonymType !== 'function') {
             throw new Error("Internal error: generatorLogic or declareAnonymType is not available.");
         }

         const processFieldType = (parts: string[], typeDef: any): string | any => {
             if (typeof typeDef === 'object' && typeDef !== null) {
                 const isStream = !!(typeDef as TypeDefinition).stream;
                 const anonName = this.generatorLogic.declareAnonymType(parts, typeDef as TypeDefinition);
                 if (!this.generatorLogic.allTypes.has(anonName)) {
                     this.generatorLogic.allTypes.set(anonName, typeDef as TypeDefinition);
                     this.generatorLogic.declaredTypeNames.add(anonName);
                     // Recursively check fields of the newly defined anonymous type
                     this.discoverAnonymousTypesInDto(anonName, typeDef as TypeDefinition);
                 }
                 return anonName;
             }
             // Handle array types containing anonymous objects (e.g., fields: SomeType[])
             if (typeof typeDef === 'string' && typeDef.endsWith('[]')) {
                 // This part needs refinement if array elements themselves can be anonymous types
                 // defined inline like 'fieldName: [{ subField: string }][]'.
                 // Current DSL structure doesn't seem to support this directly in types, only in API params/returns.
             }
             return typeDef;
         };

         Object.entries(dtoDef.fields).forEach(([fieldName, fieldType]) => {
             dtoDef.fields![fieldName] = processFieldType([fieldName, dtoName], fieldType);
         });

         // Recursively check parent DTO if it exists
         if (dtoDef.parent) {
             const parentDef = this.generatorLogic.findTypeDefinition(dtoDef.parent);
             if (parentDef) {
                 // Avoid infinite recursion for self-referential or circular definitions (though unlikely in DSL)
                 // This basic check might not cover all circular dependency cases.
                 if (dtoDef.parent !== dtoName) {
                    // We typically only need to define anonymous types once.
                    // If the parent has fields that need processing, they should be handled
                    // when the parent itself is processed in the main loop or discover pass.
                    // Re-processing here might lead to redundant checks.
                    // However, if parent processing order isn't guaranteed, recursive check might be needed.
                    // Let's assume the main pass handles parents correctly for now.
                    // this.discoverAnonymousTypesInDto(dtoDef.parent, parentDef);
                 }
             }
         }
     }


    private generateAllMetaNamespaces(logicInstance: GeneratorLogic): string | null {
        if (logicInstance.allMetaCode.length === 0) return null;
        const namespaceName = "AllCustomMeta";
        const uniqueMetaCode = [...new Set(logicInstance.allMetaCode)];
        // Apply formatting (using REGULAR spaces)
        const formattedCode = uniqueMetaCode.join('\n')
                                            .replace(/^( {4})/gm, '    ')
                                            .replace(/^( {8})/gm, '        ')
                                            .replace(/^( {12})/gm, '            ')
                                            .replace(/^( {16})/gm, '                ')
                                            .replace(/^( {20})/gm, '                    ');
        return `
// ===============================================================================
// GENERATED META: ${namespaceName} (Custom FastMeta Implementations)
// ===============================================================================
export namespace ${namespaceName} {
${formattedCode}
}`;
    }
}

// =============================================================================================
// 6. Public API (generateAetherProtocol) - БЕЗ ИЗМЕНЕНИЙ
// =============================================================================================
// ... (код generateAetherProtocol остается прежним) ...
export async function generateAetherProtocol(
    meta: AetherDslMetaMap,
    resolver: IncludeResolver,
    baseName: string
): Promise<{ [fileName: string]: string }> {
    const globalProtocolData = meta;
    const primaryDslMeta = globalProtocolData[baseName];
    if (!primaryDslMeta) throw new Error(`Primary DSL meta for baseName '${baseName}' not found in provided map.`);

    // --- FIX: Pass primaryDslMeta (which was defined) to the constructor ---
    const processor = new AetherDslMetaProcessor(globalProtocolData, baseName, primaryDslMeta);
    return processor.generate();
}
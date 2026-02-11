// @ts-nocheck
// This file contains the core logic and data structures for the Aether protocol generator.

export type AetherDslMeta = {
    services?: { [key: string]: any };
    types?: { [key: string]: any };
    enums?: { [key: string]: any };
    methods?: { [key: string]: any };
    includes?: string[];
    baseName?: string;
    api?: { [key: string]: any };
};

export type AetherDslMetaMap = { [baseName: string]: AetherDslMeta };
export type IncludeResolver = (includeName: string) => Promise<AetherDslMeta>;
export type TypeDefinition = {
    [key: string]: any;
    doc?: string;
    fields?: { [key: string]: any };
    constants?: { [key: string]: string | number | boolean };
    stream?: { api?: string, crypto?: boolean, name?: string };
    enum?: string[];
    abstract?: boolean;
    parent?: string;
};

/**
 * A helper class to store information about a parsed DSL constant.
 */
export class ConstantInfo {
    public readonly name: string;
    public readonly type: 'string' | 'number' | 'boolean';
    public readonly value: string | number | boolean;
    public readonly capitalName: string;

    /**
     * Creates an instance of ConstantInfo.
     * @param name - The name of the constant.
     * @param value - The value of the constant.
     */
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
     * Gets the TypeScript type name for the constant's value.
     * @returns The TypeScript type (e.g., "string", "number").
     */
    getGetterType(): string {
        return this.type;
    }

    /**
     * Gets the generated getter method name for this constant.
     * @returns The getter name (e.g., "getMessageType").
     */
    getGetterName(): string {
        return `get${this.capitalName}`;
    }

    /**
     * Gets the value as a string literal for embedding in TypeScript code.
     * @returns A code-safe string representation of the value.
     */
    getTsValue(): string {
        if (this.type === 'string') {
            return JSON.stringify(this.value);
        }
        return String(this.value);
    }

    /**
     * Compares this constant's definition (name and type) with another.
     * Used for checking polymorphic overrides.
     * @param other - The other ConstantInfo to compare against.
     * @returns True if the name and type match.
     */
    equals(other: ConstantInfo): boolean {
        return this.name === other.name && this.type === other.type;
    }
}

/**
 * A helper class to parse and store information about a DSL type string.
 */
export class TypeInfo {
    public readonly javaType: string;
    public readonly javaTypeBoxed: string;
    public readonly arrayStaticSize: number;
    public readonly isNullable: boolean;
    public readonly isArray: boolean;
    public readonly isPack: boolean;
    public readonly isAbstract: boolean;

    private static readonly PRIMITIVE_TYPES = new Set([
        "void", "byte", "short", "int", "long", "float", "double", "boolean",
        "String", "UUID", "URI", "Date", "java.util.Date", "string"
    ]);

    /**
     * Creates an instance of TypeInfo by parsing a DSL type string.
     * @param type - The DSL type string (e.g., "int?", "string[]", "long(intpack)").
     * @param isAbstract - Whether this type is known to be abstract.
     */
    constructor(type: string, isAbstract: boolean = false) {
        this.isAbstract = isAbstract;
        if (typeof type !== 'string') {
            this.javaType = "void"; this.javaTypeBoxed = "void"; this.arrayStaticSize = 0;
            this.isNullable = false; this.isArray = false; this.isPack = false;
            return;
        }
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
                this.arrayStaticSize = 0;
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

    /**
     * Gets the class name for this type.
     * @returns The class name.
     */
    getClassName(): string { return this.javaTypeBoxed; }

    /**
     * Checks if this type is a primitive (non-array).
     * @returns True if the type is a primitive.
     */
    isPrimitive(): boolean { return !this.isArray && TypeInfo.PRIMITIVE_TYPES.has(this.javaType); }

    /**
     * Gets a TypeInfo for the element type, if this is an array.
     * @returns A new TypeInfo instance for the base type.
     */
    getElementType(): TypeInfo {
        return new TypeInfo(this.javaType, this.isAbstract);
    }

    /**
     * Gets the TypeScript code to initialize a future for this type.
     * @returns TypeScript code for future initialization.
     */
    getInitFuture(): string {
        if (this.javaType === "void") { return "AFuture.make()"; }
        const tsType = this.toTsType(false, false);
        return `ARFuture.of<${tsType}>()`;
    }

    /**
     * Gets the TypeScript return type for an API method returning this type.
     * @returns The TypeScript return type (e.g., "ARFuture<string>").
     */
    getAsReturnType(): string {
        if (this.javaType === "void") { return "AFuture"; }
        const tsType = this.toTsType(false, false);
        return `ARFuture<${tsType}>`;
    }

    /**
     * Gets the TypeScript type for a class field getter.
     * @returns The TypeScript type.
     */
    getGetterType(): string { return this.toTsType(true, false); }

    /**
     * Gets the TypeScript type for a class field.
     * @returns The TypeScript type.
     */
    getFieldType(): string { return this.toTsType(true, false); }

    /**
     * Gets the TypeScript type for a method argument.
     * @returns The TypeScript type.
     */
    getArgumentType(): string { return this.toTsType(false, false); }

    /**
     * Gets the TypeScript type for a local variable.
     * @returns The TypeScript type.
     */
    getLocalVarType(): string { return this.toTsType(false, false); }

    /**
     * Converts the DSL type to its TypeScript equivalent.
     * @param allowNullable - Whether to allow appending " | null".
     * @param _isField - (Unused) Whether this is for a field.
     * @returns The TypeScript type string.
     */
    private toTsType(allowNullable: boolean, _isField: boolean): string {
        let baseType: string;
        switch (this.javaType) {
            case 'byte': case 'short': case 'int': case 'float': case 'double':
                baseType = 'number';
                break;
            case 'long':
                baseType = 'bigint';
                break;
            case 'boolean': case 'string': case 'UUID': case 'URI': case 'Date':
                baseType = this.javaType;
                break;
            default:
                baseType = this.javaTypeBoxed;
        }
        let result = baseType;
        if (this.isArray) {
            result = (this.javaType === 'byte') ? 'Uint8Array' : `${baseType}[]`;
        }
        if (allowNullable && this.isNullable) {
            result += ' | null';
        }
        return result;
    }

    /**
     * Gets the original DSL string representation of this type.
     * @returns The DSL string.
     */
    toString(): string {
        return `${this.javaType}${this.isPack ? '(pack)' : ''}${this.isArray ? `[${this.arrayStaticSize > 0 ? this.arrayStaticSize : ''}]` : ''}${this.isNullable ? '?' : ''}`;
    }
}

/**
 * Contains the core logic for generating code, including serialization,
 * deserialization, and type hierarchy management.
 */
export class GeneratorLogic {
    public readonly canonicalApiMap = new Map<string, string>();
    private varCounter: number = 0;
    private metaAccessors: Map<string, string> = new Map();
    /**
     * Stores generated implementation classes (for aether_api_impl.ts).
     */
    public allImplCode: string[] = [];
    public declaredTypeNames: Set<string> = new Set();
    public readonly baseName: string;
    public readonly protocolData: AetherDslMeta;
    public readonly allTypes: Map<string, TypeDefinition> = new Map();
    private readonly canonicalTypeNameMap = new Map<string, string>();
    private readonly typeHierarchyIds: Map<string, Map<string, number>> = new Map();
    private readonly typeToRootMap: Map<string, string> = new Map();
    private readonly rootToChildrenMap: Map<string, string[]> = new Map();
    public readonly globalProtocolData: AetherDslMetaMap;

    /**
     * Creates an instance of GeneratorLogic.
     * @param globalProtocolData - A map of all loaded DSL metadata.
     * @param baseName - The base name of the protocol being generated.
     * @param initialDslMeta - The primary DSL metadata for this generator.
     */
    constructor(globalProtocolData: AetherDslMetaMap, baseName: string, initialDslMeta: AetherDslMeta) {
        this.baseName = baseName;
        this.protocolData = initialDslMeta;
        this.globalProtocolData = globalProtocolData;

        Object.values(globalProtocolData).forEach(data => {
            // Обработка TYPES (как в Groovy)
            Object.keys(data.types || {}).forEach(typeName => {
                this.declaredTypeNames.add(typeName);
                this.allTypes.set(typeName, (data.types as any)[typeName]);
                this.canonicalTypeNameMap.set(typeName.toLowerCase(), typeName);
            });

            // Обработка API (как в Groovy)
            Object.keys(data.api || {}).forEach(typeName => {
                this.declaredTypeNames.add(typeName);
                this.allTypes.set(typeName, (data.api as any)[typeName] || {});
                this.canonicalApiMap.set(typeName.toLowerCase(), typeName);
            });
        });

        this.buildTypeHierarchies();
        this.initStandardMeta();
    }
    /**
     * Resolves a referenced type name to its canonical (declared) case.
     * @param referencedName - The name used in the DSL (e.g., "string", "MyObject", "myobject").
     * @returns The canonical name (e.g., "string", "MyObject").
     */
    public resolveCanonicalTypeName(referencedName: string): string {
            if (!referencedName || typeof referencedName !== 'string') return referencedName;
            let t = referencedName.trim();

            // Логика суффиксов ( ? и [] )
            if (t.endsWith('?')) t = t.substring(0, t.length - 1);
            const sIndex = t.lastIndexOf("[");
            if (t.endsWith("]") && sIndex > -1) t = t.substring(0, sIndex);

            if (t.toLowerCase() === "intpack") return referencedName;
            if (t.endsWith('(intpack)')) t = t.substring(0, t.length - 9);

            const lowerName = t.toLowerCase();

            // Проверка примитивов (как в Groovy)
            switch (lowerName) {
                case "byte":
                case "short":
                case "int":
                case "long":
                case "float":
                case "double":
                case "boolean":
                case "bool":
                case "string":
                case "uuid":
                case "uri":
                case "date":
                case "java.util.date":
                    return referencedName; // Это примитив, сопоставление не нужно
            }

            // 1. Поиск в канонической карте ТИПОВ
            const canonicalType = this.canonicalTypeNameMap.get(lowerName);
            if (canonicalType) {
                return referencedName.replace(t, canonicalType);
            }

            // 2. Поиск в канонической карте API
            const canonicalApi = this.canonicalApiMap.get(lowerName);
            if (canonicalApi) {
                return referencedName.replace(t, canonicalApi);
            }

            return referencedName;
        }

    /**
     * Analyzes all loaded types and builds the inheritance and dispatch maps.
     */
    private buildTypeHierarchies(): void {
        const parentToChildren: Map<string, string[]> = new Map();
        this.allTypes.forEach((typeDef, typeName) => {
            if (typeDef?.parent) {
                const parent = typeDef.parent as string;
                if (!parentToChildren.has(parent)) parentToChildren.set(parent, []);
                parentToChildren.get(parent)!.push(typeName);
            }
        });

        const rootTypes = this.findRootTypes(parentToChildren);

        rootTypes.forEach(rootType => {
            this.processRootTypeHierarchy(rootType, parentToChildren);
        });
    }

    /**
     * Finds all root types in the type hierarchy.
     * A root type has children but no parent.
     * @param parentToChildren - A map of parent types to their direct children.
     * @returns A Set of root type names.
     */
    private findRootTypes(parentToChildren: Map<string, string[]>): Set<string> {
        const rootTypes: Set<string> = new Set();
        this.allTypes.forEach((typeDef, typeName) => {
            const hasParent = typeDef?.parent && this.allTypes.has(typeDef.parent);
            const hasChildren = parentToChildren.has(typeName);
            const isApiType = this.isApiDefinition(typeName);

            if (!hasParent && hasChildren && !isApiType) {
                rootTypes.add(typeName);
            }
        });
        return rootTypes;
    }

    /**
     * Processes a single type hierarchy, finding all concrete descendants
     * and mapping their dispatch IDs.
     * @param rootType - The root type name of the hierarchy.
     * @param parentToChildren - A map of parent types to their direct children.
     */
    private processRootTypeHierarchy(rootType: string, parentToChildren: Map<string, string[]>): void {
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
    }

    /**
     * Checks if a given type name corresponds to an API definition.
     * @param typeName - The name of the type.
     * @returns True if it is an API definition.
     */
    public isApiDefinition(typeName: string): boolean {
        return this.canonicalApiMap.has(typeName.toLowerCase());
    }

    /**
     * Recursively finds all concrete (non-abstract) descendant types for a given type.
     * @param currentType - The type name to start from.
     * @param parentToChildren - A map of parent types to their direct children.
     * @param visitedTypes - A set to prevent circular dependencies.
     * @returns An array of concrete type names.
     */
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

    /**
     * Gets the dispatch ID for a type within its hierarchy.
     * @param typeName - The name of the type.
     * @returns The numeric ID, or undefined if not found.
     */
    public getTypeIdInHierarchy(typeName: string): number | undefined {
        const rootType = this.typeToRootMap.get(typeName);
        return rootType ? this.typeHierarchyIds.get(rootType)?.get(typeName) : undefined;
    }

    /**
     * Gets all concrete descendant types for a given root type.
     * @param rootType - The name of the root type.
     * @returns An array of concrete type names.
     */
    public getConcreteTypesInHierarchy(rootType: string): string[] {
        return this.rootToChildrenMap.get(rootType) || [];
    }

    /**
     * Finds the root type for a given type name.
     * @param typeName - The name of the type.
     * @returns The root type name, or undefined if not in a hierarchy.
     */
    public getRootTypeFor(typeName: string): string | undefined {
        return this.typeToRootMap.get(typeName);
    }

    /**
     * Checks if a type is part of any managed hierarchy.
     * @param typeName - The name of the type.
     * @returns True if the type is in a hierarchy.
     */
    public isInTypeHierarchy(typeName: string): boolean {
        return this.typeToRootMap.has(typeName);
    }

    /**
     * Finds the type definition for a given type name.
     * @param typeName - The name of the type.
     * @returns The TypeDefinition, or undefined if not found.
     */
    public findTypeDefinition(typeName: string): TypeDefinition | undefined {
        const def = this.allTypes.get(typeName);
        if (def && !this.isApiDefinition(typeName)) {
            return def;
        }
        return undefined;
    }

    /**
     * Initializes the map of meta accessors for standard primitive types.
     */
    private initStandardMeta() {
        const add = (type: string, meta: string) => this.metaAccessors.set(new TypeInfo(type).toString(), meta);
        add("string", "FastMeta.META_STRING"); add("UUID", "FastMeta.META_UUID"); add("URI", "FastMeta.META_URI");
        add("intpack", "FastMeta.META_PACK"); add("byte", "FastMeta.META_BYTE"); add("short", "FastMeta.META_SHORT");
        add("int", "FastMeta.META_INT"); add("long", "FastMeta.META_LONG"); add("float", "FastMeta.META_FLOAT");
        add("double", "FastMeta.META_DOUBLE"); add("Date", "FastMeta.META_DATE"); add("boolean", "FastMeta.META_BOOLEAN");
        add("byte[]", "FastMeta.META_ARRAY_BYTE");
    }

    /**
     * Generates a unique variable name based on a base name.
     * @param baseName - The desired base name (e.g., "el", "len").
     * @returns A unique variable name (e.g., "el_1", "len_2").
     */
    getUniqueVarName(baseName: string): string {
        const cleanBaseName = baseName.replace(/[^a-zA-Z0-9_]/g, '_');
        const finalBase = cleanBaseName.startsWith('_') ? cleanBaseName.substring(1) : cleanBaseName;
        const safeBase = ['in', 'out', 'key', 'string', 'number', 'boolean', 'any'].includes(finalBase) ? `_${finalBase}` : finalBase;
        return `${safeBase}_${this.varCounter++}`;
    }

    /**
     * Gets the TypeScript code to access the FastMetaType for a given TypeInfo.
     * This will find standard meta, generated struct meta, or register a new
     * array meta if needed.
     * @param t - The TypeInfo to find meta for.
     * @returns TypeScript code (e.g., "FastMeta.META_STRING", "MyStruct.META").
     */
    generateAccessMeta(t: TypeInfo): string {
        const typeKey = t.toString();
        let res = this.metaAccessors.get(typeKey);
        if (res) return res;

        if (t.isArray) {
            if (t.javaType === 'byte') {
                res = "FastMeta.META_ARRAY_BYTE";
            } else {
                const elementType = t.getElementType();
                const elementMetaAccessor = this.generateAccessMeta(elementType);
                res = `FastMeta.getMetaArray(${elementMetaAccessor})`;
            }
        } else {
            // This block handles non-array types that were not in the metaAccessors map.
            // This includes user-defined types (e.g., "MyObject") and nullable standard types (e.g., "Date?").

            const canonicalClassName = t.getClassName(); // e.g., "Date", "string", "MyObject"

            if (t.isPrimitive()) {
                // It's a standard primitive type (like Date, string, UUID)
                // but it wasn't in the map (e.g., it's nullable: "Date?").
                // We must map it to the correct FastMeta constant.
                switch (canonicalClassName) {
                    case 'string': res = 'FastMeta.META_STRING'; break;
                    case 'UUID': res = 'FastMeta.META_UUID'; break;
                    case 'URI': res = 'FastMeta.META_URI'; break;
                    case 'Date': res = 'FastMeta.META_DATE'; break;
                    case 'byte': res = 'FastMeta.META_BYTE'; break;
                    case 'short': res = 'FastMeta.META_SHORT'; break;
                    case 'int': res = 'FastMeta.META_INT'; break;
                    case 'long': res = t.isPack ? 'FastMeta.META_PACK' : 'FastMeta.META_LONG'; break;
                    case 'float': res = 'FastMeta.META_FLOAT'; break;
                    case 'double': res = 'FastMeta.META_DOUBLE'; break;
                    case 'boolean': res = 'FastMeta.META_BOOLEAN'; break;
                    default:
                        // This should not be reachable if TypeInfo.PRIMITIVE_TYPES is correct
                        throw new Error(`Internal error: Unhandled primitive type '${canonicalClassName}' in generateAccessMeta (for ${typeKey})`);
                }
            } else {
                // It's not a primitive, so it must be a generated user type.
                // We resolve its canonical name (which might be case-corrected).
                const resolvedName = this.resolveCanonicalTypeName(canonicalClassName);
                const finalClassName = new TypeInfo(resolvedName).javaType;

                if (!this.findTypeDefinition(finalClassName)) {
                    throw new Error(`Could not find or determine meta accessor for non-primitive type: ${t.javaType} (className: ${canonicalClassName}, canonical: ${finalClassName}, toString: ${typeKey})`);
                }
                // It is a user-defined generated type.
                res = `${finalClassName}.META`;
            }
        }
        this.metaAccessors.set(typeKey, res);
        return res;
    }

    /**
     * Generates serialization code for a given type.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param outVar - The name of the DataOut variable.
     * @param inVar - The name of the variable to serialize.
     * @param type - The TypeInfo of the variable to serialize.
     */
    generateSerializer(sb: string[], serializeContextVar: string, outVar: string, inVar: string, type: TypeInfo): void {
        if (type.isArray) {
            this.generateArraySerializer(sb, serializeContextVar, outVar, inVar, type);
        } else {
            this.generateElementSerializer(sb, serializeContextVar, outVar, inVar, type);
        }
    }

    /**
     * Generates serialization code for an array type.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param outVar - The name of the DataOut variable.
     * @param inVar - The name of the variable to serialize.
     * @param type - The TypeInfo of the array.
     */
    private generateArraySerializer(sb: string[], serializeContextVar: string, outVar: string, inVar: string, type: TypeInfo): void {
        const vv = this.getUniqueVarName("el");
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
    }

    /**
     * Generates serialization code for a non-array element type.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param outVar - The name of the DataOut variable.
     * @param inVar - The name of the variable to serialize.
     * @param type - The TypeInfo of the element.
     */
    private generateElementSerializer(sb: string[], serializeContextVar: string, outVar: string, inVar: string, type: TypeInfo): void {
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
                const resolvedName = this.resolveCanonicalTypeName(className);
                const canonicalClassName = new TypeInfo(resolvedName).javaType;
                sb.push(`${canonicalClassName}.META.serialize(${serializeContextVar}, ${inVar}, ${outVar});`);
        }
    }

    /**
     * Generates deserialization code for a given type.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param inVar - The name of the DataIn variable.
     * @param outVar - The name of the variable to assign the deserialized value to.
     * @param type - The TypeInfo of the variable to deserialize.
     */
    generateDeserializer(sb: string[], serializeContextVar: string, inVar: string, outVar: string, type: TypeInfo): void {
        if (type.isArray) {
            this.generateArrayDeserializer(sb, serializeContextVar, inVar, outVar, type);
        } else {
            this.generateElementDeserializer(sb, serializeContextVar, inVar, outVar, type);
        }
    }

    /**
     * Generates deserialization code for an array type.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param inVar - The name of the DataIn variable.
     * @param outVar - The name of the variable to assign the deserialized value to.
     * @param type - The TypeInfo of the array.
     */
    private generateArrayDeserializer(sb: string[], serializeContextVar: string, inVar: string, outVar: string, type: TypeInfo): void {
        const vv = this.getUniqueVarName("idx");
        const elementType = type.getElementType();
        const vs = this.getUniqueVarName("len");

        if (type.arrayStaticSize === 0) {
            sb.push(`const ${vs} = Number(DeserializerPackNumber.INSTANCE.put(${inVar}));`);
        } else {
            sb.push(`const ${vs} = ${type.arrayStaticSize};`);
        }

        if (elementType.javaType === "byte") {
            const bytesVar = this.getUniqueVarName("bytes");
            sb.push(`const ${bytesVar} = ${inVar}.readBytes(${vs});`);
            sb.push(`${outVar} = ${bytesVar};`);
        } else {
            sb.push(`${outVar} = new Array<${elementType.getArgumentType()}>(${vs});`);
            sb.push(`for (let ${vv} = 0; ${vv} < ${vs}; ${vv}++) {`);
            this.generateDeserializer(sb, serializeContextVar, inVar, `${outVar}[${vv}]`, elementType);
            sb.push(`}`);
        }
    }

    /**
     * Generates deserialization code for a non-array element type.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param inVar - The name of the DataIn variable.
     * @param outVar - The name of the variable to assign the deserialized value to.
     * @param type - The TypeInfo of the element.
     */
    private generateElementDeserializer(sb: string[], serializeContextVar: string, inVar: string, outVar: string, type: TypeInfo): void {
        switch (type.javaType) {
            case "boolean": sb.push(`${outVar} = ${inVar}.readBoolean();`); break;
            case "byte": sb.push(`${outVar} = ${inVar}.readByte();`); break;
            case "short": sb.push(`${outVar} = ${inVar}.readShort();`); break;
            case "int": sb.push(`${outVar} = ${inVar}.readInt();`); break;
            case "long":
                if (type.isPack) sb.push(`${outVar} = DeserializerPackNumber.INSTANCE.put(${inVar});`);
                else sb.push(`${outVar} = ${inVar}.readLong();`);
                break;
            case "float": sb.push(`${outVar} = ${inVar}.readFloat();`); break;
            case "double": sb.push(`${outVar} = ${inVar}.readDouble();`); break;
            case "Date": sb.push(`${outVar} = new Date(Number(${inVar}.readLong()));`); break;
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
                const resolvedName = this.resolveCanonicalTypeName(className);
                const canonicalClassName = new TypeInfo(resolvedName).javaType;
                sb.push(`${outVar} = ${canonicalClassName}.META.deserialize(${serializeContextVar}, ${inVar});`);
        }
    }

    /**
     * Generates serialization code for all fields of a struct, handling nullability.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param outVar - The name of the DataOut variable.
     * @param allFields - A map of field names (with "this.") to their TypeInfo.
     */
    generateSerializerFields(sb: string[], serializeContextVar: string, outVar: string, allFields: Map<string, TypeInfo>): void {
        const nullableFields = new Map([...allFields].filter(([_, v]) => v.isNullable));
        const nullableCount = nullableFields.size;

        if (nullableCount > 0) {
            const writeMethod = this.getMaskWriteMethod(nullableCount);
            this.generateNullableMaskSerializer(sb, outVar, nullableFields, writeMethod);
            this.generateNullableFieldSerializer(sb, serializeContextVar, outVar, allFields);
        } else {
            allFields.forEach((fieldType, fieldName) => {
                this.generateSerializer(sb, serializeContextVar, outVar, fieldName, fieldType);
            });
        }
    }

    /**
     * Determines the correct DataOut method to write the nullability bitmask.
     * @param nullableCount - The number of nullable fields.
     * @returns The method name (e.g., "writeByte", "writeLong").
     */
    private getMaskWriteMethod(nullableCount: number): string {
        if (nullableCount <= 8) return "writeByte";
        if (nullableCount <= 16) return "writeShort";
        if (nullableCount <= 32) return "writeInt";
        return "writeLong";
    }

    /**
     * Generates the code to create and write the nullability bitmask.
     * @param sb - The string array to append code lines to.
     * @param outVar - The name of the DataOut variable.
     * @param nullableFields - A map of nullable field names to TypeInfo.
     * @param writeMethod - The DataOut method to use (e.g., "writeByte").
     */
    private generateNullableMaskSerializer(sb: string[], outVar: string, nullableFields: Map<string, TypeInfo>, writeMethod: string): void {
        sb.push(`let _mask: number = 0;`);
        let bitIndex = 0;
        nullableFields.forEach((_, fieldName) => {
            const shift = bitIndex === 0 ? "1" : `(1 << ${bitIndex})`;
            sb.push(`if (${fieldName} === null) _mask |= ${shift};`);
            bitIndex++;
        });
        sb.push(`${outVar}.${writeMethod}(_mask);`);
    }

    /**
     * Generates the code to serialize fields, skipping null ones.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param outVar - The name of the DataOut variable.
     * @param allFields - A map of all field names to TypeInfo.
     */
    private generateNullableFieldSerializer(sb: string[], serializeContextVar: string, outVar: string, allFields: Map<string, TypeInfo>): void {
        allFields.forEach((fieldType, fieldName) => {
            if (fieldType.isNullable) {
                sb.push(`if (${fieldName} !== null) {`);
                this.generateSerializer(sb, serializeContextVar, outVar, fieldName, fieldType);
                sb.push(`}`);
            } else {
                this.generateSerializer(sb, serializeContextVar, outVar, fieldName, fieldType);
            }
        });
    }

    /**
     * Generates deserialization code for all fields of a struct, handling nullability.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param inVar - The name of the DataIn variable.
     * @param fieldVars - A map of local variable names to their TypeInfo.
     */
    generateDeserializerFields(sb: string[], serializeContextVar: string, inVar: string, fieldVars: Map<string, TypeInfo>): void {
        const nullableFields = new Map([...fieldVars].filter(([_, v]) => v.isNullable));
        const nullableCount = nullableFields.size;

        if (nullableCount > 0) {
            const readMethod = this.getMaskReadMethod(nullableCount);
            const isMaskBigInt = readMethod === "readLong";
            sb.push(`const _mask = ${inVar}.${readMethod}();`);
            this.generateNullableFieldDeserializer(sb, serializeContextVar, inVar, fieldVars, "_mask", isMaskBigInt);
        } else {
            fieldVars.forEach((fieldType, varName) => {
                this.generateDeserializer(sb, serializeContextVar, inVar, varName, fieldType);
            });
        }
    }

    /**
     * Determines the correct DataIn method to read the nullability bitmask.
     * @param nullableCount - The number of nullable fields.
     * @returns The method name (e.g., "readByte", "readLong").
     */
    private getMaskReadMethod(nullableCount: number): string {
        if (nullableCount <= 8) return "readByte";
        if (nullableCount <= 16) return "readShort";
        if (nullableCount <= 32) return "readInt";
        return "readLong";
    }

    /**
     * Generates the code to deserialize fields based on the nullability bitmask.
     * @param sb - The string array to append code lines to.
     * @param serializeContextVar - The name of the FastFutureContext variable.
     * @param inVar - The name of the DataIn variable.
     * @param fieldVars - A map of local variable names to TypeInfo.
     * @param maskVar - The name of the variable holding the bitmask.
     * @param isMaskBigInt - True if the bitmask is a bigint.
     */
    private generateNullableFieldDeserializer(sb: string[], serializeContextVar: string, inVar: string, fieldVars: Map<string, TypeInfo>, maskVar: string, isMaskBigInt: boolean): void {
        let bitIndex = 0;
        fieldVars.forEach((fieldType, varName) => {
            if (fieldType.isNullable) {
                const shift = isMaskBigInt
                    ? (bitIndex === 0 ? "1n" : `(1n << ${bitIndex}n)`)
                    : (bitIndex === 0 ? "1" : `(1 << ${bitIndex})`);

                const check = `((${maskVar} & ${shift}) === ${isMaskBigInt ? '0n' : '0'})`;

                sb.push(`if (${check}) {`);
                this.generateDeserializer(sb, serializeContextVar, inVar, varName, fieldType);
                sb.push(`} else { ${varName} = null; }`);
                bitIndex++;
            } else {
                this.generateDeserializer(sb, serializeContextVar, inVar, varName, fieldType);
            }
        });
    }

    /**
     * Declares a new anonymous type, generating a unique name for it
     * using the same logic as the Groovy generator.
     * @param nameParts - An array of strings to base the name on (e.g., ["field", "Struct"]).
     * @param typeDefinition - The definition of the anonymous type.
     * @returns The generated unique name for the type.
     */
    declareAnonymType(nameParts: string[], typeDefinition: TypeDefinition): string {
        let generatedName: string = typeDefinition.name || (typeDefinition.stream ? typeDefinition.stream.name : "") || "";

        // 1. Если имя задано явно (например, { name: MyAnonStruct, fields: ... })
        if (generatedName) {
            // [cм. Groovy, 1, строка 318]
            // Проверяем, не было ли оно уже зарегистрировано
            if (!this.declaredTypeNames.has(generatedName)) {
                // [cм. Groovy, 1, строка 339]
                this.declaredTypeNames.add(generatedName);
                // [cм. Groovy, 1, строка 340]
                this.canonicalTypeNameMap.set(generatedName.toLowerCase(), generatedName);
            }
            return generatedName;
        }

        // --- [ИЗМЕНЕНИЕ] Алгоритм из Groovy-генератора ---
        let tempName = "";
        const processorDeclaredNames = this.declaredTypeNames;

        // 2. Попытка частичных комбинаций (e.g., "Field", "FieldMethod", "FieldMethodApi")
        // [cм. Groovy, 1, строки 322-328]
        for (const part of nameParts) {
            tempName += part.charAt(0).toUpperCase() + part.slice(1);
            if (!processorDeclaredNames.has(tempName)) {
                generatedName = tempName;
                break;
            }
        }

        // 3. Если все комбинации заняты, объединяем и добавляем номер
        // [cм. Groovy, 1, строка 332]
        if (!generatedName) {
            // [cм. Groovy, 1, строка 333]
            tempName = nameParts.join("");
            // [cм. Groovy, 1, строка 336]
            let baseName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
            if (baseName.length === 0) baseName = "Anon"; // Failsafe

            let counter = 0;
            // [cм. Groovy, 1, строка 336]
            generatedName = baseName + counter++;
            // [cм. Groovy, 1, строка 337]
            while (processorDeclaredNames.has(generatedName)) {
                generatedName = baseName + counter++;
            }
        }

        // 4. Регистрируем новое уникальное имя в системе
        this.declaredTypeNames.add(generatedName);
        this.canonicalTypeNameMap.set(generatedName.toLowerCase(), generatedName);

        return generatedName;
    }

}


/**
 * Stub methods for the FastMetaType implementation.
 */
export const FAST_META_TYPE_IMPL_STUB_METHODS = `
    public serializeToBytes(obj: any): Uint8Array {
        const d = new DataInOut();
        // FastFutureContextStub is imported in aether_api_impl.ts
        this.serialize(FastFutureContextStub, obj, d);
        return d.toArray();
    }

    public deserializeFromBytes(data: Uint8Array): any {
        const d = new DataInOutStatic(data);
        // FastFutureContextStub is imported in aether_api_impl.ts
        return this.deserialize(FastFutureContextStub, d);
    }

    public loadFromFile(file: string): any {
        throw new Error("UnsupportedOperationException: loadFromFile requires Node.js/Filesystem access.");
    }
    `;
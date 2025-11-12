import {
    GeneratorLogic,
    TypeDefinition,
    TypeInfo,
    ConstantInfo,
    FAST_META_TYPE_IMPL_STUB_METHODS
} from "./aether_protocol_core";

/**
 * Responsible for generating TypeScript code for DSL types
 * (Structures, Enums, and Streams).
 */
export class TypeGenerator {
    private readonly generatorLogic: GeneratorLogic;

    /**
     * Creates an instance of TypeGenerator.
     * @param generatorLogic - The shared GeneratorLogic instance.
     */
    constructor(generatorLogic: GeneratorLogic) { this.generatorLogic = generatorLogic; }

    /**
     * Generates the code for a single type definition.
     * @param name - The name of the type.
     * @param defn - The definition of the type.
     * @returns The generated TypeScript code as a string.
     */
    generateType(name: string, defn: TypeDefinition): string {
        if (defn?.stream) return this.generateStreamClass(name, defn);
        if (defn?.enum) return this.generateEnum(name, defn);
        return this.generateStructure(name, defn || {});
    }

    /**
     * Parses the 'fields' map from a TypeDefinition.
     * @param fields - The 'fields' object from the DSL.
     * @returns A Map of field names to their TypeInfo.
     */
    private getFieldTypes(fields: { [fn: string]: any }): Map<string, TypeInfo> {
        const fieldTypes: Map<string, TypeInfo> = new Map();
        Object.entries(fields || {}).forEach(([fn, type]) => {
            if (typeof type === 'object' && type !== null) throw new Error(`Anonymous types cannot be validated this way.`);

            const referencedName = type as string;
            const canonicalName = this.generatorLogic.resolveCanonicalTypeName(referencedName);
            fieldTypes.set(fn, new TypeInfo(canonicalName));
        });
        return fieldTypes;
    }

    /**
     * Recursively collects all fields for a type, including from parent types.
     * @param cfg - The TypeDefinition to inspect.
     * @returns A Map of all field names to their TypeInfo.
     */
    public getAllFields(cfg: TypeDefinition): Map<string, TypeInfo> {
        const res: Map<string, TypeInfo> = new Map();
        this.getAllFieldsRecursive(res, cfg);
        return res;
    }

    /**
     * Recursive helper for getAllFields.
     * @param res - The accumulating Map of fields.
     * @param cfg - The current TypeDefinition to process.
     */
    private getAllFieldsRecursive(res: Map<string, TypeInfo>, cfg: TypeDefinition): void {
        if (cfg?.parent) {
            const parentNameRaw = cfg.parent as string;
            const parentName = this.generatorLogic.resolveCanonicalTypeName(parentNameRaw);
            const parentCfg = this.generatorLogic.findTypeDefinition(parentName);
            if (parentCfg) this.getAllFieldsRecursive(res, parentCfg);
        }
        if (cfg?.fields) this.getFieldTypes(cfg.fields).forEach((v, k) => res.set(k, v));
    }

    /**
     * Parses the 'constants' map from a TypeDefinition.
     * @param cfgConstants - The 'constants' object from the DSL.
     * @returns A Map of constant names to their ConstantInfo.
     */
    private getConstantTypes(cfgConstants: { [fn: string]: any } | undefined): Map<string, ConstantInfo> {
        const constTypes: Map<string, ConstantInfo> = new Map();
        Object.entries(cfgConstants || {}).forEach(([name, value]) => {
            constTypes.set(name, new ConstantInfo(name, value));
        });
        return constTypes;
    }

    /**
     * Recursively collects all constants for a type, including from parent types.
     * Constants from children override parents.
     * @param cfg - The TypeDefinition to inspect.
     * @returns A Map of all constant names to their ConstantInfo.
     */
    public getAllConstants(cfg: TypeDefinition): Map<string, ConstantInfo> {
        const res: Map<string, ConstantInfo> = new Map();
        this.getAllConstantsRecursive(res, cfg);
        return res;
    }

    /**
     * Recursive helper for getAllConstants.
     * @param res - The accumulating Map of constants.
     * @param cfg - The current TypeDefinition to process.
     */
    private getAllConstantsRecursive(res: Map<string, ConstantInfo>, cfg: TypeDefinition): void {
        if (cfg?.parent) {
            const parentNameRaw = cfg.parent as string;
            const parentName = this.generatorLogic.resolveCanonicalTypeName(parentNameRaw);
            const parentCfg = this.generatorLogic.findTypeDefinition(parentName);
            if (parentCfg) this.getAllConstantsRecursive(res, parentCfg);
        }
        if (cfg?.constants) this.getConstantTypes(cfg.constants).forEach((v, k) => res.set(k, v));
    }

    /**
     * Generates abstract getters in a parent class for constants that are
     * common to all direct concrete children.
     * @param sb - The string array to append code lines to.
     * @param children - An array of concrete child type names.
     */
    private generateAbstractGettersForCommonConstants(sb: string[], children: string[]): void {
        if (children.length === 0) return;

        const allChildrenConstants = children.map(childName => {
            const childCfg = this.generatorLogic.findTypeDefinition(childName);
            return childCfg ? this.getAllConstants(childCfg) : new Map<string, ConstantInfo>();
        });

        if (allChildrenConstants.length === 0) return;

        const commonConstants = new Map<string, ConstantInfo>(allChildrenConstants[0]);

        allChildrenConstants.slice(1).forEach(childConstants => {
            for (const [name, constInfo] of commonConstants.entries()) {
                const otherConst = childConstants.get(name);
                if (!otherConst || !constInfo.equals(otherConst)) {
                    commonConstants.delete(name);
                }
            }
        });

        commonConstants.forEach(constInfo => {
            sb.push(`\n    public abstract ${constInfo.getGetterName()}(): ${constInfo.getGetterType()};`);
        });
    }

    /**
     * Generates concrete getter methods for a type's constants.
     * @param sb - The string array to append code lines to.
     * @param constants - A Map of constants defined on the current type.
     * @param hasParent - True if this type extends another.
     */
    private generateConstantGetters(sb: string[], constants: Map<string, ConstantInfo>, hasParent: boolean): void {
        constants.forEach(constInfo => {
            const override = hasParent ? 'override ' : '';
            sb.push(`\n    public ${override}${constInfo.getGetterName()}(): ${constInfo.getGetterType()} {`);
            sb.push(`        return ${constInfo.getTsValue()};`);
            sb.push(`    }`);
        });
        if (constants.size > 0) sb.push(``);
    }

    /**
     * Generates the code for a structure (a class with fields).
     * @param name - The name of the structure.
     * @param cfg - The TypeDefinition for the structure.
     * @returns The generated TypeScript code as a string.
     */
    private generateStructure(name: string, cfg: TypeDefinition): string {
        const sb: string[] = [];
        const g = this.generatorLogic;
        const isAbstract = !!cfg?.abstract;
        const allFields = this.getAllFields(cfg);
        const currentFields = this.getFieldTypes(cfg?.fields || {});

        const parent = cfg?.parent ? g.resolveCanonicalTypeName(cfg.parent) : undefined;

        const extendsClause = parent ? ` extends ${parent}` : '';
        const superFields = Array.from(allFields.keys()).filter(fn => !currentFields.has(fn));

        const typeId = g.getTypeIdInHierarchy(name);
        const rootForChildren = g.getRootTypeFor(name) || name;
        const children = g.getConcreteTypesInHierarchy(rootForChildren);
        const needsTypeIdMethod = parent || g.isInTypeHierarchy(name) || (children.length > 0 && name !== "Message");

        const doc = (cfg as any).doc;
        const docLines: string[] = [];
        if (doc) {
            (doc as string).split('\n').forEach(line => docLines.push(` * ${line}`));
        } else {
            docLines.push(` * Represents the ${isAbstract ? 'abstract ' : ''}${name} structure.`);
        }

        if (!isAbstract && typeId !== undefined && typeId >= 0) {
            if (docLines.length > 0) docLines.push(` *`);
            docLines.push(` * @aetherTypeId ${typeId}`);
        }

        sb.push(`/**`);
        docLines.forEach(line => sb.push(line));
        sb.push(` */`);

        sb.push(`export ${isAbstract ? 'abstract class' : 'class'} ${name}${extendsClause} implements ToString {`);

        if (isAbstract) {
            this.generateAbstractGettersForCommonConstants(sb, children);
        }

        currentFields.forEach((typeInfo, fieldName) => sb.push(`    public readonly ${fieldName}: ${typeInfo.getFieldType()};`));

        const currentConstants = this.getConstantTypes(cfg?.constants);
        this.generateConstantGetters(sb, currentConstants, !!parent);

        if (needsTypeIdMethod) {
            if (parent || g.isInTypeHierarchy(name)) {
                sb.push(`    public ${parent ? 'override ' : ''}getAetherTypeId(): number {`);
                if (typeId !== undefined) sb.push(`        return ${typeId};`);
                else sb.push(`        return -1;`);
                sb.push(`    }`);
            } else if (children.length > 0 && name !== "Message") {
                if (isAbstract) sb.push(`    public abstract getAetherTypeId(): number;`);
                else sb.push(`    public getAetherTypeId(): number { return 0; }`);
            }
        }

        const metaBodyImplName = `${name}MetaBodyImpl`;
        if (!isAbstract) {
            this.generateMetaImpl(name, metaBodyImplName, true, allFields);
            sb.push(`\n    public static readonly META_BODY: FastMetaType<${name}> = new Impl.${metaBodyImplName}();`);
        }

        const hierarchyHasIds = (rootForChildren && g.getTypeIdInHierarchy(rootForChildren) !== undefined) || children.some(c => g.getTypeIdInHierarchy(c) !== undefined);
        const needsMeta = isAbstract || hierarchyHasIds || (typeId !== undefined && typeId >= 0);

        if (needsMeta) {
            const metaImplName = `${name}MetaImpl`;
            this.generateMetaImpl(name, metaImplName, false, allFields, isAbstract, children);
            sb.push(`\n    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();`);
        } else if (!isAbstract) {
            sb.push(`\n    public static readonly META: FastMetaType<${name}> = ${name}.META_BODY;`);
        } else {
            const metaImplName = `${name}MetaImpl`;
            this.generateMetaImpl(name, metaImplName, false, allFields, isAbstract, children);
            sb.push(`\n    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();`);
        }

        this.generateStructureConstructor(sb, name, allFields, currentFields, superFields, parent);
        this.generateFieldGetters(sb, currentFields);
        this.generateHashCodeAndEquals(sb, name, allFields, isAbstract);
        this.generateStructureToString(sb, name, allFields, this.getAllConstants(cfg), isAbstract);

        sb.push(`}\n`);
        return sb.join('\n');
    }

    /**
     * Generates the constructor for a structure.
     * @param sb - The string array to append code lines to.
     * @param name - The name of the structure.
     * @param allFields - A Map of all fields (including parent's).
     * @param currentFields - A Map of fields defined on this structure.
     * @param superFields - An array of field names to pass to `super()`.
     * @param parent - The name of the parent class, if any.
     */
    private generateStructureConstructor(sb: string[], name: string, allFields: Map<string, TypeInfo>, currentFields: Map<string, TypeInfo>, superFields: string[], parent: string | undefined): void {
        const constructorParams = Array.from(allFields.entries()).map(([fn, ti]) => `${fn}: ${ti.getArgumentType()}`).join(', ');

        sb.push(`\n    /**`);
        sb.push(`     * Creates an instance of ${name}.`);
        allFields.forEach((ti, fn) => {
            sb.push(`     * @param ${fn} - ${ti.getArgumentType()}`);
        });
        sb.push(`     */`);

        sb.push(`    constructor(${constructorParams}) {`);
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
    }

    /**
     * Generates the `toString()` method for a structure.
     * @param sb - The string array to append code lines to.
     * @param name - The name of the structure.
     * @param allFields - A Map of all fields (including parent's).
     * @param allConstants - A Map of all constants (including parent's).
     * @param isAbstract - True if the structure is abstract.
     */
    private generateStructureToString(sb: string[], name: string, allFields: Map<string, TypeInfo>, allConstants: Map<string, ConstantInfo>, isAbstract: boolean): void {
        if (isAbstract) {
            sb.push(`    public abstract toString(result: AString): AString;`);
        } else {
            sb.push(`    public toString(result: AString): AString {`);
            sb.push(`        ${name}.META.metaToString(this, result);`);
            sb.push(`        return result;`);
            sb.push(`    }`);
        }
    }

    /**
     * Generates the implementation class for a META field and adds it to the generator logic.
     * @param name - The name of the structure.
     * @param implName - The name of the implementation class to generate (e.g., "MyStructMetaImpl").
     * @param isMetaBody - True if this is the `META_BODY` with concrete logic.
     * @param fields - A Map of all fields for serialization.
     * @param isAbstract - True if the structure is abstract.
     * @param children - An array of concrete child type names (for dispatch).
     */
    private generateMetaImpl(name: string, implName: string, isMetaBody: boolean, fields: Map<string, TypeInfo>, isAbstract: boolean = false, children: string[] = []): void {
        const sbImpl: string[] = [];
        const g = this.generatorLogic;

        const useSCtxSerialize = !(isMetaBody && fields.size === 0) && (isMetaBody || children.length > 0);
        const useSCtxDeserialize = !(isMetaBody && fields.size === 0) && (isMetaBody || children.length > 0);
        const sCtx = useSCtxSerialize ? g.getUniqueVarName('sCtx') : g.getUniqueVarName('_sCtx');
        const sCtxDeser = useSCtxDeserialize ? (useSCtxSerialize ? sCtx : g.getUniqueVarName('sCtx')) : g.getUniqueVarName('_sCtx');
        const objVar = g.getUniqueVarName('obj');
        const outVar = g.getUniqueVarName('out'); const inVar = g.getUniqueVarName('in_');

        sbImpl.push(`export class ${implName} implements FastMetaType<${name}> {`);

        sbImpl.push(`    serialize(${sCtx}: FastFutureContext, ${objVar}: ${name}, ${outVar}: DataOut): void {`);
        if (isMetaBody) {
            const serializeLines: string[] = [];
            const fieldsForSerialize = new Map(Array.from(fields.entries()).map(([k, v]) => [`${objVar}.${k}`, v]));
            g.generateSerializerFields(serializeLines, sCtx, outVar, fieldsForSerialize);
            sbImpl.push(serializeLines.map(l => `        ${l}`).join('\n'));
        } else {
            const rootType = g.getRootTypeFor(name);
            const actualChildren = g.getConcreteTypesInHierarchy(rootType || name);
            const needsDispatch = isAbstract || (g.isInTypeHierarchy(name) && actualChildren.length > 0 && name !== "Message");

            if (needsDispatch) {
                sbImpl.push(`        const typeId = typeof (${objVar} as any).getAetherTypeId === 'function' ? ${objVar}.getAetherTypeId() : -1;`);
                sbImpl.push(`        if (typeId === undefined || typeId < 0) throw new Error(\`Cannot serialize '${name}' with invalid type id \${typeId}\`);`);
                sbImpl.push(`        ${outVar}.writeByte(typeId);`);
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(`            case ${selfId}: (${name} as any).META_BODY.serialize(${sCtx}, ${objVar} as any as ${name}, ${outVar}); break;`);
                    }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (typeId !== undefined && (isAbstract || childName !== name)) {
                        sbImpl.push(`            case ${typeId}: (${childName} as any).META_BODY.serialize(${sCtx}, ${objVar} as any as ${childName}, ${outVar}); break;`);
                    }
                });
                sbImpl.push(`            default: throw new Error(\`Cannot serialize '${name}' with unknown type id \${typeId}\`);`);
                sbImpl.push(`        }`);
            } else {
                if (!isAbstract) sbImpl.push(`        (${name} as any).META_BODY.serialize(${sCtx}, ${objVar}, ${outVar});`);
                else sbImpl.push(`        throw new Error(\`Cannot serialize abstract type '${name}' without children or dispatch logic.\`);`);
            }
        }
        sbImpl.push(`    }`);

        sbImpl.push(`    deserialize(${sCtxDeser}: FastFutureContext, ${inVar}: DataIn): ${name} {`);
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
            sbImpl.push(deserializeLines.map(l => `        ${l}`).join('\n'));
            sbImpl.push(`        return new ${name}(${constructorParams.join(', ')});`);
        } else {
            const rootType = g.getRootTypeFor(name);
            const actualChildren = g.getConcreteTypesInHierarchy(rootType || name);
            const needsDispatch = isAbstract || (g.isInTypeHierarchy(name) && actualChildren.length > 0 && name !== "Message");
            if (needsDispatch) {
                sbImpl.push(`        const typeId = ${inVar}.readUByte();`);
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(`            case ${selfId}: return (${name} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar}) as any as ${name};`);
                    }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (typeId !== undefined && (isAbstract || childName !== name)) {
                        sbImpl.push(`            case ${typeId}: return (${childName} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar}) as any as ${name};`);
                    }
                });
                sbImpl.push(`            default: throw new Error(\`Bad type id \${typeId} for type '${name}'\`);`);
                sbImpl.push(`        }`);
            } else {
                if (!isAbstract) sbImpl.push(`        return (${name} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar});`);
                else sbImpl.push(`        throw new Error(\`Cannot deserialize abstract type '${name}' without children or dispatch logic.\`);`);
            }
        }
        sbImpl.push(`    }`);

        if (isMetaBody) {
            sbImpl.push(`    metaHashCode(obj: ${name} | null | undefined): number {`);
            sbImpl.push(`        if (obj === null || obj === undefined) return 0;`);
            sbImpl.push(`        let hash = 17;`);
            fields.forEach((typeInfo, fieldName) => {
                const fieldMetaAccessor = g.generateAccessMeta(typeInfo);
                sbImpl.push(`        hash = 37 * hash + ${fieldMetaAccessor}.metaHashCode(obj.${fieldName});`);
            });
            sbImpl.push(`        return hash | 0;`);
            sbImpl.push(`    }`);

            sbImpl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`);
            sbImpl.push(`        if (v1 === v2) return true;`);
            sbImpl.push(`        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);`);
            sbImpl.push(`        if (v2 === null || v2 === undefined || !(v2 instanceof ${name})) return false;`);
            fields.forEach((typeInfo, fieldName) => {
                const fieldMetaAccessor = g.generateAccessMeta(typeInfo);
                sbImpl.push(`        if (!${fieldMetaAccessor}.metaEquals(v1.${fieldName}, v2.${fieldName})) return false;`);
            });
            sbImpl.push(`        return true;`);
            sbImpl.push(`    }`);

            const cfg = g.findTypeDefinition(name);
            const allConstants = cfg ? this.getAllConstants(cfg) : new Map<string, ConstantInfo>();

            sbImpl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void {`);
            sbImpl.push(`        if (obj === null || obj === undefined) { res.add('null'); return; }`);
            const simpleClassName = name.replace(/.*\./, '');
            sbImpl.push(`        res.add('${simpleClassName}(');`);

            let isFirstField = true;
            fields.forEach((_, fieldName) => {
                if (!isFirstField) sbImpl.push(`        res.add(', ');`);
                sbImpl.push(`        res.add('${fieldName}:').add(obj.${fieldName});`);
                isFirstField = false;
            });

            allConstants.forEach((constInfo, constName) => {
                if (!isFirstField) sbImpl.push(`        res.add(', ');`);
                sbImpl.push(`        res.add('${constName}:').add(obj.${constInfo.getGetterName()}());`);
                isFirstField = false;
            });

            sbImpl.push(`        res.add(')');`);
            sbImpl.push(`    }`);

        } else {
            const rootType = g.getRootTypeFor(name);
            const actualChildren = g.getConcreteTypesInHierarchy(rootType || name);
            const needsDispatch = isAbstract || (g.isInTypeHierarchy(name) && actualChildren.length > 0 && name !== "Message");

            if (needsDispatch) {
                sbImpl.push(`    metaHashCode(obj: ${name} | null | undefined): number {`);
                sbImpl.push(`        if (obj === null || obj === undefined) return 0;`);
                sbImpl.push(`        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;`);
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                         sbImpl.push(`            case ${selfId}: return (${name} as any).META_BODY.metaHashCode(obj as any as ${name});`);
                    }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (typeId !== undefined && (isAbstract || childName !== name)) {
                        sbImpl.push(`            case ${typeId}: return (${childName} as any).META.metaHashCode(obj as any as ${childName});`);
                    }
                });
                sbImpl.push(`            default: throw new Error(\`Cannot hashCode '${name}' with unknown type id \${typeId}\`);`);
                sbImpl.push(`        }`);
                sbImpl.push(`    }`);

                sbImpl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`);
                sbImpl.push(`        if (v1 === v2) return true;`);
                sbImpl.push(`        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);`);
                sbImpl.push(`        if (v2 === null || v2 === undefined) return false;`);

                const v1TypeId = `(v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1`;
                const v2TypeId = `(v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1`;
                sbImpl.push(`        const typeId1 = ${v1TypeId};`);
                sbImpl.push(`        const typeId2 = ${v2TypeId};`);
                sbImpl.push(`        if (typeId1 === -1 || typeId1 !== typeId2) return false;`);
                sbImpl.push(`        switch(typeId1) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(`            case ${selfId}: return (${name} as any).META_BODY.metaEquals(v1 as any as ${name}, v2);`);
                    }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (typeId !== undefined && (isAbstract || childName !== name)) {
                        sbImpl.push(`            case ${typeId}: return (${childName} as any).META.metaEquals(v1 as any as ${childName}, v2);`);
                    }
                });
                sbImpl.push(`            default: throw new Error(\`Cannot equals '${name}' with unknown type id \${typeId1}\`);`);
                sbImpl.push(`        }`);
                sbImpl.push(`    }`);

                sbImpl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void {`);
                sbImpl.push(`        if (obj === null || obj === undefined) { res.add('null'); return ; }`);
                sbImpl.push(`        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;`);
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                         sbImpl.push(`            case ${selfId}: (${name} as any).META_BODY.metaToString(obj as any as ${name}, res); break;`);
                    }
                }
                actualChildren.forEach(childName => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (typeId !== undefined && (isAbstract || childName !== name)) {
                        sbImpl.push(`            case ${typeId}: (${childName} as any).META.metaToString(obj as any as ${childName}, res);break;`);
                    }
                });
                sbImpl.push(`            default: throw new Error(\`Cannot toString '${name}' with unknown type id \${typeId}\`);`);
                sbImpl.push(`        }`);
                sbImpl.push(`    }`);

            } else {
                if (!isAbstract) {
                    sbImpl.push(`    metaHashCode(obj: ${name} | null | undefined): number { return (${name} as any).META_BODY.metaHashCode(obj); }`);
                    sbImpl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return (${name} as any).META_BODY.metaEquals(v1, v2); }`);
                    sbImpl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void { (${name} as any).META_BODY.metaToString(obj, res); }`);
                } else {
                    sbImpl.push(`    metaHashCode(obj: ${name} | null | undefined): number { return (obj && typeof obj.hashCode === 'function') ? obj.hashCode() : 0; }`);
                    sbImpl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return (v1 && typeof v1.equals === 'function') ? v1.equals(v2) : v1 === v2; }`);
                    sbImpl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void { res.add(String(obj));  }`);
                }
            }
        }

        sbImpl.push(FAST_META_TYPE_IMPL_STUB_METHODS.replace(/: any/g, `: ${name}`).replace(/: any {/g, `: ${name} {`));

        sbImpl.push(`}`);

        g.allImplCode.push(sbImpl.join('\n'));
    }

    /**
     * Generates the code for a DSL enum.
     * @param name - The name of the enum.
     * @param defn - The TypeDefinition for the enum.
     * @returns The generated TypeScript code as a string.
     */
    private generateEnum(name: string, defn: TypeDefinition): string {
        const values = defn.enum as string[];
        const sb: string[] = [];

        const doc = (defn as any).doc;
        if (doc) {
            sb.push(`/**`);
            (doc as string).split('\n').forEach(line => sb.push(` * ${line}`));
            sb.push(` */`);
        }

        sb.push(`export enum ${name} { ${values.map(v => `${v} = '${v}'`).join(', ')} }\n`);
        sb.push(`export namespace ${name} {`);

        const metaImplName = `${name}MetaImpl`;
        const sbImpl: string[] = [];
        sbImpl.push(`export class ${metaImplName} implements FastMetaType<${name}> {`);
        sbImpl.push(`    serialize(_sCtx: FastFutureContext, obj: ${name}, out: DataOut): void {`);
        sbImpl.push(`        const values = Object.keys(${name}).filter(k => isNaN(parseInt(k)));`);
        sbImpl.push(`        out.writeByte(values.indexOf(obj as string));`);
        sbImpl.push(`    }`);
        sbImpl.push(`    deserialize(_sCtx: FastFutureContext, in_: DataIn): ${name} {`);
        sbImpl.push(`        const ordinal = in_.readUByte();`);
        sbImpl.push(`        const keys = Object.keys(${name}).filter(k => isNaN(parseInt(k)));`);
        sbImpl.push(`        if (ordinal < 0 || ordinal >= keys.length) throw new Error(\`Invalid ordinal \${ordinal} for enum ${name}\`);`);
        sbImpl.push(`        return ${name}[keys[ordinal] as keyof typeof ${name}] as ${name};`);
        sbImpl.push(`    }`);

        const stringMetaAccessor = this.generatorLogic.generateAccessMeta(new TypeInfo("string"));
        sbImpl.push(`    metaHashCode(obj: ${name} | null | undefined): number { return ${stringMetaAccessor}.metaHashCode(obj as string); }`);
        sbImpl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return ${stringMetaAccessor}.metaEquals(v1 as string, v2); }`);

        sbImpl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void {`);
        sbImpl.push(`        res.add(obj as string);`);
        sbImpl.push(`    }`);

        sbImpl.push(FAST_META_TYPE_IMPL_STUB_METHODS.replace(/: any/g, `: ${name}`).replace(/: any {/g, `: ${name} {`));

        sbImpl.push(`}`);

        this.generatorLogic.allImplCode.push(sbImpl.join('\n'));

        sb.push(`    export const META: FastMetaType<${name}> = new Impl.${metaImplName}();`);
        sb.push(`}\n`);
        return sb.join('\n');
    }

    /**
     * Generates the code for a DSL stream type.
     * @param name - The name of the stream class.
     * @param cfg - The TypeDefinition for the stream.
     * @returns The generated TypeScript code as a string.
     */
    private generateStreamClass(name: string, cfg: TypeDefinition): string {
        const sb: string[] = [];
        const hasApi = cfg.stream?.api as string;

        const apiType = hasApi ? this.generatorLogic.resolveCanonicalTypeName(hasApi) : undefined;
        const hasCrypto = !!cfg.stream?.crypto;
        const apiRemoteType = apiType ? `${apiType}Remote` : 'unknown';

        const doc = (cfg as any).doc;
        if (doc) {
            sb.push(`/**`);
            (doc as string).split('\n').forEach(line => sb.push(` * ${line}`));
            sb.push(` */`);
        }

        sb.push(`export class ${name} implements ToString {`);
        sb.push(`    public readonly data: Uint8Array;`);

        sb.push(`    /**`);
        sb.push(`     * Creates an instance of ${name}.`);
        sb.push(`     * @param data - The raw byte data for this stream.`);
        sb.push(`     */`);
        sb.push(`    constructor(data: Uint8Array) { this.data = data; }\n`);

        const metaImplName = `${name}MetaImpl`;
        const sbImpl: string[] = [];
        sbImpl.push(`export class ${metaImplName} implements FastMetaType<${name}> {`);
        sbImpl.push(`    serialize(ctx: FastFutureContext, obj: ${name}, out: DataOut): void { FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out); }`);
        sbImpl.push(`    deserialize(ctx: FastFutureContext, in_: DataIn): ${name} { return new ${name}(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_)); }`);

        const byteArrayMetaAccessor = this.generatorLogic.generateAccessMeta(new TypeInfo("byte[]"));
        sbImpl.push(`    metaHashCode(obj: ${name} | null | undefined): number { return ${byteArrayMetaAccessor}.metaHashCode(obj?.data); }`);
        sbImpl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return ${byteArrayMetaAccessor}.metaEquals(v1?.data, (v2 instanceof ${name}) ? v2.data : v2); }`);

        sbImpl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void {`);
        sbImpl.push(`        if (obj === null || obj === undefined) { res.add('null'); return; }`);
        sbImpl.push(`        res.add('${name}(').add('data:').add(obj.data).add(')');`);
        sbImpl.push(`    }`);

        sbImpl.push(FAST_META_TYPE_IMPL_STUB_METHODS.replace(/: any/g, `: ${name}`).replace(/: any {/g, `: ${name} {`));

        sbImpl.push(`}`);
        this.generatorLogic.allImplCode.push(sbImpl.join('\n'));

        sb.push(`    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();\n`);

        sb.push(`    public toString(result: AString): AString {`);
        sb.push(`        ${name}.META.metaToString(this, result);`);
        sb.push(`        return result;`);
        sb.push(`    }`);

        if (apiType && hasCrypto) {
            sb.push(`\n    public accept(context: FastFutureContext, provider: BytesConverter, localApi: ${apiType}): void {`);
            sb.push(`        const decryptedData = provider(this.data);`);
            sb.push(`        const dataInStatic = new DataInOutStatic(decryptedData);`);
            sb.push(`        if (!(${apiType} as any).META) throw new Error(\`META not found for API type ${apiType}\`);`);
            sb.push(`        (${apiType} as any).META.makeLocal_fromDataIn(context, dataInStatic, localApi);`);
            sb.push(`    }`);
        } else if (apiType) {
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

        if (apiType && hasCrypto) {
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
        } else if (apiType) {
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
     * Generates concrete getter methods for a structure's fields.
     * @param sb - The string array to append code lines to.
     * @param fields - A Map of all fields to generate getters for.
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
        sb.push(``);
    }

    /**
     * Generates hashCode and equals methods for a structure.
     * @param sb - The string array to append code lines to.
     * @param name - The name of the structure.
     * @param allFields - A Map of all fields (including parent's).
     * @param isAbstract - True if the structure is abstract.
     */
    private generateHashCodeAndEquals(sb: string[], name: string, allFields: Map<string, TypeInfo>, isAbstract: boolean): void {
        if (isAbstract) {
            sb.push(`\n    /**
     * Calculates a hash code for a static instance of ${name}.
     * @param {${name} | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */`);
            sb.push(`    public static staticHashCode(obj: ${name} | null | undefined): number {`);
            sb.push(`        if (obj === null || obj === undefined) return 0;`);
            sb.push(`        return (obj.constructor as any).META.metaHashCode(obj);`);
            sb.push(`    }`);

            sb.push(`\n    /**
     * Compares a static instance of ${name} with another object.
     * @param {${name} | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */`);
            sb.push(`    public static staticEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`);
            sb.push(`        if (v1 === v2) return true;`);
            sb.push(`        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);`);
            sb.push(`        return (v1.constructor as any).META.metaEquals(v1, v2);`);
            sb.push(`    }`);

            sb.push(`\n    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */`);
            sb.push(`    public abstract hashCode(): number;`);

            sb.push(`\n    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */`);
            sb.push(`    public abstract equals(other: any): boolean;`);

        } else {
            sb.push(`\n    /**
     * Calculates a hash code for a static instance of ${name}.
     * @param {${name} | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */`);
            sb.push(`    public static staticHashCode(obj: ${name} | null | undefined): number {`);
            sb.push(`        return ${name}.META.metaHashCode(obj);`);
            sb.push(`    }`);

            sb.push(`\n    /**
     * Compares a static instance of ${name} with another object.
     * @param {${name} | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */`);
            sb.push(`    public static staticEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`);
            sb.push(`        return ${name}.META.metaEquals(v1, v2);`);
            sb.push(`    }`);

            sb.push(`\n    /**
     * Calculates a hash code for this object.
     * @returns {number} The hash code.
     */`);
            sb.push(`    public hashCode(): number {`);
            sb.push(`        return ${name}.staticHashCode(this);`);
            sb.push(`    }`);

            sb.push(`\n    /**
     * Checks if this object is equal to another.
     * @param {any} other - The object to compare with.
     * @returns {boolean} True if the objects are equal, false otherwise.
     */`);
            sb.push(`    public equals(other: any): boolean {`);
            sb.push(`        return ${name}.staticEquals(this, other);`);
            sb.push(`    }`);
        }
    }
}
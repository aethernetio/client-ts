import { isPrimitive, isArray } from "util";
import { join } from "path";
import { get } from "http";
import { constants } from "buffer";
import {
    GeneratorLogic,
    TypeDefinition,
    TypeInfo,
    ConstantInfo,
    FAST_META_TYPE_IMPL_STUB_METHODS,
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
    constructor(generatorLogic: GeneratorLogic) {
        this.generatorLogic = generatorLogic;
    }

    /**
     * Generates the code for a single type definition.
     * @param name - The name of the type.
     * @param defn - The definition of the type.
     * @returns The generated TypeScript code as a string.
     */

    generateType(name: string, defn: TypeDefinition): string {
        if (defn?.stream) return this.generateStreamClass(name, defn);
        if (defn?.multiplexor)
            return this.generateMultiplexorClass(name, defn);
        if (defn?.enum) return this.generateEnum(name, defn);
        if (defn?.syncmap) return "";
        return this.generateStructure(name, defn || {});
    }

    private getMultiplexorChannels(cfg: TypeDefinition): Array<{
        name: string;
        paramName: string;
        type: string;
        isSyncMap: boolean;
    }> {
        const channels = cfg.multiplexor?.channels;
        if (!Array.isArray(channels) || channels.length === 0)
            throw new Error("Multiplexor must declare at least one channel");


        return channels.map((rawName) => {
            const name =
                this.generatorLogic.resolveCanonicalTypeName(rawName);
            const defn = this.generatorLogic.findTypeDefinition(name);
            const paramName =
                `channel_${name.replace(/[^a-zA-Z0-9_]/g, "_")}`;

            if (!defn?.syncmap)
                return {
                    name,
                    paramName,
                    type: "MetaContext",
                    isSyncMap: false,
                };


            const key = this.generatorLogic.resolveCanonicalTypeName(
                defn.syncmap.key,
            );
            const value = this.generatorLogic.resolveCanonicalTypeName(
                defn.syncmap.value,
            );
            return {
                name,
                paramName,
                type:
                    `SyncMapChannel<${new TypeInfo(key).getArgumentType()}, ` +
                    `${new TypeInfo(value).getArgumentType()}>`,
                isSyncMap: true,
            };
        });
    }



    /**
     * Parses the 'fields' map from a TypeDefinition.
     * @param fields - The 'fields' object from the DSL.
     * @returns A Map of field names to their TypeInfo.
     */
    private getFieldTypes(fields: {
        [fn: string]: any;
    }): Map<string, TypeInfo> {
        const fieldTypes: Map<string, TypeInfo> = new Map();
        Object.entries(fields || {}).forEach(([fn, type]) => {
            if (typeof type === "object" && type !== null)
                throw new Error(
                    `Anonymous types cannot be validated this way.`,
                );

            const referencedName = type as string;
            const canonicalName =
                this.generatorLogic.resolveCanonicalTypeName(referencedName);
            fieldTypes.set(fn, new TypeInfo(canonicalName));
        });
        return fieldTypes;
    }

    private generateMultiplexorClass(
        name: string,
        cfg: TypeDefinition,
    ): string {
        const channels = this.getMultiplexorChannels(cfg);
        const params = channels
            .map((c) => `${c.paramName}: ${c.type}`)
            .join(", ");
        const sb: string[] = [];

        sb.push(`export class ${name} implements ToString {`);
        sb.push(`    public data: Uint8Array;`);
        sb.push(`    constructor(data: Uint8Array = new Uint8Array(0)) { this.data = data; }`);
        sb.push(`    public asIn(): any { return this as any; }`);
        sb.push(`    public static readonly In = class In extends ${name} {`);
        sb.push(`        constructor(data: Uint8Array, public readonly parentContext: MetaContext) { super(data); }`);
        sb.push(`        public readAll(${params}): void {`);
        sb.push(`            const input = new DataInOutStatic(this.data);`);
        sb.push(`            while (input.isReadable()) {`);
        sb.push(`                const channelId = Number(DeserializerPackNumber.INSTANCE.put(input));`);
        sb.push(`                if (channelId < 0 || channelId >= ${channels.length}) throw new Error("Unknown multiplexor channel: " + channelId);`);
        sb.push(`                const channelData = FastMeta.META_ARRAY_BYTE.deserialize(this.parentContext, input);`);
        sb.push(`                switch (channelId) {`);
        channels.forEach((c, i) => {
            sb.push(`                    case ${i}:`);
            sb.push(c.isSyncMap
                ? `                        ${c.paramName}.receiveFromMultiplexor(channelData);`
                : `                        ${c.paramName}.sendToRemote(channelData);`);
            sb.push(`                        break;`);
        });
        sb.push(`                }`);
        sb.push(`            }`);
        sb.push(`        }`);
        sb.push(`    };`);
        sb.push(`    public static readonly Out = class Out extends ${name} {`);
        sb.push(`        private readonly channelBuffers: DataInOut[] = Array.from({ length: ${channels.length} }, () => new DataInOut());`);
        sb.push(`        constructor() { super(); }`);
        sb.push(`        public writeAll(${params}): void {`);
        channels.forEach((c, i) =>
            sb.push(`            ${c.paramName}.onFlushData((data) => this.writeToChannel(${i}, data));`),
        );
        sb.push(`        }`);
        sb.push(`        public writeToChannel(channelId: number, data: Uint8Array): void {`);
        sb.push(`            if (channelId < 0 || channelId >= ${channels.length} || data.length === 0) return;`);
        sb.push(`            this.channelBuffers[channelId].write(data);`);
        sb.push(`        }`);
        sb.push(`        public toByteArray(): Uint8Array {`);
        sb.push(`            const packet = new DataInOut();`);
        sb.push(`            for (let i = 0; i < this.channelBuffers.length; i++) {`);
        sb.push(`                const channelData = this.channelBuffers[i].toArray();`);
        sb.push(`                if (channelData.length === 0) continue;`);
        sb.push(`                SerializerPackNumber.INSTANCE.put(packet, i);`);
        sb.push(`                FastMeta.META_ARRAY_BYTE.serialize(FastFutureContextStub, channelData, packet);`);
        sb.push(`            }`);
        sb.push(`            return packet.toArray();`);
        sb.push(`        }`);
        sb.push(`    };`);

        const metaImplName = `${name}MetaImpl`;
        const impl: string[] = [];
        impl.push(`export class ${metaImplName} implements FastMetaType<${name}> {`);
        impl.push(`    serialize(ctx: MetaContext, obj: ${name}, out: DataOut): void {`);
        impl.push(`        const data = obj instanceof ${name}.Out ? (obj as any).toByteArray() : obj.data;`);
        impl.push(`        FastMeta.META_ARRAY_BYTE.serialize(ctx, data, out);`);
        impl.push(`    }`);

        impl.push(`    deserialize(ctx: MetaContext, in_: DataIn): ${name} {`);
        impl.push(`        try {`);
        impl.push(`            return new ${name}.In(FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_), ctx) as any as ${name};`);
        impl.push(`        } catch (e) {`);
        impl.push(`            throw new SecurityConnectionDropException("Multiplexor error: " + (e instanceof Error ? e.message : String(e)));`);
        impl.push(`        }`);
        impl.push(`    }`);

        impl.push(`    metaHashCode(obj: ${name} | null | undefined): number { return FastMeta.META_ARRAY_BYTE.metaHashCode(obj?.data); }`);
        impl.push(`    metaEquals(v1: ${name} | null | undefined, v2: any): boolean { return FastMeta.META_ARRAY_BYTE.metaEquals(v1?.data, v2 instanceof ${name} ? v2.data : v2); }`);
        impl.push(`    metaToString(obj: ${name} | null | undefined, res: AString): void { res.add(obj ? '${name}(' : 'null'); if (obj) res.add('data:').add(obj.data).add(')'); }`);
        impl.push(
            FAST_META_TYPE_IMPL_STUB_METHODS
                .replace(/: any/g, `: ${name}`)
                .replace(/: any {/g, `: ${name} {`),
        );
        impl.push(`}`);
        this.generatorLogic.allImplCode.push(impl.join("\n"));

        sb.push(`    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();`);
        sb.push(`    public toAString(result: AString): AString { ${name}.META.metaToString(this, result); return result; }`);
        sb.push(`}`);
        return sb.join("\n");
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
    private getAllFieldsRecursive(
        res: Map<string, TypeInfo>,
        cfg: TypeDefinition,
    ): void {
        if (cfg?.parent) {
            const parentNameRaw = cfg.parent as string;
            const parentName =
                this.generatorLogic.resolveCanonicalTypeName(parentNameRaw);
            const parentCfg =
                this.generatorLogic.findTypeDefinition(parentName);
            if (parentCfg) this.getAllFieldsRecursive(res, parentCfg);
        }
        if (cfg?.fields)
            this.getFieldTypes(cfg.fields).forEach((v, k) => res.set(k, v));
    }

    /**
     * Parses the 'constants' map from a TypeDefinition.
     * @param cfgConstants - The 'constants' object from the DSL.
     * @returns A Map of constant names to their ConstantInfo.
     */
    private getConstantTypes(
        cfgConstants: { [fn: string]: any } | undefined,
    ): Map<string, ConstantInfo> {
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
    private getAllConstantsRecursive(
        res: Map<string, ConstantInfo>,
        cfg: TypeDefinition,
    ): void {
        if (cfg?.parent) {
            const parentNameRaw = cfg.parent as string;
            const parentName =
                this.generatorLogic.resolveCanonicalTypeName(parentNameRaw);
            const parentCfg =
                this.generatorLogic.findTypeDefinition(parentName);
            if (parentCfg) this.getAllConstantsRecursive(res, parentCfg);
        }
        if (cfg?.constants)
            this.getConstantTypes(cfg.constants).forEach((v, k) =>
                res.set(k, v),
            );
    }

    /**
     * Generates abstract getters in a parent class for constants that are
     * common to all direct concrete children.
     * @param sb - The string array to append code lines to.
     * @param children - An array of concrete child type names.
     */

    private generateAbstractGettersForCommonConstants(
        sb: string[],
        children: string[],
        generatedGetterNames: Set<string>,
    ): void {
        if (children.length === 0) return;

        const allChildrenConstants = children.map((childName) => {
            const childCfg = this.generatorLogic.findTypeDefinition(childName);
            return childCfg
                ? this.getAllConstants(childCfg)
                : new Map<string, ConstantInfo>();
        });

        if (allChildrenConstants.length === 0) return;

        const commonConstants = new Map<string, ConstantInfo>(
            allChildrenConstants[0],
        );

        allChildrenConstants.slice(1).forEach((childConstants) => {
            for (const [name, constInfo] of commonConstants.entries()) {
                const otherConst = childConstants.get(name);
                if (!otherConst || !constInfo.equals(otherConst)) {
                    commonConstants.delete(name);
                }
            }
        });

        commonConstants.forEach((constInfo) => {
            const getterName = constInfo.getGetterName();
            if (generatedGetterNames.has(getterName)) return;

            generatedGetterNames.add(getterName);
            sb.push(
                `\n    public abstract ${getterName}(): ${constInfo.getGetterType()};`,
            );
        });
    }


    private generateAbstractGettersForCommonFields(
        sb: string[],
        children: string[],
        cfg: TypeDefinition,
        generatedGetterNames: Set<string>,
    ): void {
        if (!cfg.abstract || children.length === 0) return;

        const allChildrenFields = children.map((childName) => {
            const childCfg =
                this.generatorLogic.findTypeDefinition(childName);
            return childCfg
                ? this.getAllFields(childCfg)
                : new Map<string, TypeInfo>();
        });

        if (allChildrenFields.length === 0) return;

        const commonFields = new Map<string, TypeInfo>(
            allChildrenFields[0],
        );

        allChildrenFields.slice(1).forEach((childFields) => {
            for (const [fieldName, typeInfo] of commonFields) {
                const otherType = childFields.get(fieldName);
                if (
                    !otherType ||
                    typeInfo.isArray !== otherType.isArray ||
                    typeInfo.javaType !== otherType.javaType
                ) {
                    commonFields.delete(fieldName);
                }
            }
        });

        commonFields.forEach((typeInfo, fieldName) => {
            const isBoolean =
                typeInfo.javaType === "boolean" &&
                !typeInfo.isArray &&
                !typeInfo.isNullable;
            const getterName =
                `${isBoolean ? "is" : "get"}` +
                fieldName.charAt(0).toUpperCase() +
                fieldName.slice(1);

            if (generatedGetterNames.has(getterName)) return;

            generatedGetterNames.add(getterName);
            sb.push(
                `\n    public abstract ${getterName}(): ${typeInfo.getGetterType()};`,
            );
        });
    }



    /**
     * Generates concrete getter methods for a type's constants.
     * @param sb - The string array to append code lines to.
     * @param constants - A Map of constants defined on the current type.
     * @param hasParent - True if this type extends another.
     */

    private generateConstantGetters(
        sb: string[],
        constants: Map<string, ConstantInfo>,
        hasParent: boolean,
        generatedGetterNames: Set<string>,
    ): void {
        constants.forEach((constInfo) => {
            const getterName = constInfo.getGetterName();
            if (generatedGetterNames.has(getterName)) return;

            generatedGetterNames.add(getterName);
            const override = hasParent ? "override " : "";
            sb.push(
                `\n    public ${override}${getterName}(): ${constInfo.getGetterType()} {`,
            );
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

        const parent = cfg?.parent
            ? g.resolveCanonicalTypeName(cfg.parent)
            : undefined;

        const extendsClause = parent ? ` extends ${parent}` : "";
        const superFields = Array.from(allFields.keys()).filter(
            (fn) => !currentFields.has(fn),
        );


        const typeId = g.getTypeIdInHierarchy(name);
        const hierarchyRoot = g.getRootTypeFor(name) || name;
        const children = g.getConcreteTypesInHierarchy(name);



        const needsTypeIdMethod =
            parent ||
            g.isInTypeHierarchy(name) ||
            children.length > 0;



        const doc = (cfg as any).doc;
        const docLines: string[] = [];
        if (doc) {
            (doc as string)
                .split("\n")
                .forEach((line) => docLines.push(` * ${line}`));
        } else {
            docLines.push(
                ` * Represents the ${isAbstract ? "abstract " : ""}${name} structure.`,
            );
        }

        if (!isAbstract && typeId !== undefined && typeId >= 0) {
            if (docLines.length > 0) docLines.push(` *`);
            docLines.push(` * @aetherTypeId ${typeId}`);
        }

        sb.push(`/**`);
        docLines.forEach((line) => sb.push(line));
        sb.push(` */`);


        sb.push(
            `export ${isAbstract ? "abstract class" : "class"} ${name}${extendsClause} implements ToString${needsTypeIdMethod ? ", FastMetaHierarchyType" : ""} {`,
        );
        const generatedGetterNames = new Set<string>();



        if (isAbstract) {
            this.generateAbstractGettersForCommonConstants(
                sb,
                children,
                generatedGetterNames,
            );
        }


        currentFields.forEach((typeInfo, fieldName) =>
            sb.push(
                `    public readonly ${fieldName}: ${typeInfo.getFieldType()};`,
            ),
        );


        const currentConstants =
            this.getConstantTypes(cfg?.constants);
        this.generateConstantGetters(
            sb,
            currentConstants,
            !!parent,
            generatedGetterNames,
        );


        if (needsTypeIdMethod) {
            if (parent || g.isInTypeHierarchy(name)) {
                sb.push(
                    `    public ${parent ? "override " : ""}getAetherTypeId(): number {`,
                );
                if (typeId !== undefined) sb.push(`        return ${typeId};`);
                else sb.push(`        return -1;`);
                sb.push(`    }`);
            } else if (children.length > 0) {
                if (isAbstract)
                    sb.push(`    public abstract getAetherTypeId(): number;`);
                else
                    sb.push(
                        `    public getAetherTypeId(): number { return 0; }`,
                    );
            }
        }

        const metaBodyImplName = `${name}MetaBodyImpl`;
        if (!isAbstract) {
            this.generateMetaImpl(name, metaBodyImplName, true, allFields);
            sb.push(
                `\n    public static readonly META_BODY: FastMetaType<${name}> = new Impl.${metaBodyImplName}();`,
            );
        }


        const hierarchyHasIds =
            (hierarchyRoot &&
                g.getTypeIdInHierarchy(hierarchyRoot) !== undefined) ||
            children.some((c) => g.getTypeIdInHierarchy(c) !== undefined);

        const needsMeta =
            isAbstract ||
            hierarchyHasIds ||
            (typeId !== undefined && typeId >= 0);

        if (needsMeta) {
            const metaImplName = `${name}MetaImpl`;
            this.generateMetaImpl(
                name,
                metaImplName,
                false,
                allFields,
                isAbstract,
                children,
            );
            sb.push(
                `\n    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();`,
            );
        } else if (!isAbstract) {
            sb.push(
                `\n    public static readonly META: FastMetaType<${name}> = ${name}.META_BODY;`,
            );
        } else {
            const metaImplName = `${name}MetaImpl`;
            this.generateMetaImpl(
                name,
                metaImplName,
                false,
                allFields,
                isAbstract,
                children,
            );
            sb.push(
                `\n    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();`,
            );
        }

        this.generateStructureConstructor(
            sb,
            name,
            allFields,
            currentFields,
            superFields,
            parent,
        );

        this.generateFieldGetters(
            sb,
            currentFields,
            generatedGetterNames,
        );
        this.generateAbstractGettersForCommonFields(
            sb,
            children,
            cfg,
            generatedGetterNames,
        );

        this.generateHashCodeAndEquals(sb, name, allFields, isAbstract);
        this.generateStructureToString(
            sb,
            name,
            allFields,
            this.getAllConstants(cfg),
            isAbstract,
        );

        sb.push(`}\n`);
        return sb.join("\n");
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
    private generateStructureConstructor(
        sb: string[],
        name: string,
        allFields: Map<string, TypeInfo>,
        currentFields: Map<string, TypeInfo>,
        superFields: string[],
        parent: string | undefined,
    ): void {
        const constructorParams = Array.from(allFields.entries())
            .map(([fn, ti]) => `${fn}: ${ti.getFieldType()}`)
            .join(", ");

        sb.push(`\n    /**`);
        sb.push(`     * Creates an instance of ${name}.`);
        allFields.forEach((ti, fn) => {
            sb.push(`     * @param ${fn} - ${ti.getArgumentType()}`);
        });
        sb.push(`     */`);

        sb.push(`    constructor(${constructorParams}) {`);
        if (superFields.length > 0)
            sb.push(`        super(${superFields.join(", ")});`);
        else if (parent) sb.push(`        super();`);

        currentFields.forEach((_, fieldName) =>
            sb.push(`        this.${fieldName} = ${fieldName};`),
        );

        allFields.forEach((typeInfo, fieldName) => {
            if (
                !typeInfo.isNullable &&
                (!typeInfo.isPrimitive() || typeInfo.isArray)
            ) {
                sb.push(
                    `        if (${fieldName} === null || ${fieldName} === undefined) throw new Error(\`Field '${fieldName}' cannot be null for type ${name}.\`);`,
                );
            }
            if (typeInfo.isArray && typeInfo.arrayStaticSize > 0) {
                const lenCheck = `${fieldName}.length !== ${typeInfo.arrayStaticSize}`;
                const condition = typeInfo.isNullable
                    ? `${fieldName} !== null && ${fieldName} !== undefined && ${lenCheck}`
                    : lenCheck;
                sb.push(
                    `        if (${condition}) throw new Error(\`Array length for field '${fieldName}' in type ${name} must be ${typeInfo.arrayStaticSize} but was \${${fieldName} ? ${fieldName}.length : 'null/undefined'}.\`);`,
                );
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
    private generateStructureToString(
        sb: string[],
        name: string,
        allFields: Map<string, TypeInfo>,
        allConstants: Map<string, ConstantInfo>,
        isAbstract: boolean,
    ): void {
        if (isAbstract) {
            sb.push(`    public abstract toAString(result: AString): AString;`);
        } else {
            sb.push(`    public toAString(result: AString): AString {`);
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
    private generateMetaImpl(
        name: string,
        implName: string,
        isMetaBody: boolean,
        fields: Map<string, TypeInfo>,
        isAbstract: boolean = false,
        children: string[] = [],
    ): void {
        const sbImpl: string[] = [];
        const g = this.generatorLogic;

        const useSCtxSerialize =
            !(isMetaBody && fields.size === 0) &&
            (isMetaBody || children.length > 0);
        const useSCtxDeserialize =
            !(isMetaBody && fields.size === 0) &&
            (isMetaBody || children.length > 0);
        const sCtx = useSCtxSerialize
            ? g.getUniqueVarName("sCtx")
            : g.getUniqueVarName("_sCtx");
        const sCtxDeser = useSCtxDeserialize
            ? useSCtxSerialize
                ? sCtx
                : g.getUniqueVarName("sCtx")
            : g.getUniqueVarName("_sCtx");
        const objVar = g.getUniqueVarName("obj");
        const outVar = g.getUniqueVarName("out");
        const inVar = g.getUniqueVarName("in_");

        sbImpl.push(
            `export class ${implName} implements FastMetaType<${name}> {`,
        );

        sbImpl.push(
            `    serialize(${sCtx}: MetaContext, ${objVar}: ${name}, ${outVar}: DataOut): void {`,
        );
        if (isMetaBody) {
            const serializeLines: string[] = [];
            const fieldsForSerialize = new Map(
                Array.from(fields.entries()).map(([k, v]) => [
                    `${objVar}.${k}`,
                    v,
                ]),
            );
            g.generateSerializerFields(
                serializeLines,
                sCtx,
                outVar,
                fieldsForSerialize,
            );
            sbImpl.push(serializeLines.map((l) => `        ${l}`).join("\n"));
        } else {

            const actualChildren =
                g.getConcreteTypesInHierarchy(name);


            const needsDispatch =
                isAbstract ||
                (g.isInTypeHierarchy(name) &&
                    actualChildren.length > 0);



            if (needsDispatch) {
                sbImpl.push(
                    `        const typeId = typeof (${objVar} as any).getAetherTypeId === 'function' ? ${objVar}.getAetherTypeId() : -1;`,
                );
                sbImpl.push(
                    `        if (typeId === undefined || typeId < 0) throw new Error(\`Cannot serialize '${name}' with invalid type id \${typeId}\`);`,
                );
                sbImpl.push(`        ${outVar}.writeByte(typeId);`);
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(
                            `            case ${selfId}: (${name} as any).META_BODY.serialize(${sCtx}, ${objVar} as any as ${name}, ${outVar}); break;`,
                        );
                    }
                }
                actualChildren.forEach((childName) => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (
                        typeId !== undefined &&
                        (isAbstract || childName !== name)
                    ) {
                        sbImpl.push(
                            `            case ${typeId}: (${childName} as any).META_BODY.serialize(${sCtx}, ${objVar} as any as ${childName}, ${outVar}); break;`,
                        );
                    }
                });
                sbImpl.push(
                    `            default: throw new Error(\`Cannot serialize '${name}' with unknown type id \${typeId}\`);`,
                );
                sbImpl.push(`        }`);
            } else {
                if (!isAbstract)
                    sbImpl.push(
                        `        (${name} as any).META_BODY.serialize(${sCtx}, ${objVar}, ${outVar});`,
                    );
                else
                    sbImpl.push(
                        `        throw new Error(\`Cannot serialize abstract type '${name}' without children or dispatch logic.\`);`,
                    );
            }
        }
        sbImpl.push(`    }`);

        sbImpl.push(
            `    deserialize(${sCtxDeser}: MetaContext, ${inVar}: DataIn): ${name} {`,
        );
        sbImpl.push(`        try {`);
        if (isMetaBody) {
            const deserializeLines: string[] = [];
            const fieldsForDeserialize = new Map<string, TypeInfo>();
            const constructorParams: string[] = [];
            fields.forEach((typeInfo, fieldName) => {
                const localVar = g.getUniqueVarName(fieldName);
                deserializeLines.push(
                    `let ${localVar}: ${typeInfo.getFieldType()};`,
                );
                fieldsForDeserialize.set(localVar, typeInfo);
                constructorParams.push(localVar);
            });
            g.generateDeserializerFields(
                deserializeLines,
                sCtxDeser,
                inVar,
                fieldsForDeserialize,
            );
            sbImpl.push(deserializeLines.map((l) => `        ${l}`).join("\n"));
            sbImpl.push(
                `        return new ${name}(${constructorParams.join(", ")});`,
            );
        } else {

            const actualChildren =
                g.getConcreteTypesInHierarchy(name);


            const needsDispatch =
                isAbstract ||
                (g.isInTypeHierarchy(name) &&
                    actualChildren.length > 0);


            if (needsDispatch) {
                sbImpl.push(`        const typeId = ${inVar}.readUByte();`);
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(
                            `            case ${selfId}: return (${name} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar}) as any as ${name};`,
                        );
                    }
                }
                actualChildren.forEach((childName) => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (
                        typeId !== undefined &&
                        (isAbstract || childName !== name)
                    ) {
                        sbImpl.push(
                            `            case ${typeId}: return (${childName} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar}) as any as ${name};`,
                        );
                    }
                });
                sbImpl.push(
                    `            default: throw new Error(\`Bad type id \${typeId} for type '${name}'\`);`,
                );
                sbImpl.push(`        }`);
            } else {
                if (!isAbstract)
                    sbImpl.push(
                        `        return (${name} as any).META_BODY.deserialize(${sCtxDeser}, ${inVar});`,
                    );
                else
                    sbImpl.push(
                        `        throw new Error(\`Cannot deserialize abstract type '${name}' without children or dispatch logic.\`);`,
                    );
            }
        }

        if (isMetaBody) {
            sbImpl.push(`        } catch (e) {`);
            sbImpl.push(
                `            throw new SecurityConnectionDropException("Body error: " + (e instanceof Error ? e.message : String(e)));`,
            );
            sbImpl.push(`        }`);
        } else {
            sbImpl.push(`        } catch (e) {`);
            sbImpl.push(
                `            if (e instanceof SecurityConnectionDropException) throw e;`,
            );
            sbImpl.push(
                `            throw new SecurityConnectionDropException("Hierarchy error: " + (e instanceof Error ? e.message : String(e)));`,
            );
            sbImpl.push(`        }`);
        }
        sbImpl.push(`    }`);


        if (isMetaBody) {
            sbImpl.push(
                `    metaHashCode(obj: ${name} | null | undefined): number {`,
            );
            sbImpl.push(
                `        if (obj === null || obj === undefined) return 0;`,
            );
            sbImpl.push(`        let hash = 17;`);
            fields.forEach((typeInfo, fieldName) => {
                const fieldMetaAccessor = g.generateAccessMeta(typeInfo);
                sbImpl.push(
                    `        hash = 37 * hash + ${fieldMetaAccessor}.metaHashCode(obj.${fieldName});`,
                );
            });
            sbImpl.push(`        return hash | 0;`);
            sbImpl.push(`    }`);

            sbImpl.push(
                `    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`,
            );
            sbImpl.push(`        if (v1 === v2) return true;`);
            sbImpl.push(
                `        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);`,
            );
            sbImpl.push(
                `        if (v2 === null || v2 === undefined || !(v2 instanceof ${name})) return false;`,
            );
            fields.forEach((typeInfo, fieldName) => {
                const fieldMetaAccessor = g.generateAccessMeta(typeInfo);
                sbImpl.push(
                    `        if (!${fieldMetaAccessor}.metaEquals(v1.${fieldName}, v2.${fieldName})) return false;`,
                );
            });
            sbImpl.push(`        return true;`);
            sbImpl.push(`    }`);

            const cfg = g.findTypeDefinition(name);
            const allConstants = cfg
                ? this.getAllConstants(cfg)
                : new Map<string, ConstantInfo>();

            sbImpl.push(
                `    metaToString(obj: ${name} | null | undefined, res: AString): void {`,
            );
            sbImpl.push(
                `        if (obj === null || obj === undefined) { res.add('null'); return; }`,
            );
            const simpleClassName = name.replace(/.*\./, "");
            sbImpl.push(`        res.add('${simpleClassName}(');`);

            let isFirstField = true;
            fields.forEach((_, fieldName) => {
                if (!isFirstField) sbImpl.push(`        res.add(', ');`);
                sbImpl.push(
                    `        res.add('${fieldName}:').add(obj.${fieldName});`,
                );
                isFirstField = false;
            });

            allConstants.forEach((constInfo, constName) => {
                if (!isFirstField) sbImpl.push(`        res.add(', ');`);
                sbImpl.push(
                    `        res.add('${constName}:').add(obj.${constInfo.getGetterName()}());`,
                );
                isFirstField = false;
            });

            sbImpl.push(`        res.add(')');`);
            sbImpl.push(`    }`);
        } else {

            const actualChildren =
                g.getConcreteTypesInHierarchy(name);


            const needsDispatch =
                isAbstract ||
                (g.isInTypeHierarchy(name) &&
                    actualChildren.length > 0);



            if (needsDispatch) {
                sbImpl.push(
                    `    metaHashCode(obj: ${name} | null | undefined): number {`,
                );
                sbImpl.push(
                    `        if (obj === null || obj === undefined) return 0;`,
                );
                sbImpl.push(
                    `        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;`,
                );
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(
                            `            case ${selfId}: return (${name} as any).META_BODY.metaHashCode(obj as any as ${name});`,
                        );
                    }
                }
                actualChildren.forEach((childName) => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (
                        typeId !== undefined &&
                        (isAbstract || childName !== name)
                    ) {
                        sbImpl.push(
                            `            case ${typeId}: return (${childName} as any).META.metaHashCode(obj as any as ${childName});`,
                        );
                    }
                });
                sbImpl.push(
                    `            default: throw new Error(\`Cannot hashCode '${name}' with unknown type id \${typeId}\`);`,
                );
                sbImpl.push(`        }`);
                sbImpl.push(`    }`);

                sbImpl.push(
                    `    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`,
                );
                sbImpl.push(`        if (v1 === v2) return true;`);
                sbImpl.push(
                    `        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);`,
                );
                sbImpl.push(
                    `        if (v2 === null || v2 === undefined) return false;`,
                );

                const v1TypeId = `(v1 as any).getAetherTypeId ? (v1 as any).getAetherTypeId() : -1`;
                const v2TypeId = `(v2 as any).getAetherTypeId ? (v2 as any).getAetherTypeId() : -1`;
                sbImpl.push(`        const typeId1 = ${v1TypeId};`);
                sbImpl.push(`        const typeId2 = ${v2TypeId};`);
                sbImpl.push(
                    `        if (typeId1 === -1 || typeId1 !== typeId2) return false;`,
                );
                sbImpl.push(`        switch(typeId1) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(
                            `            case ${selfId}: return (${name} as any).META_BODY.metaEquals(v1 as any as ${name}, v2);`,
                        );
                    }
                }
                actualChildren.forEach((childName) => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (
                        typeId !== undefined &&
                        (isAbstract || childName !== name)
                    ) {
                        sbImpl.push(
                            `            case ${typeId}: return (${childName} as any).META.metaEquals(v1 as any as ${childName}, v2);`,
                        );
                    }
                });
                sbImpl.push(
                    `            default: throw new Error(\`Cannot equals '${name}' with unknown type id \${typeId1}\`);`,
                );
                sbImpl.push(`        }`);
                sbImpl.push(`    }`);

                sbImpl.push(
                    `    metaToString(obj: ${name} | null | undefined, res: AString): void {`,
                );
                sbImpl.push(
                    `        if (obj === null || obj === undefined) { res.add('null'); return ; }`,
                );
                sbImpl.push(
                    `        const typeId = typeof (obj as any).getAetherTypeId === 'function' ? (obj as any).getAetherTypeId() : -1;`,
                );
                sbImpl.push(`        switch(typeId) {`);
                if (!isAbstract) {
                    const selfId = g.getTypeIdInHierarchy(name);
                    if (selfId !== undefined && selfId >= 0) {
                        sbImpl.push(
                            `            case ${selfId}: (${name} as any).META_BODY.metaToString(obj as any as ${name}, res); break;`,
                        );
                    }
                }
                actualChildren.forEach((childName) => {
                    const typeId = g.getTypeIdInHierarchy(childName);
                    if (
                        typeId !== undefined &&
                        (isAbstract || childName !== name)
                    ) {
                        sbImpl.push(
                            `            case ${typeId}: (${childName} as any).META.metaToString(obj as any as ${childName}, res);break;`,
                        );
                    }
                });
                sbImpl.push(
                    `            default: throw new Error(\`Cannot toString '${name}' with unknown type id \${typeId}\`);`,
                );
                sbImpl.push(`        }`);
                sbImpl.push(`    }`);
            } else {
                if (!isAbstract) {
                    sbImpl.push(
                        `    metaHashCode(obj: ${name} | null | undefined): number { return (${name} as any).META_BODY.metaHashCode(obj); }`,
                    );
                    sbImpl.push(
                        `    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return (${name} as any).META_BODY.metaEquals(v1, v2); }`,
                    );
                    sbImpl.push(
                        `    metaToString(obj: ${name} | null | undefined, res: AString): void { (${name} as any).META_BODY.metaToString(obj, res); }`,
                    );
                } else {
                    sbImpl.push(
                        `    metaHashCode(obj: ${name} | null | undefined): number { return (obj && typeof obj.hashCode === 'function') ? obj.hashCode() : 0; }`,
                    );
                    sbImpl.push(
                        `    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return (v1 && typeof v1.equals === 'function') ? v1.equals(v2) : v1 === v2; }`,
                    );
                    sbImpl.push(
                        `    metaToString(obj: ${name} | null | undefined, res: AString): void { res.add(String(obj));  }`,
                    );
                }
            }
        }

        sbImpl.push(
            FAST_META_TYPE_IMPL_STUB_METHODS.replace(
                /: any/g,
                `: ${name}`,
            ).replace(/: any {/g, `: ${name} {`),
        );

        sbImpl.push(`}`);

        g.allImplCode.push(sbImpl.join("\n"));
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
            (doc as string)
                .split("\n")
                .forEach((line) => sb.push(` * ${line}`));
            sb.push(` */`);
        }

        sb.push(
            `export enum ${name} { ${values.map((v) => `${v} = '${v}'`).join(", ")} }\n`,
        );
        sb.push(`export namespace ${name} {`);

        const metaImplName = `${name}MetaImpl`;
        const sbImpl: string[] = [];

        sbImpl.push(
            `export class ${metaImplName} implements FastMetaType<${name}> {`,
        );
        sbImpl.push(
            `    private readonly values = [${values.map((v) => `'${v}'`).join(", ")}];`,
        );
        sbImpl.push(
            `    serialize(_sCtx: MetaContext, obj: ${name}, out: DataOut): void {`,
        );
        sbImpl.push(
            `        out.writeByte(this.values.indexOf(obj as string));`,
        );
        sbImpl.push(`    }`);
        sbImpl.push(

            `    deserialize(_sCtx: MetaContext, in_: DataIn): ${name} {`,
        );
        sbImpl.push(`        try {`);
        sbImpl.push(`            const ordinal = in_.readUByte();`);
        sbImpl.push(
            `            if (ordinal < 0 || ordinal >= this.values.length) throw new Error(\`Invalid ordinal \${ordinal} for enum ${name}\`);`,
        );
        sbImpl.push(`            return this.values[ordinal] as ${name};`);
        sbImpl.push(`        } catch (e) {`);
        sbImpl.push(
            `            throw new SecurityConnectionDropException("Enum error: " + (e instanceof Error ? e.message : String(e)));`,
        );
        sbImpl.push(`        }`);

        sbImpl.push(`    }`);

        const stringMetaAccessor = this.generatorLogic.generateAccessMeta(
            new TypeInfo("string"),
        );
        sbImpl.push(
            `    metaHashCode(obj: ${name} | null | undefined): number { return ${stringMetaAccessor}.metaHashCode(obj as string); }`,
        );
        sbImpl.push(
            `    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return ${stringMetaAccessor}.metaEquals(v1 as string, v2); }`,
        );

        sbImpl.push(
            `    metaToString(obj: ${name} | null | undefined, res: AString): void {`,
        );
        sbImpl.push(`        res.add(obj as string);`);
        sbImpl.push(`    }`);

        sbImpl.push(
            FAST_META_TYPE_IMPL_STUB_METHODS.replace(
                /: any/g,
                `: ${name}`,
            ).replace(/: any {/g, `: ${name} {`),
        );

        sbImpl.push(`}`);

        this.generatorLogic.allImplCode.push(sbImpl.join("\n"));

        sb.push(
            `    export const META: FastMetaType<${name}> = new Impl.${metaImplName}();`,
        );
        sb.push(`}\n`);
        return sb.join("\n");
    }

    /**
     * Generates the code for a DSL stream type.
     * @param name - The name of the stream class.
     * @param cfg - The TypeDefinition for the stream.
     * @returns The generated TypeScript code as a string.
     */

    private generateStreamClass(name: string, cfg: TypeDefinition): string {
        const sb: string[] = [];


        const stream = cfg.stream;
        if (!stream) {
            throw new Error(`Stream definition is not specified for: ${name}`);
        }


        const rawApiPairs = Array.isArray(stream.apis)
            ? stream.apis
            : typeof stream.api === "string"
              ? [{ api: stream.api, remoteApi: stream.remoteApi }]
              : null;
        if (rawApiPairs === null) {
            throw new Error(`Api type is not String for: ${name}`);
        }
        if (rawApiPairs.length === 0) {
            throw new Error(`stream.apis must be a non-empty list for: ${name}`);
        }


        const apiPairs = rawApiPairs.map((pair, index) => {
            if (!pair || typeof pair.api !== "string") {
                throw new Error(
                    `stream.apis[${index}].api must be a String for: ${name}`,
                );
            }

            return {
                api: this.generatorLogic.resolveCanonicalTypeName(pair.api),
                remoteApi: pair.remoteApi
                    ? this.generatorLogic.resolveCanonicalTypeName(pair.remoteApi)
                    : undefined,
            };
        });

        const apiType = apiPairs[0].api;
        const remoteApiType = apiPairs[0].remoteApi;
        const hasCrypto = !!stream.crypto;

        const apiRemoteType = `${apiType}Remote`;
        const factoryApiType = remoteApiType ?? 'any';



        const doc = (cfg as any).doc;
        if (doc) {
            sb.push(`/**`);
            (doc as string)
                .split("\n")
                .forEach((line) => sb.push(` * ${line}`));
            sb.push(` */`);
        }

        sb.push(`export class ${name} implements ToString {`);
        sb.push(`    public data: Uint8Array;`);

        sb.push(`    constructor(data: Uint8Array) { this.data = data; }`);

        sb.push(`    public asIn(): any { return this as any; }`);


        apiPairs.forEach((pair, index) => {
            const variantApiType = pair.api;
            const variantRemoteApiType = pair.remoteApi;

            sb.push(`    public static readonly V${index} = class V${index} {`);
            sb.push(
                `        static api(source: MetaContext | RemoteApi): ${variantApiType}Remote {`,
            );
            sb.push(
                `            const ctx = typeof (source as any).getFastMetaContext === "function" ? (source as RemoteApi).getFastMetaContext() : source as MetaContext;`,
            );
            sb.push(
                `            return ctx.makeRemote((${variantApiType} as any).META) as ${variantApiType}Remote;`,
            );
            sb.push(`        }`);

            if (variantRemoteApiType) {
                sb.push(
                    `        static remoteApi(source: MetaContext | RemoteApi): ${variantRemoteApiType}Remote {`,
                );
                sb.push(
                    `            const ctx = typeof (source as any).getFastMetaContext === "function" ? (source as RemoteApi).getFastMetaContext() : source as MetaContext;`,
                );
                sb.push(
                    `            return ctx.makeRemote((${variantRemoteApiType} as any).META) as ${variantRemoteApiType}Remote;`,
                );
                sb.push(`        }`);
            }

            sb.push(
                `        static switchLocalApi(ctx: MetaContext, localApi: ${variantApiType}): void {`,
            );
            sb.push(
                `            ctx.switchLocalApi(localApi, (${variantApiType} as any).META);`,
            );
            sb.push(`        }`);

            if (variantRemoteApiType) {
                sb.push(
                    `        static in(in_: any, source: MetaContext | ((api: ${variantRemoteApiType}Remote) => ${variantApiType}), ...keys: any[]): any {`,
                );
                sb.push(`            if (typeof source === "function") {`);
                sb.push(
                    `                in_.factory = (ctx: MetaContext) => source(ctx.makeRemote((${variantRemoteApiType} as any).META) as ${variantRemoteApiType}Remote);`,
                );
                sb.push(`                in_._streamKeys = keys;`);
                sb.push(`            } else {`);
                sb.push(`                in_.activeContext = source;`);
                sb.push(`            }`);
                sb.push(
                    `            in_.localMeta = (${variantApiType} as any).META;`,
                );
                sb.push(`            return in_;`);
                sb.push(`        }`);

                sb.push(
                    `        static send(remoteGenerator: (api: ${variantApiType}Remote) => void, factory: (ctx: MetaContext) => ${variantRemoteApiType}, ...keys: any[]): any {`,
                );
                sb.push(
                    `            return ${name}.Out.sendWithMeta((${variantApiType} as any).META, remoteGenerator, factory, ...keys);`,
                );
                sb.push(`        }`);
            }

            sb.push(`    };`);
        });


        sb.push(`    public static readonly In = class In extends ${name} {`);
        sb.push(`        public parentContext: MetaContext | null = null;`);
        sb.push(`        public activeContext: MetaContext | null = null;`);
        sb.push(`        public factory: ((ctx: MetaContext) => any) | null = null;`);

        sb.push(`        public localMeta: FastMetaApi<any, any> = (${apiType} as any).META;`);

        sb.push(`        public _streamKeys: any[] | null = null;`);
        sb.push(
            `        public onFlushC: ((cc: MetaContext) => void) | null = null;`,
        );
        if (hasCrypto)
            sb.push(
                `        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;`,
            );

        sb.push(
            `        constructor(data: Uint8Array, parentContext: MetaContext) {`,
        );
        sb.push(`            super(data);`);
        sb.push(`            this.parentContext = parentContext;`);
        sb.push(`        }`);

        // onFlush methods
        sb.push(
            `        onFlush(c: (cc: MetaContext, data: Uint8Array) => void): this {`,
        );
        sb.push(
            `            this.onFlushC = (cc) => { const d = cc.remoteDataToArrayAsArray(); if (d.length > 0) c(cc, d); };`,
        );
        sb.push(`            return this;`);
        sb.push(`        }`);
        if (apiType) {
            sb.push(
                `        onFlushWithLocal<LT extends ${apiType}>(c: (cc: MetaContext, data: Uint8Array, localApi: LT) => void): this {`,
            );
            sb.push(
                `            this.onFlushC = (cc) => { const d = cc.remoteDataToArrayAsArray(); if (d.length > 0) c(cc, d, cc.getLocalApi() as LT); };`,
            );
            sb.push(`            return this;`);
            sb.push(`        }`);
        }
        sb.push(`        onFlushCtx(c: (cc: MetaContext) => void): this {`);
        sb.push(`            this.onFlushC = c;`);
        sb.push(`            return this;`);
        sb.push(`        }`);
        sb.push(`        onFlushData(c: (data: Uint8Array) => void): this {`);
        sb.push(
            `            this.onFlushC = (cc) => { const d = cc.remoteDataToArrayAsArray(); if (d.length > 0) c(d); };`,
        );
        sb.push(`            return this;`);
        sb.push(`        }`);
        if (remoteApiType) {
            sb.push(
                `        onFlushToRemote<RT extends RemoteApi>(meta: FastMetaApi<any, RT>, c: (data: Uint8Array, remote: RT) => void): this {`,
            );
            sb.push(
                `            this.onFlushC = (cc) => { const d = cc.remoteDataToArrayAsArray(); if (d.length > 0) c(d, (this.parentContext as any).makeRemote(meta)); };`,
            );
            sb.push(`            return this;`);
            sb.push(`        }`);
        }

        // keys

        sb.push(`        keys(factory: (ctx: MetaContext) => ${apiType}, ...keys: any[]): this {`);
        sb.push(`            this.factory = factory;`);
        sb.push(`            this._streamKeys = keys;`);
        sb.push(`            return this;`);
        sb.push(`        }`);


        // remoteApi
        if (remoteApiType) {
            sb.push(`        remoteApi(): ${remoteApiType}Remote {`);

            sb.push(
                `            if (!this.factory) throw new Error("factory is not set");`,
            );

            sb.push(
                `            const activeCtx = this.parentContext!.findContext(this.factory!, ...(this._streamKeys || []));`,
            );
            sb.push(
                `            return activeCtx.makeRemote((${remoteApiType} as any).META) as ${remoteApiType}Remote;`,
            );
            sb.push(`        }`);
        }
        sb.push(
            `        remoteParentApi<RT extends RemoteApi>(meta: FastMetaApi<any, RT>): RT {`,
        );
        sb.push(
            `            return this.parentContext!.makeRemote(meta) as RT;`,
        );
        sb.push(`        }`);

        // convert
        if (hasCrypto) {
            sb.push(
                `        convert(converter: (data: Uint8Array) => Uint8Array): this {`,
            );
            sb.push(`            this.cryptoConverter = converter;`);
            sb.push(`            return this;`);
            sb.push(`        }`);
        }
        // ctx
        sb.push(`        ctx(c: MetaContext): this {`);
        sb.push(`            this.activeContext = c;`);
        sb.push(`            return this;`);
        sb.push(`        }`);

        // accept
        sb.push(`        accept(): void {`);
        sb.push(`            let targetData = this.data;`);
        if (hasCrypto)
            sb.push(
                `            if (this.cryptoConverter) targetData = this.cryptoConverter(targetData);`,
            );
        sb.push(`            if (!this.activeContext) {`);
        sb.push(
            `                if (!this.factory) throw new Error("factory is null");`,
        );
        sb.push(`                let effectiveFactory = this.factory;`);
        sb.push(`                if (this.onFlushC) {`);
        sb.push(`                    const flushCallback = this.onFlushC;`);
        sb.push(
            `                    effectiveFactory = (ctx: MetaContext) => {`,
        );
        sb.push(
            `                        ctx.onFlush(() => flushCallback(ctx));`,
        );
        sb.push(`                        return this.factory!(ctx);`);
        sb.push(`                    };`);
        sb.push(`                }`);
        sb.push(
                `                this.activeContext = this.parentContext!.findContext(effectiveFactory, ...(this._streamKeys || []));`,
        );
        sb.push(`            }`);
        if (apiType) {
            sb.push(
                `            this.localMeta.makeLocal(this.activeContext!, new DataInOutStatic(targetData));`,
            );
        } else {
            sb.push(
                `            throw new Error("API type not defined for stream accept");`,
            );
        }
        sb.push(`        }`);
        sb.push(`    };`);

        // === Out (client-side) ===
        sb.push(`    public static readonly Out = class Out extends ${name} {`);

        sb.push(
            `        public deferredRemoteGenerator: ((api: any) => void) | null = null;`,
        );
        sb.push(
            `        public deferredApiMeta: FastMetaApi<any, any> = (${apiType} as any).META;`,
        );

        sb.push(
            `        public deferredFactory: ((ctx: MetaContext) => any) | null = null;`,
        );
        sb.push(`        public deferredKeys: any[] | null = null;`);
        if (hasCrypto)
            sb.push(
                `        public cryptoConverter: ((data: Uint8Array) => Uint8Array) | null = null;`,
            );

        sb.push(`        constructor() { super(new Uint8Array(0)); }`);

        // send(byte[])
        sb.push(`        static send(rawData: Uint8Array): Out {`);
        sb.push(`            const out = new Out();`);
        sb.push(`            (out as any).data = rawData;`);
        sb.push(`            return out;`);
        sb.push(`        }`);

        // send(Consumer, factory, keys)


        sb.push(`        static sendWithApi(remoteGenerator: (api: ${apiRemoteType}) => void, factory: (ctx: MetaContext) => ${factoryApiType}, ...keys: any[]): Out {`);
        sb.push(`            return this.sendWithMeta((${apiType} as any).META, remoteGenerator, factory, ...keys);`);
        sb.push(`        }`);
        sb.push(`        static sendWithMeta(meta: FastMetaApi<any, any>, remoteGenerator: (api: any) => void, factory: (ctx: MetaContext) => any, ...keys: any[]): Out {`);
        sb.push(`            const out = new Out();`);
        sb.push(`            out.deferredApiMeta = meta;`);
        sb.push(`            out.deferredRemoteGenerator = remoteGenerator;`);
        sb.push(`            out.deferredFactory = factory;`);
        sb.push(`            out.deferredKeys = keys;`);
        sb.push(`            return out;`);
        sb.push(`        }`);






        // convert
        if (hasCrypto) {
            sb.push(
                `        convert(converter: (data: Uint8Array) => Uint8Array): this {`,
            );
            sb.push(`            this.cryptoConverter = converter;`);
            sb.push(`            return this;`);
            sb.push(`        }`);
        }
        sb.push(`    };`);

        // === META ===
        const metaImplName = `${name}MetaImpl`;
        const sbImpl: string[] = [];
        sbImpl.push(
            `export class ${metaImplName} implements FastMetaType<${name}> {`,
        );
        sbImpl.push(
            `    serialize(ctx: MetaContext, obj: ${name}, out: DataOut): void {`,
        );
        sbImpl.push(`        if (obj instanceof ${name}.Out) {`);
        sbImpl.push(`            const outObj = obj as any;`);
        sbImpl.push(`            if (outObj.deferredFactory) {`);
        if (apiType) {

            sbImpl.push(
                `                const childCtx = ctx.findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []));`,
            );
            sbImpl.push(
                `                const childLock = childCtx.lock();`,
            );
            sbImpl.push(`                try {`);
            sbImpl.push(
                `                    const remoteApi = outObj.deferredApiMeta.makeRemote(childCtx);`,
            );
            sbImpl.push(
                `                    outObj.deferredRemoteGenerator(remoteApi);`,
            );
            if (hasCrypto) {
                sbImpl.push(
                    `                    const raw = childCtx.remoteDataToArrayAsArray();`,
                );
                sbImpl.push(
                    `                    outObj.data = outObj.cryptoConverter ? outObj.cryptoConverter(raw) : raw;`,
                );
            } else {
                sbImpl.push(
                    `                    outObj.data = childCtx.remoteDataToArrayAsArray();`,
                );
            }
            sbImpl.push(`                } finally {`);
            sbImpl.push(`                    childLock?.close();`);
            sbImpl.push(`                }`);

        } else {
            sbImpl.push(
                `                throw new Error("API type not defined for stream serialize");`,
            );
        }
        sbImpl.push(`            }`);
        sbImpl.push(`        }`);
        sbImpl.push(
            `        FastMeta.META_ARRAY_BYTE.serialize(ctx, obj.data, out);`,
        );
        sbImpl.push(`    }`);
        sbImpl.push(
            `    deserialize(ctx: MetaContext, in_: DataIn): ${name} {`,
        );
        sbImpl.push(`        try {`);
        sbImpl.push(
            `            const data = FastMeta.META_ARRAY_BYTE.deserialize(ctx, in_);`,
        );
        sbImpl.push(
            `            return new ${name}.In(data, ctx) as any as ${name};`,
        );
        sbImpl.push(`        } catch (e) {`);
        sbImpl.push(
            `            throw new SecurityConnectionDropException("Stream error: " + (e instanceof Error ? e.message : String(e)));`,
        );
        sbImpl.push(`        }`);
        sbImpl.push(`    }`);

        const byteArrayMetaAccessor = this.generatorLogic.generateAccessMeta(
            new TypeInfo("byte[]"),
        );
        sbImpl.push(
            `    metaHashCode(obj: ${name} | null | undefined): number { return ${byteArrayMetaAccessor}.metaHashCode(obj?.data); }`,
        );
        sbImpl.push(
            `    metaEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean { return ${byteArrayMetaAccessor}.metaEquals(v1?.data, (v2 instanceof ${name}) ? v2.data : v2); }`,
        );

        sbImpl.push(
            `    metaToString(obj: ${name} | null | undefined, res: AString): void {`,
        );
        sbImpl.push(
            `        if (obj === null || obj === undefined) { res.add('null'); return; }`,
        );
        sbImpl.push(
            `        res.add('${name}(').add('data:').add(obj.data).add(')');`,
        );
        sbImpl.push(`    }`);

        sbImpl.push(
            FAST_META_TYPE_IMPL_STUB_METHODS.replace(
                /: any/g,
                `: ${name}`,
            ).replace(/: any {/g, `: ${name} {`),
        );
        sbImpl.push(`}`);
        this.generatorLogic.allImplCode.push(sbImpl.join("\n"));

        sb.push(
            `    public static readonly META: FastMetaType<${name}> = new Impl.${metaImplName}();`,
        );

        sb.push(`    public toAString(result: AString): AString {`);
        sb.push(`        ${name}.META.metaToString(this, result);`);
        sb.push(`        return result;`);
        sb.push(`    }`);

        sb.push(`}`);
        return sb.join("\n");
    }

    /**
     * Generates concrete getter methods for a structure's fields.
     * @param sb - The string array to append code lines to.
     * @param fields - A Map of all fields to generate getters for.
     */

    private generateFieldGetters(
        sb: string[],
        fields: Map<string, TypeInfo>,
        generatedGetterNames: Set<string>,
    ): void {
        fields.forEach((typeInfo, fieldName) => {
            const isBoolean =
                typeInfo.javaType === "boolean" &&
                !typeInfo.isArray &&
                !typeInfo.isNullable;
            const prefix = isBoolean ? "is" : "get";
            const capitalName =
                fieldName.charAt(0).toUpperCase() +
                fieldName.slice(1);
            const getterName = `${prefix}${capitalName}`;

            if (generatedGetterNames.has(getterName)) return;
            generatedGetterNames.add(getterName);

            sb.push(
                `\n    public ${getterName}(): ${typeInfo.getGetterType()} {`,
            );
            sb.push(`        return this.${fieldName};`);
            sb.push(`    }`);

            if (typeInfo.isArray) {
                const elType =
                    typeInfo.getElementType().getArgumentType();
                const arrayType =
                    typeInfo.javaType === "byte"
                        ? `Uint8Array`
                        : `${elType}[]`;
                const elTypeForCheck =
                    typeInfo.javaType === "byte"
                        ? `number`
                        : elType;

                sb.push(
                    `\n    public ${fieldName}Contains(el: ${elTypeForCheck}): boolean {`,
                );
                sb.push(
                    `        return (this.${fieldName} as ${arrayType}).includes(el as any);`,
                );
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
    private generateHashCodeAndEquals(
        sb: string[],
        name: string,
        allFields: Map<string, TypeInfo>,
        isAbstract: boolean,
    ): void {
        if (isAbstract) {
            sb.push(`\n    /**
     * Calculates a hash code for a static instance of ${name}.
     * @param {${name} | null | undefined} obj - The object to hash.
     * @returns {number} The hash code.
     */`);
            sb.push(
                `    public static staticHashCode(obj: ${name} | null | undefined): number {`,
            );
            sb.push(`        if (obj === null || obj === undefined) return 0;`);
            sb.push(
                `        return (obj.constructor as any).META.metaHashCode(obj);`,
            );
            sb.push(`    }`);

            sb.push(`\n    /**
     * Compares a static instance of ${name} with another object.
     * @param {${name} | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */`);
            sb.push(
                `    public static staticEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`,
            );
            sb.push(`        if (v1 === v2) return true;`);
            sb.push(
                `        if (v1 === null || v1 === undefined) return (v2 === null || v2 === undefined);`,
            );
            sb.push(
                `        return (v1.constructor as any).META.metaEquals(v1, v2);`,
            );
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
            sb.push(
                `    public static staticHashCode(obj: ${name} | null | undefined): number {`,
            );
            sb.push(`        return ${name}.META.metaHashCode(obj);`);
            sb.push(`    }`);

            sb.push(`\n    /**
     * Compares a static instance of ${name} with another object.
     * @param {${name} | null | undefined} v1 - The first object.
     * @param {any | null | undefined} v2 - The second object.
     * @returns {boolean} True if the objects are equal.
     */`);
            sb.push(
                `    public static staticEquals(v1: ${name} | null | undefined, v2: any | null | undefined): boolean {`,
            );
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
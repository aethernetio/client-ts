
import {
    GeneratorLogic,
    TypeInfo,
} from '../generator/aether_protocol_core';
import { TypeGenerator } from '../generator/type_generator';

describe('TieredInt TypeScript generation', () => {
    const protocolData: any = {
        types: {
            A: {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [251],
                },
            },
            B: {
                tieredInt: {
                    minTierBytes: 2,
                    limits: [4000, 100000000],
                },
            },
            Holder: {
                fields: {
                    value: 'A',
                    nullableValue: 'A?',
                    values: 'A[]',
                },
            },
            Pair: {
                fields: {
                    a: 'A',
                    b: 'B',
                },
            },
        },
    };

    const generator = new GeneratorLogic(
        { Test: protocolData },
        'Test',
        protocolData,
    );
    const typeGenerator = new TypeGenerator(generator);

    test('emits metadata-only named scalar holders', () => {
        const aSource = typeGenerator.generateType(
            'A',
            protocolData.types.A,
        );
        const bSource = typeGenerator.generateType(
            'B',
            protocolData.types.B,
        );

        expect(aSource).toContain('export class A');
        expect(aSource).toContain('FastMetaType<bigint>');
        expect(aSource).toContain(
            'FastMeta.tieredInt(1, 251)',
        );

        expect(bSource).toContain('export class B');
        expect(bSource).toContain(
            'FastMeta.tieredInt(2, 4000, 100000000)',
        );

        expect(generator.generateAccessMeta(
            generator.typeInfo('A'),
        )).toBe('A.META');
        expect(generator.generateAccessMeta(
            generator.typeInfo('B'),
        )).toBe('B.META');
    });

    test('keeps named array metadata identity', () => {
        expect(generator.generateAccessMeta(
            generator.typeInfo('A[]'),
        )).toBe('FastMeta.getMetaArray(A.META)');

        expect(generator.generateAccessMeta(
            generator.typeInfo('B[]'),
        )).toBe('FastMeta.getMetaArray(B.META)');
    });

    test('routes direct scalar and array serialization through named META', () => {
        const scalarSerialize: string[] = [];
        generator.generateSerializer(
            scalarSerialize,
            'ctx',
            'out',
            'value',
            generator.typeInfo('A'),
        );
        expect(scalarSerialize.join('\n')).toContain(
            'A.META.serialize(ctx, value, out)',
        );

        const scalarDeserialize: string[] = [];
        generator.generateDeserializer(
            scalarDeserialize,
            'ctx',
            'in_',
            'value',
            generator.typeInfo('A'),
        );
        expect(scalarDeserialize.join('\n')).toContain(
            'value = A.META.deserialize(ctx, in_)',
        );

        const arraySerialize: string[] = [];
        generator.generateSerializer(
            arraySerialize,
            'ctx',
            'out',
            'values',
            generator.typeInfo('A[]'),
        );
        expect(arraySerialize.join('\n')).toContain(
            'A.META.serialize',
        );

        const arrayDeserialize: string[] = [];
        generator.generateDeserializer(
            arrayDeserialize,
            'ctx',
            'in_',
            'values',
            generator.typeInfo('A[]'),
        );
        expect(arrayDeserialize.join('\n')).toContain(
            'A.META.deserialize',
        );
    });


    test('structure fields use bigint runtime types and named codecs', () => {
        const holderSource = typeGenerator.generateType(
            'Holder',
            protocolData.types.Holder,
        );
        const pairSource = typeGenerator.generateType(
            'Pair',
            protocolData.types.Pair,
        );
        const implSource = generator.allImplCode.join('\n');

        expect(holderSource).toContain('bigint');
        expect(holderSource).toContain('bigint | null');
        expect(holderSource).toContain('bigint[]');
        expect(holderSource).not.toContain(
            'FastMeta.META_ARRAY_LONG',
        );
        expect(pairSource).toContain('bigint');

        expect(implSource).toContain('A.META.serialize');
        expect(implSource).toContain('A.META.deserialize');
        expect(implSource).toContain('B.META.serialize');
        expect(implSource).toContain('B.META.deserialize');
        expect(implSource).not.toContain(
            'FastMeta.META_ARRAY_LONG',
        );
    });


    test('ordinary long and intpack remain unchanged', () => {
        const longSerialize: string[] = [];
        generator.generateSerializer(
            longSerialize,
            'ctx',
            'out',
            'value',
            new TypeInfo('long'),
        );
        expect(longSerialize.join('\n')).toContain(
            'out.writeLong(value)',
        );

        const packedSerialize: string[] = [];
        generator.generateSerializer(
            packedSerialize,
            'ctx',
            'out',
            'value',
            new TypeInfo('intpack'),
        );
        expect(packedSerialize.join('\n')).toContain(
            'SerializerPackNumber.INSTANCE.put(out, value)',
        );

        const packedDeserialize: string[] = [];
        generator.generateDeserializer(
            packedDeserialize,
            'ctx',
            'in_',
            'value',
            new TypeInfo('intpack'),
        );
        expect(packedDeserialize.join('\n')).toContain(
            'DeserializerPackNumber.INSTANCE.put(in_)',
        );

        expect(generator.generateAccessMeta(
            new TypeInfo('intpack'),
        )).toBe('FastMeta.META_PACK');
    });
});
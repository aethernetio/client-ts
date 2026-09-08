
import {
    GeneratorLogic,
} from '../generator/aether_protocol_core';

describe('TieredInt generator TypeInfo', () => {
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
        },
    };

    const generator = new GeneratorLogic(
        { Test: protocolData },
        'Test',
        protocolData,
    );

    test('retains named scalar identity with bigint runtime types', () => {
        const a = generator.typeInfo('A');
        const nullableA = generator.typeInfo('A?');
        const arrayA = generator.typeInfo('A[]');
        const b = generator.typeInfo('B');

        expect(a.javaType).toBe('long');
        expect(a.getFieldType()).toBe('bigint');
        expect(a.getArgumentType()).toBe('bigint');
        expect(a.getAsReturnType()).toContain('bigint');

        expect(nullableA.javaType).toBe('long');
        expect(nullableA.getFieldType()).toBe('bigint | null');

        expect(arrayA.javaType).toBe('long');
        expect(arrayA.getFieldType()).toBe('bigint[]');

        expect(a.isNamedScalar()).toBe(true);
        expect(a.declaredType).toBe('A');
        expect(a.numericKind).toBe('tieredInt');
        expect(a.numericMinTierBytes).toBe(1);
        expect(a.numericLimits).toEqual([251]);

        expect(b.declaredType).toBe('B');
        expect(b.numericMinTierBytes).toBe(2);
        expect(b.numericLimits).toEqual([4000, 100000000]);

        const element = arrayA.getElementType();
        expect(element.isNamedScalar()).toBe(true);
        expect(element.declaredType).toBe('A');
        expect(element.javaType).toBe('long');

        expect(a.toString()).not.toBe(b.toString());
    });

    test('does not alter intpack semantics', () => {
        const packed = generator.typeInfo('intpack');

        expect(packed.javaType).toBe('long');
        expect(packed.isPack).toBe(true);
        expect(packed.isNamedScalar()).toBe(false);
    });
});

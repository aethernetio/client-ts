
import { Validator } from '../generator/Validator';

function validate(meta: any): void {
    new Validator(
        { Test: meta },
        new Map([['Test', 'Test.adsl.yaml']]),
    ).validate();
}

describe('TieredInt Validator', () => {
    test('accepts canonical named scalars in fields and APIs', () => {
        expect(() => validate({
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
                        values: 'B[]',
                    },
                },
            },
            api: {
                CounterApi: {
                    methods: {
                        echo: {
                            id: 1,
                            params: {
                                value: 'A',
                            },
                            returns: 'B',
                        },
                    },
                },
            },
        })).not.toThrow();
    });

    test('rejects non-canonical configurations', () => {
        const invalidDefinitions = [
            {
                tieredInt: {
                    minTierBytes: 3,
                    limits: [1],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [-1],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [4294967296],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [100, 100],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [255],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [250, 2000],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 4,
                    limits: [10, 20],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [1, 2, 3, 4],
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [251],
                    extra: true,
                },
            },
            {
                tieredInt: {
                    minTierBytes: 1,
                    limits: [251],
                },
                fields: {
                    invalid: 'int',
                },
            },
        ];

        for (const definition of invalidDefinitions) {
            expect(() => validate({
                types: {
                    Bad: definition,
                },
            })).toThrow(/tieredInt/i);
        }
    });
});

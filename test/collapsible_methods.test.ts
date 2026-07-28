
import { TypeInfo } from '../generator/aether_protocol_core';
import { generateAetherProtocol } from '../generator/aether_protocol_generator';
import { Validator } from '../generator/Validator';
import { MetaContextBase } from '../src/aether_fastmeta';
import { DataInOut, DataInOutStatic } from '../src/aether_datainout';

describe('collapsible methods', () => {
    test('parses nullable and collapsible modifiers in either order', () => {
        const nullableThenCollapsible = new TypeInfo('string?~');
        const collapsibleThenNullable = new TypeInfo('string~?');

        expect(nullableThenCollapsible.isNullable).toBe(true);
        expect(nullableThenCollapsible.isCollapsible).toBe(true);
        expect(collapsibleThenNullable.isNullable).toBe(true);
        expect(collapsibleThenNullable.isCollapsible).toBe(true);
        expect(nullableThenCollapsible.javaType).toBe('string');
    });

    test('generates one deferred packet with replacement by equal key', async () => {
        const meta: any = {
            Test: {
                api: {
                    ProbeApi: {
                        methods: {
                            update: {
                                id: 3,
                                params: {
                                    key: 'string',
                                    value: 'string~',
                                    count: 'int~',
                                },
                            },
                        },
                    },
                },
            },
        };

        const files = await generateAetherProtocol(
            meta,
            async () => ({}),
            'Test',
        );
        const impl = files['aether_api_impl.ts'];

        expect(impl.match(/sendToRemote\(\{/g)).toHaveLength(1);
        expect(impl).toContain('.find(');
        expect(impl).toContain('.collapsibleValues =');
        expect(impl).toContain('.writeByte(3)');
        expect(impl).toContain('return sizeOut_');
        expect(impl).toContain('.getSizeForRead()');
        expect(impl).toContain('.length = 0');
    });


    test('supports all-collapsible and nullable parameters', async () => {
        const meta: any = {
            Test: {
                api: {
                    ProbeApi: {
                        methods: {
                            update: {
                                id: 3,
                                params: {
                                    value: 'string?~',
                                    count: 'int~?',
                                },
                            },
                        },
                    },
                },
            },
        };

        const files = await generateAetherProtocol(
            meta,
            async () => ({}),
            'Test',
        );
        const impl = files['aether_api_impl.ts'];

        expect(impl).toContain('value: string | null');
        expect(impl).toContain('count: number | null');
        expect(impl).toMatch(/\.find\(\([^)]*\) => true\)/);
        expect(impl).toContain('collapsibleValues[0]');
        expect(impl).toContain('collapsibleValues[1]');
    });


    test('lazy packet size follows current payload and packet is consumed', () => {
        const context = new MetaContextBase();
        let payload = new Uint8Array([1]);

        context.sendToRemote({
            size: () => payload.length,
            serialize: (out) => out.write(payload),
        });

        expect(context.size()).toBe(1);
        payload = new Uint8Array([1, 2, 3]);
        expect(context.size()).toBe(3);

        const out = new DataInOut();
        context.remoteDataToArray(out);
        expect(Array.from(out.toArray())).toEqual([1, 2, 3]);
        expect(context.isEmpty()).toBe(true);
    });


    test('DataInOut accepts only real DataInOut instances', () => {
        const source = new DataInOut();
        source.write(new Uint8Array([1, 2, 3]));

        const target = new DataInOut();
        target.write(source);
        expect(Array.from(target.toArray())).toEqual([1, 2, 3]);

        const staticSource = new DataInOutStatic(
            new Uint8Array([4, 5]),
            0,
            2,
        );
        const staticTarget = new DataInOut();
        staticTarget.write(staticSource);
        expect(Array.from(staticTarget.toArray())).toEqual([4, 5]);

        const invalidSource = {
            data: new Uint8Array([9]),
            readPos: 0,
            writePos: 1,
            getSizeForRead: (): number => 1,
            clear: (): void => undefined,
        };


        if (false) {
            // @ts-expect-error DataInOut must be an actual class instance.
            target.write(invalidSource);
        }


        expect(() => target.write(invalidSource as any)).toThrow(
            /Use a supported value created with its constructor/,
        );
    });


    test('validator rejects responses and tilde outside method parameters', () => {
        const meta: any = {
            Test: {
                types: {
                    InvalidDto: { fields: { value: 'string~' } },
                },
                api: {
                    InvalidApi: {
                        methods: {
                            update: {
                                id: 3,
                                params: { key: 'string', value: 'string~' },
                                returns: 'string',
                            },
                        },
                    },
                },
            },
        };
        const validator = new Validator(
            meta,
            new Map([['Test', '/tmp/Test.adsl.yaml']]),
        );

        expect(() => validator.validate()).toThrow(
            /cannot use the collapsible '~' modifier/,
        );
        expect(() => validator.validate()).toThrow(
            /cannot declare returns or throws/,
        );
    });
});
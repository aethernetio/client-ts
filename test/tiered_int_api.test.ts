
import { generateAetherProtocol } from '../generator/aether_protocol_generator';

describe('TieredInt API generation', () => {
    test('uses bigint signatures and named META on request and response wire paths', async () => {
        const meta: any = {
            Test: {
                types: {
                    A: {
                        tieredInt: {
                            minTierBytes: 1,
                            limits: [251],
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
                                returns: 'A',
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

        const api = files['aether_api.ts'];
        const impl = files['aether_api_impl.ts'];

        expect(api).toContain(
            'public static readonly META: FastMetaType<bigint> = FastMeta.tieredInt(1, 251);',
        );
        expect(api).toContain(
            'echo(value: bigint): ARFuture<bigint>;',
        );

        expect(impl).toContain(
            'echo: (value: bigint): ARFuture<bigint> => {',
        );

        const serializeUses = impl.match(/A\.META\.serialize/g) || [];
        const deserializeUses = impl.match(/A\.META\.deserialize/g) || [];

        expect(serializeUses.length).toBeGreaterThanOrEqual(2);
        expect(deserializeUses.length).toBeGreaterThanOrEqual(2);

        expect(impl).not.toContain(
            'FastMeta.META_LONG.serialize',
        );
        expect(impl).not.toContain(
            'FastMeta.META_LONG.deserialize',
        );
    });
});

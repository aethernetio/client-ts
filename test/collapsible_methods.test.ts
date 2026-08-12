
import { TypeInfo } from '../generator/aether_protocol_core';
import { generateAetherProtocol } from '../generator/aether_protocol_generator';
import { Validator } from '../generator/Validator';


import {
    AetherException,
    AutoFlushContext,
    PooledAutoFlushContext,
    FastMeta,
    FastFutureContextStub,
    MetaContextBase,

    MetaContextLocal,
    SerializerPackNumber,

    SecurityConnectionDropException,
} from '../src/aether_fastmeta';


import { DataInOut, DataInOutStatic } from '../src/aether_datainout';
import { AString } from '../src/aether_astring';

import {
    FastMetaClientWebSocket,
} from '../src/aether_fastmeta_net';


import {
    AetherCodec,
    CoderAndPort,
    IPAddressAndPorts,
    IPAddressAndPortsList,
    IPAddressV4,
    Message,
    ServerDescriptor,
} from '../src/aether_api';
import {
    getUriFromServerDescriptor,
} from '../src/aether_client_connection_base';
import {
    MyClientApiSafe,
} from '../src/aether_client_connection_work';




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


    test('keeps nullable API parameters nullable', async () => {
        const nullableInt = new TypeInfo('int?');

        expect(nullableInt.getArgumentType()).toBe(
            'number | null',
        );
        expect(nullableInt.getLocalVarType()).toBe(
            'number | null',
        );

        const meta: any = {
            Test: {
                api: {
                    ProbeApi: {
                        methods: {
                            update: {
                                id: 3,
                                params: {
                                    value: 'string?',
                                    count: 'int?',
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
        const api = files['aether_api.ts'];
        const impl = files['aether_api_impl.ts'];

        expect(api).toContain(
            'update(value: string | null, count: number | null): void;',
        );
        expect(impl).toContain(
            'update: (value: string | null, count: number | null): void => {',
        );
        expect(impl).toMatch(
            /let value_\d+: string \| null;/,
        );
        expect(impl).toMatch(
            /let count_\d+: number \| null;/,
        );
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

    test('generates multiplexor channels for sync maps and contexts', async () => {
        const meta: any = {
            Test: {
                types: {
                    MapChannel: {
                        syncmap: {
                            key: 'string',
                            value: 'int',
                        },
                    },
                    // RawChannel is intentionally undeclared.
                    TestMultiplexor: {
                        multiplexor: {
                            channels: ['MapChannel', 'RawChannel'],
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

        expect(api).toContain('export class TestMultiplexor');
        expect(api).toContain(
            'channel_MapChannel: SyncMapChannel<string, number>',
        );
        expect(api).toContain('channel_RawChannel: MetaContext');
        expect(api).toContain(
            'channel_MapChannel.receiveFromMultiplexor(channelData)',
        );
        expect(api).toContain(
            'channel_RawChannel.sendToRemote(channelData)',
        );
        expect(api).toContain(
            'channel_MapChannel.onFlushData((data) =>',
        );
        expect(api).toContain(
            'SerializerPackNumber.INSTANCE.put(packet, i)',
        );
        expect(api).not.toContain('export class MapChannel');
        expect(impl).toContain(
            'export class TestMultiplexorMetaImpl',
        );
    });


    test('abstract META dispatches only its own descendants', async () => {
        const meta: any = {
            Test: {
                types: {
                    Root: {
                        abstract: true,
                    },
                    Left: {
                        abstract: true,
                        parent: 'Root',
                    },
                    Right: {
                        abstract: true,
                        parent: 'Root',
                    },
                    LeftValue: {
                        id: 1,
                        parent: 'Left',
                        fields: {},
                    },
                    RightValue: {
                        id: 2,
                        parent: 'Right',
                        fields: {},
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
        const leftMeta = impl.match(
            /export class LeftMetaImpl[\s\S]*?(?=export class |$)/,
        )?.[0];

        expect(leftMeta).toBeDefined();
        expect(leftMeta).toContain('case 1:');
        expect(leftMeta).not.toContain('case 2:');
        expect(leftMeta).not.toContain('RightValue');
    });


    test('stream context keys are forwarded as separate keys', async () => {
        const meta: any = {
            Test: {
                api: {
                    ChildApi: {
                        methods: {},
                    },
                    ParentApi: {
                        methods: {},
                    },
                },
                types: {
                    TestStream: {
                        stream: {
                            api: 'ChildApi',
                            remoteApi: 'ParentApi',
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
            'findContext(this.factory!, ...(this._streamKeys || []))',
        );
        expect(api).toContain(
            'findContext(effectiveFactory, ...(this._streamKeys || []))',
        );
        expect(impl).toContain(
            'findContext(outObj.deferredFactory, ...(outObj.deferredKeys || []))',
        );
    });


    test('stream requires an API and guards remoteApi factory', async () => {
        const invalidMeta: any = {
            Test: {
                types: {
                    InvalidStream: {
                        stream: {},
                    },
                },
            },
        };

        await expect(
            generateAetherProtocol(
                invalidMeta,
                async () => ({}),
                'Test',
            ),
        ).rejects.toThrow('Api type is not String for: InvalidStream');

        const validMeta: any = {
            Test: {
                api: {
                    ChildApi: {
                        methods: {},
                    },
                    ParentApi: {
                        methods: {},
                    },
                },
                types: {
                    ValidStream: {
                        stream: {
                            api: 'ChildApi',
                            remoteApi: 'ParentApi',
                        },
                    },
                },
            },
        };

        const files = await generateAetherProtocol(
            validMeta,
            async () => ({}),
            'Test',
        );

        expect(files['aether_api.ts']).toContain(
            'if (!this.factory) throw new Error("factory is not set")',
        );
    });


    test('uses Java context keys and root future registry', () => {
        const root = new MetaContextBase();
        const objectKeyA = { value: 1 };
        const objectKeyB = { value: 1 };

        const first = root.findContext(() => ({}), objectKeyA);
        const same = root.findContext(
            () => ({ ignored: true }),
            objectKeyA,
        );
        const distinct = root.findContext(() => ({}), objectKeyB);

        expect(same).toBe(first);
        expect(distinct).not.toBe(first);

        const future = {
            onDone: jest.fn(),
            onError: jest.fn(),
        };
        const requestId = first.regFuture(future);

        expect(root.getFuture(requestId)).toBe(future);
        expect(() => first.getFuture(requestId)).toThrow(
            SecurityConnectionDropException,
        );
        expect(() => root.getFuture(0)).toThrow(
            SecurityConnectionDropException,
        );
    });

    test('notifies after unlock and propagates writability', () => {
        class ProbeContext extends MetaContextBase {
            public notifications = 0;

            protected override notifyDataAdded(): void {
                this.notifications++;
                super.notifyDataAdded();
            }
        }

        const root = new ProbeContext();
        const child = root.findContext(
            () => ({}),
            'child',
        ) as MetaContextBase;
        const writable = jest.fn();

        child.onWritable(writable);
        expect(writable).toHaveBeenCalledWith(true);

        root.fireWritable(false);
        expect(writable).toHaveBeenLastCalledWith(false);
        expect(child.connectionContext()).toBe(root);

        const lock = root.lock()!;
        root.sendToRemote(new Uint8Array([1]));
        expect(root.notifications).toBe(1);

        lock.close();
        expect(root.notifications).toBe(2);
    });



    test('matches the Java FastMeta API contract', async () => {
        const meta: any = {
            Test: {
                api: {
                    ProbeApi: {
                        methods: {},
                    },
                },
                types: {
                    ProbeStream: {
                        stream: {
                            api: 'ProbeApi',
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

        expect(impl).toContain(
            'makeLocal(ctx: MetaContext, dataIn: DataIn): void',
        );
        expect(impl).toContain(
            'this.makeLocal_fromDataIn(ctx, dataIn, ctx.getLocalApi() as ProbeApi)',
        );
        expect(impl).toContain(
            'destroy: (_force: boolean): AFuture => { sCtx_0.close(); return AFuture.completed(); },',
        );
        expect(api).toContain(
            'ProbeApi as any).META.makeLocal(this.activeContext',
        );
    });

    test('compares byte arrays by content', () => {
        expect(
            FastMeta.META_ARRAY_BYTE.metaEquals(
                new Uint8Array([1, 2, 3]),
                new Uint8Array([1, 2, 3]),
            ),
        ).toBe(true);
        expect(
            FastMeta.META_ARRAY_BYTE.metaEquals(
                new Uint8Array([1, 2, 3]),
                new Uint8Array([1, 2, 4]),
            ),
        ).toBe(false);
    });


    test('generates shared abstract field getters', async () => {
        const files = await generateAetherProtocol(
            {
                Test: {
                    types: {
                        Root: { abstract: true },
                        Left: {
                            id: 1,
                            parent: 'Root',
                            fields: {
                                payload: 'byte[]',
                                active: 'boolean',
                            },
                        },
                        Right: {
                            id: 2,
                            parent: 'Root',
                            fields: {
                                payload: 'byte[]',
                                active: 'boolean',
                            },
                        },
                    },
                },
            } as any,
            async () => ({}),
            'Test',
        );

        const api = files['aether_api.ts'];
        expect(api).toContain(
            'public abstract getPayload(): Uint8Array;',
        );
        expect(api).toContain(
            'public abstract isActive(): boolean;',
        );
    });

    test('wraps deserialization failures as connection drops', async () => {
        const files = await generateAetherProtocol(
            {
                Test: {
                    types: {
                        Root: { abstract: true },
                        Value: {
                            id: 1,
                            parent: 'Root',
                            fields: {
                                value: 'int',
                            },
                        },
                    },
                },
            } as any,
            async () => ({}),
            'Test',
        );

        const impl = files['aether_api_impl.ts'];
        expect(impl).toContain(
            'new SecurityConnectionDropException("Body error: "',
        );
        expect(impl).toContain(
            'if (e instanceof SecurityConnectionDropException) throw e;',
        );
        expect(impl).toContain(
            'new SecurityConnectionDropException("Hierarchy error: "',
        );
    });


    test('snapshots packets and retires contexts', () => {
        const ctx = new MetaContextBase();
        const packet = new Uint8Array([1, 2, 3]);

        ctx.sendToRemote(packet);
        packet[0] = 9;

        expect(
            Array.from(ctx.remoteDataToArrayAsArray()),
        ).toEqual([1, 2, 3]);

        const writable = jest.fn();
        ctx.onWritable(writable);
        ctx.sendToRemote(new Uint8Array([4]));
        ctx.retire();

        expect(ctx.isActive()).toBe(false);
        expect(ctx.isEmpty()).toBe(true);
        expect(ctx.size()).toBe(0);
        expect(writable).toHaveBeenLastCalledWith(false);

        ctx.sendToRemote(new Uint8Array([5]));
        expect(ctx.remoteDataToArrayAsArray().length).toBe(0);
    });


    test('matches Java TypeInfo and context contracts', () => {
        const packedArray = new TypeInfo('intpack[];');

        expect(packedArray.javaType).toBe('long');
        expect(packedArray.isArray).toBe(true);
        expect(packedArray.isPack).toBe(true);
        expect(packedArray.getElementType().isPack).toBe(true);

        const ctx = new MetaContextBase();
        const localApi = {};
        ctx.setLocalApi(localApi);

        expect(ctx.getLocalApi()).toBe(localApi);
        expect(
            ctx.toAString(new AString()).toString(),
        ).toBe('FastApiCtx(qs:0)');
        expect(() => ctx.setLocalApi(null)).toThrow(
            'Local API must not be null',
        );

        const auto = new AutoFlushContext(10, 100, 3);
        auto.sendToRemote(new Uint8Array([1, 2, 3, 4]));
        expect(auto.isActive()).toBe(false);
        auto.fireWritable(false);
        auto.retire();

        expect(
            new AetherException('failure'),
        ).toBeInstanceOf(Error);
    });

    test('uses AetherException for untyped remote errors', async () => {
        const files = await generateAetherProtocol(
            {
                Test: {
                    api: {
                        ProbeApi: {
                            methods: {
                                ping: {
                                    id: 2,
                                    params: {},
                                    returns: 'void',
                                },
                            },
                        },
                    },
                },
            } as any,
            async () => ({}),
            'Test',
        );

        expect(files['aether_api_impl.ts']).toContain(
            'new AetherException("Remote call failed without a typed exception")',
        );
    });


    test('matches Java stub and packed-long semantics', () => {
        expect(() =>
            FastFutureContextStub.sendToRemote(
                new Uint8Array([1, 2, 3]),
            ),
        ).not.toThrow();

        expect(() =>
            FastFutureContextStub.sendResultToRemote(
                1,
                new Uint8Array([4]),
            ),
        ).not.toThrow();

        expect(
            FastFutureContextStub.findContext(
                () => ({}),
                'key',
            ),
        ).toBeNull();

        expect(() =>
            FastFutureContextStub.getFuture(1),
        ).toThrow('UnsupportedOperationException');

        const remote = {};
        const meta = {
            makeRemote: jest.fn(() => remote),
        } as any;

        expect(
            FastFutureContextStub.makeRemote(meta),
        ).toBe(remote);
        expect(meta.makeRemote).toHaveBeenCalledWith(
            FastFutureContextStub,
        );

        const packed = 1_000_000_000_000n;
        const bytes =
            FastMeta.META_PACK.serializeToBytes(packed);

        expect(
            FastMeta.META_PACK.deserializeFromBytes(bytes),
        ).toBe(packed);
    });


    test('drops connection on malformed internal metadata', () => {
        expect(() =>
            FastMeta.META_REQUEST_ID.deserialize(
                FastFutureContextStub,
                new DataInOutStatic(new Uint8Array(0)),
            ),
        ).toThrow(SecurityConnectionDropException);

        expect(() =>
            FastMeta.META_REQUEST_ID.deserialize(
                FastFutureContextStub,
                new DataInOutStatic(new Uint8Array(0)),
            ),
        ).toThrow(
            'bad buffer for read request id. Data:',
        );

        expect(() =>
            FastMeta.META_COMMAND.deserialize(
                FastFutureContextStub,
                new DataInOutStatic(new Uint8Array(0)),
            ),
        ).toThrow(SecurityConnectionDropException);

        expect(() =>
            FastMeta.META_COMMAND.deserialize(
                FastFutureContextStub,
                new DataInOutStatic(new Uint8Array(0)),
            ),
        ).toThrow('bad buffer');
    });


    test('provides Java-compatible public collection metadata', () => {
        const booleans = [true, false, true];
        expect(
            FastMeta.META_ARRAY_BOOLEAN.deserializeFromBytes(
                FastMeta.META_ARRAY_BOOLEAN.serializeToBytes(
                    booleans,
                ),
            ),
        ).toEqual(booleans);

        const integers = [
            -2147483648,
            0,
            2147483647,
        ];
        expect(
            FastMeta.META_ARRAY_INT.deserializeFromBytes(
                FastMeta.META_ARRAY_INT.serializeToBytes(
                    integers,
                ),
            ),
        ).toEqual(integers);

        const longs = [
            -9223372036854775808n,
            0n,
            9223372036854775807n,
        ];
        expect(
            FastMeta.META_ARRAY_LONG.deserializeFromBytes(
                FastMeta.META_ARRAY_LONG.serializeToBytes(
                    longs,
                ),
            ),
        ).toEqual(longs);

        const longSet = new Set([7n, 1n, 99n]);
        expect(
            FastMeta.META_SET_LONG.deserializeFromBytes(
                FastMeta.META_SET_LONG.serializeToBytes(
                    longSet,
                ),
            ),
        ).toEqual(longSet);

        expect(FastMeta.META_ARRAY_SHORT).toBe(
            FastMeta.getMetaArray(FastMeta.META_SHORT),
        );
        expect(FastMeta.META_ARRAY_UUID).toBe(
            FastMeta.getMetaArray(FastMeta.META_UUID),
        );
        expect(FastMeta.META_ARRAY_URI).toBe(
            FastMeta.getMetaArray(FastMeta.META_URI),
        );
    });


    test('supports Message as a hierarchy root', async () => {
        const files = await generateAetherProtocol(
            {
                Test: {
                    types: {
                        Message: {
                            abstract: true,
                        },
                        TextMessage: {
                            id: 1,
                            parent: 'Message',
                            fields: {
                                text: 'string',
                            },
                        },
                    },
                },
            } as any,
            async () => ({}),
            'Test',
        );

        const api = files['aether_api.ts'];

        expect(api).toContain(
            'export abstract class Message implements ToString, FastMetaHierarchyType {',
        );
        expect(api).toContain(
            'export class TextMessage extends Message implements ToString, FastMetaHierarchyType {',
        );

        const impl = files['aether_api_impl.ts'];


        expect(api).toContain(
            'public getAetherTypeId(): number {',
        );
        expect(api).toContain('return -1;');


        expect(api).toContain(
            'public override getAetherTypeId(): number {',
        );
        expect(api).toContain('return 1;');

        expect(impl).toContain('case 1:');
        expect(impl).toContain('new TextMessage(');
    });


    test('reschedules auto-flush after a flush failure', () => {
        jest.useFakeTimers();

        try {
            const ctx = new AutoFlushContext(1, 100, 65536);
            let fail = true;

            ctx.onFlush(() => {
                if (fail) {
                    throw new Error('flush failure');
                }
                ctx.remoteDataToArrayAsArray();
            });

            ctx.sendToRemote(new Uint8Array([1]));

            expect(() =>
                jest.runOnlyPendingTimers(),
            ).toThrow('flush failure');
            expect(jest.getTimerCount()).toBe(1);

            fail = false;
            jest.runOnlyPendingTimers();

            expect(ctx.isEmpty()).toBe(true);
            expect(jest.getTimerCount()).toBe(0);
        } finally {
            jest.useRealTimers();
        }
    });


    test('uses pooled buffers for parent and child contexts', () => {
        const available: DataInOut[] = [];
        const pool = {
            acquire: jest.fn(
                () => available.pop() ?? new DataInOut(),
            ),
            release: jest.fn((data: DataInOut) => {
                data.clear();
                available.push(data);
            }),
        };

        const ctx = new PooledAutoFlushContext(
            null,
            pool,
        );
        ctx.fireWritable(false);

        ctx.sendToRemote(new Uint8Array([1, 2, 3]));
        expect(
            Array.from(ctx.remoteDataToArrayAsArray()),
        ).toEqual([1, 2, 3]);

        const child = ctx.findContext(
            () => ({}),
            'child',
        );
        child.sendToRemote(new Uint8Array([4, 5]));

        expect(
            Array.from(child.remoteDataToArrayAsArray()),
        ).toEqual([4, 5]);

        expect(pool.acquire).toHaveBeenCalledTimes(2);
        expect(pool.release).toHaveBeenCalledTimes(2);
        expect(available).toHaveLength(1);
    });


    test('ignores stale auto-flush timer generations', () => {
        const callbacks: Array<() => void> = [];
        const setTimeoutSpy = jest
            .spyOn(globalThis, 'setTimeout')
            .mockImplementation(((
                callback: () => void,
            ) => {
                callbacks.push(callback);
                return callbacks.length as unknown as
                    ReturnType<typeof setTimeout>;
            }) as typeof setTimeout);
        const clearTimeoutSpy = jest
            .spyOn(globalThis, 'clearTimeout')
            .mockImplementation(
                (() => {}) as typeof clearTimeout,
            );

        try {
            const ctx = new AutoFlushContext(
                1,
                100,
                65536,
            );

            expect(callbacks).toHaveLength(1);

            ctx.fireWritable(false);
            ctx.fireWritable(true);

            expect(callbacks).toHaveLength(2);
            const currentTask =
                (ctx as any).flushTask;

            callbacks[0]();

            expect((ctx as any).flushTask).toBe(
                currentTask,
            );
            expect(clearTimeoutSpy).toHaveBeenCalledTimes(
                1,
            );
        } finally {
            setTimeoutSpy.mockRestore();
            clearTimeoutSpy.mockRestore();
        }
    });


    test('hashes byte arrays with Java signed-byte semantics', () => {
        expect(
            FastMeta.META_ARRAY_BYTE.metaHashCode(
                new Uint8Array([255]),
            ),
        ).toBe(30);

        expect(
            FastMeta.META_ARRAY_BYTE.metaHashCode(
                new Uint8Array([128]),
            ),
        ).toBe(-97);

        expect(
            FastMeta.META_ARRAY_BYTE.metaHashCode(
                new Uint8Array([0, 127, 128, 255]),
            ),
        ).toBe(1041599);
    });


    test('processes one-byte FastMeta frames immediately', () => {
        const localApiMeta = {
            makeLocal_fromBytes_ctxLocal: jest.fn(),
        } as any;
        const client =
            new FastMetaClientWebSocket<Record<string, never>>();

        client.context = new MetaContextLocal({});
        client.localApiMeta = localApiMeta;

        const frame = new DataInOut();
        SerializerPackNumber.INSTANCE.put(frame, 1);
        frame.writeByte(42);

        (client as any).processBinaryData(
            frame.toArray(),
        );

        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal,
        ).toHaveBeenCalledTimes(1);
        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal
                .mock.calls[0][0],
        ).toBe(client.context);
        expect(
            Array.from(
                localApiMeta.makeLocal_fromBytes_ctxLocal
                    .mock.calls[0][1],
            ),
        ).toEqual([42]);
    });


    test('drops connection on FastMeta protocol errors', () => {
        const close = jest.fn();
        const localApiMeta = {
            makeLocal_fromBytes_ctxLocal: jest.fn(
                () => {
                    throw new SecurityConnectionDropException(
                        'Unknown command',
                    );
                },
            ),
        } as any;
        const client =
            new FastMetaClientWebSocket<Record<string, never>>();

        client.context = new MetaContextLocal({});
        client.localApiMeta = localApiMeta;
        client.websocket = {
            readyState: 1,
            close,
        } as any;

        const frame = new DataInOut();
        SerializerPackNumber.INSTANCE.put(frame, 1);
        frame.writeByte(99);

        (client as any).processBinaryData(
            frame.toArray(),
        );

        expect(close).toHaveBeenCalledWith(
            1002,
            'FastMeta protocol error',
        );
        expect(
            client.receiveBuffer.getSizeForRead(),
        ).toBe(0);
    });


    test('preserves FastMeta frames split across messages', () => {
        const localApiMeta = {
            makeLocal_fromBytes_ctxLocal: jest.fn(),
        } as any;
        const client =
            new FastMetaClientWebSocket<Record<string, never>>();

        client.context = new MetaContextLocal({});
        client.localApiMeta = localApiMeta;

        const shortFrame = new DataInOut();
        SerializerPackNumber.INSTANCE.put(
            shortFrame,
            1,
        );
        shortFrame.writeByte(42);
        const shortBytes = shortFrame.toArray();

        (client as any).processBinaryData(
            shortBytes.slice(0, 1),
        );

        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal,
        ).not.toHaveBeenCalled();
        expect(
            client.receiveBuffer.getSizeForRead(),
        ).toBe(1);

        (client as any).processBinaryData(
            shortBytes.slice(1),
        );

        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal,
        ).toHaveBeenCalledTimes(1);
        expect(
            Array.from(
                localApiMeta.makeLocal_fromBytes_ctxLocal
                    .mock.calls[0][1],
            ),
        ).toEqual([42]);

        localApiMeta.makeLocal_fromBytes_ctxLocal
            .mockClear();

        const longPayload = new Uint8Array(251);
        longPayload.fill(7);

        const longFrame = new DataInOut();
        SerializerPackNumber.INSTANCE.put(
            longFrame,
            longPayload.length,
        );
        longFrame.write(longPayload);
        const longBytes = longFrame.toArray();

        (client as any).processBinaryData(
            longBytes.slice(0, 1),
        );

        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal,
        ).not.toHaveBeenCalled();
        expect(
            client.receiveBuffer.getSizeForRead(),
        ).toBe(1);

        (client as any).processBinaryData(
            longBytes.slice(1),
        );

        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal,
        ).toHaveBeenCalledTimes(1);
        expect(
            localApiMeta.makeLocal_fromBytes_ctxLocal
                .mock.calls[0][1],
        ).toEqual(longPayload);
        expect(
            client.receiveBuffer.getSizeForRead(),
        ).toBe(0);
    });


    test('keeps one FastMeta context across reconnects', () => {
        jest.useFakeTimers();

        try {
            const client =
                new FastMetaClientWebSocket<Record<string, never>>();
            const localApi = {};
            const localApiFactory =
                jest.fn(() => localApi);

            (client as any).createWebSocketConnection =
                jest.fn();

            client.connect(
                'ws://test',
                {} as any,
                localApiFactory,
            );

            const context = client.context;
            expect(context).toBe(client);
            expect(client.localApi).toBe(localApi);
            expect(localApiFactory).toHaveBeenCalledTimes(1);
            expect(client.isActive()).toBe(false);

            const writableStates: boolean[] = [];
            client.onWritable((writable) => {
                writableStates.push(writable);
            });

            client.websocket = {
                readyState: 1,
                send: jest.fn(),
                close: jest.fn(),
            } as any;

            (client as any).handleOpen();

            expect(client.context).toBe(context);
            expect(client.isActive()).toBe(true);
            expect(localApiFactory).toHaveBeenCalledTimes(1);

            (client as any).handleCloseEvent({
                code: 1006,
            });

            expect(client.context).toBe(context);
            expect(client.isActive()).toBe(false);
            expect(writableStates).toContain(true);
            expect(
                writableStates[writableStates.length - 1],
            ).toBe(false);
        } finally {
            jest.clearAllTimers();
            jest.useRealTimers();
        }
    });


    test('delivers a single ClientApiSafe message', () => {
        const senderUid = {
            toString: () => 'sender',
        } as any;
        const data = new Uint8Array([1, 2, 3]);
        const deliver =
            jest.fn<void, [Uint8Array]>();

        const client = {
            getUid: jest.fn((): null => null),
            getMessageNode: jest.fn(() => ({
                sendMessageFromServerToClient: deliver,
            })),
        } as any;
        const connection = {} as any;

        const api =
            new MyClientApiSafe(client, connection);

        api.sendMessage(
            new Message(senderUid, data),
        );

        expect(client.getMessageNode)
            .toHaveBeenCalledWith(senderUid);
        expect(deliver)
            .toHaveBeenCalledWith(data);
    });


    test(
        'selects WS instead of a TCP fallback',
        () => {
            const descriptor =
                new ServerDescriptor(
                    21,
                    new IPAddressAndPortsList([
                        new IPAddressAndPorts(
                            new IPAddressV4(
                                new Uint8Array([
                                    127,
                                    0,
                                    0,
                                    1,
                                ]),
                            ),
                            [
                                new CoderAndPort(
                                    AetherCodec.UDP,
                                    9020,
                                ),
                                new CoderAndPort(
                                    AetherCodec.WS,
                                    9022,
                                ),
                                new CoderAndPort(
                                    AetherCodec.TCP,
                                    9020,
                                ),
                            ],
                        ),
                    ]),
                );

            expect(
                getUriFromServerDescriptor(
                    descriptor,
                    AetherCodec.WSS,
                ),
            ).toBeNull();

            expect(
                getUriFromServerDescriptor(
                    descriptor,
                    AetherCodec.WS,
                ),
            ).toBe(
                'ws://127.0.0.1:9022',
            );
        },
    );





















});
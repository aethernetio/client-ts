
import {
    FastMeta,
    FastMetaType,
    SecurityConnectionDropException,
} from '../src/aether_fastmeta';

function bytes(...values: number[]): Uint8Array {
    return new Uint8Array(values);
}

function expectVector(
    meta: FastMetaType<bigint>,
    value: bigint,
    ...expected: number[]
): void {
    expect(Array.from(meta.serializeToBytes(value))).toEqual(expected);
    expect(meta.deserializeFromBytes(bytes(...expected))).toBe(value);
}

describe('TieredInt FastMeta', () => {
    test('matches canonical uint8 limit 251 vectors', () => {
        const meta = FastMeta.tieredInt(1, 251);

        expectVector(meta, 0n, 0x00);
        expectVector(meta, 1n, 0x01);
        expectVector(meta, 250n, 0xFA);
        expectVector(meta, 251n, 0xFB);
        expectVector(meta, 252n, 0xFC, 0x00);
        expectVector(meta, 253n, 0xFC, 0x01);
        expectVector(meta, 255n, 0xFC, 0x03);
        expectVector(meta, 256n, 0xFC, 0x04);
        expectVector(meta, 506n, 0xFC, 0xFE);
        expectVector(meta, 507n, 0xFC, 0xFF);
        expectVector(meta, 508n, 0xFD, 0x00);
        expectVector(meta, 1275n, 0xFF, 0xFF);
    });

    test('matches canonical uint16 two-limit vectors', () => {
        const meta = FastMeta.tieredInt(
            2,
            4000,
            100000000,
        );

        expectVector(meta, 0n, 0x00, 0x00);
        expectVector(meta, 1n, 0x01, 0x00);
        expectVector(meta, 3999n, 0x9F, 0x0F);
        expectVector(meta, 4000n, 0xA0, 0x0F);
        expectVector(meta, 4001n, 0xA1, 0x0F, 0x00, 0x00);
        expectVector(
            meta,
            99999999n,
            0x96, 0x15, 0x5E, 0xD1,
        );
        expectVector(
            meta,
            100000000n,
            0x96, 0x15, 0x5F, 0xD1,
        );
        expectVector(
            meta,
            100000001n,
            0x96, 0x15, 0x60, 0xD1,
            0x00, 0x00, 0x00, 0x00,
        );
        expectVector(
            meta,
            100000002n,
            0x96, 0x15, 0x60, 0xD1,
            0x01, 0x00, 0x00, 0x00,
        );
        expectVector(
            meta,
            9223372036854775807n,
            0x96, 0x95, 0x5F, 0xD1,
            0xFE, 0x1E, 0x0A, 0xFA,
        );
    });

    test('matches canonical legacy three-limit vectors', () => {
        const meta = FastMeta.tieredInt(
            1,
            250,
            1514,
            1049834,
        );

        expectVector(meta, 0n, 0x00);
        expectVector(meta, 250n, 0xFA);
        expectVector(meta, 251n, 0xFB, 0x00);
        expectVector(meta, 1514n, 0xFF, 0xEF);
        expectVector(meta, 1515n, 0xFF, 0xF0, 0x00, 0x00);
        expectVector(
            meta,
            1049834n,
            0xFF, 0xFF, 0xFF, 0xFE,
        );
        expectVector(
            meta,
            1049835n,
            0xFF, 0xFF, 0x00, 0xFF,
            0x00, 0x00, 0x00, 0x00,
        );
    });

    test('keeps configuration-specific wire identity', () => {
        const a = FastMeta.tieredInt(1, 251);
        const b = FastMeta.tieredInt(
            2,
            4000,
            100000000,
        );

        expect(Array.from(a.serializeToBytes(251n)))
            .toEqual([0xFB]);
        expect(Array.from(b.serializeToBytes(251n)))
            .toEqual([0xFB, 0x00]);
    });

    test('supports canonical values above signed Java long', () => {
        const meta = FastMeta.tieredInt(
            2,
            4000,
            100000000,
        );
        const value = 9223372036854775808n;

        expect(meta.deserializeFromBytes(
            meta.serializeToBytes(value),
        )).toBe(value);
    });

    test('rejects invalid configuration and local values', () => {
        expect(() => FastMeta.tieredInt(3, 1)).toThrow();
        expect(() => FastMeta.tieredInt(1)).toThrow();
        expect(() => FastMeta.tieredInt(1, 255)).toThrow();
        expect(() => FastMeta.tieredInt(1, 100, 100)).toThrow();
        expect(() => FastMeta.tieredInt(4, 10, 20)).toThrow();

        const a = FastMeta.tieredInt(1, 251);
        expect(() => a.serializeToBytes(-1n)).toThrow();
        expect(() => a.serializeToBytes(1276n)).toThrow();
    });

    test('rejects truncated wire input and accepts canonical maximum', () => {
        const a = FastMeta.tieredInt(1, 251);
        const b = FastMeta.tieredInt(
            2,
            4000,
            100000000,
        );

        expect(
            () => a.deserializeFromBytes(bytes(0xFC)),
        ).toThrow(SecurityConnectionDropException);

        expect(
            () => b.deserializeFromBytes(bytes(0xA1, 0x0F)),
        ).toThrow(SecurityConnectionDropException);

        expect(
            b.deserializeFromBytes(bytes(
                0xFF, 0xFF, 0xFF, 0xFF,
                0xFF, 0xFF, 0xFF, 0xFF,
            )),
        ).toBe(16891083142259400960n);
    });
});
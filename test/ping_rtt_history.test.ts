
import {
    PingRttHistory,
} from '../src/aether_client_ping_rtt';

describe(
    'PingRttHistory',
    () => {

        test(
            'empty history uses fallback only for calculations',
            () => {
                const history =
                    new PingRttHistory();

                const stats =
                    history.snapshot();

                expect(
                    stats.sampleCount,
                ).toBe(0);

                expect(
                    stats.minRttMs,
                ).toBe(200);

                expect(
                    stats.p99RttMs,
                ).toBe(200);

                expect(
                    stats.guardMs,
                ).toBe(10);

                expect(
                    history.nextPingDelayMs(1000),
                ).toBe(990);
            },
        );

        test(
            'guard uses min and p99 of successful samples',
            () => {
                const history =
                    new PingRttHistory();

                for (
                    let ms = 10;
                    ms < 110;
                    ms++
                ) {
                    history.record(ms);
                }

                const stats =
                    history.snapshot();

                expect(
                    stats.sampleCount,
                ).toBe(100);

                expect(
                    stats.minRttMs,
                ).toBe(10);

                expect(
                    stats.p99RttMs,
                ).toBe(108);

                expect(
                    stats.guardMs,
                ).toBe(59);

                expect(
                    history.nextPingDelayMs(1000),
                ).toBe(941);
            },
        );

        test(
            'history keeps latest hundred samples',
            () => {
                const history =
                    new PingRttHistory();

                history.record(1);

                for (
                    let ms = 200;
                    ms < 300;
                    ms++
                ) {
                    history.record(ms);
                }

                const stats =
                    history.snapshot();

                expect(
                    stats.sampleCount,
                ).toBe(100);

                expect(
                    stats.minRttMs,
                ).toBe(200);

                expect(
                    stats.p99RttMs,
                ).toBe(298);
            },
        );

        test(
            'invalid samples are ignored',
            () => {
                const history =
                    new PingRttHistory();

                history.record(0);
                history.record(-1);
                history.record(Number.NaN);

                expect(
                    history.snapshot().sampleCount,
                ).toBe(0);
            },
        );

        test(
            'local delay is clamped to one millisecond',
            () => {
                const history =
                    new PingRttHistory();

                expect(
                    history.nextPingDelayMs(5),
                ).toBe(1);
            },
        );

        test(
            'guard rounds up to whole milliseconds like Java',
            () => {
                const history =
                    new PingRttHistory();

                history.record(10);
                history.record(11);

                expect(
                    history.snapshot().guardMs,
                ).toBe(11);

                expect(
                    history.nextPingDelayMs(1_000),
                ).toBe(989);
            },
        );


    },
);
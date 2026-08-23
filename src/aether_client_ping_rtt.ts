
export interface PingRttStats {
    sampleCount: number;
    minRttMs: number;
    p99RttMs: number;
    guardMs: number;
}

export class PingRttHistory {

    public static readonly CAPACITY = 100;

    public static readonly FALLBACK_RTT_MS = 200;

    private static readonly BASE_GUARD_MS = 10;

    private readonly samples =
        new Array<number>(
            PingRttHistory.CAPACITY,
        ).fill(0);

    private sequence = 0;

    public record(rttMs: number): void {
        if (
            !Number.isFinite(rttMs)
            || rttMs <= 0
        ) {
            return;
        }

        const index =
            this.sequence
            % PingRttHistory.CAPACITY;

        this.sequence++;

        this.samples[index] = rttMs;
    }

    public snapshot(): PingRttStats {
        const current =
            this.samples
                .filter(sample => sample > 0)
                .sort((a, b) => a - b);

        if (current.length === 0) {
            return {
                sampleCount: 0,
                minRttMs:
                    PingRttHistory.FALLBACK_RTT_MS,
                p99RttMs:
                    PingRttHistory.FALLBACK_RTT_MS,
                guardMs:
                    PingRttHistory.BASE_GUARD_MS,
            };
        }

        const minRttMs =
            current[0];

        const p99Index =
            Math.max(
                0,
                Math.ceil(
                    current.length * 0.99,
                ) - 1,
            );

        const p99RttMs =
            current[p99Index];


        const guardMs =
            Math.ceil(
                Math.max(
                    0,
                    (p99RttMs - minRttMs) / 2,
                )
                + PingRttHistory.BASE_GUARD_MS,
            );


        return {
            sampleCount: current.length,
            minRttMs,
            p99RttMs,
            guardMs,
        };
    }

    public nextPingDelayMs(
        fullPingIntervalMs: number,
    ): number {
        const guardMs =
            this.snapshot().guardMs;

        return Math.max(
            1,
            fullPingIntervalMs - guardMs,
        );
    }
}


export class PingAttemptGate {

    private sequence = 0;

    private activeToken = 0;

    public begin(): number | null {
        if (this.activeToken !== 0) {
            return null;
        }

        const token =
            ++this.sequence;

        this.activeToken =
            token;

        return token;
    }

    public complete(
        token: number,
    ): boolean {
        if (
            this.activeToken !== token
        ) {
            return false;
        }

        this.activeToken = 0;

        return true;
    }

    public reset(): void {
        this.activeToken = 0;
    }
}
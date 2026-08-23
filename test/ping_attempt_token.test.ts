

import {
    PingAttemptGate,
} from '../src/aether_client_ping_rtt';


describe(
    'PingAttemptGate',
    () => {

        test(
            'active attempt can be completed exactly once',
            () => {
                const gate =
                    new PingAttemptGate();

                const token =
                    gate.begin();

                expect(token).not.toBeNull();

                expect(
                    gate.begin(),
                ).toBeNull();

                expect(
                    gate.complete(token!),
                ).toBe(true);

                expect(
                    gate.complete(token!),
                ).toBe(false);

                expect(
                    gate.begin(),
                ).not.toBeNull();
            },
        );

        test(
            'old token cannot release a newer attempt',
            () => {
                const gate =
                    new PingAttemptGate();

                const firstToken =
                    gate.begin();

                expect(firstToken).not.toBeNull();

                expect(
                    gate.complete(firstToken!),
                ).toBe(true);

                const secondToken =
                    gate.begin();

                expect(secondToken).not.toBeNull();
                expect(secondToken).not.toBe(firstToken);

                expect(
                    gate.complete(firstToken!),
                ).toBe(false);

                expect(
                    gate.begin(),
                ).toBeNull();

                expect(
                    gate.complete(secondToken!),
                ).toBe(true);

                expect(
                    gate.begin(),
                ).not.toBeNull();
            },
        );

        test(
            'reset invalidates previous token',
            () => {
                const gate =
                    new PingAttemptGate();

                const firstToken =
                    gate.begin();

                expect(firstToken).not.toBeNull();

                gate.reset();

                const secondToken =
                    gate.begin();

                expect(secondToken).not.toBeNull();
                expect(secondToken).not.toBe(firstToken);

                expect(
                    gate.complete(firstToken!),
                ).toBe(false);

                expect(
                    gate.complete(secondToken!),
                ).toBe(true);
            },
        );
    },
);

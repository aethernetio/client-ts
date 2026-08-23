
import {
    AetherCloudClient,
} from "../src/aether_client";
import {
    ConnectionWork,
} from "../src/aether_client_connection_work";
import {
    ServerDescriptor,
} from "../src/aether_api";


describe(
    "AetherCloudClient known servers",
    () => {
        test(
            "connectServers persists the descriptor batch after starting every connection",
            () => {
                const client =
                    Object.create(
                        AetherCloudClient.prototype,
                    ) as AetherCloudClient;

                const started: number[] = [];
                const saveState =
                    jest.fn();

                (
                    client as unknown as {
                        state: {
                            saveState: () => void;
                        };
                    }
                ).state = {
                    saveState,
                };

                (
                    client as unknown as {
                        getConnection:
                            (
                                descriptor:
                                    ServerDescriptor,
                            ) => ConnectionWork;
                    }
                ).getConnection =
                    (
                        descriptor:
                            ServerDescriptor,
                    ): ConnectionWork => {
                        started.push(
                            descriptor.id,
                        );

                        return {
                            sid: descriptor.id,
                        } as unknown as ConnectionWork;
                    };

                const descriptors =
                    [
                        20,
                        21,
                        22,
                        23,
                        24,
                    ].map(
                        id =>
                            ({
                                id,
                            }) as ServerDescriptor,
                    );

                client.connectServers(
                    descriptors,
                );

                expect(started).toEqual([
                    20,
                    21,
                    22,
                    23,
                    24,
                ]);

                expect(
                    saveState,
                ).toHaveBeenCalledTimes(1);
            },
        );

        test(
            "getKnownServerDescriptors returns only cached descriptors",
            () => {
                const client =
                    Object.create(
                        AetherCloudClient.prototype,
                    ) as AetherCloudClient;

                const server20 =
                    ({
                        id: 20,
                    }) as ServerDescriptor;

                const server24 =
                    ({
                        id: 24,
                    }) as ServerDescriptor;

                (
                    client as unknown as {
                        state: {
                            getServerInfoAll:
                                () => Iterable<{
                                    getDescriptor:
                                        () =>
                                            ServerDescriptor
                                            | null;
                                }>;
                        };
                    }
                ).state = {
                    getServerInfoAll: () => [
                        {
                            getDescriptor:
                                () => server20,
                        },
                        {
                            getDescriptor:
                                () => null,
                        },
                        {
                            getDescriptor:
                                () => server24,
                        },
                    ],
                };

                expect(
                    client
                        .getKnownServerDescriptors(),
                ).toEqual([
                    server20,
                    server24,
                ]);
            },
        );
    },
);

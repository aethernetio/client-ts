
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
    "AetherCloudClient parallel connection startup",
    () => {
        test(
            "connectServers starts every supplied connection before returning",
            () => {
                const client =
                    Object.create(
                        AetherCloudClient.prototype,
                    ) as AetherCloudClient;

                const started: number[] = [];

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

                const connections =
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
                    connections,
                ).toHaveLength(5);
            },
        );
    },
);

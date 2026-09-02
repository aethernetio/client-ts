import {
    AetherCodec,
    AuthorizedApiRemote,
    ClientApiSafe,
    ClientApiUnsafe,
    IpInfo,
    LoginApi,
    LoginApiRemote,
    LoginClientStream,
    LoginStream,
    ServerDescriptor,
    ServerDescriptorWithGeo,
} from './aether_api';
import { CryptoEngine } from './aether_crypto';
import { ARFuture } from './aether_future';
import { ClientStartException, UUID } from './aether_types';
import {
    NetworkProbeConnectionBase,
    NetworkProbeConnectionOwner,
    probeUriFromServerDescriptor,
} from './aether_network_probe_connection_base';

export interface NetworkProbeWorkOwner extends NetworkProbeConnectionOwner {
    getAlias(): UUID | null;
    getCryptoEngineForServer(serverId: number): CryptoEngine;
    getLoginApiVersion(): number;
    getPingTime(): number;
}

/**
 * WORK transport for the browser network observer.
 *
 * It keeps only login/authentication, server discovery, public-IP lookup and
 * RTT measurement. MessageNode, access groups, client-to-client streams and
 * WebRTC are intentionally absent.
 */
export class NetworkProbeConnectionWork
extends NetworkProbeConnectionBase<ClientApiUnsafe, LoginApiRemote>
implements ClientApiUnsafe {
    private readonly owner: NetworkProbeWorkOwner;
    private readonly serverDescriptor: ServerDescriptor;
    private readonly cryptoEngine: CryptoEngine;
    private authorizedApiV0!: AuthorizedApiRemote;
    private authorizedApi!: AuthorizedApiRemote;
    private negotiatedLoginApiVersion = -1;

    /**
     * Server-to-client safe notifications are irrelevant to a network probe.
     * A Proxy supplies no-op methods for the generated callback API without
     * importing the full MyClientApiSafe implementation and its messaging/
     * access/WebRTC dependency graph.
     */
    private readonly localSafeApi = new Proxy<Record<PropertyKey, unknown>>({}, {
        get: (_target, property) => {
            if (property === 'then') return undefined;
            return (..._args: unknown[]): void => undefined;
        },
    }) as unknown as ClientApiSafe;

    constructor(owner: NetworkProbeWorkOwner, descriptor: ServerDescriptor) {
        let uri = probeUriFromServerDescriptor(descriptor, AetherCodec.WSS);
        if (!uri) uri = probeUriFromServerDescriptor(descriptor, AetherCodec.WS);
        if (!uri) {
            throw new ClientStartException(
                `No browser WebSocket URI for WORK server ${descriptor.id}`,
            );
        }

        super(owner, uri, ClientApiUnsafe.META, LoginApi.META);
        this.owner = owner;
        this.serverDescriptor = descriptor;
        this.cryptoEngine = owner.getCryptoEngineForServer(descriptor.id);

        const alias = owner.getAlias();
        if (!alias) {
            throw new ClientStartException('Network probe has no registered alias');
        }

        const rootApi = this.getRootApi();
        if (!rootApi) {
            throw new ClientStartException(`WORK root API unavailable for SID ${descriptor.id}`);
        }

        this.authorizedApiV0 = rootApi.openLoginByAlias(
            alias,
            () => this.localSafeApi,
            (data: Uint8Array) => this.cryptoEngine.encrypt(data),
            'networkProbeLoginByAlias',
        );
        this.authorizedApi = this.authorizedApiV0;
        this.negotiateLoginApiVersion();
    }

    private negotiateLoginApiVersion(): void {
        if (!this.authorizedApiV0 || this.negotiatedLoginApiVersion !== -1) return;
        const version = this.owner.getLoginApiVersion();
        if (version === 0) {
            this.authorizedApi = this.authorizedApiV0;
            this.negotiatedLoginApiVersion = 0;
            return;
        }
        if (version === 1) {
            this.authorizedApiV0.switchVersion(1);
            this.authorizedApi = LoginStream.V1.api(this.authorizedApiV0);
            this.negotiatedLoginApiVersion = 1;
            return;
        }
        throw new Error(`Unsupported LoginStream API version: ${version}`);
    }

    protected override onConnectionStateChanged(isWritable: boolean): void {
        if (!this.authorizedApiV0) return;
        if (!isWritable) {
            this.negotiatedLoginApiVersion = -1;
            this.authorizedApi = this.authorizedApiV0;
            return;
        }
        if (this.cryptoEngine) this.negotiateLoginApiVersion();
    }

    public sendSafeApiDataMulti(_backId: number, _data: LoginClientStream): void {
        throw new Error('UnsupportedOperationException');
    }

    public sendSafeApiData(data: LoginClientStream): void {
        data.asIn()
            .convert((value: Uint8Array) => this.cryptoEngine.decrypt(value))
            .ctx(this.authorizedApi.getFastMetaContext())
            .accept();
    }

    public getServerDescriptor(): ServerDescriptor {
        return this.serverDescriptor;
    }

    public getServers(): ARFuture<ServerDescriptorWithGeo[]> {
        return this.authorizedApi.getServers();
    }

    public getMyIp(): ARFuture<IpInfo> {
        const rootApi = this.getRootApi();
        if (!rootApi) return ARFuture.ofThrow(new Error('WORK root API unavailable'));
        return rootApi.getMyIp();
    }

    public measurePingMs(): ARFuture<number> {
        if (!this.isWritable()) {
            return ARFuture.ofThrow(
                new Error(`WORK connection ${this.serverDescriptor.id} is not writable`),
            );
        }

        const result = ARFuture.make<number>();
        const startedAt = performance.now();
        const pingIntervalMs = Math.max(1, this.owner.getPingTime() || 1000);
        const rxWindowMs = Math.max(pingIntervalMs * 5, 5000);

        try {
            this.authorizedApi
                .ping(BigInt(pingIntervalMs), BigInt(rxWindowMs))
                .to(() => result.tryDone(Math.max(0.001, performance.now() - startedAt)))
                .onError((error: Error) => result.tryError(error));
        } catch (error) {
            result.tryError(error instanceof Error ? error : new Error(String(error)));
        }

        return result;
    }
}

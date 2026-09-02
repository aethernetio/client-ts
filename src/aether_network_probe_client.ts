import {
    CryptoLib,
    FinishResult,
    IpInfo,
    ServerDescriptor,
    ServerDescriptorWithGeo,
} from './aether_api';
import {
    AKey,
    CryptoEngine,
    CryptoProviderFactory,
    PairSymKeys,
    SignedKey,
} from './aether_crypto';
import { CryptoUtils } from './aether_crypto_utils';
import { ClientStateInLocalStorage } from './aether_client_state_localstorage';
import { ClientCloud } from './aether_client_cloud_priority';
import { Destroyer } from './aether_utils';
import { UUID } from './aether_types';
import {
    AetherNetworkProbeClientContract,
    AetherNetworkProbeClientOptions,
} from './aether_network_probe_contract';
import { NetworkProbeConnectionWork } from './aether_network_probe_connection_work';

const WORK_CONNECT_TIMEOUT_MS = 15_000;
const API_TIMEOUT_MS = 10_000;

/**
 * Minimal browser client for observing the live Æthernet WORK network.
 *
 * This deliberately does not inherit from AetherCloudClient. It reuses the
 * same persisted state, generated wire protocol, FastMeta transport and
 * Sodium crypto while excluding messaging, access groups and WebRTC.
 */
export class AetherNetworkProbeClient
implements AetherNetworkProbeClientContract {
    public readonly destroyer = new Destroyer('AetherNetworkProbeClient');

    private readonly options: AetherNetworkProbeClientOptions;
    private state: ClientStateInLocalStorage | null = null;
    private cryptoReady = false;
    private stateReady = false;
    private readonly connections = new Map<number, NetworkProbeConnectionWork>();
    private registrationConnection: { destroy(force: boolean): unknown } | null = null;

    constructor(options: AetherNetworkProbeClientOptions) {
        this.options = {
            parentUid: options.parentUid,
            registrationUris: [...options.registrationUris],
            storageKey: options.storageKey,
            name: options.name,
        };
    }

    public async initializeCrypto(): Promise<void> {
        if (this.cryptoReady) return;
        const sodiumModule = await import('./aether_crypto_sodium');
        await sodiumModule.applySodium();
        this.cryptoReady = true;
    }

    public async restoreState(): Promise<void> {
        if (this.stateReady) return;
        if (!this.cryptoReady) {
            throw new Error('initializeCrypto() must complete before restoreState()');
        }
        this.state = new ClientStateInLocalStorage(
            UUID.fromString(this.options.parentUid),
            [...this.options.registrationUris],
            undefined,
            CryptoLib.SODIUM,
            this.options.storageKey,
        );
        this.stateReady = true;
    }

    private requireState(): ClientStateInLocalStorage {
        if (!this.state) throw new Error('Network probe state is not restored');
        return this.state;
    }

    public async connect(): Promise<void> {
        if (!this.cryptoReady) await this.initializeCrypto();
        if (!this.stateReady) await this.restoreState();
        const state = this.requireState();

        if (!state.getUid() || !state.getAlias()) {
            await this.performRegistration();
            await this.persistState();
        }

        const uid = state.getUid();
        if (!uid || !state.getAlias()) {
            throw new Error('Registration completed without UID/alias');
        }

        const cloud = state.getCloud(uid);
        const known = this.getKnownServerDescriptors();
        if (!cloud || cloud.toCloud().data.length === 0) {
            throw new Error('Network probe state has no WORK cloud after registration');
        }
        if (known.length === 0) {
            throw new Error('Network probe state has no WORK server descriptors');
        }

        // Match universal warm-start semantics: start known transports now,
        // but do not wait for WebSocket authentication before connect() returns.
        await this.connectServers(known);
    }

    private async performRegistration(): Promise<void> {
        const state = this.requireState();
        const uris = state.getRegistrationUri().slice(0, 3);
        if (uris.length === 0) throw new Error('No registration URI configured');

        // Cold-only dependency. bcrypt/work-proof code must not enter the warm
        // startup chunk.
        const module = await import('./aether_network_probe_connection_registration');
        const registrations = uris.map(uri =>
            new module.NetworkProbeConnectionRegistration(this, uri),
        );
        this.registrationConnection = registrations[0] ?? null;

        const attempts = registrations.map(connection =>
            connection.registration().toPromise(25_000),
        );
        await Promise.any(attempts);

        if (!state.getUid() || !state.getAlias()) {
            throw new Error('Registration transport completed before state confirmation');
        }
    }

    public getKnownServerDescriptors(): readonly ServerDescriptor[] {
        if (!this.state) return [];
        const descriptors: ServerDescriptor[] = [];
        for (const serverInfo of this.state.getServerInfoAll()) {
            const descriptor = serverInfo.getDescriptor();
            if (descriptor) descriptors.push(descriptor);
        }
        return descriptors;
    }

    private toBaseDescriptor(
        descriptor: ServerDescriptor | ServerDescriptorWithGeo,
    ): ServerDescriptor {
        if (descriptor instanceof ServerDescriptor) return descriptor;
        return new ServerDescriptor(descriptor.id, descriptor.ipAddress);
    }

    public async connectServers(
        descriptors: readonly (ServerDescriptor | ServerDescriptorWithGeo)[],
    ): Promise<void> {
        const state = this.requireState();
        for (const descriptorWithGeo of descriptors) {
            const descriptor = this.toBaseDescriptor(descriptorWithGeo);
            const sid = descriptor.id;
            state.getServerInfo(sid).setDescriptor(descriptor);
            if (!this.connections.has(sid)) {
                this.connections.set(
                    sid,
                    new NetworkProbeConnectionWork(this, descriptor),
                );
            }
        }
        if (descriptors.length > 0 && state.getUid()) state.saveState();
    }

    private async firstWritableConnection(): Promise<NetworkProbeConnectionWork> {
        const existing = Array.from(this.connections.values());
        const writable = existing.find(connection => connection.isWritable());
        if (writable) return writable;
        if (existing.length === 0) {
            throw new Error('No WORK connections have been started');
        }

        const candidates = existing.map(async connection => {
            await connection.connectFuture.toPromise(WORK_CONNECT_TIMEOUT_MS);
            return connection;
        });
        return Promise.any(candidates);
    }

    public async waitForFirstWorkConnection(): Promise<void> {
        await this.firstWritableConnection();
    }

    public async getServers(): Promise<readonly ServerDescriptorWithGeo[]> {
        const connection = await this.firstWritableConnection();
        return connection.getServers().toPromise(API_TIMEOUT_MS);
    }

    public async getMyIp(): Promise<IpInfo> {
        const connection = await this.firstWritableConnection();
        return connection.getMyIp().toPromise(API_TIMEOUT_MS);
    }

    public async measureServerPingMs(sid: number): Promise<number> {
        const connection = this.connections.get(sid);
        if (!connection) throw new Error(`No WORK connection for SID ${sid}`);
        if (!connection.isWritable()) {
            await connection.connectFuture.toPromise(WORK_CONNECT_TIMEOUT_MS);
        }
        return connection.measurePingMs().toPromise(API_TIMEOUT_MS);
    }

    public async persistState(): Promise<void> {
        const state = this.requireState();
        if (state.getUid()) state.saveState();
    }

    public async destroy(): Promise<void> {
        await this.destroyer.destroy(true).toPromise(5_000);
        this.connections.clear();
        this.registrationConnection = null;
    }

    // ---- Narrow runtime surface required by registration/WORK transports ----

    public getCryptoLib(): CryptoLib {
        return this.requireState().getCryptoLib();
    }

    public getParent(): UUID {
        return this.requireState().getParentUid();
    }

    public getAlias(): UUID | null {
        return this.requireState().getAlias();
    }

    public getUid(): UUID | null {
        return this.requireState().getUid();
    }

    public getLoginApiVersion(): number {
        return 0;
    }

    public getPingTime(): number {
        return this.requireState().getPingDuration().getNow() ?? 1000;
    }

    public getMasterKey(): AKey.Symmetric {
        const state = this.requireState();
        const existing = state.getMasterKey();
        if (existing) return CryptoUtils.of(existing).asSymmetric();

        const key = CryptoProviderFactory
            .getProvider(this.getCryptoLib().toString())
            .createSymmetricKey();
        state.setMasterKey(key);
        return key;
    }

    public getCryptoEngineForServer(serverId: number): CryptoEngine {
        const master = this.getMasterKey();
        const keys: PairSymKeys = master
            .getCryptoProvider()
            .createKeyForServer(master, serverId);
        return CryptoEngine.of(
            keys.clientKey.toCryptoEngine(),
            keys.serverKey.toCryptoEngine(),
        );
    }

    public verifySign(key: SignedKey): boolean {
        return CryptoUtils.verifySignInternal(
            key,
            this.requireState().getRootSigners(),
        );
    }

    public putServerDescriptor(descriptor: ServerDescriptor): void {
        this.requireState()
            .getServerInfo(descriptor.id)
            .setDescriptor(descriptor);
    }

    public confirmRegistration(result: FinishResult): void {
        const state = this.requireState();
        const uid = result.getUid();
        const cloud = result.getCloud();
        state.setCloud(uid, new ClientCloud(uid, cloud));
        state.setUid(uid);
        state.setAlias(result.getAlias());
    }
}

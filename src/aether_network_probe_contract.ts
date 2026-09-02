import type { IpInfo, ServerDescriptor, ServerDescriptorWithGeo } from './aether_api';

/** Experimental browser-only contract. Not part of the normal SDK barrel. */
export const NETWORK_PROBE_IMPLEMENTATION_STAGE = 'foundation' as const;

export interface AetherNetworkProbeClientOptions {
    parentUid: string;
    registrationUris: readonly string[];
    storageKey: string;
    name: string;
}

export interface NetworkProbeStageTimings {
    scriptLoadEvalMs: number;
    sodiumReadyMs: number;
    stateRestoreMs: number;
    connectMs: number;
    serverListMs: number;
    myIpMs: number;
    firstWorkConnectionMs: number;
    firstPingMs: number;
    allPingsMs: number;
    longTaskCount: number;
    longTaskTotalMs: number;
}

export interface NetworkProbeSnapshot {
    knownServers: readonly ServerDescriptor[];
    servers: readonly ServerDescriptorWithGeo[];
    myIp: IpInfo | null;
    pingMsBySid: Readonly<Record<number, number>>;
}

/**
 * Contract used by the browser benchmark and, later, the website adapter.
 * Explicit crypto/state methods keep startup stages independently measurable.
 */
export interface AetherNetworkProbeClientContract {
    initializeCrypto(): Promise<void>;
    restoreState(): Promise<void>;
    connect(): Promise<void>;
    getKnownServerDescriptors(): readonly ServerDescriptor[];
    getServers(): Promise<readonly ServerDescriptorWithGeo[]>;
    getMyIp(): Promise<IpInfo>;
    connectServers(descriptors: readonly ServerDescriptor[]): Promise<void>;
    waitForFirstWorkConnection(): Promise<void>;
    measureServerPingMs(sid: number): Promise<number>;
    persistState(): Promise<void>;
    destroy(): Promise<void>;
}

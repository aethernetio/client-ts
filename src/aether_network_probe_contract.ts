import type { IpInfo, ServerDescriptor, ServerDescriptorWithGeo } from './aether_api';

/** Experimental browser-only contract. Not part of the normal SDK barrel. */
export const NETWORK_PROBE_IMPLEMENTATION_STAGE = 'foundation' as const;

export interface NetworkProbeStageTimings {
    stateRestoreMs: number;
    connectMs: number;
    serverListMs: number;
    myIpMs: number;
    firstWorkConnectionMs: number;
    firstPingMs: number;
    allPingsMs: number;
}

export interface NetworkProbeSnapshot {
    knownServers: readonly ServerDescriptor[];
    servers: readonly ServerDescriptorWithGeo[];
    myIp: IpInfo | null;
    pingMsBySid: Readonly<Record<number, number>>;
}

export interface AetherNetworkProbeClientContract {
    connect(): Promise<void>;
    getKnownServerDescriptors(): readonly ServerDescriptor[];
    getServers(): Promise<readonly ServerDescriptorWithGeo[]>;
    getMyIp(): Promise<IpInfo>;
    connectServers(descriptors: readonly ServerDescriptor[]): Promise<void>;
    measureServerPingMs(sid: number): Promise<number>;
    destroy(): Promise<void>;
}

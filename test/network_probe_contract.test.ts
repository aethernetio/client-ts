import { NETWORK_PROBE_IMPLEMENTATION_STAGE } from '../src/aether_network_probe_contract';
import { AetherNetworkProbeClient } from '../src/aether_network_probe_client';

describe('network probe live prototype', () => {
    it('advertises the live prototype stage', () => {
        expect(NETWORK_PROBE_IMPLEMENTATION_STAGE).toBe('live-prototype');
    });

    it('exports a concrete client implementation', () => {
        expect(typeof AetherNetworkProbeClient).toBe('function');
    });
});

import { NETWORK_PROBE_IMPLEMENTATION_STAGE } from '../src/aether_network_probe_contract';
describe('network probe foundation', () => {
    it('is explicitly a foundation until live transport is implemented', () => {
        expect(NETWORK_PROBE_IMPLEMENTATION_STAGE).toBe('foundation');
    });
});

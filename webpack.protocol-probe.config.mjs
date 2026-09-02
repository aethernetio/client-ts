import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import baseFactory from './webpack.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async () => {
  const base = await baseFactory({ buildTarget: 'browser' });
  return {
    ...base,
    entry: { browser: './src/aether_browser_protocol_probe.ts' },
    output: {
      ...base.output,
      path: resolve(__dirname, 'build/protocol-probe'),
      filename: 'aether-protocol-probe.min.js',
      clean: true,
      library: { name: 'AetherProbeProtocol', type: 'window' }
    }
  };
};

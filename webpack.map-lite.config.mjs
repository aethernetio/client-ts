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
    entry: {
      browser: './src/aether_browser_map.ts'
    },
    output: {
      ...base.output,
      path: resolve(__dirname, 'build/map-lite'),
      filename: 'aether-client-map-lite.min.js',
      clean: true,
      library: {
        name: 'Aether',
        type: 'window'
      }
    }
  };
};

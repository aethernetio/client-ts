import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
    {
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000
        },
        entry: './src/aether.core.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            fallback: {
                "crypto": false,
            }
        },
        // devtool: 'eval-source-map',
        devtool: 'inline-source-map',
        output: {
            // Use the redefined __dirname variable here
            path: resolve(__dirname, 'build'), 
            filename: 'aether.js'
        },
        mode: 'development'
        // mode: 'production'
    }
];
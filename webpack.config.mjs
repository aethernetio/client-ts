// =============================================================================================
// FILE: webpack.config.mjs (ИСПРАВЛЕНИЕ 2: Принудительное применение compilerOptions)
// =============================================================================================
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async (env) => {


    const commonConfig = {
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: 'tsconfig.json',
                                // --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
                                // Мы принудительно устанавливаем опцию здесь,
                                // чтобы она имела наивысший приоритет.
                                compilerOptions: {
                                    "skipLibCheck": true
                                }
                                // --- КОНЕЦ ИЗМЕНЕНИЯ ---
                            }
                        }
                    ],
                    exclude: /node_modules/,
                    include: [
                        resolve(__dirname, 'src')
                    ]
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            fallback: {
                "crypto": false,
            }
        },
        devtool: 'inline-source-map',
            mode: 'development'
    };

    const mainConfig = {
        ...commonConfig,
        entry: {
            main: './src/aether_client.ts'
        },
        output: {
            path: resolve(__dirname, 'build'),
            filename: 'aether.js',
            clean: true
        },
        plugins: [
        ]
    };

    const testConfig = {
        ...commonConfig,
        entry: {
            test: './test/aether_point_to_point.browser.test.ts'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                // Явно указываем, какой tsconfig использовать!
                                configFile: 'tsconfig.browser.json'
                            }
                        }
                    ],
                    exclude: /node_modules/,
                    // Мы должны повторить 'include', так как 'module' перезаписан
                    include: [
                        resolve(__dirname, 'src'),
                        resolve(__dirname, 'test')
                    ]
                },
            ],
        },
        output: {
            path: resolve(__dirname, 'build/test-bundles'),
            filename: 'test-bundle.js',
            clean: true
        },
        plugins: []
    };


    if (env && env.buildTarget === 'test') {
        console.log('Building Test Bundle...');
        return testConfig;
    }

    console.log('Building Main Bundle...');
    return mainConfig;
};
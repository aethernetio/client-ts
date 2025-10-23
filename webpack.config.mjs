// =============================================================================================
// FILE: webpack.config.mjs (ОКОНЧАТЕЛЬНОЕ ИСПРАВЛЕНИЕ: Гарантированное извлечение конструктора)
// =============================================================================================
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// --- ИМПОРТ ПЛАГИНА (КРИТИЧЕСКИЙ БЛОК) ---
// Используем универсальный импорт (*), чтобы получить весь объект модуля.
import * as AetherProtocolModule from './src/AetherProtocolPlugin.ts';

// ГАРАНТИРОВАННОЕ ИЗВЛЕЧЕНИЕ: Ищем класс-конструктор AetherProtocolPluginConstructor.
// Мы проверяем:
// 1. Непосредственно именованный экспорт 'AetherProtocolPlugin' (если он был так экспортирован).
// 2. Свойство '.default' (если он был экспортирован как 'export default').
// 3. Fallback: Сам объект модуля.
const AetherProtocolPluginConstructor =
    AetherProtocolModule.AetherProtocolPlugin ||
    AetherProtocolModule.default ||
    AetherProtocolModule;

// Проверка, которая гарантирует, что мы получили функцию (класс)
if (typeof AetherProtocolPluginConstructor !== 'function') {
    // В случае неудачи, выбрасываем ошибку, чтобы показать, что мы извлекли.
    throw new TypeError(`AetherProtocolPluginConstructor is not a valid class constructor. Check the export in AetherProtocolPlugin.ts (Found type: ${typeof AetherProtocolPluginConstructor}).`);
}
// --------------------------------------------------------------------------------------------


// Define __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- 1. Определение путей и функции-обертки для glob ---
const DSL_SOURCE_PATH = 'src/*.adsl.yaml';
const OUTPUT_DIR_NAME = 'generated/aether';
const OUTPUT_DIR = resolve(__dirname, OUTPUT_DIR_NAME);

/**
 * Использует динамический импорт для получения синхронной функции glob.
 * @param pattern Шаблон поиска.
 * @returns Массив найденных путей.
 */
async function getDslFiles(pattern) {
    const globModule = await import('glob');

    if (typeof globModule.globSync === 'function') {
        return globModule.globSync(pattern);
    } else if (typeof (globModule.default || {}).sync === 'function') {
        return globModule.default.sync(pattern);
    } else if (typeof globModule.sync === 'function') {
        return globModule.sync(pattern);
    }
    throw new Error("Could not find a synchronous glob function (globSync or sync). Check your 'glob' version.");
}


// Webpack экспортирует функцию, которая может быть асинхронной
export default async (env) => {

    const dslFiles = await getDslFiles(resolve(__dirname, DSL_SOURCE_PATH));

    const commonConfig = {
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                    include: [
                        resolve(__dirname, 'src'),
                        resolve(__dirname, 'test'),
                        OUTPUT_DIR
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
            // Используем гарантированно извлеченный конструктор
            new AetherProtocolPluginConstructor(dslFiles)
        ]
    };

    const testConfig = {
        ...commonConfig,
        entry: {
            test: './test/test.ts'
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
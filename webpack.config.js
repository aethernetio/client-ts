const path = require('path')
module.exports = [
    {
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000
        },
        entry: './src/aether-core.ts',
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
            path: path.resolve(__dirname, 'build'),
            filename: 'aether.js'
        },
        mode: 'development'
        // mode: 'production'
    }
]
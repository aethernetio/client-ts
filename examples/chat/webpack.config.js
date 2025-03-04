const path = require('path')
module.exports = [
    {
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000
        },
        entry: './src/ChatService.js',
        resolve: {
            fallback: {
                "crypto": false,
            }
        },
        devtool: 'eval-source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'ChatService.js'
        },
        mode: 'development'
        // mode: 'production'
    },
    {
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000
        },
        entry: './src/ChatClient.js',
        resolve: {
            fallback: {
                "crypto": false,
            }
        },
        devtool: 'eval-source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'ChatClient.js'
        },
        mode: 'development'
        // mode: 'production'
    }
]
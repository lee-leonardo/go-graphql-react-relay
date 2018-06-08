var path = require("path")

const ROOT = path.resolve(__dirname, 'static-content')

module.exports = {
    entry: "src/App.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    resolve: {
        modules: [
                path.resolve(ROOT, 'less'),
                path.resolve(ROOT, 'react'),
                'node_modules'
            ],
            extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
        ]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: [{ loader: 'ts-loader', options: { transpileOnly: true } }] }
        ]
    }
}
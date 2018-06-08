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
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}
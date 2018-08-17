const path = require("path");
const webpack = require("webpack");

// setup module exports
module.exports = {
    entry: "./main.jsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: { extensions: ['*','.js','.jsx'] },
    output: {
        path: path.resolve(__dirname,"dist/"),
        filename: "bundle.js"
    }
}

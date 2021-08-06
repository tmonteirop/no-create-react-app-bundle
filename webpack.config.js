const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: path.resolve(__dirname, "./index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json"],
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "main.js",
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: "3000",
        contentBase: path.resolve(__dirname, "./public"),
        hot: true,
        open: true,
    },
};
const path = require('path');
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

'use strict';
module.exports = {
    mode: 'production',

    entry: path.resolve(__dirname, '../src/app.jsx'),

    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "bundle.js",
        publicPath: "./"
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "../build/index.html"),
            template: path.resolve(__dirname, "template.html"),
            alwaysWriteToDisk: true
        }),

        new HtmlWebpackHarddiskPlugin()
    ],

    module: {
        rules: require("./rules.config"),
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
}
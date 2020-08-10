const path = require('path');
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

'use strict';
module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, '../src/app.jsx'),

    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "bundle.js",
        publicPath: "/"
    },

    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, '../build'),
        hot: true,
        port: 9090,
        // https: true
        watchOptions: {
            poll: true,
            ignored: [
                path.resolve(__dirname, '../build'),
                path.resolve(__dirname, '../node_modules')
            ]
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
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
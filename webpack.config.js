const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        allowedHosts: 'auto',
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })],

};
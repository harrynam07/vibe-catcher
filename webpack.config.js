// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');
console.log(`this is currently on ${process.env.NODE_ENV} mode`);

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    allowedHosts: 'auto',
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  // plugins: [new HtmlWebpackPlugin({
  //     template: 'index.html'
  // })],

};
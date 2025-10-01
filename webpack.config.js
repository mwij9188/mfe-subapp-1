const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  module: {
    rules: [{ test: /\.js$/, loader: 'babel-loader' }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'SubApp1',
      filename: 'remoteEntry.js',
      exposes: {
        './SubApp': './src/SubApp',
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
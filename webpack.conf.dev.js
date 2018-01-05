/* global __dirname, require, module*/
'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  entry: {
    app: './demo/js/index.js'
  },
  output: {
    path: resolve('denmo_dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('demo')]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js'],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./demo_dist'),
      path.resolve('./demo')
    ]
  },
  devServer: {
    open: true,
    publicPath: '/',
    openPage: 'demo'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './demo/index.html',
      template: './demo/index.html',
      inject: true
    })
  ]
};

module.exports = config;

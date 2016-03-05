'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'bootstrap-webpack!./bootstrap.config.js',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/app.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    },{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },{
      test: /\.json?$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    },{
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        'url-loader?&name=[path][name].[ext]&limit=100000',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },{
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    },{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    },{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    },{
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }]
  }
};

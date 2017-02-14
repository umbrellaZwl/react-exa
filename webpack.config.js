const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&timeout=2000'

module.exports = {
  devtool: '#source-map',

  /*entry: __dirname + '/main.jsx',*/
  /*entry: {
    main: [__dirname + '/main.jsx', hotMiddlewareScript]
  },*/
  entry: ['whatwg-fetch', __dirname + '/main.jsx', hotMiddlewareScript],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { 'test': /\.js[x]?$/, exclude: /node_modules/, loader: 'babel' },
      { 'test': /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') },
      { 'test': /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url', query: {limit: 10000, name: '[name].[ext]?[hash]'} },
      { 'test': /\.(png|jpe?g|gif|svg)$/, loader: 'url', query: {limit: 10000, name: '[name].[ext]?[hash]'} },
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name]-[hash].css"),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.optimize.UglifyJsPlugin()
  ],

  devServer: {
    color: true,
    historyApiFallback: true
  }
}
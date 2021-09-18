const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack-config-base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: '腾讯新员工入职培训',
    //   template: path.resolve(__dirname, '../index.html'),
    //   inject: 'body',
    //   minify: false
    // })
  ],
  // devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000
  }
})
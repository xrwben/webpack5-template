const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

console.log('当前环境>>>>>', process.env.NODE_ENV, process.env.HOST_ENV)

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash:5].bundle.js',
    // publicPath: '/mobile/',
    publicPath: process.env.HOST_ENV === 'development' ? '/' : '/mobile/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',  // 自动地在 resource 和 inline 之间进行选择
        generator: {
          filename: 'static/images/[name][ext]?v=[hash:5]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb 小于则打包为base64
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.HOST_ENV": JSON.stringify(process.env.HOST_ENV),
    }),
    new HtmlWebpackPlugin({
      title: '专区',
      template: path.resolve(__dirname, '../index.html'),
      inject: 'body',
      minify: false
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@src': path.resolve(__dirname, '../src/')
    }
  },
}
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack-config-base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/style/[name].[hash:5].css',
      chunkFilename: 'static/style/[id].[hash:5].css', // 模块打包 不写使用filename配置
    })
  ],
  devtool: 'source-map',
  optimization: {
    // 压缩
    minimizer: [
      // css压缩
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      // js压缩
      new TerserPlugin()
    ],
    // 分割代码
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
      minSize: 20000,
      minChunks: 1,
      // minRemainingSize: 0,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
    },
  }
})
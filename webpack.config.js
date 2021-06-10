const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: Number.MAX_SAFE_INTEGER, // Compress everything
    }),
    // new CompressionPlugin({
    //   filename: "[path][base].br",
    //   algorithm: "brotliCompress",
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: {
    //     params: {
    //       [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    //     },
    //   },
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],
};

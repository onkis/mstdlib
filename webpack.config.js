const webpack = require('webpack');
module.exports = {
  entry: './main.js',
  output: {
    filename: 'mstdlib.js',
    libraryTarget: 'commonjs'

  },
  target: 'node',

  resolve:{
     fallback:{
    //   "buffer": false,
    //   "fs": false,
    //   "net": false,
    //   "crypto": false,
    //   "path": false,
    //   "dns": false,
    //   "util": false,
    //   "tls": false,
    //   "url": false,
    //   "assert": false,
   //    "pg-native": false,
    //   "stream": false
     }
  },
  optimization: {
    minimize: false
  },
  plugins: [new webpack.IgnorePlugin(/\.\/native/, /\/pg\//)]



};
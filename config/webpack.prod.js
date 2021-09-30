const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
var path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, "../dist"),
      publicPath: "../TestRepo/dist/",     
      clean: true,
    },   
   
    optimization: {
      minimizer: [new TerserPlugin({
        extractComments: false,
      })],
    },
    plugins: [   
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      
    ],
    
  };
  
  module.exports = merge(commonConfig, prodConfig);
  
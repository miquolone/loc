
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');


module.exports = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}
,
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  entry: {
    index: ['./src/index.js', './src/widgets.js'],
    another: './src/bottom.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].tkStation.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: ['raw-loader']},
      { test: /\.css$/, use: ['style-loader','css-loader' ]},
      //{ test: /\.(png|svg|jpg|gif)$/, use: [ { loader: 'file-loader' , options: { name: '[name].[ext]' } } ] }
    ]
  },
  optimization: {
     splitChunks: {
       chunks: 'all'
     }
   }
};


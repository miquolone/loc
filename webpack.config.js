
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');


module.exports = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({ minify: true, filename: "index.html", template: "./index.html" }),
    new HtmlWebpackPlugin({ minify: true, filename: "cart.html", template: "./cart.html" }),
    //new HtmlWebpackPlugin({ minify: true, filename: "item.html", template: "./item.html" }),
    new HtmlWebpackPlugin({ minify: true, filename: "finish.html", template: "./finish.html" }),
    new HtmlWebpackPlugin({ minify: true, filename: "selectPayment.html", template: "./selectPayment.html" }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      filename: "./lixil.html",
      template: "./lixil.html"
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
      { test: /\.html/, use: ['html-loader']},
      { test: /\.(png|svg|jpg|gif)$/, use: [ { loader: 'file-loader' , options: { name: '[name].[ext]' } } ] }
    ]
  },
  optimization: {
     splitChunks: {
       chunks: 'all'
     }
   }
};


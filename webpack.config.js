
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const minifyOption = {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      };

var index = new HtmlWebpackPlugin({ minify: minifyOption, filename: "index.html", template: "./index.html" });
var cart = new HtmlWebpackPlugin({ minify: minifyOption, filename: "cart.html", template: "./cart.html" });
var item = new HtmlWebpackPlugin({ inject: minifyOption, filename: "item.html", template: "./item.html" });
var finish = new HtmlWebpackPlugin({ ibnject: minifyOption, filename: "finish.html", template: "./finish.html" });
var payment = new HtmlWebpackPlugin({ inject: minifyOption, filename: "selectPayment.html", template: "./selectPayment.html" });
var lixil = new HtmlWebpackPlugin({ inject: minifyOption, filename: "lixil.html", template: "./lixil.html" });


module.exports = {
  mode: "production",
  plugins: [ index, cart, item, finish, payment, lixil,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {from:'images/', to: 'images/'}
    ]),

  ],
  externals: [
    {
      //'THREE': './three.min.js',
      //'photoSphereViewer': './node_modules/photo-sphere-viewer/dist/photo-sphere-viewer'
    }
  ],
  entry: {
    index: [
      './src/index.js',
      './src/widgets.js',
      //'./node_modules/three/build/three',
      './node_modules/d.js/lib/D.min.js',
      './node_modules/dot/doT.min.js',
      './node_modules/uevent/uevent.min.js',
      //'./node_modules/three/examples/js/renderers/CanvasRenderer.js',
      //'./node_modules/three/examples/js/renderers/Projector.js',
      //'./node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.min.js',
      //'./node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.min.css'
    ],
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
       //chunks: 'all'
     }
   }
};


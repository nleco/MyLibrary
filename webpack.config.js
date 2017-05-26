var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
      APP_DIR + '/index.jsx'
  ],
  output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      publicPath : '/'
  },
  devServer : {
      inline: true,
      hot: true,
      contentBase: './src/public/'
  },
  module: {
      rules : [            
          {
              test : /\.jsx?/,
              exclude: /node_modules/,
              use : [
                  'react-hot-loader', 
                  'babel-loader'
              ]
          },
          {
              test: /\.s?css$/,
              use : [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          },
          {
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?v=\d+.\d+.\d+)?$/,
              use : [
                  {
                      loader : 'file-loader',
                      options : {
                          name : 'fonts/[name].[ext]'
                      }
                  }
              ]
          }
      ]
  },
  plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
      extensions: ['.js', '.jsx']
  }
};

module.exports = config;
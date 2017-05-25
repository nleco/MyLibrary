var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080/',
      APP_DIR + '/index.jsx'
  ],
  output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      publicPath : '/'
  },
  devServer : {
      historyApiFallback: true,
      contentBase: 'src/public/'
  },
  module: {
      loaders : [            
          {
              test : /\.jsx?/,
              include : APP_DIR,
              loader : ['react-hot-loader', 'babel-loader']
          },
          {
              test: /\.s?css$/,
              loaders: ["style-loader", "css-loader", "sass-loader"],
          },
          {
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?v=\d+.\d+.\d+)?$/,
              loader: 'file-loader?name=fonts/[name].[ext]',
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

//  /\.(eot|svg|ttf|woff|woff2)$/  (\??\#?v=[.0-9]+)?

module.exports = config;
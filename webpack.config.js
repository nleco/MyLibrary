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
  devtool: "cheap-eval-source-map",
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
              exclude: /node_modules/
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2)(\?v=[.0-9]+)?$/,
              loader: 'file-loader?name=fonts/[name].[ext]',
              exclude: /node_modules/
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

//dev server


module.exports = config;
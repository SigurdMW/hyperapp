var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
       filename: 'index.html'
     })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}

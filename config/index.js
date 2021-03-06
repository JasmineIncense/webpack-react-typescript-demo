const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname, '..')
const APP_PATH = path.resolve(__dirname, '../src')

module.exports = {
  entry: {
    main: path.resolve(APP_PATH, 'index.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist')
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        loader: "ts-loader" 
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello Webpack'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
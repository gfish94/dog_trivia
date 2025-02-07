const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: path.resolve(SRC_DIR, 'index.jsx'),
  }, 

  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js',
  },

  plugins: [
    // Creates a loading bar
    new WebpackBar(),
    // Clears files in ./dist
    // new CleanWebpackPlugin(),
    // generates an html file from template
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
    ],
  },

};

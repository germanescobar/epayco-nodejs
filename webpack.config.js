const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

module.exports = {
  entry: {
    'app': [
      path.resolve(__dirname, 'client/index.js')
    ]
  },

  mode: 'development',

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      // JS files
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'babel-loader'
      },
      // SCSS files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                'sourceMap': true,
                'importLoaders': 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [ autoprefixer ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      disable: !isProd
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'client/public')
    }])
  ]
};

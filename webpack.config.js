const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: prod ? "production" : "development",
  entry: ["babel-polyfill", "./src/index.tsx"],
  output: {
    path: __dirname + "/dist/",
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules\/(?!react-native-reanimated)/,
      //   use: "ts-loader",
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules\/(?!react-native-reanimated)/],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-typescript",
              "@babel/preset-env",
              "module:metro-react-native-babel-preset",
              {
                plugins: [
                  "react-native-reanimated/plugin",
                  "babel-plugin-react-native-web",
                  "@babel/plugin-proposal-export-namespace-from",
                  "@babel/plugin-proposal-class-properties"
                ],
              },
            ],
          },
        },
      },
    ],
  },
  devtool: prod ? undefined : "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
    new webpack.DefinePlugin({ process: { env: {} } }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    }),
  ],
  stats: {
    children: true,
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
    },
    extensions: [".ts", ".tsx", ".web.js", ".js", ".jsx"],
  },
};
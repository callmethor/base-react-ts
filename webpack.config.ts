import path from "path";
import { Configuration } from "webpack";
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import 'webpack-dev-server';

const config: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000
  // },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};

export default config;
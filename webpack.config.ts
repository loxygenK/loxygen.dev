import { Configuration } from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import sass from "sass";
import fibers from "fibers";

const isProduction = process.env.NODE_ENV == "production";
const baseURL = (process.env.BASE_URL == null
                  ? process.env.BASE_URL
                  : "/");

const config: Configuration = {
  target: "web",
  mode: isProduction ? "production" : "development",
  entry: {
    index: path.join(__dirname, "src", "index.tsx")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".module.scss"],
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@css": path.resolve(__dirname, "src/style")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      minify: isProduction,
      template: path.join(__dirname, "src", "template.html"),
      scriptLoading: "defer"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "public")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" }
        ]
      },
      {
        test: /\.module.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader?modules",
            options: {
              sourceMap: !isProduction,
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: isProduction ? "[hash:base64:8]" : "[path][name]__[local]",
                exportLocalsConvention: "dashesOnly",
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !isProduction,
              implementation: sass,
              sassOptions: {
                fiber: fibers
              },
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: baseURL,
    filename: "assets/scripts/[name].[contenthash:8].js",
    chunkFilename: "assets/scripts/chunk.[contenthash:8].js",
  },
};

export default config;

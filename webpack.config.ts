import { Configuration } from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const isProduction = process.env.NODE_ENV == "production";
const baseURL = process.env.BASE_URL ?? "/";

const config: Configuration = {
	target: "web",
	mode: isProduction ? "production" : "development",
	entry: {
		index: path.join(__dirname, "src", "index.tsx")
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
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

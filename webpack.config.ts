import { Configuration } from "webpack";
import * as path from "path";

const isProduction = process.env.NODE_ENV = "production";
const baseURL = process.env.BASE_URL ?? "/";

const config: Configuration = {
	target: "web",
	mode: isProduction ? "production" : "development",
	entry: {
		index: path.join(__dirname, "src", "index.tsx")
	},
	output: {
		path: path.join(__dirname, "build"),
		publicPath: baseURL,
		filename: "assets/scripts/[name].[contenthash:8].js",
		chunkFilename: "assets/scripts/chunk.[contenthash:8].js",
	},
};

export default config;
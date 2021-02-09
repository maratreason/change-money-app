const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: ["@babel/polyfill", "./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js",
		publicPath: "/"
	},
	devServer: {
		contentBase: "./dist",
		port: 3000,
        historyApiFallback: true
	},
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|svg)/,
				use: ["file-loader"],
			},
			// {
			// 	test: /\.tsx$/,
			// 	exclude: /node_modules/,
            //     use: {
            //         loader: ["babel-loader", "ts-loader"],
            //         options: {
            //             presets: ["@babel/preset-env", "@babel/preset-react"],
            //         },
            //     },
			// },
			{
				test: /\.tsx?$/,
				use: ["babel-loader", "ts-loader"],
				exclude: '/node_modules/'
			}
		],
	},
};

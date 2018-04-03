const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugino = require("mini-css-extract-plugion");

module.exports = {
   entry: './src/index.tsx',
   mode: 'development',
   output: {
      path: path.resolve(__dirname, "build"),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
         },
         {
            enforce: "pre",
            test: /\.js/,
            loader: "source-map-loader"
         }
      ]
   },
   plugins: [
         new HtmlWebpackPlugin({
            template: "./index.html"
         }),
         new MiniCssExtractPlugino({
            filename: 'style.css',
            chunkFilename: "[id].css"
         })
   ],
   devtool: "source-map",
   resolve: {
      extensions: [".js", ".ts", ".tsx"]
   }
}
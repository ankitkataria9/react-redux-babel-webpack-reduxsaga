const path = require("path");
const HWP = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  output: {
    filename: "build.js",
    publicPath: "/",
    path: path.join(__dirname, '/dist')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HWP({
      template: path.join(__dirname, "/public/index.html"),
      title: "Development"
    })
  ]
}
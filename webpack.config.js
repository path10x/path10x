const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve("./client/index.ts"),
  mode: process.env.NODE_ENV || "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module : {
    rules : [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './index.html' })
  ],
}
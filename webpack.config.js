const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve("./client/index.jsx"),
  mode: process.env.NODE_ENV || "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './client/index.html' }),
    new CopyPlugin({
      patterns: [{ from: './client/styles.css' }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
      secure: false
    }
  },
}

// /////

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/client/App.tsx',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: ['ts-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js', '.jsx'],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/client/index.html',
//       filename: './index.html',
//     }),
//     new CopyPlugin({
//       patterns: [{ from: './src/client/style.css' }],
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, './dist'),
//     },
//     proxy: {
//       '/api': 'http://localhost:3000',
//       secure: false
//     }
//   },

// }
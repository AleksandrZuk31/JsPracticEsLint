const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
    },
  },
  context: path.resolve(__dirname, "src"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  }
};


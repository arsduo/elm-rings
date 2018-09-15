const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
module.exports = {
  // all the Webpack files for the example are in the same folder as this config file
  context: __dirname,

  entry: {
    app: ["./index.js"]
  },

  output: {
    filename: "example/[name].js"
  },

  mode: "development",
  module: {
    rules: [
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "url" loader works like "file" loader except that it embeds assets
          // smaller than specified limit in bytes as data URLs to avoid requests.
          {
            test: [/app\/images\/(?!monster).*\.(bmp|png|gif|jpe?g)/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]"
            }
          },
          // Process JS with Babel.
          {
            test: /\.js$/,
            exclude: [/elm-stuff/, /node_modules/],
            loader: require.resolve("babel-loader"),
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true
            }
          },
          {
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use: [
              {
                loader: require.resolve("elm-webpack-loader"),
                options: {
                  verbose: true,
                  debug: true,
                  forceWatch: true,
                  cwd: __dirname
                }
              }
            ]
          },
          {
            // "file" loader makes sure those assets get served by WebpackDevServer.
            exclude: [/\.js$/, /\.html$/, /\.json$/, /\.ejs$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },

  performance: { hints: false },

  plugins: [new SimpleProgressWebpackPlugin()],

  devServer: {
    inline: true,
    stats: { colors: true }
  }
};

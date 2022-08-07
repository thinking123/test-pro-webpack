const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { DllReferencePlugin, DefinePlugin } = require('webpack')
const path = require('path')

const ReactRefreshTypeScript = require("react-refresh-typescript");


const isDevelopment = true;
const config = {
  mode: "development",
  // entry:"src/index.tsx",
  entry: path.join(process.cwd(), "src/index.tsx"),
  context: process.cwd(),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      // { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean
                ),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new ReactRefreshWebpackPlugin(),
    new DllReferencePlugin({
      manifest: path.resolve(process.cwd(), 'dll/library.json'),
      extensions: ['.js'],
      context: process.cwd(),
    })
  ],
  devServer: {
    hot: true,
  },
};

// exports = config
module.exports = config;

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { DllReferencePlugin, DefinePlugin } = require("webpack");
const path = require("path");
const { ExternalsPlugin } = require("webpack");

const ReactRefreshTypeScript = require("react-refresh-typescript");

const isDevelopment = true;
const dll = false;
const config = {
  mode: "development",
  // entry:"src/index.tsx",
  // devtool:"none",
  devtool: "source-map",

  entry: {
    main1: path.join(process.cwd(), "src/index.tsx"),
  },
  context: process.cwd(),
  output: {
    filename: "bundle.[name].js",
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
      template: dll ?  "index-dll.html" : "index.html",
    }),
    new ReactRefreshWebpackPlugin(),
    dll &&
      new DllReferencePlugin({
        manifest: path.resolve(process.cwd(), "dll/library.json"),
        extensions: [".js"],
        context: process.cwd(),
      }),
    dll &&
      new ExternalsPlugin("var", {
        "dll-reference library": "library",
      }),
  ].filter(Boolean),
  devServer: {
    hot: true,
    static: dll ? [
      {
        directory: path.join(process.cwd(), "dll"),
        publicPath: "/",
      },
    ] : [],
  },
};

if(dll){
  config.optimization ={
    runtimeChunk: "single",
  }
}

// exports = config
module.exports = config;

// eval("module.exports = (__webpack_require__(/*! dll-reference library_07b660f43c987f2a2deb */
//  \"dll-reference library_07b660f43c987f2a2deb\"))(\"./node_modules/react-refresh/runtime.js\");\n\n//# sourceURL=webpack://test-pro/delegated_./node_modules/react-refresh/runtime.js_from_dll-reference_library_07b660f43c987f2a2deb?");

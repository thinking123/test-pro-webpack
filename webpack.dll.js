const { DllPlugin, DefinePlugin } = require("webpack");
const path = require("path");
const dllDeps = ["react", "react-dom", 'react-refresh/runtime'];

const outputPath = path.join(process.cwd(), "dll");
const config = {
  entry: {
    library: dllDeps,
  },
  mode: "development",
  // externals:{
  //   "react-refresh/runtime":"RunTimeRefresh"
  // },
  output: {
    path: outputPath,
    filename: "libs.[name].js",
    library: {
      name: "[name]",
      type: "var",
    },
  },
  plugins: [
    new DllPlugin({
      entryOnly: true,
      path: path.join(outputPath, "[name].json"),
      name: "[name]",
    }),
  ],
};

module.exports = config;

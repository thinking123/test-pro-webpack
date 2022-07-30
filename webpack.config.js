const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');




const config = {
  mode: "development",
  // entry:"src/index.tsx",
  entry:path.join(process.cwd() , "src/index.tsx"),
  context:process.cwd(),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
}

exports = config

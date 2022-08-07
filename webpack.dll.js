
const { DllPlugin, DefinePlugin } = require('webpack')
const path = require('path')
const dllDeps = [
  "react",
  "react-dom"
]

const outputPath = path.join(process.cwd() , 'dll')
const config = {
  entry:{
    library: dllDeps
  },
  output: {
    path: outputPath,
    filename: 'libs.[name].js',
    library: {
      name: '[name]_[fullhash]',
      type: 'var',
    },
  },
  plugins: [
    new DllPlugin({
      entryOnly: true,
      path: path.join(outputPath, '[name].json'),
      name: '[name]_[fullhash]',
    }),
  ]
}

module.exports = config
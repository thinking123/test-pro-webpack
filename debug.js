const {webpack} = require('webpack')
const config = require('./webpack.config')



const compiler = webpack(config , (stats) => {

})
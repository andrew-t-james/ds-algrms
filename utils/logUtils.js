const chalk = require('chalk')

function log(...args) {
  console.log(chalk.green.bold(...args))
}

function stringIt(arg) {
  console.log(JSON.stringify(arg, null, 2))
}

module.exports = {
  log,
  stringIt
}

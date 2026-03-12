// It is a special file which requires the data of other required file, combine it then export it.

const apple = require("./apple")
const banana = require("./banana")
const orange = require("./orange")

module.exports = {
  apple,
  banana,
  orange
}
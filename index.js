var Stringify = require('pull-stringify')
var Split = require('pull-split')

exports.stringify = function () {
  return Stringify('', '\n', '\n\n', 2)
}
exports.parse = function () {
  return Split('\n\n', JSON.parse)
}






var Stringify = require('pull-stringify')
var Split = require('pull-split')

var p = require('is-pull-stream')

function duplex (stream) {
  return {
    source: pull(stream.source, stringify()),
    sink: pull(parse(), stream.sink)
  }
}

function stringify () {
  return Stringify('', '\n', '\n\n', 2)
}

function parse () {
  return Split('\n\n', JSON.parse)
}

exports = module.exports = function (stream) {
  return (
    p.isSource(stream) ? pull(stream, parse())
  : p.isSink(stream)   ? pull(stringify(), stream)
  :                      duplex(stream)
  )
}

exports.stringify = stringify
exports.parse = parse

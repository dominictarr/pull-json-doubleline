var stringify = require('pull-stringify')
var split = require('pull-split')
var pull = require('pull-stream/pull')
var map = require('pull-stream/throughs/map')
var filter = require('pull-stream/throughs/filter')

var p = require('is-pull-stream')

function duplex (stream) {
  return {
    source: pull(stream.source, stringify()),
    sink: pull(parse(), stream.sink)
  }
}

function parse () {
  return pull(
    split('\n\n'),
    filter(), // filter empty lines
    map(JSON.parse)
  )
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

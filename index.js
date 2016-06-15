var stringify = require('pull-stringify')
var split = require('pull-split')
var pull = require('pull-stream/pull')

var p = require('is-pull-stream')

function duplex (stream) {
  return {
    source: pull(stream.source, stringify()),
    sink: pull(parse(), stream.sink)
  }
}

function parse () {
  return split(
    '\n\n',
    function map (data) {
      try {
        return JSON.parse(data)
      } catch (err) {
        return err
      }
    },
    null,
    true // skip last value if it is an empty string ' '
  )
}

exports = module.exports = function (stream) {
  return (
    p.isSource(stream) ? pull(stream, parse())
  : p.isSink(stream) ? pull(stringify(), stream)
  : duplex(stream)
  )
}

exports.stringify = stringify
exports.parse = parse

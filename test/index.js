var JSONDL = require('../')
var assert = require('assert')
var pull = require('pull-stream')
var pair = require('pull-pair')

var input = [1,2, {okay: true}, "hello"]

pull(
  pull.values(input),
  JSONDL.stringify(),
  pull.through(console.log),
  JSONDL.parse(),
  pull.collect(function (err, ary) {
    assert.deepEqual(ary, input)
    console.log('passed')
  })
)

pull(
  pull.values(input),
  JSONDL.stringify(),
  JSONDL(pair()),
    pull.through(console.log),
  JSONDL.parse(),
  pull.collect(function (err, ary) {
    assert.deepEqual(ary, input)
    console.log('passed')
  })
)




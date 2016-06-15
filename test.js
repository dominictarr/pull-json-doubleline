const test = require('tape')
const pull = require('pull-stream')
const pair = require('pull-pair')
const JSONDL = require('./')

const input = [
  1,
  2,
  { okay: true },
  'hello'
]

test('stringify -> parse', function (t) {
  pull(
    pull.values(input),
    JSONDL.stringify(),
    JSONDL.parse(),
    pull.collect(function (err, ary) {
      if (err) return t.end(err)
      t.deepEqual(ary, input)
      t.end()
    })
  )
})

test('stringify -> duplex -> parse', function (t) {
  pull(
    pull.values(input),
    JSONDL.stringify(),
    JSONDL(pair()),
    JSONDL.parse(),
    pull.collect(function (err, ary) {
      if (err) return t.end(err)
      t.deepEqual(ary, input)
      t.end()
    })
  )
})

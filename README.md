# pull-json-doubleline

stream json stringify and parser into double newline delimited json.
double newline delimiting means you can use indented json as the stream format,
which is more human readable.

## example

``` js
var pullJson = require('pull-json-doubleline')

pull(
  source,
  pullJson.stringify(),
  pullJson.parse(),
  sink
)
```

## api

### `pullJson = require('pull-json-doubleline')`

### `pullJson.stringify() => through`

stringify a stream of objects into double newline delimited json strings.

### `pullJson.parse() => through`

transform a stream of double newline delimited json strings into objects.

### `pullJson(source) => decodedSource`

decode a source stream of json buffers, return a source stream of objects.

### `pullJson(sink) => encodedSink`

encode a sink stream for json buffers, return a sink stream for objects.

### `pullJson(objectDuplex) => serializedDuplex`

encode/decode around a duplex stream of json buffers,
return a stream that can be piped to a io steam.

## License

MIT

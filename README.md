# pull-json-doubleline

stream json stringify and parser into double newline delimited json.
double newline delimiting means you can use indented json as the stream format,
which is more human readable.

## example

``` js
var JSONDL = require('pull-json-doubleline')

pull(
  source,
  JSONDL.stringify(),
  JSONDL.parse(),
  sink
)
```


## License

MIT

'use strict'
import polka from 'polka'
polka().get('/', (_, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(3000)

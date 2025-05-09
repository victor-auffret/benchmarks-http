'use strict'
import uws from 'uWebSockets.js'
uws.App({}).get('/', (res, _) => {
  res.writeHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(3000, () => {})

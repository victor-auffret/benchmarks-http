'use strict'
import polkadot from 'polkadot'
polkadot((_, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(3000)

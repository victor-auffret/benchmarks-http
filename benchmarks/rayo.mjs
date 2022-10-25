'use strict'
import rayo from 'rayo'
rayo({ port: 3000 }).get('/', (_, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
}).start()

'use strict'
import { createServer } from 'http'
createServer(async (_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ hello: 'world' }), 'utf-8')
}).listen(3000)

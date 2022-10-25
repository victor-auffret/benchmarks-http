'use strict'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const cero = require('0http')
const { router, server } = cero()
router.get('/', (_, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
})
server.listen(3000)

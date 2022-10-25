import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const start = process.hrtime()

const fastify = require('fastify')
const server = fastify()

const loadingTime = process.hrtime(start)

server.listen(0, () => {
  const listenTime = process.hrtime(start)
  const { writeFileSync } = require('fs')
  writeFileSync(`${globalThis.__filename}.txt`, `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
  server.close()
})

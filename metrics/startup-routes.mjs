'use strict'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const start = process.hrtime()

const fastify = require('fastify')
const server = fastify()

const routes = process.env.routes || 0

for (let i = 0; i < routes; ++i) {
  server.get(
    `/${i}`,
    (_req, reply) => {
      reply.send({})
    }
  )
}
const loadingTime = process.hrtime(start)

server.listen(0, () => {
  const listenTime = process.hrtime(start)
  const { basename, join } = require('path')
  const { writeFileSync } = require('fs')
  writeFileSync(
    join(`${globalThis.__dirname}`, `${routes}-${basename(`${globalThis.__filename}`)}.txt`),
    `${loadingTime} | ${listenTime}\n`,
    { encoding: 'utf-8', flag: 'a' })
  server.close()
})

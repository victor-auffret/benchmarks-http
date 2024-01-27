import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const start = process.hrtime()

const fastify = require('fastify')
const server = fastify({ logger: true })

const loadingTime = process.hrtime(start)

const go = async () => {
  try {
    await server.listen({ port: 3000 }, () => {
      const listenTime = process.hrtime(start)
      const { writeFileSync } = require('fs')
      writeFileSync(`${globalThis.__filename}.txt`, `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
      server.close()
    })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
go()
/*
server.listen(0, () => {
  const listenTime = process.hrtime(start)
  const { writeFileSync } = require('fs')
  writeFileSync(`${globalThis.__filename}.txt`, `${loadingTime} | ${listenTime}\n`, { encoding: 'utf-8', flag: 'a' })
  server.close()
})
*/

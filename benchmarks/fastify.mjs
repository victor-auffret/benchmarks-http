'use strict'
import { fastify } from 'fastify'
const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}
fastify().get('/', schema, (_, reply) => {
  reply.send({ hello: 'world' })
}).listen({ port: 3000 })

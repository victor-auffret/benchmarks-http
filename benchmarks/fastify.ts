'use strict'
import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
const schema: RouteShorthandOptions = {
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
const server: FastifyInstance = Fastify()
server.get('/', schema, async function handler (request, reply) {
  return { hello: 'world' }
}).listen({ port: 3000 })


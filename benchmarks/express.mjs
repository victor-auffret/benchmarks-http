'use strict'
import express from 'express'
express()
  .disable('etag')
  .disable('x-powered-by')
  .get('/', (_, res) => {
    res.json({ hello: 'world' })
  })
  .listen(3000)

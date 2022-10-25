'use strict'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const { Worker } = require('worker_threads')
const path = require('path')

const minSamples = 5

const runSample = (cb) => {
  return async () => {
    for (let i = 0; i < minSamples; ++i) {
      await cb()
    }
  }
}

const measureStartupListen = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.resolve('./metrics', 'startup-listen.mjs'))
      .on('exit', resolve)
  })
})

const measureStartupNRoutes = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(
        path.resolve('./metrics', 'startup-routes.mjs'),
        {
          env: {
            routes: n
          }
        }
      ).on('exit', resolve)
    })
  }
})

const measureStartupNSchemaRoutes = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(
        path.resolve('./metrics', 'startup-routes-schema.mjs'),
        {
          env: {
            routes: n
          }
        }
      ).on('exit', resolve)
    })
  }
})

measureStartupListen()
  .then(measureStartupNRoutes)
  .then(measureStartupNSchemaRoutes)

'use strict'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const autocannon = require('autocannon')
const fs = require('fs')
const compareA = require('autocannon-compare')
const path = require('path')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)
const access = promisify(fs.access)

const resultsDirectory = path.join(process.cwd(), 'results')

const run = (opts = {}) => new Promise((resolve, reject) => {
  opts.url = 'http://localhost:3000'
  autocannon(opts, (err, result) => {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  })
})

const writeResult = async (handler, result) => {
  try {
    await access(resultsDirectory)
  } catch (e) {
    await mkdir(resultsDirectory)
  }

  result.server = handler

  const dest = path.join(resultsDirectory, `${handler}.json`)
  return writeFile(dest, JSON.stringify(result))
}

const fire = async (opts, handler, save) => {
  const result = await run(opts)
  return save ? writeResult(handler, result) : null
}

const compare = (a, b) => {
  const resA = require(`${resultsDirectory}/${a}.json`)
  const resB = require(`${resultsDirectory}/${b}.json`)
  const comp = compareA(resA, resB)
  if (comp.equal) {
    return true
  } else if (comp.aWins) {
    return {
      diff: comp.requests.difference,
      fastest: a,
      slowest: b,
      fastestAverage: resA.requests.average,
      slowestAverage: resB.requests.average
    }
  }
  return {
    diff: compareA(resB, resA).requests.difference,
    fastest: b,
    slowest: a,
    fastestAverage: resB.requests.average,
    slowestAverage: resA.requests.average
  }
}

export { compare, fire }

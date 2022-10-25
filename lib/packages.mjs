'use strict'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const { dependencies } = require('../package.json')

const packages = {
  '0http': { hasRouter: true, package: '0http', version: '3.4.1' },
  'uWebSockets': { version: '20.14.0' },
  'pure-http': { version: '3.3.1' },
  'express': { hasRouter: true, version: '4.18.2' },
  'fastify': { checked: true, hasRouter: true, version: '4.9.2' },
  'polka': { hasRouter: true, version: '0.5.2' },
  'polkadot': { hasRouter: false, version: '1.0.0' },
  'rayo': { hasRouter: true, version: '1.3.10' },
  'vanilla': { hasRouter: false, version: '1.0.0' }
}

const choicesX = []
Object.keys(packages).forEach(pkg => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package
    const version = require(require.resolve(module + '/package.json')).version
    packages[pkg].version = version
  }
  choicesX.push(pkg)
})

const choices = choicesX.sort()
const list = (extra = false) => {
  return choices
    .map(c => {
      return extra === !!packages[c].extra
        ? Object.assign({}, packages[c], { name: c })
        : null
    })
    .filter(c => c)
}
const info = module => {
  return packages[module]
}

export { choices, list, info }

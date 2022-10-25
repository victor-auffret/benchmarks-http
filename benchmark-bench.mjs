'use strict'

import { createRequire } from 'module'
import bench from './lib/bench.mjs'
import { choices, list } from './lib/packages.mjs'
const require = createRequire(import.meta.url)

import inquirer from 'inquirer'
const prompt = inquirer.prompt
const Separator = inquirer.Separator
// const { prompt, Separator } = require('inquirer')
const argv = process.argv.slice(2)

run().catch(err => {
  console.error(err)
  process.exit(1)
})

async function run () {
  const options = await getBenchmarkOptions()
  const modules = options.all ? choices : await select(list)
  return bench(options, modules)
}

async function getBenchmarkOptions () {
  if (argv.length) return parseArgv()
  return prompt([
    {
      type: 'confirm',
      name: 'all',
      message: 'Do you want to run all benchmark tests?',
      default: false
    },
    {
      type: 'input',
      name: 'connections',
      message: 'How many connections do you need?',
      default: 50,
      validate (value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    },
    {
      type: 'input',
      name: 'pipelining',
      message: 'How many pipelines do you need?',
      default: 5,
      validate (value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    },
    {
      type: 'input',
      name: 'duration',
      message: 'How long should it take?',
      default: 20,
      validate (value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    }
  ])
}

function parseArgv () {
  const [all, connections, pipelining, duration] = argv
  return {
    all: all === 'y',
    connections: +connections,
    pipelining: +pipelining,
    duration: +duration
  }
}

async function select () {
  const result = await prompt([
    {
      type: 'checkbox',
      message: 'Select packages',
      name: 'list',
      choices: [
        new Separator(' = The usual ='),
        ...list(),
        new Separator(' = The extras = '),
        ...list(true)
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return 'You must choose at least one package.'
        }
        return true
      }
    }
  ])
  return result.list
}

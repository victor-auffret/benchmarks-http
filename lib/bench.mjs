#!/usr/bin/env node
'use strict'

import { fork } from 'child_process'
import { join } from 'path'
import { fire } from './autocannon.mjs'
import ora from 'ora'

const doBench = async (opts, handler) => {
  const spinner = ora(`Started ${handler}`).start()
  const forked = fork(join('..', 'benchmarks-http', 'benchmarks', `${handler}.ts`))
  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await fire(opts, handler, false)
  } catch (error) {
    return console.log(error)
  } finally {
    spinner.color = 'yellow'
    spinner.text = `Working ${handler}`
  }

  try {
    await fire(opts, handler, true)
    forked.kill('SIGINT')
    spinner.text = `Results saved for ${handler}`
    spinner.succeed()
    return true
  } catch (error) {
    return console.log(error)
  }
}

let index = 0
const start = async (opts, list) => {
  if (list.length === index) {
    return true
  }

  try {
    await doBench(opts, list[index])
    index += 1
    return start(opts, list)
  } catch (error) {
    return console.log(error)
  }
}

export default start

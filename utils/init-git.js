import ora from 'ora'

import { promisify } from 'util'

import * as childProcess from 'child_process'
import message from '../lib/message.js'

const exec = promisify(childProcess.exec)

export default async function() {
  const spinner = ora('Initializing git repository...').start()
  try {
    if (await _checkRepoExist()) {
      spinner.stop()
      return false
    }
    await exec('git init')
    spinner.stop()
    message.success('Git repository initialized')
    return true
  } catch (err) {
    spinner.stop()
    message.error('Failed initializing git repository, be sure to have git installed')
    process.exit()
  }
}

async function _checkRepoExist () {
  try {
    await exec('git rev-parse --is-inside-work-tree')
    return true
  } catch (err) {
    return false
  }
}

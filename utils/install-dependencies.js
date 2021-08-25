import ora from 'ora'

import { promisify } from 'util'
import * as childProcess from 'child_process'

import message from '../lib/message.js'

const exec = promisify(childProcess.exec)

export default async function(appName) {
  const spinner = ora('Installing dependencies').start()
  try {
    process.chdir(appName)
    await exec('yarn')
    spinner.stop()
    message.success('Dependencies installed')
  } catch (err) {
    spinner.stop()
    message.error('Failed installing dependencies, be sure to have yarn installed')
    process.exit(1)
  }
}

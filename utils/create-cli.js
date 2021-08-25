import chalk from 'chalk'
import commander from 'commander'
import * as fs from 'fs'
import * as path from 'path'
import url from 'url'

import message from '../lib/message.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

export let appName

export const cli = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(chalk.blue('<project-directory> [options]'))
  .action(name => {
    appName = name
  })
  .allowUnknownOption()
  .on('--help', () => {
    console.log()
    console.log(`    Only ${chalk.blue('<project-directory>')} is required.`)
    console.log()
    console.log('Report issue on:')
    console.log(
      `${chalk.blue(
        'https://github.com/zsjie/create-koa-ts-app/issues/new',
      )}`
    )
    console.log()
  })
  .parse(process.argv)

export const checkArgs = async () => {
  if (!appName) {
    console.log()
    msg.message(
      'Please specify the project directory:\n    create-koa-ts-app <project-directory>',
    )
    console.log()
    process.exit(1)
  }

  if (dirExists(appName)) {
    console.log()
    message.error(`The "${appName}" directory already exists on the current path.\n\n     Try with a different name or change folder.`)
    console.log()
    process.exit(1)
  }
}

function dirExists(filepath) {
  try {
    return fs.statSync(filepath).isDirectory()
  } catch(err) {
    return false
  }
}

appName = appName || ''

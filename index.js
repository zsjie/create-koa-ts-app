import chalk from 'chalk'

const nodeVersion = process.versions.node
const majorNodeVersion = nodeVersion.split('.')[0]

if (majorNodeVersion < 14) {
  console.error(
    chalk.red(`You are using Node ${nodeVersion}.\ncreate-koa-ts-app requires Node 14 or higher.\nPlease update your node version.`)
  )
  process.exit(1)
}

import './create-app.js'

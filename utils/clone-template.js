import downloadGitRepo from 'download-git-repo'
import ora from 'ora'
import * as path from 'path'
import { promisify } from 'util'

import message from '../lib/message.js'

const download = promisify(downloadGitRepo)

export default async function cloneTemplate(appName) {
  const dest = path.join(process.cwd(), appName)
  const spinner = ora(`Fetching koa app template into ${dest}`).start()
  try {
    await download('zsjie/koa-app-template', dest)
    spinner.stop()
    message.success('Koa app template fetched')
  } catch (err) {
    message.error('Failed fetching koa app template')
    process.exit(1)
  }
}

async function sleep(ms = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

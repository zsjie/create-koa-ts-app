import * as fs from 'fs'
import * as path from 'path'
import ora from 'ora'
import message from '../lib/message.js'


export default async function(appName) {
  const spinner = ora('Initializing package.json file...').start()
  try {
    const appPath = path.join(process.cwd(), appName)
    const packageJsonPath = path.join(appPath, 'package.json')
    const licensePath = path.join(appPath, 'LICENSE')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath))
    packageJson.name = appName
    packageJson.version = '0.1.0'
    packageJson.description = ''

    delete packageJson.author
    delete packageJson.license

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
    fs.unlinkSync(licensePath)

    await new Promise(res => setTimeout(res, 1000))
    spinner.stop()
    message.success('package.json file initialized')
  } catch (err) {
    spinner.stop()
    message.error('Failed initializing package.json file')
    process.exit(1)
  }
}

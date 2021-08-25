import ora from 'ora'

import dns from 'dns'
import { promisify } from 'util'
import message from '../lib/message.js'

const lookup = promisify(dns.lookup)

export default async function checkConnection() {
  const spinner = ora(`Checking connection status...`).start()
  try {
    await lookup('registry.npmjs.com')
    spinner.stop()
    message.success('Connection check success')
  } catch (err) {
    spinner.stop()
    message.error('It seems you are not connected to any network, check your active connection or reset it.')
    process.exit(1)
  }
}

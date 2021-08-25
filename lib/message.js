import chalk from 'chalk'

class Message {
  constructor() {}

  message(str) {
    console.log(chalk.blue(str))
  }

  success(str) {
    console.log(chalk.green(`✔ ${str}`))
  }

  warn(str) {
    console.log(chalk.yellow(`⚠️ ${str}`))
  }

  error(str) {
    console.log(chalk.red(`❌ ${str}`))
  }
}

const message = new Message()

export default message

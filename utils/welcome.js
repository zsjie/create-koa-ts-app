import chalk from 'chalk'

export default (appName) => {
  console.log()
  console.log(chalk.green('    🚀 Your Koa app is initialized successfully'))
  console.log()
  console.log('You can use the following scripts:')
  console.log()
  console.log(chalk.blue('    yarn start'))
  console.log(chalk.cyan('    Start your Koa application'))
  console.log()
  console.log(chalk.blue('    yarn dev'))
  console.log(chalk.cyan('    Start your Koa application in development mode'))
  console.log()
  console.log(chalk.blue('    yarn build'))
  console.log(chalk.cyan('    Compile typescript to js'))
  console.log()
  console.log(chalk.blue('    yarn lint'))
  console.log(chalk.cyan('    Lint your code to find style errors'))
  console.log()
  console.log(chalk.blue('    yarn fix'))
  console.log(chalk.cyan('    Fix your code style errors'))
  console.log()
  console.log('Now you can start working on your awesome project:')
  console.log()
  console.log(chalk.blue('    cd'), appName)
  console.log(chalk.blue('    yarn dev'))
  console.log()
}

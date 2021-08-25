import {
  applyPatch,
  appName,
  checkArgs,
  checkConnection,
  cloneTemplate,
  initGit,
  installDependencies,
} from './utils/index.js'
import welcome from './utils/welcome.js'

(async () => {
  await checkArgs()
  await checkConnection()
  await cloneTemplate(appName)
  await applyPatch(appName)
  await installDependencies(appName)
  await initGit()
  await welcome(appName)
})()

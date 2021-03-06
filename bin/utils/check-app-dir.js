const chalk = require("chalk")
const fs = require("fs")
const path = require("path")

module.exports = function checkAppDir(appName) {
    const appDir = path.join(process.cwd(), appName)

    if (!fs.existsSync(appDir)) {
        fs.mkdirSync(appDir)
    } else if (fs.readdirSync(appDir).length) {
        console.log()
        throw new Error(
            chalk.red(`The ${appName} directory is not empty, please try another.`)
        )
    }

    return appDir
}
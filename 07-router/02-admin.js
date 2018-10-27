const fs = require('fs')

exports.root = async (ctx) => {
    // ctx.body = "index"
    ctx.body = fs.readFileSync("./02-index.html", "utf8")
}
exports.home = async (ctx) => {
    ctx.body = fs.readFileSync("./02-home.html", "utf8")
}
exports.user = async (ctx) => {
    ctx.body = fs.readFileSync("./02-user.html", "utf8")
}
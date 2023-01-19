const bytenode = require("bytenode")
const path = require("path")
const filename = path.join(__dirname, "./source.js")

bytenode.compileFile({
    filename
})
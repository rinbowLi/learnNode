const express = require("express")
const app = express()
const path = require("path")

//第一个参数不加时，默认为‘./’
// app.use(express.static(path.join(__dirname,"./static")))
//加上第一个参数时，对应的资源目录前面要加上'/public'
app.use("/public", express.static(path.join(__dirname, "./static")))

app.listen("3000", (req, res) => {
  console.log("服务已开启")
})
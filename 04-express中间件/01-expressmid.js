const express = require("express")
const app = express()
const path = require("path")


//全局中间件（拦截器） 必须执行next，否则不执行后面的回调函数，浏览器也会卡住
app.use("/", (req, res, next) => {
  const {
    token
  } = req.query
  console.log(0000)
  token ? next() : res.send("没有token")
}, (req, res) => {
  console.log(1234)
  res.send("成功")
})


//局部中间件（拦截器） 必须执行next，全局中间件和局部中间件同时匹配到时，只走局部中间件
app.get("/test", (req, res, next) => {
  console.log(1111)
  next()
}, (req, res) => {
  console.log(1234)
  res.send("成功")
})

app.use(express.static(path.join(__dirname,"./static")))

app.listen("3000", (req, res) => {
  console.log("服务已开启")
})
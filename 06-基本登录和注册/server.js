const express = require("express")
const db = require("./connect")
const userRouter = require("./router/userRouter")

const app = express()
const bodyParser = require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.use("/user", userRouter)

app.listen("3000", (req, res) => {
  console.log("服务开启了")
})
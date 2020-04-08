const express = require("express")
const app = express()
const userRouter =require("./userRouter/userRouter")


app.use("/user",userRouter)

app.listen("3000", (req, res) => {
  console.log("服务已开启")
})
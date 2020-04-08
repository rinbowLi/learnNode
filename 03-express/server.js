const express = require("express")

const app = express()
const bodyParser =require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/user/login", (req, res) => {
  //get参数在query中
  let { user,password } = req.query;
  if (user == "admin" && password == "123456") {
    res.send({
      code: 0,
      msg: "login success"
    })
  } else {
    res.send({
      code: -1,
      msg: "login fail"
    })
  }

})


app.post("/user/register",(req,res)=>{
  //post参数在请求体body中，而且express不能直接解析req.express
  //通过第三方插件解析
  console.log(req.body)
  res.send({
    code: -1,
    msg: "login fail"
  })
})

app.listen("3000", (req, res) => {
  console.log("服务已开启")
})
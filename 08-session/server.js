const express = require("express")
const path = require("path")
const db = require("../06-基本登录和注册/connect")
const userRouter = require("../06-基本登录和注册/router/userRouter")
const articleRouter = require("../06-基本登录和注册/router/articleRouter")
const fileRouter = require("../06-基本登录和注册/router/fileRouter")

const cookieParse = require("cookie-parser")
const session = require("express-session")

const app = express()
const bodyParser = require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))


app.use(session({
  secret: "hubwizApp", //为了安全性考虑设置secret属性
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }, //设置过期时间
  resave: true, //即使session没有被修改，也保存session值，默认为true
  saveUninitialized: false //无论有没有session cookie，每次请求都设置session cookie，默认给个标示为connect.sid
}))
// parse application/json
app.use(bodyParser.json())
app.use("/public", express.static(path.join(__dirname, "./uploads")))

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use("/user", (req, res, next) => {
  //console.log(req.body);
  console.log(req.session);
  next();
}, userRouter)
app.use("/article", articleRouter)
app.use("/file", fileRouter)

app.listen("3000", (req, res) => {
  console.log("服务开启了")
})
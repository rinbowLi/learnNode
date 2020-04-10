const express = require("express")

const router = express.Router()
const user = require("../model/userModel")
const email = require("../utils/mail")

let codes = {} //声明全局变量保存验证码到内存中

//注册接口
router.post("/register", (req, res) => {
  //数据获取
  let {
    username,
    password,
    code
  } = req.body;
  console.log(username, password, code)
  if (!username || !password || !code) {
    return res.send({
      code: -1,
      msg: "请输入用户名、密码和验证码"
    })
  } else {
    if (codes.code != code) {
      return res.send({
        code: -1,
        msg: "验证码错误"
      })
    }
    user.find({
        username
      })
      .then(data => {
        if (!data.length) {
          return user.insertMany({
            username,
            password
          })
        } else {
          res.send({
            code: -1,
            msg: "用户名已存在"
          })
          return;
        }
      })
      .then(result => {
        console.log("数据插入成功")
        console.log(result)
        res.send({
          code: 0,
          msg: "注册成功"
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  //数据处理
  //返回数据
})

//登录接口
router.post("/login", (req, res) => {
  let {
    username,
    password
  } = req.body;
  if (!username || !password) {
    res.send({
      code: -1,
      msg: "请输入用户名或密码"
    })
  } else {
    user.find({
        username,
        password
      })
      .then(result => {
        console.log(result);
        if (result.length > 0) {
          res.send({
            code: 0,
            msg: "登录成功"
          })
        } else {
          res.send({
            code: -1,
            msg: "用户名或密码不正确"
          })
        }
      })
      .catch(err => {
        console.log(err)
        res.send({
          code: -1,
          msg: "未知错误"
        })
      })
  }
})

router.post("/getMailCode", (req, res) => {
  let {
    mail
  } = req.body;
  let mailRegx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if (!mail || !mailRegx.test(mail)) {
    return res.send({
      code: -1,
      msg: "邮箱不合法"
    })
  }
  //如果内存中存在该邮箱的验证码，而且过期时间在五分钟之内
  if (codes[mail] && (new Date().getTime() - codes[mail].createTime) < 1000 * 60 * 5) {
    return res.send({
      code: -1,
      msg: "五分钟之内不能再次获取验证码"
    })
  }
  let randomCode = parseInt(Math.random() * 100000);
    //不足6位数时用0补齐
  randomCode = randomCode.toString().padStart(6, "0")

  email.sendMail(mail, "邮箱注册邮件", randomCode)
    .then(() => {
      //保存验证码到内存中
      codes[mail] = {
        createTime: new Date().getTime(),
        randomCode
      };
      console.log(codes)
      res.send({
        code: 0,
        msg: "邮箱验证码发送成功"
      })
    })
    .catch((err) => {
      console.log(err)
      res.send({
        code: 0,
        msg: "未知错误"
      })
    })

})

module.exports = router;
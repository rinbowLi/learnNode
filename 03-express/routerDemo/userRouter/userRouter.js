const express = require("express")
const router =express.Router()


router.get("/add",(req,res)=>{
  res.send("add user")
})

router.get("/update",(req,res)=>{
  res.send("update user")
})

module.exports = router
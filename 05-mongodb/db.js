const mongoose =require("mongoose")
//1、首先连接数据库
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true },(err)=>{

})

//2.创建数据库连接对象
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("连接成功")
});


//3.创建Schema对象
let testSchema = mongoose.Schema({
  name:{type:String,required:true},
  age:Number,
  sex:{type:Number,default:0},
})


//4.将Schema对象转换成数据模型
let testModel =mongoose.model("test",testSchema);

testModel.insertMany({name:"test",age:18})
.then((res)=>{
  console.log("插入成功",res)
})
.catch((err)=>{
  console.log("插入失败",err)
})

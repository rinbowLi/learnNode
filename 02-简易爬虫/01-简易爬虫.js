const http =require("https")
const fs =require("fs")

const url ="https://www.baidu.com/";
http.get(url, (res) => {
  console.log(res)

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { 
    console.log("数据传输中")
    rawData += chunk.toString("utf8"); 
  });
  res.on('end', () => {
    try {
      console.log("数据传输完毕")
      console.log(rawData);
      //传输完成后将文件保存到本地
      fs.writeFile("./test.html",rawData,(err,data)=>{
       console.log(err)
       console.log(data)
      })
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`出现错误: ${e.message}`);
});
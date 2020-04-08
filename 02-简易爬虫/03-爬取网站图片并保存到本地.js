const http = require("https")
const fs = require("fs")
const cheerio = require('cheerio')
const request = require("request")
const path = require("path")
const imgDir = path.join(__dirname, 'img');

const url = "https://www.baidu.com/";
http.get(url, (res) => {
  //安全判断
  const {
    statusCode
  } = res; //状态码
  const contentType = res.headers['content-type']; //文档类型

  console.log(statusCode, contentType)

  //数据的处理
  let rawData = '';
  res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
  res.on('data', (chunk) => {
    console.log("数据传输中")
    rawData += chunk.toString("utf8");
  });
  res.on('end', () => {
    try {
      console.log("数据传输完毕")
      console.log(rawData);
      if (res.statusCode == 200) {
        fs.readdir('./', (err, files) => { //创建本地文件夹
          if (!files.includes('saveImage')) {
            fs.mkdir('./saveImage', (err) => {
              if (err) {
                throw err;
              }
              console.log("已创建图片文件夹")
            })
          }
        })
        findImg(rawData, downLoad);
      }
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`出现错误: ${e.message}`);
});

function downLoad(imgUrl, i) {
  let ext = imgUrl.split('.').pop();
  console.log(imgUrl.indexOf("http:") == -1, imgUrl)
  if (imgUrl.indexOf("http:") == -1 && imgUrl.indexOf("https:") == -1) {
    imgUrl = "http:" + imgUrl;
  }
  request(imgUrl).pipe(fs.createWriteStream("./saveImage/" + new Date().getTime() +"."+ ext, {
    'enconding': 'binary'
  }))

  console.log(i);
}

function findImg(dom, Callback) {

  let $ = cheerio.load(dom);
  $('img').each(function (i, elem) {
    let imgSrc = $(this).attr('src');
    Callback(imgSrc, i);
  });

}
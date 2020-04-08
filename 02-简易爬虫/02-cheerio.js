const cheerio =require("cheerio")

let $ = cheerio.load("<h1 class='test'>123</h1>");

let text = $("h1").text();
console.log(text)
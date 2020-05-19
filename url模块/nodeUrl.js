const url = require('url')
// console.log(url)

let httpUrl = 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'
let urlParse = url.parse(httpUrl)
console.log(urlParse)
let axios = require('axios')
const iconv = require("iconv-lite");
// console.log(axios)
let httpUrl = 'https://dytt8.net/index.htm'
axios.get(httpUrl,{ responseType: "arraybuffer" }).then( res => {
    let resHtml = iconv.decode(res.data, "gb2312")
    console.log(resHtml)
})
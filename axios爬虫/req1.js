let axios = require('axios')


let httpUrl = ''


//获取起始页面的所有分类
//获取分类里的电影链接
//根据电影链接获取详细信息

axios.get('https://www.1905.com/').then(res => {
    console.log(res)
})
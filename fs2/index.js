const fs = require('fs')

let wfs = fs.writeFile('./text.txt','what do you want to eat',(err) => {
    if(err)
    {console.log(err)}
    console.log('文件已写入')
})

function fsWrite(path,content){
    return new Promise((resolve,reject) => {
        fs.writeFile(path,content,{flag:'a',encoding:'utf-8'},(err) => {
            if(err){
                reject(err)
            }
            else{
                resolve('写入成功')
            }
        })
    })
}
// fsWrite('./text2.txt','这是第一次')
// fsWrite('./text2.txt','这是第二次')
// fsWrite('./text2.txt','这是第三次')

async function writeList(){
    await fsWrite('./text2.txt','这是第一次')
    await fsWrite('./text2.txt','这是第二次')
    await fsWrite('./text2.txt','这是第三次')
}

writeList()
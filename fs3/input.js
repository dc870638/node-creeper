const fs = require('fs')

let readline = require('readline')
let {fsWrite} = require('../fs2/index')
//实例化接口
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//设置提问事件
//  r1.question('你的名字是？',function(answer){
//     console.log('答复:',answer)
//     r1.close()
//  })

 

 //模仿package.json一层一层询问
 function lcQuestion(title){
     return new Promise((resolve,reject) => {
        r1.question(title,(answer) => {
            resolve(answer)
        })
     })
 }

async function createPackage(){
    let name = await lcQuestion('您的包名字是什么？')
    let description = await lcQuestion('您的包描述是什么？')
    let main = await lcQuestion('您的包主程序入口文件是什么？')
    let author = await lcQuestion('您的名字是什么？')


    let content = `
    {
        "name": "${name}",
        "version": "1.0.0",
        "description": "${description}",
        "main": "${main}",
        "scripts": {
          "test": "echo \\"Error: no test specified\\" && exit 1"
        },
        "repository": {
          "type": "git",
          "url": "git+https://github.com/dc870638/node-creeper.git"
        },
        "author": "${author}",
        "license": "ISC",
        "bugs": {
          "url": "https://github.com/dc870638/node-creeper/issues"
        },
        "homepage": "https://github.com/dc870638/node-creeper#readme"
      }
      
    `
    await fsWrite('package.json',content)
      //最终写完关闭
      r1.close()
}

createPackage()
 r1.on('close',function(){
    process.exit(0)
})


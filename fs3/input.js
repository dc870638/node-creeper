const fs = require('fs')

let readline = require('readline')

//实例化接口
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//设置提问事件
 r1.question('你的名字是？',function(answer){
    console.log('答复:',answer)
    r1.close()
 })

 r1.on('close',function(){
     process.exit(0)
 })
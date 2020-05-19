const fs = require('fs')


//1.创建写入流
let ws = fs.createWriteStream('hello.txt',{flag:'w',encoding:'utf-8'})
console.log(ws)

//监听文件事件
ws.on('open',function(){
    console.log('文件打开了')
})
ws.on('ready',function(){
    console.log('文件写入已准备状态')
})
ws.on('close',function(){
    console.log('文件写入完成，关闭')
})

//文件流式写入
ws.write('helloworld1!',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('内容1流入完成')
    }
})
ws.write('helloworld2!',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('内容2流入完成')
    }
})
ws.write('helloworld3!',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('内容3流入完成')
    }
})
ws.write('helloworld4!',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('内容4流入完成')
    }
})

//文件写入完成
ws.end(function(){
    console.log('文件写入关闭')
})
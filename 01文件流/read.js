const fs = require('fs')


let rs = fs.createReadStream('陈一发儿 - 童话镇.mp3',{flag:'r'})
// console.log(rs)

let ws = fs.createWriteStream('a.mp3',{flag:'w'})


rs.on('open',function(){
    console.log('读取的文件打开')
})

rs.on('close',function(){
    //文件读取完成后写入完成～～～
    ws.end()
    console.log('读取流结束')
})

//监听每一次数据的流入完成
rs.on('data',function(chunk){
    console.log('单批数据流入:' + chunk.length)
    console.log(chunk)
    ws.write(chunk,() => {
        console.log('单批数据流入完成')
    })
})

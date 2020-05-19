//处理事件

const fs = require('fs')
let events = require('events')

let myEventEmitter = new events.EventEmitter()
myEventEmitter.on('helloSuccess',function(data){
    console.log('处理事情1')
    console.log(data)
})
myEventEmitter.on('helloSuccess',function(){
    console.log('处理事情2')
})
myEventEmitter.on('helloSuccess',function(){
    console.log('处理事情3')
})

//普通写法
// fs.readFile('hello.txt',{flag:'r',encoding:'utf-8'},function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         // console.log(data)
//         myEventEmitter.emit('helloSuccess',data)
//     }
// })  

//进阶写法
function dcMyFileFn(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flag:'r',encoding:'utf-8'},function(err,data){
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })  
    })
}
dcMyFileFn('./hello.txt').then(data => {
    myEventEmitter.emit('helloSuccess',data)
})


//装逼写法 async await替代promis then
async function test(){
    let data = await dcMyFileFn('./hello.txt')
    myEventEmitter.emit('helloSuccess',data)

}
test()
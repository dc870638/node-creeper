let aaa = require('./index1')
// console.log(aaa)

const fs = require('fs')

// let r1 = fs.readFile('./fs/hello.txt',{flag:'r',encoding:'utf-8'},(err,data) => {
//     if (err) throw err
//     console.log(data)
// })



function fsRead(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flag:'r',encoding:'utf-8'},(err,data) => {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
// let w1 = fsRead('./fs/hello.txt')
// w1.then((res) => {
//     // console.log(res)
// })

async function readList(){
    var file2 = await fsRead('./fs/hello.txt')
    var file3 = await fsRead('./fs/' +file2 + '.txt')
    var file3Content = await fsRead('./fs/' +file3 + '.txt')
    console.log(file3Content)
}
readList()
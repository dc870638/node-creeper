const path = require('path')
// console.log(path)

let myPath = 'https://www.bilibili.com/'
let myExtrPath = path.extname(myPath)
// console.log(myExtrPath)


let arr = ['myFile','frontEnd','vue.js']
let arrPath = path.resolve(...arr)
//join也可以
// console.log(arrPath)

console.log(__dirname)
console.log(__filename)
console.log(path.parse(__filename))
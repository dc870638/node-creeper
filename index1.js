let a = '123'
let b = '234'
let c = '345'


exports.a = a
module.exports.c = c
// 系统默认 exports = module.exports
exports = {user:'xiaoming'}

//注意 使用expoets时，只能单个设置属性exports.a = a
//使用module.exports可以单个设置属性，也可以整个赋值
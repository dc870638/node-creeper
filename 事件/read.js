//event事件的原理

const fs = require('fs')

fs.readFile('./hello.txt',{flag:'r',encoding:'utf-8'},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
        dcEvent.emit('fileSuccess',data)
        //1数据库查看所有的有用信息
        //2统计年龄比例
        //3查看所有用户的学校的详细信息
    }
})




let dcEvent = {
    event:{
        //fileSuccess:[fn,fn,fn]
    },
    on:function(eventName,eventFn){
        if(this.event[eventName]){
            this.event[eventName].push(eventFn)
        }else{
            this.event[eventName] = []
            this.event[eventName].push(eventFn)
        }
    },
    emit:function(eventName,eventMsg){
        if(this.event[eventName]){
            this.event[eventName].forEach(itemFn => {
                itemFn(eventMsg)
            })
        }
    }
}

dcEvent.on('fileSuccess',function(eventMsg){
    console.log('1数据库查看所有的有用信息')
})
dcEvent.on('fileSuccess',function(eventMsg){
    console.log('2统计年龄比例')
})
dcEvent.on('fileSuccess',function(eventMsg){
    console.log('3查看所有用户的学校的详细信息')
})
var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

server.listen(8808)


app.get('./',(req,res) => {
    res.sendFile(__dirname + '/index.html',function(){
        console.log('成功')
    })
})

io.on('connection',function(socket){
    socket.emit('news',{hello:'world'})
    socket.on('myOtherEvent',function(data){
        console.log(data)
    })
})
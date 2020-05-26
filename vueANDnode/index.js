var app = require('http').createServer(handle)
var io = require('socket.io')(app)
var fs = require('fs')

app.listen(8800)


function handle(req,res){
    fs.readFile(__dirname + '/index.html', (err,data) => {
        if(err){
            res.writeHead(500)
            return res.end('index1.html')
        }else{
            res.writeHead(200)
            return res.end(data)
        }
    })
}

io.on('connection',function(socket){
    socket.emit('news',{hello:'world'})
    socket.on('myOtherEvent',function(data){
        console.log(data)
    })
})
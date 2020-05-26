var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

server.listen(8808)

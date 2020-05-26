var app = require('express')();
var http = require('http').createServer(app);
var fs = require('fs')
var io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index1.html');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

var http=require('http');

var socket=require('socket.io')
var express=require('express');
var app=express();


var server=app.listen(3000);
app.use(express.static('public'));

var io=socket(server);
io.on('connection',function(socket){

	console.log('socket connection established');

	socket.on('chat',function(data){
		console.log(data);
		io.sockets.emit('chat',data);



	});
	socket.on('typed',function(data){

		socket.broadcast.emit('typed',data);
	})

});


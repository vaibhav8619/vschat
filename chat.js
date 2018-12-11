	var socket=io.connect('http://localhost:3000');

	var uname=document.getElementById('uname'),
		message=document.getElementById('message'),
		btn=document.getElementById('btn'),
		output=document.getElementById('output'),
		typing=document.getElementById('typing');
		btn.addEventListener('click',function() {
				console.log(uname);
				socket.emit('chat',{

					message: message.value,
					name: uname.value
				});
				  message.value = "";


			// body...
		});
		message.addEventListener('keypress',function(){

			socket.emit('typed',uname.value);
		});

		
		socket.on('chat',function(data){
			console.log(data);
			output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';

		});
		socket.on('typed',function(data){
			console.log(data);
			typing.innerHTML='<p><em>' + data + ' is typing a message' + '</em></p>';
		});

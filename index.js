var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"})
	response.get('index.html');
}).listen(process.env.PORT)
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//Uncommon Error: Unexpected token } in JSON at position 33
//This error can occur if your JSON response is malformed, containing extra curly braces or other syntax errors.
//In this case, make sure response.end() is sending valid JSON data.
//The server may not be running correctly if there are issues with the response.
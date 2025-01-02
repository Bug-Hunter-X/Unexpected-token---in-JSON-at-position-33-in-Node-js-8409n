const http = require('http');

const requestListener = (request, response) => {
  const jsonData = {
    message: 'Hello from Node.js!',
    data: {
      key1: 'value1',
      key2: 'value2'
    }
  };
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(jsonData));
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
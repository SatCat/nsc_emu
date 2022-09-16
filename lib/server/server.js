const http = require('http');

const hostname = 'localhost';   //localhost or 192.168.201.200
const port = 4000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

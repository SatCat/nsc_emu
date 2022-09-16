const http = require('http');

const hostname = '192.168.201.200';   //localhost
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log('LIB/SERVER/SERVER.JS code running! __dirname=' + __dirname);
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const testfile2 = fs.readFileSync(path.resolve(__dirname, '../../.gitignore'));  
console.log('.gitignore content:', testfile2);  




// serve files from the public directory
//app.use(express.static('static'));
nport = 4000;
if (process.env.PORT) nport = parseInt(process.env.PORT);

app.use(express.static(path.join(__dirname, '../../static'))); //  "static" off of current is root


// start the express web server listening on 8080
app.listen(nport, 'localhost',  () => {  // 'localhost' or '192.168.201.200'
  console.log("listen port ", nport);
});

// serve the homepage
app.get('/', (req, res) => {
  console.log('/ req detected! path.join=', path.join(__dirname, '../../static'));
  res.sendFile('index.html', { root: path.join(__dirname, '../../static') });
  console.log(' / req end');
});

// click event
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log('click detected! ', JSON.stringify(click));
  res.writeHead(200);
  res.end("Yes! Your click detected OK!");
});
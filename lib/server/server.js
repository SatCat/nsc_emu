console.log('Server-side code running');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// serve files from the public directory
//app.use(express.static('static'));
nport = 4000;
if (process.env.PORT) nport = parseInt(process.env.PORT);

// start the express web server listening on 8080
app.listen(nport, 'localhost',  () => {  // 'localhost' or '192.168.201.200'
  console.log("listen port ", nport);
});

// serve the homepage
app.get('/', (req, res) => {
  console.log('/ req detected! path.join=', path.join(__dirname, '../../static'));
  //res.sendFile(__dirname + '/index.html');

  fs.readdir(path.join(__dirname, '../../static'), (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });

  //res.sendFile(__dirname, '../../static', '/index.html');

  //res.sendFile('/index.html', { root: path.join(__dirname, 'static') });
  res.write('Hello!');
  res.end(); //end the response

  console.log(' / req end');
});

// click event
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log('click detected! ', JSON.stringify(click));
});
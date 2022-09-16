console.log('Server-side code running');
const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('static'));

nport = 4000;
if (process.env.PORT) nport = parseInt(process.env.PORT);

// start the express web server listening on 8080
app.listen(nport, 'localhost',  () => {  // 'localhost' or '192.168.201.200'
  console.log("listen port " + nport);
  
});

// serve the homepage
app.get('/', (req, res) => {
    console.log(__dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
});

// click event
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log('click detected! ' + JSON.stringify(click));
});
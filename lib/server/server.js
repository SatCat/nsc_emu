console.log('Server-side code running');
const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('static'));

// start the express web server listening on 8080
app.listen(4000, () => {
  console.log("listen port 4000");
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
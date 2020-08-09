const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser')
const path = require('path');

//Create Server
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Parse json automatixally
app.use(bodyParser.json());

//Listen to port 3000
server.listen(3000,()=>{
  console.log('Server is listening on port 3000!');
});

//Use public folder
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
console.log(publicPath);

//Basic Site
app.get('/',(req,res)=>{
  res.redirect('html/index.html');
})

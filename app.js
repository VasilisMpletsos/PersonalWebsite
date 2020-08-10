const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

//Create Server
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = socketio(server);

// Parse json automatixally
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Sockets
var visitors = 0;
io.on('connect', (socket) => {
  visitors++;
  io.emit('newVisitor',visitors);
  socket.on('disconnect', () => {
      visitors--;
      io.emit('visitorLeft',visitors);
   });
})

//Use public folder
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

//Basic Site
app.get('/',(req,res)=>{
  res.redirect('html/index.html');
})

//Listen to port 3000
server.listen(port,()=>{
  console.log(`Server is listening on port ${port}!`);
});

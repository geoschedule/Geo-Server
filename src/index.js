const express = require('express');
const bodyparser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

let server =  app.listen(3000);

const io = require('socket.io')(server);

io.on('connection',(socket) => {
    console.log('user connected');

    socket.on('Web-sendShift',(data) => {
        socket.broadcast.emit('Mobile-recieveShift',data);
    })

    socket.on('Mobile-sendLocation',(data) => {
        socket.broadcast.emit('Web-recieveLocation',data);
    })

    socket.on('Mobile-register',(data) => {
        socket.broadcast.emit('Web-receieveRegistration',data);
    })
})

console.log('server listening');
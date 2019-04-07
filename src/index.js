const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');

const port = 3000;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

let server =  app.listen(3000);

const io = require('socket.io')(server);
io.origins('*:*');

io.on('connection',(socket) => {
    console.log('user connected');
    

    socket.on('Web-sendShift',(data) => {
        socket.broadcast.emit('Mobile-recieveShift',data);
    })

    socket.on('Mobile-sendLocation',(data) => {
        console.log(data)
        const {latitude,longitude} = data.coords
        let newData = {
            latitude,
            longitude
        }
        socket.broadcast.emit('Web-recieveLocation',newData);
       
    })

    socket.on('Mobile-register',(data) => {
        console.log(data);
        socket.broadcast.emit('Web-recieveRegistration',data);
    })
})

console.log('server listening');
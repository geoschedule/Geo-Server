const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db/index');
const route = require('./routes/routes')
const cors = require('cors');
const port = 3000;


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

let server =  app.listen(3000);

const io = require('socket.io')(server);
io.origins('*:*');

io.on('connection',(socket) => {
    console.log('user connected');

    socket.on('Web-clockIn',(data) => {
        socket.broadcast.emit('Mobile-clockIn',data);
    })

    socket.on('Web-clockOut',(data) => {
        socket.broadcast.emit('Mobile-clockOut',data);
    })

    socket.on('Web-sendShift',(data) => {
        socket.broadcast.emit('Mobile-recieveShift',data);
    })

    socket.on('Mobile-sendLocation',(data) => {
       
        const {latitude,longitude} = data.location.coords
        const {employeeID} = data
        let newData = {
            latitude,
            longitude,
            employeeID
        }
        socket.broadcast.emit('Web-recieveLocation',newData);
       
    })

    socket.on('Mobile-register',(data) => {
        
        socket.broadcast.emit('Web-recieveRegistration',data);
    })
})

app.use("/" , route.Router)

console.log('server listening');
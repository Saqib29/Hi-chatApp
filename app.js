const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    // console.log(__dirname + '\\public')
    res.sendFile(__dirname + '/index.html');
});

// Socket 
io.on('connection', (socket) => {
    console.log('Connected...');

    // get messages from client sides
    socket.on('message', (msg) => {
        // send msg to all who are connected to this socket
        socket.broadcast.emit('message', msg);
    });
});

// server listening...
http.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
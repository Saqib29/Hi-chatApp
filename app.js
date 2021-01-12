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
});

// server listening...
http.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
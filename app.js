const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    // console.log(__dirname + '\\public')
    res.sendFile(__dirname + '/index.html');
});


// server listening...
http.listen(PORT, () => {
    console.log(`Server started atr ${PORT}`);
});
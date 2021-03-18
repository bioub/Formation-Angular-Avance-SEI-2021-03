const http = require('http');
const { fromEvent } = require('rxjs');


const server = http.createServer();

// server.on('request', (req, res) => {

// });

fromEvent(server, 'request')
    .subscribe((req, res) => {
       res.json({msg: 'Hello'}); 
    });

server.listen(8080);
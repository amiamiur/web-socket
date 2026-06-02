const http = require('http');
const websocket = require('ws');

const server = http.createServer((req,res) => {
    res.end('conn3ct3d');
});

const wss = new websocket.Server({server});

wss.on('headers', (headers, req) => { console.log(headers)});

wss.on('connection', (message, req) => {
    console.log(message);
})

server.listen(8000, () => {
    console.log("Server start on http://localhost:8000");
});
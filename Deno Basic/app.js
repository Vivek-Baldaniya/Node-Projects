// const fs = require('fs').promises;

// const text = "This is some node text!";

// fs.writeFile('node-message.txt', text).then(() => {
//     console.log('Wrote File!');
// })

const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World! (from node)");
});

server.listen(3000);
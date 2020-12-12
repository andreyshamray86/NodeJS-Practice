const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('Hello from server');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running...');
});
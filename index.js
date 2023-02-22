const http = require('node:http');
const PORT = 3000;
const requestListener = (req, res) => {
    console.log(req);
}

const server = http.createServer(requestListener);
server.listen(PORT);
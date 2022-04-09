const http = require('http');

const routes = require('./routes-task9');

const server = http.createServer(routes);

server.listen(4000);
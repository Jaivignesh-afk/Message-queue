"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const node_path_1 = require("node:path");
const parentDir = (0, node_path_1.join)("/", (0, node_path_1.dirname)(__dirname), "..");
const hostname = '127.0.0.1';
const port = 3000;
const server = (0, http_1.createServer)((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(req.method, req.url, req.headers['sec-ch-ua-platform']);
    console.log(res);
    res.end('Hello, World!\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

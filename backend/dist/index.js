"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const node_path_1 = require("node:path");
const parentDir = (0, node_path_1.join)("/", (0, node_path_1.dirname)(__dirname), "..");
const hostname = '127.0.0.1';
const port = 3000;
const app = (0, express_1.default)();
const server = (0, http_1.createServer)((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');
});
io.listen(5173);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

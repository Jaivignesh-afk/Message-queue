"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const node_path_1 = require("node:path");
const parentDir = (0, node_path_1.join)("/", (0, node_path_1.dirname)(__dirname), "..");
const hostname = "127.0.0.1";
const port = 3000;
const server = (0, http_1.createServer)((req, res) => {
    console.log(req);
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }, // Allows requests from this origin only
});
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    socket.on("chat message", (msg) => {
        console.log(msg);
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// listens to the port 3000

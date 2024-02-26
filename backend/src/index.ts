import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { dirname, join } from 'node:path';

const parentDir = join("/", dirname(__dirname), "..");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'}); //writes to the header of the response
  res.end('Hello World\n');
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  } // Allows requests from this origin only
});
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('chat message', (msg) => {
    console.log(msg);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
// listens to the port 3000 
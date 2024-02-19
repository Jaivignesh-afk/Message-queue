import express from 'express';
import { createServer, request} from 'http';

import { dirname, join } from 'node:path';

const parentDir = join("/", dirname(__dirname), "..");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.setHeader('Server', '');
  console.log(res);
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

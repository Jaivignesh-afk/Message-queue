import { IncomingMessage, ServerResponse, createServer } from "http";
import { Server } from "socket.io";
import { dirname, join } from "node:path";

const parentDir = join("/", dirname(__dirname), "..");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  if(req.method === "OPTIONS"){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin");
    res.writeHead(200);
    res.end();
  }
  if (req.method === "POST" && req.url === "/auth") {
    handleAuth(req, res);
  }
});

function handleAuth(req: IncomingMessage, res: ServerResponse) {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      res.end(data);
    });
}
const io = new Server(server, {
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

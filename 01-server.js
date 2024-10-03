const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === "/") {
    res.end("You are in landing page");
  } else if (req.url === "/profile") {
    res.end("You are in profile page");
  } else {
    res.end("Invalid endpoint");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Server started at port: " + PORT);
});

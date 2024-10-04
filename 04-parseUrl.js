const express = require("express");
const url = require("url");
const app = express();

const PORT = 8080;
const address = "https://localhost:" + PORT + "/car?Name=BMW&Color=Black";

const q = url.parse(address, true);

app.get("*", (req, res) => {
  res.send("<h1>Server is up and running...<h1/>");
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
  console.log(q.protocol);
  console.log(q.hostname);
  console.log(q.port);
  console.log(q.host);
  console.log(q.path);
  console.log(q.search);
  console.log(q.query);
  //   console.log(q);
});

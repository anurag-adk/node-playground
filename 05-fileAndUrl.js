const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();
const PORT = 8080;

app.get("*", (req, res) => {
  const q = url.parse(req.originalUrl, true);
  //   console.log(q);
  const fileName = `.${q.pathname}.txt`;
  console.log(fileName);
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) res.status(404).send("<h1>File doesn't exist</h1>");
    else res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});

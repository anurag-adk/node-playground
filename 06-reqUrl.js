const express = require("express");
const app = express();

const PORT = 8080;

app.get("*", (req, res) => {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  const fullUrl = `${protocol}://${host}:${PORT}${url}`;
  res.send(`<h1>Server is up and running at</h1>${fullUrl}`);
  //   res.send(`<h1>Server is up and running</h1>`);
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});

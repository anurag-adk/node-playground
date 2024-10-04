const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Welcome! This is Landing Page");
});

app.get("/read", (req, res) => {
  fs.readFile("./car.txt", "utf8", (err, data) => {
    if (err) res.send("Cannot Read File!");
    res.send(data);
  });
});

app.get("/write", (req, res) => {
  data = "Honda";
  fs.writeFile("./car.txt", data, (err) => {
    if (err) res.send("Cannod Write to File!");
    res.send("Successfully Written");
  });
});

app.get("/append", (req, res) => {
  data = "Audi";
  fs.appendFile("./car.txt", " " + data, (err) => {
    if (err) res.send("Cannot Append to File!");
    res.send("Successfully Appended");
  });
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});

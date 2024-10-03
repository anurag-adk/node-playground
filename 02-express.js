const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("You are in Landing Page");
});

app.get("/profile", (req, res) => {
  res.status(200).json("You are in Profile Page"); //you can send json as response or direct message
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});

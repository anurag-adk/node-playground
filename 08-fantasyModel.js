const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

// console.log(process.env.PORT);

mongoose
  .connect(process.env.db_conn, {})
  .then(() => {
    console.log("Database Connection Successful!");
  })
  .catch((err) => {
    console.log("Database Connection Failed!");
  });

const fantasySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  skills: {
    type: [String],
  },
  stats: {
    mp: { type: Number },
    hp: { type: Number },
    strength: { type: Number },
    intelligence: { type: Number },
    familiar: { type: String },
  },
});
const novelModel = mongoose.model("fantasy", fantasySchema);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});

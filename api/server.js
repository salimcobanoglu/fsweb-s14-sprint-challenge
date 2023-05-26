// serverı buraya yazın ve index.js require yazın
const express = require("express");
const server = express();

server.get("/", (reg, res) => {
  res.json({ message: "welcome to my app!..." });
});

module.exports = server;

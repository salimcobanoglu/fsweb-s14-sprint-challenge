// serverı buraya yazın ve index.js require yazın
const express = require("express");
const server = express();

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (reg, res) => {
  res.json({ message: "welcome to my app!..." });
});

module.exports = server;

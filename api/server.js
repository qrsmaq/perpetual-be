const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const router = require("../data/helper/db-router");
const routes = require("../routes");
const authRouter = require("../data/helper/auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

routes.forEach((route) => {
  server.use(route.url, router);
});

server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

module.exports = server;

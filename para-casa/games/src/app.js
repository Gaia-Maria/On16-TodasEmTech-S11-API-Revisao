const express = require("express");

const app = express();

app.use(express.json());

const gamesRoute = require("./router/gamesRoutes");

app.use("/gameStore", gamesRoute);

module.exports = app;

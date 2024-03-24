const express = require("express");
const app = express();
const { validateAccessToken } = require("../utils/jwt");
const pokemonRoutes = require("./pokemon");
const authRoutes = require("./auth");

app.use("/auth", authRoutes);
app.use(validateAccessToken, pokemonRoutes);

module.exports = app;

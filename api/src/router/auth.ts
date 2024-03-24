const express = require("express");
const app = express();
const authController = require("../controllers/auth");
app.get("/generateToken", authController.generateToken);

module.exports = app;

const express = require("express");
let app = express.Router();

// Auth Files
const Register = require("./register");
app.use("/register", Register);

module.exports = app;

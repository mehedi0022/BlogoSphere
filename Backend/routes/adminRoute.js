const express = require("express");

const adminRoute = express.Router();

adminRoute.get("/", (req, res) => {
  res.send("Welcome To Admin Dashboard");
});

module.exports = adminRoute;

const express = require("express");

const userRoute = express.Router();

userRoute.get("/get-blog-post", (req, res) => {
  res.json({
    success: true,
    message: "Api Working",
  });
});

module.exports = userRoute;

const express = require("express");
const { getPost } = require("../controllers/userControllers");

const userRoute = express.Router();

userRoute.get("/all-post", getPost);

module.exports = userRoute;

const express = require("express");
const upload = require("../config/multer");
const {
  addPost,
  loginAdmin,
  deletePost,
} = require("../controllers/adminControllers");
const authAdmin = require("../middlewares/adminAuth");

const adminRoute = express.Router();

adminRoute.get("/", (req, res) => {
  res.send("Welcome To Admin Dashboard");
});

// API Routes for Blog Post
adminRoute.post("/login", loginAdmin);
adminRoute.get("/all-post", authAdmin, addPost);
adminRoute.post("/add-post", authAdmin, upload.single("image"), addPost);
adminRoute.delete("/delete-post/:id", authAdmin, deletePost);
adminRoute.put("/update-post/:id", authAdmin, upload.single("image"), addPost);

// API Routes for Team
adminRoute.get("/all-team-member");
adminRoute.post("/add-team-member");
adminRoute.delete("/delete-team-member");
adminRoute.put("/update-team-member");

// API Routes for Services
adminRoute.get("all-services");
adminRoute.post("add-services");
adminRoute.delete("delete-services");
adminRoute.put("update-services");

module.exports = adminRoute;

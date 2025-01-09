const blogPostModel = require("../models/blogPostModel");

// API for get post
const getPost = async (req, res) => {
  const allPost = await blogPostModel.find();
  res.json({
    success: true,
    post: allPost,
  });
};

module.exports = { getPost };

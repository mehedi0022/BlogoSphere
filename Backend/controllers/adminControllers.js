const jwt = require("jsonwebtoken");
const blogPostModel = require("../models/blogPostModel");

// API for Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIl &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const adminToken = jwt.sign(
        {
          email: email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        success: true,
        adminToken: adminToken,
      });
    } else {
      res.json({ success: false, message: "Invalid login Details" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
// API for add Post
const addPost = async (req, res) => {
  try {
    const { title, shortDesc, desc } = req.body;

    console.log(req.file.path);

    const newPost = new blogPostModel({
      title,
      shortDesc,
      desc,
      featuredImage: req.file ? req.file.path : "",
    });
    await newPost.save();

    res.json({
      success: true,
      message: "Post Added Successfully!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for get post
const getPost = async (req, res) => {
  const allPost = await blogPostModel.find();
  console.log(allPost);
};

// Delete post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const blogPost = await blogPostModel.findById(id);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Delete the cover image if it exists
    if (blogPost.coverImage) {
      const imagePath = path.join(__dirname, "../", blogPost.coverImage);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image:", err);
        }
      });
    }

    // Delete the blog post from the database
    await blogPostModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Post Delete Successfully!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Update Post by admin

module.exports = { loginAdmin, addPost, getPost, deletePost };

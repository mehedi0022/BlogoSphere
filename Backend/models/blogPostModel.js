const mongoose = require("mongoose");

const blogPostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const blogPostModel =
  mongoose.models.blogPost || mongoose.model("blogPost", blogPostSchema);

module.exports = blogPostModel;

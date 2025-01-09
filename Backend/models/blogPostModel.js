const mongoose = require("mongoose");

const blogPostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    featuredImage: {
      type: String,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

const blogPostModel =
  mongoose.models.blogPost || mongoose.model("blogPost", blogPostSchema);

module.exports = blogPostModel;

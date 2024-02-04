const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

blogSchema.set("toJSON", {
  transform: (document, element) => {
    element.id = element._id.toString();
    delete element._id;
    delete element.__v;
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

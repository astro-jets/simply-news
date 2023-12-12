import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  story: String,
  category: String,
  author: { type: String, default: "Astro" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;

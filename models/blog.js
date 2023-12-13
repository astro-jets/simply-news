import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const BlogSchema = new Schema({
  title: String,
  story: String,
  category: String,
  image:{
      type:Buffer
  },
  imageType:{
      type:String
  },
  author: { type: String, default: "Astro" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

BlogSchema.virtual('thumbnail').get(function(){
  if(this.image != null && this.imageType != null)
  {
    return `data:${this.imageType};charset=utf-8;base64,${this.image.toString('base64')}`
  }
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;

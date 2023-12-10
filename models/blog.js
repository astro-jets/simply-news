import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:String,
    author:{
        type:String,
        default:"Mphatso"
    },
    category:String,
    story:String,
    date:{
        type:Date,
        default:Date.now()
    }
});

const Blog = mongoose.model.Blog || mongoose.model('Blog',blogSchema)

export default Blog;
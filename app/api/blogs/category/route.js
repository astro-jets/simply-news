import connectDB from "@/utils/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const convertImage = async (image) => `data:${image.imageType};charset=utf-8;base64,${image.image.toString('base64')}`;

  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const blogs = await Blog.find({ category });

    if (blogs.length > 0) {
      // Create an empty array to store converted blogs
      const convertedBlogs = [];

      // Loop through each blog
      for (const blog of blogs) {
        // Convert image for each blog
        const convertedImage = await convertImage(blog);

        // Create an object for each blog with converted image
        const convertedBlog = {
          title: blog.title,
          story: blog.story,
          category: blog.category,
          author: blog.author,
          image: convertedImage,
        };

        // Add the converted blog to the array
        convertedBlogs.push(convertedBlog);
      }

      // Return all converted blogs
      return NextResponse.json({ data: convertedBlogs });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Products found !",
      });
    }
  } catch (err) {
    console.log(`Failed to fetch Blog ${err}`);
    return NextResponse.json({
      status: "error",
      message: "Something went wrong",
    });
  }
}

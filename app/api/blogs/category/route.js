import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req,res)
{
    try{
        const {searchParams} = new URL(req.url);
        const category = searchParams.get('category');
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("news");

        // Table
        const collection = db.collection("blogs");

        // Fetch the data
        const results = await collection
        .find({category:category})
        .toArray();  

        // Create an empty array to store converted blogs
        const convertedBlogs = [];
        const convertImage = (image, imageType) => {
            return `data:${imageType};charset=utf-8;base64,${image.toString('base64')}`;
        };

         if (results.length > 0) {
            // Loop through each blog
            for (const blog of results) {
                // Convert image for each blog
                const convertedImage = convertImage(blog.image,blog.imageType);
                const trimStory = async (story) => {
                    const words = story.split(" ");
                    const trimmedWords = words.slice(0, 8);
                    const trimmedParagraph = trimmedWords.join(" ");
                    return(trimmedParagraph);
                }
                const story = await trimStory(blog.story)
                // Create an object for each blog with converted image
                const convertedBlog = {
                    id:blog._id,
                    title: blog.title,
                    story: story,
                    category: blog.category,
                    image: convertedImage,
                };

                // Add the converted blog to the array
                convertedBlogs.push(convertedBlog);
            }
        }
        
        // Return the result
        return NextResponse.json(convertedBlogs)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}
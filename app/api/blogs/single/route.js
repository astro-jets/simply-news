import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req,res)
{
    try{
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');
        console.log("ID => ",id)
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("news");

        // Table
        const collection = db.collection("blogs");

        // Fetch the data
        const blog = await collection.findOne({_id:new ObjectId(id)});

        console.log("Result => ",blog)

        if(blog){
        // Create an empty array to store converted blogs
        const convertedBlogs = [];
        const convertImage = (image, imageType) => {
            return `data:${imageType};charset=utf-8;base64,${image.toString('base64')}`;
        };

        const convertedImage = convertImage(blog.image,blog.imageType);

        // Create an object for each blog with converted image
        const convertedBlog = {
        title: blog.title,
        story: blog.story,
        category: blog.category,
        image: convertedImage,
        };

        // Add the converted blog to the array
        convertedBlogs.push(convertedBlog);
        
        // Return the result
        return NextResponse.json(convertedBlogs[0])
    }
    else{
        return NextResponse.json(null)
    }
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}
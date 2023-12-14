import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST (req){
    const {title,story,category,image,imageType} = await req.json();
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("news");

        // Table
        const collection = db.collection("blogs")

        const newBlog = await collection.insertOne({
            title,story,category,image,imageType
        });

        if(newBlog){
            return NextResponse.json({
                status:"true",
                message:"Blog created successfully"
            });
        }
    }
    catch(err){
        console.log(`Failed to post Blog ${err}`);
        return NextResponse.json({
            status:"error",
            message:"Something went wrong"
        })
    }
}
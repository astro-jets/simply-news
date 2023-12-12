import connectDB from "@/utils/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

// export const dynamic = 'force-dynamic';

export async function POST (req){
    await connectDB();
    const {title,story,category} = await req.json();
    try{
        const newBlog = await Blog.create({
            title,story,category
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
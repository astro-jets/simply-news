import connectDB from "@/utils/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET (req){
    try{
        await connectDB();
        const {searchParams} = new URL(req.url);
        const category = searchParams.get('category');
        console.log("Category => ",category);
        const blogs = await Blog.find({category:category});
        
        if(blogs){
            return NextResponse.json({data:blogs});
        }else {
            return NextResponse.json({
                success: false,
                status: 204,
                message: "No Products found !",
            });
        }
    }
    catch(err){
        console.log(`Failed to fetch Blog ${err}`);
        return NextResponse.json({
            status:"error",
            message:"Something went wrong"
        })
    }
}
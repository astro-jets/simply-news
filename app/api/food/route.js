import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(req,res)
{
    try{
        const mongoClient = await clientPromise; 
        // Databse Name
        const db = mongoClient.db("sample_restaurants");

        // Table
        const collection = db.collection("restaurants");

        // Fetch the data
        const results = await collection
        .find({})
        .project({
            grades:0,
            borough:0,
            restaurant_id:0,
        })
        .limit(2)
        .toArray();  
        
        // Return the result
        return NextResponse.json(results)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
    }
}
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req,res)
{
    try{
        const mongoClient = await clientPromise;
        // Databse Name
        const db = mongoClient.db("news");

        // Table
        const collection = db.collection("blogs");

        // Fetch the data
        const results = await collection
        .find({})
        .limit(1)
        .toArray();  
        
        // Return the result
        return NextResponse.json(results)
    }catch(e){
        console.log("Failed to fetch Data => ",e);
        return NextResponse.json({ error: 'Failed to fetch data'+e });
    }
}
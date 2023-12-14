import { MongoClient } from "mongodb";

// Check for missing MONGODB_URI environment variable
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

// Variable declarations
let client;
let clientPromise;

// Development environment configuration
if (process.env.NODE_ENV === 'development') {
  // Global variable for HMR
  let globalWithMongo = globalThis;
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Production environment configuration
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
console.log("Successfully connected to the database")
// Export the client promise
export default clientPromise;

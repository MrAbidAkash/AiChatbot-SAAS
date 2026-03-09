import { MongoClient, Db } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;

export function getMongoClient(): MongoClient {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }
  if (!client) {
    client = new MongoClient(uri);
  }
  return client;
}

export function getDb(): Db {
  if (!db) {
    db = getMongoClient().db();
  }
  return db;
}

// For backwards compatibility
export { db };

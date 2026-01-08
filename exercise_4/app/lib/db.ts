import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (!client) {
    const clientInstance = new MongoClient(uri as string);
    await clientInstance.connect();
    client = clientInstance;
    db = client.db("todo_app");
  }
  return { client, db };
}

export async function getTodoCollection(): Promise<Collection> {
  if (!db) {
    const { db: database } = await connectToDatabase();
    return database.collection("todos");
  }
  return db.collection("todos");
}

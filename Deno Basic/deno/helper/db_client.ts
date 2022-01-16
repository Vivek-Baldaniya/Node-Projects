import {
  MongoClient,
  Database,
} from "https://deno.land/x/mongo@v0.29.0/mod.ts";

let db: Database;

export function connect() {
  const client = new MongoClient();
  // Connecting to a Local Database
  client.connect(
    "mongodb+srv://Vivek_Baldaniya:Vivek456@cluster0.32anq.mongodb.net?retryWrites=true&w=majority"
  );

  db = client.database("todo-app");
}

export function getDb() {
  return db;
}

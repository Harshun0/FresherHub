import { MongoClient, type Db } from "mongodb";

let clientPromise: Promise<MongoClient> | undefined;

function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }
  return uri;
}

async function getClient() {
  if (!clientPromise) {
    const client = new MongoClient(getMongoUri());
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db(process.env.MONGODB_DB_NAME ?? "freshershub");
}

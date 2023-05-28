import { MongoClient, Sort } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect("");

  return client;
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: Document
) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(
  client: MongoClient,
  collection: string,
  sort: Sort
) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

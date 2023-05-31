import { connectDatabase, getAllDocuments } from "@/utils/dbUtils";
import { NextResponse } from "next/server";

export async function GET() {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    return NextResponse.json(
      { message: "Connecting to the database failed!" },
      {
        status: 500,
      }
    );
  }
  try {
    const documents = await getAllDocuments(client, "eventList", { _id: -1 });
    return NextResponse.json(
      { eventList: documents },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Getting eventLists failed." },
      {
        status: 500,
      }
    );
  }
}
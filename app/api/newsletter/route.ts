import { connectDatabase, insertDocument } from "@/utils/dbUtils";
import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "douban",
    age: 16,
  };
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { userEmail } = await request.json();

  if (!userEmail || !userEmail.includes("@")) {
    return NextResponse.json({ message: "Invalid email address." }, { status: 422 });
  }

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    return NextResponse.json(
      { message: "Connecting to the database failed!" },
      { status: 500 }
    );
  }

  try {
    await insertDocument(client, "newsletter", { email: userEmail });
    client.close();
  } catch (error) {
  return  NextResponse.json({ message: "Inserting data failed!" }, { status: 500 });
   
  }

  return NextResponse.json({ message: "Signed up!" }, { status: 201 });
}

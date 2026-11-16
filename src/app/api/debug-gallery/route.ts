import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await client.fetch(
    `*[_type == "galleryItem"]`,
    {},
    { cache: "no-store" }
  );
  return NextResponse.json({ count: data.length, items: data });
}

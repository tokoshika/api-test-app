import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
    { data: "This is DATA 1", message: "Hello Next.js 13 !!", city: "帯広" },

    { data: "This is DATA 2", message: "Hello NextResponse !!", city: "札幌" },

    { data: "This is DATA 3", message: "Hello API router.js !!", city: "東京" },
  ]);
}

import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
    { data: "This is DATA 1", message: "Hello Next.js 13 !!" },

    { data: "This is DATA 2", message: "Hello NextResponse !!" },

    { data: "This is DATA 3", message: "Hello API router.js !!" },
  ]);
}

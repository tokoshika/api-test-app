import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ data: "Hello Next.js 13 !!" });
}

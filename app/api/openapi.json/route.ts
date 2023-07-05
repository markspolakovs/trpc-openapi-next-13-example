import { NextResponse } from "next/server";
import { openApiDocument } from "../trpc/_router";

export function GET() {
  return NextResponse.json(openApiDocument);
}

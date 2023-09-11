import { NextResponse } from "next/server";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {

    return NextResponse.next();
  } else {
    return NextResponse.next();
  }
}

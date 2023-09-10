import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const Key = new TextEncoder().encode(process.env.JWT_KEY);
  const payload = { email: "Abc@Abc.com", userid: "Abc123" };
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("https://localhost:3000")
    .setExpirationTime("2h")
    .sign(Key);

  return NextResponse.json({ token: token });
}

export async function POST(req, res) {
  const JsonBody = await req.json();
  const token = JsonBody["token"];

  const Key = new TextEncoder().encode(process.env.JWT_KEY);

  const decoded = await jwtVerify(token, Key);
  return NextResponse.json(decoded);
}

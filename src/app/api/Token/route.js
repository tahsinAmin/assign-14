import { SignJWT } from "jose";
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

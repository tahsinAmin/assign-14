import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const jsonBody = await req.json();
  let username = jsonBody["username"];
  let password = jsonBody["password"];

  //  Check with database if it's correct
  if (username === "ABC" && password === "123") {
    const payload = { username: username };

    // Create token
    const key = new TextEncoder().encode(process.env.JWT_KEY);
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("https://localhost:3000")
      .setExpirationTime("2h")
      .sign(key);

    return NextResponse.json(
      { status: true, message: "Login Successful", token: token },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { status: false, messgae: "Invalid User" },
      { status: 401 }
    );
  }
}

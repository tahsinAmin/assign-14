import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  console.log("Insid login")
  const jsonBody = await req.json();
  let email = jsonBody["email"];
  let password = jsonBody["password"];

  //  Check with database if it's correct
  if (email === "email@email.com" && password === "123") {
    const payload = { email: email };

    // Create token
    let Cookie = await TokenCookie(email);
    return NextResponse.json(
      { status: true, message: "Request completed" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ status: false, message: "Request Fail" });
  }
}

export async function GET(req,res) {
  cookies().delete('token')
  return NextResponse.json(
      {status:true,message:"Request Completed"}
  )
}
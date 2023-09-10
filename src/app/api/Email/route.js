import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import smtpTransport from "nodemailer-smtp-transport";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let ToEmail = searchParams.get("email");

  // Transporter
  let Transporter = nodemailer.createTransport(
    smtpTransport({
      host: "mail.teamrabbil.com",
      port: 25,
      secure: false,
      auth: {
        user: "info@teamrabbil.com",
        pass: "~sR4[bhaC[Qs",
      },
      tls: { rejectUnauthorized: false },
    })
  );

  // Prepare Email
  let myEmail = {
    from: "Test Email from NextJs Application<info@teamrabbil.com>",
    to: ToEmail,
    subject: "Test Email from NextJs Application",
    text: "text : Test Email from NextJs Application",
  };

  try {
    let result = await Transporter.sendMail(myEmail);
    return NextResponse.json({ msg: "Success", result: result });
  } catch (e) {
    return NextResponse.json({ msg: "Failed" });
  }
}

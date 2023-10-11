import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { nombre, email, mensaje } = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      host: "c1782292.ferozo.com",
      port: "465",
      secure: true,
      auth: {
        user: "contacto@lumideal.ar",
        pass: process.env.PASS_MAIL,
      },
    });

    const msjHtml = `   <h1> Consulta realizada desde la web </h1> <br/>
    <h3>Nombre: ${nombre}</h3> 
    <h5> Email: ${email} </h5>
    <p> Consulta: ${mensaje} </p>`;

    const mailOption = {
      from: `${nombre} contacto@lumideal.ar`,
      to: "contacto@lumideal.ar",
      subject: "ENVIADO DESDE LA WEB DE LUMIDEAL",
      html: msjHtml,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Succerfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}

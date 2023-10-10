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
        pass: "RxGDj@g5xK",
      },
    });

    const mailOption = {
      from: `${nombre} contacto@lumideal.ar`,
      to: "nachoescobar.ok@gmail.com",
      subject: "ENVIADO DESDE LA WEB DE LUMIDEAL",
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
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

// export default async function handler(req, res) {
//   req.method = "POST";
//   if (req.method === "POST") {
//     const { nombre, email, mensaje } = req.body;

//     try {
//       // Configura el transportador de nodemailer (debes configurar tus propios detalles de SMTP)
//       const transporter = nodemailer.createTransport({
//         host: "smpt.mail.ferozo.com",
//         port: 465,
//         secure: false,
//         auth: {
//           user: "contacto@lumideal.ar",
//           pass: "RxGDj@g5xK",
//         },
//       });

//       // Configura el correo
//       const mailOptions = {
//         from: "no-reply@c1782292.ferozo.com",
//         to: "contacto@lumideal.ar",
//         subject: "Consulta de formulario de contacto",
//         text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
//       };

//       // Envía el correo
//       await transporter.sendMail(mailOptions);

//       res.status(200).json({ message: "Correo enviado con éxito" });
//     } catch (error) {
//       console.error("Error al enviar el correo:", error);
//       res.status(500).json({ message: "Error en el servidor" });
//     }
//   } else {
//     res.status(405).json({ message: "Método no permitido" });
//   }
// }

// import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import Resend from "resend";

const resend = new Resend("re_brMZ55xh_F8GBm3V85g2H2qxiX2vuCj92");

export async function POST(request) {
  try {
    const body = await request.emails.send();
    console.log("body", body);
    const { email, nombre, mensaje } = body;
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nachoescobar.ok@gmail.com",
      subject: `LUMIDEAL WEB CONSULTA DE ${nombre} - ${email}`,
      text: mensaje,
    });

    if (data.status === "success") {
      return NextResponse.json({ message: "Email Successfully Sent!" });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
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

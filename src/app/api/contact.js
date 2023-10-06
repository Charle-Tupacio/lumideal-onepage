import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, email, mensaje } = req.body;

    try {
      // Configura el transportador de nodemailer (debes configurar tus propios detalles de SMTP)
      const transporter = nodemailer.createTransport({
        host: "c1782292.ferozo.com",
        port: 587,
        secure: false,
        auth: {
          user: "contacto@lumideal.ar",
          pass: "RxGDj@g5xK",
        },
      });

      // Configura el correo
      const mailOptions = {
        from: "no-reply@c1782292.ferozo.com",
        to: "contacto@lumideal.ar",
        subject: "Consulta de formulario de contacto",
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
      };

      // Envía el correo
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}

// import { Resend } from "resend";

// const resend = new Resend("re_brMZ55xh_F8GBm3V85g2H2qxiX2vuCj92");

// export const sendEmail = async (formData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");
//   const name = formData.get("name");

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "contacto@lumideal.ar",
//     subject: `LUMIDEAL WEB CONSULTA DE ${name} - ${senderEmail}`,
//     text: message,
//   });
// };

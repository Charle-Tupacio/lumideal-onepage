import { Resend } from "resend";

const resend = new Resend("re_brMZ55xh_F8GBm3V85g2H2qxiX2vuCj92");

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const name = formData.get("name");

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "contacto@lumideal.ar",
    subject: `LUMIDEAL WEB CONSULTA DE ${name} - ${senderEmail}`,
    text: message,
  });
};

import { NextResponse } from "next/server";
import Resend from "resend";
import ContactForm from "./form";

const resend = new Resend("re_brMZ55xh_F8GBm3V85g2H2qxiX2vuCj92");

export async function POST(request) {
  try {
    const body = await request.formData();
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

function rutaForm() {
  return <ContactForm />;
}

export default rutaForm;

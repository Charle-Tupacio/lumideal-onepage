"use client";

import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.status === 200) {
        // Envío exitoso, puedes redirigir o mostrar un mensaje de éxito aquí
        console.log("Exito en el proceso");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Manejar errores de envío
        console.error("Error en el envío del formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className=" text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="text-black"
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="text-black"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;

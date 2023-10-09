"use client";

import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.status === 200) {
        setFormData({});
        // Envío exitoso, puedes redirigir o mostrar un mensaje de éxito aquí
        console.log("Exito en el proceso");
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
        value={formData.nombre}
        onChange={handleChange}
        className=" text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="text-black"
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        className="text-black"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;

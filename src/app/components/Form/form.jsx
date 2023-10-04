"use client";

import { useState } from "react";

function Formu() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    // Obtener los datos del formulario
    const data = {
      nombre,
      email,
      mensaje,
    };

    // Crear un enlace a la aplicación de correo electrónico
    const href = `mailto:nachoescobar.ok@gmail.com?subject=CONSULTA CREADA DESDE LA WEB ${data.nombre}&body=${data.mensaje}`;

    // Abrir el enlace en una nueva pestaña
    window.open(href, "_blank");
  };
  return (
    <div className="h-[40vh] items-center justify-center text-black flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-[40%]">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="p-2"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="p-2"
        />
        <button type="submit" className=" bg-white text-red-600 rounded-full">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formu;

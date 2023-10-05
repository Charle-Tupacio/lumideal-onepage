"use client";

import { useState } from "react";
import { sendEmail } from "./rute";

function Formu() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="h-[40vh] items-center justify-center text-black flex flex-col">
      <form
        onSubmit={async (FormData) => {
          await sendEmail(FormData);
        }}
        className="flex flex-col space-y-6 w-[40%]"
      >
        <input
          type="email"
          name="senderEmail"
          required
          placeholder="Correo electrónico"
          className="p-2"
        />
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre"
          className="p-2"
        />
        <textarea
          name="message"
          required
          placeholder="Mensaje"
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

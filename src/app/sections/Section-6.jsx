"use client";

import { useState } from "react";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";

function Section6() {
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
    const href = `mailto:contacto@lumideal.ar?subject=CONSULTA CREADA DESDE LA WEB ${data.nombre}&body=${data.mensaje}`;

    // Abrir el enlace en una nueva pestaña
    window.open(href, "_blank");
  };
  return (
    <div>
      <section
        id="contacto"
        className=" bg-[#315D6E] w-full  h-auto max-md:pb-10  flex md:columns-2 max-md:items-center justify-center"
      >
        {/* imagen */}
        <div className=" w-2/5 h-full max-md:hidden ">
          <img
            src="/pic-formu/img-formu.png"
            alt="imagen panel solar work"
            className="w-full h-full object-"
          />
        </div>
        <div className=" md:w-3/5 flex flex-col justify-center">
          {/* parte arriba */}
          <div className=" md:h-[46vh] h-auto pt-10 w-full flex flex-col md:pl-20 max-md:items-start max-md:pl-10 max-md:justify-center md:pt-28">
            <h2 className="fuente-2 text-[1.4rem] md:text-[2rem]">
              CONTACTATE CON NUESTROS
            </h2>
            <h2 className="fuente-2 text-[1.4rem] md:text-[2rem]">
              ASESORES COMERCIALES
            </h2>
            <a
              href="https://wa.link/n3i4ut"
              className="md:text-[1.5rem] flex items-center"
            >
              <HiMiniDevicePhoneMobile className="mr-2" /> (11) 2391-2588
            </a>
            <a
              href="mailto:contacto@lumideal.com.ar"
              className="md:text-[1.5rem] flex items-center"
            >
              <AiOutlineMail className="mr-2" /> contacto@lumideal.ar
            </a>
            <hr className="md:w-[45vw] w-[70vw] md:mt-20 mt-4 max-md:hidden" />
          </div>
          {/* parte formu */}
          <div className="h-full w-full flex max-md:flex-col justify-center items-center md:pl-20">
            <form onSubmit={handleSubmit} className="flex flex-col max-md:mt-8">
              <div className="flex max-md:flex-col md:space-x-2">
                <div className="flex flex-col md:w-1/2 w-[80vw]">
                  <label htmlFor="name" className="ml-2  text-[1.3rem]">
                    NOMBRE *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className=" w-[60vw] md:w-full rounded-full text-black px-3 h-10 max-md:"
                  />
                </div>
                <div className="flex md:w-1/2 flex-col">
                  <label htmlFor="email" className="ml-2 text-[1.3rem]">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="md:w-full w-[60vw] text-black rounded-full px-3 h-10"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-[1.3rem] ml-2">
                  CONSULTA*
                </label>
                <textarea
                  name="message"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className=" rounded-3xl md:w-[29vw] w-[60vw] max-md:h-[20vh] p-3 text-black resize-none h-28 escondeme-scroll"
                />
              </div>
              <button
                className="md:ml-2 max-md:w-[60vw] text-[1.4rem] rounded-full border border-white mt-4 py-2 text-center w-28"
                type="submit"
              >
                ENVIAR
              </button>
            </form>
            <div className=" max-md:mt-4 max-md:pl-10 px-6">
              <h3 className=" text-[1.3rem] md:text-[1.6rem]">LUMIDEAL</h3>
              <p className=" text-[0.8rem] md:text-[1.1rem]">
                Hacé tu solicitud de presupuesto
              </p>
              <p className="text-[0.8rem] md:text-[1.1rem]">
                Contactanos y despejá tus dudas, estaremos contestandote a la
                brevedad
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section6;

import React from "react";

function Section6() {
  return (
    <div>
      <section className=" bg-[#315D6E] w-full h-[900px]] flex columns-2 justify-center">
        {/* imagen */}
        <div className=" w-2/5 h-fill ">
          <img
            src="/pic-formu/img-formu.png"
            alt="imagen panel solar work"
            className="w-full h-full object-"
          />
        </div>
        <div className=" w-3/5 flex flex-col justify-center">
          {/* parte arriba */}
          <div className=" h-[46vh] w-full flex flex-col pl-20 pt-28">
            <h2 className="fuente-2 text-[2rem]">CONTACTATE CON NUESTROS</h2>
            <h2 className="fuente-2 text-[2rem]">ASESORES COMERCIALES</h2>
            <a href="https://wa.link/ybulep" className="text-[1.5rem]">
              (11) 2391-2588
            </a>
            <a href="mailto:contacto@lumideal.com.ar" className="text-[1.5rem]">
              contacto@lumideal.com.ar
            </a>
            <hr className="w-[45vw] mt-20" />
          </div>
          {/* parte formu */}
          <div className="h-full w-full flex justify-center items-center pl-20">
            <form className="flex flex-col">
              <div className="flex space-x-2">
                <div className="flex  flex-col w-1/2">
                  <label htmlFor="name" className="ml-2  text-[1.3rem]">
                    NOMBRE *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className=" w-full rounded-full h-10"
                  />
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="email" className="ml-2 text-[1.3rem]">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-full h-10"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-[1.3rem] ml-2">
                  CONSULTA*
                </label>
                <textarea
                  id="message"
                  name="message"
                  className=" rounded-3xl w-[29vw] h-28"
                />
              </div>
              <button
                className="ml-2 text-[1.4rem] rounded-full border border-white mt-4 py-2 text-center w-28"
                type="submit"
              >
                ENVIAR
              </button>
            </form>
            <div className=" px-6">
              <h3 className="text-[1.6rem]">LUMIDEAL</h3>
              <p className="text-[1.1rem]">Hacé tu solicitud de presupuesto</p>
              <p className="text-[1.1rem]">
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

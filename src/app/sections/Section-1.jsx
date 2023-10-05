import React from "react";

function Section1() {
  return (
    <div>
      <section className="md:h-[92vh] h-[75vh] w-full flex bg-cover bg-[url('img/bg-section1.png')]  bg-center">
        <div className="flex flex-col w-full h-full justify-center items-center">
          {/* texto */}
          <div className="flex flex-col w-[90vw] md:w-[50vw]">
            <h1 className="md:text-[6rem] text-[2.7rem] fuente-1 max-md:mb-2 pr-6 espacio-renglon ">
              SOLUCIONES SUSTENTABLES
            </h1>
            <p className="fuente-1 text-[1rem] md:text-[2rem] md:pr-56 ">
              DISFRUTÁ DE ENERGÍA SOLAR
            </p>
            <p className="fuente-1 text-[1rem] md:text-[2rem] md:pr-56 ">
              Y REDUCÍ COSTOS
            </p>
            {/* boton */}
            <a href="#contacto">
              <button className="btn bg-[#009285] md:mt-4 px-2 w-[250px] h-[45px] text-[1rem] max-md:mt-[2vh] md:w-[300px] md:h-[60px] md:text-[1.2rem] fuente-2 rounded-full">
                SOLICITÁ PRESUPUESTO
              </button>
            </a>
          </div>
          {/* iconos  */}
          <div className="flex max-md:flex-col max-md:space-y-2 items-center justify-center opacity-100  md:space-x-4 md:opacity-70 md:hover:opacity-100 z-50 fixed md:bottom-8 bottom-[15%] md:left-[84vw]  left-[90vw]">
            <a href="https://wa.link/n3i4ut" target="_blank">
              <img
                src="Icono-whatsapp.png"
                alt="icono whatsapp"
                className="md:w-[4vw] w-[8vw]"
              />
            </a>
            <a href="mailto:contacto@lumideal.ar" target="_blank">
              <img
                src="Icono-mail.png"
                alt="icono-mail"
                className="md:w-[4vw] w-[8vw]"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="Icono-instagram.png"
                alt="icono-instagram"
                className="md:w-[4vw] w-[8vw]"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;

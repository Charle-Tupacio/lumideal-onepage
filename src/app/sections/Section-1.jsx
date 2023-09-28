import React from "react";

function Section1() {
  return (
    <div>
      <section className="md:h-[800px] h-[400px] w-full flex bg-cover bg-[url('img/bg-section-1.png')] relative  bg-center">
        <div className="flex flex-col w-full h-full justify-center items-center">
          {/* texto */}
          <div className="flex flex-col w-[90vw] md:w-[50vw]">
            <h1 className="md:text-[6rem] text-[3rem] fuente-1 md:mb-16 mb-2 espacio-renglon sombra-letra">
              APASIONADOS POR LA ILUMINACIÓN
            </h1>
            <p className="fuente-1 text-[1rem] md:text-[2rem] sombra-letra">
              DISFRUTÁ DE ENERGÍA SOLAR Y REDUCÍ COSTOS
            </p>
            {/* boton */}
            <button className="btn bg-[#009285] px-2 w-[250px] h-[45px] text-[1rem] max-md:mt-[2vh] md:w-[300px] md:h-[60px] md:text-[1.2rem] fuente-2 rounded-full">
              SOLICITÁ PRESUPUESTO
            </button>
          </div>
          {/* iconos  */}
          <div className="flex items-center justify-between space-x-4 max-md:mt-12 md:absolute md:bottom-8 md:right-10 ">
            <a href="https://wa.link/ybulep" target="_blank">
              <img
                src="Icono-whatsapp.png"
                alt="icono whatsapp"
                className="md:w-[4vw] w-[10vw]"
              />
            </a>
            <a href="mailto:contacto@lumideal.com.ar" target="_blank">
              <img
                src="Icono-mail.png"
                alt="icono whatsapp"
                className="md:w-[4vw] w-[10vw]"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="Icono-instagram.png"
                alt="icono whatsapp"
                className="md:w-[4vw] w-[10vw]"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;

import React from "react";

function Section1() {
  return (
    <div>
      <section className="h-[800px] w-full flex bg-cover bg-[url('img/bg-section-1.png')] relative  bg-center">
        <div className="flex flex-col w-full h-full justify-center items-center">
          {/* texto */}
          <div className="flex flex-col w-[50vw]">
            <h1 className="text-[6rem] fuente-1 mb-16 espacio-renglon sombra-letra">
              APASIONADOS POR LA ILUMINACIÓN
            </h1>
            <p className="fuente-1 text-[2rem] sombra-letra">
              DISFRUTÁ DE ENERGÍA SOLAR Y REDUCÍ COSTOS
            </p>
            {/* boton */}
            <button className="btn bg-[#009285] w-[15vw] h-[50px] text-[1rem] fuente-2 rounded-full">
              SOLICITÁ PRESUPUESTO
            </button>
          </div>
          {/* iconos  */}
          <div className="flex items-center justify-between space-x-4 absolute bottom-8 right-10">
            <a href="https://wa.link/ybulep" target="_blank">
              <img
                src="Icono-whatsapp.png"
                alt="icono whatsapp"
                className="w-[4vw]"
              />
            </a>
            <a href="mailto:contacto@lumideal.com.ar" target="_blank">
              <img
                src="Icono-mail.png"
                alt="icono whatsapp"
                className="w-[4vw]"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="Icono-instagram.png"
                alt="icono whatsapp"
                className="w-[4vw]"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;

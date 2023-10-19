import React from "react";

function Section1() {
  return (
    <div>
      <section className="md:h-[92vh] h-[75vh] w-full flex bg-cover bg-[url('img/bg-section1.png')] relative  bg-center">
        <div className="flex flex-col w-full h-full justify-center  items-center">
          {/* texto */}
          <div className="flex flex-col w-[90vw] md:w-[50vw]">
            <h1 className="text-[4.5rem]  max-xl:text-[2.7rem] fuente-1 max-md:mb-2 pr-[6vw] espacio-renglon ">
              SOLUCIONES SUSTENTABLES
            </h1>
            <p className="fuente-1 text-[1rem] xl:text-[1.8rem] md:pr-56 ">
              DISFRUTÁ DE ENERGÍA SOLAR
            </p>
            <p className="fuente-1 text-[1rem] xl:text-[1.8rem] md:pr-56 ">
              Y REDUCÍ COSTOS
            </p>
            {/* boton */}
            <a href="#contacto">
              <button className="btn bg-[#009285] xl:mt-4 px-2 w-[250px] h-[45px] text-[1rem] max-xl:mt-[2vh] xl:w-[300px] xl:h-[60px] xl:text-[1.2rem] fuente-2 rounded-full">
                SOLICITÁ PRESUPUESTO
              </button>
            </a>
          </div>
          {/* iconos  */}
          <div
            className="flex max-md:flex-col max-md:space-y-2 items-center justify-center  md:space-x-4  z-50 absolute
           md:bottom-8 bottom-[5%] md:left-[85%] left-[84vw]"
          >
            <a href="https://wa.link/n3i4ut" target="_blank">
              <img
                src="Icono-whatsapp.png"
                alt="icono whatsapp"
                className="xl:h-14 h-12"
              />
            </a>
            <a
              href="mailto:contacto@lumideal.com.ar?subject=CONSULTA CREADA DESDE LA WEB"
              target="_blank"
            >
              <img
                src="Icono-email.png"
                alt="icono-email"
                className="xl:h-14 h-12"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="Icono-instagram.png"
                alt="icono-instagram"
                className="xl:h-14 h-12"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;

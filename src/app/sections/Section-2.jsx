import React from "react";

function Section2() {
  return (
    <div>
      <section className="bg-[#009285] w-full h-[800px] flex">
        <div className="flex mx-0 w-full justify-center">
          <div className="flex relative w-full">
            <img
              src="/pic-section-2/fondo.png"
              alt="lumideal imagen luz"
              className="h-[85vh]"
            />
            <img
              src="pic-section-2/logo-section-2.png"
              alt=""
              className="h-[15vh] absolute bottom-[50%] right-[20%]"
            />
          </div>
          <div className="flex flex-col items-start justify-center mr-20">
            <h2 className="text-[3rem] fuente-1">Soluciones y proyectos:</h2>
            <p className="fuente-2 text-[1.5rem] mt-2 ">
              Brindamos soluciones a medida con energias limpias para
              residencias e industrias.
            </p>
            <h2 className="text-[3rem] fuente-1 mt-10">
              Servicio y Experiencia:
            </h2>
            <p className="fuente-2 text-[1.5rem] mt-2 ">
              Prestamos servicios profecionales e integrales con un equipo con
              más de 20 años en el mercado
            </p>
            <h2 className="text-[3rem] fuente-1 mt-10">Cobertura:</h2>
            <p className="fuente-2 text-[1.5rem] mt-2">
              Llegamos a todo el país con nuestras soluciones sustentables:
              sistemas fotovoltaicos, termotanques solares, climatización de
              piletas y bombeo solar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;

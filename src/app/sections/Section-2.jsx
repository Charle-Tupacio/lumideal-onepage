import React from "react";

function Section2() {
  return (
    <div>
      <section
        id="nosotros"
        className="bg-[#009285] bg-[url('img/fondo.png')] bg-no-repeat bg-left w-full max-md:h-[auto] py-16 h-[800px] flex"
      >
        <div className="flex  m-auto w-[60vw] items-center justify-center space-x-20">
          <div className="flex items-center justify-center flex-col flex-1">
            <img src="pic-section-2/img-1.png" alt="" className="mb-10" />
            <h2 className="text-[3rem] max-md:text-[2rem] espacio-renglon text-center fuente-1">
              SOLUCIONES Y PROYECTOS
            </h2>
            <p className="fuente-2 text-[1.5rem] max-md:text-[1rem] ">
              Brindamos soluciones a medida con energias limpias para
              residencias e industrias.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col flex-1">
            <img src="pic-section-2/img-2.png" alt="" className=" mb-32" />
            <h2 className="text-[3rem] max-md:text-[2rem] espacio-renglon text-center fuente-1">
              SERVICIO Y EXPERIENCIA
            </h2>
            <p className="fuente-2 text-[1.5rem] max-md:text-[1rem]  ">
              Prestamos servicios profecionales e integrales con un equipo con
              más de 20 años en el mercado
            </p>
          </div>
          <div className="flex items-center justify-center flex-col flex-1">
            <img src="pic-section-2/img-3.png" alt="" className=" mb-12" />
            <h2 className="text-[3rem] max-md:text-[2rem] text-center fuente-1">
              COBERTURA
            </h2>
            <p className="fuente-2 text-[1.5rem] max-md:text-[1rem]">
              Llegamos a todo el país con nuestras soluciones sustentables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;

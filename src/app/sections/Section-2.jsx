import React from "react";

function Section2() {
  return (
    <div>
      <section
        id="nosotros"
        className="bg-[#009285] bg-[url('img/fondo.png')] bg-no-repeat bg-left w-full md:pt-20 max-md:h-[auto] py-10 h-[80vh] flex"
      >
        <div className="flex max-md:flex-col max-md:space-y-4 md:h-[450px]  m-auto w-[60vw] items-center md:space-x-20">
          <div className="flex items-center h-full justify-start flex-col flex-1">
            <img src="pic-section-2/img-1.png" alt="" className="mb-10 h-16" />
            <h2 className="text-[2rem] max-md:text-[1.5rem] espacio-renglon text-center fuente-1">
              SOLUCIONES
            </h2>
            <h2 className="text-[2rem] max-md:text-[1.5rem] espacio-renglon text-center fuente-1">
              Y PROYECTOS
            </h2>
            <p className="fuente-2 text-[1.3rem] md:ml-6 max-md:text-[1rem] ">
              Brindamos soluciones a medida con energias limpias para
              residencias e industrias.
            </p>
          </div>
          <div className="flex items-center justify-start h-full flex-col flex-1">
            <img src="pic-section-2/img-2.png" alt="" className=" mb-10 h-12" />
            <h2 className="text-[2rem] max-md:text-[1.5rem] espacio-renglon text-center fuente-1">
              SERVICIO
            </h2>
            <h2 className="text-[2rem] max-md:text-[1.5rem] espacio-renglon text-center fuente-1">
              Y EXPERIENCIA
            </h2>
            <p className="fuente-2 text-[1.3rem] md:ml-6 max-md:text-[1rem]  ">
              Prestamos servicios profecionales e integrales con un equipo con
              más de 20 años en el mercado
            </p>
          </div>
          <div className="flex items-center justify-start h-full flex-col flex-1">
            <img
              src="pic-section-2/img-3.png"
              alt=""
              className="  mb-10 h-14"
            />
            <h2 className="text-[2rem] max-md:text-[1.5rem] text-center fuente-1">
              COBERTURA
            </h2>
            <p className="fuente-2 text-[1.3rem] md:ml-6 max-md:text-[1rem]">
              Llegamos a todo el país con nuestras soluciones sustentables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;

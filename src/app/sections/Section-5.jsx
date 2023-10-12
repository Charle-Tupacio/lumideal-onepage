import React from "react";

function Section5() {
  return (
    <section
      id="productos"
      className="bg-[#E6E0DC] bg-repeat bg-[url('img/bg-patron-sec5.png')] bg-[length:100px_100px] bg-fixed h-auto flex justify-center w-full"
    >
      <div className="flex max-md:flex-col justify-center my-10  gap-6 md:columns-3 m-auto">
        {/* carta 1 */}
        <div className="shadow-xl  hover:shadow-2xl bg-black md:w-[26vw] md:h-[80vh] w-[80vw] h-[600px]  rounded-xl flex flex-col items-center">
          <h3 className="bg-[#009285]  pt-2 fuente-1 text-[1rem] w-full rounded-t-xl h-[15%] flex items-center justify-center">
            PANELES SOLARES
          </h3>
          <p className="flex h-[15%] text-[0.8rem] text-[#009285] bg-white w-full text-center px-4 justify-center items-center">
            Conocé más sobre energía solar fotovoltaica, reducí costos en tu
            factura de luz y evitá cortes
          </p>
          <img
            src="/pic-cards/img-card1.png"
            alt="lumideal-paneles-solares"
            className="w-full h-[70%] rounded-b-xl object-cover"
          />
        </div>
        {/* carta 2 */}
        <div className="shadow-xl hover:shadow-2xl bg-black md:w-[26vw] md:h-[80vh] w-[80vw] h-[600px] rounded-xl flex flex-col items-center">
          <h3 className="bg-[#009285] pt-2 fuente-1 text-[1rem] w-full rounded-t-xl h-[15%] flex items-center justify-center">
            TERMOTANQUES
          </h3>
          <p className="flex h-[15%] text-[#009285] text-[0.8rem] bg-white w-full text-center px-4  justify-center items-center max-md:overscroll-contain">
            Conocé mas sobre el aprovechamiento de radiación solar para calentar
            agua para uso doméstico e industrial
          </p>
          <img
            src="/pic-cards/img-card2.png"
            alt=""
            className="w-full h-[70%] rounded-b-xl object-cover"
          />
        </div>
        {/* carta 3 */}
        <div className="shadow-xl hover:shadow-2xl bg-black md:w-[26vw] md:h-[80vh] w-[80vw] h-[600px]  rounded-xl flex flex-col items-center">
          <h3 className="bg-[#009285] pt-2 fuente-1 text-[1rem] w-full rounded-t-xl h-[15%] flex items-center justify-center">
            BOMBAS DE CALOR
          </h3>
          <p className="flex h-[15%] text-[#009285] text-[0.8rem] bg-white w-full text-center px-4 justify-center items-center">
            Conocé mas sobre la climatización de piletas con energía 100%
            renovable
          </p>
          <img
            src="/pic-cards/img-card-3-v3.png"
            alt=""
            className="w-full h-[70%] rounded-b-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;

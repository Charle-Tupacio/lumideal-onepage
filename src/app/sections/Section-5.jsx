import React from "react";

function Section5() {
  return (
    <div>
      <section className="bg-[#E6E0DC] w-full h-[900px] flex justify-center">
        <div className="flex justify-center space-x-4 pt-14">
          <div className="card shadow-xl hover:shadow-2xl  bg-black w-[26vw] h-[800px] rounded-xl flex flex-col items-center">
            <h3 className="bg-[#009285] pt-2 fuente-1 text-[1.2rem] w-full rounded-t-xl h-[100px] flex items-center justify-center">
              PANELES SOLARES
            </h3>
            <p className="flex h-[100px] text-[#009285] bg-white w-full text-center px-4 justify-center items-center">
              Conocé más sobre energía solar fotovoltaica, reducí costos en tu
              factura de luz y evitá cortes
            </p>
            <img
              src="/pic-cards/img-card1.png"
              alt="lumideal-paneles-solares"
              className="w-full h-[700px] rounded-b-xl object-cover"
            />
          </div>
          <div className="card shadow-xl hover:shadow-2xl bg-black w-[26vw] h-[800px] rounded-xl flex flex-col items-center">
            <h3 className="bg-[#009285] pt-2 fuente-1 text-[1.2rem] w-full rounded-t-xl h-[100px] flex items-center justify-center">
              TERMOTANQUES
            </h3>
            <p className="flex h-[100px] text-[#009285] bg-white w-full text-center px-4 justify-center items-center">
              Conocé mas sobre el aprovechamiento de radiación solar para
              calentar agua para uso doméstico e industrial
            </p>
            <img
              src="/pic-cards/img-card2.png"
              alt=""
              className="w-full h-[700px] rounded-b-xl object-cover"
            />
          </div>
          <div className="card shadow-xl hover:shadow-2xl bg-black w-[26vw] h-[800px] rounded-xl flex flex-col items-center">
            <h3 className="bg-[#009285] pt-2 fuente-1 text-[1.2rem] w-full rounded-t-xl h-[100px] flex items-center justify-center">
              BOMBAS
            </h3>
            <p className="flex h-[100px] text-[#009285] bg-white w-full text-center px-4 justify-center items-center">
              Conocé mas sobre la climatización de piletas con energía 100%
              renovable
            </p>
            <img
              src="/pic-cards/img-card-lumideal3.png"
              alt=""
              className="w-full h-[700px] rounded-b-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section5;

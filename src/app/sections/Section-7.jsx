import React from "react";

function Section7() {
  return (
    <div>
      <section className="bg-black max-md: w-full h-auto max-md:mb-10  flex flex-col items-center">
        <div className="w-full  h-[20vh] flex items-center justify-center md:justify-start">
          <h2 className="md:text-[2.4rem] text-[1.3rem] md:ml-[18vw]">
            SEGUINOS EN INSTAGRAM
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-instagram/image-1.png"
                className="w-full h-full"
                alt="lumideal-imagen-equipos"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-instagram/image-2.png"
                className="w-full h-full"
                alt="lumideal-imagen-equipos"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-instagram/image-3.png"
                className="w-full h-full "
                alt="lumideal-panel-solar"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-instagram/image-4.png"
                className="w-full h-full "
                alt="lumideal-sistemas-fotovoltaicos"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-instagram/image-5.png"
                className="w-full h-full"
                alt="lumideal-bombas-de-calor"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-instagram/image-6.png"
                className="w-full h-full "
                alt="lumideal-eslogan"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section7;

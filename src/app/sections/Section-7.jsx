import React from "react";
import Image from "next/image";

function Section7() {
  return (
    <div>
      <section className="bg-black max-md: w-full md:h-[1000px] h-[auto] max-md:mb-10  flex flex-col items-center">
        <div className="w-full  h-[20vh] flex items-center justify-center md:justify-start">
          <h2 className="md:text-[2.4rem] text-[1.3rem] md:ml-[18vw]">
            SEGUINOS EN INSTAGRAM
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 gap-2">
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              {/* <Image
                src="/pic-section-instagram/image-1.png"
                quality={100}
                width={400}
                height={400}
                alt="lumideal imagen"
                className="h-full"
              /> */}
              <img
                src="/pic-section-instagram/image-1.png"
                className="w-full h-full"
                alt="lumideal-imagen-equipos"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              {/* <Image
                src="/pic-section-instagram/image-2.png"
                width={400}
                height={400}
                alt="lumideal imagen"
                layout="responsive"
                className="h-full"
              /> */}
              <img
                src="/pic-section-instagram/image-2.png"
                className="w-full h-full"
                alt="lumideal-imagen-equipos"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              {/* <Image
                src="/pic-section-instagram/image-3.png"
                width="400"
                height="400"
                alt="lumideal imagen"
                layout="responsive"
                className="h-full"
              /> */}
              <img
                src="/pic-section-instagram/image-3.png"
                className="w-full h-full "
                alt="lumideal-panel-solar"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              {/* <Image
                src="/pic-section-instagram/image-4.png"
                width={500}
                height={500}
                quality={100}
                alt="lumideal imagen"
                layout="responsive"
                className="h-full"
              /> */}
              <img
                src="/pic-section-instagram/image-4.png"
                className="w-full h-full "
                alt="lumideal-sistemas-fotovoltaicos"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              {/* <Image
                src="/pic-section-instagram/image-5.png"
                width="400"
                height="400"
                alt="lumideal imagen"
                layout="responsive"
              /> */}
              <img
                src="/pic-section-instagram/image-5.png"
                className="w-full h-full"
                alt="lumideal-bombas-de-calor"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              {/* <Image
                src="/pic-section-instagram/image-6.png"
                width="400"
                height="400"
                alt="lumideal imagen"
                layout="responsive"
              /> */}
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

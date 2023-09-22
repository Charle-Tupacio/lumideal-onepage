import React from "react";
import Image from "next/image";

function Section7() {
  return (
    <div>
      <section className="bg-black w-full h-[1100px] flex flex-col items-center">
        <div className="w-full  h-[200px] flex items-center justify-start">
          <h2 className="text-[2.4rem] ml-[18vw]">SEGUINOS EN INSTAGRAM</h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
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

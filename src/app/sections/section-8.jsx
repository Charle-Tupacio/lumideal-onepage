import React from "react";

function Section8() {
  return (
    <div>
      <section className="w-full h-[20vh] flex items-center justify-center">
        <div className=" flex items-center justify-center gap-40">
          <div className=" flex items-center justify-center ">
            <img
              src="/pic-final-section/logo-negro-lumi.png"
              alt="Logo negro lumideal"
              className="h-28 "
            />
            <hr className="rotate-90 linea-2" />
          </div>
          <div className="flex items-center gap-4 ">
            <a href="https://wa.link/ybulep" target="_blank">
              <img
                src="/pic-section-7/img-wsp-vec.png"
                alt="icono-whatsapp"
                className="h-9"
              />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <img
                src="/pic-section-7/img-ig-vec.png"
                alt="icono-instagram"
                className="h-8"
              />
            </a>
            <a href="mailto:contacto@lumideal.com.ar" target="_blank">
              <img
                src="/pic-section-7/img-mail-vec.png"
                alt="icono-mail"
                className="h-8"
              />
            </a>
          </div>
          <div className=" space-x-12">
            <a
              href="https://wa.link/ybulep"
              target="_blank"
              className=" text-[1.2rem]"
            >
              (11)2391-2588
            </a>
            <a
              href="mailto:contacto@lumideal.com.ar"
              className=" text-[1.2rem]"
              target="_blank"
            >
              contacto@lumideal.com.ar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section8;

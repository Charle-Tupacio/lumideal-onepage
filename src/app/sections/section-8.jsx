import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Section8() {
  return (
    <div>
      <section className="w-full max-md:h-[35vh] h-[20vh] flex items-center justify-center">
        <div className=" flex max-md:flex-col items-center justify-center md:gap-40">
          <div className=" flex items-center max-md:mb-4 justify-center ">
            <img
              src="/pic-final-section/logo-negro-lumi.png"
              alt="Logo negro lumideal"
              className="h-[10vh] "
            />
            <hr className="rotate-90 linea-2 max-md:hidden" />
          </div>
          <div className="flex max-md:mb-4 items-center justify-center gap-4 ">
            <a href="https://wa.link/n3i4ut" target="_blank">
              <BsWhatsapp size={30} />
            </a>
            <a href="https://www.instagram.com/lumideal_sa/" target="_blank">
              <BsInstagram size={30} />
            </a>
            <a
              href="mailto:contacto@lumideal.ar?subject=CONSULTA CREADA DESDE LA WEB"
              target="_blank"
            >
              <HiOutlineMail size={40} />
            </a>
          </div>
          <div className=" max-md:flex max-md:flex-col max-md:items-center  xl:space-x-8">
            <a
              href="https://wa.link/n3i4ut"
              target="_blank"
              className="text-[0.8rem]  xl:text-[1.2rem]"
            >
              (11)2391-2588
            </a>
            <a
              href="mailto:contacto@lumideal.com.ar?subject=CONSULTA CREADA DESDE LA WEB"
              className=" text-[0.8rem] xl:text-[1.2rem]"
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

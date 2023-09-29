import React from "react";
import "../../style.css";
import BurgerMenu from "../Burger/burger";

function NavBar() {
  return (
    <nav className="bg-[#000000] md:columns-3 w-full h-[10vh] max-md:justify-between   p-0 flex items-center border-b-[2.5px]">
      {/* bloque logo */}
      <div className="md:w-3/12 w-28 flex content-center justify-center items-center h-full md:border-r-[2.5px]">
        <a href="/">
          <img
            src="/pic-final-section/logo-negro-lumi.png"
            alt="Logo Lumideal"
            className="h-[80px] max-md:pl-2"
          />
        </a>
      </div>
      {/* bloque links */}
      <div className="w-6/12 max-md:hidden flex space-x-6 content-center justify-center  items-center min-h-full border-r-[2.5px]">
        <div className="">
          <a href="#nosotros">NOSOTROS</a>
        </div>
        <div className=" ">
          <a href="#productos">NUESTROS PRODUCTOS</a>
        </div>
        <div className="">
          <a href="#contacto">CONTACTANOS</a>
        </div>
      </div>
      {/* bloque vacio */}
      <div className="md:w-3/12  h-full">
        <BurgerMenu />
      </div>
    </nav>
  );
}

export default NavBar;

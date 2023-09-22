import React from "react";
import "../../style.css";

function NavBar() {
  return (
    <nav className="bg-[#315D6E] columns-3 w-full h-[100px]  p-0 flex items-center border-b-[2.5px]">
      {/* bloque logo */}
      <div className="w-3/12 flex content-center justify-center items-center h-full border-r-[2.5px]">
        <a href="/">
          <img
            src="lumideal-logo.svg"
            alt="Logo Lumideal"
            className="h-[100px]"
          />
        </a>
      </div>
      {/* bloque links */}
      <div className="w-6/12 flex content-center justify-between  items-center min-h-full border-r-[2.5px]">
        <div className="ml-[10vw]">
          <a href="/">NOSOTROS</a>
        </div>
        <div className=" ">
          <a href="/">NUESTROS PRODUCTOS</a>
        </div>
        <div className="mr-[10vw]">
          <a href="/">CONTACTANOS</a>
        </div>
      </div>
      {/* bloque vacio */}
      <div className="w-3/12 h-full"></div>
    </nav>
  );
}

export default NavBar;

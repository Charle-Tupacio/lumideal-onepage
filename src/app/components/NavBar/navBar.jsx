"use client";

import React from "react";
import "../../style.css";
import BurgerMenu from "../Burger/burger";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
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
        <div
          onClick={handleNav}
          className=" flex items-center h-full md:hidden"
        >
          <HiMenu size={50} className={menuOpen ? " opacity-50" : ""} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#000000c2] p-10 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
        }
      >
        <div
          onClick={handleNav}
          className="flex w-full items-center justify-end"
        >
          <HiX size={25} />
        </div>
        <div className="flex flex-col text-[1.5rem] justify-center space-y-12 h-full">
          <ul>
            <Link href="#nosotros">
              <li>Nosotros</li>
            </Link>
          </ul>
          <ul>
            <Link href="#productos">
              <li>Nuestros Productos</li>
            </Link>
          </ul>
          <ul>
            <Link href="#contacto">
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

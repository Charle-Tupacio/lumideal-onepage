"use client";

import React from "react";
import "../../style.css";
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
            className="h-[10vh] max-md:pl-2"
          />
        </a>
      </div>
      {/* bloque links */}
      <div className="w-6/12 max-md:hidden flex space-x-6 content-center justify-center  items-center min-h-full border-r-[2.5px]">
        <div className="text-[0.8rem] xl:text-[1rem]">
          <a href="#nosotros">NOSOTROS</a>
        </div>
        <div className="text-[0.8rem] xl:text-[1rem]">
          <a href="#productos">NUESTROS PRODUCTOS</a>
        </div>
        <div className="text-[0.8rem] xl:text-[1rem]">
          <a href="#contacto">CONTACTANOS</a>
        </div>
      </div>
      {/* bloque vacio */}
      <div className="md:w-3/12  h-full">
        <div
          onClick={handleNav}
          className=" flex items-center mr-4 h-full cursor-pointer md:hidden"
        >
          <HiMenu size={30} className={menuOpen ? " opacity-50" : ""} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 z-[100] top-0 w-[100%] md:hidden h-screen bg-[#000000f7] p-10 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
        }
      >
        <div
          onClick={handleNav}
          className="flex w-full items-center justify-end"
        >
          <HiX size={25} />
        </div>
        <div className="flex w-full mt-20 items-center justify-center ">
          <Link onClick={() => setMenuOpen(false)} href="/">
            <img
              src="lumideal-logo.png"
              alt="Logo Lumideal"
              className="h-[10vh]"
            />
          </Link>
        </div>
        <ul className=" flex flex-col h-[50%] justify-center">
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer text-xl fuente-2"
            >
              HOME
            </li>
          </Link>
          <Link href="#nosotros">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer text-xl fuente-2 "
            >
              NOSOTROS
            </li>
          </Link>
          <Link href="#productos">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer text-xl fuente-2"
            >
              NUESTROS PRODUCTOS
            </li>
          </Link>
          <Link href="#contacto">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer text-xl fuente-2"
            >
              CONTACTO
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

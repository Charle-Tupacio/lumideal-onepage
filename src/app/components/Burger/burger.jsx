import React from "react";
// import {
//   Button,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "@tailwindcss/react";
import { TiThMenu } from "react-icons/ti";
import { ImMenu } from "react-icons/im";
import { HiMenu } from "react-icons/hi";

function BurgerMenu() {
  return (
    <div className="dropdown h-full flex items-center justify-center pr-4">
      <button
        class="dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {/* <TiThMenu size={40} className=" md:hidden" /> */}
        {/* <ImMenu size={50} className=" md:hidden" /> */}
        <HiMenu size={50} className=" md:hidden" />
      </button>
    </div>
  );
}

export default BurgerMenu;

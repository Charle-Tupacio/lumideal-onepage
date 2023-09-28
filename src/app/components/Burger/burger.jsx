import React from "react";
// import {
//   Button,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
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
        <HiMenu size={50} className=" md:hidden" />
      </button>
    </div>
  );
}

export default BurgerMenu;

import React from "react";
import {IoIosMenu} from "react-icons/io";
const HamburgerMenu = ({slideToggle}) => {
  return (
    <div
      onClick={() => {
        slideToggle(true);
      }}
    >
      <IoIosMenu className="text-4xl cursor-pointer" />
    </div>
  );
};
export default HamburgerMenu;

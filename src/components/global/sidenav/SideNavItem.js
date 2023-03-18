import React from "react";
import {AiFillHome} from "react-icons/ai";
import {RiTaskFill} from "react-icons/ri";
import {IoMdMail} from "react-icons/io";

import {Link} from "gatsby";

const SideNavItem = ({link}) => {
  const chooseIcon = (whichIcon) => {
    let theIcon = "";
    switch (whichIcon) {
      case "Home":
        theIcon = <AiFillHome />;
        break;
      case "Works":
        theIcon = <RiTaskFill />;
        break;
      case "Contact":
        theIcon = <IoMdMail />;
        break;
      default:
    }
    return theIcon;
  };

  return (
    <>
      <Link
        to={link.route}
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black hover:text-white hover:bg-black"
      >
        {chooseIcon(link.title)}
        <span className="text-[15px] ml-4 font-bold">{link.title}</span>
      </Link>
    </>
  );
};

export default SideNavItem;

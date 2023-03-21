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
        className="text-2xl md:text-lg py-5 flex items-center px-4 duration-300 cursor-pointer hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
      >
        {chooseIcon(link.title)}
        <span className="ml-4 font-bold">{link.title}</span>
      </Link>
    </>
  );
};

export default SideNavItem;

import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SideNavISocial = ({link}) => {
  const chooseIcon = (whichIcon) => {
    let theIcon = "";
    switch (whichIcon) {
      case "Facebook":
        theIcon = <AiFillFacebook />;
        break;
      case "LinkedIn":
        theIcon = <AiFillLinkedin />;
        break;
      case "Twitter":
        theIcon = <AiFillTwitterSquare />;
        break;
      default:
    }
    return theIcon;
  };

  return (
    <>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-lg py-5 flex items-center px-4 duration-300 cursor-pointer text-black hover:text-white hover:bg-black"
      >
        {chooseIcon(link.title)}
        <span className="ml-4 font-bold">{link.title}</span>
      </a>
    </>
  );
};

export default SideNavISocial;

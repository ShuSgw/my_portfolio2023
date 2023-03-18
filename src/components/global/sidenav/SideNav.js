import React from "react";
import SideNavItem from "./SideNavItem";

import {AiOutlineCloseSquare} from "react-icons/ai";
import {v4 as uuidv4} from "uuid";

// stop using this component

const SideNav = ({slideToggle}) => {
  const lniks = [
    {
      route: `/`,
      title: `Home`,
    },
    {
      route: `/works`,
      title: `Works`,
    },
    {
      route: `/contact`,
      title: `Contact`,
    },
  ];
  return (
    <div className="bg-white h-full">
      <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center">
        <div className="text-black-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-end">
            <AiOutlineCloseSquare
              className="text-4xl cursor-pointer"
              onClick={() => {
                slideToggle(false);
              }}
            />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        {lniks.map((link) => (
          <SideNavItem key={uuidv4()} link={link} />
        ))}

        {/* <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <BsWordpress className="text-black" />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div> */}
      </div>
    </div>
  );
};

export default SideNav;

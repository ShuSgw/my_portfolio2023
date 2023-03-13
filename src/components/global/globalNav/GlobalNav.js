import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import LangBtn from "../btns/LangBtn/LangBtn";
import DarkModeBtn from "../btns/DarkModeBtn/DarkModeBtn";

const GlobalNav = ({langInfo}) => {
  const lniks = [
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
    <div className="flex items-center justify-between">
      <nav className="block items-center md:w-auto">
        {lniks.map((link) => (
          <Link
            className="text-white no-underline ml-4"
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <LangBtn langInfo={langInfo} />
      <DarkModeBtn />
    </div>
  );
};

export default GlobalNav;

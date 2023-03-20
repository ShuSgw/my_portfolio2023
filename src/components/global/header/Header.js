import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import Logo from "./Logo";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

import GlobalNav from "../globalNav/GlobalNav";

const Header = ({langInfo, slideToggle}) => {
  return (
    <header className="fixed w-full bg-green-500" style={{zIndex: 1}}>
      <div className="flex items-center justify-between max-w-4xl px-4 mx-auto">
        <Logo />
        <div className="flex items-center justify-center gap-5">
          <GlobalNav langInfo={langInfo} />
          <HamburgerMenu slideToggle={slideToggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;

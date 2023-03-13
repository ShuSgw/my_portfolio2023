import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import Logo from "./Logo";

import GlobalNav from "../globalNav/GlobalNav";

const Header = ({langInfo}) => {
  return (
    <header className="bg-green-700">
      <div className="flex items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Logo />
        <GlobalNav langInfo={langInfo} />
      </div>
    </header>
  );
};

export default Header;

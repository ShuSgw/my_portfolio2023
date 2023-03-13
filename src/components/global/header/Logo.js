import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="flex items-center text-white no-underline bg-black">
        <span className="text-xl font-bold tracking-tight">sgw_studio</span>
      </h1>
    </Link>
  );
};

export default Logo;

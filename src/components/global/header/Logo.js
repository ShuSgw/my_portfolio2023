import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="flex items-center no-underline">
        <span className="text-1xl sm:text-3xl font-bold tracking-tight">
          sgw_studio
        </span>
      </h1>
    </Link>
  );
};

export default Logo;

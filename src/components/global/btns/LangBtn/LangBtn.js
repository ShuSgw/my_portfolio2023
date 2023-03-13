import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import {Link as LangLink} from "gatsby-plugin-react-i18next";

const LangBtn = ({langInfo}) => {
  return (
    <nav className="block items-center md:w-auto ml-5">
      {langInfo.languages.map((lng) => (
        <LangLink
          key={lng}
          className="text-white no-underline ml-1 uppercase"
          to={langInfo.originalPath}
          language={lng}
        >
          {lng}
        </LangLink>
      ))}
    </nav>
  );
};

export default LangBtn;

import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import {Link as LangLink} from "gatsby-plugin-react-i18next";

const LangBtn = ({langInfo}) => {
  return (
    <nav className="langBtn flex gap-2 items-center md:w-auto ml-5">
      {langInfo.languages.map((lng) => (
        <LangLink
          key={lng}
          className="text-white no-underline uppercase"
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

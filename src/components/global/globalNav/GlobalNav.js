import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import LangBtn from "../btns/LangBtn/LangBtn";
import DarkModeBtn from "../btns/DarkModeBtn/DarkModeBtn";

const GlobalNav = ({langInfo}) => {
  return (
    <div className="flex items-center justify-between">
      <DarkModeBtn />
      <LangBtn langInfo={langInfo} />
    </div>
  );
};

export default GlobalNav;

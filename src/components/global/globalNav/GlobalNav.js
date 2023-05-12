import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import LangBtn from "../btns/LangBtn/LangBtn";
import DarkModeBtn from "../btns/DarkModeBtn/DarkModeBtn";
import {useLocation} from "@reach/router"; // ★追加
const GlobalNav = ({langInfo}) => {
  const theLocationInfo = useLocation();
  const thePage = theLocationInfo.pathname.replace(/^\/|\/$/g, "");
  const thePageInArray = thePage.split("/");

  function containsWorkAndNumber(array) {
    let hasWork = false;
    let hasNumber = false;

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string" && array[i].includes("work")) {
        hasWork = true;
      }
      if (typeof array[i] === "number") {
        hasNumber = true;
      }
    }

    return !(hasWork && hasNumber);
  }

  return (
    <div className="flex items-center justify-between">
      <DarkModeBtn />
      <LangBtn langInfo={langInfo} />

      {console.log(containsWorkAndNumber(thePageInArray))}
    </div>
  );
};

export default GlobalNav;

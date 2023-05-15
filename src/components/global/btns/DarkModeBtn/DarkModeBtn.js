import React from "react";
import {ThemeToggler} from "gatsby-plugin-dark-mode";
import {MdDarkMode} from "react-icons/md";
import {BsFillSunFill} from "react-icons/bs";
import Toggle from "react-toggle";
const ThemeBtn = () => {
  return (
    <>
      <ThemeToggler>
        {({theme, toggleTheme}) => (
          <Toggle
            icons={{
              checked: <MdDarkMode />,
              unchecked: <BsFillSunFill />,
            }}
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme == "dark"}
          />
        )}
      </ThemeToggler>
    </>
  );
};

export default ThemeBtn;

import React from "react";
import {ThemeToggler} from "gatsby-plugin-dark-mode";
import {MdDarkMode} from "react-icons/md";
import {BsFillSunFill} from "react-icons/bs";
import Toggle from "react-toggle";
const ThemeBtn = () => {
  return (
    <div>
      <ThemeToggler>
        {({theme, toggleTheme}) => (
          <Toggle
            defaultChecked={false}
            icons={{
              checked: <MdDarkMode />,
              unchecked: <BsFillSunFill />,
            }}
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
        )}
      </ThemeToggler>
    </div>
  );
};

export default ThemeBtn;

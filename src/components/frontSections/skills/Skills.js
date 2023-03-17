import React from "react";

import {FaSass, FaHtml5, FaCss3Alt} from "react-icons/fa";
import {IoLogoJavascript, IoPaperPlane} from "react-icons/io5";
import {SiJquery, SiPhp} from "react-icons/si";
import {DiReact} from "react-icons/di";

import {GrGatsbyjs} from "react-icons/gr";

import {FaLaravel} from "react-icons/fa";
import {BsWordpress, BsGit} from "react-icons/bs";

const Skills = () => {
  return (
    <section className="relative rounded-xl overflow-auto">
      <h2 className="font-header text-4xl sm:text-5xl lg:text-4xl">Skills</h2>
      <div className="pt-6 mx-auto bg-white min-w-0 dark:bg-black dark:highlight-white/5">
        <div className="overflow-x-auto flex gap-8 pb-3">
          <div className="flex flex-col items-center justify-center">
            <FaHtml5 className="w-12 text-6xl text-orange-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              HTML
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaCss3Alt className="w-12 text-6xl text-blue-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              CSS
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoLogoJavascript className="text-6xl text-yellow-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              JS-ES6
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaSass className="text-6xl text-pink-300" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              SCSS
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiJquery className="w-12 text-6xl text-blue-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              jQuery
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiPhp className="text-6xl text-blue-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              PHP
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <DiReact className="text-6xl text-blue-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              React.js
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GrGatsbyjs className="w-11 text-6xl text-purple-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              Gatsby
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaLaravel className="w-12 text-6xl text-red-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              Laravel
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BsWordpress className="w-12 text-6xl text-blue-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              WordPress
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BsGit className="w-12 text-6xl text-orange-400" />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              Git
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

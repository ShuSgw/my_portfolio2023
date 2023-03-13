import React from "react";
import {StaticImage} from "gatsby-plugin-image";

import {Animation, Section} from "gatsby-theme-portfolio-minimal";

const Hero = ({txtObj}) => {
  return (
    <Animation>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-10">
        <div class="flex-initial w-4/5 max-w-xs md:w-2/5 md:max-w-none">
          <StaticImage
            src="../../../content/images/face.png"
            width={600}
            alt="Shiva"
            placeholder="blurred"
            quality="40"
          />
        </div>
        <div class="w-full flex-initial mt-5 md:mt-0 md:w-3/5">
          <div className="text-5xl font-extrabold leading-tighter tracking-tighter mb-1 md:text-6xl">
            Hello
          </div>
          <div className="text-5xl font-extrabold leading-tighter tracking-tighter mb-2 md:text-6xl md:mb-5">
            I'm Shuhei,
          </div>
          <div className="max-w-3xl mb-3 text-2xl font-bold">
            a web developer based in Vancouver.
          </div>
          <p>{txtObj}</p>
        </div>
      </div>
    </Animation>
  );
};

export default Hero;

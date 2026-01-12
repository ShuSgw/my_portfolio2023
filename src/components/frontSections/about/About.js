import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = ({ aboutMe }) => {
  return (
    <div className="flex flex-col items-center pt-16 md:pt-20 md:flex-row">
      <div className="w-full md:w-3/5">
        <div className="font-bold font-header text-4xl lg:text-4xl">
          About Me Hello Hello
        </div>
        <p className="pt-6 font-body leading-relaxed text-grey-20">{aboutMe}</p>
      </div>
      <div className="hidden pl-0 pt-10 md:w-2/5 md:pl-12 md:pt-0 md:block">
        <StaticImage
          src="../../../../content/images/charles-deluvio-DgoyKNgPiFQ-unsplash.jpg"
          width={600}
          alt="codingImage"
          placeholder="blurred"
          quality="40"
          className="w-2/4 md:w-full"
        />
      </div>
    </div>
  );
};

export default About;

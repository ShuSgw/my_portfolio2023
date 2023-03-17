import React from "react";
import {StaticImage} from "gatsby-plugin-image";

const About = () => {
  return (
    <div className="flex flex-col items-center pt-16 md:pt-20 md:flex-row">
      <div className="w-full md:w-3/5">
        <div className="font-bold font-header text-4xl lg:text-4xl">
          About Me
        </div>
        <p className="pt-6 font-body leading-relaxed text-grey-20">
          Shuhei is a Vancouver-based Front-end Developer. He received his
          Bachelor's of Fine Arts in 2015 from Kyushu-Sangyo University, Japan
          and certificate of New Media Design and Web Development in 2018 from
          British Columbia Institute of Technology. He is a very hard worker and
          likes grasping the newest technologies. Test chnage. Skills: HTML5,
          CSS/Sass, JavaScript(ES6), React.js/Redux, WordPress, PHP,
          Woocommerce, MySQL, Web API, Ajax, JSON, Bootstrap, Git, Photoshop /
          Illustrator, Responsive Design, SVG Animation, GSAP.
        </p>
      </div>
      <div className="hidden pl-0 pt-10 md:w-2/5 md:pl-12 md:pt-0 md:block">
        <StaticImage
          src="../../../../content/images/charles-deluvio-DgoyKNgPiFQ-unsplash.jpg"
          width={600}
          alt="Shiva"
          placeholder="blurred"
          quality="40"
          className="w-2/4 md:w-full"
        />
      </div>
    </div>
  );
};

export default About;

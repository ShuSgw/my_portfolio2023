import React from "react";
import {StaticImage} from "gatsby-plugin-image";

const About = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:flex-row">
      <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
        <h2 className="font-header text-4xl sm:text-5xl lg:text-4xl">
          About Me
        </h2>
        <p className="pt-6 font-body leading-relaxed text-grey-20">
          Shuhei is a Vancouver-based Front-end Developer. He received his
          Bachelor’s of Fine Arts in 2015 from Kyushu-Sangyo University, Japan
          and certificate of New Media Design and Web Development in 2018 from
          British Columbia Institute of Technology. He is a very hard worker and
          likes grasping the newest technologies. Test chnage. Skills: HTML5,
          CSS/Sass, JavaScript(ES6), React.js/Redux, WordPress, PHP,
          Woocommerce, MySQL, Web API, Ajax, JSON, Bootstrap, Git, Photoshop /
          Illustrator, Responsive Design, SVG Animation, GSAP.
        </p>
      </div>
      <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
        <StaticImage
          src="../../../../content/images/charles-deluvio-DgoyKNgPiFQ-unsplash.jpg"
          width={600}
          alt="Shiva"
          placeholder="blurred"
          quality="40"
        />
      </div>
    </div>
  );
};

export default About;

import React from "react";
const Footer = () => {
  return (
    <footer className="shadow-lg border-t">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="">Designed and developed by sgw</p>
        <p>
          <a
            className="font-bold no-underline"
            href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;

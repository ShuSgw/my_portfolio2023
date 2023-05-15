import "../../../styles/global.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

import React, {useState} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "react-sidebar";

import Sidenav from "../sidenav/SideNav";

const Layout = ({children, langInfo}) => {
  const [navStatus, toggleNav] = useState(false);

  return (
    <Sidebar
      sidebar={<Sidenav slideToggle={toggleNav} />}
      open={navStatus}
      onSetOpen={toggleNav}
      pullRight={true}
      styles={{content: {zIndex: 0}}}
    >
      <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-white">
        <Header langInfo={langInfo} slideToggle={toggleNav} />
        <main
          className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16"
          style={{marginTop: "60px"}}
        >
          {children}
        </main>
        <Footer />
      </div>
    </Sidebar>
  );
};

export default Layout;

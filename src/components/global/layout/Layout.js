import React, {useState, useEffect} from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import Sidebar from "react-sidebar";

const Layout = ({children, langInfo}) => {
  const [navStatus, toggleNav] = useState(false);

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={navStatus}
      onSetOpen={toggleNav}
    >
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header langInfo={langInfo} />
        <div class="fixed" onClick={() => toggleNav(true)}>
          Open sidebar
        </div>
        <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>

        <Footer />
      </div>
    </Sidebar>
  );
};

export default Layout;

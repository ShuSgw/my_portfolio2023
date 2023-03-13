import React, {useState, useEffect} from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({children, langInfo}) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header langInfo={langInfo} />

        <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;

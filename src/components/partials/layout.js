import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
function Layout({ children }) {
  return (
    <div className=" ">
      <Header />
       {children}
        <Footer />
    </div>
  );
}

export default Layout;

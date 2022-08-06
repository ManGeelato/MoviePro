import React from "react";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <PageTitle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

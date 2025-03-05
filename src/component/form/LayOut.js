import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const LayOut = (props) => {
  console.log(props.children);
  return (
    <div>
      <NavBar />
      header
      {props.children}
      <Footer />
      footer
    </div>
  );
};

export default LayOut;

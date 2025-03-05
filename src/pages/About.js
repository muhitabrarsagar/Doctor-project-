import { Box } from "@mui/material";
import React from "react";
import NavBar from "../component/form/Navbar";
import Footer from "../component/form/Footer";
import AboutBanner from "../component/form/AboutBanner";
import BottomAbout from "../component/form/BottomAbout";

const About = () => {
  return (
    <Box>
      <AboutBanner />
      <BottomAbout />
      <Footer />
    </Box>
  );
};

export default About;

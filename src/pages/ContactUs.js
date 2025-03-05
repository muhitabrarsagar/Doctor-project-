import { Box } from "@mui/material";
import React from "react";
import NavBar from "../component/form/Navbar";
import Footer from "../component/form/Footer";
import ContactBanner from "../component/form/ContactBanner";

const ContactUs = () => {
  return (
    <Box>
      <ContactBanner />
      <Footer />
    </Box>
  );
};

export default ContactUs;

import { Box } from "@mui/material";
import React from "react";

import CardsLayout from "../component/form/CardsLayout";
import Title from "../component/form/Title";
import Footer from "../component/form/Footer";
import BookingSlots from "../component/form/BookingSlots";
import AppointmentBannar from "../component/form/AppointmentBannar";

const AllDotctor = () => {
  return (
    <Box padding={{ xs: "0 16px ", sm: "0", md: "0" }}>
      <AppointmentBannar />
      <BookingSlots />
      <Title
        name={"Related Doctors"}
        subname={"Simply browse through our extensive list of trusted doctors."}
      />
      <CardsLayout />
      <Footer />
    </Box>
  );
};

export default AllDotctor;

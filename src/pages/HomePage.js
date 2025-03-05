import React from "react";
import HeroItem from "../component/form/HeroItem";
import CardsLayout from "../component/form/CardsLayout";
import CircleItem from "../component/form/CircleItem";
import Title from "../component/form/Title";
import { Box } from "@mui/material";
import SecHero from "../component/form/SecHero";
import DrawerLogin from "../component/form/DrawerLogin";
import Footer from "../component/form/Footer";

const HomePage = () => {
  return (
    <Box padding={{ xs: "0 16px ", sm: "0", md: "0" }}>
      <HeroItem />
      <Title
        name="Find by Speciality "
        subname={
          <>
            Simply browse through our extensive list of trusted doctors,
            schedule
            <br /> your appointment hassle-free.
          </>
        }
      />
      <CircleItem />
      <CardsLayout />
      <SecHero />
      <Footer />
    </Box>
  );
};

export default HomePage;

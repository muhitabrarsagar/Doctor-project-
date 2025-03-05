import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import { Box } from "@mui/material";
import CardLogin from "../component/form/CardLogin";

const DoctorList = () => {
  return (
    <Box bgcolor={"#F8F9FD"}>
      <NavbarLogIn />
      <DrawerLogin child={<CardLogin Title={" All Doctors"} Top={"28px"} />} />
    </Box>
  );
};

export default DoctorList;

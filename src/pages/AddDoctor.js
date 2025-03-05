import React from "react";
import FormDoctor from "../component/form/FormDoctors";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import { Box } from "@mui/material";

const AddDoctor = () => {
  return (
    <Box bgcolor={"#F8F9FD"}>
      <NavbarLogIn />
      <DrawerLogin child={<FormDoctor />} />
    </Box>
  );
};

export default AddDoctor;

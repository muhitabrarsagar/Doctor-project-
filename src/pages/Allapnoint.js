import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import AllAponment from "../component/form/AllAponment";
import { Box } from "@mui/material";

const Allapnoint = () => {
  return (
    <Box bgcolor={"#F8F9FD"} height={"100vh"}>
      <NavbarLogIn />
      <DrawerLogin child={<AllAponment />} />
    </Box>
  );
};

export default Allapnoint;

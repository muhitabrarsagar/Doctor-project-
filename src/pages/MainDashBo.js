import React from "react";
import MainDash from "../component/form/MainDash";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import { Box } from "@mui/material";

const MainDashBo = () => {
  return (
    <Box bgcolor={"#F8F9FD"} height={"100vh"}>
      <NavbarLogIn />
      <DrawerLogin child={<MainDash />} />
    </Box>
  );
};

export default MainDashBo;

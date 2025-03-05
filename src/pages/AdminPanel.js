import React from "react";
import NavbarLogIn from "../component/form/NavbarLogIn";
import DrawerLogin from "../component/form/DrawerLogin";
import TablePa from "../component/form/TablePa";
import { Box } from "@mui/material";

const AdminPanel = () => {
  return (
    <Box bgcolor={"#F8F9FD"} height={"100vh"}>
      <NavbarLogIn />
      <DrawerLogin child={<TablePa />} />
    </Box>
  );
};

export default AdminPanel;

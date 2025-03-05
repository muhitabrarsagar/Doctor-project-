import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarLogIn from "./NavbarLogIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const drawerWidth = 250;

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon />, route: "/main-dash" },
  { name: "Appointments", icon: <EventNoteIcon />, route: "/admin-apoint" },
  { name: "Add Doctor", icon: <PersonAddIcon />, route: "/add-doctor" },
  { name: "Doctors List", icon: <LocalHospitalIcon />, route: "/doctor-list" },
  { name: "Patients", icon: <EmailOutlinedIcon />, route: "/admin-panel" },
];

function DrawerLogin({ child }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  const handleSelect = (name) => {
    setSelectedCategory(name);
    localStorage.setItem("selectedCategory", name);
  };

  const handleMenuClick = (route, name) => {
    navigate(route);
    handleSelect(name);
    if (isSmallScreen) setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <NavbarLogIn toggleDrawer={toggleDrawer} />

      {isSmallScreen ? (
        <MuiDrawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
        >
          <DrawerContent
            selectedCategory={selectedCategory}
            handleMenuClick={handleMenuClick}
          />
        </MuiDrawer>
      ) : (
        <Box
          sx={{
            width: drawerWidth,
            height: "100vh",
            position: "fixed",
            backgroundColor: "#FFFFFF",
          }}
        >
          <DrawerContent
            selectedCategory={selectedCategory}
            handleMenuClick={handleMenuClick}
          />
        </Box>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <DrawerHeader />
        {child}
      </Box>
    </Box>
  );
}

export default DrawerLogin;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function DrawerContent({ selectedCategory, handleMenuClick }) {
  return (
    <List sx={{ marginTop: "80px" }}>
      {menuItems.map(({ name, icon, route }) => (
        <ListItem
          key={name}
          onClick={() => handleMenuClick(route, name)}
          disablePadding
          sx={{
            display: "block",
            backgroundColor: selectedCategory === name ? "#F2F3FF" : "",
            borderRight: selectedCategory === name ? "4px solid #5F6FFF" : "",
            color: selectedCategory === name ? "black" : "black",
            transition: "0.3s",
          }}
        >
          <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

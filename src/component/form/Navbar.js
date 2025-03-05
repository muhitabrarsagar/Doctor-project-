import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  Drawer,
  MenuItem,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const pages = ["HOME", "All DOCTORS", "ABOUT", "CONTACT", "PAY"];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState("");

  useEffect(() => {
    const savedCategory = localStorage.getItem("activePage");
    if (savedCategory) {
      console.log("Restoring category:", savedCategory);
      setActivePage(savedCategory);
    }
  }, []);

  const handleActive = (page) => {
    setActivePage(page);
    localStorage.setItem("activePage", page);
  };

  const navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate("/sign-up");
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (page) => {
    if (page === "All DOCTORS") {
      navigate("/all-docters");
    } else if (page === "HOME") {
      navigate("/");
    } else if (page === "ABOUT") {
      navigate("/about");
    } else if (page === "CONTACT") {
      navigate("/contact");
    } else if (page === "PAY") {
      navigate("/pay-doctors");
    }
    handleActive(page);
  };

  return (
    <StyledAppBar position="fixed">
      <Container>
        <NavContainer>
          <StyledToolbar>
            <DesktopLogo>
              <img
                style={{
                  height: "36px",
                  width: "170px",
                }}
                src="./images/logo-footer.png"
                alt="Logo"
              />
            </DesktopLogo>

            <MenuButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIconStyled />
            </MenuButton>

            <StyledDrawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <DrawerContent
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <DrawerLogo>
                  <img
                    style={{
                      height: "36px",
                      width: "170px",
                      marginLeft: "30px",
                    }}
                    src="./images/logo-footer.png"
                    alt="Logo"
                  />
                </DrawerLogo>
                {pages.map((page) => (
                  <DrawerMenuItem
                    key={page}
                    onClick={() => handleMenuClick(page)}
                    style={{
                      textDecoration:
                        activePage === page ? "underline" : "none",
                    }}
                  >
                    {page}
                  </DrawerMenuItem>
                ))}
              </DrawerContent>
            </StyledDrawer>

            <DesktopNav>
              {pages.map((page) => (
                <NavButton
                  key={page}
                  onClick={() => handleMenuClick(page)}
                  active={activePage === page ? 1 : 0} // Pass active state
                >
                  {page}
                </NavButton>
              ))}
            </DesktopNav>

            <RightButton onClick={handleClickSignUp}>
              Create account
            </RightButton>
          </StyledToolbar>
        </NavContainer>
      </Container>
    </StyledAppBar>
  );
}

export default NavBar;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const NavContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  textAlign: "center",
  overflow: "hidden",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #ADADAD !important",
  padding: "10px 0px 10px 0px",
}));

const DesktopLogo = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    marginRight: theme.spacing(1),
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const MenuIconStyled = styled(MenuIcon)(({ theme }) => ({
  color: "black",
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  marginTop: "20px",
}));

const DrawerLogo = styled(Box)(({ theme }) => ({}));

const DrawerMenuItem = styled(MenuItem)(({ theme }) => ({
  textAlign: "center",
  color: "black",
}));

const DesktopNav = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  my: 2,
  color: "#1F2937",
  display: "block",
  fontWeight: 500,
  marginLeft: "20px",
  borderBottom: active ? "2px solid #5F6FFF" : "none",
}));

const RightButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5F6FFF",
  color: "#FFFFFF",
  fontWeight: 400,
  fontSize: "16px",
  padding: "10px 36px",
  textTransform: "none",
  borderRadius: "45px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    padding: "10px 25px",
  },
}));

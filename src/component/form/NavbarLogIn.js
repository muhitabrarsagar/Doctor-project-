import * as React from "react";
import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

function NavbarLogIn({ toggleDrawer }) {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate("/");
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ height: "70px" }}>
        <StyledIconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </StyledIconButton>

        <LogoBox>
          <img
            src="./images/logo-footer.png"
            alt="Logo"
            style={{ height: "36px", width: "170px" }}
          />
        </LogoBox>

        <StyledButton variant="contained" onClick={handleClickSignUp}>
          Log Out
        </StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavbarLogIn;
const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "none",
  borderBottom: "1px solid #ADADAD",
});

const StyledIconButton = styled(IconButton)({
  marginRight: "16px",
  display: "block",
  color: "black",
  "@media (min-width: 600px)": {
    display: "none",
  },
});

const LogoBox = styled(Box)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  backgroundColor: "#5F6FFF",
  fontSize: "18px",
  lineHeight: "43px",
  borderRadius: "47px",
  padding: "5px 40px",
  color: "#FFFFFF",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#4E5DD4",
  },
});

import React from "react";
import { Box, Button, styled } from "@mui/material";

const MoreButton = ({ onClick }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      <StyledButton variant="contained" onClick={onClick}>
        more
      </StyledButton>
    </Box>
  );
};

export default MoreButton;

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EAEFFF",
  color: "#4B5563",
  textTransform: "none",
  borderRadius: "47px",
  padding: "10px 60px",
  boxShadow: "none",
  marginTop: "60px",
  fontSize: "20px",
  fontWeight: 400,
}));

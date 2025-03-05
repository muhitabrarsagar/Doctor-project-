import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Title = ({ name, subname }) => {
  return (
    <StyledBox>
      <StyledNameTypography>{name}</StyledNameTypography>
      <StyledSubNameTypography>{subname}</StyledSubNameTypography>
    </StyledBox>
  );
};

export default Title;
const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: "120px",
}));

const StyledNameTypography = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  lineHeight: "50px",
  color: "#1F2937",
  fontWeight: 500,
}));

const StyledSubNameTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "28px",
  color: "#4B5563",
  fontWeight: 400,
}));

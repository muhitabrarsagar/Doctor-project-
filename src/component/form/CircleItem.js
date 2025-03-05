import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CircleItem = () => {
  const images = [
    "/images/Group 4134.png",
    "/images/Group 4128.png",
    "/images/Group 4131.png",
    "/images/Group 4133.png",
    "/images/Group 4128.png",
    "/images/Group 4128.png",
  ];

  const texts = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <StyledContainer>
      {images.map((src, index) => (
        <StyledItem key={index}>
          <StyledCircle>
            <StyledImage src={src} />
          </StyledCircle>
          <StyledText>{texts[index]}</StyledText>
        </StyledItem>
      ))}
    </StyledContainer>
  );
};

export default CircleItem;

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: "80px",
  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
  },
}));

const StyledItem = styled(Box)(({ theme }) => ({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const StyledCircle = styled(Box)(({ theme }) => ({
  height: "125px",
  width: "125px",
  background: "linear-gradient(180deg, #AFC1DC 0%, #E2E5ED 100%)",
  borderRadius: "50%",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "80px",
    height: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  height: "40px",
  objectFit: "cover",
  [theme.breakpoints.up("sm")]: {
    height: "60px",
  },
  [theme.breakpoints.up("md")]: {
    height: "82px",
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginTop: "10px",
  fontSize: "8px",
  color: "#333",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));

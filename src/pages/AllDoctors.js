import React, { useState, useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Footer from "../component/form/Footer";
import CardLogin from "../component/form/CardLogin";

const doctorCategories = [
  "All Doctors",
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const AllDoctors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Doctors");

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      console.log("Restoring category:", savedCategory);
      setSelectedCategory(savedCategory);
    }
  }, []);

  const handleSelect = (category) => {
    console.log("Selected:", category);
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
  };

  return (
    <Container>
      <StyledMainBox>
        <CategoryBox>
          {doctorCategories.map((category, index) => (
            <StyledButton
              key={index}
              selected={selectedCategory === category}
              onClick={() => handleSelect(category)}
            >
              {category}
            </StyledButton>
          ))}
        </CategoryBox>
        <CardLogin
          Title={""}
          Top={"60px"}
          selectedCategory={selectedCategory}
        />
      </StyledMainBox>
      <Footer />
    </Container>
  );
};

export default AllDoctors;

const StyledMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const CategoryBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "17px",
  marginTop: "90px",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
    marginTop: "100px",
  },
}));

const StyledButton = styled(Button)(({ selected }) => ({
  width: "263px",
  textTransform: "none",
  justifyContent: "start",
  fontWeight: 400,
  padding: "10px",
  backgroundColor: selected ? "#E2E5FF" : "#FFFFFF",
  color: "#4B5563",
  border: selected ? "1px solid #E2E5FF" : "1px solid #B4B4B4",
  ":hover": {
    backgroundColor: selected ? "#C7D2FE" : "#F0F0F0",
  },
  ["@media (max-width:600px)"]: {
    width: "100%",
  },
}));

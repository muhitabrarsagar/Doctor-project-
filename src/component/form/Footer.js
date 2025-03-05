import React from "react";
import { Box, Grid, Typography, Link, Container, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = ({ marginTop }) => {
  const navigate = useNavigate();
  const pages = ["Home", "All Docter", "About", "Contact"];
  const handleMenuClick = (page) => {
    if (page === "All Docter") {
      navigate("/all-docters");
    } else if (page === "Home") {
      navigate("/");
    } else if (page === "About") {
      navigate("/about");
    } else if (page === "Contact") {
      navigate("/contact");
    }
  };

  return (
    <StyledContainer>
      <MainBox>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <LogoBox>
              <LogoWrapper>
                <img
                  style={{ height: "36px", width: "180px" }}
                  src="/images/logo-footer.png"
                  alt="Logo"
                />
              </LogoWrapper>
            </LogoBox>
            <DescriptionText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </DescriptionText>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} sm={3} md={3}>
            <SectionTitle>COMPANY</SectionTitle>
            <LinkWrapper>
              {pages.map((page) => (
                <StyledLink key={page} onClick={() => handleMenuClick(page)}>
                  {page}
                </StyledLink>
              ))}
            </LinkWrapper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={6} sm={6} md={3}>
            <SectionTitle>GET IN TOUCH</SectionTitle>
            <ContactInfo>+1-212-456-7890</ContactInfo>
            <ContactInfo>greatstackdev@gmail.com</ContactInfo>
          </Grid>
        </Grid>

        <FooterBottom>
          <FooterText>
            Copyright © 2024 GreatStack - All Right Reserved.
          </FooterText>
        </FooterBottom>
      </MainBox>
    </StyledContainer>
  );
};

export default Footer;

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#f9f9f9",
}));

const MainBox = styled(Box)(() => ({
  padding: "40px 20px",
  borderTop: "1px solid #e0e0e0",
  marginTop: "100px",
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: "#4B5563",
  lineHeight: "30px",
  width: "90%",
  fontSize: "16px",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#1a1a1a",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  variant: "h6",
}));

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#4B5563",
  fontSize: "15px",
  textDecoration: "none",
  cursor: "pointer",
  lineHeight: "30px",
  "&:hover": {
    color: "#3f51b5",
  },
}));

const ContactInfo = styled(Typography)(({ theme }) => ({
  color: "#4B5563",
  fontSize: "16px",
  marginBottom: theme.spacing(1),
  lineHeight: "30px",
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #e0e0e0",
  marginTop: theme.spacing(7.5),
  paddingTop: theme.spacing(2.5),
  textAlign: "center",
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: "#888",
  variant: "caption",
}));

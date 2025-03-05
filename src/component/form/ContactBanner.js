import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

function ContactBanner() {
  return (
    <TitleBox>
      <MainTitle>
        Contact <span style={{ color: "#000000", fontWeight: 600 }}>Us</span>
      </MainTitle>
      <Container>
        <MainBox>
          <ImageBox>
            <img src="./images/contact_image.png" alt="Doctors" />
          </ImageBox>
          <ContentBox>
            <Subtitle>Our Office</Subtitle>
            <Paragraph>
              54709 Willms Station
              <br /> Suite 350, Washington, USA
              <br />
              Tel: (415) 555‑0132
              <br />
              Email: greatstackdev@gmail.com
            </Paragraph>
            <Subtitle>Careers at Prescripto</Subtitle>
            <Paragraph>Learn more about our teams and job openings.</Paragraph>

            <ButtonBox>Explore Jobs</ButtonBox>
          </ContentBox>
        </MainBox>
      </Container>
    </TitleBox>
  );
}

export default ContactBanner;
const MainTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "28px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "1px",
}));
const TitleBox = styled(Box)(({ theme }) => ({
  marginTop: "80px",
  marginBottom: "40px",
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "40px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "flex-end",
  img: {
    width: "70%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: theme.spacing(4),
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "0 20px",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    padding: "0",
    textAlign: "center",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "600",
  color: "#4B5563",
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#4A5568",
  lineHeight: 1.8,
  marginBottom: theme.spacing(2),
}));

const ButtonBox = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  border: "1px solid #1F2937",
  padding: "20px 30px",
  textTransform: "none",
  color: "#1F2937",
  fontSize: "16px",
  fontWeight: 400,
}));

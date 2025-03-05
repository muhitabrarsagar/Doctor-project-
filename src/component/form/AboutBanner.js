import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

function AboutBanner() {
  return (
    <TitleBox>
      <Typography
        sx={{ textAlign: "center", fontSize: "30px", fontWeight: 500 }}
      >
        About <span style={{ color: "black", fontWeight: 600 }}>Us</span>{" "}
      </Typography>
      <Container>
        <MainBox>
          <ImageBox>
            <img src="./images/about_image.png" alt="Doctors" />
          </ImageBox>
          <ContentBox>
            <Paragraph>
              Welcome To Prescripto, Your Trusted Partner In Managing Your
              Healthcare Needs Conveniently And Efficiently. At Prescripto, We
              Understand The Challenges Individuals Face When It Comes To
              Scheduling Doctor Appointments And Managing Their Health Records.
            </Paragraph>
            <Paragraph>
              Prescripto Is Committed To Excellence In Healthcare Technology. We
              Continuously Strive To Enhance Our Platform, Integrating The
              Latest Advancements To Improve User Experience And Deliver
              Superior Service. Whether You're Booking Your First Appointment Or
              Managing Ongoing Care, Prescripto Is Here To Support You Every
              Step Of The Way.
            </Paragraph>
            <Subtitle>Our Vision</Subtitle>
            <Paragraph>
              Our Vision At Prescripto Is To Create A Seamless Healthcare
              Experience For Every User. We Aim To Bridge The Gap Between
              Patients And Healthcare Providers, Making It Easier For You To
              Access The Care You Need, When You Need It.
            </Paragraph>
          </ContentBox>
        </MainBox>
      </Container>
    </TitleBox>
  );
}

export default AboutBanner;
const TitleBox = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  marginBottom: "50px",
  position: "relative",
  zIndex: 1,
}));
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(4),
  marginTop: "60px",
  borderRadius: "8px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  textAlign: "left",
  color: "#1F2937",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#4A5568",
  lineHeight: 1.4,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: 1.2,
  },
}));

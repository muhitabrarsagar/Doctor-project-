import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import VerifiedIcon from "@mui/icons-material/Verified";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function AboutBannar() {
  return (
    <TitleBox>
      <Container>
        <MainBox>
          <ImageBox>
            <img src="./images/about_image.png" alt="Doctors" />
          </ImageBox>
          <ContentBox>
            <Box padding={"20px 30px"}>
              <Subtitle>
                Dr. Richard James
                <VerifiedIcon sx={{ marginLeft: "8px", color: "blue" }} />
              </Subtitle>
              <Paragraph>
                MBBS - General Physician
                <span
                  style={{
                    padding: "5px 10px",
                    border: "1px solid black",
                    borderRadius: "30px",
                    marginLeft: "8px",
                  }}
                >
                  2 Years
                </span>
              </Paragraph>
              <Paragraph>
                <span style={{ fontWeight: 700, color: "black" }}>About</span>
                <InfoOutlinedIcon
                  style={{
                    fontSize: "medium",
                    marginLeft: "5px",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </Paragraph>
              <Paragraph>
                Our Vision At Prescripto Is To Create A Seamless Healthcare
                Experience For Every User. We Aim To Bridge The Gap Between
                Patients And Healthcare Providers, Making It Easier For You To
                Access The Care You Need, When You Need It.
              </Paragraph>
              <Paragraph>
                Appointment fee:
                <span style={{ fontWeight: 600, color: "black" }}>$50</span>
              </Paragraph>
            </Box>
          </ContentBox>
        </MainBox>
      </Container>
    </TitleBox>
  );
}

export default AboutBannar;
const TitleBox = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  marginBottom: "50px",
  position: "relative",
  zIndex: 1,
}));
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  marginTop: "60px",
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
  height: "300px",
  justifyContent: "flex-start",
  textAlign: "left",
  color: "#1F2937",
  border: "1px solid black",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "700",
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

import { Grid, styled, Box, Container, Typography } from "@mui/material";
import React from "react";

const BottomAbout = () => {
  return (
    <MainBox>
      <Grid container>
        <Grd item xs={12} sm={12} md={4} lg={4}>
          <BoxWapper>
            <BigText>Efficiency:</BigText>
            <SmallText>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </SmallText>
          </BoxWapper>
        </Grd>
        <Grd item xs={12} sm={12} md={4} lg={4}>
          <BoxWapper>
            {" "}
            <BigText>Convenience</BigText>
            <SmallText>
              Access to a network of trusted healthcare professionals in your
              area.
            </SmallText>
          </BoxWapper>
        </Grd>
        <Grd item xs={12} sm={12} md={4} lg={4}>
          <BoxWapper>
            {" "}
            <BigText>Personalization</BigText>
            <SmallText>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </SmallText>
          </BoxWapper>
        </Grd>
      </Grid>
    </MainBox>
  );
};

export default BottomAbout;
const MainBox = styled(Container)(({ theme }) => ({
  marginTop: "100px",
}));
const BoxWapper = styled(Container)(({ theme }) => ({
  padding: "20px 20px",
}));
const Grd = styled(Grid)(({ theme }) => ({
  border: "1px solid #ABABAB",
}));

const BigText = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  color: "#1F2937",
}));
const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 400,
  color: "#4B5563",
  marginTop: "10px",
}));

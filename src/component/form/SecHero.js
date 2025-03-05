import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  styled,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SecHero = () => {
  const navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <Container>
      <Box mt={"100px"}>
        <Grid
          container
          bgcolor={"#5F6FFF"}
          borderRadius={2}
          alignItems={"center"}
        >
          <Grid item xs={12} md={7}>
            <Box p={6}>
              <Typography variant="h4" color="white">
                Book Appointment With 100+
                <br /> Trusted Doctors
              </Typography>
              <Btn onClick={handleClickSignUp}>Create account</Btn>
            </Box>
          </Grid>
          <Grid ite xs={12} md={5}>
            <img
              style={{ width: "auto", height: "300px", display: "block" }}
              src="./images/appointment-doc-img.png"
              alt="Doctor Header"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SecHero;
const Btn = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: "#FFFFFF",
  borderRadius: "30px",
  color: "black",
}));

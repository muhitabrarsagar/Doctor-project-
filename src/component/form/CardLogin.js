import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import DoctorCard from "./DoctorCord";
import { useNavigate } from "react-router-dom";

const CardLogin = ({ Title, Top }) => {
  const navigate = useNavigate();

  const doctorCards = [
    {
      image: "./images/image_388.png",
      name: "Dr. Max James",
      title: "General Physician",
      isAvailable: true,
      route: "/Doctor-Apoint",
    },
    {
      image: "./images/file (2) 1.png",
      name: "Dr. Toni Connor",
      title: "Dermatologist",
      isAvailable: true,
      route: "/doctor/toni-connor",
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Emily Stone",
      title: "Pediatrician",
      isAvailable: false,
      route: "/doctor/emily-stone",
    },
    {
      image: "./images/file (2) 1.png",
      name: "Dr. John Doe",
      title: "Surgeon",
      isAvailable: true,
      route: "/doctor/john-doe",
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Michael Lee",
      title: "Cardiologist",
      isAvailable: true,
      route: "/doctor/michael-lee",
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Anna Smith",
      title: "Neurologist",
      isAvailable: false,
      route: "/doctor/anna-smith",
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Richard ",
      title: "General Physician",
      isAvailable: true,
      route: "/doctor/richard-james",
    },
    {
      image: "./images/file (2) 1.png",
      name: "Dr. Sarah ",
      title: "Dermatologist",
      isAvailable: true,
      route: "/doctor/sarah-connor",
    },
    {
      image: "./images/image_388.png",
      name: "Dr. Emily Stone",
      title: "Pediatrician",
      isAvailable: false,
      route: "/doctor/emily-stone",
    },
  ];

  return (
    <Container>
      <Typography
        sx={{
          margin: "28px 0 0 0",
          fontSize: "22px",
          fontWeight: 500,
          color: "#323232",
        }}
      >
        {Title}
      </Typography>
      <Grid container spacing={2}>
        {doctorCards.map((doctor, index) => (
          <Grid key={index} item xs={6} sm={6} md={3} lg={3}>
            <Box mt={Top}>
              <DoctorCard
                image={doctor.image}
                name={doctor.name}
                title={doctor.title}
                isAvailable={doctor.isAvailable}
                onClick={() => navigate(doctor.route)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardLogin;

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Container,
  Box,
} from "@mui/material";

const appointments = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General physician",
    address: "57th Cross, Richmond Circle, Church Road, London",
    date: "25, July, 2024",
    time: "8:30 PM",
    image: "./images/image_388.png",
  },
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General physician",
    address: "57th Cross, Richmond Circle, Church Road, London",
    date: "25, July, 2024",
    time: "8:30 PM",
    image: "./images/image_388.png",
  },
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General physician",
    address: "57th Cross, Richmond Circle, Church Road, London",
    date: "25, July, 2024",
    time: "8:30 PM",
    image: "./images/image_388.png",
  },
];

function PayDoctors() {
  return (
    <Container>
      <Typography
        fontSize={"24px"}
        mt={"120px"}
        color="#4B5563"
        fontWeight={500}
      >
        My appointments
      </Typography>
      <Grid container mt={"20px"}>
        {appointments.map((appointment) => (
          <Grid item xs={12} key={appointment.id}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
                borderTop: "1px solid #D1D1D1",
                borderBottom: "1px solid #D1D1D1",
                padding: "10px 0",
              }}
            >
              <Box sx={{ backgroundColor: "#EAEFFF" }} p={"10px 0"}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "auto",
                    height: "180px",
                    display: "block",
                    margin: "auto",
                  }}
                  image={appointment.image}
                  alt={appointment.name}
                />
              </Box>

              <CardContent sx={{ flex: 1, ml: 2 }}>
                <Typography variant="h6">{appointment.name}</Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gap="8px"
                >
                  {appointment.specialty}
                </Typography>
                <Typography
                  width={"120px"}
                  variant="body2"
                  color="text.secondary"
                >
                  <strong>Address:</strong> {appointment.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Date & Time:</strong> {appointment.date} |
                  {appointment.time}
                </Typography>
              </CardContent>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Pay here
                </Button>
                <Button
                  variant="outlined"
                  color="#4B5563"
                  sx={{ textTransform: "none", border: "1px solid #BABABA" }}
                >
                  Cancel appointment
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PayDoctors;

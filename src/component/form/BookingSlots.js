import React, { Component, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography, Box, Container } from "@mui/material";

const BookingSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = [
    { day: "MON", date: 10 },
    { day: "TUE", date: 11 },
    { day: "WED", date: 12 },
    { day: "THU", date: 13 },
    { day: "FRI", date: 14 },
    { day: "SAT", date: 15 },
    { day: "SUN", date: 16 },
  ];

  const times = [
    "8.00 am",
    "8.30 am",
    "9.00 am",
    "9.30 am",
    "10.00 am",
    "10.30 am",
    "11.00 am",
    "11.30 am",
  ];

  return (
    <Container>
      <Box>
        <Typography
          gutterBottom
          fontSize={"25px"}
          fontWeight={500}
          color="#565656"
          marginBottom={"23px"}
        >
          Booking Slots
        </Typography>
        <Box mb={3}>
          {dates.map(({ day, date }) => (
            <DateButton
              key={date}
              active={selectedDate === date}
              onClick={() => setSelectedDate(date)}
            >
              <Typography fontSize={"20px"} fontWeight={500}>
                {day}
              </Typography>
              <Typography fontSize={"24px"} fontWeight={500}>
                {date}
              </Typography>
            </DateButton>
          ))}
        </Box>

        <Box display="flex" flexWrap="wrap">
          {times.map((time) => (
            <TimeButton
              key={time}
              active={selectedTime === time}
              onClick={() => setSelectedTime(time)}
            >
              <Typography fontSize={"16px"} fontWeight={400}>
                {time}
              </Typography>
            </TimeButton>
          ))}
        </Box>

        <BookButton variant="contained">Book an appointment</BookButton>
      </Box>
    </Container>
  );
};

export default BookingSlots;
const DateButton = styled(Button)(({ theme, active }) => ({
  borderRadius: "43px",
  fontSize: "20px",
  width: 87,
  height: 127,
  margin: "0 8px",
  flexDirection: "column",
  backgroundColor: active ? "#5F6FFF" : "#fff",
  color: active ? "#fff" : "#4B5563",
  border: "1px solid #ccc",
  boxShadow: active ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
  "&:hover": {
    backgroundColor: active ? "#5A67D8" : "#f0f0f0",
  },
}));

const TimeButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 20,
  padding: "8px 16px",
  margin: "4px",
  backgroundColor: active ? "#5F6FFF" : "#fff",
  color: active ? "#fff" : "#333",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: active ? "#5F6FFF" : "#f0f0f0",
  },
}));

const BookButton = styled(Button)({
  backgroundColor: "#5F6FFF",
  color: "#fff",
  textTransform: "none",
  borderRadius: 30,
  padding: "15px 38px",
  fontSize: "20px",
  fontWeight: 400,
  marginTop: 48,
  lineHeight: "25px",
  "&:hover": {
    backgroundColor: "#4C51BF",
  },
});

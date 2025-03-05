import { Box, styled, Typography } from "@mui/material";
import React from "react";

const DashGridItem = ({ number, name, Icons }) => {
  return (
    <Box
      boxShadow={"5px 5px 20px rgba(0, 0, 0, 0.1)"}
      marginBottom={"40px"}
      bgcolor={"white"}
    >
      <Box display={"flex"} p={"30px 0 30px 20px"} alignItems={"center"}>
        <Box
          sx={{
            height: "80px",
            width: "80px",
            backgroundColor: "#F2F3FF",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Icons}
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          <Title>{number}</Title>
          <SubTitle>{name}</SubTitle>
        </Box>
      </Box>
    </Box>
  );
};

export default DashGridItem;
const Title = styled(Typography)({
  fontSize: "22px",
  color: "#323232",
  fontWeight: 700,
});
const SubTitle = styled(Typography)({
  fontSize: "16px",
  color: "#8893B0",
  fontWeight: 400,
});

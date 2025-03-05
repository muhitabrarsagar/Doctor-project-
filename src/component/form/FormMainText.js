import React from "react";
import { Box, Typography } from "@mui/material";

const FormMainText = ({ title, subTitle }) => {
  return (
    <Box sx={{ textAlign: "start", marginBottom: "20px" }}>
      <Typography fontSize={"24px"} lineHeight={"36px"} fontWeight={500}>
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#6A6666",
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default FormMainText;

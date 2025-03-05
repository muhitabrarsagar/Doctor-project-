import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Box, Typography } from "@mui/material";

function FormDoctor() {
  return (
    <Box>
      <Typography
        sx={{
          margin: "28px 0",
          fontSize: "22px",
          fontWeight: 500,
          color: "#323232",
        }}
      >
        Add Doctors
      </Typography>
      <Box
        border={"1px solid #D8D8D8"}
        bgcolor={"#FFFFFF"}
        sx={{ width: { xs: "100%", md: "80%" } }}
      >
        <Box sx={{ padding: { xs: "10px 16px", md: "60px 120px 60px 30px" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <StyledAvatar src="/doctor-avatar.jpg" alt="Doctor Avatar" />
            <div
              style={{ fontSize: "20px", color: "#7B7B7B", fontWeight: 500 }}
            >
              Upload doctor
              <br /> picture
            </div>
          </Box>
          <FormContainer container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Doctor name"
                variant="outlined"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Speciality"
                variant="outlined"
                select
                InputProps={{ style: { height: 46 } }}
              >
                <MenuItem value="General physician">General physician</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Doctor Email"
                variant="outlined"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Education"
                variant="outlined"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Doctor Password"
                variant="outlined"
                type="password"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Address 1"
                variant="outlined"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Experience"
                variant="outlined"
                select
                InputProps={{ style: { height: 46 } }}
              >
                <MenuItem value="1 year">1 year</MenuItem>
                <MenuItem value="2 years">2 years</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Address 2"
                variant="outlined"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Fees"
                variant="outlined"
                InputProps={{ style: { height: 46 } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="About me"
                variant="outlined"
              />
            </Grid>

            <StyledButton variant="contained" color="primary">
              Add Doctor
            </StyledButton>
          </FormContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default FormDoctor;

const FormContainer = styled(Grid)({
  padding: "20px 0",
});

const StyledAvatar = styled(Avatar)({
  width: 90,
  height: 90,
});

const StyledButton = styled(Button)({
  padding: "12px 50px",
  margin: "20px 0 0 16px",
  borderRadius: "47px",
  backgroundColor: "#5F6FFF",
  textTransform: "none",
  fontSize: "16px",
});

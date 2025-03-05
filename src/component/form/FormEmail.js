import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormEmail = ({
  Title,
  plasename,
  value,
  error,
  onChange,
  marignTop,
  type,
}) => {
  return (
    <StyledBox marginTop={marignTop}>
      <StyledTypography>{Title}</StyledTypography>
      <StyledTextField
        fullWidth
        variant="outlined"
        placeholder={plasename}
        type={type}
        value={value}
        onChange={onChange}
        error={Boolean(error)}
        helperText={error}
      />
    </StyledBox>
  );
};

export default FormEmail;
const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "start",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",
  marginBottom: "6px",
}));

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: error ? "red" : "#C3C4C3",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "red" : "#C3C4C3",
    },
  },
}));

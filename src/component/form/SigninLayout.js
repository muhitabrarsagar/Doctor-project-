import { Box, Button, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { Container, styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FormEmail from "./FormEmail";
import FormMainText from "./FormMainText";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        [`${action.field}Error`]: "",
      };
    case "SET_ERROR":
      return { ...state, [`${action.field}Error`]: action.value };
    default:
      return state;
  }
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const SigninLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const handleSubmit = () => {
    let valid = true;

    const storedUserData = localStorage.getItem(state.email);
    const storedUser = storedUserData ? JSON.parse(storedUserData) : null;

    if (!state.email.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        value: "Enter your email",
      });
      valid = false;
    } else if (!validateEmail(state.email)) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        value: "Invalid email format",
      });
      valid = false;
    } else if (!storedUser) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        value: "Email not registered",
      });
      valid = false;
    }

    if (!state.password.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "password",
        value: "Enter your password",
      });
      valid = false;
    }

    if (valid) {
      if (!storedUser || state.password !== storedUser.password) {
        dispatch({
          type: "SET_ERROR",
          field: "password",
          value: "Incorrect Email or password",
        });
      } else {
        localStorage.setItem("lastEmail", state.email); // লগইন সফল হলে lastEmail সেভ করবো
        navigate("/main-dash");
      }
    }
  };

  return (
    <Container>
      <MainBoxWrapper>
        <BoxWrapper>
          <Box sx={{ padding: "32px 24px" }}>
            <FormMainText
              title={"Sign In"}
              subTitle={"Login to access your account"}
            />
            <FormEmail
              Title={"Email"}
              placeholder={"Enter your email"}
              marginTop="40px"
              value={state.email}
              error={state.emailError}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
              type="email"
            />
            <FormEmail
              Title="Password"
              placeholder="Enter password"
              marginTop="10px"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "password",
                  value: e.target.value,
                })
              }
              error={state.passwordError}
              type="password"
            />
            <Button
              fullWidth
              sx={{ background: "#5F6FFF", marginTop: "10px", color: "white" }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Typography
              sx={{ textAlign: "start", marginTop: "10px", color: "#4B5563" }}
            >
              Don't have an account?
              <span
                onClick={handleSignUp}
                style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
              >
                {" "}
                Sign Up
              </span>
            </Typography>
          </Box>
        </BoxWrapper>
      </MainBoxWrapper>
    </Container>
  );
};

export default SigninLayout;

const MainBoxWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  backgroundColor: "#FFFFFF",
  height: "100vh",
}));

const BoxWrapper = styled(Box)(({ theme, textAlign }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "498px",
  height: "auto",
  border: "1px solid #D4D4D4",
  borderRadius: "24px",
  textAlign: textAlign || "center",
  [theme.breakpoints.up("sm")]: {
    width: "498px",
  },
}));

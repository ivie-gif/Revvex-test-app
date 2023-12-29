import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Link as RouterLink } from "react-router-dom";

import { Box, Typography, Link } from "@mui/material";

import validation from "../../validation/login";
import AuthLayout from "../../authLayout";
import Button from "../Button";
import Inputs from "../Inputs";
import Password from "../../assets/Password.svg";
import GreyEmail from "../../assets/greyEmail.svg";
import { useUpdateUserMutation } from "../../services/loginSlice";

function Login() {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();

  const handleUpdateAccount = async (data: any) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await updateUser(payload).unwrap();
      localStorage.setItem("token", res.data.token);
      navigate("/portfolio");
    } catch (error: any) {
      setLoginError(error.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleUpdateAccount,
    validationSchema: validation,
  });

  const { values, handleChange, handleSubmit, errors, isSubmitting } = formik;

  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: (theme: any) => theme.palette.background.primary,
          p: 5,
          width: "70%",
          margin: "auto",
          boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1)",
          mt: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: (theme: any) => theme.palette.info.dark,
            fontFamily: "Mulish",
            alignItems: "right",
            mb: 4,
          }}
        >
          Log in to Your Account
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "Mulish",
            mt: -2,
            mb: 2,
            color: (theme: any) => theme.palette.info.darkGrey,
          }}
        >
          Proceed to create account and set up your organization
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography>{loginError}</Typography>
        </Box>

        <Inputs
          placeholder="Email"
          type={"email"}
          name="email"
          value={values.email}
          onChange={handleChange}
          variant={"outlined"}
          iconSrc={GreyEmail}
          sx={{ width: "100%", mb: 2 }}
        />

        <Inputs
          placeholder="Password"
          type={"password"}
          name="password"
          value={values.password}
          onChange={handleChange}
          variant={"outlined"}
          iconSrc={Password}
          sx={{ width: "100%", mb: 2 }}
        />
        <Button
          label={isSubmitting ? "Loading" : "Login"}
          variant="outlined"
          sx={{ mt: 3 }}
          handleClick={handleSubmit}
        />
        <Typography
          mt={5}
          sx={{ color: (theme: any) => theme.palette.info.light }}
        >
          By clicking the button above, you agree to our{" "}
          <Typography color="info.main" component="span">
            Terms of Service
          </Typography>{" "}
          and{" "}
          <Typography color="info.main" component="span">
            Privacy Policy
          </Typography>
          .
        </Typography>
        <Typography
          mt={8}
          sx={{ color: (theme: any) => theme.palette.info.light }}
        >
          Already have an account?{" "}
          <Link component={RouterLink} to="/register" underline="hover">
            <Typography color="info.main" ml={1} component="span">
              Register
            </Typography>
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
}

export default Login;

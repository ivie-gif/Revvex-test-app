import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Link as RouterLink } from "react-router-dom";

import { Box, Divider, Stack, Typography, Link } from "@mui/material";

import AuthLayout from "../../authLayout";
import Button from "../Button";
import Inputs from "../Inputs";
import Email from "../../assets/email.svg";
import Google from "../../assets/gg_google.svg";
import User from "../../assets/user.svg";
import Password from "../../assets/Password.svg";
import GreyEmail from "../../assets/greyEmail.svg";
import GetHelp from "../../assets/getHelp.svg";
import { useCreateUserMutation } from "../../services/registrationSlice";
import validation from "../../validation/register";

function Register() {
  const navigate = useNavigate();
  const [showFormField, setShowFormField] = useState(false);
  const [createUser] = useCreateUserMutation();
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const handleCreateAccount = async (data: any) => {
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    };

    const res = await createUser(payload).unwrap();
    if (res) {
      localStorage.setItem("token", res.data.token);
      navigate("/confirmEmail");
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: handleCreateAccount,
    validationSchema: validation,
  });

  const handleRegister = () => {
    setShowFormField(true);
  };

  const handleInputChange = (e: any) => {
    formik.handleChange(e);
    setButtonDisabled(!formik.dirty || !formik.isValid);
  };

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
          Register Your Account
        </Typography>
        {!showFormField ? (
          <>
            <Button
              label="Sign up with email"
              variant="outlined"
              handleClick={handleRegister}
              iconPosition="before"
              iconSrc={Email}
            />
            <Divider sx={{ my: 2 }}>
              <Typography>or</Typography>
            </Divider>
            <Button
              label="Sign up with Google"
              variant="outlined"
              iconPosition="before"
              iconSrc={Google}
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
              <Link component={RouterLink} to="/login" underline="hover">
                <Typography color="info.main" ml={1} component="span">
                  Login
                </Typography>
              </Link>
            </Typography>
          </>
        ) : (
          <>
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

            <Stack direction="row" alignItems="center" gap={2} mb={2}>
              <Inputs
                placeholder="First Name"
                error={errors.firstName}
                helperText={errors.firstName}
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
                type={"text"}
                variant={"outlined"}
                iconSrc={User}
                sx={{ width: "50%" }}
              />
              <Inputs
                placeholder="Last Name"
                error={errors.lastName}
                helperText={errors.lastName}
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                type={"text"}
                variant={"outlined"}
                iconSrc={User}
                sx={{ width: "50%" }}
              />
            </Stack>

            <Inputs
              placeholder="Work email"
              error={errors.email}
              helperText={errors.email}
              name="email"
              value={values.email}
              onChange={handleInputChange}
              type={"email"}
              variant={"outlined"}
              iconSrc={GreyEmail}
              sx={{ width: "100%", mb: 2 }}
            />

            <Inputs
              placeholder="Password"
              error={errors.password}
              helperText={errors.password}
              name="password"
              value={values.password}
              onChange={handleInputChange}
              type={"password"}
              variant={"outlined"}
              iconSrc={Password}
              sx={{ width: "100%", mb: 2 }}
            />

            <Box>
              <Button
              label={isSubmitting ? "Loading" : "Create Account"}
                variant="outlined"
                disabled={isButtonDisabled}
                handleClick={handleSubmit}
                sx={{ mt: 3, backgroundColor: isButtonDisabled ? "#ECEDED" : undefined, }}
              />
            </Box>
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
              mt={6}
              sx={{ color: (theme: any) => theme.palette.info.light }}
            >
              Already have an account?{" "}
              <Link component={RouterLink} to="/login" underline="hover">
                <Typography color="info.main" ml={1} component="span">
                  Login
                </Typography>
              </Link>
            </Typography>
          </>
        )}
      </Box>
      <Box
        mt={5}
        sx={{ display: "flex", justifyContent: "flex-end", mr: 9, mb: 8 }}
      >
        <Button
          label="Get Help"
          iconPosition="after"
          iconSrc={GetHelp}
          sx={{
            width: "118.43px",
            height: "51px",
            border: "60.71px",
            padding: "15px",
            borderRadius: "60.71px",
            alignItems: "right",
            color: (theme: any) => theme.palette.primary.shade,
            backgroundColor: (theme: any) => theme.palette.info.main,
            "&:hover": {
              backgroundColor: (theme: any) => theme.palette.info.main,
            },
          }}
        />
      </Box>
    </AuthLayout>
  );
}

export default Register;

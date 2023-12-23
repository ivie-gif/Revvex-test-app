import { Box, Divider, Stack, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import AuthLayout from "../../authLayout";
import Button from "../Button";
import Inputs from "../Inputs";
import Email from "../../assets/email.svg";
import Google from "../../assets/gg_google.svg";
import User from "../../assets/user.svg";
import Password from "../../assets/Password.svg";
import GreyEmail from "../../assets/greyEmail.svg";
import { Link as RouterLink } from "react-router-dom";

function Register() {
  const [showFormField, setShowFormField] = useState(false);

  const handleRegister = () => {
    setShowFormField(true);
  };

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
              iconSrc={Email}
            />
            <Divider sx={{ my: 2 }}>
              <Typography>or</Typography>
            </Divider>
            <Button label="Sign up with Google" variant="outlined" iconSrc={Google} />
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
                type={"text"}
                variant={"outlined"}
                iconSrc={User}
                sx={{ width: "50%" }}
              />
              <Inputs
                placeholder="Last Name"
                type={"text"}
                variant={"outlined"}
                iconSrc={User}
                sx={{ width: "50%" }}
              />
            </Stack>

            <Inputs
              placeholder="Work email"
              type={"email"}
              variant={"outlined"}
              iconSrc={GreyEmail}
              sx={{ width: "100%", mb: 2 }}
            />

            <Inputs
              placeholder="Password"
              type={"password"}
              variant={"outlined"}
              iconSrc={Password}
              sx={{ width: "100%", mb: 2 }}
            />

            <Box>
              <Button label="Create Account" variant="outlined" sx={{ mt: 3 }} />
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
        )}
      </Box>
      {/* <Button label='Get Help' sx={{}}/> */}
    </AuthLayout>
  );
}

export default Register;

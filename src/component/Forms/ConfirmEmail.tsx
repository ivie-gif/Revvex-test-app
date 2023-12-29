import { useNavigate } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";

import AuthLayout from "../../authLayout";
import Button from "../Button";
import SentEmail from "../../assets/sent-email-envelop.svg";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const otp = localStorage.getItem("otp");

  const handleVerifyEmail = () => {
    navigate("/verifyEmail");
  };
  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: (theme: any) => theme.palette.background.primary,
          p: 5,
          width: "60%",
          margin: "auto",
          textAlign: "center",
          boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1)",
          mt: 18,
        }}
      >
        <img src={SentEmail} alt="email box" style={{ alignItems: "center" }} />
        <Typography
          variant="h2"
          sx={{
            color: (theme: any) => theme.palette.info.dark,
            fontFamily: "Mulish",
            textAlign: "center",
            mb: 2,
          }}
        >
          Check your mailbox!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: (theme: any) => theme.palette.info.darkGrey,
            mb: 2,
          }}
        >
          We’ve sent an email to seyi@zojatech.com with a an OTP to confirm your account. Check your inbox to  activate your account.
        </Typography>

        <Button
          label="Confirm Email"
          handleClick={handleVerifyEmail}
          sx={{
            width: "160px",
            height: "40px",
            padding: "8px, 16px, 8px, 16px",
            borderRadius: "6px",
            color: (theme: any) => theme.palette.primary.shade,
            backgroundColor: (theme: any) => theme.palette.info.main,
            "&:hover": {
              backgroundColor: (theme: any) => theme.palette.info.main,
            },
          }}
        />

        <Typography
          mt={4}
          sx={{
            color: (theme: any) => theme.palette.info.light,
            textAlign: "center",
          }}
        >
          Didn't get an email?{" "}
          <Link component={RouterLink} to="/register" underline="hover">
            <Typography color="info.main" ml={1} component="span">
              Resend
            </Typography>
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default ConfirmEmail;

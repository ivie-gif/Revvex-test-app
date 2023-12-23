import { Box, Typography, Link } from "@mui/material";
import AuthLayout from "../../authLayout";
import Button from "../Button";
import Inputs from "../Inputs";
import SentEmail from "../../assets/sent-email-envelop.svg";
import GreyEmail from "../../assets/greyEmail.svg";
import { Link as RouterLink } from "react-router-dom";

const ConfirmEmail = () => {
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
        <img
          src={SentEmail}
          alt="email box"
          style={{ alignItems: "center", margin: "0 170px 0 170px" }}
        />
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
            mx: 10,
            color: (theme: any) => theme.palette.info.darkGrey,
            mb: 2,
          }}
        >
          We’ve sent an email to seyi@zojatech.com with a an OTP to confirm your
          account. Check your inbox to activate your account.
        </Typography>

        <Button
          label="Confirm Email"
          sx={{
            width: '160px',
            height: '40px',
            padding: '8px, 16px, 8px, 16px',
            borderRadius: '6px',
            mx: 20,
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
}

export default ConfirmEmail;

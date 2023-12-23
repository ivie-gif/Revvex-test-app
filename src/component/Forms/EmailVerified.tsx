import { Box, Typography, Link } from "@mui/material";
import AuthLayout from "../../authLayout";
import Button from "../Button";
import VerifiedMail from "../../assets/envelope-circle-check.svg"
import { Link as RouterLink } from "react-router-dom";

const EmailVerified = () => {
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
          src={VerifiedMail}
          alt="email box"
          style={{ margin: "0 200px 10px 200px" }}
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
          Email Verified !
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mx: 10,
            color: (theme: any) => theme.palette.info.darkGrey,
            mb: 2,
          }}
        >
          The verified email address will be associated with your account. Click on the button below to continue.
        </Typography>

        <Button
          label="Continue"
          sx={{
            width: '160px',
            height: '40px',
            padding: '8px, 16px, 8px, 16px',
            borderRadius: '6px',
            mx: 20,
            mb: 3,
            mt: 2,
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

export default EmailVerified;

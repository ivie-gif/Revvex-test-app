import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import AuthLayout from "../../authLayout";
import Button from "../Button";
import VerifiedMail from "../../assets/envelope-circle-check.svg";

const EmailVerified = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/login");
  };

  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: (theme: any) => theme.palette.background.primary,
          p: 5,
          width: "55%",
          margin: "auto",
          boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1)",
          mt: 18,
          textAlign: "center",
        }}
      >
        <img src={VerifiedMail} alt="email box" />
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
            color: (theme: any) => theme.palette.info.darkGrey,
            mb: 2,
          }}
        >
          The verified email address will be associated with your account. Click
          on the button below to continue.
        </Typography>

        <Button
          handleClick={handleVerify}
          label="Continue"
          sx={{
            width: "160px",
            height: "40px",
            padding: "8px, 16px, 8px, 16px",
            borderRadius: "6px",
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
};

export default EmailVerified;

import { Box, Typography, Link, Grid, Stack } from "@mui/material";
import AuthLayout from "../../authLayout";
import Button from "../Button";
import Inputs from "../Inputs";
import SentEmail from "../../assets/sent-email-envelop.svg";
import GreyEmail from "../../assets/greyEmail.svg";
import { Link as RouterLink } from "react-router-dom";

const VerifyEmailOtp = () => {
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
            mx: 4,
            mb: 2,
          }}
        >
          Verify your email
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mx: 4,
            color: (theme: any) => theme.palette.info.darkGrey,
            mb: 2,
          }}
        >
          A four digit OTP code has been sent to your email  
          <Typography color="info.main" ml={1} component="span">
          seyi@zojatech.com
            </Typography>
        </Typography>


<Grid>
    <Stack direction="row"
          alignItems="center"
          gap={4} 
          mx={4}
          mt={4}>
    <Inputs
          type={"text"}
          variant={"outlined"}
          sx={{ width: "50px", mb: 2, height: '50px', borderRadius: '10px'}}
        />
        <Inputs
          type={"text"}
          variant={"outlined"}
          sx={{ width: "50px", mb: 2, height: '50px', borderRadius: '10px' }}
        />
        <Inputs
          type={"text"}
          variant={"outlined"}
          sx={{ width: "50px", mb: 2, height: '50px', borderRadius: '10px' }}
        />
        <Inputs
          type={"text"}
          variant={"outlined"}
          sx={{ width: "50px", mb: 2, height: '50px', borderRadius: '10px' }}
        />
    </Stack>
</Grid>







        <Button
          label="Confirm code"
          sx={{
            width: '160px',
            height: '40px',
            padding: '8px, 16px, 8px, 16px',
            borderRadius: '6px',
            mt:2,
            mx: 4,
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
            mx: 4,
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

export default VerifyEmailOtp;

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import logo from "../assets/Frame.svg";
import checkImage from "../assets/Checkbox.svg";
import { formContent } from "../constants/formContents";
import Button from "../component/Button";
import GetHelp from "../assets/getHelp.svg";

const Index = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container alignItems="flex-start" spacing={3}>
      <Grid item md={6} m={0}>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          sx={{ textAlign: "left", ml: 3, mt: 5 }}
        >
          <img src={logo} alt="logo" />
          <Typography
            sx={{
              fontFamily: "Lexend",
              fontWeight: "600",
              fontSize: "25px",
              // lineHeight: "33.25px",
            }}
          >
            Buddy
          </Typography>
        </Stack>
        <Box p={3} mt={15}>
          {formContent.map((data: string) => (
            <Stack direction="row" alignItems="center" gap={1} mb={2}>
              <img
                src={checkImage}
                alt="logo"
                style={{ width: "20px", height: "20px" }}
              />
              <Typography
                variant="subtitle1"
                textAlign="left"
                sx={{ color: (theme: any) => theme.palette.info.darkGrey }}
              >
                {data}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Grid>

      <Grid item md={6} m={0}>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            height: "100vh",
            p: 3,
          }}
        >
          {children}
        </Box>
        <Button
          label="Get Help"
          iconPosition="after"
          iconSrc={GetHelp}
          sx={{
            width: "118.43px",
            height: "51px",
            border: "60.71px",
            padding: '15px',
            borderRadius: '5px',
            alignItems: 'right',
            color: (theme: any) => theme.palette.primary.shade,
            backgroundColor: (theme: any) => theme.palette.info.main,
            "&:hover": {
              backgroundColor: (theme: any) => theme.palette.info.main,
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Index;

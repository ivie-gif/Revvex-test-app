import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Frame.svg";
import Avatar from "../assets/avatarNav.svg";
import Logout from "../assets/Logout.svg";
import { sideNavs } from "../constants/sideNav";
import Button from "../component/Button";

function Index({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <Grid container>
      <Grid item md={2}>
        <Box sx={{ backgroundColor: "white", height: "100vh", pt: 1 }}>
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              sx={{ textAlign: "left", p: 2 }}
            >
              <img src={logo} alt="logo" />
              <Typography
                sx={{
                  fontFamily: "Lexend",
                  fontWeight: "600",
                  fontSize: "25px",
                }}
              >
                Buddy
              </Typography>
            </Stack>
          </Box>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: "100vh" }}
          >
            <Grid item>
              {sideNavs.map((sideNav) => (
                <Link
                  to={sideNav.path}
                  key={sideNav.label}
                  style={{ textDecoration: "none" }}
                >
                  <Stack spacing={1} gap={1} direction="row" sx={{ p: 2 }}>
                    <img
                      src={sideNav.icon}
                      alt="icon"
                      style={{
                        width: "15px",
                        height: "15px",
                        marginTop: "5px",
                        fill:
                          location.pathname === sideNav.path
                            ? "#FF8600"
                            : "#818187",
                      }}
                    />
                    <Typography
                      sx={{
                        color:
                          location.pathname === sideNav.path
                            ? (theme: any) => theme.palette.text.secondary
                            : (theme: any) => theme.palette.text.primary,
                      }}
                    >
                      {sideNav.label}
                    </Typography>
                  </Stack>
                </Link>
              ))}
            </Grid>

            <Grid item>
              <Box sx={{ p: 2, alignItems: "center", textAlign: "center" }}>
                <img
                  src={Avatar}
                  alt="avatar"
                  style={{ height: "60px", width: "60px" }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Lexend",
                    color: (theme: any) => theme.palette.text.title,
                  }}
                >
                  {" "}
                  Theresa milly{" "}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Lexend",
                    color: (theme: any) => theme.palette.text.primary,
                  }}
                >
                  Influencer
                </Typography>
                <Button
                  label="Log Out"
                  variant="contained"
                  iconPosition="before"
                  iconSrc={Logout}
                  sx={{
                    width: "170px",
                    height: "43px",
                    backgroundColor: (theme: any) =>
                      theme.palette.background.success,
                    color: (theme: any) => theme.palette.text.secondary,
                    mt: 1,
                    "&:hover": {
                      backgroundColor: (theme: any) =>
                        theme.palette.background.success,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item md={10}>
        <Box sx={{ backgroundColor: "#F6F6F6", height: "100vh", p: 5 }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Grid, Stack, Typography } from "@mui/material";

import Inputs from "../component/Inputs";
import Layout from "../layout";
import SearchIcon from "../assets/searchIcon.svg";
import { cardFigure } from "../constants/cardFigures";
import CircleFrame from "../assets/circleFrame.svg";
import NotifBell from "../assets/notifBell.svg";
import Chart from "../assets/chart.svg";
import Card from "../component/Card";
import { trendingPosts, trendingNews } from "../constants/trendingPost";
import {
  potentialMembers,
  watchList,
  revenues,
} from "../constants/potentialMembers";

function Portfolio() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <Layout>
      <Box sx={{ backgroundColor: "#F6F6F6" }}>
        <Grid container direction="row" justifyContent="space-between" mb={5}>
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Lexend",
                color: (theme: any) => theme.palette.text.title,
              }}
            >
              My Portfolio
            </Typography>
          </Grid>
          <Grid item>
            <Stack gap={2} direction="row">
              <Inputs
                placeholder="Search"
                type={"text"}
                variant="outlined"
                iconSrc={SearchIcon}
                sx={{
                  width: "422px",
                  marginBottom: "none",
                  borderRadius: "10px",
                  height: "48px",
                  backgroundColor: (theme: any) =>
                    theme.palette.background.primary,
                }}
              />
              <img
                src={CircleFrame}
                alt="circle icon"
                style={{ width: "48px", height: "48px" }}
              />
              <img
                src={NotifBell}
                alt="notification icon"
                style={{ width: "48px", height: "48px" }}
              />
            </Stack>
          </Grid>
        </Grid>

        {/* The 2 section divs after my Portfolio */}
        <Grid container spacing={3}>
          {/* first grid item container */}
          <Grid
            item
            md={8}
            sx={{ overflowX: "hidden", overflowY: "scroll", height: "100vh" }}
          >
            <Stack direction="row" gap={2}>
              {cardFigure.map((cardFig, index) => (
                <Stack direction="column" alignItems="center">
                  <Card
                    key={index}
                    style={{
                      backgroundColor: "#FFFFFF",
                      width: "240px",
                      height: "70px",
                      borderRadius: "12px",
                      padding: "15px 1px 0px 7px",
                    }}
                  >
                    <Stack direction="row" gap={10}>
                      <Box>
                        <Stack direction="column">
                          <Typography
                            variant="h2"
                            sx={{
                              fontFamily: "Lexend",
                              color: (theme: any) => theme.palette.text.title,
                            }}
                          >
                            {cardFig.figure}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontFamily: "Lexend",
                              fontSize: "9px",
                              color: (theme: any) => theme.palette.text.success,
                            }}
                          >
                            {cardFig.title}
                          </Typography>
                        </Stack>
                      </Box>
                      <img
                        src={cardFig.icon}
                        alt="image icon"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "16px",
                        }}
                      />
                    </Stack>
                  </Card>
                </Stack>
              ))}
            </Stack>
            {/* The char section Image */}
            <Box mt={2}>
              <img src={Chart} alt="chart image" style={{ width: "770px" }} />
            </Box>

            {/* Trending post section */}
            <Box
              sx={{
                backgroundColor: (theme: any) =>
                  theme.palette.background.primary,
                width: "770px",
                borderRadius: "16px",
              }}
            >
              <Typography
                variant="h2"
                mt={2}
                sx={{
                  fontFamily: "Lexend",
                  color: (theme: any) => theme.palette.text.title,
                  p: 2,
                }}
              >
                Trending Posts
              </Typography>

              <Stack direction="row">
                {trendingPosts.map((trendingPost) => (
                  <Card
                    style={{
                      border: "1px solid #F1F1F1",
                      width: "350px",
                      margin: "0px 15px 25px 15px",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >
                    <Stack direction="column">
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: "Lexend", fontSize: "18px" }}
                      >
                        {trendingPost.title}
                      </Typography>
                      <Typography>{trendingPost.subTitle}</Typography>
                      <Box>
                        <Stack direction="row">
                          <img src={trendingPost.icon1} alt="icons" />
                          <img src={trendingPost.icon2} alt="icons" />
                          <img src={trendingPost.icon3} alt="icons" />
                        </Stack>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Box>

            {/* Potential Memebers */}
            <Box
              sx={{
                backgroundColor: (theme: any) =>
                  theme.palette.background.primary,
                width: "770px",
                borderRadius: "16px",
                mt: 3,
                px: 2,
                py: 3,
              }}
            >
              <Typography
                variant="h2"
                mt={2}
                sx={{
                  fontFamily: "Lexend",
                  color: (theme: any) => theme.palette.text.title,
                  mb: 2,
                }}
              >
                Potential Members
              </Typography>

              <Stack direction="row" gap={2} alignItems="center">
                {potentialMembers.map((potentialMember, index) => (
                  <Stack key={index} direction="column" alignItems="center">
                    <Card
                      style={{
                        border: "1px solid #F1F1F1",
                        textAlign: "center",
                        width: "130px",
                        margin: "auto",
                        padding: "2px",
                      }}
                    >
                      <img
                        src={potentialMember.icon}
                        alt="icon"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <Typography>{potentialMember.name}</Typography>
                      <Typography>{potentialMember.email}</Typography>
                      <img
                        src={potentialMember.icon1}
                        alt="icon"
                        style={{ width: "67px", height: "20px" }}
                      />
                    </Card>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* second grid item container */}
          <Grid item md={4} sx={{ height: "100vh" }} mb={3}>
            <Box
              sx={{
                backgroundColor: (theme: any) =>
                  theme.palette.background.primary,
                width: "330px",
                borderRadius: "16px",
                px: 2,
              }}
            >
              <Stack direction="row" gap={12}>
                <Typography
                  variant="h2"
                  mt={2}
                  sx={{
                    fontFamily: "Lexend",
                    color: (theme: any) => theme.palette.text.title,
                    pt: 2,
                  }}
                >
                  WatchList
                </Typography>
                <Typography
                  variant="h5"
                  mt={2}
                  sx={{
                    fontFamily: "Lexend",
                    color: (theme: any) => theme.palette.text.secondary,
                    pt: 2,
                  }}
                >
                  VIEW ALL
                </Typography>
              </Stack>

              <Stack direction="column" gap={2} mt={3} p={2}>
                {watchList.map((list, index) => (
                  <Card
                    key={index}
                    style={{
                      backgroundColor: "#F6F6F6",
                      width: "290px",
                      borderRadius: "12px",
                    }}
                  >
                    <Stack direction="row" gap={2}>
                      <Stack direction="column">
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "Lexend",
                            color: (theme: any) => theme.palette.text.title,
                          }}
                        >
                          {list.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Lexend",
                            color: (theme: any) => theme.palette.text.primary,
                          }}
                        >
                          {list.amount}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Lexend",
                            color: "#00A441",
                          }}
                        >
                          {list.chart}
                        </Typography>
                      </Stack>

                      <img src={list.icon} alt="icon" />

                      <img src={list.icon1} alt="chart" />
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Box>

            {/* revenue card */}
            <Box
              sx={{
                backgroundColor: (theme: any) =>
                  theme.palette.background.primary,
                width: "330px",
                borderRadius: "16px",
                mt: 3,
                px: 2,
                py: 2,
              }}
            >
              <Typography
                variant="h2"
                mt={2}
                sx={{
                  fontFamily: "Lexend",
                  color: (theme: any) => theme.palette.text.title,
                }}
              >
                Revenue
              </Typography>

              <Stack direction="column" gap={3} mt={3}>
                {revenues.map((revenue, index) => (
                  <Card
                    key={index}
                    style={{
                      border: "1px solid #F1F1F1",
                      borderRadius: "12px",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" p={1}>
                      <Stack>
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "Lexend",
                            color: (theme: any) => theme.palette.text.title,
                          }}
                        >
                          {revenue.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Lexend",
                            color: (theme: any) => theme.palette.text.primary,
                          }}
                        >
                          {revenue.span}
                        </Typography>
                      </Stack>
                      <img
                        src={revenue.icon}
                        alt="icons"
                        style={{ width: "48px", height: "48px" }}
                      />
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Box>

            {/* Trending news section */}
            <Box
              sx={{
                backgroundColor: (theme: any) =>
                  theme.palette.background.primary,
                width: "330px",
                borderRadius: "16px",
                mt: 3,
                px: 3,
                py: 3,
              }}
            >
              <Typography
                variant="h2"
                mt={2}
                sx={{
                  fontFamily: "Lexend",
                  color: (theme: any) => theme.palette.text.title,
                }}
              >
                Trending News
              </Typography>

              <Stack direction="column" gap={3} mt={2}>
                {trendingNews.map((trendingNew, index) => (
                  <Card
                    key={index}
                    style={{
                      border: "1px solid #F1F1F1",
                      borderRadius: "12px",
                      padding: "12px 5px",
                    }}
                  >
                    <Stack direction="row" gap={2}>
                      <img src={trendingNew.icon} />
                      <Stack direction="column">
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "Lexend",
                            color: (theme: any) => theme.palette.text.title,
                          }}
                        >
                          {trendingNew.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Lexend",
                            color: (theme: any) => theme.palette.text.primary,
                          }}
                        >
                          {trendingNew.subTitle}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* end of page grid */}
        </Grid>
      </Box>
      {/* </Box> */}
    </Layout>
  );
}

export default Portfolio;

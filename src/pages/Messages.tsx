import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

import Layout from "../layout";
import SearchIcon from "../assets/searchIcon.svg";
import CircleFrame from "../assets/circleFrame.svg";
import NotifBell from "../assets/notifBell.svg";
import David from "../assets/david.svg";
import Pencil from "../assets/pencil.svg";
import Roy from "../assets/roy.svg";
import Lisa from "../assets/lisa.svg";
import Love from "../assets/love.svg";
import NotifSearch from "../assets/notifSearch.svg";
import NotificationBell from "../assets/notificationBell.svg";
import Send from "../assets/send.svg";
import Mic from "../assets/mic.svg";
import Camera from "../assets/camera.svg";
import PaperClip from "../assets/paperclip.svg";
import Emoji from "../assets/emoji.svg";
import Inputs from "../component/Inputs";
import { messagesData } from "../constants/MessageData";
import Button from "../component/Button";

function Messages() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [newChat, setNewChat] = useState("");
  const chatString: any = localStorage.getItem("chat");
  const chat: string[] = chatString ? JSON.parse(chatString) : [];

  const handleChat = (e: any) => {
    setNewChat(e.target.value);
  };
  const handleClear = () => {
    localStorage.removeItem("chat");
    window.location.reload();
  };

  const handleSend = (e: any) => {
    e.preventDefault();

    const updatedChat = [...chat, newChat];

    setNewChat("");
    localStorage.setItem("chat", JSON.stringify(updatedChat));
  };

  return (
    <Layout>
      <Grid container direction="row" justifyContent="space-between" mb={5}>
        <Grid item>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Lexend",
              color: (theme: any) => theme.palette.text.title,
            }}
          >
            Messages
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

      {/* Message Chat */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          overflowY: "scroll",
          height: "80vh",
          p: 5,
        }}
      >
        <Grid container>
          <Grid item md={3}>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
              {/* first image and icons nav */}
              <Box sx={{ py: 3, px: 2 }}>
                <Stack direction="row" gap={1}>
                  <img
                    src={David}
                    alt="image icon"
                    style={{ width: "40.65px", height: "45px" }}
                  />
                  <Box>
                    <Stack>
                      <Typography
                        variant="h5"
                        sx={{
                          mt: 1,
                          fontFamily: "Inter",
                          color: (theme: any) => theme.palette.text.secondary,
                        }}
                      >
                        David Peters
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: "Inter", fontSize: "9px", mt: -1 }}
                      >
                        Senior Developer
                      </Typography>
                    </Stack>
                  </Box>
                  <img
                    src={Pencil}
                    alt="pencil image"
                    style={{ marginLeft: "80px" }}
                  />
                </Stack>
              </Box>

              <Inputs
                placeholder="Search Here..."
                type={"text"}
                variant="outlined"
                iconSrc={SearchIcon}
                sx={{
                  width: "263px",
                  marginBottom: "none",
                  borderRadius: "10px",
                  mx: 1,
                  mt: 2,
                  height: "48px",
                  backgroundColor: (theme: any) =>
                    theme.palette.background.primary,
                }}
              />
              <Divider
                sx={{ borderBottom: "1px solid #CDCDCD", mt: 4, mb: 2, mx: 1 }}
              />
              {/* stack for the remaining images and icons nav */}
              <Stack direction="column">
                {messagesData.map((data) => (
                  <Box sx={{ py: 1, px: 2 }}>
                    <Stack direction="row" gap={1}>
                      <img
                        src={data.icon}
                        alt="image icon"
                        style={{
                          width: "40.65px",
                          height: "45px",
                          marginTop: "2px",
                        }}
                      />
                      <Box>
                        <Stack direction="column">
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Inter",
                              color: (theme: any) =>
                                theme.palette.text.secondary,
                            }}
                          >
                            {data.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              width: "144.5px",
                              fontFamily: "Inter",
                              fontSize: "9px",
                              color: (theme: any) => theme.palette.text.success,
                            }}
                          >
                            {data.message}
                          </Typography>
                        </Stack>
                      </Box>

                      <Box>
                        <Stack direction="column">
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontFamily: "Inter",
                              fontSize: "9px",
                              color: (theme: any) => theme.palette.text.success,
                            }}
                          >
                            {formattedTime}
                          </Typography>
                          {data.other && (
                            <img
                              src={data.other}
                              alt="other icon"
                              style={{
                                marginLeft: "30px",
                                width: "12.39px",
                                height: "12px",
                              }}
                            />
                          )}
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Divider sx={{ borderBottom: "1px solid #CDCDCD", mb: 2, mx: 1 }} />
          </Grid>

          {/* core message chat section */}
          <Grid item md={9}>
            <Box p={5}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Stack direction="row" gap={1}>
                    <img
                      src={Roy}
                      alt="person image"
                      style={{ width: "40.65px", height: "45px" }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "15px",
                        mt: 1,
                        color: (theme: any) => theme.palette.text.subTitle,
                      }}
                    >
                      Lisa Roy
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item>
                  <Stack direction="row" gap={2}>
                    <img src={Love} alt="person image" />
                    <img src={NotifSearch} alt="person image" />
                    <img src={NotificationBell} alt="person image" />
                    <Button
                      handleClick={handleClear}
                      label="Clear Local Storage"
                      sx={{
                        backgroundColor: (theme: any) =>
                          theme.palette.info.main,
                        color: (theme: any) => theme.palette.primary.shade,
                        "&:hover": {
                          backgroundColor: (theme: any) =>
                            theme.palette.info.main,
                        },
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Divider
                sx={{ borderBottom: "1px solid #D9D9D9", mt: 2, mb: 4, mx: 1 }}
              ></Divider>

              {/* between chats */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "65vh",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Stack direction="row" gap={1}>
                        <img
                          src={Roy}
                          alt="icon"
                          style={{
                            width: "25px",
                            height: "25px",
                            marginTop: "60px",
                          }}
                        />
                        <Box
                          sx={{
                            backgroundColor: "#F1F1F1",
                            borderRadius: "10px, 10px, 10px, 0px",
                            width: "259px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: (theme: any) =>
                                theme.palette.text.subTitle,
                              p: 1,
                            }}
                          >
                            Hi David, have you got the project report pdf? Plz
                            be sure to fill the details by today end of the day.
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" gap={1}>
                        <Box
                          sx={{
                            backgroundColor: "#F1F1F1",
                            borderRadius: "10px, 10px, 10px, 0px",
                            width: "259px",
                            height: "45px",
                            mt: 12,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: (theme: any) =>
                                theme.palette.text.secondary,
                              p: 1,
                            }}
                          >
                            No, I haven't.
                          </Typography>
                        </Box>
                        <img
                          src={Lisa}
                          alt="icon"
                          style={{
                            width: "25px",
                            height: "25px",
                            marginTop: "118px",
                          }}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <Divider>
                  <Typography>Today</Typography>
                </Divider>

                <Box>
                  {chat.map((message: string, index: number) => (
                    <Box
                      sx={{
                        mb: -3,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Stack direction="row" gap={1}>
                        <Box
                          sx={{
                            backgroundColor: "#F1F1F1",
                            borderRadius: "10px, 10px, 10px, 0px",
                            width: "259px",
                            height: "auto",
                            mt: 6,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: (theme: any) =>
                                theme.palette.text.secondary,
                              p: 1,
                            }}
                          >
                            {message}
                          </Typography>
                        </Box>
                        <img
                          src={Lisa}
                          alt="icon"
                          style={{
                            width: "25px",
                            height: "25px",
                            marginTop: "70px",
                          }}
                        />
                      </Stack>
                    </Box>
                  ))}
                </Box>
                {/* Chat box */}
                <Box
                  sx={{
                    backgroundColor: "#D9D9D9",
                    height: "96px",
                    borderRadius: "12px",
                    width: "716px",
                    mt: 8,
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item sx={{ position: "relative" }}>
                      <Inputs
                        placeholder="Write Something...."
                        type="text"
                        variant="outlined"
                        iconSrc={Mic}
                        sx={{
                          width: "500px",
                          my: 3,
                          mx: 3,
                          border: "1px solid #FFFFFF !important",
                          borderColor: "#FFFFFF !important",
                          outline: "none",
                          height: "48px",
                          paddingRight: "100px",
                          overflowWrap: "break-word",
                          backgroundColor: (theme: any) =>
                            theme.palette.background.primary,
                        }}
                        onChange={handleChat}
                        value={newChat}
                      />
                      <img
                        src={Emoji}
                        alt="icons"
                        style={{
                          position: "absolute",
                          right: "40px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                      <img
                        src={Camera}
                        alt="icons"
                        style={{
                          position: "absolute",
                          right: "70px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                      <img
                        src={PaperClip}
                        alt="icons"
                        style={{
                          position: "absolute",
                          right: "100px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <img src={Send} alt="send icon" onClick={handleSend} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Messages;

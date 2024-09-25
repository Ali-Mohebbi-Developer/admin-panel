"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import Channels from "../Channels/page";
import { useDark } from "../ThemeContext";
import Chats from "../Chats/page";

const ThirdChart = () => {
  const { isDarkMode } = useDark();

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "30px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Top Channels
            </Typography>
            <Box
              sx={{
                padding: "20px",
                marginY: "20px",

                display: "flex",
                justifyContent: "space-between",
                backgroundColor: isDarkMode ? "#313D4A" : "#F7F9FC",
                color: isDarkMode ? "#aeb7c0" : "#64748b",
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "18px" }}>Source</Typography>
              <Typography
                sx={{ fontSize: "18px", transform: "translateX(10px)" }}
              >
                Visitors
              </Typography>
              <Typography
                sx={{ fontSize: "18px", transform: "translateX(20px)" }}
              >
                Revenues
              </Typography>
              <Typography
                sx={{ fontSize: "18px", transform: "translateX(15px)" }}
              >
                Sales
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>Conversion</Typography>
            </Box>
            <Box sx={{ paddingX: "20px" }}>
              <Channels
                logo={
                  "https://demo.tailadmin.com/src/images/brand/brand-01.svg"
                }
                source={"Google"}
                visitors={3.5}
                conversion={4.8}
                sales={590}
                revenues={"5,768"}
              />
              <Channels
                logo={
                  "https://demo.tailadmin.com/src/images/brand/brand-02.svg"
                }
                source={"Twitter"}
                visitors={2.2}
                conversion={4.3}
                sales={467}
                revenues={"4,635"}
              />
              <Channels
                logo={
                  "https://demo.tailadmin.com/src/images/brand/brand-03.svg"
                }
                source={"Github"}
                visitors={2.1}
                conversion={3.7}
                sales={420}
                revenues={"4,290"}
              />
              <Channels
                logo={
                  "https://demo.tailadmin.com/src/images/brand/brand-04.svg"
                }
                source={"Vimeo"}
                visitors={1.5}
                conversion={2.5}
                sales={389}
                revenues={"3,580"}
              />
              <Channels
                logo={
                  "https://demo.tailadmin.com/src/images/brand/brand-05.svg"
                }
                source={"Facebook"}
                visitors={1.2}
                conversion={1.9}
                sales={230}
                revenues={"2,740"}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
              paddingY: "7.5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                color: isDarkMode ? "white" : "black",
                padding: "20px",
              }}
            >
              Chats{" "}
            </Typography>
            <Chats
              name={"Devid Heilo"}
              text={"Hello, how are you?"}
              min={". 12 min"}
              src={"https://demo.tailadmin.com/src/images/user/user-03.png"}
              isMessage={true}
              status={"online"}
              numberMessages={3}
            />
            <Chats
              name={"Henry Fisher"}
              text={"I am waiting for you "}
              min={". 5:54 PM"}
              src={"https://demo.tailadmin.com/src/images/user/user-04.png"}
              isMessage={false}
              status={"online"}
              numberMessages={0}
            />
            <Chats
              name={"Wilium Smith"}
              text={"Where are you now?"}
              min={". 10:12 PM"}
              src={"https://demo.tailadmin.com/src/images/user/user-05.png"}
              isMessage={false}
              status={"soon"}
              numberMessages={0}
            />
            <Chats
              name={"Henry Deco"}
              text={"Thank you so much! "}
              min={". Sun"}
              src={"https://demo.tailadmin.com/src/images/user/user-06.png"}
              isMessage={true}
              status={"online"}
              numberMessages={2}
            />
            <Chats
              name={"Jubin Jack"}
              text={"I really love that! "}
              min={". Oct 23"}
              src={"https://demo.tailadmin.com/src/images/user/user-07.png"}
              isMessage={false}
              status={"offline"}
              numberMessages={0}
            />
            <Chats
              name={"John Doe"}
              text={"Where are you now?"}
              min={". Sep 20"}
              src={"https://demo.tailadmin.com/src/images/user/user-08.png"}
              isMessage={false}
              status={"soon"}
              numberMessages={0}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdChart;

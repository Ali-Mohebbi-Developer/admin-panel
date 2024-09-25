"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Map from "../Map/page";
import DonutChart from "../DonutChart/page";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DonutDetails from "../DonutDetails/page";
import { useTheme } from "../ThemeContext/page";

const SecondCharts = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "20px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
            }}
          >
            <Box
              sx={{
                paddingX: "15px",

                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                Visitors Analytics
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "2px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: isDarkMode ? "#aeb7c0" : "#64748b",
                  }}
                >
                  This Month
                </Typography>
                <KeyboardArrowDownOutlinedIcon
                  sx={{
                    fontSize: "18px",
                    color: isDarkMode ? "#aeb7c0" : "#64748b",
                  }}
                />
              </Box>{" "}
            </Box>
            <DonutChart />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginY: "5px",
              }}
            >
              <DonutDetails number={65} title={"desktop"} bgColor={"#3C50E0"} />
              <DonutDetails number={34} title={"Tablet"} bgColor={"#6577F3"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <DonutDetails number={45} title={"Mobile"} bgColor={"#8FD0EF"} />
              <DonutDetails number={12} title={"Unknown"} bgColor={"#0FADCF"} />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "20px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
            }}
          >
            <Map />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondCharts;

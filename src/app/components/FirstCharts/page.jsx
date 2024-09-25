"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import SplineChart from "../SplineChart/page";
import BarChart from "../BarChart/page";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useTheme } from "../ThemeContext/page";

const FirstCharts = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box>
      <Grid container spacing={4} sx={{ marginY: "30px" }}>
        <Grid item size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "20px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
            }}
          >
            <Box sx={{ display: "flex", paddingY: "5px" }}>
              <Box sx={{ marginLeft: "20px", marginRight: "40px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "5px",
                      width: "17px",
                      height: "17px",
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      border: "1px solid #3C50E0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#3C50E0",
                        padding: "5px",
                      }}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      color: "#3C50E0",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Total Revenue
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: isDarkMode ? "#aeb7c0" : "#64748b",
                    fontSize: "14px",
                    transform: "translateX(22px)",
                  }}
                >
                  12.04.2022 - 12.05.2022
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "5px",
                      width: "17px",
                      height: "17px",
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      border: "1px solid #80CAEE",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#80CAEE",
                        padding: "5px",
                      }}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      color: "#80CAEE",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Total Sales
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: isDarkMode ? "#aeb7c0" : "#64748b",
                    fontSize: "14px",
                    transform: "translateX(22px)",
                  }}
                >
                  12.04.2022 - 12.05.2022
                </Typography>
              </Box>
            </Box>
            <SplineChart />
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, lg: 4 }}>
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
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: isDarkMode ? "white" : "black",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  Profit this week
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#3C50E0",
                        padding: "5px",
                        marginRight: "5px",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: isDarkMode ? "#aeb7c0" : "#64748b",
                      }}
                    >
                      Sales
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",

                        backgroundColor: "#80CAEE",
                        padding: "5px",
                        marginRight: "5px",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: isDarkMode ? "#aeb7c0" : "#64748b",
                      }}
                    >
                      Revenue
                    </Typography>
                  </Box>
                </Box>
              </Box>
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
                  This Week
                </Typography>
                <KeyboardArrowDownOutlinedIcon
                  sx={{
                    fontSize: "18px",
                    color: isDarkMode ? "#aeb7c0" : "#64748b",
                  }}
                />
              </Box>
            </Box>
            <BarChart />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FirstCharts;

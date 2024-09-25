"use client";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../components/ThemeContext/page";
import ColumnChart from "../components/ColumnChart/page";
import Grid from "@mui/material/Grid2";
import Rates from "../components/Rates/page";
import DonutChart from "../components/DonutChart/page";
import DonutDetails from "../components/DonutDetails/page";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Products from "../components/Products/page";

const Analytics = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#1A222C" : "#F1F5F9",
        padding: "40px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item size={12}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "20px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
            }}
          >
            <ColumnChart />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ marginY: "30px" }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Rates number={18} rate={"$4,350"} title={"Unique Visitors"} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Rates number={25} rate={"55.9K"} title={"Total Pageviews"} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Rates number={7} rate={"54%"} title={"Bounce Rate"} />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Rates number={12} rate={"2m 56s"} title={"Visit Duration"} />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item size={{ xs: 12, lg: 5 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "30px",
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
                  marginBottom: "20px",
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
                marginY: "15px",
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
          </Box>{" "}
        </Grid>
        <Grid item size={{ xs: 12, lg: 7 }}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: "20px 30px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Top Products
            </Typography>
            <Box
              sx={{
                marginY: "20px",
                display: "flex",
                justifyContent: "space-between",
                color: isDarkMode ? "#aeb7c0" : "#64748b",
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>Product Name</Typography>
              <Typography
                sx={{ fontSize: "16px", transform: "translateX(20px)" }}
              >
                Category
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>Price</Typography>
              <Typography sx={{ fontSize: "16px" }}>Sold</Typography>
              <Typography sx={{ fontSize: "16px" }}>Profit</Typography>
            </Box>
            <Box>
              <Products
                category={"Electronics"}
                logo={
                  "https://demo.tailadmin.com/src/images/product/product-01.png"
                }
                price={269}
                sold={22}
                profit={45}
                title={"Apple Watch Series 7"}
              />
              <Products
                category={"Electronics"}
                logo={
                  "https://demo.tailadmin.com/src/images/product/product-02.png"
                }
                price={546}
                sold={34}
                profit={125}
                title={"Macbook Pro M1"}
              />
              <Products
                category={"Electronics"}
                logo={
                  "https://demo.tailadmin.com/src/images/product/product-03.png"
                }
                price={443}
                sold={64}
                profit={247}
                title={"Dell Inspiron 15"}
              />
              <Products
                category={"Electronics"}
                logo={
                  "https://demo.tailadmin.com/src/images/product/product-04.png"
                }
                price={499}
                sold={72}
                profit={103}
                title={"HP Probook 450"}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;

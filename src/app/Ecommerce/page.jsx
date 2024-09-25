"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FirstCharts from "../components/FirstCharts/page";
import SecondCharts from "../components/SecondCharts/page";
import ThirdChart from "../components/ThirdChart/page";
import InformationCards from "../components/InformationCards/page";
import { useTheme } from "../components/ThemeContext/page";

const Ecommerce = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#1A222C" : "#F1F5F9",
        padding: "40px",
      }}
    >
      <Box>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"3.456"}
              profit={0.43}
              title={"Total views"}
              TitleIcon={RemoveRedEyeOutlinedIcon}
              isOption={true}
              isGrow={true}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"45,2"}
              profit={4.35}
              title={"Total Profit"}
              TitleIcon={ShoppingCartOutlinedIcon}
              isOption={true}
              isGrow={true}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"2.450"}
              profit={2.59}
              title={"Total Product"}
              TitleIcon={LocalMallOutlinedIcon}
              isOption={false}
              isGrow={true}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"3.456"}
              profit={0.95}
              title={"Total Users"}
              TitleIcon={PeopleAltOutlinedIcon}
              isOption={false}
              isGrow={false}
            />
          </Grid>
        </Grid>
      </Box>
      <FirstCharts />
      <SecondCharts />
      <ThirdChart />
    </Box>
  );
};

export default Ecommerce;

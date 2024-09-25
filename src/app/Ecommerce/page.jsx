"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import FirstCharts from "../components/FirstCharts/page";
import SecondCharts from "../components/SecondCharts/page";
import ThirdChart from "../components/ThirdChart/page";
import InformationCards from "../components/InformationCards/page";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useDark } from "../components/ThemeContext";

const Ecommerce = () => {
  const { isDarkMode } = useDark();

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
              isOption={true}
              isGrow={true}
              titleIcon={faEye}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"45,2"}
              profit={4.35}
              title={"Total Profit"}
              isOption={true}
              isGrow={true}
              titleIcon={faCartShopping}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"2.450"}
              profit={2.59}
              title={"Total Product"}
              isOption={false}
              isGrow={true}
              titleIcon={faBagShopping}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <InformationCards
              number={"3.456"}
              profit={0.95}
              title={"Total Users"}
              isOption={false}
              isGrow={false}
              titleIcon={faUserGroup}
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

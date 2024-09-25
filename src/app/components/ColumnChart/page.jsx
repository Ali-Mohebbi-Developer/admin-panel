"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../ThemeContext/page";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart = () => {
  const [isClient, setIsClient] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const chartOptions = {
    series: [
      {
        name: "Series",
        data: [
          168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212,
          270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290,
          380, 312,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          dataLabels: {
            position: "top",
          },
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: isDarkMode ? "#aeb7c0" : "#64748b",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          formatter: (value) => value,
          style: {
            fontSize: "12px",
            colors: isDarkMode ? "#aeb7c0" : "#64748b",
          },
        },
      },

      colors: ["#3C50E0"],
      grid: {
        show: false,
      },
    },
  };

  return (
    <div>
      {isClient ? (
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ColumnChart;

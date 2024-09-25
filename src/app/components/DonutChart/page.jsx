"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDark } from "../ThemeContext";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DonutChart = () => {
  const [isClient, setIsClient] = useState(false);
  const { isDarkMode } = useDark();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const chartOptions = {
    series: [65, 34, 45, 12],
    options: {
      chart: {
        type: "donut",
        background: "transparent",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            background: "transparent",
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        show: false,
      },
      labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
      colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      fill: {
        opacity: 1,
        type: "gradient",
      },
      theme: {
        mode: isDarkMode ? "dark" : "light",
      },
    },
  };

  return (
    <div>
      {isClient ? (
        <ReactApexChart
          options={chartOptions.options || {}}
          series={chartOptions.series || []}
          type="donut"
          height={350}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DonutChart;

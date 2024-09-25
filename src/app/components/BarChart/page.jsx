"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../ThemeContext/page";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = () => {
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
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: "Revenue",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ["#3C50E0", "#80CAEE"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
          dataLabels: {
            enabled: false,
          },
          columnWidth: "30%",
        },
      },
      yaxis: {
        max: 100,
        labels: {
          style: {
            colors: isDarkMode ? "#aeb7c0" : "#64748b",
          },
        },
      },
      xaxis: {
        type: "category",
        categories: ["M", "T", "W", "T", "F", "S", "S"],
        labels: {
          style: {
            colors: isDarkMode ? "#aeb7c0" : "#64748b",
          },
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
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

export default BarChart;

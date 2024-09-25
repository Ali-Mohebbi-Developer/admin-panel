"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDark } from "../ThemeContext";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SplineChart = () => {
  const [isClient, setIsClient] = useState(false);
  const { isDarkMode } = useDark();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const chartOptions = {
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: ["#3C50E0", "#80CAEE"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: isDarkMode ? "#aeb7c0" : "#64748b",
          },
        },
      },
      yaxis: {
        max: 100,
        tickAmount: 10,
        labels: {
          style: {
            colors: isDarkMode ? "#aeb7c0" : "#64748b",
          },
        },
      },
      tooltip: {
        x: {
          format: "MMM",
        },
      },
      legend: {
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
          type="area"
          height={350}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SplineChart;

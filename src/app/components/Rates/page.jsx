"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useTheme } from "../ThemeContext/page";

const Rates = ({ number, rate, title }) => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDarkMode ? "#24303F" : "white",
        padding: "24px 30px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            color: isDarkMode ? "white" : "black",
          }}
        >
          {rate}
        </Typography>
        <Typography
          sx={{ color: isDarkMode ? "#aeb7c0" : "#64748b", fontSize: "14px" }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: number > 10 ? "#10b981" : "#f0950c",
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          marginLeft: "10px",
        }}
      >
        {number > 10 ? (
          <ArrowUpwardOutlinedIcon sx={{ fontSize: "16px" }} />
        ) : (
          <ArrowDownwardOutlinedIcon sx={{ fontSize: "16px" }} />
        )}
        {number}%
      </Typography>
    </Box>
  );
};

export default Rates;

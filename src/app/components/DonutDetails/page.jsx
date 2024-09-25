"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useDark } from "../ThemeContext";

const DonutDetails = ({ title, number, bgColor }) => {
  const { isDarkMode } = useDark();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        paddingX: "20px",
      }}
    >
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
            backgroundColor: bgColor,
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
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          color: isDarkMode ? "#aeb7c0" : "#64748b",
        }}
      >
        {number}%
      </Typography>
    </Box>
  );
};

export default DonutDetails;

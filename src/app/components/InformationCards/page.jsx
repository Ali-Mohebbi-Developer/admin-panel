"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { useTheme } from "../ThemeContext/page";

const InformationCards = ({
  TitleIcon,
  number,
  title,
  profit,
  isOption,
  isGrow,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#24303F" : "white",
        padding: "24px 30px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1) ",
      }}
    >
      <TitleIcon
        sx={{
          backgroundColor: isDarkMode ? "#313D4A" : "#EFF2F7",
          padding: "10px",
          fontSize: "3rem",
          color: isDarkMode ? "white" : "#3C50E0",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          color: isDarkMode ? "white" : "black",
        }}
      >
        {isOption == true ? `$${number}K` : `${number}`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ color: isDarkMode ? "#aeb7c0" : "#64748b", fontSize: "14px" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: isGrow ? "#10b981" : "#259ae6",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>{profit}%</Typography>
          {isGrow ? (
            <ArrowUpwardOutlinedIcon sx={{ fontSize: "16px" }} />
          ) : (
            <ArrowDownwardOutlinedIcon sx={{ fontSize: "16px" }} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InformationCards;

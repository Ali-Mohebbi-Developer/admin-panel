"use client";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useDark } from "../ThemeContext";

const Products = ({ logo, title, category, price, sold, profit }) => {
  const { isDarkMode } = useDark();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: "20px",
        borderBottom: title != "HP Probook 450" && "1px solid rgb(226,232,240)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <Avatar
          src={logo}
          sx={{
            marginRight: "10px",
            borderRadius: "10px",
            width: "3rem",
            height: "3rem",
          }}
        />
        <Typography
          sx={{
            color: isDarkMode ? "white" : "black",
            fontSize: "14px",
            position: "absolute",
            left: "55px",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: isDarkMode ? "white" : "black",
          fontSize: "14px",
          transform: "translateX(50px)",
        }}
      >
        {category}
      </Typography>
      <Typography
        sx={{
          color: isDarkMode ? "white" : "black",

          fontSize: "14px",
          transform: "translateX(10px)",
        }}
      >
        ${price}
      </Typography>
      <Typography
        sx={{
          color: isDarkMode ? "white" : "black",
          fontSize: "14px",
        }}
      >
        {sold}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#10b981",
          transform: "translateX(-10px)",
        }}
      >
        ${profit}
      </Typography>
    </Box>
  );
};

export default Products;

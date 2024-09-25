"use client";
import { Box } from "@mui/material";
import React from "react";

const Map = () => {
  return (
    <Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147086.49560807098!2d52.4188275242662!3d29.646493980620743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb20d0c8c85f2e3%3A0x6d0c5b8aef6b4cf6!2sShiraz%2C%20Fars%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1726897738754!5m2!1sen!2snl"
        height="397"
        style={{ width: "100%", border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;

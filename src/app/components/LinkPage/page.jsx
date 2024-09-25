"use client";
import { Link } from "@mui/material";
import React from "react";

const LinkPage = ({ url, content }) => {
  return (
    <Link
      href={url}
      sx={{
        color: "white",
        width: "100%",
        padding: "10px",
        paddingLeft: "0",
        textDecoration: "none",
      }}
    >
      {content}
    </Link>
  );
};

export default LinkPage;

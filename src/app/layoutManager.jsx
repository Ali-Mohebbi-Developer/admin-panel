"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "./components/Header/page";
import { Box } from "@mui/material";

const LayoutManager = ({ children }) => {
  const pathName = usePathname();
  const isCheckoutLogin = pathName === "/";
  const isCheckoutSignUp = pathName === "/SignUp";

  const showHeader = isCheckoutLogin || isCheckoutSignUp;

  return (
    <Box sx={{ overflow: "hidden" }}>
      {!showHeader && (
        <Box
          sx={{
            marginLeft: { xs: "0", lg: "18rem" },
          }}
        >
          <Header />
        </Box>
      )}
      <Box sx={{ marginLeft: !showHeader && { xs: "0", lg: "18rem" } }}>
        {children}
      </Box>
    </Box>
  );
};

export default LayoutManager;

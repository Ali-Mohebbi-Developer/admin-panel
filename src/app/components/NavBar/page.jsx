"use client";
import {
  Box,
  createTheme,
  List,
  ListItem,
  ThemeProvider as MuiThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import CustomizedAccordions from "../Accordion/page";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import LinkPage from "../LinkPage/page";
import { useDark } from "../ThemeContext";

const theme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0 10px",
          borderRadius: "2px",
          marginBottom: "5px",
        },
      },
    },
  },
});
const dashboard = [
  {
    title: "Dashboard",
    contents: [
      { text: "eCommerce", url: "/Ecommerce" },
      { text: "Analytics", url: "/Analytics" },
      { text: "Marketing", url: "#" },
      { text: "CRM", url: "#" },
      { text: "Stocks", url: "#" },
    ],
    icon: (
      <DashboardIcon
        sx={{
          fontSize: "1.2rem",
          transform: "translateY(-2px)",
          color: "white",
        }}
      />
    ),
  },
];
const task = [
  {
    title: "Task",
    contents: [
      { text: "List", url: "#" },
      { text: "Kanban", url: "#" },
    ],
    icon: (
      <FormatListBulletedSharpIcon
        sx={{
          fontSize: "1.2rem",
          transform: "translateY(-2px)",
          color: "white",
        }}
      />
    ),
  },
];
const form = [
  {
    title: "Form",
    contents: [
      { text: "Form Elements", url: "#" },
      { text: "Pro Form Elements", url: "#" },
      { text: "Form Layout", url: "#" },
      { text: "Pro Form Layout", url: "#" },
    ],
    icon: (
      <SegmentOutlinedIcon
        sx={{
          fontSize: "1.2rem",
          transform: "translateY(-2px)",
          color: "white",
        }}
      />
    ),
  },
];
const tables = [
  {
    title: "Tables",
    contents: [
      { text: "Tables", url: "#" },
      { text: "Pro Tables", url: "#" },
    ],
    icon: (
      <BackupTableOutlinedIcon
        sx={{
          fontSize: "1.2rem",
          transform: "translateY(-2px)",
          color: "white",
        }}
      />
    ),
  },
];
const page = [
  {
    title: "Pages",
    contents: [
      { text: "Settings", url: "#" },
      { text: "File Manager", url: "#" },
      { text: "Data Tables", url: "#" },
      { text: "Pricing Tables", url: "#" },
      { text: "Error Page", url: "#" },
      { text: "Faq's", url: "#" },
      { text: "Teams", url: "#" },
      { text: "Terms & Conditions", url: "#" },
      { text: "Mail Success", url: "#" },
    ],
    icon: (
      <FeedOutlinedIcon
        sx={{
          fontSize: "1.2rem",
          transform: "translateY(-2px)",
          color: "white",
        }}
      />
    ),
  },
];

const Navbar = ({ openNav, setOpenNav }) => {
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setOpenNav(!openNav);
  };
  const { isDarkMode } = useDark();
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpenNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <Box
        ref={navbarRef}
        sx={{
          backgroundColor: isDarkMode ? "#24303F" : "#1C2434",
          padding: "25px",
          display: { xs: openNav ? "flex" : "none", lg: "flex" },
          width: "18rem",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{ width: "11rem", marginBottom: "70px" }}
            component="img"
            src="https://demo.tailadmin.com/src/images/logo/logo.svg"
          />
          {openNav && (
            <KeyboardBackspaceOutlinedIcon
              sx={{
                color: "white",
                display: { xs: "flex", lg: "none" },
                cursor: "pointer",
                transform: "translateY(5px)",
              }}
              onClick={handleToggle}
            />
          )}
        </Box>
        <List sx={{ paddingLeft: "5px" }}>
          <Typography
            component={"h3"}
            sx={{
              color: "#8A99A4",
              marginBottom: "10px",
              paddingLeft: "10px",
              fontSize: "14px",
            }}
          >
            MENU
          </Typography>
          <ListItem>
            <CustomizedAccordions accordions={dashboard} />
          </ListItem>
          <ListItem
            sx={{
              transform: "translateX(-2px)",
              "&:hover": {
                backgroundColor: "#333A48",
              },
            }}
          >
            <CalendarMonthOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                color: "white",
                marginRight: "8px",
              }}
            />
            <LinkPage content={"Calender"} url={"#"} />
          </ListItem>
          <ListItem
            sx={{
              transform: "translateX(-2px)",
              "&:hover": {
                backgroundColor: "#333A48",
              },
            }}
          >
            <PersonOutlineOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                color: "white",
                marginRight: "8px",
              }}
            />
            <LinkPage content={"Profile"} url={"#"} />
          </ListItem>
          <ListItem>
            <CustomizedAccordions accordions={task} />
          </ListItem>
          <ListItem>
            <CustomizedAccordions accordions={form} />
          </ListItem>
          <ListItem>
            <CustomizedAccordions accordions={tables} />
          </ListItem>
          <ListItem>
            <CustomizedAccordions accordions={page} />
          </ListItem>
        </List>
        <List sx={{ paddingLeft: "10px" }}>
          <Typography
            component={"h3"}
            sx={{ color: "#8A99A4", marginBottom: "20px" }}
          >
            SUPPORT
          </Typography>
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#333A48",
              },
            }}
          >
            <EmailOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                color: "white",
                marginRight: "8px",
              }}
            />
            <LinkPage url={"#"} content={"Message"} />
          </ListItem>
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#333A48",
              },
            }}
          >
            <ArchiveOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                color: "white",
                marginRight: "8px",
              }}
            />
            <LinkPage url={"#"} content={"Inbox"} />
          </ListItem>
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#333A48",
              },
            }}
          >
            <ReceiptOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                color: "white",
                marginRight: "8px",
              }}
            />
            <LinkPage url={"#"} content={"Invoice"} />
          </ListItem>
        </List>
      </Box>
    </MuiThemeProvider>
  );
};

export default Navbar;

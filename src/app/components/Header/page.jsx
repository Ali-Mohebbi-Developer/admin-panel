"use client";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "../ThemeContext/page";
import Navbar from "../NavBar/page";
import Swal from "sweetalert2";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isText, setIsText] = useState("");
  const [notif, setNotif] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [message, setMessage] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleNotif = () => {
    setNotif(true);
    setOpenNotif(!openNotif);
  };
  const toggleMessage = () => {
    setMessage(true);
    setOpenMessage(!openMessage);
  };
  const handleTextChange = (e) => {
    setIsText(e.target.value);
  };

  const notifRef = useRef(null);
  const messageRef = useRef(null);
  const profileRef = useRef(null);
  const handleClickOutside = (event) => {
    if (notifRef.current && !notifRef.current.contains(event.target)) {
      setOpenNotif(false);
    }
    if (messageRef.current && !messageRef.current.contains(event.target)) {
      setOpenMessage(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  };
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2.75rem",
        backgroundColor: isDarkMode ? "#24303F" : "white",
      }}
    >
      <Box sx={{ position: "fixed", top: "0", left: "0", zIndex: "999" }}>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      </Box>
      <MenuOutlinedIcon
        onClick={handleOpenNav}
        sx={{
          display: { xs: "flex", lg: "none" },
          color: isDarkMode ? "white" : "black",
          padding: "0",
          cursor: "pointer",
          border: isDarkMode ? "1px solid white" : "1px solid black",
          padding: "5px",
          borderRadius: "2px",
          fontSize: "28px",
        }}
      />

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <SearchOutlinedIcon
          sx={{
            marginRight: "5px",
            transition: "0.4s",
            cursor: "pointer",
            color: isDarkMode ? "white" : "#64748B",
            "&:hover": { color: "#3C50E0" },
          }}
        />
        <TextField
          placeholder="Type to search..."
          type="text"
          variant="standard"
          onChange={handleTextChange}
          value={isText}
          InputProps={{
            disableUnderline: true,
            style: {
              color: isDarkMode ? "white" : "gray",
              backgroundColor: isDarkMode ? "#24303F" : "white",
              padding: 0,
            },
          }}
          InputLabelProps={{
            style: { color: "#ADB3BC" },
          }}
          sx={{
            "& .MuiInputBase-input::placeholder": {
              color: isDarkMode ? "#ADB3BC" : "gray",
            },
            "& .MuiInputBase-input:focus": {
              outline: "none",
              border: "none",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          onClick={toggleDarkMode}
          sx={{
            width: "3.5rem",
            height: "2rem",
            backgroundColor: "red",
            borderRadius: "50px",
            cursor: "pointer",
            backgroundColor: isDarkMode ? "#3C50E0" : "#E2E8F0",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              width: "1.5rem",
              height: "1.5rem",
              transition: "0.4s",

              transform: `translateY(.25rem)translateX(${
                isDarkMode ? "1.75rem" : ".25rem"
              })`,
              pointerEvents: "none",
              backgroundImage: isDarkMode
                ? "url('https://static.vecteezy.com/system/resources/previews/007/165/680/original/cute-purple-crescent-moon-for-dark-mode-icon-flat-design-for-app-label-illustration-free-vector.jpg')"
                : "url('https://banner2.cleanpng.com/lnd/20240528/si/axf7psb7o.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Box>
        <Box sx={{ marginX: "20px", position: "relative" }}>
          {openNotif && (
            <Box
              ref={notifRef}
              sx={{
                width: "200px",
                position: "absolute",
                top: "120%",
                right: "10px",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                backgroundColor: isDarkMode ? "#1C2434" : "white",
                zIndex: "999",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  borderBottom: "1px solid gray",
                  paddingBottom: "5px",
                  color: isDarkMode ? "white" : "gray",
                }}
                component={"h5"}
              >
                Notification
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  paddingY: "5px",
                  color: isDarkMode ? "white" : "gray",
                }}
              >
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim.
              </Typography>
              <Typography
                sx={{ fontSize: "12px", color: isDarkMode ? "white" : "gray" }}
              >
                12May , 2025
              </Typography>
            </Box>
          )}
          {!notif && (
            <>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "0",
                  right: "10%",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "0",
                  right: "10%",
                  borderRadius: "50%",
                  animation: "myAnim 1s ease infinite",
                  "@keyframes myAnim": {
                    "0%": { opacity: 0.8, transform: "scale(0.2)" },
                    "80%": { opacity: 0, transform: "scale(2)" },
                    "100%": { opacity: 0, transform: "scale(4)" },
                  },
                }}
              />
            </>
          )}
          <NotificationsNoneIcon
            ref={notifRef}
            onClick={toggleNotif}
            sx={{
              marginRight: "5px",
              transition: "0.4s",
              cursor: "pointer",
              color: isDarkMode ? "white" : "#64748B",
              backgroundColor: isDarkMode ? "#313D4A" : "#E2E8F0",
              padding: "6px",
              "&:hover": { color: "#3C50E0" },
              fontSize: "2.2rem",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box sx={{ marginRight: "20px", position: "relative" }}>
          {openMessage && (
            <Box
              ref={messageRef}
              sx={{
                width: "250px",
                position: "absolute",
                top: "120%",
                right: "10px",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                backgroundColor: isDarkMode ? "#1C2434" : "white",
                zIndex: "999",
              }}
            >
              <Typography
                sx={{
                  borderBottom: "1px solid gray",
                  paddingBottom: "5px",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                Messages
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "5px",
                }}
              >
                <Avatar
                  sx={{ width: "50px", height: "50px", marginRight: "10px" }}
                  src="https://demo.tailadmin.com/src/images/user/user-02.png"
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: isDarkMode ? "white" : "black",
                    }}
                  >
                    Mariya Desoja
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: isDarkMode ? "white" : "black",
                    }}
                  >
                    I like your confidence 💪
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    2 min ago
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
          {!message && (
            <>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "0",
                  right: "10%",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "0",
                  right: "10%",
                  borderRadius: "50%",
                  animation: "myAnim 1s ease infinite",
                  "@keyframes myAnim": {
                    "0%": { opacity: 0.8, transform: "scale(0.2)" },
                    "80%": { opacity: 0, transform: "scale(2)" },
                    "100%": { opacity: 0, transform: "scale(4)" },
                  },
                }}
              />
            </>
          )}
          <TextsmsOutlinedIcon
            ref={messageRef}
            onClick={toggleMessage}
            sx={{
              marginRight: "5px",
              transition: "0.4s",
              cursor: "pointer",
              color: isDarkMode ? "white" : "#64748B",
              backgroundColor: isDarkMode ? "#313D4A" : "#E2E8F0",
              padding: "6px",
              "&:hover": { color: "#3C50E0" },
              fontSize: "2.2rem",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box
            onClick={toggleProfile}
            ref={profileRef}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                Ali Mohebbi
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#8894A6" }}>
                Front-end Developer
              </Typography>
            </Box>
            <Avatar
              sx={{ marginRight: "10px" }}
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw2zQhY2TCLmxnETVDng6dnA&ust=1726776829726000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDOttWozYgDFQAAAAAdAAAAABAE"
            />
            <KeyboardArrowDownOutlinedIcon sx={{ color: "#64748B" }} />
          </Box>
          {openProfile && (
            <Box
              ref={profileRef}
              sx={{
                width: "250px",
                position: "absolute",
                top: "140%",
                right: "10px",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                backgroundColor: isDarkMode ? "#1C2434" : "white",
                color: isDarkMode ? "white" : "#64748b",
                zIndex: "999",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: "10px",
                  transition: "0.4s",
                  cursor: "pointer",
                  ":hover": { color: "#3C50E0" },
                }}
              >
                <PersonOutlineIcon
                  sx={{ fontSize: "1.6rem", marginRight: "10px" }}
                />
                <Typography sx={{ fontSize: "1.1rem" }}>My Profile</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: "10px",
                  transition: "0.4s",
                  cursor: "pointer",
                  ":hover": { color: "#3C50E0" },
                }}
              >
                <ContactsIcon
                  sx={{ fontSize: "1.6rem", marginRight: "10px" }}
                />
                <Typography sx={{ fontSize: "1.1rem" }}>My Contacts</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                  transition: "0.4s",
                  cursor: "pointer",
                  ":hover": { color: "#3C50E0" },
                  borderBottom: "1px solid gray",
                }}
              >
                <SettingsIcon
                  sx={{
                    fontSize: "1.6rem",
                    marginRight: "10px",
                    ":hover": { color: "#3C50E0" },
                  }}
                />
                <Typography sx={{ fontSize: "1.1rem" }}>
                  Account Settings
                </Typography>
              </Box>
              <Box
                onClick={handleLogOut}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: "10px",
                  transition: "0.4s",
                  cursor: "pointer",
                  ":hover": { color: "#FF0000" },
                }}
              >
                <LogoutIcon sx={{ fontSize: "1.6rem ", marginRight: "10px" }} />
                <Typography sx={{ fontSize: "1.1rem" }}>Log Out</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

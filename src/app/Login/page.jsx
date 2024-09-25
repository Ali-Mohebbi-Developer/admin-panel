"use client";
import { Box, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const url = new URL("https://66f3bb2377b5e889709697e9.mockapi.io/user");
      url.searchParams.append("email", values.email);
      url.searchParams.append("password", values.password);

      fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((tasks) => {
          if (tasks === undefined) {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: "The email address or password you entered is incorrect. Please try again.",
            });
          } else {
            Swal.fire({
              title: "Welcome",
              text: "You login is successful",
              icon: "success",
            });
            setTimeout(() => {
              window.location.href = "/Ecommerce";
            }, 1500);
          }
        })
        .catch((error) => {});
    },
  });

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right , rgba(127,229,253,1) 0%, rgba(28,36,52,1) 100%)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid2 container spacing={2}>
          <Grid2
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
                transform: "translateX(20%)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "34px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                Welcome back!
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "white" }}>
                Enter your username and password to log in to your admin panel
              </Typography>
              <Box
                sx={{
                  marginY: "30px",
                  padding: "5px 10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "#37586A",
                  color: "white",
                  borderRadius: "10px",
                  transition: "0.4s",
                  ":hover": { opacity: "80%" },
                }}
              >
                <GoogleIcon sx={{ marginRight: "5px", fontSize: "18px" }} />
                <Typography>Sign Up with Google</Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  sx={{
                    width: {xs:"60%" , lg:"28rem"},
                    marginY: "10px",
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "lightgray",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white",
                    },
                  }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  variant="outlined"
                  sx={{
                    width: {xs:"60%" , lg:"28rem"},
                    marginY: "10px",
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "lightgray",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white",
                    },
                  }}
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />

                <Button
                  type="submit"
                  sx={{
                    marginY: "20px",
                    backgroundColor: "#3e43fb",
                    color: "white",
                    width: {xs:"60%" , lg:"28rem"},
                    transition: "0.4s",
                    padding: "15px 20px",
                    borderRadius: "10px",
                    ":hover": { backgroundColor: "#3134B5" },
                  }}
                >
                  Sign Up
                </Button>
              </form>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ marginRight: "10px", color: "#555" }}>
                  Dont have account yet?
                </Typography>
                <Link
                  href="/SignUp"
                  sx={{
                    textDecoration: "none",
                    color: "#E6E6E6",
                    cursor: "pointer",
                    ":hover": { color: "white" },
                  }}
                >
                  Sign Up
                </Link>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "80%" }}>
              <Image
                alt="logo"
                width="500"
                height="400"
                src="/authentication-5.png"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Login;

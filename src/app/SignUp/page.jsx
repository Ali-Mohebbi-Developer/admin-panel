"use client";

import { Box, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch("https://66f3bb2377b5e889709697e9.mockapi.io/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((task) => {
          console.log("sadsad");

          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "User registration was successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        })
        .catch((error) => {
          Swal.fire({
            position: "bottom-end",
            icon: "error",
            title: "User registration failed",
            text: error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  });
  const [showPass, setShowPass] = useState();
  const [showConfirmPass, setShowConfirmPass] = useState();

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
                Sign up
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "white" }}>
                Register to log in to your admin panel
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
                  label="Name"
                  name="name"
                  variant="outlined"
                  sx={{
                    width: "100%",
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  sx={{
                    width: "100%",
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

                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    variant="outlined"
                    type={showPass ? "text" : "password"}
                    sx={{
                      width: "100%",
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <Box
                    onClick={() => setShowPass(!showPass)}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      color: "black",
                      cursor: "pointer",
                      color: showPass ? "#3240FF" : "white",
                    }}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </Box>
                </Box>

                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    variant="outlined"
                    type={showConfirmPass ? "text" : "password"}
                    sx={{
                      width: "100%",
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
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                  <Box
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      color: "black",
                      cursor: "pointer",
                      color: showConfirmPass ? "#3240FF" : "white",
                    }}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </Box>
                </Box>

                <Button
                  type="submit"
                  sx={{
                    marginY: "20px",
                    backgroundColor: "#3e43fb",
                    color: "white",
                    width: "100%",
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
                  Have an account
                </Typography>
                <Link
                  href="/"
                  sx={{
                    textDecoration: "none",
                    color: "#E6E6E6",
                    cursor: "pointer",
                    ":hover": { color: "white" },
                  }}
                >
                  Sign In
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
                src="/authentication-65.png"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default SignUp;

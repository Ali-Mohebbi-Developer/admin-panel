"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { usePathname } from "next/navigation";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled(({ theme, customBgColor, ...props }) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme, customBgColor }) => ({
  backgroundColor: customBgColor || "transparent",
  "&:hover": {
    backgroundColor: "#333A48",
  },
  color: "white",
  padding: "0",

  paddingRight: "5px",
  borderRadius: "2px",
  transform: "translateX(-10px)",
  width: "230px",
  display: "flex",
  alignItems: "center",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transition: "transform 0.3s ease",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    transition: "margin-left 0.3s ease",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "transparent",
  marginLeft: "15px",
  padding: "10px",
  color: "rgb(138,153,175)",
}));

export default function CustomizedAccordions({ accordions = [] }) {
  const [expanded, setExpanded] = React.useState(false);
  const pathname = usePathname();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {Array.isArray(accordions) &&
        accordions.map((accordion, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              customBgColor={
                expanded === `panel${index}`
                  ? "#333A48"
                  : accordion.title === "Dashboard"
                  ? "#333A48"
                  : "transparent"
              }
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {accordion.icon && (
                  <span style={{ marginRight: "8px" }}>{accordion.icon}</span>
                )}
                <Typography>{accordion.title}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {accordion?.contents?.map((content, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    paddingY: "5px",
                    "&:hover": {
                      cursor: "pointer",
                      "& a": {
                        color: "white !important",
                      },
                    },
                  }}
                >
                  <Link
                    href={content.url}
                    sx={{
                      color:
                        pathname === content.url ? "white" : "rgb(138,153,175)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {content.text}
                  </Link>
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}

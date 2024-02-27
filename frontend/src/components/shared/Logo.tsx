import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "auto",
        gap: "8px",
      }}
    >
      <Link to={"/"} className="logo">
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            marginRight: "auto",
            textShadow: "2px 2px 20px #000",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "26px",
            }}
          >
            IMAGITALE
          </span>
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;

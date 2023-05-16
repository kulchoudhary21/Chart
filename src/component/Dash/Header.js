import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
export default function Header() {
  return (
    <AppBar position="static" >
      <Toolbar sx={{margin:''}}>
        <HomeIcon />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            fontFamily: "monospace",
            letterSpacing: ".2rem",
            fontWeight: "700",
            textDecoration: "none",
            color: "white",
            padding: "5px",
          }}
        >
          Vuexy
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            fontFamily: "monospace",
            fontWeight: "50",
            padding: "18px",
            textDecoration: "none",
            color: "white",
          }}
        >
          home
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="/about"
          sx={{
            fontFamily: "monospace",
            fontWeight: "50",
            textDecoration: "none",
            color: "white",
          }}
        >
          about
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

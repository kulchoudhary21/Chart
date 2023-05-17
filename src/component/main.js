import React from "react";
import Header from "./Dash/Header";
import Footer from "./Dash/Footer";
import BarChart from "./Charts/BarChart";
import Chart1 from "./Charts/Chart1";
import { Box, Grid } from "@mui/material";
import { BarSeries } from "@devexpress/dx-react-chart";
function Main() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          margin: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Chart1 />
          {/* <BarChart /> */}
        </Grid>
      </Box>

      <Footer />
    </div>
  );
}

export default Main;



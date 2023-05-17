import React from "react";
import {
  BarSeries,
  Chart as ReactChart,
  ValueAxis,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Grid, Paper } from "@mui/material";

function BarChart() {
  const data = [
    { argument: "Monday", value: 100 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 },
  ];

  return (
      <Grid item xs={8}>
        <Paper
          sx={{
            margin: "20px",
            boxShadow: 4,
            elevation: 10,
            padding: "20px",
          }}
        >
          <ReactChart data={data}>
            <ArgumentAxis />
            <ValueAxis />
            <BarSeries valueField="value" argumentField="argument" />
          </ReactChart>
        </Paper>
      </Grid>
  );
}

export default BarChart;

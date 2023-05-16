import styled from "@emotion/styled";
import {
  BarSeries,
//   Chart,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Doughnut, Pie } from "react-chartjs-2";

import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { ArgumentAxis, PieSeries } from "@devexpress/dx-react-chart";
import { ArcElement } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import Chart from "chart.js/auto";
// import "chartjs-adapter-luxon";

function Chart1() {
  Chart.register(StreamingPlugin);

  const Item = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    width: 100%;
    height: 100px;
  `;
  const datas = [
    { argument: "Monday", value: 100 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 },
  ];

  const data2 = [20, 10, 8, 10, 30, 3, 1, 12, 5, 2, 1, 2];

  //method 2

  const names = [
    "Burn/ Charity",
    "for sale",
    "Liquidity",
    "Team",
    "Locked",
    "Released/mo",
    "charity",
    "Marketing/Sales",
    "Tax on Sales",
    "Charity",
    "Liquidity",
    "to Tokes Holder",
  ];

  let total = data2.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(total);

  let labelss = data2.map(
    (value, index) => Math.round((value / total) * 100) + "%"
  );
  const data4 = data2.map((item, index) => {
    return names[index] + " " + labelss[index];
  });

  const data = {
    labels: data4,
    datasets: [
      {
        data: data2,

        backgroundColor: [
          "red",
          "yellow",
          "blue",
          "black",
          "orange",
          "grey",
          "green",
          "salmon",
          "grey",
          "lightgreen",
          "pink",
          "yellow",
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* <Paper
            sx={{
              margin: "20px",
              boxShadow: 4,
              elevation: 10,
              padding: "20px",
            }}
          >
            <Chart data={datas}>
              <ArgumentAxis />
              <ValueAxis />
              <BarSeries valueField="value" argumentField="argument" />
            </Chart>
          </Paper> */}
        </Grid>
        <Grid item xs={4}>
          <Paper
            variant="oulined"
            sx={{ boxShadow: 4, margin: "20px", padding: "20px" }}
          >
            {/* <Chart data={data}> */}
            {/* <Typography></Typography> */}
            <Doughnut data={data} />
            {/* // valueField="value"
                // argumentField="argument"
                // innerRadius={0.7} */}

            {/* </Chart> */}
            {/* <Doughnut data={data}></Doughnut> */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Chart1;

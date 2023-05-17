import styled from "@emotion/styled";
import {
  BarSeries,
  Chart as ReactChart,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Doughnut, Pie } from "react-chartjs-2";
import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

function Chart1() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((resolve) => setState(resolve))
      .catch((reject) => console.log("Error", reject));
  }, []);

  if (state != null) {
    state["data"].data.map((item) => {
      console.log(item.Year);
    });
  }
  const data2 = [];
  // const data2 = [20, 10, 8, 10, 30, 3, 1, 12, 5, 2, 1, 2];
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

  let total = 0;

  if (state != null) {
    state["data"].data.map((item) => {
      data2.push(item.Population);
    });


    total = data2.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(total);
  }

  let labelss = data2.map(
    (value, index) => Math.round((value / total) * 100) + "%"
  );
 
  const data4 = data2.map((item, index) => {
    return names[index] + " " + labelss[index];
  });

  // console.log("dsd,", data4);
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
    <Grid item xs={4}>
      <Paper
        variant="oulined"
        sx={{ boxShadow: 4, margin: "20px", padding: "20px" }}
      >
        <Doughnut data={data} />
      </Paper>
    </Grid>
  );
}

export default Chart1;

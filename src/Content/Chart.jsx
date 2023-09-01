import React from 'react';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function Chart() {
  const data = {
    labels: ["Total Of Won Matches", "Total Of Lose Matches", "Total Canceled Matches"],
    datasets: [
      {
        data: [10, 22, 54],
        backgroundColor: [
          "#ffc4008c",
          "#00a3ff82",
          "#ff00004f",
        ],
        hoverBackgroundColor: ["#ffc4008c", "#00a3ff82", "#ff00004f"],
        borderRadius: 8,
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#F8F8F8",
          padding: 18,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default Chart;

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
function DounutChart() {
  const data = {
    labels: ["Total Of Won Matches", "Total Of Lose Matches", "Total Canceled Matches"],
    datasets: [
      {
        data: [10, 22, 54],
        backgroundColor: [
          "#00A3FF",
          "#0CA593",
          "#501AE9",
        ],
        hoverBackgroundColor: ["#00A3FF", "#0CA593", "#501AE9"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DounutChart;

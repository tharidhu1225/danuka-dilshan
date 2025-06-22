import React from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required components including Filler
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler
);

export default function LineChart({ data, title }) {
  const labels = data.map(d => d.month);
  const counts = data.map(d => d.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: counts,
        fill: true, // <-- fill requires Filler plugin
        backgroundColor: "rgba(59, 130, 246, 0.3)", // blue with opacity
        borderColor: "rgba(59, 130, 246, 1)", // solid blue
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: title,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

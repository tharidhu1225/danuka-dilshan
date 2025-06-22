import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BlogChart({ data }) {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [{
      label: "New Blogs",
      data: data.map(item => item.count),
      backgroundColor: "#10b981",
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={chartData} options={options} />;
}

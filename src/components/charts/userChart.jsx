import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function UserChart({ data }) {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [{
      label: "Active Users",
      data: data.map(item => item.count),
      borderColor: "#3b82f6",
      backgroundColor: "#3b82f6",
      tension: 0.3,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={chartData} options={options} />;
}

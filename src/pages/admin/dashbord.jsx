import { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "../../components/charts/LineChart";

export default function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setUserData(getMonthlyCounts(res.data, "createdAt"));
      })
      .catch((err) => console.error(err));

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
      .then((res) => {
        setBlogData(getMonthlyCounts(res.data, "dateTime"));
      })
      .catch((err) => console.error(err));
  }, []);

  if (!userData || !blogData)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-t-black border-gray-200 rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="space-y-8 px-4 md:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-md p-4 h-64 sm:h-72 md:h-80 lg:h-96">
          <h2 className="text-base sm:text-lg font-semibold mb-4">Users Over Last 12 Months</h2>
          <LineChart title="Users" data={userData} />
        </div>

        <div className="bg-white shadow rounded-md p-4 h-64 sm:h-72 md:h-80 lg:h-96">
          <h2 className="text-base sm:text-lg font-semibold mb-4">Blogs Over Last 12 Months</h2>
          <LineChart title="Blogs" data={blogData} />
        </div>
      </div>
    </div>
  );
}

function getMonthlyCounts(data, dateField) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const counts = months.map((m) => ({ month: m, count: 0 }));

  data.forEach((item) => {
    const date = new Date(item[dateField]);
    if (!date || isNaN(date)) {
      console.warn("Invalid date for item:", item);
      return;
    }
    const monthIndex = date.getMonth();
    counts[monthIndex].count += 1;
  });

  return counts;
}

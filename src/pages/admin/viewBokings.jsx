import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdAccessTime, MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const bookingsDummy = [
  {
    id: 1,
    clientName: "Kasun Perera",
    date: "2025-06-25",
    time: "2:00 PM",
    location: "Colombo",
    status: "confirmed",
    package: "Wedding Package"
  },
  {
    id: 2,
    clientName: "Nadeesha Silva",
    date: "2025-06-28",
    time: "10:00 AM",
    location: "Galle",
    status: "pending",
    package: "Birthday Shoot"
  },
];

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // In real scenario: fetch from API
    setBookings(bookingsDummy);
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">📸 My Bookings</h1>

      <h1 className="text-2xl font-bold mb-6 text-red-700">This Page Was Currently Unavailable </h1>

      <h1 className="text-2xl font-bold mb-6">Coming Soon New Update</h1>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-md shadow-md p-4 space-y-3">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaUser className="text-blue-600" /> {booking.clientName}
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <AiOutlineCalendar /> {booking.date}
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <MdAccessTime /> {booking.time}
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <MdLocationOn /> {booking.location}
            </div>

            <div className="text-sm text-gray-600 italic">
              📦 {booking.package}
            </div>

            <StatusBadge status={booking.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const colorMap = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorMap[status] || "bg-gray-200 text-gray-800"}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

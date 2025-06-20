import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend using Axios
    const fetchUsers = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users"); // Adjust the endpoint
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">User Management</h1>

      <div className="bg-white p-6 rounded shadow">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-3">Profile</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Role</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="border p-3 flex items-center">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border p-3">{user.firstName} {user.lastName}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3 capitalize">{user.type}</td>
                <td className="border p-3">
                  {user.isBlocked ? (
                    <span className="text-red-600 font-bold">Blocked</span>
                  ) : (
                    <span className="text-green-600 font-bold">Active</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

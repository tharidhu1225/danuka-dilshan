import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); // loading start
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users", formData)
      .then((res) => {
        if (res.data.message === "User created") {
          toast.success("User registered successfully!");
          setTimeout(() => {
            window.location.href = "/login";
          }, 1500);
        } else {
          toast.error(res.data.message || "User not created");
        }
      })
      .catch(() => {
        toast.error("Error while registering");
      })
      .finally(() => {
        setLoading(false); // loading end
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md bg-white text-black rounded-2xl p-8 shadow-lg space-y-6">
        <div className="text-center">
          <img src="/logo.jpg" alt="Logo" className="w-16 h-16 mx-auto rounded-full mb-2" />
          <h1 className="text-2xl font-bold">Register to <span className="text-black">Dilsha Blog</span></h1>
          <p className="text-sm text-gray-500">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Last Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md transition duration-200 
              ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800 text-white'}
            `}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-black underline">Login</Link>
        </div>
      </div>
    </div>
  );
}

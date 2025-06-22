import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👁️ icon

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👁️
  const [loading, setLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      setLoading(true);
      axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/google", {
        token: res.access_token
      }).then((res) => {
        if (res.data.message === "User created") {
          toast.success("Your account is created, now you can login via Google.");
        } else {
          localStorage.setItem("token", res.data.token);
          if (res.data.user.type === "admin") {
            window.location.href = "/admin";
          } else {
            window.location.href = "/home/dash";
          }
        }
      }).catch(() => {
        toast.error("Google login failed");
      }).finally(() => {
        setLoading(false);
      });
    }
  });

  function login() {
    setLoading(true);
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
      email,
      password
    }).then((res) => {
      if (res.data.user == null) {
        toast.error(res.data.message);
        return;
      }
      toast.success("Login success");
      localStorage.setItem("token", res.data.token);
      if (res.data.user.type === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/home/dash";
      }
    }).catch(() => {
      toast.error("Login failed");
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md bg-white text-black rounded-2xl p-8 shadow-lg space-y-6">
        <div className="text-center">
          <img src="/logo.jpg" alt="Logo" className="w-16 h-16 mx-auto rounded-full mb-2" />
          <h1 className="text-2xl font-bold">Welcome to <span className="text-black">Dilsha Blog</span></h1>
          <p className="text-sm text-gray-500">Login to your account</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
              disabled={loading}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              disabled={loading}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash /> }
            </span>
          </div>

          <button
            onClick={login}
            disabled={loading}
            className={`w-full py-2 rounded-md transition duration-200
              ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800 text-white'}`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Logging in...
              </span>
            ) : "Login"}
          </button>

          <button
            onClick={() => googleLogin()}
            disabled={loading}
            className="w-full border border-black py-2 rounded-md hover:bg-black hover:text-white transition duration-200"
          >
            {loading ? "Please wait..." : "Login with Google"}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="text-black underline">Register</Link>
        </div>
      </div>
    </div>
  );
}

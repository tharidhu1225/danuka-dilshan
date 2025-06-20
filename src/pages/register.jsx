import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Register() {
 
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={login}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>

          <button
            onClick={() => googleLogin()}
            className="w-full border border-black py-2 rounded-md hover:bg-black hover:text-white transition duration-200"
          >
            Login with Google
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="text-black underline">Register</Link>
        </div>
      </div>
    </div>
  );
}

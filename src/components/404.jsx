import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Icon */}
      <FiAlertTriangle className="text-red-500" size={100}/>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>

      {/* Message */}
      <p className="text-gray-600 text-lg text-center max-w-md mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-sky-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center animate-fadeIn backdrop-blur-md">
        {/* Logo or Icon */}
        <div className="mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Sweet Home"
            className="w-20 h-20 mx-auto animate-pop"
          />
        </div>

        {/* Welcome Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4 tracking-tight">
          Welcome to Elder Care Sweet Home
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
          A warm place where care, compassion, and comfort come together. 💚
        </p>

        {/* Button appears after delay */}
        {showButton && (
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md animate-fadeInSlow"
          >
            Go to Home
          </button>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInSlow {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out forwards;
          }
          .animate-fadeInSlow {
            animation: fadeInSlow 1s ease-out forwards;
          }
          .animate-pop {
            animation: pop 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

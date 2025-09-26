import React from "react";
import "./shimmer.css"; // 👈 we'll add shimmer animation here

export default function Loading() {
  return (
    <div className="max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex space-x-4 animate-shimmer">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gray-300 shimmer"></div>

        {/* Text Placeholders */}
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded shimmer w-3/4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded shimmer w-full"></div>
            <div className="h-3 bg-gray-300 rounded shimmer w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

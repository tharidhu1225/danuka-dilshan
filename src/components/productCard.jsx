import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
 
  return (
    <Link to={`/home/productInfo/${product.productId}`} className="w-full max-w-xl mx-auto mt-20">
      <div className="w-full bg-[#000000] rounded-lg shadow-md p-4 sm:p-6 mb-4 transition-all duration-300 hover:shadow-lg">
        {/* Header - Profile and Date */}
        <div className="flex items-center gap-3 mb-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-200">{product.author || "Dhanuka Dilshan"}</h2>
            <p className="text-xs text-gray-50">{product.dateTime}</p>
          </div>
        </div>

        {/* Post Image */}
        {product.Images?.length > 0 && (
          <img
            src={product.Images[0] || "/placeholder.jpg"}
            alt={product.postName}
            className="w-full max-h-80 object-cover rounded-lg mb-3"
          />
        )}

        {/* Post Content */}
        <h1 className="text-lg font-bold text-gray-100 mb-2">{product.postName}</h1>
        <p className="text-sm text-gray-50 mb-3 leading-relaxed">{product.description}</p>        
      </div>
    </Link>
  );
}

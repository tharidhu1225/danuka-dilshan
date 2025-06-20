import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imgeSlider";

export default function ProductOverview() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`)
      .then((res) => {
        if (!res.data) {
          setStatus("not-found");
        } else {
          setProduct(res.data);
          setStatus("found");
        }
      })
      .catch(() => setStatus("not-found"));
  }, [productId]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      {status === "loading" && (
        <div className="w-full h-full flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
      )}
      {status === "not-found" && (
        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold text-gray-700">404 - Product Not Found</h1>
        </div>
      )}
      {status === "found" && product && (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 lg:hidden">{product.postName}</h1>
            <div className="w-full max-w-md lg:max-w-lg">
              <ImageSlider Images={product.Images} />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-800 hidden lg:block">{product.postName}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";


export default function EditProductForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate("/admin/products");
  }

  const [productId] = useState(product.productId);
  const [postName, setProductName] = useState(product.postName);
  const [imageFiles, setImageFiles] = useState([]);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    if (!postName || !description) {
      toast.error("Please fill in all fields");
      return;
    }

    const promisesArray = [];
    let imageUrls = product.images;

    if (imageFiles.length > 0) {
      for (let i = 0; i < imageFiles.length; i++) {
        promisesArray[i] = uploadMediaToSupabase(imageFiles[i]);
      }
      imageUrls = await Promise.all(promisesArray);
    }

    const productData = {
      productId,
      postName,
      Images: imageUrls,
      description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        import.meta.env.VITE_BACKEND_URL + "/api/products/" + product.productId,
        productData,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      toast.success("Post updated successfully");
      navigate("/admin/products");
    } catch (err) {
      toast.error("Failed to update post");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Edit Post Form
        </h1>

        {/* Post ID (Disabled) */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 text-sm font-medium mb-1">Post ID</label>
          <input
            disabled
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-500 bg-gray-100"
            value={productId}
          />
        </div>

        {/* Event Name */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 text-sm font-medium mb-1">Event Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={postName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 text-sm font-medium mb-1">Upload Images</label>
          <input
            type="file"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 cursor-pointer"
            onChange={(e) => setImageFiles(e.target.files)}
            multiple
          />
        </div>

        {/* Description */}
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 text-sm font-medium mb-1">Description</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          onClick={handleSubmit}
        >
          Update Post
        </button>
      </div>
    </div>
  );
}

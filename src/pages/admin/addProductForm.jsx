import { useState, useEffect } from "react";
import uploadMediaToSupabase from "../../utils/mediaUpload";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [postNumber, setPostNumber] = useState(1);
  const [postName, setPostName] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const navigate = useNavigate();

  // Load post number when the component mounts
  useEffect(() => {
    const storedPostNumber = localStorage.getItem("lastPostNumber");
    const nextPostNumber = storedPostNumber ? parseInt(storedPostNumber) + 1 : 1;
    
    setPostNumber(nextPostNumber);
    setProductId(`POST-${nextPostNumber}`);
    setDateTime(new Date().toLocaleString());
  }, []);

  async function handleSubmit() {
    if (!postName | !description) {
      toast.error("Event Name & Description fields are required!");
      return;
    }

    const promisesArray = imageFiles.map((file) => uploadMediaToSupabase(file));
    const imageUrls = await Promise.all(promisesArray);

    const product = {
      productId,
      postName,
      Images: imageUrls,
      description,
      dateTime,
    };

    const token = localStorage.getItem("token");
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/products",
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Save new post number in localStorage
      localStorage.setItem("lastPostNumber", postNumber.toString());

      navigate("/admin/products");
      toast.success("Successfully Posted!");
    } catch (err) {
      toast.error("Failed to List Post");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-2xl bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Add Post Form
        </h1>
        <div className="grid gap-4">


          {/* Product ID (Read-Only) */}
          <div className="flex flex-col">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 bg-gray-100 cursor-not-allowed"
              value={productId}
              hidden
            />
          </div>

          {/* Date & Time (Read-Only) */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium">Date & Time</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 bg-gray-100 cursor-not-allowed"
              value={dateTime}
              readOnly
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium">Event Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Event Name"
              value={postName}
              onChange={(e) => setPostName(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium">Upload Images</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              multiple
              onChange={(e) => setImageFiles(Array.from(e.target.files))}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium">Description</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Post Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="w-full md:w-auto px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-300"
              onClick={handleSubmit}
            >
              List Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

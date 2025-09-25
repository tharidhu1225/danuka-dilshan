import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PostOverview() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
        setPost(res.data.product);
        setSelectedImageIndex(0);
      } catch (err) {
        setError("Oops! Failed to load this post. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-600 text-xl animate-pulse">Loading post...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
        <p className="text-red-500 text-center text-xl max-w-lg">{error}</p>
      </div>
    );

  if (!post)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
        <p className="text-gray-600 text-xl text-center max-w-lg">Sorry, we couldn’t find that post.</p>
      </div>
    );

  const images = post.Images && post.Images.length > 0 ? post.Images : [{ url: "/placeholder.jpg" }];

  return (
    <main className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image + Event Name Section */}
      <section className="relative w-full bg-gray-100 rounded-t-lg select-none">
        <img
          src={images[selectedImageIndex].url}
          alt={`${post.postName} Image ${selectedImageIndex + 1}`}
          className="w-full h-[60vh] md:h-[75vh] lg:h-[80vh] object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105"
          loading="lazy"
          draggable={false}
        />

        {/* Event Name Badge */}
        {post.eventName && (
          <div className="absolute top-6 left-6 bg-black bg-opacity-75 rounded-lg px-5 py-3 max-w-xs md:max-w-md shadow-lg">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg truncate">
              {post.eventName}
            </h2>
          </div>
        )}

        {/* Image Thumbnails */}
        <div className="flex justify-center gap-4 p-4 bg-white border-t overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {images.map((img, idx) => (
            <button
              key={img.public_id || idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`w-24 h-24 rounded-lg overflow-hidden border-4 transition-transform transform ${
                idx === selectedImageIndex
                  ? "border-blue-600 scale-110"
                  : "border-transparent hover:scale-105"
              } focus:outline-none focus:ring-4 focus:ring-blue-400`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={img.url}
                alt={`${post.postName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            </button>
          ))}
        </div>

        {/* Creative Facebook Link Button */}
        {post.fbLink && (
          <a
            href={post.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed md:absolute bottom-6 left-1/2 md:left-auto md:right-6 transform -translate-x-1/2 md:translate-x-0 flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400 z-50 max-w-xs md:max-w-none mx-4"
            aria-label="Visit Facebook page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.408 24 24 23.408 24 22.676V1.325C24 .592 23.408 0 22.675 0z" />
            </svg>
            <span className="font-semibold text-lg hidden sm:inline">Visit Facebook Page</span>
          </a>
        )}
      </section>

      {/* Post Details Section */}
      <section className="px-6 md:px-12 py-12 max-w-4xl mx-auto prose prose-lg text-gray-700">
        <div className="flex flex-col md:flex-row justify-between text-gray-500 mb-12 gap-6 font-medium">
          <div>
            <span className="font-semibold">Author:</span> {post.author || "Dilshan"}
          </div>
          <div>
            <span className="font-semibold">Published:</span>{" "}
            {new Date(post.dateTime).toLocaleDateString()}
          </div>
        </div>

        <article>
          <p>{post.description}</p>
        </article>

        <div className="mt-16 flex justify-start">
          <Link
            to="/blogs"
            className="text-blue-600 hover:text-blue-800 font-semibold transition focus:outline-none focus:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}

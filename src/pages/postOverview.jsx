import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSwipeable } from "react-swipeable";

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

  const images = post?.Images?.length ? post.Images : [{ url: "/placeholder.jpg", public_id: "placeholder" }];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSelectedImageIndex((prev) => (prev + 1) % images.length);
    },
    onSwipedRight: () => {
      setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    trackMouse: true,
  });

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

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section
  {...handlers}
  className="relative w-full h-screen overflow-hidden bg-gray-100 flex items-center justify-center select-none"
  aria-label="Swipe images"
>
  <img
    src={images[selectedImageIndex].url}
    alt={post.postName}
    className="w-full h-full object-contain"
    draggable={false}
  />
  {/* Image Count Indicator */}
  <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-semibold select-none">
    {selectedImageIndex + 1} / {images.length}
  </div>

  {/* Swipe Hint */}
  {images.length > 1 && (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 text-white px-4 py-1 rounded-full text-sm select-none pointer-events-none">
      ← Swipe left or right →
    </div>
  )}
</section>

      

      {/* Facebook Link */}
      {post.fbLink && (
        <div className="mt-0 md:mt-5 flex justify-center">
          <a
            href={post.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-md"
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
            Visit Facebook Page
          </a>
        </div>
      )}

      {/* Post Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        {/* Meta Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 text-sm text-gray-500 gap-3">
          <div>
            <span className="font-medium text-gray-700">Author:</span> {post.author || "Dilshan"}
          </div>
          <div>
            <span className="font-medium text-gray-700">Published:</span>{" "}
            {new Date(post.dateTime).toLocaleDateString()}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{post.postName}</h2>

        {/* Description */}
        <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>{post.description}</p>
        </article>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/blogs"
            className="text-blue-600 hover:text-blue-800 font-semibold transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}

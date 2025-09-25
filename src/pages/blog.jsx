import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from backend
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
        const blogPosts = response.data.products.map((post) => ({
          _id: post._id,
          title: post.postName,
          summary: post.description,
          imageUrl: post.Images?.[0]?.url || "/placeholder.jpg",
          date: post.dateTime,
          author: "Dilshan", // You can change this if you have author field
        }));
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-50 pb-12">
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 lg:h-96 overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Blog
          </h1>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading blogs...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No blog posts found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                to={`/blogs/${post._id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="w-full aspect-video overflow-hidden rounded-t-2xl bg-gray-100">
  <img
    src={post.imageUrl}
    alt={post.title}
    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
  />
</div>

                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>by {post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <span className="text-blue-600 font-semibold">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

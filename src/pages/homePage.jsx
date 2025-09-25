import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeaturedPosts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
        // Assuming backend returns products in response.data.products
        const posts = response.data.products.map((post) => ({
          _id: post._id,
          postName: post.postName || post.title || "Untitled",
          description: post.description || "No description available.",
          imageUrl: post.Images?.[0]?.url || "/placeholder.jpg",
        }));
        setFeaturedPosts(posts);
      } catch (err) {
        console.error("Failed to fetch featured posts:", err);
        setError("Failed to load featured posts.");
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedPosts();
  }, []);
 
  

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg animate-fadeIn">
            Welcome to Dilshan Blog
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl mt-4 max-w-2xl animate-fadeIn delay-150">
            Discover amazing blogs, stories, and insights from our community.
          </p>
          <Link
            to="/blogs"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition animate-fadeIn delay-300"
          >
            Explore Blogs
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Welcome to Dilshan Blog, your one-stop destination for insightful content, trending blogs, and creative ideas. Join our community to explore stories that matter.
          </p>
        </div>
      </section>

     {/* Featured Blogs */}
<section className="py-16 bg-gray-100 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold mb-10 text-center">Featured Posts</h2>

    {loading ? (
      <p className="text-center text-gray-500 text-lg">Loading featured posts...</p>
    ) : error ? (
      <p className="text-center text-red-500 text-lg">{error}</p>
    ) : featuredPosts.length === 0 ? (
      <p className="text-center text-gray-500 text-lg">No featured posts found.</p>
    ) : (
      <>
        {/* Top 3 Featured Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {featuredPosts.slice(0, 3).map((post) => (
    <Link
      key={post._id}
      to={`/blogs/${post._id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
    >
      <div className="w-full aspect-video overflow-hidden rounded-t-2xl bg-gray-100">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{post.postName}</h3>
        <p className="text-gray-600 text-sm">{post.description}</p>
      </div>
    </Link>
  ))}
</div>

      </>
    )}
  </div>
</section>


      {/* Contact CTA */}
      <section className="py-16 bg-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

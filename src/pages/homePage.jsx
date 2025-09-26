import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroSection from "../components/homeHero";
import EmptyState from "../components/emptyState";
import Loading from "../components/loading";

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
      <HeroSection/>

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
      <Loading/>
    ) : error ? (
      <p className="text-center text-red-500 text-lg">{error}</p>
    ) : featuredPosts.length === 0 ? (
      <EmptyState/>
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

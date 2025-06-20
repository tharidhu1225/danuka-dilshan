import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PhotographerBlog</h1>
        <p className="text-gray-400 max-w-xl text-lg mb-8">
          Capturing moments through the lens. Explore the stories behind each frame.
        </p>
        <div className="space-x-4">
          <Link to="/blogs">
            <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition">View Blog</button>
          </Link>
          <Link to="/contact">
            <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">Book a Session</button>
          </Link>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-16 pb-20">
        {['/photo1.webp', '/photo2.jpg', '/photo3.jpg'].map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <img src={src} alt={`Gallery ${i}`} className="w-full h-72 object-cover" />
          </div>
        ))}
      </div>

      {/* About the Photographer */}
      <div className="bg-white text-black py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet the Photographer</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Hi, I'm Dilsha – a passionate photographer sharing stories through powerful images.
          My lens captures the moments that words can't express. Let's create something beautiful together.
        </p>
        <Link to="/about">
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">Learn More</button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} PhotographerBlog. All rights reserved.
      </footer>
    </div>
  );
}

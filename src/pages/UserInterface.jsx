import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PhotographerHomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-['Urbanist'] flex flex-col">
      
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 border-b border-white/10">
        <h1 className="text-xl sm:text-2xl font-bold">Dhanuka Dilshan</h1>
        <nav className="space-x-4 sm:space-x-6 text-xs sm:text-sm uppercase tracking-wide">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center relative mt-16 sm:mt-28">
        <div className="relative w-full h-[60vh] sm:h-[80vh]">
          <img
            src="photo1.webp"
            alt="Photographer"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              Capturing Moments in Monochrome
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 max-w-xl">
              Where black and white speaks louder than colors.
            </p>
          </motion.div>
        </div>

        {/* Gallery Section with Captions */}
        <section className="w-full max-w-6xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: "photo1.webp", caption: "Urban Silence - A black & white street moment todaydfsfsdfsdfhsfuidfhsifjsdnc esdfsfikdfsdf fsdkfsdfsd fsfkscsd fscfsdi" },
            { src: "gallery2.jpg", caption: "Nature's Shadows - Light through trees" },
            { src: "gallery3.jpg", caption: "Portrait of Grace - Studio shoot" },
            { src: "gallery4.jpg", caption: "Abandoned Beauty - Forgotten places" },
            { src: "gallery5.jpg", caption: "Contrast & Calm - Minimal sea view" },
            { src: "gallery6.jpg", caption: "Vintage Vibes - Monochrome lifestyle" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col group">
              <img
                src={item.src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-56 sm:h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-xs sm:text-sm text-gray-400 text-center break-words leading-relaxed px-2">
                {item.caption}
              </p>
            </div>
          ))}
        </section>

        {/* Video Section */}
        <section className="w-full max-w-5xl px-4 py-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Behind the Lens</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/1V_xRb0x9aw"
              title="Photography Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-8 py-4 text-center text-xs sm:text-sm text-gray-500 border-t border-white/10 mt-12">
        &copy; {new Date().getFullYear()} Dhanuka Dilshan. All rights reserved.
      </footer>
    </div>
  );
}

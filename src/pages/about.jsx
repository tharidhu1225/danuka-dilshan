import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* 🔹 Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Dhanuka Dilshan Photography
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Professional Photographer capturing moments that tell your story.
          </p>
        </div>
      </section>

      {/* 🔹 About Me */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
          I’m Dhanuka, a passionate photographer with over 3 years of experience
          capturing life's most beautiful moments. From portraits to landscapes,
          I believe every picture should tell a unique story and evoke genuine emotion.
          My work blends creativity with technical skill to deliver stunning, timeless images.
        </p>
      </section>

      {/* 🔹 Featured Work Gallery */}
      <section className="py-16 bg-white px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/pt1.JPG",
            "/pt2.JPG",
            "/pt3.JPG",
            "/pt4.JPG",
            "/pt6.jpg",
            "/pt5.JPG",
          ].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Featured photo ${i + 1}`}
                className="w-full h-60 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-blue-50 p-8 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">My Mission</h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            To capture authentic and heartfelt moments that people can cherish
            forever, creating images that inspire and connect.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-3xl font-bold text-green-700 mb-4">My Vision</h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            To be recognized as a leading photographer who transforms everyday
            moments into extraordinary memories through creative storytelling.
          </p>
        </div>
      </section>

      {/* 🔹 Meet The Photographer */}
      <section className="py-20 bg-gray-100 px-6 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-16 text-gray-900">Meet the Photographer</h2>
          <div className="bg-white p-10 rounded-3xl shadow-lg flex flex-col items-center max-w-sm mx-auto">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-8 border-indigo-500 shadow-xl mb-8">
              <img
                src="/dilshan.jpg"
                alt="Dhanuka Dilshan"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Dhanuka Dilshan</h3>
            <p className="text-indigo-600 font-medium mb-4 tracking-wide">Photographer & Visual Storyteller</p>
            <p className="text-gray-700 text-center leading-relaxed max-w-xs">
              Capturing life's moments with creativity, passion, and a keen eye for detail.
              Available for portrait, landscape, and event photography.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Call To Action */}
      <section className="py-20 bg-white text-center px-6">
  <div className="max-w-3xl mx-auto">
    <h3 className="text-4xl font-bold mb-6 text-gray-900">
      Ready to create unforgettable memories?
    </h3>
    <p className="text-gray-700 text-lg mb-10 leading-relaxed">
      Whether you're looking for a personal photoshoot, event coverage, or commercial photography,
      I’m here to bring your vision to life. Let’s connect and make magic happen!
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <a
        href="/packages"
        className="px-8 py-3 bg-indigo-600 text-white text-base font-medium rounded-full hover:bg-indigo-700 transition shadow-md"
      >
        View Our Packages
      </a>
      <a
        href="/contact"
        className="px-8 py-3 bg-white border border-indigo-600 text-indigo-600 text-base font-medium rounded-full hover:bg-indigo-50 transition shadow-md"
      >
        Book a Session
      </a>
    </div>
  </div>
</section>

    </div>
  );
}

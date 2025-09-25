import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1470&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Learn more about our journey, mission and the passionate people behind it.
          </p>
        </div>
      </section>

      {/* 🔹 Who We Are */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Dilsha Blog is a vibrant digital platform built with passion and purpose. 
              We aim to bring people closer through stories, ideas, and inspiration.
              Whether you're a reader or a writer, there's always space for your voice here.
            </p>
          </div>
          <img
            src="/logo.jpg"
            alt="Who We Are"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* 🔹 Mission & Vision */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To inspire, educate and entertain people by providing high-quality blogs 
              that connect communities and foster creativity.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading blog platform in Sri Lanka, where every voice is heard 
              and every story matters.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Our Team */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold">John Doe {i}</h4>
                <p className="text-sm text-gray-600">Content Strategist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Call To Action */}
      <section className="py-16 bg-white text-center px-4">
        <h3 className="text-2xl font-semibold mb-4">
          Want to collaborate with us?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Whether you're a brand, a writer, or just someone with a story to tell —
          we’re always excited to hear from new voices.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

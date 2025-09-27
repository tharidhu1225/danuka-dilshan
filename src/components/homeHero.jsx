import { useEffect, useState } from "react";

const backgroundImages = [
  "/img.jpg",
  "/pt3.JPG",
  "/pt1.JPG",
  "/pt2.JPG",
  "/pt4.JPG",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Backgrounds */}
      {backgroundImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6">
  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
    Welcome to <span className="text-indigo-300">Dhanuka Dilshan Photography</span>
  </h1>
  <p className="text-gray-200 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
    Explore stunning visuals, captivating stories, and creative insights from a passionate photographer’s lens.
  </p>
  <a
    href="/blogs"
    className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg"
  >
    Explore Blogs
  </a>
</div>

    </section>
  );
}

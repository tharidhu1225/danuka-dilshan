import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ Images, autoSlide = true, slideInterval = 5000 }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextImage();
    }, slideInterval);
    return () => clearInterval(interval);
  }, [activeImage, autoSlide]);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % Images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + Images.length) % Images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Main Image with Swipe Support */}
      <div
        {...handlers}
        className="relative w-full aspect-square overflow-hidden flex justify-center items-center"
      >
        <img
          src={Images[activeImage]}
          className="w-full h-full object-cover transition-opacity duration-500"
          alt={`Slide ${activeImage + 1}`}
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

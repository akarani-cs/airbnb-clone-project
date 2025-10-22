import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden mt-6">
      {/* Background Image */}
      <img
        src="src\assets\pexels-fabianwiktor-994605.jpg"
        alt="Beautiful landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (slight dark filter for text visibility) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Find your favorite place here!
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light">
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

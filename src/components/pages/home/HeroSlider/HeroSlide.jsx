import React from 'react';

export const HeroSlide = ({ slide, isActive }) => {
  return (
    <div
  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
    isActive ? 'opacity-100' : 'opacity-0'
  }`}
>
  {/* Fullscreen Image */}
  <img
    src={slide.image}
    alt={slide.title}
    className="w-full h-full object-cover"
  />

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-8" />

  {/* Responsive Content */}
  <div className="absolute inset-0 z-20 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mt-20 sm:mt-28 lg:mt-36">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-snug sm:leading-tight">
        {slide.title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed sm:leading-loose">
        {slide.subtitle}
      </p>
    </div>
  </div>
</div>

  );
};
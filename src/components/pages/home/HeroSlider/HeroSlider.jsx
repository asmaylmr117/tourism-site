import React, { useState, useCallback } from 'react';
import { slides } from './data';
import { SlideNavButton } from './SlideNavButton';
import { HeroSlide } from './HeroSlide';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
  {/* Render Slides */}
  {slides.map((slide, index) => (
    <HeroSlide
      key={slide.id}
      slide={slide}
      isActive={index === currentSlide}
    />
  ))}

  {/* Navigation Buttons */}
  <SlideNavButton
    direction="prev"
    onClick={prevSlide}
    
  />
  <SlideNavButton
    direction="next"
    onClick={nextSlide}
   
  />
</div>

  );
};
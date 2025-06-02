import React, { useState } from 'react';
import '../app/home.css';

export default function ImageSlider({ images } ) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-image">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button className="slider-arrow left" onClick={prevSlide}>‹</button>
        <button className="slider-arrow right" onClick={nextSlide}>›</button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from 'react';
import ImageSlider from './ImageSlider';
import '../styles/MultiSlider.css';

export default function MultiSliderSection() {
  const slidesData = [
    ['/images/1.avif', '/images/2.avif', '/images/3.avif'],
    ['/images/1.avif', '/images/2.avif', '/images/3.avif'],
    ['/images/1.avif', '/images/2.avif', '/images/3.avif'],
    ['/images/1.avif', '/images/2.avif', '/images/3.avif'],
    ['/images/1.avif', '/images/2.avif', '/images/3.avif'],
    ['/images/1.avif', '/images/2.avif', '/images/3.avif'],
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <div className="multi-slider-wrapper">
      <div className="arrow-buttons">
        <button onClick={scrollLeft} className="big-arrow">
          <div className="arrow-icon rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="arrow-svg">
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </div>
        </button>
        <button onClick={scrollRight} className="big-arrow">
          <div className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="arrow-svg">
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </div>
        </button>
      </div>

      <div className="multi-slider-container" ref={containerRef}>
        {slidesData.map((images, idx) => (
          <div className="multi-slider-item" key={idx}>
            <ImageSlider images={images} />
          </div>
        ))}
      </div>
    </div>
  );
}

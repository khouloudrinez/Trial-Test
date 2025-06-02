'use client'

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MultiSliderSection  from '../components/MultiSliderSection ' ;
import ImageSlider from '../components/ImageSlider' ;
import './home.css';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ['/images/1.avif', '/images/2.avif', '/images/3.avif'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
  
      <section className={`introText ${scrolled ? 'animate' : ''}`}>
        <p>
          <span>Nestled</span> <span>among</span> <span>the</span> <span>rice</span> <span>fields</span> <span>and</span><br />
          <span>coconut</span> <span>trees</span> <span>of</span> <span>Tabanan,</span><br />
          <span>Ulaman</span> <span>is</span> <span>only</span> <span>20</span> <span>minutes</span> <span>away</span> <span>from</span> <span>the</span><br />
          <span>vibrant</span> <span>town</span> <span>of</span> <span>Canggu.</span>
        </p>
      </section>

      <section className="custom-section">
        <div className="custom-container">
          {/* Left: Slider */}
          <div className="slider-container">
          <ImageSlider images={images} />
          </div>

          {/* Right: Text */}
          <div className="text-content">
            <h5 className="heading">
              <div>An award-winning eco-luxury resort offering</div>
              <div>a unique hideaway experience. Embrace</div>
              <div>authenticity, balance, and harmony with</div>
              <div>nature in a healing, luxurious environment.</div>
            </h5>
            <p className="text">
              We believe nature and luxury can coexist. Ulaman Eco Luxury Resort offers <em>a secluded, lush haven with luxurious amenities and impeccable service</em>. Immerse yourself in traditional Balinese culture and leave feeling renewed, all while minimizing your ecological footprint. Recharge your mind, body, and soul in this unique holistic retreat.
            </p>
            <p>
              <a href="/" className="about-link">
                <span>About Us</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="slider-wrapper">
  <h2 className="slider-heading">
    Discover cozy elegance, where tranquility<br />
    meets Bali’s serene beauty.
  </h2>

  <MultiSliderSection />
</div>

     

    </>
  );
}

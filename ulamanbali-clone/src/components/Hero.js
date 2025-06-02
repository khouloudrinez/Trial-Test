'use client';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const savedImage = localStorage.getItem('backgroundImage');
    if (savedImage) {
      setBgImage(savedImage);
      localStorage.removeItem('backgroundImage');
    }
  }, []);

  return (
    <div className="hero">
      <div className="videoWrapper">
        {bgImage ? (
          <img src={bgImage} alt="Background" className="bgImage" />
        ) : (
          <video autoPlay loop muted playsInline className="video">
            <source src="/videos/Ulaman.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

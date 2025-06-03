'use client';
import { useEffect, useState , useRef} from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [bgImage, setBgImage] = useState('');
  const imageLoaded = useRef(false);

  useEffect(() => {
  
    const selectedImage = localStorage.getItem('selectedImage');
    const backgroundImage = localStorage.getItem('backgroundImage');

    const imageToUse = selectedImage || backgroundImage || '';

    console.log('Retrieved from localStorage:', imageToUse);

    if (imageToUse) {
      setBgImage(imageToUse);
      imageLoaded.current = true;
    }
  }, []);
  
  useEffect(() => {
    if (imageLoaded.current && bgImage) {
      
      localStorage.removeItem('selectedImage');
      localStorage.removeItem('backgroundImage');
    }
  }, [bgImage]);

  return (
    <div className="hero">
      <div className="videoWrapper">
        {bgImage ? (
          <img
            src={bgImage}
            alt="Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
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

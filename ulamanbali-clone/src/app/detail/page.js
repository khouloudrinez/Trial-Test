'use client';
import './detail.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DetailPage() {
  const router = useRouter();
  const [hoveredImage, setHoveredImage] = useState('');
  const [selectedKey, setSelectedKey] = useState('');

  
  const imageMap = {

    Home:'/images/Zjeq0EMTzAJOCirD_hotel.avif',
    Villas:'/images/Zj16TkMTzAJOCrGY_eco-luxury-resort-indonesia.avif',
    packages: '/images/ZjejSkMTzAJOCioK_bali-hotels.avif',
    spa: '/images/ZpISqB5LeNNTxIRB_weddings-in-bali.avif',
    retreats: '/images/ZoafWB5LeNNTwyz5_yoga-shala.avif',
    dine: '/images/Zo56cB5LeNNTw_Xy_ulaman-2.avif',
    experiences: '/images/Zm_oSZm069VX1y8s_tennis-court.avif',
    facilities: '/images/ZmEcAJm069VX1f0e_ulaman-eco-retreat.avif',
    blog: '/images/ZiO2APPdc1huKpxk_eco-resort-bali.avif',
    reviews: '/images/ZiPirfPdc1huKp1l_bali-eco-retreat.avif',
    about: '/images/Zjeq0EMTzAJOCirD_hotel.avif',
  };

  const handleClick = (key) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('backgroundImage', imageMap[key]);
      localStorage.setItem('selectedSection', key.charAt(0).toUpperCase() + key.slice(1)); 
    }
  
    setSelectedKey(key);
    router.push(`/transition?label=${key}`);
  };
  

  const handleHover = (key) => {
    setHoveredImage(imageMap[key]);
  };

  const itemsLeft = ['Home', 'Villas', 'packages', 'spa', 'retreats', 'dine', 'experiences'];
  const itemsRight = ['facilities', 'blog', 'reviews', 'about', 'Contact', 'The Map'];

  const renderItems = (items) => {
    const pairs = [];
    for (let i = 0; i < items.length; i += 2) {
      const first = items[i];
      const second = items[i + 1];
  
      pairs.push(
        <div key={first} className="menu-item-wrapper">
          <span
            className="menu-item"
            onMouseEnter={() => handleHover(first)}
            onClick={() => handleClick(first)}
          >
            {first.charAt(0).toUpperCase() + first.slice(1)}
          </span>
  
          {second && (
            <>
              {' / '}
              <span
                className="menu-item"
                onMouseEnter={() => handleHover(second)}
                onClick={() => handleClick(second)}
              >
                {second.charAt(0).toUpperCase() + second.slice(1)}
              </span>
            </>
          )}
        </div>
      );
    }
    return pairs;
  };
  

  const socialLinks = [
    { name: 'Tripadvisor', url: 'https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Resort-Tabanan_Bali.html' },
    { name: 'Instagram', url: 'https://www.instagram.com/ulamanbali/#' },
    { name: 'Facebook', url: 'https://www.facebook.com/UlamanBali/' },
  ];

  return (
    <div className="detail-wrapper">
      <div className="side-menu left-menu">{renderItems(itemsLeft)}</div>
  
      <div className="detail-container">
        <img
          src={hoveredImage || '/images/Zjeq0EMTzAJOCirD_hotel.avif'}
          alt="Dynamic"
          className="detail-image"
          loading="lazy"
        />
      </div>
  
      <div className="side-menu right-menu">{renderItems(itemsRight)}</div>
  
    
      <div className="social-links">
  {socialLinks.map(({ name, url }, index) => (
    <span key={name}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        {name}
      </a>
      {index < socialLinks.length - 1 && <span className="separator"> / </span>}
    </span>
  ))}
</div>


    </div>
  );
}  
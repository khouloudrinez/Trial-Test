'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import '../styles/Navbar.css';

export default function Navbar({ scrolled }) {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(pathname === '/detail');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMenuOpen(pathname === '/detail');
  }, [pathname]);

  useEffect(() => {
    const section = localStorage.getItem('selectedSection');
    if (section) {
      setActiveSection(section);
    }
  }, [pathname]);

  useEffect(() => {
    const section = localStorage.getItem('selectedSection');
    if (section) {
      setActiveSection(section);
      localStorage.removeItem('selectedSection'); // optional
    }
  }, [pathname]);

  const handleNavItemClick = (e, sectionName) => {
    e.preventDefault();

    if (pathname === '/') {
      const detailData = [
        { title: 'Villas', image: '/images/Zj16TkMTzAJOCrGY_eco-luxury-resort-indonesia.avif' },
        { title: 'Spa', image: '/images/ZpISqB5LeNNTxIRB_weddings-in-bali.avif' },
        { title: 'Dine', image: '/images/Zo56cB5LeNNTw_Xy_ulaman-2.avif' },
        { title: 'Retreats', image: '/images/ZoafWB5LeNNTwyz5_yoga-shala.avif' },
      ];

      const item = detailData.find((d) => d.title === sectionName);
      if (item) {
        localStorage.setItem('selectedSection', item.title);
        localStorage.setItem('selectedImage', item.image);
        setActiveSection(item.title);
        router.push(`/transition?label=${item.title}&image=${item.image}`);

      }
    } else {
      localStorage.setItem('selectedSection', sectionName);
      setActiveSection(sectionName);
      router.push('/detail');
    }
  };

  const navColorClass = pathname === '/detail' ? 'navDetail' : scrolled ? 'navScrolled' : 'navHome';

  return (
    <nav className={`navbar ${navColorClass}`}>
      <button
        className={`menuButton ${menuOpen ? 'open' : ''}`}
        onClick={() => router.push(menuOpen ? '/' : '/detail')}
        aria-label="Toggle menu"
      >
        <div className="lineTop"></div>
        <div className="lineBottom"></div>
      </button>

      <ul className={`navLinks ${navColorClass}`}>
        {['Villas', 'Spa', 'Dine', 'Retreats'].map((section) => (
          <li key={section}>
            <a
              href="#"
              onClick={(e) => handleNavItemClick(e, section)}
              className={activeSection === section ? 'active-link' : ''}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>

      <div className="logoWrapper">
        <img
          src="https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg"
          alt="Ulaman Logo"
          className="logo"
        />
      </div>

      <div className="rightSection">
        <button className="bookButton">Stay With Us</button>
      </div>
    </nav>
  );
}

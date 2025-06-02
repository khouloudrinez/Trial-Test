'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import '../styles/Navbar.css'

export default function Navbar({ scrolled }) {
  const router = useRouter();
  const pathname = usePathname();

  // menuOpen is true if on /detail, false if on /
  const [menuOpen, setMenuOpen] = useState(pathname === '/detail');

  // When pathname changes, update menuOpen accordingly
  useEffect(() => {
    setMenuOpen(pathname === '/detail');
  }, [pathname]);

  const toggleMenu = () => {
    if (menuOpen) {
     
      router.push('/');
    } else {
      
      router.push('/detail');
    }

  };

  const navColorClass = pathname === '/detail' ? 'navDetail' : scrolled ? 'navScrolled' : 'navHome';

  return (
    <nav className={`navbar ${navColorClass}`}>
      <button
        className={`menuButton ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="lineTop"></div>
        <div className="lineBottom"></div>
      </button>

      <ul className={`navLinks ${navColorClass}`}>
        <li><a href="#">Villas</a></li>
        <li><a href="#">Spa</a></li>
        <li><a href="#">Dine</a></li>
        <li><a href="#">Retreats</a></li>
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

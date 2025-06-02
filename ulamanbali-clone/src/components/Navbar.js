'use client';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <button
        className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={styles.lineTop}></div>
        <div className={styles.lineBottom}></div>
      </button>

      <ul className={styles.navLinks}>
        <li><a href="#">Villas</a></li>
        <li><a href="#">Spa</a></li>
        <li><a href="#">Dine</a></li>
        <li><a href="#">Retreats</a></li>
      </ul>

      <div className={styles.logoWrapper}>
        <img
          src="https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg"
          alt="Ulaman Logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.rightSection}>
        <button className={styles.bookButton}>Stay With Us</button>
      </div>
    </nav>
  );
}

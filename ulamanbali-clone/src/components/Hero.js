// src/app/components/Hero.js
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.videoWrapper}>
     <video
  autoPlay
  loop
  muted
  playsInline
  className={styles.video}
>
  <source src="/videos/Ulaman.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
     
    </div>
  );
}

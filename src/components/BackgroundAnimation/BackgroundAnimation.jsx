'use client';

import { useEffect } from 'react';
import styles from './BackgroundAnimation.module.scss';

const BackgroundAnimation = () => {
  useEffect(() => {
    const starsContainer = document.getElementById('starsContainer');

    if (starsContainer) {
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = styles.star;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 2}s`; // Затримка від 0 до 2 секунд
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div className={styles.starBackground} id="starsContainer">
      {[...Array(50)].map((_, index) => (
        <div key={index} className={styles.star}></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;

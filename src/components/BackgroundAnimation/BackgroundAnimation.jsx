'use client';

import { useEffect, useRef } from 'react';
import styles from './BackgroundAnimation.module.scss';

const BackgroundAnimation = () => {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;

    if (starsContainer) {
      const addCometEffect = () => {
        const stars = starsContainer.getElementsByClassName(styles.star);
        const randomIndex = Math.floor(Math.random() * stars.length);

        Array.from(stars).forEach((star) =>
          star.classList.remove(styles.cometEffect)
        );

        stars[randomIndex].classList.add(styles.cometEffect);
      };

      const initializeStars = () => {
        for (let i = 0; i < 50; i++) {
          const star = document.createElement('div');
          star.className = styles.star;
          star.style.left = `${Math.random() * 100}vw`;
          star.style.top = `${Math.random() * 100}vh`;
          star.style.animationDelay = `${Math.random() * 5}s`; // Затримка від 0 до 10 секунд
          starsContainer.appendChild(star);
        }
      };

      initializeStars();
      addCometEffect();

      const intervalId = setInterval(addCometEffect, 10000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div
      className={styles.starBackground}
      id="starsContainer"
      ref={starsContainerRef}
    ></div>
  );
};

export default BackgroundAnimation;

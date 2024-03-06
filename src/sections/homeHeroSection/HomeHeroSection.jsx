'use client';

import { useContext } from 'react';
import { SiteContext } from '@/context/siteContext';
import OrderBtn from '@/components/Buttons/OrderBtn/OrderBtn';
import styles from './HomeHeroSection.module.scss';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';

const HomeHeroSection = () => {
  const { openModal } = useContext(SiteContext);

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <BackgroundAnimation />

          <h1 className={styles.title}>Empowering your success</h1>
          <p className={styles.text}>
            with team <span className={styles.textItem}>Webevery</span>
          </p>
          <OrderBtn onClick={openModal} type="submit" title="Order" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

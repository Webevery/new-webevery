import OrderBtn from '@/components/Buttons/OrderBtn/OrderBtn';
import styles from './HomeHeroSection.module.scss';

const HomeHeroSection = () => {
  return (
    <section>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Empowering your success</h1>
          <p className={styles.text}>
            with team <span className={styles.textItem}>Webevery</span>
          </p>
          <OrderBtn />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
